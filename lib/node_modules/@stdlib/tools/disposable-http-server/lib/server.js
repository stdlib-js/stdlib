/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var path = require( 'path' );
var logger = require( 'debug' );
var objectKeys = require( '@stdlib/utils/keys' );
var createServer = require( '@stdlib/net/http-server' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var openURL = require( '@stdlib/utils/open-url' );
var noop = require( '@stdlib/utils/noop' );
var Buffer = require( '@stdlib/buffer/ctor' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var nextTick = require( '@stdlib/utils/next-tick' );
var validate = require( './validate.js' );
var serverOpts = require( './opts.js' );
var createStore = require( './connections_store.js' );


// VARIABLES //

var debug = logger( 'disposable-http-server' );


// MAIN //

/**
* Creates a disposable HTTP server.
*
* @param {Options} options - server options
* @param {(Buffer|string)} [options.html] - HTML content to serve
* @param {(Buffer|string)} [options.javascript] - JavaScript to serve
* @param {NonNegativeInteger} [options.port=0] - server port
* @param {NonNegativeInteger} [options.maxport] - max server port
* @param {string} [options.hostname] - server hostname
* @param {string} [options.address="0.0.0.0"] - server address
* @param {boolean} [options.open=false] - boolean indicating whether to launch a web browser
* @param {Callback} [clbk] - callback to invoke upon creating a server
* @throws {TypeError} must provide valid options
* @throws {Error} error encountered when starting server
*
* @example
* var opts = {
*     'html': '<h1>Beep</h1>'
* };
*
* httpServer( opts, onReady );
*
* function onReady( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/
function httpServer( options ) {
	var connections;
	var isClosing;
	var server;
	var sopts;
	var fpath;
	var clbk;
	var boot;
	var opts;
	var err;

	opts = {};
	if ( arguments.length > 1 ) {
		clbk = arguments[ 1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
	} else {
		clbk = noop;
	}
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	// If provided HTML and/or JavaScript as `strings`, convert to `buffers`...
	if ( opts.html && isString( opts.html ) ) {
		opts.html = string2buffer( opts.html );
	}
	if ( opts.javascript && isString( opts.javascript ) ) {
		opts.javascript = string2buffer( opts.javascript );
	}
	// Extract server options:
	sopts = serverOpts( options );

	debug( 'Serving provided content.' );
	if ( !opts.html ) {
		debug( 'No HTML content provided.' );
		debug( 'Loading a boilerplate HTML page...' );
		fpath = path.resolve( __dirname, '../static/index.html' );
		opts.html = readFileSync( fpath );
	}
	// Create a function to boot a server...
	boot = createServer( sopts, requestListener );

	debug( 'Starting server...' );
	boot( onServer );

	// Initialize a connections store:
	connections = createStore();

	/**
	* Callback invoked upon creating a server.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Server} _server - server instance
	* @throws {Error} error encountered when starting server
	*/
	function onServer( error, _server ) {
		var addr;
		if ( error ) {
			throw error;
		}
		debug( 'Server started.' );
		server = _server;
		server.on( 'connection', onConnection );
		server.once( 'close', onClose );
		if ( opts.open ) {
			addr = server.address();
			openURL( 'http://'+addr.address+':'+addr.port );
		}
		clbk( null, server );
	}

	/**
	* Callback invoked upon receiving a socket connection.
	*
	* @private
	* @param {Socket} socket - socket connection
	*/
	function onConnection( socket ) {
		var key = socket.remoteAddress + ':' + socket.remotePort;

		debug( 'Received a socket connection: %s.', key );
		connections[ key ] = socket;
		socket.on( 'close', onClose );

		/**
		* Callback invoked once a socket connection closes.
		*
		* @private
		*/
		function onClose() {
			debug( 'Socket connection closed: %s.', key );
			delete connections[ key ];
		}
	}

	/**
	* Callback invoked upon receiving an HTTP request for provided content.
	*
	* @private
	* @param {IncomingMessage} request - HTTP request object
	* @param {ServerResponse} response - HTTP response object
	* @returns {void}
	*/
	function requestListener( request, response ) {
		debug( 'Received a request for %s', request.url );

		if ( isClosing ) {
			return unavailable( request, response );
		}
		if ( request.url === '/bundle.js' ) {
			nextTick( onTick( sendJavaScript ) );
			return response.once( 'finish', onFinish );
		}
		if ( request.url !== '/' && request.url !== '/index.html' ) {
			return notFound( request, response );
		}
		nextTick( onTick( sendHTML ) );
		if ( !opts.javascript ) {
			response.once( 'finish', onFinish );
		}

		/**
		* Returns a callback to return a response on the next tick. Note that this is a workaround for a race condition bug in Node v0.10 (see [nodejs/node#1309][1]).
		*
		* [1]: https://github.com/nodejs/node/issues/1309
		*
		* @private
		* @param {Function} fcn - response function
		* @returns {Callback} callback to invoke on next tick
		*/
		function onTick( fcn ) {
			return next;

			/**
			* Callback to return on a response.
			*
			* @private
			*/
			function next() {
				fcn( request, response );
			}
		}
	}

	/**
	* Sends a 404 response.
	*
	* @private
	* @param {IncomingMessage} request - HTTP request object
	* @param {ServerResponse} response - HTTP response object
	*/
	function notFound( request, response ) {
		debug( 'Sending 404 response...' );
		response.statusCode = 404;
		response.end();
	}

	/**
	* Sends a 503 response.
	*
	* @private
	* @param {IncomingMessage} request - HTTP request object
	* @param {ServerResponse} response - HTTP response object
	*/
	function unavailable( request, response ) {
		debug( 'Sending 503 response...' );
		response.statusCode = 503;
		response.end();
	}

	/**
	* Sends HTML content in response to a client request.
	*
	* @private
	* @param {IncomingMessage} request - HTTP request object
	* @param {ServerResponse} response - HTTP response object
	*/
	function sendHTML( request, response ) {
		debug( 'Sending HTML...' );
		response.statusCode = 200;
		response.setHeader( 'Content-Type', 'text/html' );

		// TODO: we have to convert to a `string` because Node v0.10 requires a `string`. Subsequent versions support providing a `Buffer` object. Ideally, we would sniff `Buffer` support and only convert to a `string` if necessary.
		response.setHeader( 'Content-Length', Buffer.byteLength( opts.html.toString() ) );
		response.end( opts.html );
	}

	/**
	* Sends JavaScript content in response to a client request.
	*
	* @private
	* @param {IncomingMessage} request - HTTP request object
	* @param {ServerResponse} response - HTTP response object
	*/
	function sendJavaScript( request, response ) {
		debug( 'Sending JavaScript...' );
		response.statusCode = 200;
		response.setHeader( 'Content-Type', 'text/javascript' );

		// TODO: we have to convert to a `string` because Node v0.10 requires a `string`. Subsequent versions support providing a `Buffer` object. Ideally, we would sniff `Buffer` support and only convert to a `string` if necessary.
		response.setHeader( 'Content-Length', Buffer.byteLength( opts.javascript.toString() ) );
		response.end( opts.javascript );
	}

	/**
	* Callback invoked once the server should close.
	*
	* @private
	*/
	function onFinish() {
		debug( 'Finished serving content.' );
		isClosing = true;

		debug( 'Closing the server...' );
		server.close();

		setTimeout( destroyConnections, 5000 );
	}

	/**
	* Destroys all connections.
	*
	* @private
	*/
	function destroyConnections() {
		var keys;
		var i;

		debug( 'Destroying all connections...' );
		keys = objectKeys( connections );
		for ( i = 0; i < keys.length; i++ ) {
			debug( 'Destroying connection %s...', keys[i] );
			connections[ keys[i] ].destroy();
		}
	}

	/**
	* Callback invoked once a server closes.
	*
	* @private
	*/
	function onClose() {
		debug( 'Server closed.' );
	}
}


// EXPORTS //

module.exports = httpServer;

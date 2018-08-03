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
var cwd = require( '@stdlib/process/cwd' );
var createServer = require( '@stdlib/net/http-server' );
var isFunction = require( '@stdlib/assert/is-function' );
var openURL = require( '@stdlib/utils/open-url' );
var noop = require( '@stdlib/utils/noop' );
var validate = require( './validate.js' );
var serverOpts = require( './opts.js' );
var requestListener = require( './request_listener.js' );


// VARIABLES //

var debug = logger( 'simple-http-server' );


// MAIN //

/**
* Creates a simple HTTP server. The implementation takes inspiration from Python's [SimpleHTTPServer][python-simplehttpserver].
*
* [python-simplehttpserver]: https://docs.python.org/2/library/simplehttpserver.html
*
* @param {Options} [options] - server options
* @param {string} [options.dir] - directory from which to serve files
* @param {NonNegativeInteger} [options.port=0] - server port
* @param {NonNegativeInteger} [options.maxport] - max server port
* @param {string} [options.hostname] - server hostname
* @param {string} [options.address="0.0.0.0"] - server address
* @param {boolean} [options.open=false] - indicates whether to launch a web browser
* @param {Callback} [clbk] - callback to invoke upon creating a server
* @throws {TypeError} must provide valid options
* @throws {Error} error encountered when starting server
*
* @example
* var opts = {
*     'dir': './',
*     'port': 7331,
*     'hostname': 'localhost',
*     'open': false
* };
* httpServer( opts, onReady );
*
* function onReady( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     server.close();
* }
*/
function httpServer() {
	var options;
	var server;
	var sopts;
	var clbk;
	var boot;
	var opts;
	var err;

	opts = {};
	if ( arguments.length === 1 ) {
		if ( isFunction( arguments[0] ) ) {
			clbk = arguments[ 0 ];
		} else {
			options = arguments[ 0 ];
			err = validate( opts, options );
		}
	} else if ( arguments.length > 1 ) {
		options = arguments[ 0 ];
		clbk = arguments[ 1 ];
		if ( !isFunction( clbk ) ) {
			throw new TypeError( 'invalid argument. Callback argument must be a function. Value: `' + clbk + '`.' );
		}
		err = validate( opts, options );
	}
	if ( err ) {
		throw err;
	}
	if ( clbk === void 0 ) {
		clbk = noop;
	}
	if ( opts.dir ) {
		opts.dir = path.resolve( cwd(), opts.dir );
	}
	debug( 'Serving directory: %s', opts.dir );

	// Extract server options...
	if ( options ) {
		sopts = serverOpts( options );
	} else {
		sopts = {};
	}
	// Create a function to boot a server...
	boot = createServer( sopts, requestListener( opts ) );

	debug( 'Starting server...' );
	boot( onServer );

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
		server.once( 'close', onClose );
		if ( opts.open ) {
			addr = server.address();
			openURL( 'http://'+addr.address+':'+addr.port );
		}
		clbk( null, server );
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

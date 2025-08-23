/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var proc = require( 'process' );
var http2 = require( 'http2' ); // eslint-disable-line node/no-unsupported-features/node-builtins
var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var http2ServerFactory = require( './../lib' );

/**
* Callback invoked once a server is ready to receive HTTP requests.
*
* @private
* @param {(Error|null)} error - error object
* @param {Server} server - server instance
*/
function done( error ) {
	var client;
	var req;
	if ( error ) {
		throw error;
	}
	client = http2.connect( 'https://localhost:7331', {
		'ca': readFileSync( resolve( __dirname, 'localhost-cert.pem' ) )
	});
	req = client.request({
		':path': '/beep/boop'
	});
	req.on( 'response', onResponse );
	req.end();

	/**
	* Callback invoked upon receiving an HTTP response.
	*
	* @private
	*/
	function onResponse() {
		console.log( 'Success!' );
		client.close();
		proc.exit( 0 );
	}
}

/**
* Callback invoked upon receiving an HTTP request.
*
* @private
* @param {Object} request - HTTP request object
* @param {Object} response - HTTP response object
*/
function onRequest( request, response ) {
	console.log( request.url );
	response.end( 'OK' );
}

// Specify server options...
var opts = {
	'port': 7331,
	'maxport': 9999,
	'hostname': 'localhost',
	'allowHTTP1': true,
	'cert': readFileSync( resolve( __dirname, 'localhost-cert.pem' ) ),
	'key': readFileSync( resolve( __dirname, 'localhost-privkey.pem' ) )
};

// Create a function for creating an HTTP/2 server...
var http2Server = http2ServerFactory( opts, onRequest );

// Create a server:
http2Server( done );

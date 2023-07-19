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

var proc = require( 'process' );
var http = require( 'http' );
var httpServer = require( './../lib' );

/**
* Callback invoked once a server is ready to receive HTTP requests.
*
* @private
* @param {(Error|null)} error - error object
* @param {Server} server - server instance
*/
function done( error ) {
	if ( error ) {
		throw error;
	}
	http.get( 'http://127.0.0.1:7331/beep/boop', onResponse );
}

/**
* Callback invoked upon receiving an HTTP response.
*
* @private
*/
function onResponse() {
	console.log( 'Success!' );
	proc.exit( 0 );
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
	'hostname': 'localhost'
};

// Create a function for creating an HTTP server...
var createServer = httpServer( opts, onRequest );

// Create a server:
createServer( done );

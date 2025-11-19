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

// MODULES //

var resolve = require( 'path' ).resolve;
var http2 = require( 'http2' ); // eslint-disable-line node/no-unsupported-features/node-builtins
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// VARIABLES //

var CERT = readFileSync( resolve( __dirname, 'localhost-cert.pem' ) );
var KEY = readFileSync( resolve( __dirname, 'localhost-privkey.pem' ) );


// MAIN //

/**
* Creates an HTTP/2 server.
*
* @private
* @param {NonNegativeInteger} port - server port
* @param {Callback} done - callback to invoke when a server is ready to receive HTTP requests
* @returns {Server} HTTP/2 server
*/
function createServer( port, done ) {
	var server = http2.createSecureServer({
		'cert': CERT,
		'key': KEY,
		'allowHTTP1': true
	});
	server.listen( port, '127.0.0.1', done );
	return server;
}


// EXPORTS //

module.exports = createServer;

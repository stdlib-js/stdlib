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

/**
* Create an HTTP/2 server.
*
* @module @stdlib/net/http2-secure-server
*
* @example
* var resolve = require( 'path' ).resolve;
* var readFileSync = require( '@stdlib/fs/read-file' ).sync;
* var http2ServerFactory = require( '@stdlib/net/http2-secure-server' );
*
* var opts = {
*     'port': 7331,
*     'address': 'localhost',
*     'cert': readFileSync( resolve( __dirname, '..', 'examples', 'localhost-cert.pem' ) ),
*     'key': readFileSync( resolve( __dirname, '..', 'examples', 'localhost-privkey.pem' ) )
* };
*
* function done( error, server ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( 'Success!' );
*     server.close();
* }
*
* var http2Server = http2ServerFactory( opts );
* http2Server( done );
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils/try-require' );
var isError = require( '@stdlib/assert/is-error' );
var polyfill = require( './polyfill.js' );


// MAIN //

var main;
var tmp = tryRequire( join( __dirname, './main.js' ) );
if ( isError( tmp ) ) {
	main = polyfill;
} else {
	main = tmp;
}


// EXPORTS //

module.exports = main;

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

var logger = require( 'debug' );
var string2buffer = require( '@stdlib/buffer/from-string' );


// VARIABLES //

var debug = logger( 'simple-http-server:404' );
var message = string2buffer( 'File not found' );


// MAIN //

/**
* Returns a `404` response.
*
* @private
* @param {IncomingMessage} request - HTTP request object
* @param {ServerResponse} response - HTTP response object
*/
function notFound( request, response ) {
	debug( 'Sending 404 response...' );
	response.statusCode = 404;
	response.setHeader( 'Content-Type', 'text/plain' );
	response.setHeader( 'Content-Length', message.length );
	response.end( message );
}


// EXPORTS //

module.exports = notFound;

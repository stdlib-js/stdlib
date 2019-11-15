/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var join = require( 'path' ).join;
var httpServer = require( './../lib' );

var opts = {
	'port': 3000,
	'address': '127.0.0.1',
	'logger': true,
	'root': join( __dirname, 'fixtures' ),
	'template': '<html><body>Fragment: {{ FRAGMENT }}</body></html>'
};

var createServer = httpServer( opts );

function done( error, fastify ) {
	if ( error ) {
		console.error( error.message );
		return;
	}
	console.log( 'Success!' );
	console.log( fastify.server.address() );
	fastify.server.close();
}

createServer( done );

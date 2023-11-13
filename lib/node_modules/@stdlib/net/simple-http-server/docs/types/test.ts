/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import httpServer = require( './index' );

/**
* Callback invoked after creating a server.
*
* @param error - error object or null
* @param server - server object
*/
function done( error: Error | null, server: any ) {
	if ( error ) {
		throw error;
	}
	server.close();
}


// TESTS //

// The function returns a function to create a server...
{
	httpServer(); // $ExpectType void
	httpServer( done ); // $ExpectType void
	httpServer( { 'port': 80 }, done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an options object or callback function...
{
	httpServer( 'abc' ); // $ExpectError
	httpServer( true ); // $ExpectError
	httpServer( false ); // $ExpectError
	httpServer( 5 ); // $ExpectError
	httpServer( [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	httpServer( {}, false ); // $ExpectError
	httpServer( {}, true ); // $ExpectError
	httpServer( {}, 123 ); // $ExpectError
	httpServer( {}, null ); // $ExpectError
	httpServer( {}, 'abc' ); // $ExpectError
	httpServer( {}, [] ); // $ExpectError
	httpServer( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `port` option which is not a number...
{
	httpServer( { 'port': 'abc' }, done ); // $ExpectError
	httpServer( { 'port': true }, done ); // $ExpectError
	httpServer( { 'port': false }, done ); // $ExpectError
	httpServer( { 'port': null }, done ); // $ExpectError
	httpServer( { 'port': [] }, done ); // $ExpectError
	httpServer( { 'port': {} }, done ); // $ExpectError
	httpServer( { 'port': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxport` option which is not a number...
{
	httpServer( { 'maxport': 'abc' }, done ); // $ExpectError
	httpServer( { 'maxport': true }, done ); // $ExpectError
	httpServer( { 'maxport': false }, done ); // $ExpectError
	httpServer( { 'maxport': null }, done ); // $ExpectError
	httpServer( { 'maxport': [] }, done ); // $ExpectError
	httpServer( { 'maxport': {} }, done ); // $ExpectError
	httpServer( { 'maxport': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided a `hostname` option which is not a string...
{
	httpServer( { 'hostname': 123 }, done ); // $ExpectError
	httpServer( { 'hostname': true }, done ); // $ExpectError
	httpServer( { 'hostname': false }, done ); // $ExpectError
	httpServer( { 'hostname': null }, done ); // $ExpectError
	httpServer( { 'hostname': [] }, done ); // $ExpectError
	httpServer( { 'hostname': {} }, done ); // $ExpectError
	httpServer( { 'hostname': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an `address` option which is not a string...
{
	httpServer( { 'address': 123 }, done ); // $ExpectError
	httpServer( { 'address': true }, done ); // $ExpectError
	httpServer( { 'address': false }, done ); // $ExpectError
	httpServer( { 'address': null }, done ); // $ExpectError
	httpServer( { 'address': [] }, done ); // $ExpectError
	httpServer( { 'address': {} }, done ); // $ExpectError
	httpServer( { 'address': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an `open` option which is not a boolean...
{
	httpServer( { 'open': 123 }, done ); // $ExpectError
	httpServer( { 'open': 'abc' }, done ); // $ExpectError
	httpServer( { 'open': null }, done ); // $ExpectError
	httpServer( { 'open': [] }, done ); // $ExpectError
	httpServer( { 'open': {} }, done ); // $ExpectError
	httpServer( { 'open': ( x: number ): number => x }, done ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	httpServer( {}, done, {} ); // $ExpectError
}

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

import httpServerFactory = require( './index' );

/**
* Request callback.
*
* @param request - request object
* @param response - response object
*/
function requestListener( request: any, response: any ) {
	if ( !request ) {
		throw Error( 'Request is missing...' );
	}
	response.end( 'OK' );
}

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
	httpServerFactory(); // $ExpectType httpServer
	httpServerFactory( requestListener ); // $ExpectType httpServer
	httpServerFactory( { 'port': 80 }, requestListener ); // $ExpectType httpServer

	const httpServer = httpServerFactory(); // $ExpectType httpServer
	httpServer( done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an options object or callback function...
{
	httpServerFactory( 'abc' ); // $ExpectError
	httpServerFactory( true ); // $ExpectError
	httpServerFactory( false ); // $ExpectError
	httpServerFactory( 5 ); // $ExpectError
	httpServerFactory( [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	httpServerFactory( {}, false ); // $ExpectError
	httpServerFactory( {}, true ); // $ExpectError
	httpServerFactory( {}, 123 ); // $ExpectError
	httpServerFactory( {}, null ); // $ExpectError
	httpServerFactory( {}, 'abc' ); // $ExpectError
	httpServerFactory( {}, [] ); // $ExpectError
	httpServerFactory( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `port` option which is not a number...
{
	httpServerFactory( { 'port': 'abc' }, requestListener ); // $ExpectError
	httpServerFactory( { 'port': true }, requestListener ); // $ExpectError
	httpServerFactory( { 'port': false }, requestListener ); // $ExpectError
	httpServerFactory( { 'port': null }, requestListener ); // $ExpectError
	httpServerFactory( { 'port': [] }, requestListener ); // $ExpectError
	httpServerFactory( { 'port': {} }, requestListener ); // $ExpectError
	httpServerFactory( { 'port': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxport` option which is not a number...
{
	httpServerFactory( { 'maxport': 'abc' }, requestListener ); // $ExpectError
	httpServerFactory( { 'maxport': true }, requestListener ); // $ExpectError
	httpServerFactory( { 'maxport': false }, requestListener ); // $ExpectError
	httpServerFactory( { 'maxport': null }, requestListener ); // $ExpectError
	httpServerFactory( { 'maxport': [] }, requestListener ); // $ExpectError
	httpServerFactory( { 'maxport': {} }, requestListener ); // $ExpectError
	httpServerFactory( { 'maxport': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a `hostname` option which is not a string...
{
	httpServerFactory( { 'hostname': 123 }, requestListener ); // $ExpectError
	httpServerFactory( { 'hostname': true }, requestListener ); // $ExpectError
	httpServerFactory( { 'hostname': false }, requestListener ); // $ExpectError
	httpServerFactory( { 'hostname': null }, requestListener ); // $ExpectError
	httpServerFactory( { 'hostname': [] }, requestListener ); // $ExpectError
	httpServerFactory( { 'hostname': {} }, requestListener ); // $ExpectError
	httpServerFactory( { 'hostname': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided an `address` option which is not a string...
{
	httpServerFactory( { 'address': 123 }, requestListener ); // $ExpectError
	httpServerFactory( { 'address': true }, requestListener ); // $ExpectError
	httpServerFactory( { 'address': false }, requestListener ); // $ExpectError
	httpServerFactory( { 'address': null }, requestListener ); // $ExpectError
	httpServerFactory( { 'address': [] }, requestListener ); // $ExpectError
	httpServerFactory( { 'address': {} }, requestListener ); // $ExpectError
	httpServerFactory( { 'address': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	httpServerFactory( {}, requestListener, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is invoked with an argument that is not a callback function...
{
	const httpServer = httpServerFactory();
	httpServer( 'abc' ); // $ExpectError
	httpServer( 123 ); // $ExpectError
	httpServer( true ); // $ExpectError
	httpServer( false ); // $ExpectError
	httpServer( null ); // $ExpectError
	httpServer( [] ); // $ExpectError
	httpServer( {} ); // $ExpectError
	httpServer( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is invoked with an invalid number of arguments...
{
	const httpServer = httpServerFactory();
	httpServer(); // $ExpectError
	httpServer( done, {} ); // $ExpectError
}

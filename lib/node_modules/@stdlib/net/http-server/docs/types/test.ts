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
	httpServer(); // $ExpectType createServer
	httpServer( requestListener ); // $ExpectType createServer
	httpServer( { 'port': 80 }, requestListener ); // $ExpectType createServer

	const createServer = httpServer(); // $ExpectType createServer
	createServer( done ); // $ExpectType void
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
	httpServer( { 'port': 'abc' }, requestListener ); // $ExpectError
	httpServer( { 'port': true }, requestListener ); // $ExpectError
	httpServer( { 'port': false }, requestListener ); // $ExpectError
	httpServer( { 'port': null }, requestListener ); // $ExpectError
	httpServer( { 'port': [] }, requestListener ); // $ExpectError
	httpServer( { 'port': {} }, requestListener ); // $ExpectError
	httpServer( { 'port': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxPort` option which is not a number...
{
	httpServer( { 'maxPort': 'abc' }, requestListener ); // $ExpectError
	httpServer( { 'maxPort': true }, requestListener ); // $ExpectError
	httpServer( { 'maxPort': false }, requestListener ); // $ExpectError
	httpServer( { 'maxPort': null }, requestListener ); // $ExpectError
	httpServer( { 'maxPort': [] }, requestListener ); // $ExpectError
	httpServer( { 'maxPort': {} }, requestListener ); // $ExpectError
	httpServer( { 'maxPort': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a `hostname` option which is not a string...
{
	httpServer( { 'hostname': 123 }, requestListener ); // $ExpectError
	httpServer( { 'hostname': true }, requestListener ); // $ExpectError
	httpServer( { 'hostname': false }, requestListener ); // $ExpectError
	httpServer( { 'hostname': null }, requestListener ); // $ExpectError
	httpServer( { 'hostname': [] }, requestListener ); // $ExpectError
	httpServer( { 'hostname': {} }, requestListener ); // $ExpectError
	httpServer( { 'hostname': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided an `address` option which is not a string...
{
	httpServer( { 'address': 123 }, requestListener ); // $ExpectError
	httpServer( { 'address': true }, requestListener ); // $ExpectError
	httpServer( { 'address': false }, requestListener ); // $ExpectError
	httpServer( { 'address': null }, requestListener ); // $ExpectError
	httpServer( { 'address': [] }, requestListener ); // $ExpectError
	httpServer( { 'address': {} }, requestListener ); // $ExpectError
	httpServer( { 'address': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	httpServer( {}, requestListener, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is invoked with an argument that is not a callback function...
{
	const createServer = httpServer();
	createServer( 'abc' ); // $ExpectError
	createServer( 123 ); // $ExpectError
	createServer( true ); // $ExpectError
	createServer( false ); // $ExpectError
	createServer( null ); // $ExpectError
	createServer( [] ); // $ExpectError
	createServer( {} ); // $ExpectError
	createServer( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is invoked with an invalid number of arguments...
{
	const createServer = httpServer();
	createServer(); // $ExpectError
	createServer( done, {} ); // $ExpectError
}

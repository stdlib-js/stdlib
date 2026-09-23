/*
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

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import http2ServerFactory = require( './index' );

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
	const opts = {
		'port': 80,
		'cert': 'foo',
		'key': 'bar'
	};
	http2ServerFactory( opts, requestListener ); // $ExpectType http2Server

	const http2Server = http2ServerFactory( opts ); // $ExpectType http2Server
	http2Server( done ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not a valid options object...
{
	http2ServerFactory( 'abc' ); // $ExpectError
	http2ServerFactory( true ); // $ExpectError
	http2ServerFactory( false ); // $ExpectError
	http2ServerFactory( 5 ); // $ExpectError
	http2ServerFactory( null ); // $ExpectError
	http2ServerFactory( void 0 ); // $ExpectError
	http2ServerFactory( [] ); // $ExpectError
	http2ServerFactory( {} ); // $ExpectError
	http2ServerFactory( ( x: number ): number => x ); // $ExpectError

	http2ServerFactory( 'abc', requestListener ); // $ExpectError
	http2ServerFactory( true, requestListener ); // $ExpectError
	http2ServerFactory( false, requestListener ); // $ExpectError
	http2ServerFactory( 5, requestListener ); // $ExpectError
	http2ServerFactory( null, requestListener ); // $ExpectError
	http2ServerFactory( void 0, requestListener ); // $ExpectError
	http2ServerFactory( [], requestListener ); // $ExpectError
	http2ServerFactory( {}, requestListener ); // $ExpectError
	http2ServerFactory( ( x: number ): number => x, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	const opts = {
		'port': 80,
		'cert': 'foo',
		'key': 'bar'
	};

	http2ServerFactory( opts, false ); // $ExpectError
	http2ServerFactory( opts, true ); // $ExpectError
	http2ServerFactory( opts, 123 ); // $ExpectError
	http2ServerFactory( opts, null ); // $ExpectError
	http2ServerFactory( opts, 'abc' ); // $ExpectError
	http2ServerFactory( opts, [] ); // $ExpectError
	http2ServerFactory( opts, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `port` option which is not a number...
{
	http2ServerFactory( { 'port': 'abc' }, requestListener ); // $ExpectError
	http2ServerFactory( { 'port': true }, requestListener ); // $ExpectError
	http2ServerFactory( { 'port': false }, requestListener ); // $ExpectError
	http2ServerFactory( { 'port': null }, requestListener ); // $ExpectError
	http2ServerFactory( { 'port': [] }, requestListener ); // $ExpectError
	http2ServerFactory( { 'port': {} }, requestListener ); // $ExpectError
	http2ServerFactory( { 'port': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a `maxport` option which is not a number...
{
	http2ServerFactory( { 'maxport': 'abc' }, requestListener ); // $ExpectError
	http2ServerFactory( { 'maxport': true }, requestListener ); // $ExpectError
	http2ServerFactory( { 'maxport': false }, requestListener ); // $ExpectError
	http2ServerFactory( { 'maxport': null }, requestListener ); // $ExpectError
	http2ServerFactory( { 'maxport': [] }, requestListener ); // $ExpectError
	http2ServerFactory( { 'maxport': {} }, requestListener ); // $ExpectError
	http2ServerFactory( { 'maxport': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided a `hostname` option which is not a string...
{
	http2ServerFactory( { 'hostname': 123 }, requestListener ); // $ExpectError
	http2ServerFactory( { 'hostname': true }, requestListener ); // $ExpectError
	http2ServerFactory( { 'hostname': false }, requestListener ); // $ExpectError
	http2ServerFactory( { 'hostname': null }, requestListener ); // $ExpectError
	http2ServerFactory( { 'hostname': [] }, requestListener ); // $ExpectError
	http2ServerFactory( { 'hostname': {} }, requestListener ); // $ExpectError
	http2ServerFactory( { 'hostname': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided an `address` option which is not a string...
{
	http2ServerFactory( { 'address': 123 }, requestListener ); // $ExpectError
	http2ServerFactory( { 'address': true }, requestListener ); // $ExpectError
	http2ServerFactory( { 'address': false }, requestListener ); // $ExpectError
	http2ServerFactory( { 'address': null }, requestListener ); // $ExpectError
	http2ServerFactory( { 'address': [] }, requestListener ); // $ExpectError
	http2ServerFactory( { 'address': {} }, requestListener ); // $ExpectError
	http2ServerFactory( { 'address': ( x: number ): number => x }, requestListener ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	const opts = {
		'cert': 'foo',
		'key': 'bar'
	};

	http2ServerFactory(); // $ExpectError
	http2ServerFactory( opts, requestListener, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is invoked with an argument that is not a callback function...
{
	const opts = {
		'cert': 'foo',
		'key': 'bar'
	};
	const http2Server = http2ServerFactory( opts );

	http2Server( 'abc' ); // $ExpectError
	http2Server( 123 ); // $ExpectError
	http2Server( true ); // $ExpectError
	http2Server( false ); // $ExpectError
	http2Server( null ); // $ExpectError
	http2Server( [] ); // $ExpectError
	http2Server( {} ); // $ExpectError
	http2Server( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is invoked with an invalid number of arguments...
{
	const opts = {
		'cert': 'foo',
		'key': 'bar'
	};
	const http2Server = http2ServerFactory( opts );

	http2Server(); // $ExpectError
	http2Server( done, {} ); // $ExpectError
}

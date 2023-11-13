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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import RandomStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new RandomStream( 0.6 ); // $ExpectType RandomStream
	new RandomStream( 0.6, {} ); // $ExpectType RandomStream
	new RandomStream( 0.6, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor is callable...
{
	const randomStream = RandomStream;

	randomStream( 0.6 ); // $ExpectType RandomStream
	randomStream( 0.6, {} ); // $ExpectType RandomStream
	randomStream( 0.6, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has an `objectMode` method which returns a stream...
{
	RandomStream.objectMode( 0.6 ); // $ExpectType RandomStream
	RandomStream.objectMode( 0.6, {} ); // $ExpectType RandomStream
	RandomStream.objectMode( 0.6, { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = RandomStream.factory( 0.6 );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( 0.6, {} );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( 0.6, { 'iter': 10 } );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory();
	f( 0.6 ); // $ExpectType RandomStream

	f = RandomStream.factory( {} );
	f( 0.6 ); // $ExpectType RandomStream

	f = RandomStream.factory( { 'iter': 10 } );
	f( 0.6 ); // $ExpectType RandomStream
}

// The compiler throws an error if the constructor is provided invalid input arguments...
{
	new RandomStream( '0.6' ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided invalid input arguments...
{
	RandomStream.objectMode( '0.6' ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided invalid input arguments...
{
	RandomStream.factory( '0.6' ); // $ExpectError
	RandomStream.factory( 0.6, { 'iter': 'beep' } ); // $ExpectError
	RandomStream.factory( { 'iter': 'beep' } ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided invalid input arguments...
{
	let f = RandomStream.factory();
	f( '0.6' ); // $ExpectError
	f( 'abc' ); // $ExpectError

	f = RandomStream.factory( {} );
	f( '0.6' ); // $ExpectError
	f( 'abc' ); // $ExpectError

	f = RandomStream.factory( { 'iter': 10 } );
	f( '0.6' ); // $ExpectError
	f( 'abc' ); // $ExpectError
}

// The compiler throws an error if the constructor is provided insufficient arguments...
{
	new RandomStream(); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided insufficient arguments...
{
	RandomStream.objectMode(); // $ExpectError
}

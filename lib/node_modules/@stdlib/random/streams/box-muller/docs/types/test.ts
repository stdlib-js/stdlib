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

// tslint:disable: no-unused-expression

import RandomStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new RandomStream(); // $ExpectType RandomStream
	new RandomStream( { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor is callable...
{
	const randomStream = RandomStream;
	randomStream(); // $ExpectType RandomStream
	randomStream( { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has an `objectMode` method which returns a stream...
{
	RandomStream.objectMode(); // $ExpectType RandomStream
	RandomStream.objectMode( { 'iter': 10 } ); // $ExpectType RandomStream
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = RandomStream.factory();
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( {} );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream

	f = RandomStream.factory( { 'iter': 10 } );
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
	f(); // $ExpectType RandomStream
}

// The compiler throws an error if the constructor is provided an argument which is not an options object...
{
	new RandomStream( 'abc' ); // $ExpectError
	new RandomStream( 123 ); // $ExpectError
	new RandomStream( true ); // $ExpectError
	new RandomStream( false ); // $ExpectError
	new RandomStream( [] ); // $ExpectError
	new RandomStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided an argument which is not an options object...
{
	RandomStream.objectMode( 'abc' ); // $ExpectError
	RandomStream.objectMode( 123 ); // $ExpectError
	RandomStream.objectMode( true ); // $ExpectError
	RandomStream.objectMode( false ); // $ExpectError
	RandomStream.objectMode( [] ); // $ExpectError
	RandomStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	RandomStream.factory( 'abc' ); // $ExpectError
	RandomStream.factory( 123 ); // $ExpectError
	RandomStream.factory( true ); // $ExpectError
	RandomStream.factory( false ); // $ExpectError
	RandomStream.factory( [] ); // $ExpectError
	RandomStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided input arguments...
{
	let f = RandomStream.factory();
	f( 2.0 ); // $ExpectError

	f = RandomStream.factory( {} );
	f( 2.0 ); // $ExpectError

	f = RandomStream.factory( { 'iter': 10 } );
	f( 2.0 ); // $ExpectError
}

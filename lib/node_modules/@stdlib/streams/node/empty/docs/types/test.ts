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

import EmptyStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new EmptyStream(); // $ExpectType Readable
	new EmptyStream( { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor is callable...
{
	const randomStream = EmptyStream;
	randomStream(); // $ExpectType Readable
	randomStream( { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has an `objectMode` method which returns a stream...
{
	EmptyStream.objectMode(); // $ExpectType Readable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = EmptyStream.factory();
	f(); // $ExpectType Readable
	f(); // $ExpectType Readable
	f(); // $ExpectType Readable

	f = EmptyStream.factory( {} );
	f(); // $ExpectType Readable
	f(); // $ExpectType Readable
	f(); // $ExpectType Readable

	f = EmptyStream.factory( { 'objectMode': true } );
	f(); // $ExpectType Readable
	f(); // $ExpectType Readable
	f(); // $ExpectType Readable
}

// The compiler throws an error if the constructor is provided an argument which is not an options object...
{
	new EmptyStream( 'abc' ); // $ExpectError
	new EmptyStream( 123 ); // $ExpectError
	new EmptyStream( true ); // $ExpectError
	new EmptyStream( false ); // $ExpectError
	new EmptyStream( [] ); // $ExpectError
	new EmptyStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided any argument...
{
	EmptyStream.objectMode( 'abc' ); // $ExpectError
	EmptyStream.objectMode( 123 ); // $ExpectError
	EmptyStream.objectMode( true ); // $ExpectError
	EmptyStream.objectMode( false ); // $ExpectError
	EmptyStream.objectMode( [] ); // $ExpectError
	EmptyStream.objectMode( {} ); // $ExpectError
	EmptyStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	EmptyStream.factory( 'abc' ); // $ExpectError
	EmptyStream.factory( 123 ); // $ExpectError
	EmptyStream.factory( true ); // $ExpectError
	EmptyStream.factory( false ); // $ExpectError
	EmptyStream.factory( [] ); // $ExpectError
	EmptyStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided input arguments...
{
	let f = EmptyStream.factory();
	f( 2.0 ); // $ExpectError

	f = EmptyStream.factory( {} );
	f( 2.0 ); // $ExpectError

	f = EmptyStream.factory( { 'objectMode': true } );
	f( 2.0 ); // $ExpectError
}

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

import CircularArrayStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new CircularArrayStream( [ 1, 2, 3, 4 ] ); // $ExpectType Readable
	new CircularArrayStream( [ 1, 2, 3, 4 ], { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor is callable...
{
	const circularCircularArrayStream = CircularArrayStream;
	circularCircularArrayStream( [ 1, 2, 3, 4 ] ); // $ExpectType Readable
	circularCircularArrayStream( [ 1, 2, 3, 4 ], { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has an `objectMode` method which returns a stream...
{
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ] ); // $ExpectType Readable
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	const f = CircularArrayStream.factory();
	f( [ 1, 2, 3, 4 ] ); // $ExpectType Readable
	f( [ 5, 6, 7, 8 ] ); // $ExpectType Readable
	f( [ 1, 2, 3, 4 ] ); // $ExpectType Readable
}

// The compiler throws an error if the constructor is provided a second argument which is not an options object...
{
	new CircularArrayStream( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	new CircularArrayStream( [ 1, 2, 3, 4 ], 123 ); // $ExpectError
	new CircularArrayStream( [ 1, 2, 3, 4 ], true ); // $ExpectError
	new CircularArrayStream( [ 1, 2, 3, 4 ], false ); // $ExpectError
	new CircularArrayStream( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	new CircularArrayStream( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a second argument which is not an options object...
{
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], 'abc' ); // $ExpectError
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], 123 ); // $ExpectError
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], true ); // $ExpectError
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], false ); // $ExpectError
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], [] ); // $ExpectError
	CircularArrayStream.objectMode( [ 1, 2, 3, 4 ], null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	CircularArrayStream.factory( 'abc' ); // $ExpectError
	CircularArrayStream.factory( 123 ); // $ExpectError
	CircularArrayStream.factory( true ); // $ExpectError
	CircularArrayStream.factory( false ); // $ExpectError
	CircularArrayStream.factory( [] ); // $ExpectError
	CircularArrayStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	let f2 = CircularArrayStream.factory();
	f2(); // $ExpectError
	f2( [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ); // $ExpectError

	f2 = CircularArrayStream.factory( { 'objectMode': true } );
	f2(); // $ExpectError
	f2( [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ); // $ExpectError
}

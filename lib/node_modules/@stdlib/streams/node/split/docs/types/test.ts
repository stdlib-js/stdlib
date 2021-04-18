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

import SplitStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new SplitStream(); // $ExpectType Transform
	new SplitStream( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor is callable...
{
	const splitStream = SplitStream;
	splitStream(); // $ExpectType Transform
	splitStream( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor has an `objectMode` method which returns a stream...
{
	SplitStream.objectMode(); // $ExpectType Transform
	SplitStream.objectMode( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = SplitStream.factory();
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform

	f = SplitStream.factory( {} );
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform

	f = SplitStream.factory( { 'objectMode': true } );
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
}

// The compiler throws an error if the constructor is provided an argument which is not an options object...
{
	new SplitStream( 'abc' ); // $ExpectError
	new SplitStream( 123 ); // $ExpectError
	new SplitStream( true ); // $ExpectError
	new SplitStream( false ); // $ExpectError
	new SplitStream( [] ); // $ExpectError
	new SplitStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided an argument which is not an options object...
{
	SplitStream.objectMode( 'abc' ); // $ExpectError
	SplitStream.objectMode( 123 ); // $ExpectError
	SplitStream.objectMode( true ); // $ExpectError
	SplitStream.objectMode( false ); // $ExpectError
	SplitStream.objectMode( [] ); // $ExpectError
	SplitStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	SplitStream.factory( 'abc' ); // $ExpectError
	SplitStream.factory( 123 ); // $ExpectError
	SplitStream.factory( true ); // $ExpectError
	SplitStream.factory( false ); // $ExpectError
	SplitStream.factory( [] ); // $ExpectError
	SplitStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided input arguments...
{
	let f = SplitStream.factory();
	f( 2.0 ); // $ExpectError

	f = SplitStream.factory( {} );
	f( 2.0 ); // $ExpectError

	f = SplitStream.factory( { 'objectMode': true } );
	f( 2.0 ); // $ExpectError
}

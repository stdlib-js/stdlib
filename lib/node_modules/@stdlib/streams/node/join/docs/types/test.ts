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

import JoinStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new JoinStream(); // $ExpectType Transform
	new JoinStream( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor is callable...
{
	const joinStream = JoinStream;
	joinStream(); // $ExpectType Transform
	joinStream( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor has an `objectMode` method which returns a stream...
{
	JoinStream.objectMode(); // $ExpectType Transform
	JoinStream.objectMode( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = JoinStream.factory();
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform

	f = JoinStream.factory( {} );
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform

	f = JoinStream.factory( { 'objectMode': true } );
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
}

// The compiler throws an error if the constructor is provided an argument which is not an options object...
{
	new JoinStream( 'abc' ); // $ExpectError
	new JoinStream( 123 ); // $ExpectError
	new JoinStream( true ); // $ExpectError
	new JoinStream( false ); // $ExpectError
	new JoinStream( [] ); // $ExpectError
	new JoinStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided an argument which is not an options object...
{
	JoinStream.objectMode( 'abc' ); // $ExpectError
	JoinStream.objectMode( 123 ); // $ExpectError
	JoinStream.objectMode( true ); // $ExpectError
	JoinStream.objectMode( false ); // $ExpectError
	JoinStream.objectMode( [] ); // $ExpectError
	JoinStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	JoinStream.factory( 'abc' ); // $ExpectError
	JoinStream.factory( 123 ); // $ExpectError
	JoinStream.factory( true ); // $ExpectError
	JoinStream.factory( false ); // $ExpectError
	JoinStream.factory( [] ); // $ExpectError
	JoinStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided input arguments...
{
	let f = JoinStream.factory();
	f( 2.0 ); // $ExpectError

	f = JoinStream.factory( {} );
	f( 2.0 ); // $ExpectError

	f = JoinStream.factory( { 'objectMode': true } );
	f( 2.0 ); // $ExpectError
}

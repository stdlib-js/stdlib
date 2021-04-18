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

import TransformStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new TransformStream(); // $ExpectType Transform
	new TransformStream( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor is callable...
{
	const transformStream = TransformStream;
	transformStream(); // $ExpectType Transform
	transformStream( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor has an `objectMode` method which returns a stream...
{
	TransformStream.objectMode(); // $ExpectType Transform
	TransformStream.objectMode( { 'objectMode': true } ); // $ExpectType Transform
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	let f = TransformStream.factory();
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform

	f = TransformStream.factory( {} );
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform

	f = TransformStream.factory( { 'objectMode': true } );
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
	f(); // $ExpectType Transform
}

// The compiler throws an error if the constructor is provided an argument which is not an options object...
{
	new TransformStream( 'abc' ); // $ExpectError
	new TransformStream( 123 ); // $ExpectError
	new TransformStream( true ); // $ExpectError
	new TransformStream( false ); // $ExpectError
	new TransformStream( [] ); // $ExpectError
	new TransformStream( null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided an argument which is not an options object...
{
	TransformStream.objectMode( 'abc' ); // $ExpectError
	TransformStream.objectMode( 123 ); // $ExpectError
	TransformStream.objectMode( true ); // $ExpectError
	TransformStream.objectMode( false ); // $ExpectError
	TransformStream.objectMode( [] ); // $ExpectError
	TransformStream.objectMode( null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	TransformStream.factory( 'abc' ); // $ExpectError
	TransformStream.factory( 123 ); // $ExpectError
	TransformStream.factory( true ); // $ExpectError
	TransformStream.factory( false ); // $ExpectError
	TransformStream.factory( [] ); // $ExpectError
	TransformStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided input arguments...
{
	let f = TransformStream.factory();
	f( 2.0 ); // $ExpectError

	f = TransformStream.factory( {} );
	f( 2.0 ); // $ExpectError

	f = TransformStream.factory( { 'objectMode': true } );
	f( 2.0 ); // $ExpectError
}

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

import ConstantStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	new ConstantStream( 'beep' ); // $ExpectType Readable
	new ConstantStream( 'beep', { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor is callable...
{
	const constantStream = ConstantStream;
	constantStream( 'beep' ); // $ExpectType Readable
	constantStream( 'beep', { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has an `objectMode` method which returns a stream...
{
	ConstantStream.objectMode( 'beep' ); // $ExpectType Readable
	ConstantStream.objectMode( 'beep', { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	const f = ConstantStream.factory();
	f( 'beep' ); // $ExpectType Readable
	f( 'boop' ); // $ExpectType Readable
	f( 'beep' ); // $ExpectType Readable

	let f2 = ConstantStream.factory( 'beep', {} );
	f2(); // $ExpectType Readable
	f2(); // $ExpectType Readable
	f2(); // $ExpectType Readable

	f2 = ConstantStream.factory( 'beep', { 'objectMode': true } );
	f2(); // $ExpectType Readable
	f2(); // $ExpectType Readable
	f2(); // $ExpectType Readable
}

// The compiler throws an error if the constructor is provided a second argument which is not an options object...
{
	new ConstantStream( 'beep', 'abc' ); // $ExpectError
	new ConstantStream( 'beep', 123 ); // $ExpectError
	new ConstantStream( 'beep', true ); // $ExpectError
	new ConstantStream( 'beep', false ); // $ExpectError
	new ConstantStream( 'beep', [] ); // $ExpectError
	new ConstantStream( 'beep', null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a second argument which is not an options object...
{
	ConstantStream.objectMode( 'beep', 'abc' ); // $ExpectError
	ConstantStream.objectMode( 'beep', 123 ); // $ExpectError
	ConstantStream.objectMode( 'beep', true ); // $ExpectError
	ConstantStream.objectMode( 'beep', false ); // $ExpectError
	ConstantStream.objectMode( 'beep', [] ); // $ExpectError
	ConstantStream.objectMode( 'beep', null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an options object...
{
	ConstantStream.factory( 'beep', 'abc' ); // $ExpectError
	ConstantStream.factory( 'beep', 123 ); // $ExpectError
	ConstantStream.factory( 'beep', true ); // $ExpectError
	ConstantStream.factory( 'beep', false ); // $ExpectError
	ConstantStream.factory( 'beep', [] ); // $ExpectError
	ConstantStream.factory( 'beep', null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	const f = ConstantStream.factory( 'beep' );
	f( 'boop' ); // $ExpectError

	let f2 = ConstantStream.factory();
	f2(); // $ExpectError
	f2( 'beep', 'boop' ); // $ExpectError

	f2 = ConstantStream.factory( { 'objectMode': true } );
	f2(); // $ExpectError
	f2( 'beep', 'boop' ); // $ExpectError
}

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

import StridedArrayStream = require( './index' );


// TESTS //

// The constructor returns a stream...
{
	const arr = [ 1, 2, 3, 4 ];
	new StridedArrayStream( arr.length, arr, 1, 0 ); // $ExpectType Readable
	new StridedArrayStream( arr.length, arr, 1, 0, { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor is callable...
{
	const arr = [ 1, 2, 3, 4 ];
	const stridedArrayStream = StridedArrayStream;
	stridedArrayStream( arr.length, arr, 1, 0 ); // $ExpectType Readable
	stridedArrayStream( arr.length, arr, 1, 0, { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has an `objectMode` method which returns a stream...
{
	const arr = [ 1, 2, 3, 4 ];
	StridedArrayStream.objectMode( arr.length, arr, 1, 0 ); // $ExpectType Readable
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, { 'objectMode': true } ); // $ExpectType Readable
}

// The constructor has a `factory` method which returns a function for creating streams...
{
	const arr = [ 1, 2, 3, 4 ];
	const f = StridedArrayStream.factory();
	f( arr.length, arr, 1, 0 ); // $ExpectType Readable
}

// The compiler throws an error if the constructor is provided a first argument which is not a number...
{
	const arr = [ 1, 2, 3, 4 ];
	new StridedArrayStream( 'abc', arr, 1, 0 ); // $ExpectError
	new StridedArrayStream( true, arr, 1, 0 ); // $ExpectError
	new StridedArrayStream( false, arr, 1, 0 ); // $ExpectError
	new StridedArrayStream( [], arr, 1, 0 ); // $ExpectError
	new StridedArrayStream( {}, arr, 1, 0 ); // $ExpectError
	new StridedArrayStream( null, arr, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a second argument which is not a collection...
{
	const arr = [ 1, 2, 3, 4 ];
	new StridedArrayStream( arr.length, 123, 1, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, true, 1, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, false, 1, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, {}, 1, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, null, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a third argument which is not a number...
{
	const arr = [ 1, 2, 3, 4 ];
	new StridedArrayStream( arr.length, arr, 'abc', 0 ); // $ExpectError
	new StridedArrayStream( arr.length, arr, true, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, arr, false, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, arr, [], 0 ); // $ExpectError
	new StridedArrayStream( arr.length, arr, {}, 0 ); // $ExpectError
	new StridedArrayStream( arr.length, arr, null, 0 ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a fourth argument which is not a number...
{
	const arr = [ 1, 2, 3, 4 ];
	new StridedArrayStream( arr.length, arr, 1, 'abc' ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, true ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, false ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, [] ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, {} ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, null ); // $ExpectError
}

// The compiler throws an error if the constructor is provided a fifth argument which is not an options object...
{
	const arr = [ 1, 2, 3, 4 ];
	new StridedArrayStream( arr.length, arr, 1, 0, 'abc' ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, 0, 123 ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, 0, true ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, 0, false ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, 0, [] ); // $ExpectError
	new StridedArrayStream( arr.length, arr, 1, 0, null ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a first argument which is not a number...
{
	const arr = [ 1, 2, 3, 4 ];
	StridedArrayStream.objectMode( 'abc', arr, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( null, arr, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( true, arr, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( false, arr, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( [], arr, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( {}, arr, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a second argument which is not a collection...
{
	const arr = [ 1, 2, 3, 4 ];
	StridedArrayStream.objectMode( arr.length, null, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, 123, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, true, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, false, 1, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a third argument which is not a number...
{
	const arr = [ 1, 2, 3, 4 ];
	StridedArrayStream.objectMode( arr.length, arr, 'abc', 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, null, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, true, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, false, 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, [], 0 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a fourth argument which is not a number...
{
	const arr = [ 1, 2, 3, 4 ];
	StridedArrayStream.objectMode( arr.length, arr, 1, 'abc' ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, null ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, true ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, false ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, [] ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `objectMode` method is provided a fifth argument which is not an options object...
{
	const arr = [ 1, 2, 3, 4 ];
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, 'abc' ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, 123 ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, true ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, false ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, [] ); // $ExpectError
	StridedArrayStream.objectMode( arr.length, arr, 1, 0, null ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an argument which is not an options object...
{
	StridedArrayStream.factory( 'abc' ); // $ExpectError
	StridedArrayStream.factory( 123 ); // $ExpectError
	StridedArrayStream.factory( true ); // $ExpectError
	StridedArrayStream.factory( false ); // $ExpectError
	StridedArrayStream.factory( [] ); // $ExpectError
	StridedArrayStream.factory( null ); // $ExpectError
}

// The compiler throws an error if the function returned by the `factory` method is provided an invalid number of arguments...
{
	const arr = [ 1, 2, 3, 4 ];
	let f = StridedArrayStream.factory();
	f(); // $ExpectError
	f( arr.length ); // $ExpectError
	f( arr.length, arr ); // $ExpectError
	f( arr.length, arr, 1 ); // $ExpectError
	f( arr.length, arr, 1, 0, {} ); // $ExpectError

	f = StridedArrayStream.factory( { 'objectMode': true } );
	f(); // $ExpectError
	f( arr.length ); // $ExpectError
	f( arr.length, arr ); // $ExpectError
	f( arr.length, arr, 1 ); // $ExpectError
	f( arr.length, arr, 1, 0, {} ); // $ExpectError
}

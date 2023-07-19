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

/* tslint:disable:no-empty */
/* tslint:disable:no-unused-expression */

import typedarraypool = require( './index' );


// TESTS //

// The function returns a typed array or null...
{
	typedarraypool(); // $ExpectType TypedArrayOrNull
	typedarraypool( 'float32' ); // $ExpectType TypedArrayOrNull
	typedarraypool( 12 ); // $ExpectType TypedArrayOrNull
	typedarraypool( 12, 'int32' ); // $ExpectType TypedArrayOrNull
	typedarraypool( [ 1, 2, 3 ] ); // $ExpectType TypedArrayOrNull
	const arr = new Int32Array( [ 2, 5, 5, 7 ] );
	typedarraypool( arr, 'float64' ); // $ExpectType TypedArrayOrNull
}

// The compiler throws an error if the function is provided a first argument which is neither a number nor array-like object...
{
	typedarraypool( true ); // $ExpectError
	typedarraypool( false ); // $ExpectError
	typedarraypool( null ); // $ExpectError
	typedarraypool( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a recognized data type...
{
	typedarraypool( 4, true ); // $ExpectError
	typedarraypool( 4, false ); // $ExpectError
	typedarraypool( 4, null ); // $ExpectError
	typedarraypool( 4, 'abc' ); // $ExpectError
	typedarraypool( 4, 123 ); // $ExpectError
	typedarraypool( 4, [] ); // $ExpectError
	typedarraypool( 4, {} ); // $ExpectError
	typedarraypool( 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	typedarraypool( 4, 'int32', {} ); // $ExpectError
}

// Attached to the main export is a `malloc` method which returns a typed array or null...
{
	typedarraypool.malloc(); // $ExpectType TypedArrayOrNull
	typedarraypool.malloc( 'float32' ); // $ExpectType TypedArrayOrNull
	typedarraypool.malloc( 12 ); // $ExpectType TypedArrayOrNull
	typedarraypool.malloc( 12, 'int32' ); // $ExpectType TypedArrayOrNull
	typedarraypool.malloc( [ 1, 2, 3 ] ); // $ExpectType TypedArrayOrNull
	const arr = new Int32Array( [ 2, 5, 5, 7 ] );
	typedarraypool.malloc( arr, 'float64' ); // $ExpectType TypedArrayOrNull
}

// The compiler throws an error if the `malloc` method is provided a first argument which is neither a number nor array-like object...
{
	typedarraypool.malloc( true ); // $ExpectError
	typedarraypool.malloc( false ); // $ExpectError
	typedarraypool.malloc( null ); // $ExpectError
	typedarraypool.malloc( {} ); // $ExpectError
}

// The compiler throws an error if the `malloc` method is provided a second argument which is not a recognized data type...
{
	typedarraypool.malloc( 4, true ); // $ExpectError
	typedarraypool.malloc( 4, false ); // $ExpectError
	typedarraypool.malloc( 4, null ); // $ExpectError
	typedarraypool.malloc( 4, 'abc' ); // $ExpectError
	typedarraypool.malloc( 4, 123 ); // $ExpectError
	typedarraypool.malloc( 4, [] ); // $ExpectError
	typedarraypool.malloc( 4, {} ); // $ExpectError
	typedarraypool.malloc( 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `malloc` method is provided an incorrect number of arguments...
{
	typedarraypool.malloc( 4, 'int32', {} ); // $ExpectError
}

// Attached to the main export is a `calloc` method which returns a typed array or null...
{
	typedarraypool.calloc(); // $ExpectType TypedArrayOrNull
	typedarraypool.calloc( 'float32' ); // $ExpectType TypedArrayOrNull
	typedarraypool.calloc( 12 ); // $ExpectType TypedArrayOrNull
	typedarraypool.calloc( 12, 'int32' ); // $ExpectType TypedArrayOrNull
}

// The compiler throws an error if the `calloc` method is provided a first argument which is not a number...
{
	typedarraypool.calloc( 'abc' ); // $ExpectError
	typedarraypool.calloc( true ); // $ExpectError
	typedarraypool.calloc( false ); // $ExpectError
	typedarraypool.calloc( null ); // $ExpectError
	typedarraypool.calloc( {} ); // $ExpectError
	typedarraypool.calloc( [] ); // $ExpectError
	typedarraypool.calloc( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `calloc` method is provided a second argument which is not a recognized data type...
{
	typedarraypool.calloc( 4, true ); // $ExpectError
	typedarraypool.calloc( 4, false ); // $ExpectError
	typedarraypool.calloc( 4, null ); // $ExpectError
	typedarraypool.calloc( 4, 'abc' ); // $ExpectError
	typedarraypool.calloc( 4, 123 ); // $ExpectError
	typedarraypool.calloc( 4, [] ); // $ExpectError
	typedarraypool.calloc( 4, {} ); // $ExpectError
	typedarraypool.calloc( 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `calloc` method is provided an incorrect number of arguments...
{
	typedarraypool.calloc( 4, 'int32', {} ); // $ExpectError
}

// Attached to the main export is a `factory` method which returns a typed array pool..
{
	typedarraypool.factory(); // $ExpectType Pool
	typedarraypool.factory( { 'highWaterMark': 556 } ); // $ExpectType Pool
}

// The compiler throws an error if the `factory` method is provided a `highWaterMark` option which is not a number...
{
	typedarraypool.factory( { 'highWaterMark': true } ); // $ExpectError
	typedarraypool.factory( { 'highWaterMark': false } ); // $ExpectError
	typedarraypool.factory( { 'highWaterMark': 'abc' } ); // $ExpectError
	typedarraypool.factory( { 'highWaterMark': null } ); // $ExpectError
	typedarraypool.factory( { 'highWaterMark': [] } ); // $ExpectError
	typedarraypool.factory( { 'highWaterMark': {} } ); // $ExpectError
	typedarraypool.factory( { 'highWaterMark': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an incorrect number of arguments...
{
	typedarraypool.factory( {}, {} ); // $ExpectError
}

// Attached to the main export is a `free` method which returns void...
{
	const arr = new Int32Array( [ 2, 5, 5, 7 ] );
	typedarraypool.free( arr ); // $ExpectType void
}

// The compiler throws an error if the `free` method is provided a first argument which is neither a typed array nor array buffer...
{
	typedarraypool.free( true ); // $ExpectError
	typedarraypool.free( false ); // $ExpectError
	typedarraypool.free( 123 ); // $ExpectError
	typedarraypool.free( 'abc' ); // $ExpectError
	typedarraypool.free( null ); // $ExpectError
	typedarraypool.free( {} ); // $ExpectError
	typedarraypool.free( ( x: number ): number => x ); // $ExpectError
}

// Attached to the main export is a `clear` method which returns void...
{
	typedarraypool.clear(); // $ExpectType void
}

// The compiler throws an error if the `clear` method is provided arguments...
{
	typedarraypool.clear( {} ); // $ExpectError
	typedarraypool.clear( {}, {} ); // $ExpectError
}

// Attached to the main export is a `highWaterMark` property...
{
	typedarraypool.highWaterMark; // $ExpectType number
}

// Attached to the main export is a `nbytes` property...
{
	typedarraypool.nbytes; // $ExpectType number
}

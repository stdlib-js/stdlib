/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import ArrayIndex = require( './index' );


// TESTS //

// The function returns an array index...
{
	const x = [ 1, 2, 3, 4 ];
	const y = [ true, false, true, false ];
	const z = new Uint8Array( [ 1, 0, 1, 0 ] );
	const w = new Int32Array( [ 1, 2, 3, 4 ] );

	new ArrayIndex( x ); // $ExpectType IntegerArrayIndex
	new ArrayIndex( y ); // $ExpectType BooleanArrayIndex
	new ArrayIndex( z ); // $ExpectType MaskArrayIndex
	new ArrayIndex( w ); // $ExpectType Int32ArrayIndex

	new ArrayIndex( x, { 'persist': true } ); // $ExpectType IntegerArrayIndex
	new ArrayIndex( y, { 'persist': true } ); // $ExpectType BooleanArrayIndex
	new ArrayIndex( z, { 'persist': true } ); // $ExpectType MaskArrayIndex
	new ArrayIndex( w, { 'persist': true } ); // $ExpectType Int32ArrayIndex

	ArrayIndex( x ); // $ExpectType IntegerArrayIndex
	ArrayIndex( y ); // $ExpectType BooleanArrayIndex
	ArrayIndex( z ); // $ExpectType MaskArrayIndex
	ArrayIndex( w ); // $ExpectType Int32ArrayIndex

	ArrayIndex( x, { 'persist': true } ); // $ExpectType IntegerArrayIndex
	ArrayIndex( y, { 'persist': true } ); // $ExpectType BooleanArrayIndex
	ArrayIndex( z, { 'persist': true } ); // $ExpectType MaskArrayIndex
	ArrayIndex( w, { 'persist': true } ); // $ExpectType Int32ArrayIndex
}

// The compiler throws an error if the function is provided first argument which is not a valid collection...
{
	ArrayIndex( 'abc' ); // $ExpectError
	ArrayIndex( 1 ); // $ExpectError
	ArrayIndex( null ); // $ExpectError
	ArrayIndex( void 0 ); // $ExpectError
	ArrayIndex( true ); // $ExpectError
	ArrayIndex( false ); // $ExpectError
	ArrayIndex( {} ); // $ExpectError
	ArrayIndex( [ {} ] ); // $ExpectError
	ArrayIndex( ( x: number ): number => x ); // $ExpectError

	ArrayIndex( 'abc', {} ); // $ExpectError
	ArrayIndex( 1, {} ); // $ExpectError
	ArrayIndex( null, {} ); // $ExpectError
	ArrayIndex( void 0, {} ); // $ExpectError
	ArrayIndex( true, {} ); // $ExpectError
	ArrayIndex( false, {} ); // $ExpectError
	ArrayIndex( {}, {} ); // $ExpectError
	ArrayIndex( [ {} ], {} ); // $ExpectError
	ArrayIndex( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided second argument which is not an object...
{
	const x = [ 1, 2, 3, 4 ];

	ArrayIndex( x, 'abc' ); // $ExpectError
	ArrayIndex( x, 1 ); // $ExpectError
	ArrayIndex( x, null ); // $ExpectError
	ArrayIndex( x, true ); // $ExpectError
	ArrayIndex( x, false ); // $ExpectError
	ArrayIndex( x, [ {} ] ); // $ExpectError
	ArrayIndex( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided `persist` option which is not a boolean...
{
	const x = [ 1, 2, 3, 4 ];

	ArrayIndex( x, { 'persist': 'abc' } ); // $ExpectError
	ArrayIndex( x, { 'persist': 1 } ); // $ExpectError
	ArrayIndex( x, { 'persist': null } ); // $ExpectError
	ArrayIndex( x, { 'persist': {} } ); // $ExpectError
	ArrayIndex( x, { 'persist': [] } ); // $ExpectError
	ArrayIndex( x, { 'persist': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];

	ArrayIndex(); // $ExpectError
	ArrayIndex( x, {}, {} ); // $ExpectError
}

// Attached to the main export is a `free` function which returns a boolean...
{
	ArrayIndex.free( '0' ); // $ExpectType boolean
}

// The compiler throws an error if the `free` method is provided first argument which is not a string...
{
	ArrayIndex.free( 1 ); // $ExpectError
	ArrayIndex.free( null ); // $ExpectError
	ArrayIndex.free( void 0 ); // $ExpectError
	ArrayIndex.free( true ); // $ExpectError
	ArrayIndex.free( false ); // $ExpectError
	ArrayIndex.free( {} ); // $ExpectError
	ArrayIndex.free( [] ); // $ExpectError
	ArrayIndex.free( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `free` method is provided an unsupported number of arguments...
{
	ArrayIndex.free(); // $ExpectError
	ArrayIndex.free( '0', {} ); // $ExpectError
}

// Attached to the main export is a `get` function which returns array object data...
{
	ArrayIndex.get( '0' ); // $ExpectType ArrayObject
}

// The compiler throws an error if the `get` method is provided first argument which is not a string...
{
	ArrayIndex.get( 1 ); // $ExpectError
	ArrayIndex.get( null ); // $ExpectError
	ArrayIndex.get( void 0 ); // $ExpectError
	ArrayIndex.get( true ); // $ExpectError
	ArrayIndex.get( false ); // $ExpectError
	ArrayIndex.get( {} ); // $ExpectError
	ArrayIndex.get( [] ); // $ExpectError
	ArrayIndex.get( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `get` method is provided an unsupported number of arguments...
{
	ArrayIndex.get(); // $ExpectError
	ArrayIndex.get( '0', {} ); // $ExpectError
}

// An array index has a `dtype` property which returns a string...
{
	const x = new ArrayIndex( [ 1, 2, 3, 4 ] );

	x.dtype; // $ExpectType "generic"
}

// An array index has an `id` property which returns a string...
{
	const x = new ArrayIndex( [ 1, 2, 3, 4 ] );

	x.id; // $ExpectType string
}

// An array index has a `type` property which returns a string...
{
	const x = new ArrayIndex( [ 1, 2, 3, 4 ] );

	x.type; // $ExpectType "int"
}

// An array index has a `data` property which returns a collection...
{
	const x = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );

	x.data; // $ExpectType Uint8Array
}

// An array index has an `isCached` property which returns a boolean...
{
	const x = new ArrayIndex( [ 1, 2, 3, 4 ] );

	x.isCached; // $ExpectType boolean
}

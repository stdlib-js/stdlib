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


import cueveryByRight = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns an array...
{
	cueveryByRight( [ 0, 1, 1 ], isPositive ); // $ExpectType boolean[]
	cueveryByRight( [ -1, 0, 1, 2 ], isPositive ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cueveryByRight( 1 ); // $ExpectError
	cueveryByRight( true ); // $ExpectError
	cueveryByRight( false ); // $ExpectError
	cueveryByRight( null ); // $ExpectError
	cueveryByRight( void  0 ); // $ExpectError
	cueveryByRight( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	const x = [ 0, 0, 1, 1, 1 ];

	cueveryByRight( x, '1' ); // $ExpectError
	cueveryByRight( x, true ); // $ExpectError
	cueveryByRight( x, false ); // $ExpectError
	cueveryByRight( x, 'abc' ); // $ExpectError
	cueveryByRight( x, void 0 ); // $ExpectError
	cueveryByRight( x, {} ); // $ExpectError
	cueveryByRight( x, [] ); // $ExpectError

	cueveryByRight( x, '1', {} ); // $ExpectError
	cueveryByRight( x, true, {} ); // $ExpectError
	cueveryByRight( x, false, {} ); // $ExpectError
	cueveryByRight( x, 'abc', {} ); // $ExpectError
	cueveryByRight( x, void 0, {} ); // $ExpectError
	cueveryByRight( x, {}, {} ); // $ExpectError
	cueveryByRight( x, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cueveryByRight(); // $ExpectError
	cueveryByRight( [] ); // $ExpectError
	cueveryByRight( [], [], [], [] ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3, 4 ];
	cueveryByRight.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive ); // $ExpectType (number | boolean)[]
	cueveryByRight.assign( x, new Float64Array( 4 ), 1, 0, isPositive ); // $ExpectType Float64Array
	cueveryByRight.assign( x, new Float32Array( 4 ), 1, 0, isPositive ); // $ExpectType Float32Array
	cueveryByRight.assign( x, new Int32Array( 4 ), 1, 0, isPositive ); // $ExpectType Int32Array
	cueveryByRight.assign( x, new Int16Array( 4 ), 1, 0, isPositive ); // $ExpectType Int16Array
	cueveryByRight.assign( x, new Int8Array( 4 ), 1, 0, isPositive ); // $ExpectType Int8Array
	cueveryByRight.assign( x, new Uint32Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint32Array
	cueveryByRight.assign( x, new Uint16Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint16Array
	cueveryByRight.assign( x, new Uint8Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint8Array
	cueveryByRight.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive ); // $ExpectType Uint8ClampedArray

	cueveryByRight.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive, {} ); // $ExpectType (number | boolean)[]
	cueveryByRight.assign( x, new Float64Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float64Array
	cueveryByRight.assign( x, new Float32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float32Array
	cueveryByRight.assign( x, new Int32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int32Array
	cueveryByRight.assign( x, new Int16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int16Array
	cueveryByRight.assign( x, new Int8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int8Array
	cueveryByRight.assign( x, new Uint32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint32Array
	cueveryByRight.assign( x, new Uint16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint16Array
	cueveryByRight.assign( x, new Uint8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8Array
	cueveryByRight.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8ClampedArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ 0, 0, 1, 1, 1 ];

	cueveryByRight.assign( 1, x, 2, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( true, x, 2, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( false, x, 2, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( null, x, 2, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( void 0, x, 2, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( {}, x, 2, 0, isPositive ); // $ExpectError

	cueveryByRight.assign( 1, x, 2, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( true, x, 2, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( false, x, 2, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( null, x, 2, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( void 0, x, 2, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( {}, x, 2, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const x = [ 0, 0, 1, 1, 1 ];

	cueveryByRight.assign( x, true, 1, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, false, 1, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, null, 1, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, void 0, 1, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, {}, 1, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, 1, 1, 0, isPositive ); // $ExpectError

	cueveryByRight.assign( x, true, 1, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, false, 1, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, null, 1, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, void 0, 1, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, {}, 1, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, 1, 1, 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 1, 1 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cueveryByRight.assign( x, y, '1', 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, true, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, false, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, null, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, void 0, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, {}, 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, [], 0, isPositive ); // $ExpectError

	cueveryByRight.assign( x, y, '1', 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, true, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, false, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, null, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, void 0, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, {}, 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, [], 0, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 0, 0, 1, 1, 1 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cueveryByRight.assign( x, y, 1, '1', isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, 1, true, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, 1, false, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, 1, null, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, 1, void 0, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, 1, {}, isPositive ); // $ExpectError
	cueveryByRight.assign( x, y, 1, [], isPositive ); // $ExpectError

	cueveryByRight.assign( x, y, 1, '1', isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, true, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, false, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, null, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, void 0, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, {}, isPositive, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, [], isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a function...
{
	const x = [ 0, 0, 1, 1, 1 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cueveryByRight.assign( x, y, 1, 0, 2 ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, false ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, true ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, 'abc' ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, void 0 ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, [] ); // $ExpectError

	cueveryByRight.assign( x, y, 1, 0, 2, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, false, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, true, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, 'abc', {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, void 0, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, {}, {} ); // $ExpectError
	cueveryByRight.assign( x, y, 1, 0, [], {} ); // $ExpectError
}
// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cueveryByRight.assign(); // $ExpectError
	cueveryByRight.assign( [] ); // $ExpectError
	cueveryByRight.assign( [], [] ); // $ExpectError
	cueveryByRight.assign( [], [], 2 ); // $ExpectError
	cueveryByRight.assign( [], [], 2, {} ); // $ExpectError
	cueveryByRight.assign( [], [], 1, 1, {}, [], {} ); // $ExpectError
}

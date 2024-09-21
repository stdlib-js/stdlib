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


import cusomeByRight = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns an array...
{
	cusomeByRight( [ 0, 1, 1 ], 2, isPositive ); // $ExpectType boolean[]
	cusomeByRight( [ -1, 0, 1, 2 ], 3, isPositive ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cusomeByRight( 1 ); // $ExpectError
	cusomeByRight( true ); // $ExpectError
	cusomeByRight( false ); // $ExpectError
	cusomeByRight( null ); // $ExpectError
	cusomeByRight( void  0 ); // $ExpectError
	cusomeByRight( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeByRight( x, '1', isPositive ); // $ExpectError
	cusomeByRight( x, true, isPositive ); // $ExpectError
	cusomeByRight( x, false, isPositive ); // $ExpectError
	cusomeByRight( x, null, isPositive ); // $ExpectError
	cusomeByRight( x, void  0, isPositive ); // $ExpectError
	cusomeByRight( x, {}, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeByRight( x, 2, '1' ); // $ExpectError
	cusomeByRight( x, 2, true ); // $ExpectError
	cusomeByRight( x, 2, false ); // $ExpectError
	cusomeByRight( x, 2, 'abc' ); // $ExpectError
	cusomeByRight( x, 2, void 0 ); // $ExpectError
	cusomeByRight( x, 2, {} ); // $ExpectError
	cusomeByRight( x, 2, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cusomeByRight(); // $ExpectError
	cusomeByRight( [] ); // $ExpectError
	cusomeByRight( [], [] ); // $ExpectError
	cusomeByRight( [], [], [], [], [] ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeByRight.assign( x, 2, y, 2, 0, isPositive ); // $ExpectType (boolean | null)[]
	cusomeByRight.assign( x, 2, [ 0, 0, 0, 0 ], 1, 0, isPositive ); // $ExpectType (number | boolean)[]
	cusomeByRight.assign( x, 2, new Float64Array( 4 ), 1, 0, isPositive ); // $ExpectType Float64Array
	cusomeByRight.assign( x, 2, new Float32Array( 4 ), 1, 0, isPositive ); // $ExpectType Float32Array
	cusomeByRight.assign( x, 2, new Int32Array( 4 ), 1, 0, isPositive ); // $ExpectType Int32Array
	cusomeByRight.assign( x, 2, new Int16Array( 4 ), 1, 0, isPositive ); // $ExpectType Int16Array
	cusomeByRight.assign( x, 2, new Int8Array( 4 ), 1, 0, isPositive ); // $ExpectType Int8Array
	cusomeByRight.assign( x, 2, new Uint32Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint32Array
	cusomeByRight.assign( x, 2, new Uint16Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint16Array
	cusomeByRight.assign( x, 2, new Uint8Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint8Array
	cusomeByRight.assign( x, 2, new Uint8ClampedArray( 4 ), 1, 0, isPositive ); // $ExpectType Uint8ClampedArray

	cusomeByRight.assign( x, 2, [ 0, 0, 0, 0 ], 1, 0, isPositive, {} ); // $ExpectType (number | boolean)[]
	cusomeByRight.assign( x, 2, new Float64Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float64Array
	cusomeByRight.assign( x, 2, new Float32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float32Array
	cusomeByRight.assign( x, 2, new Int32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int32Array
	cusomeByRight.assign( x, 2, new Int16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int16Array
	cusomeByRight.assign( x, 2, new Int8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int8Array
	cusomeByRight.assign( x, 2, new Uint32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint32Array
	cusomeByRight.assign( x, 2, new Uint16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint16Array
	cusomeByRight.assign( x, 2, new Uint8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8Array
	cusomeByRight.assign( x, 2, new Uint8ClampedArray( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8ClampedArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeByRight.assign( 1, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( true, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( false, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( null, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( void 0, 2, x, 2, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( {}, 2, x, 2, 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeByRight.assign( x, '1', y, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, true, y, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, false, y, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, null, y, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, void 0, y, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, {}, y, 1, 0, isPositive  ); // $ExpectError
	cusomeByRight.assign( x, [], y, 1, 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cusomeByRight.assign( x, 2, true, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 2, false, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 2, null, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 2, void 0, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 2, {}, 1, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 2, 1, 1, 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeByRight.assign( x, 1, y, '1', 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, true, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, false, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, null, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, void 0, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, {}, 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, [], 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeByRight.assign( x, 1, y, 1, '1', isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, true, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, false, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, null, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, void 0, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, {}, isPositive ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, [], isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a function...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cusomeByRight.assign( x, 1, y, 1, 0, 2 ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, 0, false ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, 0, true ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, 0, 'abc' ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, 0, void 0 ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, 0, {} ); // $ExpectError
	cusomeByRight.assign( x, 1, y, 1, 0, [] ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cusomeByRight.assign(); // $ExpectError
	cusomeByRight.assign( [] ); // $ExpectError
	cusomeByRight.assign( [], [] ); // $ExpectError
	cusomeByRight.assign( [], [], 2 ); // $ExpectError
	cusomeByRight.assign( [], [], 2, {} ); // $ExpectError
	cusomeByRight.assign( [], [], 1, 1, {} ); // $ExpectError
	cusomeByRight.assign( [], [], 1, 1, {}, 1, {}, {} ); // $ExpectError
}

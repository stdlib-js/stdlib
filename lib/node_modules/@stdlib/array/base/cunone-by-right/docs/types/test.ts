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


import cunoneByRight = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns an array...
{
	cunoneByRight( [ 0, 1, 1 ], isPositive ); // $ExpectType boolean[]
	cunoneByRight( [ -1, 0, 1, 2 ], isPositive ); // $ExpectType boolean[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cunoneByRight( 1 ); // $ExpectError
	cunoneByRight( true ); // $ExpectError
	cunoneByRight( false ); // $ExpectError
	cunoneByRight( null ); // $ExpectError
	cunoneByRight( void  0 ); // $ExpectError
	cunoneByRight( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cunoneByRight( x, '1' ); // $ExpectError
	cunoneByRight( x, true ); // $ExpectError
	cunoneByRight( x, false ); // $ExpectError
	cunoneByRight( x, 'abc' ); // $ExpectError
	cunoneByRight( x, void 0 ); // $ExpectError
	cunoneByRight( x, {} ); // $ExpectError
	cunoneByRight( x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cunoneByRight(); // $ExpectError
	cunoneByRight( [] ); // $ExpectError
	cunoneByRight( [], [], [], [] ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneByRight.assign( x, y, 2, 0, isPositive ); // $ExpectType (boolean | null)[]
	cunoneByRight.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive ); // $ExpectType (number | boolean)[]
	cunoneByRight.assign( x, new Float64Array( 4 ), 1, 0, isPositive ); // $ExpectType Float64Array
	cunoneByRight.assign( x, new Float32Array( 4 ), 1, 0, isPositive ); // $ExpectType Float32Array
	cunoneByRight.assign( x, new Int32Array( 4 ), 1, 0, isPositive ); // $ExpectType Int32Array
	cunoneByRight.assign( x, new Int16Array( 4 ), 1, 0, isPositive ); // $ExpectType Int16Array
	cunoneByRight.assign( x, new Int8Array( 4 ), 1, 0, isPositive ); // $ExpectType Int8Array
	cunoneByRight.assign( x, new Uint32Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint32Array
	cunoneByRight.assign( x, new Uint16Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint16Array
	cunoneByRight.assign( x, new Uint8Array( 4 ), 1, 0, isPositive ); // $ExpectType Uint8Array
	cunoneByRight.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive ); // $ExpectType Uint8ClampedArray

	cunoneByRight.assign( x, [ 0, 0, 0, 0 ], 1, 0, isPositive, {} ); // $ExpectType (number | boolean)[]
	cunoneByRight.assign( x, new Float64Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float64Array
	cunoneByRight.assign( x, new Float32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Float32Array
	cunoneByRight.assign( x, new Int32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int32Array
	cunoneByRight.assign( x, new Int16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int16Array
	cunoneByRight.assign( x, new Int8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Int8Array
	cunoneByRight.assign( x, new Uint32Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint32Array
	cunoneByRight.assign( x, new Uint16Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint16Array
	cunoneByRight.assign( x, new Uint8Array( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8Array
	cunoneByRight.assign( x, new Uint8ClampedArray( 4 ), 1, 0, isPositive, {} ); // $ExpectType Uint8ClampedArray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cunoneByRight.assign( 1, x, 2, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( true, x, 2, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( false, x, 2, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( null, x, 2, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( void 0, x, 2, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( {}, x, 2, 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const x = [ 1, 1, 0, 0, 0 ];

	cunoneByRight.assign( x, true, 1, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, false, 1, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, null, 1, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, void 0, 1, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, {}, 1, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, 1, 1, 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneByRight.assign( x, y, '1', 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, true, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, false, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, null, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, void 0, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, {}, 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, [], 0, isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneByRight.assign( x, y, 1, '1', isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, 1, true, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, 1, false, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, 1, null, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, 1, void 0, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, 1, {}, isPositive ); // $ExpectError
	cunoneByRight.assign( x, y, 1, [], isPositive ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a function...
{
	const x = [ 1, 1, 0, 0, 0 ];
	const y = [ false, null, false, null, false, null, false, null, false, null ];

	cunoneByRight.assign( x, y, 1, 0, 2 ); // $ExpectError
	cunoneByRight.assign( x, y, 1, 0, false ); // $ExpectError
	cunoneByRight.assign( x, y, 1, 0, true ); // $ExpectError
	cunoneByRight.assign( x, y, 1, 0, 'abc' ); // $ExpectError
	cunoneByRight.assign( x, y, 1, 0, void 0 ); // $ExpectError
	cunoneByRight.assign( x, y, 1, 0, {} ); // $ExpectError
	cunoneByRight.assign( x, y, 1, 0, [] ); // $ExpectError
}
// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	cunoneByRight.assign(); // $ExpectError
	cunoneByRight.assign( [] ); // $ExpectError
	cunoneByRight.assign( [], [] ); // $ExpectError
	cunoneByRight.assign( [], [], 2 ); // $ExpectError
	cunoneByRight.assign( [], [], 2, {} ); // $ExpectError
	cunoneByRight.assign( [], [], 1, 1, {}, [], {} ); // $ExpectError
}

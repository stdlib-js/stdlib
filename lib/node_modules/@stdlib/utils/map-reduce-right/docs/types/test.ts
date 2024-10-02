/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import array = require( '@stdlib/ndarray/array' );
import mapReduceRight = require( './index' );

/**
* Mapping function.
*
* @param value - array element
* @returns result
*/
function mapper( value: number ): number {
	return value;
}

/**
* Reducing function.
*
* @param acc - accumulated value
* @param value - array element
* @returns result
*/
function reducer( acc: number, value: number ): number {
	return acc + value;
}


// TESTS //

// The function returns the accumulated value when provided a collection...
{
	mapReduceRight( [ 0, 1, 1, NaN, 2 ], 0, mapper, reducer ); // $ExpectType number
	mapReduceRight( [ -1, 1, 2 ], 100, mapper, reducer ); // $ExpectType number
	mapReduceRight( [ -1, 1, 2 ], 0, mapper, reducer, {} ); // $ExpectType number
}

// The function returns the accumulated value when provided an ndarray...
{
	const arr = array<number>( [ 1, 2, 3, 4, 5, 6 ] );

	mapReduceRight( arr, 0, mapper, reducer ); // $ExpectType number
	mapReduceRight( arr, 100, mapper, reducer ); // $ExpectType number
	mapReduceRight( arr, 0, mapper, reducer, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection or ndarray...
{
	mapReduceRight( 2, 0, mapper, reducer ); // $ExpectError
	mapReduceRight( false, 0, mapper, reducer ); // $ExpectError
	mapReduceRight( true, 0, mapper, reducer ); // $ExpectError
	mapReduceRight( null, 0, mapper, reducer ); // $ExpectError
	mapReduceRight( {}, 0, mapper, reducer ); // $ExpectError

	mapReduceRight( 2, 0, mapper, reducer, {} ); // $ExpectError
	mapReduceRight( false, 0, mapper, reducer, {} ); // $ExpectError
	mapReduceRight( true, 0, mapper, reducer, {} ); // $ExpectError
	mapReduceRight( null, 0, mapper, reducer, {} ); // $ExpectError
	mapReduceRight( {}, 0, mapper, reducer, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function with a supported signature...
{
	const arr1 = [ 0, 1, 1, NaN, 2 ];

	mapReduceRight( arr1, 0, 'abc', reducer ); // $ExpectError
	mapReduceRight( arr1, 0, 2, reducer ); // $ExpectError
	mapReduceRight( arr1, 0, false, reducer ); // $ExpectError
	mapReduceRight( arr1, 0, true, reducer ); // $ExpectError
	mapReduceRight( arr1, 0, null, reducer ); // $ExpectError
	mapReduceRight( arr1, 0, {}, reducer ); // $ExpectError
	mapReduceRight( arr1, 0, [], reducer ); // $ExpectError

	mapReduceRight( arr1, 0, 'abc', reducer, {} ); // $ExpectError
	mapReduceRight( arr1, 0, 2, reducer, {} ); // $ExpectError
	mapReduceRight( arr1, 0, false, reducer, {} ); // $ExpectError
	mapReduceRight( arr1, 0, true, reducer, {} ); // $ExpectError
	mapReduceRight( arr1, 0, null, reducer, {} ); // $ExpectError
	mapReduceRight( arr1, 0, {}, reducer, {} ); // $ExpectError
	mapReduceRight( arr1, 0, [], reducer, {} ); // $ExpectError

	mapReduceRight( arr1, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, reducer ); // $ExpectError
	mapReduceRight( arr1, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, reducer, {} ); // $ExpectError

	const arr2 = array( [ 0, 1, 1, NaN, 2 ] );

	mapReduceRight( arr2, 0, 'abc', reducer ); // $ExpectError
	mapReduceRight( arr2, 0, 2, reducer ); // $ExpectError
	mapReduceRight( arr2, 0, false, reducer ); // $ExpectError
	mapReduceRight( arr2, 0, true, reducer ); // $ExpectError
	mapReduceRight( arr2, 0, null, reducer ); // $ExpectError
	mapReduceRight( arr2, 0, {}, reducer ); // $ExpectError
	mapReduceRight( arr2, 0, [], reducer ); // $ExpectError

	mapReduceRight( arr2, 0, 'abc', reducer, {} ); // $ExpectError
	mapReduceRight( arr2, 0, 2, reducer, {} ); // $ExpectError
	mapReduceRight( arr2, 0, false, reducer, {} ); // $ExpectError
	mapReduceRight( arr2, 0, true, reducer, {} ); // $ExpectError
	mapReduceRight( arr2, 0, null, reducer, {} ); // $ExpectError
	mapReduceRight( arr2, 0, {}, reducer, {} ); // $ExpectError
	mapReduceRight( arr2, 0, [], reducer, {} ); // $ExpectError

	mapReduceRight( arr2, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, reducer ); // $ExpectError
	mapReduceRight( arr2, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, reducer, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function with a supported signature...
{
	const arr1 = [ 0, 1, 1, NaN, 2 ];

	mapReduceRight( arr1, 0, mapper, 'abc' ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, 2 ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, false ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, true ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, null ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, [] ); // $ExpectError

	mapReduceRight( arr1, 0, mapper, 'abc', {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, 2, {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, false, {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, true, {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, null, {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, {}, {} ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, [], {} ); // $ExpectError

	mapReduceRight( arr1, 0, mapper, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError

	const arr2 = array( [ 0, 1, 1, NaN, 2 ] );

	mapReduceRight( arr2, 0, mapper, 'abc' ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, 2 ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, false ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, true ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, null ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, [] ); // $ExpectError

	mapReduceRight( arr2, 0, mapper, 'abc', {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, 2, {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, false, {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, true, {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, null, {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, {}, {} ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, [], {} ); // $ExpectError

	mapReduceRight( arr2, 0, mapper, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr1 = [ 1, 2, 3 ];

	mapReduceRight(); // $ExpectError
	mapReduceRight( arr1 ); // $ExpectError
	mapReduceRight( arr1, 0 ); // $ExpectError
	mapReduceRight( arr1, 0, mapper ); // $ExpectError
	mapReduceRight( arr1, 0, mapper, reducer, {}, 3 ); // $ExpectError

	const arr2 = array( [ 1, 2, 3 ] );

	mapReduceRight(); // $ExpectError
	mapReduceRight( arr2 ); // $ExpectError
	mapReduceRight( arr2, 0 ); // $ExpectError
	mapReduceRight( arr2, 0, mapper ); // $ExpectError
	mapReduceRight( arr2, 0, mapper, reducer, {}, 3 ); // $ExpectError
}

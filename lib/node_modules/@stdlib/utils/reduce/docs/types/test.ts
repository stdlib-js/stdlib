/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
import reduce = require( './index' );

/**
* Callback function.
*
* @param acc - accumulated value
* @param v - array element
* @returns result
*/
function clbk( acc: number, value: number ): number {
	return acc + value;
}


// TESTS //

// The function returns the accumulated value when provided a collection...
{
	reduce( [ 0, 1, 1, NaN, 2 ], 0, clbk ); // $ExpectType number
	reduce( [ -1, 1, 2 ], 100, clbk ); // $ExpectType number
	reduce( [ -1, 1, 2 ], 0, clbk, {} ); // $ExpectType number
}

// The function returns the accumulated value when provided an ndarray...
{
	const arr = array<number>( [ 1, 2, 3, 4, 5, 6 ] );

	reduce( arr, 0, clbk ); // $ExpectType number
	reduce( arr, 100, clbk ); // $ExpectType number
	reduce( arr, 0, clbk, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection or ndarray...
{
	reduce( 2, 0, clbk ); // $ExpectError
	reduce( false, 0, clbk ); // $ExpectError
	reduce( true, 0, clbk ); // $ExpectError
	reduce( null, 0, clbk ); // $ExpectError
	reduce( {}, 0, clbk ); // $ExpectError

	reduce( 2, 0, clbk, {} ); // $ExpectError
	reduce( false, 0, clbk, {} ); // $ExpectError
	reduce( true, 0, clbk, {} ); // $ExpectError
	reduce( null, 0, clbk, {} ); // $ExpectError
	reduce( {}, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function with a supported signature...
{
	const arr1 = [ 0, 1, 1, NaN, 2 ];

	reduce( arr1, 0, 'abc' ); // $ExpectError
	reduce( arr1, 0, 2 ); // $ExpectError
	reduce( arr1, 0, false ); // $ExpectError
	reduce( arr1, 0, true ); // $ExpectError
	reduce( arr1, 0, null ); // $ExpectError
	reduce( arr1, 0, {} ); // $ExpectError
	reduce( arr1, 0, [] ); // $ExpectError

	reduce( arr1, 0, 'abc', {} ); // $ExpectError
	reduce( arr1, 0, 2, {} ); // $ExpectError
	reduce( arr1, 0, false, {} ); // $ExpectError
	reduce( arr1, 0, true, {} ); // $ExpectError
	reduce( arr1, 0, null, {} ); // $ExpectError
	reduce( arr1, 0, {}, {} ); // $ExpectError
	reduce( arr1, 0, [], {} ); // $ExpectError

	reduce( arr1, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	reduce( arr1, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError

	const arr2 = array( [ 0, 1, 1, NaN, 2 ] );

	reduce( arr2, 0, 'abc' ); // $ExpectError
	reduce( arr2, 0, 2 ); // $ExpectError
	reduce( arr2, 0, false ); // $ExpectError
	reduce( arr2, 0, true ); // $ExpectError
	reduce( arr2, 0, null ); // $ExpectError
	reduce( arr2, 0, {} ); // $ExpectError
	reduce( arr2, 0, [] ); // $ExpectError

	reduce( arr2, 0, 'abc', {} ); // $ExpectError
	reduce( arr2, 0, 2, {} ); // $ExpectError
	reduce( arr2, 0, false, {} ); // $ExpectError
	reduce( arr2, 0, true, {} ); // $ExpectError
	reduce( arr2, 0, null, {} ); // $ExpectError
	reduce( arr2, 0, {}, {} ); // $ExpectError
	reduce( arr2, 0, [], {} ); // $ExpectError

	reduce( arr2, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	reduce( arr2, 0, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr1 = [ 1, 2, 3 ];

	reduce(); // $ExpectError
	reduce( arr1 ); // $ExpectError
	reduce( arr1, 0 ); // $ExpectError
	reduce( arr1, 0, clbk, {}, 3 ); // $ExpectError

	const arr2 = array( [ 1, 2, 3 ] );

	reduce(); // $ExpectError
	reduce( arr2 ); // $ExpectError
	reduce( arr2, 0 ); // $ExpectError
	reduce( arr2, 0, clbk, {}, 3 ); // $ExpectError
}

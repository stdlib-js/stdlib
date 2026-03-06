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

import array = require( '@stdlib/ndarray/array' );
import mapRight = require( './index' );

/**
* Callback function.
*
* @param v - argument
* @returns result
*/
function clbk( v: number ): number {
	return v;
}


// TESTS //

// The function returns a collection when provided a collection...
{
	const arr = [ 1, 2, 3, 4, 5, 6 ];

	mapRight( arr, clbk ); // $ExpectType number[]
	mapRight( arr, clbk, {} ); // $ExpectType number[]
}

// The function returns an ndarray when provided an ndarray...
{
	const arr = array<number>( [ 1, 2, 3, 4, 5, 6 ] );

	mapRight( arr, clbk ); // $ExpectType typedndarray<number>
	mapRight( arr, clbk, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument other than a collection or ndarray...
{
	mapRight( 5, clbk ); // $ExpectError
	mapRight( true, clbk ); // $ExpectError
	mapRight( false, clbk ); // $ExpectError
	mapRight( null, clbk, {} ); // $ExpectError
	mapRight( {}, clbk ); // $ExpectError

	mapRight( 5, clbk, {} ); // $ExpectError
	mapRight( true, clbk, {} ); // $ExpectError
	mapRight( false, clbk, {} ); // $ExpectError
	mapRight( null, clbk, {} ); // $ExpectError
	mapRight( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function with a supported signature...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];

	mapRight( arr1, '5' ); // $ExpectError
	mapRight( arr1, true ); // $ExpectError
	mapRight( arr1, false ); // $ExpectError
	mapRight( arr1, 123 ); // $ExpectError
	mapRight( arr1, null ); // $ExpectError
	mapRight( arr1, {} ); // $ExpectError
	mapRight( arr1, [] ); // $ExpectError

	mapRight( arr1, '5', {} ); // $ExpectError
	mapRight( arr1, true, {} ); // $ExpectError
	mapRight( arr1, false, {} ); // $ExpectError
	mapRight( arr1, 123, {} ); // $ExpectError
	mapRight( arr1, null, {} ); // $ExpectError
	mapRight( arr1, {}, {} ); // $ExpectError
	mapRight( arr1, [], {} ); // $ExpectError

	mapRight( arr1, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	mapRight( arr1, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );

	mapRight( arr2, '5' ); // $ExpectError
	mapRight( arr2, true ); // $ExpectError
	mapRight( arr2, false ); // $ExpectError
	mapRight( arr2, 123 ); // $ExpectError
	mapRight( arr2, null ); // $ExpectError
	mapRight( arr2, {} ); // $ExpectError
	mapRight( arr2, [] ); // $ExpectError

	mapRight( arr2, '5', {} ); // $ExpectError
	mapRight( arr2, true, {} ); // $ExpectError
	mapRight( arr2, false, {} ); // $ExpectError
	mapRight( arr2, 123, {} ); // $ExpectError
	mapRight( arr2, null, {} ); // $ExpectError
	mapRight( arr2, {}, {} ); // $ExpectError
	mapRight( arr2, [], {} ); // $ExpectError

	mapRight( arr2, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	mapRight( arr2, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];

	mapRight(); // $ExpectError
	mapRight( arr1 ); // $ExpectError
	mapRight( arr1, clbk, {}, 4 ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );

	mapRight(); // $ExpectError
	mapRight( arr2 ); // $ExpectError
	mapRight( arr2, clbk, {}, 4 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection when provided a collection...
{
	const arr = [ 1, 2, 3, 4, 5, 6 ];
	const out = [ 0, 0, 0, 0, 0, 0 ];

	mapRight.assign( arr, out, clbk ); // $ExpectType Collection<number>
	mapRight.assign( arr, out, clbk, {} ); // $ExpectType Collection<number>
}

// The `assign` method returns an ndarray when provided an ndarray...
{
	const arr = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const out = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	mapRight.assign( arr, out, clbk ); // $ExpectType typedndarray<number>
	mapRight.assign( arr, out, clbk, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `assign` method is provided a first argument other than a collection or ndarray...
{
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	mapRight.assign( 5, out1, clbk ); // $ExpectError
	mapRight.assign( true, out1, clbk ); // $ExpectError
	mapRight.assign( false, out1, clbk ); // $ExpectError
	mapRight.assign( null, out1, clbk, {} ); // $ExpectError
	mapRight.assign( {}, out1, clbk ); // $ExpectError

	mapRight.assign( 5, out1, clbk, {} ); // $ExpectError
	mapRight.assign( true, out1, clbk, {} ); // $ExpectError
	mapRight.assign( false, out1, clbk, {} ); // $ExpectError
	mapRight.assign( null, out1, clbk, {} ); // $ExpectError
	mapRight.assign( {}, out1, clbk, {} ); // $ExpectError

	const out2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	mapRight.assign( 5, out2, clbk ); // $ExpectError
	mapRight.assign( true, out2, clbk ); // $ExpectError
	mapRight.assign( false, out2, clbk ); // $ExpectError
	mapRight.assign( null, out2, clbk, {} ); // $ExpectError
	mapRight.assign( {}, out2, clbk ); // $ExpectError

	mapRight.assign( 5, out2, clbk, {} ); // $ExpectError
	mapRight.assign( true, out2, clbk, {} ); // $ExpectError
	mapRight.assign( false, out2, clbk, {} ); // $ExpectError
	mapRight.assign( null, out2, clbk, {} ); // $ExpectError
	mapRight.assign( {}, out2, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument other than a collection or ndarray...
{
	const arr1 = [ 0, 0, 0, 0, 0, 0 ];

	mapRight.assign( arr1, 5, clbk ); // $ExpectError
	mapRight.assign( arr1, true, clbk ); // $ExpectError
	mapRight.assign( arr1, false, clbk ); // $ExpectError
	mapRight.assign( arr1, null, clbk, {} ); // $ExpectError
	mapRight.assign( arr1, {}, clbk ); // $ExpectError

	mapRight.assign( arr1, 5, clbk, {} ); // $ExpectError
	mapRight.assign( arr1, true, clbk, {} ); // $ExpectError
	mapRight.assign( arr1, false, clbk, {} ); // $ExpectError
	mapRight.assign( arr1, null, clbk, {} ); // $ExpectError
	mapRight.assign( arr1, {}, clbk, {} ); // $ExpectError

	const arr2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	mapRight.assign( arr2, 5, clbk ); // $ExpectError
	mapRight.assign( arr2, true, clbk ); // $ExpectError
	mapRight.assign( arr2, false, clbk ); // $ExpectError
	mapRight.assign( arr2, null, clbk, {} ); // $ExpectError
	mapRight.assign( arr2, {}, clbk ); // $ExpectError

	mapRight.assign( arr2, 5, clbk, {} ); // $ExpectError
	mapRight.assign( arr2, true, clbk, {} ); // $ExpectError
	mapRight.assign( arr2, false, clbk, {} ); // $ExpectError
	mapRight.assign( arr2, null, clbk, {} ); // $ExpectError
	mapRight.assign( arr2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument other than a function with a supported signature...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	mapRight.assign( arr1, out1, '5' ); // $ExpectError
	mapRight.assign( arr1, out1, true ); // $ExpectError
	mapRight.assign( arr1, out1, false ); // $ExpectError
	mapRight.assign( arr1, out1, 123 ); // $ExpectError
	mapRight.assign( arr1, out1, null ); // $ExpectError
	mapRight.assign( arr1, out1, {} ); // $ExpectError
	mapRight.assign( arr1, out1, [] ); // $ExpectError

	mapRight.assign( arr1, out1, '5', {} ); // $ExpectError
	mapRight.assign( arr1, out1, true, {} ); // $ExpectError
	mapRight.assign( arr1, out1, false, {} ); // $ExpectError
	mapRight.assign( arr1, out1, 123, {} ); // $ExpectError
	mapRight.assign( arr1, out1, null, {} ); // $ExpectError
	mapRight.assign( arr1, out1, {}, {} ); // $ExpectError
	mapRight.assign( arr1, out1, [], {} ); // $ExpectError

	mapRight.assign( arr1, out1, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	mapRight.assign( arr1, out1, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );
	const out2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	mapRight.assign( arr2, out2, '5' ); // $ExpectError
	mapRight.assign( arr2, out2, true ); // $ExpectError
	mapRight.assign( arr2, out2, false ); // $ExpectError
	mapRight.assign( arr2, out2, 123 ); // $ExpectError
	mapRight.assign( arr2, out2, null ); // $ExpectError
	mapRight.assign( arr2, out2, {} ); // $ExpectError
	mapRight.assign( arr2, out2, [] ); // $ExpectError

	mapRight.assign( arr2, out2, '5', {} ); // $ExpectError
	mapRight.assign( arr2, out2, true, {} ); // $ExpectError
	mapRight.assign( arr2, out2, false, {} ); // $ExpectError
	mapRight.assign( arr2, out2, 123, {} ); // $ExpectError
	mapRight.assign( arr2, out2, null, {} ); // $ExpectError
	mapRight.assign( arr2, out2, {}, {} ); // $ExpectError
	mapRight.assign( arr2, out2, [], {} ); // $ExpectError

	mapRight.assign( arr2, out2, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	mapRight.assign( arr2, out2, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	mapRight.assign(); // $ExpectError
	mapRight.assign( arr1 ); // $ExpectError
	mapRight.assign( arr1, out1 ); // $ExpectError
	mapRight.assign( arr1, out1, clbk, {}, 4 ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );
	const out2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	mapRight.assign(); // $ExpectError
	mapRight.assign( arr2 ); // $ExpectError
	mapRight.assign( arr2, out2 ); // $ExpectError
	mapRight.assign( arr2, out2, clbk, {}, 4 ); // $ExpectError
}

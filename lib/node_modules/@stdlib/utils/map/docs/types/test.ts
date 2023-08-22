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
import map = require( './index' );

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

// The function returns an array when provided a collection...
{
	const arr = [ 1, 2, 3, 4, 5, 6 ];

	map( arr, clbk ); // $ExpectType number[]
	map( arr, clbk, {} ); // $ExpectType number[]
}

// The function returns an ndarray when provided an ndarray...
{
	const arr = array<number>( [ 1, 2, 3, 4, 5, 6 ] );

	map( arr, clbk ); // $ExpectType typedndarray<number>
	map( arr, clbk, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument other than a collection or ndarray...
{
	map( 5, clbk ); // $ExpectError
	map( true, clbk ); // $ExpectError
	map( false, clbk ); // $ExpectError
	map( null, clbk, {} ); // $ExpectError
	map( {}, clbk ); // $ExpectError

	map( 5, clbk, {} ); // $ExpectError
	map( true, clbk, {} ); // $ExpectError
	map( false, clbk, {} ); // $ExpectError
	map( null, clbk, {} ); // $ExpectError
	map( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function with a supported signature...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];

	map( arr1, '5' ); // $ExpectError
	map( arr1, true ); // $ExpectError
	map( arr1, false ); // $ExpectError
	map( arr1, 123 ); // $ExpectError
	map( arr1, null ); // $ExpectError
	map( arr1, {} ); // $ExpectError
	map( arr1, [] ); // $ExpectError

	map( arr1, '5', {} ); // $ExpectError
	map( arr1, true, {} ); // $ExpectError
	map( arr1, false, {} ); // $ExpectError
	map( arr1, 123, {} ); // $ExpectError
	map( arr1, null, {} ); // $ExpectError
	map( arr1, {}, {} ); // $ExpectError
	map( arr1, [], {} ); // $ExpectError

	map( arr1, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	map( arr1, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );

	map( arr2, '5' ); // $ExpectError
	map( arr2, true ); // $ExpectError
	map( arr2, false ); // $ExpectError
	map( arr2, 123 ); // $ExpectError
	map( arr2, null ); // $ExpectError
	map( arr2, {} ); // $ExpectError
	map( arr2, [] ); // $ExpectError

	map( arr2, '5', {} ); // $ExpectError
	map( arr2, true, {} ); // $ExpectError
	map( arr2, false, {} ); // $ExpectError
	map( arr2, 123, {} ); // $ExpectError
	map( arr2, null, {} ); // $ExpectError
	map( arr2, {}, {} ); // $ExpectError
	map( arr2, [], {} ); // $ExpectError

	map( arr2, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	map( arr2, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];

	map(); // $ExpectError
	map( arr1 ); // $ExpectError
	map( arr1, clbk, {}, 4 ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );

	map(); // $ExpectError
	map( arr2 ); // $ExpectError
	map( arr2, clbk, {}, 4 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection when provided a collection...
{
	const arr = [ 1, 2, 3, 4, 5, 6 ];
	const out = [ 0, 0, 0, 0, 0, 0 ];

	map.assign( arr, out, clbk ); // $ExpectType Collection<number>
	map.assign( arr, out, clbk, {} ); // $ExpectType Collection<number>
}

// The `assign` method returns an ndarray when provided an ndarray...
{
	const arr = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const out = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	map.assign( arr, out, clbk ); // $ExpectType typedndarray<number>
	map.assign( arr, out, clbk, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `assign` method is provided a first argument other than a collection or ndarray...
{
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map.assign( 5, out1, clbk ); // $ExpectError
	map.assign( true, out1, clbk ); // $ExpectError
	map.assign( false, out1, clbk ); // $ExpectError
	map.assign( null, out1, clbk, {} ); // $ExpectError
	map.assign( {}, out1, clbk ); // $ExpectError

	map.assign( 5, out1, clbk, {} ); // $ExpectError
	map.assign( true, out1, clbk, {} ); // $ExpectError
	map.assign( false, out1, clbk, {} ); // $ExpectError
	map.assign( null, out1, clbk, {} ); // $ExpectError
	map.assign( {}, out1, clbk, {} ); // $ExpectError

	const out2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	map.assign( 5, out2, clbk ); // $ExpectError
	map.assign( true, out2, clbk ); // $ExpectError
	map.assign( false, out2, clbk ); // $ExpectError
	map.assign( null, out2, clbk, {} ); // $ExpectError
	map.assign( {}, out2, clbk ); // $ExpectError

	map.assign( 5, out2, clbk, {} ); // $ExpectError
	map.assign( true, out2, clbk, {} ); // $ExpectError
	map.assign( false, out2, clbk, {} ); // $ExpectError
	map.assign( null, out2, clbk, {} ); // $ExpectError
	map.assign( {}, out2, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument other than a collection or ndarray...
{
	const arr1 = [ 0, 0, 0, 0, 0, 0 ];

	map.assign( arr1, 5, clbk ); // $ExpectError
	map.assign( arr1, true, clbk ); // $ExpectError
	map.assign( arr1, false, clbk ); // $ExpectError
	map.assign( arr1, null, clbk, {} ); // $ExpectError
	map.assign( arr1, {}, clbk ); // $ExpectError

	map.assign( arr1, 5, clbk, {} ); // $ExpectError
	map.assign( arr1, true, clbk, {} ); // $ExpectError
	map.assign( arr1, false, clbk, {} ); // $ExpectError
	map.assign( arr1, null, clbk, {} ); // $ExpectError
	map.assign( arr1, {}, clbk, {} ); // $ExpectError

	const arr2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	map.assign( arr2, 5, clbk ); // $ExpectError
	map.assign( arr2, true, clbk ); // $ExpectError
	map.assign( arr2, false, clbk ); // $ExpectError
	map.assign( arr2, null, clbk, {} ); // $ExpectError
	map.assign( arr2, {}, clbk ); // $ExpectError

	map.assign( arr2, 5, clbk, {} ); // $ExpectError
	map.assign( arr2, true, clbk, {} ); // $ExpectError
	map.assign( arr2, false, clbk, {} ); // $ExpectError
	map.assign( arr2, null, clbk, {} ); // $ExpectError
	map.assign( arr2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument other than a function with a supported signature...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map.assign( arr1, out1, '5' ); // $ExpectError
	map.assign( arr1, out1, true ); // $ExpectError
	map.assign( arr1, out1, false ); // $ExpectError
	map.assign( arr1, out1, 123 ); // $ExpectError
	map.assign( arr1, out1, null ); // $ExpectError
	map.assign( arr1, out1, {} ); // $ExpectError
	map.assign( arr1, out1, [] ); // $ExpectError

	map.assign( arr1, out1, '5', {} ); // $ExpectError
	map.assign( arr1, out1, true, {} ); // $ExpectError
	map.assign( arr1, out1, false, {} ); // $ExpectError
	map.assign( arr1, out1, 123, {} ); // $ExpectError
	map.assign( arr1, out1, null, {} ); // $ExpectError
	map.assign( arr1, out1, {}, {} ); // $ExpectError
	map.assign( arr1, out1, [], {} ); // $ExpectError

	map.assign( arr1, out1, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	map.assign( arr1, out1, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );
	const out2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	map.assign( arr2, out2, '5' ); // $ExpectError
	map.assign( arr2, out2, true ); // $ExpectError
	map.assign( arr2, out2, false ); // $ExpectError
	map.assign( arr2, out2, 123 ); // $ExpectError
	map.assign( arr2, out2, null ); // $ExpectError
	map.assign( arr2, out2, {} ); // $ExpectError
	map.assign( arr2, out2, [] ); // $ExpectError

	map.assign( arr2, out2, '5', {} ); // $ExpectError
	map.assign( arr2, out2, true, {} ); // $ExpectError
	map.assign( arr2, out2, false, {} ); // $ExpectError
	map.assign( arr2, out2, 123, {} ); // $ExpectError
	map.assign( arr2, out2, null, {} ); // $ExpectError
	map.assign( arr2, out2, {}, {} ); // $ExpectError
	map.assign( arr2, out2, [], {} ); // $ExpectError

	map.assign( arr2, out2, ( x: number, y: number, z: number ): number => x + y + z ); // $ExpectError
	map.assign( arr2, out2, ( x: number, y: number, z: number ): number => x + y + z, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const arr1 = [ 1, 2, 3, 4, 5, 6 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map.assign(); // $ExpectError
	map.assign( arr1 ); // $ExpectError
	map.assign( arr1, out1 ); // $ExpectError
	map.assign( arr1, out1, clbk, {}, 4 ); // $ExpectError

	const arr2 = array( [ 1, 2, 3, 4, 5, 6 ] );
	const out2 = array( [ 0, 0, 0, 0, 0, 0 ] );

	map.assign(); // $ExpectError
	map.assign( arr2 ); // $ExpectError
	map.assign( arr2, out2 ); // $ExpectError
	map.assign( arr2, out2, clbk, {}, 4 ); // $ExpectError
}

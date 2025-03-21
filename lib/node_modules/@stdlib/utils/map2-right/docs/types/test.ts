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
import map2Right = require( './index' );

/**
* Callback function.
*
* @param v1 - first value
* @param v2 - second value
* @returns result
*/
function clbk( v1: number, v2: number ): number {
	return v1 + v2;
}


// TESTS //

// The function returns a collection when provided collections...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];
	const y = [ 1, 1, 1, 1, 1, 1 ];

	map2Right( x, y, clbk ); // $ExpectType Collection<number>
	map2Right( x, y, clbk, {} ); // $ExpectType Collection<number>
}

// The function returns an ndarray when provided ndarrays...
{
	const x = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const y = array<number>( [ 1, 1, 1, 1, 1, 1 ] );

	map2Right( x, y, clbk ); // $ExpectType typedndarray<number>
	map2Right( x, y, clbk, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument other than a collection or ndarray...
{
	const y = [ 1, 1, 1, 1, 1, 1 ];

	map2Right( 5, y, clbk ); // $ExpectError
	map2Right( true, y, clbk ); // $ExpectError
	map2Right( false, y, clbk ); // $ExpectError
	map2Right( null, y, clbk, {} ); // $ExpectError
	map2Right( {}, y, clbk ); // $ExpectError

	map2Right( 5, y, clbk, {} ); // $ExpectError
	map2Right( true, y, clbk, {} ); // $ExpectError
	map2Right( false, y, clbk, {} ); // $ExpectError
	map2Right( null, y, clbk, {} ); // $ExpectError
	map2Right( {}, y, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a collection or ndarray...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];

	map2Right( x, 5, clbk ); // $ExpectError
	map2Right( x, true, clbk ); // $ExpectError
	map2Right( x, false, clbk ); // $ExpectError
	map2Right( x, null, clbk, {} ); // $ExpectError
	map2Right( x, {}, clbk ); // $ExpectError

	map2Right( x, 5, clbk, {} ); // $ExpectError
	map2Right( x, true, clbk, {} ); // $ExpectError
	map2Right( x, false, clbk, {} ); // $ExpectError
	map2Right( x, null, clbk, {} ); // $ExpectError
	map2Right( x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument other than a function with a supported signature...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	const y1 = [ 1, 1, 1, 1, 1, 1 ];

	map2Right( x1, y1, '5' ); // $ExpectError
	map2Right( x1, y1, true ); // $ExpectError
	map2Right( x1, y1, false ); // $ExpectError
	map2Right( x1, y1, 123 ); // $ExpectError
	map2Right( x1, y1, null ); // $ExpectError
	map2Right( x1, y1, {} ); // $ExpectError
	map2Right( x1, y1, [] ); // $ExpectError

	map2Right( x1, y1, '5', {} ); // $ExpectError
	map2Right( x1, y1, true, {} ); // $ExpectError
	map2Right( x1, y1, false, {} ); // $ExpectError
	map2Right( x1, y1, 123, {} ); // $ExpectError
	map2Right( x1, y1, null, {} ); // $ExpectError
	map2Right( x1, y1, {}, {} ); // $ExpectError
	map2Right( x1, y1, [], {} ); // $ExpectError

	map2Right( x1, y1, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	map2Right( x1, y1, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError

	const x2 = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const y2 = array<number>( [ 1, 1, 1, 1, 1, 1 ] );

	map2Right( x2, y2, '5' ); // $ExpectError
	map2Right( x2, y2, true ); // $ExpectError
	map2Right( x2, y2, false ); // $ExpectError
	map2Right( x2, y2, 123 ); // $ExpectError
	map2Right( x2, y2, null ); // $ExpectError
	map2Right( x2, y2, {} ); // $ExpectError
	map2Right( x2, y2, [] ); // $ExpectError

	map2Right( x2, y2, '5', {} ); // $ExpectError
	map2Right( x2, y2, true, {} ); // $ExpectError
	map2Right( x2, y2, false, {} ); // $ExpectError
	map2Right( x2, y2, 123, {} ); // $ExpectError
	map2Right( x2, y2, null, {} ); // $ExpectError
	map2Right( x2, y2, {}, {} ); // $ExpectError
	map2Right( x2, y2, [], {} ); // $ExpectError

	map2Right( x2, y2, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	map2Right( x2, y2, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	const y1 = [ 1, 1, 1, 1, 1, 1 ];

	map2Right(); // $ExpectError
	map2Right( x1 ); // $ExpectError
	map2Right( x1, y1 ); // $ExpectError
	map2Right( x1, y1, clbk, {}, 4 ); // $ExpectError

	const x2 = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const y2 = array<number>( [ 1, 1, 1, 1, 1, 1 ] );

	map2Right(); // $ExpectError
	map2Right( x2 ); // $ExpectError
	map2Right( x2, y2 ); // $ExpectError
	map2Right( x2, y2, clbk, {}, 4 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection when provided collections...
{
	const x = [ 1, 2, 3, 4, 5, 6 ];
	const y = [ 1, 1, 1, 1, 1, 1 ];
	const out = [ 0, 0, 0, 0, 0, 0 ];

	map2Right.assign( x, y, out, clbk ); // $ExpectType Collection<number>
	map2Right.assign( x, y, out, clbk, {} ); // $ExpectType Collection<number>
}

// The `assign` method returns an ndarray when provided ndarrays...
{
	const x = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const y = array<number>( [ 1, 1, 1, 1, 1, 1 ] );
	const out = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	map2Right.assign( x, y, out, clbk ); // $ExpectType typedndarray<number>
	map2Right.assign( x, y, out, clbk, {} ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the `assign` method is provided a first argument other than a collection or ndarray...
{
	const y1 = [ 1, 1, 1, 1, 1, 1 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map2Right.assign( 5, y1, out1, clbk ); // $ExpectError
	map2Right.assign( true, y1, out1, clbk ); // $ExpectError
	map2Right.assign( false, y1, out1, clbk ); // $ExpectError
	map2Right.assign( null, y1, out1, clbk, {} ); // $ExpectError
	map2Right.assign( {}, y1, out1, clbk ); // $ExpectError

	map2Right.assign( 5, y1, out1, clbk, {} ); // $ExpectError
	map2Right.assign( true, y1, out1, clbk, {} ); // $ExpectError
	map2Right.assign( false, y1, out1, clbk, {} ); // $ExpectError
	map2Right.assign( null, y1, out1, clbk, {} ); // $ExpectError
	map2Right.assign( {}, y1, out1, clbk, {} ); // $ExpectError

	const y2 = array<number>( [ 1, 1, 1, 1, 1, 1 ] );
	const out2 = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	map2Right.assign( 5, y2, out2, clbk ); // $ExpectError
	map2Right.assign( true, y2, out2, clbk ); // $ExpectError
	map2Right.assign( false, y2, out2, clbk ); // $ExpectError
	map2Right.assign( null, y2, out2, clbk, {} ); // $ExpectError
	map2Right.assign( {}, y2, out2, clbk ); // $ExpectError

	map2Right.assign( 5, y2, out2, clbk, {} ); // $ExpectError
	map2Right.assign( true, y2, out2, clbk, {} ); // $ExpectError
	map2Right.assign( false, y2, out2, clbk, {} ); // $ExpectError
	map2Right.assign( null, y2, out2, clbk, {} ); // $ExpectError
	map2Right.assign( {}, y2, out2, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument other than a collection or ndarray...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map2Right.assign( x1, 5, out1, clbk ); // $ExpectError
	map2Right.assign( x1, true, out1, clbk ); // $ExpectError
	map2Right.assign( x1, false, out1, clbk ); // $ExpectError
	map2Right.assign( x1, null, out1, clbk, {} ); // $ExpectError
	map2Right.assign( x1, {}, out1, clbk ); // $ExpectError

	map2Right.assign( x1, 5, out1, clbk, {} ); // $ExpectError
	map2Right.assign( x1, true, out1, clbk, {} ); // $ExpectError
	map2Right.assign( x1, false, out1, clbk, {} ); // $ExpectError
	map2Right.assign( x1, null, out1, clbk, {} ); // $ExpectError
	map2Right.assign( x1, {}, out1, clbk, {} ); // $ExpectError

	const x2 = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const out2 = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	map2Right.assign( x2, 5, out2, clbk ); // $ExpectError
	map2Right.assign( x2, true, out2, clbk ); // $ExpectError
	map2Right.assign( x2, false, out2, clbk ); // $ExpectError
	map2Right.assign( x2, null, out2, clbk, {} ); // $ExpectError
	map2Right.assign( x2, {}, out2, clbk ); // $ExpectError

	map2Right.assign( x2, 5, out2, clbk, {} ); // $ExpectError
	map2Right.assign( x2, true, out2, clbk, {} ); // $ExpectError
	map2Right.assign( x2, false, out2, clbk, {} ); // $ExpectError
	map2Right.assign( x2, null, out2, clbk, {} ); // $ExpectError
	map2Right.assign( x2, {}, out2, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument other than a collection or ndarray...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	const y1 = [ 1, 1, 1, 1, 1, 1 ];

	map2Right.assign( x1, y1, 5, clbk ); // $ExpectError
	map2Right.assign( x1, y1, true, clbk ); // $ExpectError
	map2Right.assign( x1, y1, false, clbk ); // $ExpectError
	map2Right.assign( x1, y1, null, clbk, {} ); // $ExpectError
	map2Right.assign( x1, y1, {}, clbk ); // $ExpectError

	map2Right.assign( x1, y1, 5, clbk, {} ); // $ExpectError
	map2Right.assign( x1, y1, true, clbk, {} ); // $ExpectError
	map2Right.assign( x1, y1, false, clbk, {} ); // $ExpectError
	map2Right.assign( x1, y1, null, clbk, {} ); // $ExpectError
	map2Right.assign( x1, y1, {}, clbk, {} ); // $ExpectError

	const x2 = array<number>( [ 0, 0, 0, 0, 0, 0 ] );
	const y2 = array<number>( [ 1, 1, 1, 1, 1, 1 ] );

	map2Right.assign( x2, y2, 5, clbk ); // $ExpectError
	map2Right.assign( x2, y2, true, clbk ); // $ExpectError
	map2Right.assign( x2, y2, false, clbk ); // $ExpectError
	map2Right.assign( x2, y2, null, clbk, {} ); // $ExpectError
	map2Right.assign( x2, y2, {}, clbk ); // $ExpectError

	map2Right.assign( x2, y2, 5, clbk, {} ); // $ExpectError
	map2Right.assign( x2, y2, true, clbk, {} ); // $ExpectError
	map2Right.assign( x2, y2, false, clbk, {} ); // $ExpectError
	map2Right.assign( x2, y2, null, clbk, {} ); // $ExpectError
	map2Right.assign( x2, y2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument other than a function with a supported signature...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	const y1 = [ 1, 1, 1, 1, 1, 1 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map2Right.assign( x1, y1, out1, '5' ); // $ExpectError
	map2Right.assign( x1, y1, out1, true ); // $ExpectError
	map2Right.assign( x1, y1, out1, false ); // $ExpectError
	map2Right.assign( x1, y1, out1, 123 ); // $ExpectError
	map2Right.assign( x1, y1, out1, null ); // $ExpectError
	map2Right.assign( x1, y1, out1, {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, [] ); // $ExpectError

	map2Right.assign( x1, y1, out1, '5', {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, true, {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, false, {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, 123, {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, null, {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, {}, {} ); // $ExpectError
	map2Right.assign( x1, y1, out1, [], {} ); // $ExpectError

	map2Right.assign( x1, y1, out1, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	map2Right.assign( x1, y1, out1, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError

	const x2 = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const y2 = array<number>( [ 1, 1, 1, 1, 1, 1 ] );
	const out2 = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	map2Right.assign( x2, y2, out2, '5' ); // $ExpectError
	map2Right.assign( x2, y2, out2, true ); // $ExpectError
	map2Right.assign( x2, y2, out2, false ); // $ExpectError
	map2Right.assign( x2, y2, out2, 123 ); // $ExpectError
	map2Right.assign( x2, y2, out2, null ); // $ExpectError
	map2Right.assign( x2, y2, out2, {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, [] ); // $ExpectError

	map2Right.assign( x2, y2, out2, '5', {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, true, {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, false, {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, 123, {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, null, {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, {}, {} ); // $ExpectError
	map2Right.assign( x2, y2, out2, [], {} ); // $ExpectError

	map2Right.assign( x2, y2, out2, ( x: number, y: number, z: number, w: number ): number => x + y + z + w ); // $ExpectError
	map2Right.assign( x2, y2, out2, ( x: number, y: number, z: number, w: number ): number => x + y + z + w, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x1 = [ 1, 2, 3, 4, 5, 6 ];
	const y1 = [ 1, 1, 1, 1, 1, 1 ];
	const out1 = [ 0, 0, 0, 0, 0, 0 ];

	map2Right.assign(); // $ExpectError
	map2Right.assign( x1 ); // $ExpectError
	map2Right.assign( x1, y1 ); // $ExpectError
	map2Right.assign( x1, y1, out1 ); // $ExpectError
	map2Right.assign( x1, y1, out1, clbk, {}, 4 ); // $ExpectError

	const x2 = array<number>( [ 1, 2, 3, 4, 5, 6 ] );
	const y2 = array<number>( [ 1, 1, 1, 1, 1, 1 ] );
	const out2 = array<number>( [ 0, 0, 0, 0, 0, 0 ] );

	map2Right.assign(); // $ExpectError
	map2Right.assign( x2 ); // $ExpectError
	map2Right.assign( x2, y2 ); // $ExpectError
	map2Right.assign( x2, y2, out2 ); // $ExpectError
	map2Right.assign( x2, y2, out2, clbk, {}, 4 ); // $ExpectError
}

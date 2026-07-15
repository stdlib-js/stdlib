/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import filled2dBy = require( './index' );

/**
* Callback function.
*
* @param indices - array element indices
* @returns return value
*/
function clbk( indices: Array<number> ): number {
	return indices[ 1 ];
}


// TESTS //

// The function returns an array...
{
	filled2dBy( 5, 1, 0, clbk ); // $ExpectType Array2D<number>
	filled2dBy( 5, 1, 0, clbk, {} ); // $ExpectType Array2D<number>
	filled2dBy( 5, 1, null, clbk, {} ); // $ExpectType Array2D<number | null>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	filled2dBy( 'abc', 1, 0, clbk ); // $ExpectError
	filled2dBy( true, 1, 0, clbk ); // $ExpectError
	filled2dBy( false, 1, 0, clbk ); // $ExpectError
	filled2dBy( null, 1, 0, clbk ); // $ExpectError
	filled2dBy( [ '1', 1 ], 1, 0, clbk ); // $ExpectError
	filled2dBy( {}, 1, 0, clbk ); // $ExpectError
	filled2dBy( ( x: number ): number => x, 1, 0, clbk ); // $ExpectError

	filled2dBy( 'abc', 1, 0, clbk, {} ); // $ExpectError
	filled2dBy( true, 1, 0, clbk, {} ); // $ExpectError
	filled2dBy( false, 1, 0, clbk, {} ); // $ExpectError
	filled2dBy( null, 1, 0, clbk, {} ); // $ExpectError
	filled2dBy( [ '1', 1 ], 1, 0, clbk, {} ); // $ExpectError
	filled2dBy( {}, 1, 0, clbk, {} ); // $ExpectError
	filled2dBy( ( x: number ): number => x, 1, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	filled2dBy( 5, 'abc', 0, clbk ); // $ExpectError
	filled2dBy( 5, true, 0, clbk ); // $ExpectError
	filled2dBy( 5, false, 0, clbk ); // $ExpectError
	filled2dBy( 5, null, 0, clbk ); // $ExpectError
	filled2dBy( 5, [ '1', 1 ], 0, clbk ); // $ExpectError
	filled2dBy( 5, {}, 0, clbk ); // $ExpectError
	filled2dBy( 5, ( x: number ): number => x, 0, clbk ); // $ExpectError

	filled2dBy( 5, 'abc', 0, clbk, {} ); // $ExpectError
	filled2dBy( 5, true, 0, clbk, {} ); // $ExpectError
	filled2dBy( 5, false, 0, clbk, {} ); // $ExpectError
	filled2dBy( 5, null, 0, clbk, {} ); // $ExpectError
	filled2dBy( 5, [ '1', 1 ], 0, clbk, {} ); // $ExpectError
	filled2dBy( 5, {}, 0, clbk, {} ); // $ExpectError
	filled2dBy( 5, ( x: number ): number => x, 0, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a callback...
{
	filled2dBy( 5, 1, 0, 'abc' ); // $ExpectError
	filled2dBy( 5, 1, 0, true ); // $ExpectError
	filled2dBy( 5, 1, 0, false ); // $ExpectError
	filled2dBy( 5, 1, 0, null ); // $ExpectError
	filled2dBy( 5, 1, 0, [] ); // $ExpectError
	filled2dBy( 5, 1, 0, {} ); // $ExpectError

	filled2dBy( 5, 1, 0, 'abc', {} ); // $ExpectError
	filled2dBy( 5, 1, 0, true, {} ); // $ExpectError
	filled2dBy( 5, 1, 0, false, {} ); // $ExpectError
	filled2dBy( 5, 1, 0, null, {} ); // $ExpectError
	filled2dBy( 5, 1, 0, [], {} ); // $ExpectError
	filled2dBy( 5, 1, 0, {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filled2dBy(); // $ExpectError
	filled2dBy( 5 ); // $ExpectError
	filled2dBy( 5, 1 ); // $ExpectError
	filled2dBy( 5, 1, 0 ); // $ExpectError
	filled2dBy( 5, 1, 0, clbk, 2, 2 ); // $ExpectError
}

/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import filled5dBy = require( './index' );

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
	filled5dBy( [ 1, 1, 1, 1, 3 ], clbk ); // $ExpectType Array5D<number>
	filled5dBy( [ 1, 1, 1, 1, 3 ], clbk, {} ); // $ExpectType Array5D<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array of numbers...
{
	filled5dBy( 'abc', clbk ); // $ExpectError
	filled5dBy( true, clbk ); // $ExpectError
	filled5dBy( false, clbk ); // $ExpectError
	filled5dBy( null, clbk ); // $ExpectError
	filled5dBy( [ '1', 1 ], clbk ); // $ExpectError
	filled5dBy( {}, clbk ); // $ExpectError
	filled5dBy( ( x: number ): number => x, clbk ); // $ExpectError

	filled5dBy( 'abc', clbk, {} ); // $ExpectError
	filled5dBy( true, clbk, {} ); // $ExpectError
	filled5dBy( false, clbk, {} ); // $ExpectError
	filled5dBy( null, clbk, {} ); // $ExpectError
	filled5dBy( [ '1', 1 ], clbk, {} ); // $ExpectError
	filled5dBy( {}, clbk, {} ); // $ExpectError
	filled5dBy( ( x: number ): number => x, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback...
{
	filled5dBy( [ 1, 1, 1, 1, 3 ], 'abc' ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], true ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], false ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], null ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], [] ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], {} ); // $ExpectError

	filled5dBy( [ 1, 1, 1, 1, 3 ], 'abc', {} ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], true, {} ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], false, {} ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], null, {} ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], [], {} ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filled5dBy(); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ] ); // $ExpectError
	filled5dBy( [ 1, 1, 1, 1, 3 ], clbk, 2, 2 ); // $ExpectError
}

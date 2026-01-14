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

import toUniqueNormalizedIndices = require( './index' );


// TESTS //

// The function returns a collection of numbers or `null`...
{
	toUniqueNormalizedIndices( [ 0, 15 ], 10 ); // $ExpectType number[] | null
}

// The compiler throws an error if the function is provided invalid values...
{
	toUniqueNormalizedIndices( true, 3 ); // $ExpectError
	toUniqueNormalizedIndices( false, 2 ); // $ExpectError
	toUniqueNormalizedIndices( '5', 1 ); // $ExpectError
	toUniqueNormalizedIndices( [ '5' ], 1 ); // $ExpectError
	toUniqueNormalizedIndices( {}, 2 ); // $ExpectError
	toUniqueNormalizedIndices( ( x: number ): number => x, 2 ); // $ExpectError

	toUniqueNormalizedIndices( [ 9 ], true ); // $ExpectError
	toUniqueNormalizedIndices( [ 9 ], false ); // $ExpectError
	toUniqueNormalizedIndices( [ 5 ], '5' ); // $ExpectError
	toUniqueNormalizedIndices( [ 8 ], [] ); // $ExpectError
	toUniqueNormalizedIndices( [ 9 ], {} ); // $ExpectError
	toUniqueNormalizedIndices( [ 8 ], ( x: number ): number => x ); // $ExpectError

	toUniqueNormalizedIndices( [], true ); // $ExpectError
	toUniqueNormalizedIndices( {}, false ); // $ExpectError
	toUniqueNormalizedIndices( false, '5' ); // $ExpectError
	toUniqueNormalizedIndices( {}, [] ); // $ExpectError
	toUniqueNormalizedIndices( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	toUniqueNormalizedIndices(); // $ExpectError
	toUniqueNormalizedIndices( [ 3 ] ); // $ExpectError
}

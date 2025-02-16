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

import toNormalizedIndices = require( './index' );


// TESTS //

// The function returns a collection of numbers...
{
	toNormalizedIndices( [ 0, 15 ], 10 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the function is provided invalid values...
{
	toNormalizedIndices( true, 3 ); // $ExpectError
	toNormalizedIndices( false, 2 ); // $ExpectError
	toNormalizedIndices( '5', 1 ); // $ExpectError
	toNormalizedIndices( [ '5' ], 1 ); // $ExpectError
	toNormalizedIndices( {}, 2 ); // $ExpectError
	toNormalizedIndices( ( x: number ): number => x, 2 ); // $ExpectError

	toNormalizedIndices( [ 9 ], true ); // $ExpectError
	toNormalizedIndices( [ 9 ], false ); // $ExpectError
	toNormalizedIndices( [ 5 ], '5' ); // $ExpectError
	toNormalizedIndices( [ 8 ], [] ); // $ExpectError
	toNormalizedIndices( [ 9 ], {} ); // $ExpectError
	toNormalizedIndices( [ 8 ], ( x: number ): number => x ); // $ExpectError

	toNormalizedIndices( [], true ); // $ExpectError
	toNormalizedIndices( {}, false ); // $ExpectError
	toNormalizedIndices( false, '5' ); // $ExpectError
	toNormalizedIndices( {}, [] ); // $ExpectError
	toNormalizedIndices( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	toNormalizedIndices(); // $ExpectError
	toNormalizedIndices( [ 3 ] ); // $ExpectError
}

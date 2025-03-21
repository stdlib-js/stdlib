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

import cartesianPower = require( './index' );


// TESTS //

// The function returns an array of arrays...
{
	cartesianPower( [ 1, 2, 3, 4 ], 3 ); // $ExpectType number[][]
	cartesianPower<number>( [ 1, 2, 3, 4 ], 3 ); // $ExpectType number[][]
	cartesianPower<string>( [ '1', '2', '3', '4' ], 3 ); // $ExpectType string[][]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	cartesianPower( 1, 3 ); // $ExpectError
	cartesianPower( true, 3 ); // $ExpectError
	cartesianPower( false, 3 ); // $ExpectError
	cartesianPower( null, 3 ); // $ExpectError
	cartesianPower( void 0, 3 ); // $ExpectError
	cartesianPower( {}, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	cartesianPower( [ 1, 2 ], '1' ); // $ExpectError
	cartesianPower( [ 1, 2 ], true ); // $ExpectError
	cartesianPower( [ 1, 2 ], false ); // $ExpectError
	cartesianPower( [ 1, 2 ], null ); // $ExpectError
	cartesianPower( [ 1, 2 ], void 0 ); // $ExpectError
	cartesianPower( [ 1, 2 ], {} ); // $ExpectError
	cartesianPower( [ 1, 2 ], [] ); // $ExpectError
	cartesianPower( [ 1, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cartesianPower(); // $ExpectError
	cartesianPower( [], 2, [] ); // $ExpectError
	cartesianPower( [], 2, [], [] ); // $ExpectError
}

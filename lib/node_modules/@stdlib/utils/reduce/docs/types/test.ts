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

import reduce = require( './index' );

const sum = ( acc: number, value: number ): number => {
	return acc + value;
};


// TESTS //

// The function returns the accumulated value...
{
	reduce( [ 0, 1, 1, NaN, 2 ], 0, sum ); // $ExpectType any
	reduce( [ -1, 1, 2 ], 100, sum ); // $ExpectType any
	reduce( [ -1, 1, 2 ], 0, sum, {} ); // $ExpectType any
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	reduce( 2, 0, sum ); // $ExpectError
	reduce( false, 0, sum ); // $ExpectError
	reduce( true, 0, sum ); // $ExpectError
	reduce( {}, 0, sum ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	reduce( [ 0, 1, 1, NaN, 2 ], 0, 2 ); // $ExpectError
	reduce( [ 0, 1, 1, NaN, 2 ], 0, false ); // $ExpectError
	reduce( [ 0, 1, 1, NaN, 2 ], 0, true ); // $ExpectError
	reduce( [ 0, 1, 1, NaN, 2 ], 0, 'abc' ); // $ExpectError
	reduce( [ 0, 1, 1, NaN, 2 ], 0, {} ); // $ExpectError
	reduce( [ 0, 1, 1, NaN, 2 ], 0, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	reduce(); // $ExpectError
	reduce( [ 1, 2, 3 ] ); // $ExpectError
	reduce( [ 1, 2, 3 ], 0 ); // $ExpectError
	reduce( [ 1, 2, 3 ], 0, sum, {}, 3 ); // $ExpectError
}

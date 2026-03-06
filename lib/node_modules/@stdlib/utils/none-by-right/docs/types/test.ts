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

import noneByRight = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns a boolean...
{
	noneByRight( [ 0, 1, 1 ], isPositive ); // $ExpectType boolean
	noneByRight( [ -1, 1, 2 ], isPositive ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	noneByRight( 2, isPositive ); // $ExpectError
	noneByRight( false, isPositive ); // $ExpectError
	noneByRight( true, isPositive ); // $ExpectError
	noneByRight( {}, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	noneByRight( [ 1, 2, 3 ], 2 ); // $ExpectError
	noneByRight( [ 1, 2, 3 ], false ); // $ExpectError
	noneByRight( [ 1, 2, 3 ], true ); // $ExpectError
	noneByRight( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	noneByRight( [ 1, 2, 3 ], {} ); // $ExpectError
	noneByRight( [ 1, 2, 3 ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	noneByRight(); // $ExpectError
	noneByRight( [ 1, 2, 3 ] ); // $ExpectError
	noneByRight( [ 1, 2, 3 ], isPositive, {}, 3 ); // $ExpectError
}

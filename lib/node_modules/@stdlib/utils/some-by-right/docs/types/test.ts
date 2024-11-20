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

import someByRight = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns a boolean...
{
	someByRight( [ 0, 1, 1 ], 2, isPositive ); // $ExpectType boolean
	someByRight( [ -1, 1, 2 ], 3, isPositive, {} ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	someByRight( 2, 2, isPositive ); // $ExpectError
	someByRight( false, 2, isPositive ); // $ExpectError
	someByRight( true, 2, isPositive ); // $ExpectError
	someByRight( {}, 2, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	someByRight( [ -1, 1, 2 ], ( x: number ): number => x, isPositive ); // $ExpectError
	someByRight( [ -1, 1, 2 ], false, isPositive ); // $ExpectError
	someByRight( [ -1, 1, 2 ], true, isPositive ); // $ExpectError
	someByRight( [ -1, 1, 2 ], 'abc', isPositive ); // $ExpectError
	someByRight( [ -1, 1, 2 ], {}, isPositive ); // $ExpectError
	someByRight( [ -1, 1, 2 ], [], isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	someByRight( [ 1, 2, 3 ], 1, 2 ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1, false ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1, true ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1, 'abc' ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1, {} ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	someByRight(); // $ExpectError
	someByRight( [ 1, 2, 3 ] ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1 ); // $ExpectError
	someByRight( [ 1, 2, 3 ], 1, isPositive, {}, 3 ); // $ExpectError
}

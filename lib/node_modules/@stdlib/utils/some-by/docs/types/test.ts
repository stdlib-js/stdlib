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

import someBy = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns a boolean...
{
	someBy( [ 0, 1, 1 ], 2, isPositive ); // $ExpectType boolean
	someBy( [ -1, 1, 2 ], 3, isPositive, {} ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	someBy( 2, 2, isPositive ); // $ExpectError
	someBy( false, 2, isPositive ); // $ExpectError
	someBy( true, 2, isPositive ); // $ExpectError
	someBy( {}, 2, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	someBy( [ -1, 1, 2 ], ( x: number ): number => x, isPositive ); // $ExpectError
	someBy( [ -1, 1, 2 ], false, isPositive ); // $ExpectError
	someBy( [ -1, 1, 2 ], true, isPositive ); // $ExpectError
	someBy( [ -1, 1, 2 ], 'abc', isPositive ); // $ExpectError
	someBy( [ -1, 1, 2 ], {}, isPositive ); // $ExpectError
	someBy( [ -1, 1, 2 ], [], isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a function...
{
	someBy( [ 1, 2, 3 ], 1, 2 ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1, false ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1, true ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1, 'abc' ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1, {} ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	someBy(); // $ExpectError
	someBy( [ 1, 2, 3 ] ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1 ); // $ExpectError
	someBy( [ 1, 2, 3 ], 1, isPositive, {}, 3 ); // $ExpectError
}

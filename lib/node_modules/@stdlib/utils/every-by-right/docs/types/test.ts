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

import everyByRight = require( './index' );

const isPositive = ( v: number ): boolean => {
	return ( v > 0 );
};

// TESTS //

// The function returns a boolean...
{
	everyByRight( [ 0, 1, 1 ], isPositive ); // $ExpectType boolean
	everyByRight( [ -1, 1, 2 ], isPositive ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	everyByRight( 2, isPositive ); // $ExpectError
	everyByRight( false, isPositive ); // $ExpectError
	everyByRight( true, isPositive ); // $ExpectError
	everyByRight( {}, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	everyByRight( [ 1, 2, 3 ], 2 ); // $ExpectError
	everyByRight( [ 1, 2, 3 ], false ); // $ExpectError
	everyByRight( [ 1, 2, 3 ], true ); // $ExpectError
	everyByRight( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	everyByRight( [ 1, 2, 3 ], {} ); // $ExpectError
	everyByRight( [ 1, 2, 3 ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	everyByRight(); // $ExpectError
	everyByRight( [ 1, 2, 3 ] ); // $ExpectError
	everyByRight( [ 1, 2, 3 ], isPositive, {}, 3 ); // $ExpectError
}

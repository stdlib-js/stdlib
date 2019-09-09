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

import inmapRight = require( './index' );

const square = ( x: number ): number => {
	return x * x;
};

// TESTS //

// The function returns a collection...
{
	inmapRight( [ 0, 1, 1 ], square ); // $ExpectType Collection
	inmapRight( [ -1, 1, 2 ], square, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	inmapRight( 2, square ); // $ExpectError
	inmapRight( false, square ); // $ExpectError
	inmapRight( true, square ); // $ExpectError
	inmapRight( {}, square ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	inmapRight( [ 1, 2, 3 ], 2 ); // $ExpectError
	inmapRight( [ 1, 2, 3 ], false ); // $ExpectError
	inmapRight( [ 1, 2, 3 ], true ); // $ExpectError
	inmapRight( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	inmapRight( [ 1, 2, 3 ], {} ); // $ExpectError
	inmapRight( [ 1, 2, 3 ], [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid number of arguments...
{
	inmapRight(); // $ExpectError
	inmapRight( [ 1, 2, 3 ] ); // $ExpectError
	inmapRight( [ 1, 2, 3 ], square, {}, 3 ); // $ExpectError
}

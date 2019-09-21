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

import indexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	indexOf( [ 4, 3, 2, 1 ], 3 ); // $ExpectType number
	indexOf( [ 1, 2, 3, 4, 5, 2, 6 ], 2, 3 ); // $ExpectType number
	indexOf( 'bebop', 'o' ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	indexOf( false, 1 ); // $ExpectError
	indexOf( true, 1 ); // $ExpectError
	indexOf( 32, 1 ); // $ExpectError
	indexOf( {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a start index which is not a number...
{
	const arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	indexOf( arr, 2, true ); // $ExpectError
	indexOf( arr, 2, false ); // $ExpectError
	indexOf( arr, 2, 'abc' ); // $ExpectError
	indexOf( arr, 2, {} ); // $ExpectError
	indexOf( arr, 2, [] ); // $ExpectError
	indexOf( arr, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	indexOf(); // $ExpectError
	indexOf( arr ); // $ExpectError
	indexOf( arr, 2, 3, 1 ); // $ExpectError
}

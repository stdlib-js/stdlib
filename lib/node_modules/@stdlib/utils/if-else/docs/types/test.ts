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

import ifelse = require( './index' );


// TESTS //

// The function returns either the `x` or `y` value...
{
	ifelse( true, 0, 1 ); // $ExpectType any
	ifelse( true, 'a', 'b' ); // $ExpectType any
	ifelse( false, 0, 1 ); // $ExpectType any
	ifelse( false, 'a', 'b' ); // $ExpectType any
}

// The compiler throws an error if the function is not provided a boolean as its first argument...
{
	ifelse( ( x: number ): number => x, 0, 1 ); // $ExpectError
	ifelse( 'abc', 0, 1 ); // $ExpectError
	ifelse( 3.12, 0, 1 ); // $ExpectError
	ifelse( [], 0, 1 ); // $ExpectError
	ifelse( {}, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	ifelse(); // $ExpectError
	ifelse( true, 2 ); // $ExpectError
	ifelse( true, 0, 1, 'a' ); // $ExpectError
}

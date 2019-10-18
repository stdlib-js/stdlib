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

import max = require( './index' );


// TESTS //

// The function returns a number...
{
	max(); // $ExpectType number
	max( 5 ); // $ExpectType number
	max( 3, -0.2 ); // $ExpectType number
	max( 3, -0.2, -1.2, -4.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided non-number arguments...
{
	max( true ); // $ExpectError
	max( false ); // $ExpectError
	max( [] ); // $ExpectError
	max( {} ); // $ExpectError
	max( 'abc' ); // $ExpectError
	max( ( x: number ): number => x ); // $ExpectError

	max( true, 3 ); // $ExpectError
	max( false, 3 ); // $ExpectError
	max( [], 3 ); // $ExpectError
	max( {}, 3 ); // $ExpectError
	max( 'abc', 3 ); // $ExpectError
	max( ( x: number ): number => x, 3 ); // $ExpectError

	max( 1.2, true ); // $ExpectError
	max( 1.2, false ); // $ExpectError
	max( 1.2, [] ); // $ExpectError
	max( 1.2, {} ); // $ExpectError
	max( 1.2, 'abc' ); // $ExpectError
	max( 1.2, ( x: number ): number => x ); // $ExpectError

	max( 1.2, 3, true ); // $ExpectError
	max( 1.2, 3, false ); // $ExpectError
	max( 1.2, 3, [] ); // $ExpectError
	max( 1.2, 3, {} ); // $ExpectError
	max( 1.2, 3, 'abc' ); // $ExpectError
	max( 1.2, 3, ( x: number ): number => x ); // $ExpectError
}

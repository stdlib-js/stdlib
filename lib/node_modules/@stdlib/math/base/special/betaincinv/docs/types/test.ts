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

import betaincinv = require( './index' );


// TESTS //

// The function returns a number...
{
	betaincinv( 0.2, 1.5, 1.5 ); // $ExpectType number
	betaincinv( 0.2, 1.5, 1.5, true ); // $ExpectType number
}

// The function does not compile if provided values other than three numbers for the first three parameters...
{
	betaincinv( true, 3, 2 ); // $ExpectError
	betaincinv( false, 2, 2 ); // $ExpectError
	betaincinv( '5', 1, 2 ); // $ExpectError
	betaincinv( [], 1, 2 ); // $ExpectError
	betaincinv( {}, 2, 2 ); // $ExpectError
	betaincinv( ( x: number ): number => x, 2, 2 ); // $ExpectError

	betaincinv( 9, true, 2 ); // $ExpectError
	betaincinv( 9, false, 2 ); // $ExpectError
	betaincinv( 5, '5', 2 ); // $ExpectError
	betaincinv( 8, [], 2 ); // $ExpectError
	betaincinv( 9, {}, 2 ); // $ExpectError
	betaincinv( 8, ( x: number ): number => x, 2 ); // $ExpectError

	betaincinv( 3.12, 2, true ); // $ExpectError
	betaincinv( 4.9, 2, false ); // $ExpectError
	betaincinv( 2.1, 2, '5' ); // $ExpectError
	betaincinv( 2.9323213, 2, [] ); // $ExpectError
	betaincinv( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a boolean as the fourth argument...
{
	betaincinv( 0.2, 1.5, 1.5, '5' ); // $ExpectError
	betaincinv( 0.2, 1.5, 1.5, 123 ); // $ExpectError
	betaincinv( 0.2, 1.5, 1.5, {} ); // $ExpectError
	betaincinv( 0.2, 1.5, 1.5, [] ); // $ExpectError
	betaincinv( 0.2, 1.5, 1.5, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	betaincinv(); // $ExpectError
	betaincinv( 3 ); // $ExpectError
	betaincinv( 2.131, 3 ); // $ExpectError
}

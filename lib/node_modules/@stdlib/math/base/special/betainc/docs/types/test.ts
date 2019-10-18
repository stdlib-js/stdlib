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

import betainc = require( './index' );


// TESTS //

// The function returns a number...
{
	betainc( 0.5, 1.5, 1.5 ); // $ExpectType number
	betainc( 0.5, 1.5, 1.5, true ); // $ExpectType number
}

// The function does not compile if provided values other than three numbers for the first three parameters...
{
	betainc( true, 3, 2 ); // $ExpectError
	betainc( false, 2, 2 ); // $ExpectError
	betainc( '5', 1, 2 ); // $ExpectError
	betainc( [], 1, 2 ); // $ExpectError
	betainc( {}, 2, 2 ); // $ExpectError
	betainc( ( x: number ): number => x, 2, 2 ); // $ExpectError

	betainc( 9, true, 2 ); // $ExpectError
	betainc( 9, false, 2 ); // $ExpectError
	betainc( 5, '5', 2 ); // $ExpectError
	betainc( 8, [], 2 ); // $ExpectError
	betainc( 9, {}, 2 ); // $ExpectError
	betainc( 8, ( x: number ): number => x, 2 ); // $ExpectError

	betainc( 3.12, 2, true ); // $ExpectError
	betainc( 4.9, 2, false ); // $ExpectError
	betainc( 2.1, 2, '5' ); // $ExpectError
	betainc( 2.9323213, 2, [] ); // $ExpectError
	betainc( 9.343, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a boolean as the fourth argument...
{
	betainc( 0.5, 1.5, 1.5, '5' ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, 123 ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, {} ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, [] ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a boolean as the fifth argument...
{
	betainc( 0.5, 1.5, 1.5, true, '5' ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, true, 123 ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, true, {} ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, true, [] ); // $ExpectError
	betainc( 0.5, 1.5, 1.5, true, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	betainc(); // $ExpectError
	betainc( 3 ); // $ExpectError
	betainc( 2.131, 3 ); // $ExpectError
}

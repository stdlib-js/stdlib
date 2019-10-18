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

import gammainc = require( './index' );


// TESTS //

// The function returns a number...
{
	gammainc( 3.5, 2 ); // $ExpectType number
	gammainc( 3.5, 2, false ); // $ExpectType number
	gammainc( 3.5, 2, false, true ); // $ExpectType number
}

// The function does not compile if provided values other than numbers for the first two parameters...
{
	gammainc( true, 3 ); // $ExpectError
	gammainc( false, 2 ); // $ExpectError
	gammainc( '5', 1 ); // $ExpectError
	gammainc( [], 1 ); // $ExpectError
	gammainc( {}, 2 ); // $ExpectError
	gammainc( ( x: number ): number => x, 2 ); // $ExpectError

	gammainc( 9, true ); // $ExpectError
	gammainc( 9, false ); // $ExpectError
	gammainc( 5, '5' ); // $ExpectError
	gammainc( 8, [] ); // $ExpectError
	gammainc( 9, {} ); // $ExpectError
	gammainc( 8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a boolean as the third argument...
{
	gammainc( 3.5, 2, '5' ); // $ExpectError
	gammainc( 3.5, 2, 123 ); // $ExpectError
	gammainc( 3.5, 2, {} ); // $ExpectError
	gammainc( 3.5, 2, [] ); // $ExpectError
	gammainc( 3.5, 2, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided a value other than a boolean as the fourth argument...
{
	gammainc( 3.5, 2, true, '5' ); // $ExpectError
	gammainc( 3.5, 2, true, 123 ); // $ExpectError
	gammainc( 3.5, 2, true, {} ); // $ExpectError
	gammainc( 3.5, 2, true, [] ); // $ExpectError
	gammainc( 3.5, 2, true, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	gammainc(); // $ExpectError
	gammainc( 3 ); // $ExpectError
}

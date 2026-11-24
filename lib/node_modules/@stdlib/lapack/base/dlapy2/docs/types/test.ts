/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import dlapy2 = require( './index' );


// TESTS //

// The function returns a number...
{
	dlapy2( 8, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	dlapy2( true, 3 ); // $ExpectError
	dlapy2( false, 2 ); // $ExpectError
	dlapy2( '5', 1 ); // $ExpectError
	dlapy2( [], 1 ); // $ExpectError
	dlapy2( {}, 2 ); // $ExpectError
	dlapy2( ( x: number ): number => x, 2 ); // $ExpectError

	dlapy2( 9, true ); // $ExpectError
	dlapy2( 9, false ); // $ExpectError
	dlapy2( 5, '5' ); // $ExpectError
	dlapy2( 8, [] ); // $ExpectError
	dlapy2( 9, {} ); // $ExpectError
	dlapy2( 8, ( x: number ): number => x ); // $ExpectError

	dlapy2( [], true ); // $ExpectError
	dlapy2( {}, false ); // $ExpectError
	dlapy2( false, '5' ); // $ExpectError
	dlapy2( {}, [] ); // $ExpectError
	dlapy2( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	dlapy2(); // $ExpectError
	dlapy2( 3 ); // $ExpectError
}

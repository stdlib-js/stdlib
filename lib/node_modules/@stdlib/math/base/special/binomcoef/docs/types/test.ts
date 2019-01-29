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

import binomcoef = require( './index' );


// TESTS //

// The function returns a number...
{
	binomcoef( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	binomcoef( true, 3 ); // $ExpectError
	binomcoef( false, 2 ); // $ExpectError
	binomcoef( '5', 1 ); // $ExpectError
	binomcoef( [], 1 ); // $ExpectError
	binomcoef( {}, 2 ); // $ExpectError
	binomcoef( ( x: number ): number => x, 2 ); // $ExpectError

	binomcoef( 9, true ); // $ExpectError
	binomcoef( 9, false ); // $ExpectError
	binomcoef( 5, '5' ); // $ExpectError
	binomcoef( 8, [] ); // $ExpectError
	binomcoef( 9, {} ); // $ExpectError
	binomcoef( 8, ( x: number ): number => x ); // $ExpectError

	binomcoef( [], true ); // $ExpectError
	binomcoef( {}, false ); // $ExpectError
	binomcoef( false, '5' ); // $ExpectError
	binomcoef( {}, [] ); // $ExpectError
	binomcoef( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	binomcoef(); // $ExpectError
	binomcoef( 3 ); // $ExpectError
}

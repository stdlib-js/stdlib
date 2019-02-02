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

import binomcoefln = require( './index' );


// TESTS //

// The function returns a number...
{
	binomcoefln( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	binomcoefln( true, 3 ); // $ExpectError
	binomcoefln( false, 2 ); // $ExpectError
	binomcoefln( '5', 1 ); // $ExpectError
	binomcoefln( [], 1 ); // $ExpectError
	binomcoefln( {}, 2 ); // $ExpectError
	binomcoefln( ( x: number ): number => x, 2 ); // $ExpectError

	binomcoefln( 9, true ); // $ExpectError
	binomcoefln( 9, false ); // $ExpectError
	binomcoefln( 5, '5' ); // $ExpectError
	binomcoefln( 8, [] ); // $ExpectError
	binomcoefln( 9, {} ); // $ExpectError
	binomcoefln( 8, ( x: number ): number => x ); // $ExpectError

	binomcoefln( [], true ); // $ExpectError
	binomcoefln( {}, false ); // $ExpectError
	binomcoefln( false, '5' ); // $ExpectError
	binomcoefln( {}, [] ); // $ExpectError
	binomcoefln( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	binomcoefln(); // $ExpectError
	binomcoefln( 3 ); // $ExpectError
}

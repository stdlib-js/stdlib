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

import ceiln = require( './index' );


// TESTS //

// The function returns a number...
{
	ceiln( 3.141592653589793, -4 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	ceiln( true, 3 ); // $ExpectError
	ceiln( false, 2 ); // $ExpectError
	ceiln( '5', 1 ); // $ExpectError
	ceiln( [], 1 ); // $ExpectError
	ceiln( {}, 2 ); // $ExpectError
	ceiln( ( x: number ): number => x, 2 ); // $ExpectError

	ceiln( 9, true ); // $ExpectError
	ceiln( 9, false ); // $ExpectError
	ceiln( 5, '5' ); // $ExpectError
	ceiln( 8, [] ); // $ExpectError
	ceiln( 9, {} ); // $ExpectError
	ceiln( 8, ( x: number ): number => x ); // $ExpectError

	ceiln( [], true ); // $ExpectError
	ceiln( {}, false ); // $ExpectError
	ceiln( false, '5' ); // $ExpectError
	ceiln( {}, [] ); // $ExpectError
	ceiln( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	ceiln(); // $ExpectError
	ceiln( 3 ); // $ExpectError
}

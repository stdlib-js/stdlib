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

import fallingFactorial = require( './index' );


// TESTS //

// The function returns a number...
{
	fallingFactorial( 0.8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	fallingFactorial( true, 3 ); // $ExpectError
	fallingFactorial( false, 2 ); // $ExpectError
	fallingFactorial( '5', 1 ); // $ExpectError
	fallingFactorial( [], 1 ); // $ExpectError
	fallingFactorial( {}, 2 ); // $ExpectError
	fallingFactorial( ( x: number ): number => x, 2 ); // $ExpectError

	fallingFactorial( 0.9, true ); // $ExpectError
	fallingFactorial( 0.9, false ); // $ExpectError
	fallingFactorial( 0.5, '5' ); // $ExpectError
	fallingFactorial( 0.8, [] ); // $ExpectError
	fallingFactorial( 0.9, {} ); // $ExpectError
	fallingFactorial( 0.8, ( x: number ): number => x ); // $ExpectError

	fallingFactorial( [], true ); // $ExpectError
	fallingFactorial( {}, false ); // $ExpectError
	fallingFactorial( false, '5' ); // $ExpectError
	fallingFactorial( {}, [] ); // $ExpectError
	fallingFactorial( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	fallingFactorial(); // $ExpectError
	fallingFactorial( 0.3 ); // $ExpectError
}

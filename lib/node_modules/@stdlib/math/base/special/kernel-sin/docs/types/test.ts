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

import kernelSin = require( './index' );


// TESTS //

// The function returns a number...
{
	kernelSin( 0.5, 0.2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	kernelSin( true, 3 ); // $ExpectError
	kernelSin( false, 2 ); // $ExpectError
	kernelSin( '5', 1 ); // $ExpectError
	kernelSin( [], 1 ); // $ExpectError
	kernelSin( {}, 2 ); // $ExpectError
	kernelSin( ( x: number ): number => x, 2 ); // $ExpectError

	kernelSin( 9, true ); // $ExpectError
	kernelSin( 9, false ); // $ExpectError
	kernelSin( 5, '5' ); // $ExpectError
	kernelSin( 8, [] ); // $ExpectError
	kernelSin( 9, {} ); // $ExpectError
	kernelSin( 8, ( x: number ): number => x ); // $ExpectError

	kernelSin( [], true ); // $ExpectError
	kernelSin( {}, false ); // $ExpectError
	kernelSin( false, '5' ); // $ExpectError
	kernelSin( {}, [] ); // $ExpectError
	kernelSin( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	kernelSin(); // $ExpectError
	kernelSin( 0 ); // $ExpectError
}

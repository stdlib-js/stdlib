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

import kernelBetaincinv = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 ); // $ExpectType number[]
}

// The function does not compile if provided values other than four numbers...
{
	kernelBetaincinv( true, 3, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( false, 2, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( '5', 1, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( [], 1, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( {}, 2, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( ( x: number ): number => x, 2, 0.2, 0.8 ); // $ExpectError

	kernelBetaincinv( 9, true, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( 9, false, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( 5, '5', 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( 8, [], 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( 9, {}, 0.2, 0.8 ); // $ExpectError
	kernelBetaincinv( 8, ( x: number ): number => x, 0.2, 0.8 ); // $ExpectError

	kernelBetaincinv( 9, 3, true, 0.2 ); // $ExpectError
	kernelBetaincinv( 9, 3, false, 0.2 ); // $ExpectError
	kernelBetaincinv( 5, 3, '5', 0.2 ); // $ExpectError
	kernelBetaincinv( 8, 3, [], 0.2 ); // $ExpectError
	kernelBetaincinv( 9, 3, {}, 0.2 ); // $ExpectError
	kernelBetaincinv( 8, 3, ( x: number ): number => x, 0.2 ); // $ExpectError

	kernelBetaincinv( 9, 3, 0.8, true ); // $ExpectError
	kernelBetaincinv( 9, 3, 0.8, false ); // $ExpectError
	kernelBetaincinv( 5, 3, 0.8, '5' ); // $ExpectError
	kernelBetaincinv( 8, 3, 0.8, [] ); // $ExpectError
	kernelBetaincinv( 9, 3, 0.8, {} ); // $ExpectError
	kernelBetaincinv( 8, 3, 0.8, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided an insufficient number of arguments...
{
	kernelBetaincinv(); // $ExpectError
	kernelBetaincinv( 3 ); // $ExpectError
	kernelBetaincinv( 2.131, 3 ); // $ExpectError
	kernelBetaincinv( 2.131, 3, 0.3 ); // $ExpectError
}

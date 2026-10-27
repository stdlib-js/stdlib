/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import kurtosis = require( './index' );


// TESTS //

// The function returns a number...
{
	kurtosis( 5, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided values other than two numbers...
{
	kurtosis( true, 3 ); // $ExpectError
	kurtosis( false, 2 ); // $ExpectError
	kurtosis( '5', 1 ); // $ExpectError
	kurtosis( [], 1 ); // $ExpectError
	kurtosis( {}, 2 ); // $ExpectError
	kurtosis( ( x: number ): number => x, 2 ); // $ExpectError

	kurtosis( 9, true ); // $ExpectError
	kurtosis( 9, false ); // $ExpectError
	kurtosis( 5, '5' ); // $ExpectError
	kurtosis( 8, [] ); // $ExpectError
	kurtosis( 9, {} ); // $ExpectError
	kurtosis( 8, ( x: number ): number => x ); // $ExpectError

	kurtosis( [], true ); // $ExpectError
	kurtosis( {}, false ); // $ExpectError
	kurtosis( false, '5' ); // $ExpectError
	kurtosis( {}, [] ); // $ExpectError
	kurtosis( '5', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	kurtosis(); // $ExpectError
	kurtosis( 3 ); // $ExpectError
}

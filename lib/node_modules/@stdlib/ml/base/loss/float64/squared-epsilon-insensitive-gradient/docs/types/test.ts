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

import squaredEpsilonInsensitiveGradient = require( './index' );


// TESTS //

// The function returns a number...
{
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, 0.782 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	squaredEpsilonInsensitiveGradient( true, 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( false, 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( null, 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( undefined, 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( '5', 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( [], 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( {}, 1.0, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( ( x: number ): number => x, 1.0, 1.0, 0.782 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	squaredEpsilonInsensitiveGradient( 0.5869, true, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, false, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, null, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, undefined, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, '5', 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, [], 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, {}, 1.0, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, ( x: number ): number => x, 1.0, 0.782 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, true, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, false, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, null, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, undefined, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, '5', 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, [], 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, {}, 0.782 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, ( x: number ): number => x, 0.782 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, true ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, false ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, null ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, undefined ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, '5' ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, [] ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, {} ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 0.5869, 1.0, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	squaredEpsilonInsensitiveGradient(); // $ExpectError
	squaredEpsilonInsensitiveGradient( 1.0 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 1.0, 0.900 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 1.0, 0.900, 0.7873 ); // $ExpectError
	squaredEpsilonInsensitiveGradient( 1.0, 0.900, 1.0, 0.787, 0.7873 ); // $ExpectError
}

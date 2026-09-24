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

import squaredErrorGradient = require( './index' );


// TESTS //

// The function returns a number...
{
	squaredErrorGradient( 5.0, -2.0, -1.782 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	squaredErrorGradient( true, -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( false, -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( null, -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( undefined, -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( '5', -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( [], -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( {}, -2.0, 0.782 ); // $ExpectError
	squaredErrorGradient( ( x: number ): number => x, -2.0, 0.782 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	squaredErrorGradient( 1.0, true, 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, false, 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, null, 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, undefined, 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, '5', 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, [], 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, {}, 0.782 ); // $ExpectError
	squaredErrorGradient( 1.0, ( x: number ): number => x, 0.782 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	squaredErrorGradient( 1.0, -2.0, true ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, false ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, null ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, undefined ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, '5' ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, [] ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, {} ); // $ExpectError
	squaredErrorGradient( 1.0, -2.0, ( x: number ): number => x ); // $ExpectError
}


// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	squaredErrorGradient(); // $ExpectError
	squaredErrorGradient( 1.0 ); // $ExpectError
	squaredErrorGradient( 1.0, 0.7873 ); // $ExpectError
	squaredErrorGradient( 1.0, 0.900, 0.7873, 0.546 ); // $ExpectError
}

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

import logGradient = require( './index' );


// TESTS //

// The function returns a number...
{
	logGradient( 2.3, 1.0, 0.782 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	logGradient( true, 1.0, 0.8975 ); // $ExpectError
	logGradient( false, 1.0, 0.8975 ); // $ExpectError
	logGradient( null, 1.0, 0.8975 ); // $ExpectError
	logGradient( undefined, 1.0, 0.8975 ); // $ExpectError
	logGradient( '5', 1.0, 0.8975 ); // $ExpectError
	logGradient( [], 1.0, 0.8975 ); // $ExpectError
	logGradient( {}, 1.0, 0.8975 ); // $ExpectError
	logGradient( ( x: number ): number => x, 1.0, 0.8975 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	logGradient( 1.0, true, 0.8975 ); // $ExpectError
	logGradient( 1.0, false, 0.8975 ); // $ExpectError
	logGradient( 1.0, null, 0.8975 ); // $ExpectError
	logGradient( 1.0, undefined, 0.8975 ); // $ExpectError
	logGradient( 1.0, '5', 0.8975 ); // $ExpectError
	logGradient( 1.0, [], 0.8975 ); // $ExpectError
	logGradient( 1.0, {}, 0.8975 ); // $ExpectError
	logGradient( 1.0, ( x: number ): number => x, 0.8975 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	logGradient( 2.3, 1.0, true ); // $ExpectError
	logGradient( 2.3, 1.0, false ); // $ExpectError
	logGradient( 2.3, 1.0, null ); // $ExpectError
	logGradient( 2.3, 1.0, undefined ); // $ExpectError
	logGradient( 2.3, 1.0, '5' ); // $ExpectError
	logGradient( 2.3, 1.0, [] ); // $ExpectError
	logGradient( 2.3, 1.0, {} ); // $ExpectError
	logGradient( 2.3, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logGradient(); // $ExpectError
	logGradient( 1.0 ); // $ExpectError
	logGradient( 1.0, 2.3 ); // $ExpectError
	logGradient( 1.0, 0.900, 0.787, 2.0 ); // $ExpectError
}

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

import logaddexp = require( './index' );


// TESTS //

// The function returns a number...
{
	logaddexp( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	logaddexp( true, 3 ); // $ExpectError
	logaddexp( false, 2 ); // $ExpectError
	logaddexp( '5', 1 ); // $ExpectError
	logaddexp( [], 1 ); // $ExpectError
	logaddexp( {}, 2 ); // $ExpectError
	logaddexp( ( x: number ): number => x, 2 ); // $ExpectError

	logaddexp( 9, true ); // $ExpectError
	logaddexp( 9, false ); // $ExpectError
	logaddexp( 5, '5' ); // $ExpectError
	logaddexp( 8, [] ); // $ExpectError
	logaddexp( 9, {} ); // $ExpectError
	logaddexp( 8, ( x: number ): number => x ); // $ExpectError

	logaddexp( [], true ); // $ExpectError
	logaddexp( {}, false ); // $ExpectError
	logaddexp( false, '5' ); // $ExpectError
	logaddexp( {}, [] ); // $ExpectError
	logaddexp( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	logaddexp(); // $ExpectError
	logaddexp( 3 ); // $ExpectError
}

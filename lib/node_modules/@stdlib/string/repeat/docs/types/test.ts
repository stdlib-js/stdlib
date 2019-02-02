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

import repeat = require( './index' );


// TESTS //

// The function returns a string...
{
	repeat( 'a', 2 ); // $ExpectType string
}

// The function does not compile if provided values other than a string and a number...
{
	repeat( true, 3 ); // $ExpectError
	repeat( false, 2 ); // $ExpectError
	repeat( 3, 1 ); // $ExpectError
	repeat( [], 1 ); // $ExpectError
	repeat( {}, 2 ); // $ExpectError
	repeat( ( x: number ): number => x, 2 ); // $ExpectError

	repeat( 'a', true ); // $ExpectError
	repeat( 'a', false ); // $ExpectError
	repeat( 'a', '5' ); // $ExpectError
	repeat( 'a', [] ); // $ExpectError
	repeat( 'a', {} ); // $ExpectError
	repeat( 'a', ( x: number ): number => x ); // $ExpectError

	repeat( [], true ); // $ExpectError
	repeat( {}, false ); // $ExpectError
	repeat( false, '5' ); // $ExpectError
	repeat( {}, [] ); // $ExpectError
	repeat( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	repeat(); // $ExpectError
	repeat( 3 ); // $ExpectError
	repeat( 'abc' ); // $ExpectError
}

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

import flipsign = require( './index' );


// TESTS //

// The function returns a number...
{
	flipsign( 8, 2 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	flipsign( true, 3 ); // $ExpectError
	flipsign( false, 2 ); // $ExpectError
	flipsign( '5', 1 ); // $ExpectError
	flipsign( [], 1 ); // $ExpectError
	flipsign( {}, 2 ); // $ExpectError
	flipsign( ( x: number ): number => x, 2 ); // $ExpectError

	flipsign( 9, true ); // $ExpectError
	flipsign( 9, false ); // $ExpectError
	flipsign( 5, '5' ); // $ExpectError
	flipsign( 8, [] ); // $ExpectError
	flipsign( 9, {} ); // $ExpectError
	flipsign( 8, ( x: number ): number => x ); // $ExpectError

	flipsign( [], true ); // $ExpectError
	flipsign( {}, false ); // $ExpectError
	flipsign( false, '5' ); // $ExpectError
	flipsign( {}, [] ); // $ExpectError
	flipsign( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	flipsign(); // $ExpectError
	flipsign( 3 ); // $ExpectError
}

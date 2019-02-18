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

import stdev = require( './index' );


// TESTS //

// The function returns a number...
{
	stdev( 8, 5 ); // $ExpectType number
}

// The function does not compile if provided values other than two numbers...
{
	stdev( true, 3 ); // $ExpectError
	stdev( false, 2 ); // $ExpectError
	stdev( '5', 1 ); // $ExpectError
	stdev( [], 1 ); // $ExpectError
	stdev( {}, 2 ); // $ExpectError
	stdev( ( x: number ): number => x, 2 ); // $ExpectError

	stdev( 9, true ); // $ExpectError
	stdev( 9, false ); // $ExpectError
	stdev( 5, '5' ); // $ExpectError
	stdev( 8, [] ); // $ExpectError
	stdev( 9, {} ); // $ExpectError
	stdev( 8, ( x: number ): number => x ); // $ExpectError

	stdev( [], true ); // $ExpectError
	stdev( {}, false ); // $ExpectError
	stdev( false, '5' ); // $ExpectError
	stdev( {}, [] ); // $ExpectError
	stdev( '5', ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	stdev(); // $ExpectError
	stdev( 3 ); // $ExpectError
}

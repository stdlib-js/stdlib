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
	stdev( 16, 12, 5 ); // $ExpectType number
}

// The function does not compile if provided values other than three numbers...
{
	stdev( true, 3, 2 ); // $ExpectError
	stdev( false, 4, 2 ); // $ExpectError
	stdev( '5', 3, 2 ); // $ExpectError
	stdev( [], 1, 1 ); // $ExpectError
	stdev( {}, 2, 1 ); // $ExpectError
	stdev( ( x: number ): number => x, 2, 1 ); // $ExpectError

	stdev( 90, true, 12 ); // $ExpectError
	stdev( 90, false, 12 ); // $ExpectError
	stdev( 50, '5', 8 ); // $ExpectError
	stdev( 80, [], 10 ); // $ExpectError
	stdev( 90, {}, 12 ); // $ExpectError
	stdev( 80, ( x: number ): number => x, 12 ); // $ExpectError

	stdev( 90, 18, true ); // $ExpectError
	stdev( 90, 18, false ); // $ExpectError
	stdev( 50, 10, '5' ); // $ExpectError
	stdev( 80, 16, [] ); // $ExpectError
	stdev( 90, 18, {} ); // $ExpectError
	stdev( 80, 16, ( x: number ): number => x ); // $ExpectError
}

// The function does not compile if provided insufficient arguments...
{
	stdev(); // $ExpectError
	stdev( 30 ); // $ExpectError
	stdev( 30, 6 ); // $ExpectError
}

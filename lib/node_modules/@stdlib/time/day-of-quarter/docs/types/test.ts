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

import dayOfQuarter = require( './index' );


// TESTS //

// The function returns a number...
{
	dayOfQuarter( 1, 15, 1990 ); // $ExpectType number
	dayOfQuarter( 'Jan', 15, 1990 ); // $ExpectType number
	dayOfQuarter(); // $ExpectType number
	dayOfQuarter( new Date() ) ; // $ExpectType number
}

// The function does not compile if provided arguments of invalid types...
{
	dayOfQuarter( 2, [], 1990 ); // $ExpectError
	dayOfQuarter( 2, {}, 1990 ); // $ExpectError
	dayOfQuarter( 3, false, 1990 ); // $ExpectError
	dayOfQuarter( 3, true, 1990 ); // $ExpectError
	dayOfQuarter( 3, ( x: number ): number => x, 1990 ); // $ExpectError
	dayOfQuarter( 3, 'beep', 1990 ); // $ExpectError

	dayOfQuarter( [], 9, 2016 ); // $ExpectError
	dayOfQuarter( {}, 9, 2016 ); // $ExpectError
	dayOfQuarter( false, 9, 2016 ); // $ExpectError
	dayOfQuarter( true, 9, 2016 ); // $ExpectError
	dayOfQuarter( ( x: number ): number => x, 9, 2016 ); // $ExpectError

	dayOfQuarter( 2, 9, true ); // $ExpectError
	dayOfQuarter( 2, 9, false ); // $ExpectError
	dayOfQuarter( 2, 9, ( x: number ): number => x ); // $ExpectError
	dayOfQuarter( 2, 9, [] ); // $ExpectError
	dayOfQuarter( 2, 9, {} ); // $ExpectError
	dayOfQuarter( 2, 9, 'beep' ); // $ExpectError
}

// The function does not compile if provided more than three arguments...
{
	dayOfQuarter( 1, 15, 1990, 1990 ); // $ExpectError
}

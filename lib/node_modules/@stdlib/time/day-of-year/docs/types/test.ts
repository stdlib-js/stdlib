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

import dayOfYear = require( './index' );


// TESTS //

// The function returns a number...
{
	dayOfYear( 1, 15, 1990 ); // $ExpectType number
	dayOfYear( 'Jan', 15, 1990 ); // $ExpectType number
	dayOfYear(); // $ExpectType number
	dayOfYear( new Date() ) ; // $ExpectType number
}

// The function does not compile if provided arguments of invalid types...
{
	dayOfYear( 2, [], 1990 ); // $ExpectError
	dayOfYear( 2, {}, 1990 ); // $ExpectError
	dayOfYear( 3, false, 1990 ); // $ExpectError
	dayOfYear( 3, true, 1990 ); // $ExpectError
	dayOfYear( 3, ( x: number ): number => x, 1990 ); // $ExpectError
	dayOfYear( 3, 'beep', 1990 ); // $ExpectError

	dayOfYear( [], 9, 2016 ); // $ExpectError
	dayOfYear( {}, 9, 2016 ); // $ExpectError
	dayOfYear( false, 9, 2016 ); // $ExpectError
	dayOfYear( true, 9, 2016 ); // $ExpectError
	dayOfYear( ( x: number ): number => x, 9, 2016 ); // $ExpectError

	dayOfYear( 2, 9, true ); // $ExpectError
	dayOfYear( 2, 9, false ); // $ExpectError
	dayOfYear( 2, 9, ( x: number ): number => x ); // $ExpectError
	dayOfYear( 2, 9, [] ); // $ExpectError
	dayOfYear( 2, 9, {} ); // $ExpectError
	dayOfYear( 2, 9, 'beep' ); // $ExpectError
}

// The function does not compile if provided more than three arguments...
{
	dayOfYear( 1, 15, 1990, 1990 ); // $ExpectError
}

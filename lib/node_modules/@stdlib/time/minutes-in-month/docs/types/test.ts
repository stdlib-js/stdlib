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

import minutesInMonth = require( './index' );


// TESTS //

// The function returns a number...
{
	minutesInMonth( 1, 1990 ); // $ExpectType number
	minutesInMonth( 'Jan', 1990 ); // $ExpectType number
	minutesInMonth(); // $ExpectType number
	minutesInMonth( new Date() ) ; // $ExpectType number
}

// The function does not compile if provided arguments of invalid types...
{
	minutesInMonth( [], 2016 ); // $ExpectError
	minutesInMonth( {}, 2016 ); // $ExpectError
	minutesInMonth( false, 2016 ); // $ExpectError
	minutesInMonth( true, 2016 ); // $ExpectError
	minutesInMonth( ( x: number ): number => x, 2016 ); // $ExpectError

	minutesInMonth( 2, true ); // $ExpectError
	minutesInMonth( 2, false ); // $ExpectError
	minutesInMonth( 2, ( x: number ): number => x ); // $ExpectError
	minutesInMonth( 2, [] ); // $ExpectError
	minutesInMonth( 2, {} ); // $ExpectError
	minutesInMonth( 2, 'beep' ); // $ExpectError
}

// The function does not compile if provided more than two arguments...
{
	minutesInMonth( 1, 15, 1990 ); // $ExpectError
}

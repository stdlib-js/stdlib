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

import daysInMonth = require( './index' );


// TESTS //

// The function returns a number...
{
	daysInMonth( 1, 1990 ); // $ExpectType number
	daysInMonth( 'Jan', 1990 ); // $ExpectType number
	daysInMonth(); // $ExpectType number
	daysInMonth( new Date() ) ; // $ExpectType number
}

// The function does not compile if provided arguments of invalid types...
{
	daysInMonth( [], 2016 ); // $ExpectError
	daysInMonth( {}, 2016 ); // $ExpectError
	daysInMonth( false, 2016 ); // $ExpectError
	daysInMonth( true, 2016 ); // $ExpectError
	daysInMonth( ( x: number ): number => x, 2016 ); // $ExpectError

	daysInMonth( 2, true ); // $ExpectError
	daysInMonth( 2, false ); // $ExpectError
	daysInMonth( 2, ( x: number ): number => x ); // $ExpectError
	daysInMonth( 2, [] ); // $ExpectError
	daysInMonth( 2, {} ); // $ExpectError
	daysInMonth( 2, 'beep' ); // $ExpectError
}

// The function does not compile if provided more than two arguments...
{
	daysInMonth( 1, 15, 1990 ); // $ExpectError
}

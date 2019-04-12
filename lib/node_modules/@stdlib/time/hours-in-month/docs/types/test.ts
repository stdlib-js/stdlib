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

import hoursInMonth = require( './index' );


// TESTS //

// The function returns a number...
{
	hoursInMonth( 1, 1990 ); // $ExpectType number
	hoursInMonth( 'Jan', 1990 ); // $ExpectType number
	hoursInMonth(); // $ExpectType number
	hoursInMonth( new Date() ) ; // $ExpectType number
}

// The function does not compile if provided arguments of invalid types...
{
	hoursInMonth( [], 2016 ); // $ExpectError
	hoursInMonth( {}, 2016 ); // $ExpectError
	hoursInMonth( false, 2016 ); // $ExpectError
	hoursInMonth( true, 2016 ); // $ExpectError
	hoursInMonth( ( x: number ): number => x, 2016 ); // $ExpectError

	hoursInMonth( 2, true ); // $ExpectError
	hoursInMonth( 2, false ); // $ExpectError
	hoursInMonth( 2, ( x: number ): number => x ); // $ExpectError
	hoursInMonth( 2, [] ); // $ExpectError
	hoursInMonth( 2, {} ); // $ExpectError
	hoursInMonth( 2, 'beep' ); // $ExpectError
}

// The function does not compile if provided more than two arguments...
{
	hoursInMonth( 1, 15, 1990 ); // $ExpectError
}

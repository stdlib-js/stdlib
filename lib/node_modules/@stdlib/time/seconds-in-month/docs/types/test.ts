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

import secondsInMonth = require( './index' );


// TESTS //

// The function returns a number...
{
	secondsInMonth( 1, 1990 ); // $ExpectType number
	secondsInMonth( 'Jan', 1990 ); // $ExpectType number
	secondsInMonth(); // $ExpectType number
	secondsInMonth( new Date() ) ; // $ExpectType number
}

// The function does not compile if provided arguments of invalid types...
{
	secondsInMonth( [], 2016 ); // $ExpectError
	secondsInMonth( {}, 2016 ); // $ExpectError
	secondsInMonth( false, 2016 ); // $ExpectError
	secondsInMonth( true, 2016 ); // $ExpectError
	secondsInMonth( ( x: number ): number => x, 2016 ); // $ExpectError

	secondsInMonth( 2, true ); // $ExpectError
	secondsInMonth( 2, false ); // $ExpectError
	secondsInMonth( 2, ( x: number ): number => x ); // $ExpectError
	secondsInMonth( 2, [] ); // $ExpectError
	secondsInMonth( 2, {} ); // $ExpectError
	secondsInMonth( 2, 'beep' ); // $ExpectError
}

// The function does not compile if provided more than two arguments...
{
	secondsInMonth( 1, 15, 1990 ); // $ExpectError
}

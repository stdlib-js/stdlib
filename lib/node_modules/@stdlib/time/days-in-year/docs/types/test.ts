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

import daysInYear = require( './index' );


// TESTS //

// The function returns a number...
{
	daysInYear( new Date() ) ; // $ExpectType number
	daysInYear( 1990 ); // $ExpectType number
	daysInYear(); // $ExpectType number
}

// The function does not compile if provided an argument of invalid type...
{
	daysInYear( [] ); // $ExpectError
	daysInYear( {} ); // $ExpectError
	daysInYear( false ); // $ExpectError
	daysInYear( true ); // $ExpectError
	daysInYear( ( x: number ): number => x ); // $ExpectError
	daysInYear( 'beep' ); // $ExpectError
}

// The function does not compile if provided more than one argument...
{
	daysInYear( 1990, 9 ); // $ExpectError
	daysInYear( 1990, 1, 19 ); // $ExpectError
}

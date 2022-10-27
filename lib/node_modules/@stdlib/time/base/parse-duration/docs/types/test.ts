/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import parseDuration = require( './index' );


// TESTS //

// The function returns a duration object...
{
	parseDuration( '1h' ); // $ExpectType Duration
	parseDuration( '1d3h' ); // $ExpectType Duration
	parseDuration( '1h1m1s' ); // $ExpectType Duration
	parseDuration( '1ms' ); // $ExpectType Duration
	parseDuration( '1h1m1s1ms' ); // $ExpectType Duration
}

// The compiler throws an error if the function is provided a value other than a string...
{
	parseDuration( true ); // $ExpectError
	parseDuration( false ); // $ExpectError
	parseDuration( null ); // $ExpectError
	parseDuration( undefined ); // $ExpectError
	parseDuration( 5 ); // $ExpectError
	parseDuration( [] ); // $ExpectError
	parseDuration( {} ); // $ExpectError
	parseDuration( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	parseDuration(); // $ExpectError
}

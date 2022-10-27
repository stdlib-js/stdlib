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

import duration2ms = require( './index' );


// TESTS //

// The function returns a number...
{
	duration2ms( '10s' ); // $ExpectType number
	duration2ms( '1d' ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a string...
{
	duration2ms( true ); // $ExpectError
	duration2ms( false ); // $ExpectError
	duration2ms( null ); // $ExpectError
	duration2ms( undefined ); // $ExpectError
	duration2ms( 5 ); // $ExpectError
	duration2ms( [] ); // $ExpectError
	duration2ms( {} ); // $ExpectError
	duration2ms( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	duration2ms(); // $ExpectError
	duration2ms( '10s', 2 ); // $ExpectError
}

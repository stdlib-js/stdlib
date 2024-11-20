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

import safeintmin = require( './index' );


// TESTS //

// The function returns a number...
{
	safeintmin( 'float64' ); // $ExpectType number
	safeintmin( 'float32' ); // $ExpectType number
}

// The compiler throws an error if the function is not provided a string...
{
	safeintmin( 2 ); // $ExpectError
	safeintmin( true ); // $ExpectError
	safeintmin( false ); // $ExpectError
	safeintmin( [] ); // $ExpectError
	safeintmin( {} ); // $ExpectError
	safeintmin( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	safeintmin(); // $ExpectError
	safeintmin( [], 2 ); // $ExpectError
}

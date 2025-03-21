/*
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

import isPositiveFinite = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isPositiveFinite( 3.14 ); // $ExpectType boolean
}

// The compiler throws an error if the function is not provided a number...
{
	isPositiveFinite( true ); // $ExpectError
	isPositiveFinite( false ); // $ExpectError
	isPositiveFinite( 'abc' ); // $ExpectError
	isPositiveFinite( [] ); // $ExpectError
	isPositiveFinite( {} ); // $ExpectError
	isPositiveFinite( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an incorrect number of arguments...
{
	isPositiveFinite(); // $ExpectError
	isPositiveFinite( 3.14, 123 ); // $ExpectError
}


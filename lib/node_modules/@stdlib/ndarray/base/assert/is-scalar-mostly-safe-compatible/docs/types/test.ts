/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import isScalarMostlySafeCompatible = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isScalarMostlySafeCompatible( 3, 'float64' ); // $ExpectType boolean
	isScalarMostlySafeCompatible( -1, 'int32' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a second argument which is not a data type...
{
	isScalarMostlySafeCompatible( 3.14, true ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, false ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, null ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, undefined ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, 123 ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, [] ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, {} ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isScalarMostlySafeCompatible(); // $ExpectError
	isScalarMostlySafeCompatible( 3.14 ); // $ExpectError
	isScalarMostlySafeCompatible( 3.14, 'float64', {} ); // $ExpectError
}

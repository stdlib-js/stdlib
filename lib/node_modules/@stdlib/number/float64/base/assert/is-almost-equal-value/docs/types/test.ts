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

import isAlmostEqualValue = require( './index' );


// TESTS //

// The function returns a boolean...
{
	isAlmostEqualValue( 3.14, 3.14, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is not provided a first argument which is a number...
{
	isAlmostEqualValue( '5', 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( true, 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( false, 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( null, 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( void 0, 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( [], 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( {}, 3.14, 1 ); // $ExpectError
	isAlmostEqualValue( ( x: number ): number => x, 3.14, 1 ); // $ExpectError
}

// The compiler throws an error if the function is not provided a second argument which is a number...
{
	isAlmostEqualValue( 3.14, '5', 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, true, 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, false, 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, null, 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, void 0, 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, [], 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, {}, 1 ); // $ExpectError
	isAlmostEqualValue( 3.14, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is not provided a third argument which is a number...
{
	isAlmostEqualValue( 3.14, 3.14, '5' ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, true ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, false ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, null ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, void 0 ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, [] ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, {} ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	isAlmostEqualValue(); // $ExpectError
	isAlmostEqualValue( 3.14 ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14 ); // $ExpectError
	isAlmostEqualValue( 3.14, 3.14, 1, 2 ); // $ExpectError
}

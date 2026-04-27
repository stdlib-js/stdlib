/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import roundnf = require( './index' );


// TESTS //

// The function returns a number...
{
	roundnf( 3.14, -2 ); // $ExpectType number
	roundnf( 1234.56, 2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than a number for the first argument...
{
	roundnf( true, -2 ); // $ExpectError
	roundnf( false, -2 ); // $ExpectError
	roundnf( '5', -2 ); // $ExpectError
	roundnf( [], -2 ); // $ExpectError
	roundnf( {}, -2 ); // $ExpectError
	roundnf( ( x: number ): number => x, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a value other than a number for the second argument...
{
	roundnf( 3.14, true ); // $ExpectError
	roundnf( 3.14, false ); // $ExpectError
	roundnf( 3.14, '5' ); // $ExpectError
	roundnf( 3.14, [] ); // $ExpectError
	roundnf( 3.14, {} ); // $ExpectError
	roundnf( 3.14, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	roundnf(); // $ExpectError
	roundnf( 3.14 ); // $ExpectError
}

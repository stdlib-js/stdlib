/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import maxf = require( './index' );


// TESTS //

// The function returns a number...
{
	maxf( 3.0, -0.2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided non-number arguments...
{
	maxf( true, 3.0 ); // $ExpectError
	maxf( false, 3.0 ); // $ExpectError
	maxf( [], 3.0 ); // $ExpectError
	maxf( {}, 3.0 ); // $ExpectError
	maxf( 'abc', 3.0 ); // $ExpectError
	maxf( ( x: number ): number => x, 3.0 ); // $ExpectError

	maxf( 2.0, true ); // $ExpectError
	maxf( 2.0, false ); // $ExpectError
	maxf( 2.0, [] ); // $ExpectError
	maxf( 2.0, {} ); // $ExpectError
	maxf( 2.0, 'abc' ); // $ExpectError
	maxf( 2.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if provided an unsupported number of arguments...
{
	maxf(); // $ExpectError
	maxf( 1.0 ); // $ExpectError
	maxf( 1.0, 2.0, 3.0 ); // $ExpectError
}

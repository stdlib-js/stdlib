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

import maxabsf = require( './index' );


// TESTS //

// The function returns a number...
{
	maxabsf( 3, -0.2 ); // $ExpectType number
}

// The compiler throws an error if the function is provided non-number arguments...
{
	maxabsf( true, 3 ); // $ExpectError
	maxabsf( false, 3 ); // $ExpectError
	maxabsf( [], 3 ); // $ExpectError
	maxabsf( {}, 3 ); // $ExpectError
	maxabsf( 'abc', 3 ); // $ExpectError
	maxabsf( ( x: number ): number => x, 3 ); // $ExpectError

	maxabsf( 1.2, true ); // $ExpectError
	maxabsf( 1.2, false ); // $ExpectError
	maxabsf( 1.2, [] ); // $ExpectError
	maxabsf( 1.2, {} ); // $ExpectError
	maxabsf( 1.2, 'abc' ); // $ExpectError
	maxabsf( 1.2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if provided an unsupported number of arguments...
{
	maxabsf(); // $ExpectError
	maxabsf( -0.2 ); // $ExpectError
	maxabsf( 3, -0.2, -1.2, -4.0 ); // $ExpectError
}

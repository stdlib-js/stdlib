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

import minabsn = require( './index' );


// TESTS //

// The function returns a number...
{
	minabsn(); // $ExpectType number
	minabsn( -0.2 ); // $ExpectType number
	minabsn( 3, -0.2 ); // $ExpectType number
	minabsn( 3, -0.2, -1.2, -4.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided non-number arguments...
{
	minabsn( true ); // $ExpectError
	minabsn( false ); // $ExpectError
	minabsn( [] ); // $ExpectError
	minabsn( {} ); // $ExpectError
	minabsn( 'abc' ); // $ExpectError
	minabsn( ( x: number ): number => x ); // $ExpectError

	minabsn( true, 3 ); // $ExpectError
	minabsn( false, 3 ); // $ExpectError
	minabsn( [], 3 ); // $ExpectError
	minabsn( {}, 3 ); // $ExpectError
	minabsn( 'abc', 3 ); // $ExpectError
	minabsn( ( x: number ): number => x, 3 ); // $ExpectError

	minabsn( 1.2, true ); // $ExpectError
	minabsn( 1.2, false ); // $ExpectError
	minabsn( 1.2, [] ); // $ExpectError
	minabsn( 1.2, {} ); // $ExpectError
	minabsn( 1.2, 'abc' ); // $ExpectError
	minabsn( 1.2, ( x: number ): number => x ); // $ExpectError

	minabsn( 1.2, 3, true ); // $ExpectError
	minabsn( 1.2, 3, false ); // $ExpectError
	minabsn( 1.2, 3, [] ); // $ExpectError
	minabsn( 1.2, 3, {} ); // $ExpectError
	minabsn( 1.2, 3, 'abc' ); // $ExpectError
	minabsn( 1.2, 3, ( x: number ): number => x ); // $ExpectError
}

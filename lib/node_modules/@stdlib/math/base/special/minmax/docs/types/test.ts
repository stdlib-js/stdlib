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

import minmax = require( './index' );


// TESTS //

// The function returns a collection...
{
	minmax( -0.2 ); // $ExpectType Collection
	minmax( 3, -0.2 ); // $ExpectType Collection
	minmax( 3, -0.2, -1.2, -4.0 ); // $ExpectType Collection
	minmax( [], -4.0 ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided non-numbers for all but the first argument...
{
	minmax( true ); // $ExpectError
	minmax( false ); // $ExpectError
	minmax( [] ); // $ExpectError
	minmax( {} ); // $ExpectError
	minmax( 'abc' ); // $ExpectError
	minmax( ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, true ); // $ExpectError
	minmax( 1.2, false ); // $ExpectError
	minmax( 1.2, [] ); // $ExpectError
	minmax( 1.2, {} ); // $ExpectError
	minmax( 1.2, 'abc' ); // $ExpectError
	minmax( 1.2, ( x: number ): number => x ); // $ExpectError

	minmax( 1.2, 3, true ); // $ExpectError
	minmax( 1.2, 3, false ); // $ExpectError
	minmax( 1.2, 3, [] ); // $ExpectError
	minmax( 1.2, 3, {} ); // $ExpectError
	minmax( 1.2, 3, 'abc' ); // $ExpectError
	minmax( 1.2, 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is not provided a number or collection as its first argument...
{
	minmax( true, 3 ); // $ExpectError
	minmax( false, 3 ); // $ExpectError
	minmax( {}, 3 ); // $ExpectError
}

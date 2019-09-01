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

import iterUnitspace = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterUnitspace( 0 ); // $ExpectType Iterator
	iterUnitspace( 0, 99 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	iterUnitspace( '5', 100 ); // $ExpectError
	iterUnitspace( true, 100 ); // $ExpectError
	iterUnitspace( false, 100 ); // $ExpectError
	iterUnitspace( null, 100 ); // $ExpectError
	iterUnitspace( [], 100 ); // $ExpectError
	iterUnitspace( {}, 100 ); // $ExpectError
	iterUnitspace( ( x: number ): number => x, 100 ); // $ExpectError

	iterUnitspace( '5' ); // $ExpectError
	iterUnitspace( true ); // $ExpectError
	iterUnitspace( false ); // $ExpectError
	iterUnitspace( null ); // $ExpectError
	iterUnitspace( [] ); // $ExpectError
	iterUnitspace( {} ); // $ExpectError
	iterUnitspace( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterUnitspace( 0, '5' ); // $ExpectError
	iterUnitspace( 0, true ); // $ExpectError
	iterUnitspace( 0, false ); // $ExpectError
	iterUnitspace( 0, null ); // $ExpectError
	iterUnitspace( 0, [] ); // $ExpectError
	iterUnitspace( 0, {} ); // $ExpectError
	iterUnitspace( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterUnitspace(); // $ExpectError
}

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

import iterLinspace = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterLinspace( 0, 99 ); // $ExpectType Iterator
	iterLinspace( 0, 99, 50 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	iterLinspace( '5', 100 ); // $ExpectError
	iterLinspace( true, 100 ); // $ExpectError
	iterLinspace( false, 100 ); // $ExpectError
	iterLinspace( null, 100 ); // $ExpectError
	iterLinspace( [], 100 ); // $ExpectError
	iterLinspace( {}, 100 ); // $ExpectError
	iterLinspace( ( x: number ): number => x, 100 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterLinspace( 0, '5' ); // $ExpectError
	iterLinspace( 0, true ); // $ExpectError
	iterLinspace( 0, false ); // $ExpectError
	iterLinspace( 0, null ); // $ExpectError
	iterLinspace( 0, [] ); // $ExpectError
	iterLinspace( 0, {} ); // $ExpectError
	iterLinspace( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	iterLinspace( 0, 100, '5' ); // $ExpectError
	iterLinspace( 0, 100, true ); // $ExpectError
	iterLinspace( 0, 100, false ); // $ExpectError
	iterLinspace( 0, 100, null ); // $ExpectError
	iterLinspace( 0, 100, [] ); // $ExpectError
	iterLinspace( 0, 100, {} ); // $ExpectError
	iterLinspace( 0, 100, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterLinspace(); // $ExpectError
	iterLinspace( 0 ); // $ExpectError
}

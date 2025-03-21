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

import iterStep = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterStep( 0, 2 ); // $ExpectType Iterator
	iterStep( 0, 2, 50 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	iterStep( '5', 2 ); // $ExpectError
	iterStep( true, 2 ); // $ExpectError
	iterStep( false, 2 ); // $ExpectError
	iterStep( null, 2 ); // $ExpectError
	iterStep( [], 2 ); // $ExpectError
	iterStep( {}, 2 ); // $ExpectError
	iterStep( ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterStep( 0, '5' ); // $ExpectError
	iterStep( 0, true ); // $ExpectError
	iterStep( 0, false ); // $ExpectError
	iterStep( 0, null ); // $ExpectError
	iterStep( 0, [] ); // $ExpectError
	iterStep( 0, {} ); // $ExpectError
	iterStep( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	iterStep( 0, 2, '5' ); // $ExpectError
	iterStep( 0, 2, true ); // $ExpectError
	iterStep( 0, 2, false ); // $ExpectError
	iterStep( 0, 2, null ); // $ExpectError
	iterStep( 0, 2, [] ); // $ExpectError
	iterStep( 0, 2, {} ); // $ExpectError
	iterStep( 0, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterStep(); // $ExpectError
	iterStep( 0 ); // $ExpectError
}

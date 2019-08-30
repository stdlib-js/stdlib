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

import iterIncrspace = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterIncrspace( 0, 100 ); // $ExpectType Iterator
	iterIncrspace( 0, 100, 2 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	iterIncrspace( '5', 100 ); // $ExpectError
	iterIncrspace( true, 100 ); // $ExpectError
	iterIncrspace( false, 100 ); // $ExpectError
	iterIncrspace( null, 100 ); // $ExpectError
	iterIncrspace( [], 100 ); // $ExpectError
	iterIncrspace( {}, 100 ); // $ExpectError
	iterIncrspace( ( x: number ): number => x, 100 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterIncrspace( 0, '5' ); // $ExpectError
	iterIncrspace( 0, true ); // $ExpectError
	iterIncrspace( 0, false ); // $ExpectError
	iterIncrspace( 0, null ); // $ExpectError
	iterIncrspace( 0, [] ); // $ExpectError
	iterIncrspace( 0, {} ); // $ExpectError
	iterIncrspace( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	iterIncrspace( 0, 100, '5' ); // $ExpectError
	iterIncrspace( 0, 100, true ); // $ExpectError
	iterIncrspace( 0, 100, false ); // $ExpectError
	iterIncrspace( 0, 100, null ); // $ExpectError
	iterIncrspace( 0, 100, [] ); // $ExpectError
	iterIncrspace( 0, 100, {} ); // $ExpectError
	iterIncrspace( 0, 100, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterIncrspace(); // $ExpectError
	iterIncrspace( 0 ); // $ExpectError
}

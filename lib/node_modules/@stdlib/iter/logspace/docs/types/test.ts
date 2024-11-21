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

import iterLogspace = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterLogspace( 0, 3 ); // $ExpectType Iterator
	iterLogspace( 0, 3, 4 ); // $ExpectType Iterator
	iterLogspace( 0, 3, {} ); // $ExpectType Iterator
	iterLogspace( 0, 3, 4, {} ); // $ExpectType Iterator
	iterLogspace( 0, 3, { 'base': 2 } ); // $ExpectType Iterator
	iterLogspace( 0, 3, 4, { 'base': 2 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	iterLogspace( '5', 2 ); // $ExpectError
	iterLogspace( true, 2 ); // $ExpectError
	iterLogspace( false, 2 ); // $ExpectError
	iterLogspace( null, 2 ); // $ExpectError
	iterLogspace( [], 2 ); // $ExpectError
	iterLogspace( {}, 2 ); // $ExpectError
	iterLogspace( ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterLogspace( 0, '5' ); // $ExpectError
	iterLogspace( 0, true ); // $ExpectError
	iterLogspace( 0, false ); // $ExpectError
	iterLogspace( 0, null ); // $ExpectError
	iterLogspace( 0, [] ); // $ExpectError
	iterLogspace( 0, {} ); // $ExpectError
	iterLogspace( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is neither a number nor an object...
{
	iterLogspace( 0, 2, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object...
{
	iterLogspace( 0, 2, 3, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `base` option which is not a number...
{
	iterLogspace( 0, 2, { 'base': '5' } ); // $ExpectError
	iterLogspace( 0, 2, { 'base': true } ); // $ExpectError
	iterLogspace( 0, 2, { 'base': false } ); // $ExpectError
	iterLogspace( 0, 2, { 'base': null } ); // $ExpectError
	iterLogspace( 0, 2, { 'base': [] } ); // $ExpectError
	iterLogspace( 0, 2, { 'base': {} } ); // $ExpectError
	iterLogspace( 0, 2, { 'base': ( x: number ): number => x } ); // $ExpectError

	iterLogspace( 0, 2, 3, { 'base': '5' } ); // $ExpectError
	iterLogspace( 0, 2, 3, { 'base': true } ); // $ExpectError
	iterLogspace( 0, 2, 3, { 'base': false } ); // $ExpectError
	iterLogspace( 0, 2, 3, { 'base': null } ); // $ExpectError
	iterLogspace( 0, 2, 3, { 'base': [] } ); // $ExpectError
	iterLogspace( 0, 2, 3, { 'base': {} } ); // $ExpectError
	iterLogspace( 0, 2, 3, { 'base': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterLogspace(); // $ExpectError
	iterLogspace( 0 ); // $ExpectError
}

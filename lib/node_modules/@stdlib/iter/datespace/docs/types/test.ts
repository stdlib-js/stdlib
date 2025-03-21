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

import iterDatespace = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterDatespace( 0, 99 ); // $ExpectType Iterator
	iterDatespace( 0, 99, 50 ); // $ExpectType Iterator
	iterDatespace( 0, 99, {} ); // $ExpectType Iterator
	iterDatespace( 0, 99, 50, {} ); // $ExpectType Iterator
	iterDatespace( 0, 99, { 'round': 'floor' } ); // $ExpectType Iterator
	iterDatespace( 0, 99, 50, { 'round': 'ceil' } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number, string, or date object...
{
	iterDatespace( true, 100 ); // $ExpectError
	iterDatespace( false, 100 ); // $ExpectError
	iterDatespace( null, 100 ); // $ExpectError
	iterDatespace( [], 100 ); // $ExpectError
	iterDatespace( {}, 100 ); // $ExpectError
	iterDatespace( ( x: number ): number => x, 100 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number, string, or date object...
{
	iterDatespace( 0, true ); // $ExpectError
	iterDatespace( 0, false ); // $ExpectError
	iterDatespace( 0, null ); // $ExpectError
	iterDatespace( 0, [] ); // $ExpectError
	iterDatespace( 0, {} ); // $ExpectError
	iterDatespace( 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is neither a number nor an object...
{
	iterDatespace( 0, 100, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number (options)...
{
	iterDatespace( 0, 100, '5', {} ); // $ExpectError
	iterDatespace( 0, 100, true, {} ); // $ExpectError
	iterDatespace( 0, 100, false, {} ); // $ExpectError
	iterDatespace( 0, 100, null, {} ); // $ExpectError
	iterDatespace( 0, 100, [], {} ); // $ExpectError
	iterDatespace( 0, 100, {}, {} ); // $ExpectError
	iterDatespace( 0, 100, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object ...
{
	iterDatespace( 0, 100, 10, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `round` option which is not a string ...
{
	iterDatespace( 0, 100, 10, { 'round': 5 } ); // $ExpectError
	iterDatespace( 0, 100, 10, { 'round': true } ); // $ExpectError
	iterDatespace( 0, 100, 10, { 'round': false } ); // $ExpectError
	iterDatespace( 0, 100, 10, { 'round': null } ); // $ExpectError
	iterDatespace( 0, 100, 10, { 'round': [] } ); // $ExpectError
	iterDatespace( 0, 100, 10, { 'round': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterDatespace(); // $ExpectError
	iterDatespace( 0 ); // $ExpectError
}

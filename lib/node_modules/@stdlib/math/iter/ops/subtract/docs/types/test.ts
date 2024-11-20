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

import iterSubtract = require( './index' );

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator() {
	return {
		'next': next
	};
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next() {
	return {
		'value': 1.0,
		'done': false
	};
}


// TESTS //

// The function returns an iterator...
{
	iterSubtract( iterator(), iterator() ); // $ExpectType Iterator
	iterSubtract( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterSubtract( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterSubtract( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterSubtract( iterator(), 4.0 ); // $ExpectType Iterator
	iterSubtract( iterator(), 4.0, iterator() ); // $ExpectType Iterator
	iterSubtract( iterator(), 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterSubtract( iterator(), 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterSubtract( 4.0, iterator() ); // $ExpectType Iterator
	iterSubtract( 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterSubtract( 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterSubtract( 4.0, iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterSubtract( 4.0, 4.0 ); // $ExpectType Iterator
	iterSubtract( 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterSubtract( 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterSubtract( 4.0, 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or a number...
{
	iterSubtract( '5', iterator() ); // $ExpectError
	iterSubtract( '5', iterator(), iterator() ); // $ExpectError

	iterSubtract( true, iterator() ); // $ExpectError
	iterSubtract( true, iterator(), iterator() ); // $ExpectError

	iterSubtract( false, iterator() ); // $ExpectError
	iterSubtract( false, iterator(), iterator() ); // $ExpectError

	iterSubtract( null, iterator() ); // $ExpectError
	iterSubtract( null, iterator(), iterator() ); // $ExpectError

	iterSubtract( undefined, iterator() ); // $ExpectError
	iterSubtract( undefined, iterator(), iterator() ); // $ExpectError

	iterSubtract( [], iterator() ); // $ExpectError
	iterSubtract( [], iterator(), iterator() ); // $ExpectError

	iterSubtract( {}, iterator() ); // $ExpectError
	iterSubtract( {}, iterator(), iterator() ); // $ExpectError

	iterSubtract( ( x: number ): number => x, iterator() ); // $ExpectError
	iterSubtract( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or a number...
{
	iterSubtract( iterator(), '5' ); // $ExpectError
	iterSubtract( iterator(), '5', iterator() ); // $ExpectError

	iterSubtract( iterator(), true ); // $ExpectError
	iterSubtract( iterator(), true, iterator() ); // $ExpectError

	iterSubtract( iterator(), false ); // $ExpectError
	iterSubtract( iterator(), false, iterator() ); // $ExpectError

	iterSubtract( iterator(), null ); // $ExpectError
	iterSubtract( iterator(), null, iterator() ); // $ExpectError

	iterSubtract( iterator(), undefined ); // $ExpectError
	iterSubtract( iterator(), undefined, iterator() ); // $ExpectError

	iterSubtract( iterator(), [] ); // $ExpectError
	iterSubtract( iterator(), [], iterator() ); // $ExpectError

	iterSubtract( iterator(), {} ); // $ExpectError
	iterSubtract( iterator(), {}, iterator() ); // $ExpectError

	iterSubtract( iterator(), ( x: number ): number => x ); // $ExpectError
	iterSubtract( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object or a number...
{
	iterSubtract( iterator(), iterator(), '5' ); // $ExpectError
	iterSubtract( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), true ); // $ExpectError
	iterSubtract( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), false ); // $ExpectError
	iterSubtract( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), null ); // $ExpectError
	iterSubtract( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), undefined ); // $ExpectError
	iterSubtract( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), [] ); // $ExpectError
	iterSubtract( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), {} ); // $ExpectError
	iterSubtract( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterSubtract( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterSubtract( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterSubtract(); // $ExpectError
	iterSubtract( iterator() ); // $ExpectError
	iterSubtract( 4.0 ); // $ExpectError
}

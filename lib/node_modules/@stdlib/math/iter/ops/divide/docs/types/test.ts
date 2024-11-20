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

import iterDivide = require( './index' );

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
	iterDivide( iterator(), iterator() ); // $ExpectType Iterator
	iterDivide( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterDivide( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterDivide( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterDivide( iterator(), 4.0 ); // $ExpectType Iterator
	iterDivide( iterator(), 4.0, iterator() ); // $ExpectType Iterator
	iterDivide( iterator(), 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterDivide( iterator(), 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterDivide( 4.0, iterator() ); // $ExpectType Iterator
	iterDivide( 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterDivide( 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterDivide( 4.0, iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterDivide( 4.0, 4.0 ); // $ExpectType Iterator
	iterDivide( 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterDivide( 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterDivide( 4.0, 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or a number...
{
	iterDivide( '5', iterator() ); // $ExpectError
	iterDivide( '5', iterator(), iterator() ); // $ExpectError

	iterDivide( true, iterator() ); // $ExpectError
	iterDivide( true, iterator(), iterator() ); // $ExpectError

	iterDivide( false, iterator() ); // $ExpectError
	iterDivide( false, iterator(), iterator() ); // $ExpectError

	iterDivide( null, iterator() ); // $ExpectError
	iterDivide( null, iterator(), iterator() ); // $ExpectError

	iterDivide( undefined, iterator() ); // $ExpectError
	iterDivide( undefined, iterator(), iterator() ); // $ExpectError

	iterDivide( [], iterator() ); // $ExpectError
	iterDivide( [], iterator(), iterator() ); // $ExpectError

	iterDivide( {}, iterator() ); // $ExpectError
	iterDivide( {}, iterator(), iterator() ); // $ExpectError

	iterDivide( ( x: number ): number => x, iterator() ); // $ExpectError
	iterDivide( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or a number...
{
	iterDivide( iterator(), '5' ); // $ExpectError
	iterDivide( iterator(), '5', iterator() ); // $ExpectError

	iterDivide( iterator(), true ); // $ExpectError
	iterDivide( iterator(), true, iterator() ); // $ExpectError

	iterDivide( iterator(), false ); // $ExpectError
	iterDivide( iterator(), false, iterator() ); // $ExpectError

	iterDivide( iterator(), null ); // $ExpectError
	iterDivide( iterator(), null, iterator() ); // $ExpectError

	iterDivide( iterator(), undefined ); // $ExpectError
	iterDivide( iterator(), undefined, iterator() ); // $ExpectError

	iterDivide( iterator(), [] ); // $ExpectError
	iterDivide( iterator(), [], iterator() ); // $ExpectError

	iterDivide( iterator(), {} ); // $ExpectError
	iterDivide( iterator(), {}, iterator() ); // $ExpectError

	iterDivide( iterator(), ( x: number ): number => x ); // $ExpectError
	iterDivide( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object or a number...
{
	iterDivide( iterator(), iterator(), '5' ); // $ExpectError
	iterDivide( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), true ); // $ExpectError
	iterDivide( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), false ); // $ExpectError
	iterDivide( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), null ); // $ExpectError
	iterDivide( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), undefined ); // $ExpectError
	iterDivide( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), [] ); // $ExpectError
	iterDivide( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), {} ); // $ExpectError
	iterDivide( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterDivide( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterDivide( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterDivide(); // $ExpectError
	iterDivide( iterator() ); // $ExpectError
	iterDivide( 4.0 ); // $ExpectError
}

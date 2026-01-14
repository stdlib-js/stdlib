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

import iterIntersection = require( './index' );

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator() {
	return {
		'next': next
	};

	/**
	* Implements the iterator protocol `next` method.
	*
	* @returns iterator protocol-compliant object
	*/
	function next() {
		return {
			'value': true,
			'done': false
		};
	}
}


// TESTS //

// The function returns an iterator...
{
	iterIntersection( iterator(), iterator() ); // $ExpectType Iterator
	iterIntersection( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterIntersection( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterIntersection( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterIntersection( '5', iterator() ); // $ExpectError
	iterIntersection( '5', iterator(), iterator() ); // $ExpectError

	iterIntersection( 5, iterator() ); // $ExpectError
	iterIntersection( 5, iterator(), iterator() ); // $ExpectError

	iterIntersection( true, iterator() ); // $ExpectError
	iterIntersection( true, iterator(), iterator() ); // $ExpectError

	iterIntersection( false, iterator() ); // $ExpectError
	iterIntersection( false, iterator(), iterator() ); // $ExpectError

	iterIntersection( null, iterator() ); // $ExpectError
	iterIntersection( null, iterator(), iterator() ); // $ExpectError

	iterIntersection( undefined, iterator() ); // $ExpectError
	iterIntersection( undefined, iterator(), iterator() ); // $ExpectError

	iterIntersection( [], iterator() ); // $ExpectError
	iterIntersection( [], iterator(), iterator() ); // $ExpectError

	iterIntersection( {}, iterator() ); // $ExpectError
	iterIntersection( {}, iterator(), iterator() ); // $ExpectError

	iterIntersection( ( x: number ): number => x, iterator() ); // $ExpectError
	iterIntersection( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object...
{
	iterIntersection( iterator(), '5' ); // $ExpectError
	iterIntersection( iterator(), '5', iterator() ); // $ExpectError

	iterIntersection( iterator(), 5 ); // $ExpectError
	iterIntersection( iterator(), 5, iterator() ); // $ExpectError

	iterIntersection( iterator(), true ); // $ExpectError
	iterIntersection( iterator(), true, iterator() ); // $ExpectError

	iterIntersection( iterator(), false ); // $ExpectError
	iterIntersection( iterator(), false, iterator() ); // $ExpectError

	iterIntersection( iterator(), null ); // $ExpectError
	iterIntersection( iterator(), null, iterator() ); // $ExpectError

	iterIntersection( iterator(), undefined ); // $ExpectError
	iterIntersection( iterator(), undefined, iterator() ); // $ExpectError

	iterIntersection( iterator(), [] ); // $ExpectError
	iterIntersection( iterator(), [], iterator() ); // $ExpectError

	iterIntersection( iterator(), {} ); // $ExpectError
	iterIntersection( iterator(), {}, iterator() ); // $ExpectError

	iterIntersection( iterator(), ( x: number ): number => x ); // $ExpectError
	iterIntersection( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object...
{
	iterIntersection( iterator(), iterator(), '5' ); // $ExpectError
	iterIntersection( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), 5 ); // $ExpectError
	iterIntersection( iterator(), iterator(), 5, iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), true ); // $ExpectError
	iterIntersection( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), false ); // $ExpectError
	iterIntersection( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), null ); // $ExpectError
	iterIntersection( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), undefined ); // $ExpectError
	iterIntersection( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), [] ); // $ExpectError
	iterIntersection( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), {} ); // $ExpectError
	iterIntersection( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterIntersection( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterIntersection( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterIntersection(); // $ExpectError
	iterIntersection( iterator() ); // $ExpectError
}

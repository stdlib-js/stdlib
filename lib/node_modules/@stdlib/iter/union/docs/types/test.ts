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

import iterUnion = require( './index' );

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
	iterUnion( iterator(), iterator() ); // $ExpectType Iterator
	iterUnion( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterUnion( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterUnion( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterUnion( '5', iterator() ); // $ExpectError
	iterUnion( '5', iterator(), iterator() ); // $ExpectError

	iterUnion( 5, iterator() ); // $ExpectError
	iterUnion( 5, iterator(), iterator() ); // $ExpectError

	iterUnion( true, iterator() ); // $ExpectError
	iterUnion( true, iterator(), iterator() ); // $ExpectError

	iterUnion( false, iterator() ); // $ExpectError
	iterUnion( false, iterator(), iterator() ); // $ExpectError

	iterUnion( null, iterator() ); // $ExpectError
	iterUnion( null, iterator(), iterator() ); // $ExpectError

	iterUnion( undefined, iterator() ); // $ExpectError
	iterUnion( undefined, iterator(), iterator() ); // $ExpectError

	iterUnion( [], iterator() ); // $ExpectError
	iterUnion( [], iterator(), iterator() ); // $ExpectError

	iterUnion( {}, iterator() ); // $ExpectError
	iterUnion( {}, iterator(), iterator() ); // $ExpectError

	iterUnion( ( x: number ): number => x, iterator() ); // $ExpectError
	iterUnion( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object...
{
	iterUnion( iterator(), '5' ); // $ExpectError
	iterUnion( iterator(), '5', iterator() ); // $ExpectError

	iterUnion( iterator(), 5 ); // $ExpectError
	iterUnion( iterator(), 5, iterator() ); // $ExpectError

	iterUnion( iterator(), true ); // $ExpectError
	iterUnion( iterator(), true, iterator() ); // $ExpectError

	iterUnion( iterator(), false ); // $ExpectError
	iterUnion( iterator(), false, iterator() ); // $ExpectError

	iterUnion( iterator(), null ); // $ExpectError
	iterUnion( iterator(), null, iterator() ); // $ExpectError

	iterUnion( iterator(), undefined ); // $ExpectError
	iterUnion( iterator(), undefined, iterator() ); // $ExpectError

	iterUnion( iterator(), [] ); // $ExpectError
	iterUnion( iterator(), [], iterator() ); // $ExpectError

	iterUnion( iterator(), {} ); // $ExpectError
	iterUnion( iterator(), {}, iterator() ); // $ExpectError

	iterUnion( iterator(), ( x: number ): number => x ); // $ExpectError
	iterUnion( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object...
{
	iterUnion( iterator(), iterator(), '5' ); // $ExpectError
	iterUnion( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), 5 ); // $ExpectError
	iterUnion( iterator(), iterator(), 5, iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), true ); // $ExpectError
	iterUnion( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), false ); // $ExpectError
	iterUnion( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), null ); // $ExpectError
	iterUnion( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), undefined ); // $ExpectError
	iterUnion( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), [] ); // $ExpectError
	iterUnion( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), {} ); // $ExpectError
	iterUnion( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterUnion( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterUnion( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterUnion(); // $ExpectError
	iterUnion( iterator() ); // $ExpectError
}

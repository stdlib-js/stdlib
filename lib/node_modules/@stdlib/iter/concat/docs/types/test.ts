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

import iterConcat = require( './index' );

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
	iterConcat( iterator(), iterator() ); // $ExpectType Iterator
	iterConcat( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterConcat( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterConcat( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterConcat( '5', iterator() ); // $ExpectError
	iterConcat( '5', iterator(), iterator() ); // $ExpectError

	iterConcat( 5, iterator() ); // $ExpectError
	iterConcat( 5, iterator(), iterator() ); // $ExpectError

	iterConcat( true, iterator() ); // $ExpectError
	iterConcat( true, iterator(), iterator() ); // $ExpectError

	iterConcat( false, iterator() ); // $ExpectError
	iterConcat( false, iterator(), iterator() ); // $ExpectError

	iterConcat( null, iterator() ); // $ExpectError
	iterConcat( null, iterator(), iterator() ); // $ExpectError

	iterConcat( undefined, iterator() ); // $ExpectError
	iterConcat( undefined, iterator(), iterator() ); // $ExpectError

	iterConcat( [], iterator() ); // $ExpectError
	iterConcat( [], iterator(), iterator() ); // $ExpectError

	iterConcat( {}, iterator() ); // $ExpectError
	iterConcat( {}, iterator(), iterator() ); // $ExpectError

	iterConcat( ( x: number ): number => x, iterator() ); // $ExpectError
	iterConcat( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object...
{
	iterConcat( iterator(), '5' ); // $ExpectError
	iterConcat( iterator(), '5', iterator() ); // $ExpectError

	iterConcat( iterator(), 5 ); // $ExpectError
	iterConcat( iterator(), 5, iterator() ); // $ExpectError

	iterConcat( iterator(), true ); // $ExpectError
	iterConcat( iterator(), true, iterator() ); // $ExpectError

	iterConcat( iterator(), false ); // $ExpectError
	iterConcat( iterator(), false, iterator() ); // $ExpectError

	iterConcat( iterator(), null ); // $ExpectError
	iterConcat( iterator(), null, iterator() ); // $ExpectError

	iterConcat( iterator(), undefined ); // $ExpectError
	iterConcat( iterator(), undefined, iterator() ); // $ExpectError

	iterConcat( iterator(), [] ); // $ExpectError
	iterConcat( iterator(), [], iterator() ); // $ExpectError

	iterConcat( iterator(), {} ); // $ExpectError
	iterConcat( iterator(), {}, iterator() ); // $ExpectError

	iterConcat( iterator(), ( x: number ): number => x ); // $ExpectError
	iterConcat( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object...
{
	iterConcat( iterator(), iterator(), '5' ); // $ExpectError
	iterConcat( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), 5 ); // $ExpectError
	iterConcat( iterator(), iterator(), 5, iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), true ); // $ExpectError
	iterConcat( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), false ); // $ExpectError
	iterConcat( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), null ); // $ExpectError
	iterConcat( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), undefined ); // $ExpectError
	iterConcat( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), [] ); // $ExpectError
	iterConcat( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), {} ); // $ExpectError
	iterConcat( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterConcat( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterConcat( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterConcat(); // $ExpectError
	iterConcat( iterator() ); // $ExpectError
}

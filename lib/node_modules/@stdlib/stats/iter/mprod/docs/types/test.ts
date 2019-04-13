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

import itermprod = require( './index' );

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
	itermprod( iterator(), 3 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	itermprod( '5', 3 ); // $ExpectError
	itermprod( 5, 3 ); // $ExpectError
	itermprod( true, 3 ); // $ExpectError
	itermprod( false, 3 ); // $ExpectError
	itermprod( null, 3 ); // $ExpectError
	itermprod( undefined, 3 ); // $ExpectError
	itermprod( [], 3 ); // $ExpectError
	itermprod( {}, 3 ); // $ExpectError
	itermprod( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a positive integer...
{
	itermprod( iterator(), '5' ); // $ExpectError
	itermprod( iterator(), true ); // $ExpectError
	itermprod( iterator(), false ); // $ExpectError
	itermprod( iterator(), null ); // $ExpectError
	itermprod( iterator(), undefined ); // $ExpectError
	itermprod( iterator(), [] ); // $ExpectError
	itermprod( iterator(), {} ); // $ExpectError
	itermprod( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	itermprod(); // $ExpectError
	itermprod( iterator() ); // $ExpectError
	itermprod( iterator(), 3, 3 ); // $ExpectError
}

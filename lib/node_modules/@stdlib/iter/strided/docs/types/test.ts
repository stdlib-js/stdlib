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

import iterStrided = require( './index' );

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
	iterStrided( iterator(), 10 ); // $ExpectType Iterator
	iterStrided( iterator(), 10, 2 ); // $ExpectType Iterator
	iterStrided( iterator(), 10, 2, true ); // $ExpectType Iterator
	iterStrided( iterator(), 10, 2, false ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterStrided( '5', 10 ); // $ExpectError
	iterStrided( 5, 10 ); // $ExpectError
	iterStrided( true, 10 ); // $ExpectError
	iterStrided( false, 10 ); // $ExpectError
	iterStrided( null, 10 ); // $ExpectError
	iterStrided( undefined, 10 ); // $ExpectError
	iterStrided( [], 10 ); // $ExpectError
	iterStrided( {}, 10 ); // $ExpectError
	iterStrided( ( x: number ): number => x, 10 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterStrided( iterator(), '5' ); // $ExpectError
	iterStrided( iterator(), null ); // $ExpectError
	iterStrided( iterator(), undefined ); // $ExpectError
	iterStrided( iterator(), true ); // $ExpectError
	iterStrided( iterator(), false ); // $ExpectError
	iterStrided( iterator(), [] ); // $ExpectError
	iterStrided( iterator(), {} ); // $ExpectError
	iterStrided( iterator(), ( x: number ): number => x ); // $ExpectError

	iterStrided( iterator(), '5', 2 ); // $ExpectError
	iterStrided( iterator(), null, 2 ); // $ExpectError
	iterStrided( iterator(), undefined, 2 ); // $ExpectError
	iterStrided( iterator(), true, 2 ); // $ExpectError
	iterStrided( iterator(), false, 2 ); // $ExpectError
	iterStrided( iterator(), [], 2 ); // $ExpectError
	iterStrided( iterator(), {}, 2 ); // $ExpectError
	iterStrided( iterator(), ( x: number ): number => x, 2 ); // $ExpectError

	iterStrided( iterator(), '5', 2, true ); // $ExpectError
	iterStrided( iterator(), null, 2, true ); // $ExpectError
	iterStrided( iterator(), undefined, 2, true ); // $ExpectError
	iterStrided( iterator(), true, 2, true ); // $ExpectError
	iterStrided( iterator(), false, 2, true ); // $ExpectError
	iterStrided( iterator(), [], 2, true ); // $ExpectError
	iterStrided( iterator(), {}, 2, true ); // $ExpectError
	iterStrided( iterator(), ( x: number ): number => x, 2, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is neither a number nor a boolean...
{
	iterStrided( iterator(), 10, '5' ); // $ExpectError
	iterStrided( iterator(), 10, null ); // $ExpectError
	iterStrided( iterator(), 10, [] ); // $ExpectError
	iterStrided( iterator(), 10, {} ); // $ExpectError
	iterStrided( iterator(), 10, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	iterStrided( iterator(), 10, 2, '5' ); // $ExpectError
	iterStrided( iterator(), 10, 2, null ); // $ExpectError
	iterStrided( iterator(), 10, 2, [] ); // $ExpectError
	iterStrided( iterator(), 10, 2, {} ); // $ExpectError
	iterStrided( iterator(), 10, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterStrided(); // $ExpectError
	iterStrided( iterator() ); // $ExpectError
}

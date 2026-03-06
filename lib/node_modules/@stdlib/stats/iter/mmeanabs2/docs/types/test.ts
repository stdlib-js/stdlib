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

import itermmeanabs2 = require( './index' );

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
	itermmeanabs2( iterator(), 3 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	itermmeanabs2( '5', 3 ); // $ExpectError
	itermmeanabs2( 5, 3 ); // $ExpectError
	itermmeanabs2( true, 3 ); // $ExpectError
	itermmeanabs2( false, 3 ); // $ExpectError
	itermmeanabs2( null, 3 ); // $ExpectError
	itermmeanabs2( undefined, 3 ); // $ExpectError
	itermmeanabs2( [], 3 ); // $ExpectError
	itermmeanabs2( {}, 3 ); // $ExpectError
	itermmeanabs2( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a positive integer...
{
	itermmeanabs2( iterator(), '5' ); // $ExpectError
	itermmeanabs2( iterator(), true ); // $ExpectError
	itermmeanabs2( iterator(), false ); // $ExpectError
	itermmeanabs2( iterator(), null ); // $ExpectError
	itermmeanabs2( iterator(), undefined ); // $ExpectError
	itermmeanabs2( iterator(), [] ); // $ExpectError
	itermmeanabs2( iterator(), {} ); // $ExpectError
	itermmeanabs2( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	itermmeanabs2(); // $ExpectError
	itermmeanabs2( iterator() ); // $ExpectError
	itermmeanabs2( iterator(), 3, 3 ); // $ExpectError
}

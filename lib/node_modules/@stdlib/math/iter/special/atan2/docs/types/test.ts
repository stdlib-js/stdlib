/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import iterAtan2 = require( './index' );

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
	iterAtan2( iterator(), iterator() ); // $ExpectType Iterator
	iterAtan2( 1.0, iterator() ); // $ExpectType Iterator
	iterAtan2( iterator(), 1.0 ); // $ExpectType Iterator
	iterAtan2( 1.0, 1.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or number...
{
	iterAtan2( '5', iterator() ); // $ExpectError
	iterAtan2( true, iterator() ); // $ExpectError
	iterAtan2( false, iterator() ); // $ExpectError
	iterAtan2( null, iterator() ); // $ExpectError
	iterAtan2( undefined, iterator() ); // $ExpectError
	iterAtan2( [], iterator() ); // $ExpectError
	iterAtan2( {}, iterator() ); // $ExpectError
	iterAtan2( ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or number...
{
	iterAtan2( iterator(), '5' ); // $ExpectError
	iterAtan2( iterator(), true ); // $ExpectError
	iterAtan2( iterator(), false ); // $ExpectError
	iterAtan2( iterator(), null ); // $ExpectError
	iterAtan2( iterator(), undefined ); // $ExpectError
	iterAtan2( iterator(), [] ); // $ExpectError
	iterAtan2( iterator(), {} ); // $ExpectError
	iterAtan2( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterAtan2(); // $ExpectError
	iterAtan2( iterator() ); // $ExpectError
	iterAtan2( 1.0 ); // $ExpectError
}

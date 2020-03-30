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

import iterBetaln = require( './index' );

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
	iterBetaln( iterator(), iterator() ); // $ExpectType Iterator
	iterBetaln( 1.0, iterator() ); // $ExpectType Iterator
	iterBetaln( iterator(), 1.0 ); // $ExpectType Iterator
	iterBetaln( 1.0, 1.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or number...
{
	iterBetaln( '5', iterator() ); // $ExpectError
	iterBetaln( true, iterator() ); // $ExpectError
	iterBetaln( false, iterator() ); // $ExpectError
	iterBetaln( null, iterator() ); // $ExpectError
	iterBetaln( undefined, iterator() ); // $ExpectError
	iterBetaln( [], iterator() ); // $ExpectError
	iterBetaln( {}, iterator() ); // $ExpectError
	iterBetaln( ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or number...
{
	iterBetaln( iterator(), '5' ); // $ExpectError
	iterBetaln( iterator(), true ); // $ExpectError
	iterBetaln( iterator(), false ); // $ExpectError
	iterBetaln( iterator(), null ); // $ExpectError
	iterBetaln( iterator(), undefined ); // $ExpectError
	iterBetaln( iterator(), [] ); // $ExpectError
	iterBetaln( iterator(), {} ); // $ExpectError
	iterBetaln( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterBetaln(); // $ExpectError
	iterBetaln( iterator() ); // $ExpectError
	iterBetaln( 1.0 ); // $ExpectError
}

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

import iterLog = require( './index' );

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
	iterLog( iterator(), iterator() ); // $ExpectType Iterator
	iterLog( 1.0, iterator() ); // $ExpectType Iterator
	iterLog( iterator(), 1.0 ); // $ExpectType Iterator
	iterLog( 1.0, 1.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or number...
{
	iterLog( '5', iterator() ); // $ExpectError
	iterLog( true, iterator() ); // $ExpectError
	iterLog( false, iterator() ); // $ExpectError
	iterLog( null, iterator() ); // $ExpectError
	iterLog( undefined, iterator() ); // $ExpectError
	iterLog( [], iterator() ); // $ExpectError
	iterLog( {}, iterator() ); // $ExpectError
	iterLog( ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or number...
{
	iterLog( iterator(), '5' ); // $ExpectError
	iterLog( iterator(), true ); // $ExpectError
	iterLog( iterator(), false ); // $ExpectError
	iterLog( iterator(), null ); // $ExpectError
	iterLog( iterator(), undefined ); // $ExpectError
	iterLog( iterator(), [] ); // $ExpectError
	iterLog( iterator(), {} ); // $ExpectError
	iterLog( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterLog(); // $ExpectError
	iterLog( iterator() ); // $ExpectError
	iterLog( 1.0 ); // $ExpectError
}

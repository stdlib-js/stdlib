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

import itervariance = require( './index' );

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

// The function returns either a number or null...
{
	itervariance( iterator() ); // $ExpectType number | null
	itervariance( iterator(), 0.0 ); // $ExpectType number | null
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	itervariance( '5' ); // $ExpectError
	itervariance( 5 ); // $ExpectError
	itervariance( true ); // $ExpectError
	itervariance( false ); // $ExpectError
	itervariance( null ); // $ExpectError
	itervariance( undefined ); // $ExpectError
	itervariance( [] ); // $ExpectError
	itervariance( {} ); // $ExpectError
	itervariance( ( x: number ): number => x ); // $ExpectError

	itervariance( '5', 0.0 ); // $ExpectError
	itervariance( 5, 0.0 ); // $ExpectError
	itervariance( true, 0.0 ); // $ExpectError
	itervariance( false, 0.0 ); // $ExpectError
	itervariance( null, 0.0 ); // $ExpectError
	itervariance( undefined, 0.0 ); // $ExpectError
	itervariance( [], 0.0 ); // $ExpectError
	itervariance( {}, 0.0 ); // $ExpectError
	itervariance( ( x: number ): number => x, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	itervariance( iterator(), '5' ); // $ExpectError
	itervariance( iterator(), true ); // $ExpectError
	itervariance( iterator(), false ); // $ExpectError
	itervariance( iterator(), null ); // $ExpectError
	itervariance( iterator(), [] ); // $ExpectError
	itervariance( iterator(), {} ); // $ExpectError
	itervariance( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	itervariance(); // $ExpectError
}

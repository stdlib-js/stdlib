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

import itermsum = require( './index' );

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
	itermsum( iterator(), 3 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	itermsum( '5', 3 ); // $ExpectError
	itermsum( 5, 3 ); // $ExpectError
	itermsum( true, 3 ); // $ExpectError
	itermsum( false, 3 ); // $ExpectError
	itermsum( null, 3 ); // $ExpectError
	itermsum( undefined, 3 ); // $ExpectError
	itermsum( [], 3 ); // $ExpectError
	itermsum( {}, 3 ); // $ExpectError
	itermsum( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a positive integer...
{
	itermsum( iterator(), '5' ); // $ExpectError
	itermsum( iterator(), true ); // $ExpectError
	itermsum( iterator(), false ); // $ExpectError
	itermsum( iterator(), null ); // $ExpectError
	itermsum( iterator(), undefined ); // $ExpectError
	itermsum( iterator(), [] ); // $ExpectError
	itermsum( iterator(), {} ); // $ExpectError
	itermsum( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	itermsum(); // $ExpectError
	itermsum( iterator() ); // $ExpectError
	itermsum( iterator(), 3, 3 ); // $ExpectError
}

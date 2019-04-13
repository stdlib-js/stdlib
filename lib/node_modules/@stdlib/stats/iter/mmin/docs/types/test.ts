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

import itermmin = require( './index' );

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
	itermmin( iterator(), 3 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	itermmin( '5', 3 ); // $ExpectError
	itermmin( 5, 3 ); // $ExpectError
	itermmin( true, 3 ); // $ExpectError
	itermmin( false, 3 ); // $ExpectError
	itermmin( null, 3 ); // $ExpectError
	itermmin( undefined, 3 ); // $ExpectError
	itermmin( [], 3 ); // $ExpectError
	itermmin( {}, 3 ); // $ExpectError
	itermmin( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a positive integer...
{
	itermmin( iterator(), '5' ); // $ExpectError
	itermmin( iterator(), true ); // $ExpectError
	itermmin( iterator(), false ); // $ExpectError
	itermmin( iterator(), null ); // $ExpectError
	itermmin( iterator(), undefined ); // $ExpectError
	itermmin( iterator(), [] ); // $ExpectError
	itermmin( iterator(), {} ); // $ExpectError
	itermmin( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	itermmin(); // $ExpectError
	itermmin( iterator() ); // $ExpectError
	itermmin( iterator(), 3, 3 ); // $ExpectError
}

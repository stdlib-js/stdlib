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

import iterSlice = require( './index' );

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
	iterSlice( iterator() ); // $ExpectType Iterator
	iterSlice( iterator(), 2 ); // $ExpectType Iterator
	iterSlice( iterator(), 2, 5 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterSlice( '5' ); // $ExpectError
	iterSlice( 5 ); // $ExpectError
	iterSlice( true ); // $ExpectError
	iterSlice( false ); // $ExpectError
	iterSlice( null ); // $ExpectError
	iterSlice( undefined ); // $ExpectError
	iterSlice( [] ); // $ExpectError
	iterSlice( {} ); // $ExpectError
	iterSlice( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not is a number...
{
	iterSlice( iterator(), '5' ); // $ExpectError
	iterSlice( iterator(), true ); // $ExpectError
	iterSlice( iterator(), false ); // $ExpectError
	iterSlice( iterator(), null ); // $ExpectError
	iterSlice( iterator(), [] ); // $ExpectError
	iterSlice( iterator(), {} ); // $ExpectError
	iterSlice( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not is a number...
{
	iterSlice( iterator(), 2, '5' ); // $ExpectError
	iterSlice( iterator(), 2, true ); // $ExpectError
	iterSlice( iterator(), 2, false ); // $ExpectError
	iterSlice( iterator(), 2, null ); // $ExpectError
	iterSlice( iterator(), 2, [] ); // $ExpectError
	iterSlice( iterator(), 2, {} ); // $ExpectError
	iterSlice( iterator(), 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterSlice(); // $ExpectError
}

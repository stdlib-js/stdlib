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

import iterUnshift = require( './index' );

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
	iterUnshift( iterator() ); // $ExpectType Iterator
	iterUnshift( iterator(), 1 ); // $ExpectType Iterator
	iterUnshift( iterator(), 1, 2 ); // $ExpectType Iterator
	iterUnshift( iterator(), 1, 2, 3 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterUnshift( '5', 'beep' ); // $ExpectError
	iterUnshift( 5, 'beep' ); // $ExpectError
	iterUnshift( true, 'beep' ); // $ExpectError
	iterUnshift( false, 'beep' ); // $ExpectError
	iterUnshift( null, 'beep' ); // $ExpectError
	iterUnshift( undefined, 'beep' ); // $ExpectError
	iterUnshift( [], 'beep' ); // $ExpectError
	iterUnshift( {}, 'beep' ); // $ExpectError
	iterUnshift( ( x: number ): number => x, 'beep' ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterUnshift(); // $ExpectError
}

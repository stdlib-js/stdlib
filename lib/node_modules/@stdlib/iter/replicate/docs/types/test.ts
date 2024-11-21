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

import iterReplicate = require( './index' );

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
	iterReplicate( iterator(), 5 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterReplicate( '5', 5 ); // $ExpectError
	iterReplicate( 5, 5 ); // $ExpectError
	iterReplicate( true, 5 ); // $ExpectError
	iterReplicate( false, 5 ); // $ExpectError
	iterReplicate( null, 5 ); // $ExpectError
	iterReplicate( undefined, 5 ); // $ExpectError
	iterReplicate( [], 5 ); // $ExpectError
	iterReplicate( {}, 5 ); // $ExpectError
	iterReplicate( ( x: number ): number => x, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterReplicate( iterator(), '5' ); // $ExpectError
	iterReplicate( iterator(), true ); // $ExpectError
	iterReplicate( iterator(), false ); // $ExpectError
	iterReplicate( iterator(), null ); // $ExpectError
	iterReplicate( iterator(), undefined ); // $ExpectError
	iterReplicate( iterator(), [] ); // $ExpectError
	iterReplicate( iterator(), {} ); // $ExpectError
	iterReplicate( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterReplicate(); // $ExpectError
	iterReplicate( iterator() ); // $ExpectError
}

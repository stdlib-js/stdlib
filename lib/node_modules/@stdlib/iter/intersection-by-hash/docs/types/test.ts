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

import iterIntersectionByHash = require( './index' );

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

/**
* Hash function.
*
* @param v - iterated value
* @returns hash value
*/
function hashFcn( v: any ): any {
	return v;
}


// TESTS //

// The function returns an iterator...
{
	iterIntersectionByHash( iterator(), iterator(), hashFcn ); // $ExpectType Iterator
	iterIntersectionByHash( iterator(), iterator(), hashFcn, {} ); // $ExpectType Iterator

	iterIntersectionByHash( iterator(), iterator(), iterator(), hashFcn ); // $ExpectType Iterator
	iterIntersectionByHash( iterator(), iterator(), iterator(), hashFcn, null ); // $ExpectType Iterator

	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), hashFcn ); // $ExpectType Iterator
	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), hashFcn, {} ); // $ExpectType Iterator

	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), iterator(), hashFcn ); // $ExpectType Iterator
	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), iterator(), hashFcn, null ); // $ExpectType Iterator

	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), iterator(), iterator(), hashFcn ); // $ExpectType Iterator
	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), iterator(), iterator(), hashFcn, {} ); // $ExpectType Iterator

	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), iterator(), iterator(), iterator(), hashFcn ); // $ExpectType Iterator
	iterIntersectionByHash( iterator(), iterator(), iterator(), iterator(), iterator(), iterator(), iterator(), hashFcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterIntersectionByHash( '5', iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( '5', iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( 5, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( 5, iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( true, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( true, iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( false, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( false, iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( null, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( null, iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( undefined, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( undefined, iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( [], iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( [], iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( {}, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( {}, iterator(), iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( ( x: number ): number => x, iterator(), hashFcn ); // $ExpectError
	iterIntersectionByHash( ( x: number ): number => x, iterator(), iterator(), hashFcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object...
{
	iterIntersectionByHash( iterator(), '5', hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), '5', iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), 5, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), 5, iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), true, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), true, iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), false, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), false, iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), null, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), null, iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), undefined, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), undefined, iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), [], hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), [], iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), {}, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), {}, iterator(), hashFcn ); // $ExpectError

	iterIntersectionByHash( iterator(), ( x: number ): number => x, hashFcn ); // $ExpectError
	iterIntersectionByHash( iterator(), ( x: number ): number => x, iterator(), hashFcn ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterIntersectionByHash(); // $ExpectError
	iterIntersectionByHash( iterator() ); // $ExpectError
}

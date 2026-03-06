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

import iterUniqueByHash = require( './index' );

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
* @param value - iterated value
* @returns hash value
*/
function hashFcn( value: any ): string {
	return String( value );
}


// TESTS //

// The function returns an iterator...
{
	iterUniqueByHash( iterator(), hashFcn ); // $ExpectType Iterator
	iterUniqueByHash( iterator(), hashFcn, {} ); // $ExpectType Iterator
	iterUniqueByHash( iterator(), hashFcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterUniqueByHash( '5', hashFcn ); // $ExpectError
	iterUniqueByHash( 5, hashFcn ); // $ExpectError
	iterUniqueByHash( true, hashFcn ); // $ExpectError
	iterUniqueByHash( false, hashFcn ); // $ExpectError
	iterUniqueByHash( null, hashFcn ); // $ExpectError
	iterUniqueByHash( undefined, hashFcn ); // $ExpectError
	iterUniqueByHash( [], hashFcn ); // $ExpectError
	iterUniqueByHash( {}, hashFcn ); // $ExpectError
	iterUniqueByHash( ( x: number ): number => x, hashFcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid hash function...
{
	iterUniqueByHash( iterator(), '5' ); // $ExpectError
	iterUniqueByHash( iterator(), 5 ); // $ExpectError
	iterUniqueByHash( iterator(), true ); // $ExpectError
	iterUniqueByHash( iterator(), false ); // $ExpectError
	iterUniqueByHash( iterator(), null ); // $ExpectError
	iterUniqueByHash( iterator(), undefined ); // $ExpectError
	iterUniqueByHash( iterator(), [] ); // $ExpectError
	iterUniqueByHash( iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterUniqueByHash(); // $ExpectError
	iterUniqueByHash( iterator() ); // $ExpectError
}

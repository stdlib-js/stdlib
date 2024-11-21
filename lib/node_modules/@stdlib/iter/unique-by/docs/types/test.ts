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

import iterUniqueBy = require( './index' );

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
* Tests whether a value is unique compared to a previously identified unique value.
*
* @param a - a previously identified unique value
* @param b - the value whose uniqueness is being determined
* @returns boolean indicating whether a value is different
*/
function predicate( a: any, b: any ): boolean {
	return ( a === b );
}


// TESTS //

// The function returns an iterator...
{
	iterUniqueBy( iterator(), predicate ); // $ExpectType Iterator
	iterUniqueBy( iterator(), predicate, {} ); // $ExpectType Iterator
	iterUniqueBy( iterator(), predicate, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterUniqueBy( '5', predicate ); // $ExpectError
	iterUniqueBy( 5, predicate ); // $ExpectError
	iterUniqueBy( true, predicate ); // $ExpectError
	iterUniqueBy( false, predicate ); // $ExpectError
	iterUniqueBy( null, predicate ); // $ExpectError
	iterUniqueBy( undefined, predicate ); // $ExpectError
	iterUniqueBy( [], predicate ); // $ExpectError
	iterUniqueBy( {}, predicate ); // $ExpectError
	iterUniqueBy( ( x: number ): number => x, predicate ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid predicate function...
{
	iterUniqueBy( iterator(), '5' ); // $ExpectError
	iterUniqueBy( iterator(), 5 ); // $ExpectError
	iterUniqueBy( iterator(), true ); // $ExpectError
	iterUniqueBy( iterator(), false ); // $ExpectError
	iterUniqueBy( iterator(), null ); // $ExpectError
	iterUniqueBy( iterator(), undefined ); // $ExpectError
	iterUniqueBy( iterator(), [] ); // $ExpectError
	iterUniqueBy( iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterUniqueBy(); // $ExpectError
	iterUniqueBy( iterator() ); // $ExpectError
}

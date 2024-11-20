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

import iterDedupeBy = require( './index' );

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
* Indicates whether a value is a "duplicate".
*
* @param v - current source iterated value
* @returns resolved value
*/
function fcn( v: any ) {
	return v;
}


// TESTS //

// The function returns an iterator...
{
	iterDedupeBy( iterator(), fcn ); // $ExpectType Iterator
	iterDedupeBy( iterator(), 2, fcn ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a value other than an iterator protocol-compliant object...
{
	iterDedupeBy( '5', fcn ); // $ExpectError
	iterDedupeBy( 5, fcn ); // $ExpectError
	iterDedupeBy( true, fcn ); // $ExpectError
	iterDedupeBy( false, fcn ); // $ExpectError
	iterDedupeBy( null, fcn ); // $ExpectError
	iterDedupeBy( undefined, fcn ); // $ExpectError
	iterDedupeBy( [], fcn ); // $ExpectError
	iterDedupeBy( {}, fcn ); // $ExpectError
	iterDedupeBy( ( x: number ): number => x, fcn ); // $ExpectError

	iterDedupeBy( '5', 1, fcn ); // $ExpectError
	iterDedupeBy( 5, 1, fcn ); // $ExpectError
	iterDedupeBy( true, 1, fcn ); // $ExpectError
	iterDedupeBy( false, 1, fcn ); // $ExpectError
	iterDedupeBy( null, 1, fcn ); // $ExpectError
	iterDedupeBy( undefined, 1, fcn ); // $ExpectError
	iterDedupeBy( [], 1, fcn ); // $ExpectError
	iterDedupeBy( {}, 1, fcn ); // $ExpectError
	iterDedupeBy( ( x: number ): number => x, 1, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a `limit` argument which is not a number...
{
	iterDedupeBy( iterator(), '5', fcn ); // $ExpectError
	iterDedupeBy( iterator(), true, fcn ); // $ExpectError
	iterDedupeBy( iterator(), false, fcn ); // $ExpectError
	iterDedupeBy( iterator(), null, fcn ); // $ExpectError
	iterDedupeBy( iterator(), [], fcn ); // $ExpectError
	iterDedupeBy( iterator(), {}, fcn ); // $ExpectError
	iterDedupeBy( iterator(), ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a last argument which is not a function...
{
	iterDedupeBy( iterator(), '5' ); // $ExpectError
	iterDedupeBy( iterator(), 5 ); // $ExpectError
	iterDedupeBy( iterator(), true ); // $ExpectError
	iterDedupeBy( iterator(), false ); // $ExpectError
	iterDedupeBy( iterator(), null ); // $ExpectError
	iterDedupeBy( iterator(), undefined ); // $ExpectError
	iterDedupeBy( iterator(), [] ); // $ExpectError
	iterDedupeBy( iterator(), {} ); // $ExpectError

	iterDedupeBy( iterator(), 1, '5' ); // $ExpectError
	iterDedupeBy( iterator(), 1, 5 ); // $ExpectError
	iterDedupeBy( iterator(), 1, true ); // $ExpectError
	iterDedupeBy( iterator(), 1, false ); // $ExpectError
	iterDedupeBy( iterator(), 1, null ); // $ExpectError
	iterDedupeBy( iterator(), 1, undefined ); // $ExpectError
	iterDedupeBy( iterator(), 1, [] ); // $ExpectError
	iterDedupeBy( iterator(), 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterDedupeBy(); // $ExpectError
	iterDedupeBy( iterator() ); // $ExpectError
}

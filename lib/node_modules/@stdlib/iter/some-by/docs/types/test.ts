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

import iterSomeBy = require( './index' );

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
* Predicate function.
*
* @param _v - iterated value
* @param i - iteration index
* @returns a boolean
*/
function predicate1( _v: any, i: number ): boolean {
	return ( i !== i );
}

/**
* Predicate function.
*
* @param v - iterated value
* @returns a boolean
*/
function predicate2( v: any ): boolean {
	return ( v !== v );
}


// TESTS //

// The function returns a boolean...
{
	iterSomeBy( iterator(), 3, predicate1 ); // $ExpectType boolean
	iterSomeBy( iterator(), 3, predicate2 ); // $ExpectType boolean
	iterSomeBy( iterator(), 3, predicate1, {} ); // $ExpectType boolean
	iterSomeBy( iterator(), 3, predicate2, {} ); // $ExpectType boolean
	iterSomeBy( iterator(), 3, predicate1, null ); // $ExpectType boolean
	iterSomeBy( iterator(), 3, predicate2, null ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterSomeBy( '5', 3, predicate1 ); // $ExpectError
	iterSomeBy( 5, 3, predicate1 ); // $ExpectError
	iterSomeBy( true, 3, predicate1 ); // $ExpectError
	iterSomeBy( false, 3, predicate1 ); // $ExpectError
	iterSomeBy( null, 3, predicate1 ); // $ExpectError
	iterSomeBy( undefined, 3, predicate1 ); // $ExpectError
	iterSomeBy( [], 3, predicate1 ); // $ExpectError
	iterSomeBy( {}, 3, predicate1 ); // $ExpectError
	iterSomeBy( ( x: number ): number => x, 3, predicate1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterSomeBy( iterator(), '5', predicate1 ); // $ExpectError
	iterSomeBy( iterator(), true, predicate1 ); // $ExpectError
	iterSomeBy( iterator(), false, predicate1 ); // $ExpectError
	iterSomeBy( iterator(), null, predicate1 ); // $ExpectError
	iterSomeBy( iterator(), undefined, predicate1 ); // $ExpectError
	iterSomeBy( iterator(), [], predicate1 ); // $ExpectError
	iterSomeBy( iterator(), {}, predicate1 ); // $ExpectError
	iterSomeBy( iterator(), ( x: number ): number => x, predicate1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a predicate function...
{
	iterSomeBy( iterator(), 3, '5' ); // $ExpectError
	iterSomeBy( iterator(), 3, 5 ); // $ExpectError
	iterSomeBy( iterator(), 3, true ); // $ExpectError
	iterSomeBy( iterator(), 3, false ); // $ExpectError
	iterSomeBy( iterator(), 3, null ); // $ExpectError
	iterSomeBy( iterator(), 3, undefined ); // $ExpectError
	iterSomeBy( iterator(), 3, [] ); // $ExpectError
	iterSomeBy( iterator(), 3, {} ); // $ExpectError
	iterSomeBy( iterator(), 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterSomeBy(); // $ExpectError
	iterSomeBy( iterator() ); // $ExpectError
	iterSomeBy( iterator(), 3 ); // $ExpectError
}

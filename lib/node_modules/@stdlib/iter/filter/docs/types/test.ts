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

import iterFilter = require( './index' );

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
	return ( i >= 10 );
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

// The function returns an iterator...
{
	iterFilter( iterator(), predicate1 ); // $ExpectType Iterator
	iterFilter( iterator(), predicate2 ); // $ExpectType Iterator
	iterFilter( iterator(), predicate1, {} ); // $ExpectType Iterator
	iterFilter( iterator(), predicate2, {} ); // $ExpectType Iterator
	iterFilter( iterator(), predicate1, null ); // $ExpectType Iterator
	iterFilter( iterator(), predicate2, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterFilter( '5', predicate1 ); // $ExpectError
	iterFilter( 5, predicate1 ); // $ExpectError
	iterFilter( true, predicate1 ); // $ExpectError
	iterFilter( false, predicate1 ); // $ExpectError
	iterFilter( null, predicate1 ); // $ExpectError
	iterFilter( undefined, predicate1 ); // $ExpectError
	iterFilter( [], predicate1 ); // $ExpectError
	iterFilter( {}, predicate1 ); // $ExpectError
	iterFilter( ( x: number ): number => x, predicate1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a predicate function...
{
	iterFilter( iterator(), '5' ); // $ExpectError
	iterFilter( iterator(), 5 ); // $ExpectError
	iterFilter( iterator(), true ); // $ExpectError
	iterFilter( iterator(), false ); // $ExpectError
	iterFilter( iterator(), null ); // $ExpectError
	iterFilter( iterator(), undefined ); // $ExpectError
	iterFilter( iterator(), [] ); // $ExpectError
	iterFilter( iterator(), {} ); // $ExpectError
	iterFilter( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterFilter(); // $ExpectError
	iterFilter( iterator() ); // $ExpectError
}

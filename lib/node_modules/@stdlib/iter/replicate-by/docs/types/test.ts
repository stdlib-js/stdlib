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

import iterReplicateBy = require( './index' );

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
* Returns the number of times an iterated value should be replicated.
*
* @param _v - iterated value
* @param i - source iteration index
* @returns callback result
*/
function fcn( _v: any, i: number ): number {
	return i + 1;
}


// TESTS //

// The function returns an iterator...
{
	iterReplicateBy( iterator(), fcn ); // $ExpectType Iterator
	iterReplicateBy( iterator(), fcn, {} ); // $ExpectType Iterator
	iterReplicateBy( iterator(), fcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterReplicateBy( '5', fcn ); // $ExpectError
	iterReplicateBy( 5, fcn ); // $ExpectError
	iterReplicateBy( true, fcn ); // $ExpectError
	iterReplicateBy( false, fcn ); // $ExpectError
	iterReplicateBy( null, fcn ); // $ExpectError
	iterReplicateBy( undefined, fcn ); // $ExpectError
	iterReplicateBy( [], fcn ); // $ExpectError
	iterReplicateBy( {}, fcn ); // $ExpectError
	iterReplicateBy( ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid callback function...
{
	iterReplicateBy( iterator(), '5' ); // $ExpectError
	iterReplicateBy( iterator(), 5 ); // $ExpectError
	iterReplicateBy( iterator(), true ); // $ExpectError
	iterReplicateBy( iterator(), false ); // $ExpectError
	iterReplicateBy( iterator(), null ); // $ExpectError
	iterReplicateBy( iterator(), undefined ); // $ExpectError
	iterReplicateBy( iterator(), [] ); // $ExpectError
	iterReplicateBy( iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterReplicateBy(); // $ExpectError
	iterReplicateBy( iterator() ); // $ExpectError
}

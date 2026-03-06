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

import iterStridedBy = require( './index' );

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
* Callback function.
*
* @param v - iterated value
* @param i - iteration index
* @returns callback result
*/
function fcn( v: any, i: number ): number {
	if ( v !== v ) {
		throw new Error( 'invalid value' );
	}
	return ( i % 10 ) + 1;
}


// TESTS //

// The function returns an iterator...
{
	iterStridedBy( iterator(), fcn ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2 ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2, true ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2, false ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, {} ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, null ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2, {} ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2, null ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2, true, {} ); // $ExpectType Iterator
	iterStridedBy( iterator(), fcn, 2, false, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterStridedBy( '5', fcn ); // $ExpectError
	iterStridedBy( 5, fcn ); // $ExpectError
	iterStridedBy( true, fcn ); // $ExpectError
	iterStridedBy( false, fcn ); // $ExpectError
	iterStridedBy( null, fcn ); // $ExpectError
	iterStridedBy( undefined, fcn ); // $ExpectError
	iterStridedBy( [], fcn ); // $ExpectError
	iterStridedBy( {}, fcn ); // $ExpectError
	iterStridedBy( ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	iterStridedBy( iterator(), '5' ); // $ExpectError
	iterStridedBy( iterator(), 5 ); // $ExpectError
	iterStridedBy( iterator(), null ); // $ExpectError
	iterStridedBy( iterator(), undefined ); // $ExpectError
	iterStridedBy( iterator(), true ); // $ExpectError
	iterStridedBy( iterator(), false ); // $ExpectError
	iterStridedBy( iterator(), [] ); // $ExpectError
	iterStridedBy( iterator(), {} ); // $ExpectError

	iterStridedBy( iterator(), '5', 2 ); // $ExpectError
	iterStridedBy( iterator(), 5, 2 ); // $ExpectError
	iterStridedBy( iterator(), null, 2 ); // $ExpectError
	iterStridedBy( iterator(), undefined, 2 ); // $ExpectError
	iterStridedBy( iterator(), true, 2 ); // $ExpectError
	iterStridedBy( iterator(), false, 2 ); // $ExpectError
	iterStridedBy( iterator(), [], 2 ); // $ExpectError
	iterStridedBy( iterator(), {}, 2 ); // $ExpectError

	iterStridedBy( iterator(), '5', 2, true ); // $ExpectError
	iterStridedBy( iterator(), 5, 2, true ); // $ExpectError
	iterStridedBy( iterator(), null, 2, true ); // $ExpectError
	iterStridedBy( iterator(), undefined, 2, true ); // $ExpectError
	iterStridedBy( iterator(), true, 2, true ); // $ExpectError
	iterStridedBy( iterator(), false, 2, true ); // $ExpectError
	iterStridedBy( iterator(), [], 2, true ); // $ExpectError
	iterStridedBy( iterator(), {}, 2, true ); // $ExpectError

	iterStridedBy( iterator(), '5', 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), 5, 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), null, 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), undefined, 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), true, 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), false, 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), [], 2, true, {} ); // $ExpectError
	iterStridedBy( iterator(), {}, 2, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	iterStridedBy( iterator(), fcn, '5', true, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, true, true, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, false, true, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, null, true, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, [], true, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, {}, true, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, ( x: number ): number => x, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	iterStridedBy( iterator(), fcn, 2, '5', {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, 2, null, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, 2, [], {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, 2, {}, {} ); // $ExpectError
	iterStridedBy( iterator(), fcn, 2, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterStridedBy(); // $ExpectError
	iterStridedBy( iterator() ); // $ExpectError
}

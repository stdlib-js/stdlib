/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import iterMap = require( './index' );

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
* Unary function.
*
* @param v - iterated value
* @returns result
*/
function fcn( v: number ): any {
	if ( v !== v ) {
		throw new Error( 'something went wrong' );
	}
	return v;
}


// TESTS //

// The function returns an iterator...
{
	iterMap( iterator(), fcn ); // $ExpectType Iterator
	iterMap( iterator(), fcn, {} ); // $ExpectType Iterator
	iterMap( iterator(), fcn, { 'invalid': null } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterMap( '5', fcn ); // $ExpectError
	iterMap( 5, fcn ); // $ExpectError
	iterMap( true, fcn ); // $ExpectError
	iterMap( false, fcn ); // $ExpectError
	iterMap( null, fcn ); // $ExpectError
	iterMap( undefined, fcn ); // $ExpectError
	iterMap( [], fcn ); // $ExpectError
	iterMap( {}, fcn ); // $ExpectError
	iterMap( ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid callback function...
{
	iterMap( iterator(), '5' ); // $ExpectError
	iterMap( iterator(), 5 ); // $ExpectError
	iterMap( iterator(), true ); // $ExpectError
	iterMap( iterator(), false ); // $ExpectError
	iterMap( iterator(), null ); // $ExpectError
	iterMap( iterator(), undefined ); // $ExpectError
	iterMap( iterator(), [] ); // $ExpectError
	iterMap( iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	iterMap( iterator(), fcn, '5' ); // $ExpectError
	iterMap( iterator(), fcn, 5 ); // $ExpectError
	iterMap( iterator(), fcn, true ); // $ExpectError
	iterMap( iterator(), fcn, false ); // $ExpectError
	iterMap( iterator(), fcn, null ); // $ExpectError
	iterMap( iterator(), fcn, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterMap(); // $ExpectError
	iterMap( iterator() ); // $ExpectError
}

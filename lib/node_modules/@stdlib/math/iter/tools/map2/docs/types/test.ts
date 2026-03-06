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

import iterMap2 = require( './index' );

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
* Binary function.
*
* @param x - iterated value
* @param y - iterated value
* @returns result
*/
function fcn( x: number, y: number ): any {
	if ( x !== x || y !== y ) {
		throw new Error( 'something went wrong' );
	}
	return x + y;
}


// TESTS //

// The function returns an iterator...
{
	iterMap2( iterator(), iterator(), fcn ); // $ExpectType Iterator
	iterMap2( iterator(), iterator(), fcn, {} ); // $ExpectType Iterator
	iterMap2( iterator(), iterator(), fcn, { 'invalid': null } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or number...
{
	iterMap2( '5', iterator(), fcn ); // $ExpectError
	iterMap2( true, iterator(), fcn ); // $ExpectError
	iterMap2( false, iterator(), fcn ); // $ExpectError
	iterMap2( null, iterator(), fcn ); // $ExpectError
	iterMap2( undefined, iterator(), fcn ); // $ExpectError
	iterMap2( [], iterator(), fcn ); // $ExpectError
	iterMap2( {}, iterator(), fcn ); // $ExpectError
	iterMap2( ( x: number ): number => x, iterator(), fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or number...
{
	iterMap2( iterator(), '5', fcn ); // $ExpectError
	iterMap2( iterator(), true, fcn ); // $ExpectError
	iterMap2( iterator(), false, fcn ); // $ExpectError
	iterMap2( iterator(), null, fcn ); // $ExpectError
	iterMap2( iterator(), undefined, fcn ); // $ExpectError
	iterMap2( iterator(), [], fcn ); // $ExpectError
	iterMap2( iterator(), {}, fcn ); // $ExpectError
	iterMap2( iterator(), ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback function...
{
	iterMap2( iterator(), iterator(), '5' ); // $ExpectError
	iterMap2( iterator(), iterator(), 5 ); // $ExpectError
	iterMap2( iterator(), iterator(), true ); // $ExpectError
	iterMap2( iterator(), iterator(), false ); // $ExpectError
	iterMap2( iterator(), iterator(), null ); // $ExpectError
	iterMap2( iterator(), iterator(), undefined ); // $ExpectError
	iterMap2( iterator(), iterator(), [] ); // $ExpectError
	iterMap2( iterator(), iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object...
{
	iterMap2( iterator(), iterator(), fcn, '5' ); // $ExpectError
	iterMap2( iterator(), iterator(), fcn, 5 ); // $ExpectError
	iterMap2( iterator(), iterator(), fcn, true ); // $ExpectError
	iterMap2( iterator(), iterator(), fcn, false ); // $ExpectError
	iterMap2( iterator(), iterator(), fcn, null ); // $ExpectError
	iterMap2( iterator(), iterator(), fcn, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterMap2(); // $ExpectError
	iterMap2( iterator() ); // $ExpectError
	iterMap2( iterator(), iterator() ); // $ExpectError
}

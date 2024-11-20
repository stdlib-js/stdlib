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

import iterMap3 = require( './index' );

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
* Ternary function.
*
* @param x - iterated value
* @param y - iterated value
* @param z - iterated value
* @returns result
*/
function fcn( x: number, y: number, z: number ): any {
	if ( x !== x || y !== y || z !== z ) {
		throw new Error( 'something went wrong' );
	}
	return x + y + z;
}


// TESTS //

// The function returns an iterator...
{
	iterMap3( iterator(), iterator(), iterator(), fcn ); // $ExpectType Iterator
	iterMap3( iterator(), iterator(), iterator(), fcn, {} ); // $ExpectType Iterator
	iterMap3( iterator(), iterator(), iterator(), fcn, { 'invalid': null } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or number...
{
	iterMap3( '5', iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( true, iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( false, iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( null, iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( undefined, iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( [], iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( {}, iterator(), iterator(), fcn ); // $ExpectError
	iterMap3( ( x: number ): number => x, iterator(), iterator(), fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or number...
{
	iterMap3( iterator(), '5', iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), true, iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), false, iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), null, iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), undefined, iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), [], iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), {}, iterator(), fcn ); // $ExpectError
	iterMap3( iterator(), ( x: number ): number => x, iterator(), fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object or number...
{
	iterMap3( iterator(), iterator(), '5', fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), true, fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), false, fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), null, fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), undefined, fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), [], fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), {}, fcn ); // $ExpectError
	iterMap3( iterator(), iterator(), ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid callback function...
{
	iterMap3( iterator(), iterator(), iterator(), '5' ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), 5 ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), true ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), false ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), null ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), undefined ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), [] ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an object...
{
	iterMap3( iterator(), iterator(), iterator(), fcn, '5' ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), fcn, 5 ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), fcn, true ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), fcn, false ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), fcn, null ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator(), fcn, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterMap3(); // $ExpectError
	iterMap3( iterator() ); // $ExpectError
	iterMap3( iterator(), iterator() ); // $ExpectError
	iterMap3( iterator(), iterator(), iterator() ); // $ExpectError
}

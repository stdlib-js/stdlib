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

import iterForEach = require( './index' );

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
function fcn( v: any, i: number ) {
	if ( v !== v || i !== i ) {
		throw new Error( 'something went wrong' );
	}
}


// TESTS //

// The function returns an iterator...
{
	iterForEach( iterator(), fcn ); // $ExpectType Iterator
	iterForEach( iterator(), fcn, {} ); // $ExpectType Iterator
	iterForEach( iterator(), fcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterForEach( '5', fcn ); // $ExpectError
	iterForEach( 5, fcn ); // $ExpectError
	iterForEach( true, fcn ); // $ExpectError
	iterForEach( false, fcn ); // $ExpectError
	iterForEach( null, fcn ); // $ExpectError
	iterForEach( undefined, fcn ); // $ExpectError
	iterForEach( [], fcn ); // $ExpectError
	iterForEach( {}, fcn ); // $ExpectError
	iterForEach( ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid callback function...
{
	iterForEach( iterator(), '5' ); // $ExpectError
	iterForEach( iterator(), 5 ); // $ExpectError
	iterForEach( iterator(), true ); // $ExpectError
	iterForEach( iterator(), false ); // $ExpectError
	iterForEach( iterator(), null ); // $ExpectError
	iterForEach( iterator(), undefined ); // $ExpectError
	iterForEach( iterator(), [] ); // $ExpectError
	iterForEach( iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterForEach(); // $ExpectError
	iterForEach( iterator() ); // $ExpectError
}

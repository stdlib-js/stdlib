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

import iterFilterMap = require( './index' );

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
* @param _v - iterated value
* @param i - iteration index
* @returns callback result
*/
function fcn1( _v: any, i: number ): number {
	return i + 1;
}

/**
* Callback function.
*
* @param v - iterated value
* @returns callback result
*/
function fcn2( v: any ): any {
	return v;
}


// TESTS //

// The function returns an iterator...
{
	iterFilterMap( iterator(), fcn1 ); // $ExpectType Iterator
	iterFilterMap( iterator(), fcn2 ); // $ExpectType Iterator
	iterFilterMap( iterator(), fcn1, {} ); // $ExpectType Iterator
	iterFilterMap( iterator(), fcn2, {} ); // $ExpectType Iterator
	iterFilterMap( iterator(), fcn1, null ); // $ExpectType Iterator
	iterFilterMap( iterator(), fcn2, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterFilterMap( '5', fcn1 ); // $ExpectError
	iterFilterMap( 5, fcn1 ); // $ExpectError
	iterFilterMap( true, fcn1 ); // $ExpectError
	iterFilterMap( false, fcn1 ); // $ExpectError
	iterFilterMap( null, fcn1 ); // $ExpectError
	iterFilterMap( undefined, fcn1 ); // $ExpectError
	iterFilterMap( [], fcn1 ); // $ExpectError
	iterFilterMap( {}, fcn1 ); // $ExpectError
	iterFilterMap( ( x: number ): number => x, fcn1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid callback function...
{
	iterFilterMap( iterator(), '5' ); // $ExpectError
	iterFilterMap( iterator(), 5 ); // $ExpectError
	iterFilterMap( iterator(), true ); // $ExpectError
	iterFilterMap( iterator(), false ); // $ExpectError
	iterFilterMap( iterator(), null ); // $ExpectError
	iterFilterMap( iterator(), undefined ); // $ExpectError
	iterFilterMap( iterator(), [] ); // $ExpectError
	iterFilterMap( iterator(), {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterFilterMap(); // $ExpectError
	iterFilterMap( iterator() ); // $ExpectError
}

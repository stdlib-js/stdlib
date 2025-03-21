/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import iterWhileEach = require( './index' );

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator(): any {
	/**
	* Implements the iterator protocol `next` method.
	*
	* @returns iterator protocol-compliant object
	*/
	function next(): any {
		return {
			'value': true,
			'done': false
		};
	}

	return {
		'next': next
	};
}

/**
* Conditional predicate function.
*
* @param v - iterated value
* @param i - iteration index
* @returns a boolean indicating whether to continue iterating or not
*/
function predicate( v: any, i: number ): boolean {
	return v === v && i === i;
}

/**
* Callback function.
*
* @param v - iterated value
* @param i - iteration index
* @returns callback result
*/
function fcn( v: any, i: number ): any {
	if ( v !== v || i !== i ) {
		throw new Error( 'something went wrong' );
	}
}


// TESTS //

// The function returns an iterator...
{
	iterWhileEach( iterator(), predicate, fcn ); // $ExpectType Iterator
	iterWhileEach( iterator(), predicate, fcn, {} ); // $ExpectType Iterator
	iterWhileEach( iterator(), predicate, fcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterWhileEach( '5', predicate, fcn ); // $ExpectError
	iterWhileEach( 5, predicate, fcn ); // $ExpectError
	iterWhileEach( true, predicate, fcn ); // $ExpectError
	iterWhileEach( false, predicate, fcn ); // $ExpectError
	iterWhileEach( null, predicate, fcn ); // $ExpectError
	iterWhileEach( undefined, predicate, fcn ); // $ExpectError
	iterWhileEach( [], predicate, fcn ); // $ExpectError
	iterWhileEach( {}, predicate, fcn ); // $ExpectError
	iterWhileEach( ( x: number ): number => x, predicate, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid predicate function...
{
	iterWhileEach( iterator(), '5', fcn ); // $ExpectError
	iterWhileEach( iterator(), 5, fcn ); // $ExpectError
	iterWhileEach( iterator(), true, fcn ); // $ExpectError
	iterWhileEach( iterator(), false, fcn ); // $ExpectError
	iterWhileEach( iterator(), null, fcn ); // $ExpectError
	iterWhileEach( iterator(), undefined, fcn ); // $ExpectError
	iterWhileEach( iterator(), [], fcn ); // $ExpectError
	iterWhileEach( iterator(), {}, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback function...
{
	iterWhileEach( iterator(), predicate, '5' ); // $ExpectError
	iterWhileEach( iterator(), predicate, 5 ); // $ExpectError
	iterWhileEach( iterator(), predicate, true ); // $ExpectError
	iterWhileEach( iterator(), predicate, false ); // $ExpectError
	iterWhileEach( iterator(), predicate, null ); // $ExpectError
	iterWhileEach( iterator(), predicate, undefined ); // $ExpectError
	iterWhileEach( iterator(), predicate, [] ); // $ExpectError
	iterWhileEach( iterator(), predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterWhileEach(); // $ExpectError
	iterWhileEach( iterator() ); // $ExpectError
	iterWhileEach( iterator(), predicate ); // $ExpectError
}

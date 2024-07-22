/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import iterDoWhileEach = require( './index' );

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
	iterDoWhileEach( iterator(), predicate, fcn ); // $ExpectType Iterator
	iterDoWhileEach( iterator(), predicate, fcn, {} ); // $ExpectType Iterator
	iterDoWhileEach( iterator(), predicate, fcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterDoWhileEach( '5', predicate, fcn ); // $ExpectError
	iterDoWhileEach( 5, predicate, fcn ); // $ExpectError
	iterDoWhileEach( true, predicate, fcn ); // $ExpectError
	iterDoWhileEach( false, predicate, fcn ); // $ExpectError
	iterDoWhileEach( null, predicate, fcn ); // $ExpectError
	iterDoWhileEach( undefined, predicate, fcn ); // $ExpectError
	iterDoWhileEach( [], predicate, fcn ); // $ExpectError
	iterDoWhileEach( {}, predicate, fcn ); // $ExpectError
	iterDoWhileEach( ( x: number ): number => x, predicate, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid predicate function...
{
	iterDoWhileEach( iterator(), '5', fcn ); // $ExpectError
	iterDoWhileEach( iterator(), 5, fcn ); // $ExpectError
	iterDoWhileEach( iterator(), true, fcn ); // $ExpectError
	iterDoWhileEach( iterator(), false, fcn ); // $ExpectError
	iterDoWhileEach( iterator(), null, fcn ); // $ExpectError
	iterDoWhileEach( iterator(), undefined, fcn ); // $ExpectError
	iterDoWhileEach( iterator(), [], fcn ); // $ExpectError
	iterDoWhileEach( iterator(), {}, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback function...
{
	iterDoWhileEach( iterator(), predicate, '5' ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, 5 ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, true ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, false ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, null ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, undefined ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, [] ); // $ExpectError
	iterDoWhileEach( iterator(), predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterDoWhileEach(); // $ExpectError
	iterDoWhileEach( iterator() ); // $ExpectError
	iterDoWhileEach( iterator(), predicate ); // $ExpectError
}

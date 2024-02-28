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

import iterUntilEach = require( './index' );

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
	iterUntilEach( iterator(), predicate, fcn ); // $ExpectType Iterator
	iterUntilEach( iterator(), predicate, fcn, {} ); // $ExpectType Iterator
	iterUntilEach( iterator(), predicate, fcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterUntilEach( '5', predicate, fcn ); // $ExpectError
	iterUntilEach( 5, predicate, fcn ); // $ExpectError
	iterUntilEach( true, predicate, fcn ); // $ExpectError
	iterUntilEach( false, predicate, fcn ); // $ExpectError
	iterUntilEach( null, predicate, fcn ); // $ExpectError
	iterUntilEach( undefined, predicate, fcn ); // $ExpectError
	iterUntilEach( [], predicate, fcn ); // $ExpectError
	iterUntilEach( {}, predicate, fcn ); // $ExpectError
	iterUntilEach( ( x: number ): number => x, predicate, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid predicate function...
{
	iterUntilEach( iterator(), '5', fcn ); // $ExpectError
	iterUntilEach( iterator(), 5, fcn ); // $ExpectError
	iterUntilEach( iterator(), true, fcn ); // $ExpectError
	iterUntilEach( iterator(), false, fcn ); // $ExpectError
	iterUntilEach( iterator(), null, fcn ); // $ExpectError
	iterUntilEach( iterator(), undefined, fcn ); // $ExpectError
	iterUntilEach( iterator(), [], fcn ); // $ExpectError
	iterUntilEach( iterator(), {}, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback function...
{
	iterUntilEach( iterator(), predicate, '5' ); // $ExpectError
	iterUntilEach( iterator(), predicate, 5 ); // $ExpectError
	iterUntilEach( iterator(), predicate, true ); // $ExpectError
	iterUntilEach( iterator(), predicate, false ); // $ExpectError
	iterUntilEach( iterator(), predicate, null ); // $ExpectError
	iterUntilEach( iterator(), predicate, undefined ); // $ExpectError
	iterUntilEach( iterator(), predicate, [] ); // $ExpectError
	iterUntilEach( iterator(), predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterUntilEach(); // $ExpectError
	iterUntilEach( iterator() ); // $ExpectError
	iterUntilEach( iterator(), predicate ); // $ExpectError
}

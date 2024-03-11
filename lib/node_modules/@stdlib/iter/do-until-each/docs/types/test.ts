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

import iterDoUntilEach = require( './index' );

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator(): unknown {
	/**
	* Implements the iterator protocol `next` method.
	*
	* @returns iterator protocol-compliant object
	*/
	function next(): unknown {
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
function predicate( v: unknown, i: number ): boolean {
	return v === v && i === i;
}

/**
* Callback function.
*
* @param v - iterated value
* @param i - iteration index
* @returns callback result
*/
function fcn( v: unknown, i: number ): void {
	if ( v !== v || i !== i ) {
		throw new Error( 'something went wrong' );
	}
}


// TESTS //

// The function returns an iterator...
{
	iterDoUntilEach( iterator(), predicate, fcn ); // $ExpectType Iterator
	iterDoUntilEach( iterator(), predicate, fcn, {} ); // $ExpectType Iterator
	iterDoUntilEach( iterator(), predicate, fcn, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterDoUntilEach( '5', predicate, fcn ); // $ExpectError
	iterDoUntilEach( 5, predicate, fcn ); // $ExpectError
	iterDoUntilEach( true, predicate, fcn ); // $ExpectError
	iterDoUntilEach( false, predicate, fcn ); // $ExpectError
	iterDoUntilEach( null, predicate, fcn ); // $ExpectError
	iterDoUntilEach( undefined, predicate, fcn ); // $ExpectError
	iterDoUntilEach( [], predicate, fcn ); // $ExpectError
	iterDoUntilEach( {}, predicate, fcn ); // $ExpectError
	iterDoUntilEach( ( x: number ): number => x, predicate, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid predicate function...
{
	iterDoUntilEach( iterator(), '5', fcn ); // $ExpectError
	iterDoUntilEach( iterator(), 5, fcn ); // $ExpectError
	iterDoUntilEach( iterator(), true, fcn ); // $ExpectError
	iterDoUntilEach( iterator(), false, fcn ); // $ExpectError
	iterDoUntilEach( iterator(), null, fcn ); // $ExpectError
	iterDoUntilEach( iterator(), undefined, fcn ); // $ExpectError
	iterDoUntilEach( iterator(), [], fcn ); // $ExpectError
	iterDoUntilEach( iterator(), {}, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback function...
{
	iterDoUntilEach( iterator(), predicate, '5' ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, 5 ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, true ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, false ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, null ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, undefined ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, [] ); // $ExpectError
	iterDoUntilEach( iterator(), predicate, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterDoUntilEach(); // $ExpectError
	iterDoUntilEach( iterator() ); // $ExpectError
	iterDoUntilEach( iterator(), predicate ); // $ExpectError
}

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

import { TypedIterator, TypedIteratorResult } from '@stdlib/types/iter';
import iterCuSomeBy = require( './index' );

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next(): TypedIteratorResult<number> {
	return {
		'value': 2.0,
		'done': false
	};
}

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator(): TypedIterator<number> {
	return {
		'next': next
	};
}

/**
* Predicate function.
*
* @param _v - iterated value
* @param i - iteration index
* @returns a boolean
*/
function predicate1( _v: any, i: number ): boolean {
	return ( i > 10 );
}

/**
* Predicate function.
*
* @param v - iterated value
* @returns a boolean
*/
function predicate2( v: any ): boolean {
	return ( v !== v );
}


// TESTS //

// The function returns an iterator...
{
	iterCuSomeBy( iterator(), 3, predicate1 ); // $ExpectType Iterator<boolean>
	iterCuSomeBy( iterator(), 3, predicate2 ); // $ExpectType Iterator<boolean>
	iterCuSomeBy( iterator(), 3, predicate1, {} ); // $ExpectType Iterator<boolean>
	iterCuSomeBy( iterator(), 3, predicate2, {} ); // $ExpectType Iterator<boolean>
	iterCuSomeBy( iterator(), 3, predicate1, null ); // $ExpectType Iterator<boolean>
	iterCuSomeBy( iterator(), 3, predicate2, null ); // $ExpectType Iterator<boolean>
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterCuSomeBy( '5', 3, predicate1 ); // $ExpectError
	iterCuSomeBy( 5, 3, predicate1 ); // $ExpectError
	iterCuSomeBy( true, 3, predicate1 ); // $ExpectError
	iterCuSomeBy( false, 3, predicate1 ); // $ExpectError
	iterCuSomeBy( null, 3, predicate1 ); // $ExpectError
	iterCuSomeBy( undefined, 3, predicate1 ); // $ExpectError
	iterCuSomeBy( [], 3, predicate1 ); // $ExpectError
	iterCuSomeBy( {}, 3, predicate1 ); // $ExpectError
	iterCuSomeBy( ( x: number ): number => x, 3, predicate1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterCuSomeBy( iterator(), '5', predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), true, predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), false, predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), null, predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), undefined, predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), [], predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), {}, predicate1 ); // $ExpectError
	iterCuSomeBy( iterator(), ( x: number ): number => x, predicate1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a predicate function...
{
	iterCuSomeBy( iterator(), 3, '5' ); // $ExpectError
	iterCuSomeBy( iterator(), 3, 5 ); // $ExpectError
	iterCuSomeBy( iterator(), 3, true ); // $ExpectError
	iterCuSomeBy( iterator(), 3, false ); // $ExpectError
	iterCuSomeBy( iterator(), 3, null ); // $ExpectError
	iterCuSomeBy( iterator(), 3, undefined ); // $ExpectError
	iterCuSomeBy( iterator(), 3, [] ); // $ExpectError
	iterCuSomeBy( iterator(), 3, {} ); // $ExpectError
	iterCuSomeBy( iterator(), 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterCuSomeBy(); // $ExpectError
	iterCuSomeBy( iterator() ); // $ExpectError
	iterCuSomeBy( iterator(), 3 ); // $ExpectError
}

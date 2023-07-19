/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import iterContinuedFraction = require( './index' );

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator() {
	return {
		'next': next
	};
}

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next() {
	return {
		'value': 1,
		'done': false
	};
}


// TESTS //

// The function returns either a number or null...
{
	iterContinuedFraction( iterator() ); // $ExpectType number | null
	iterContinuedFraction( iterator(), {} ); // $ExpectType number | null
	iterContinuedFraction( iterator(), { 'iter': 10 } ); // $ExpectType number | null
}

// The compiler throws an error if the function is provided a value other than an iterator protocol-compliant object...
{
	iterContinuedFraction( '5' ); // $ExpectError
	iterContinuedFraction( 5 ); // $ExpectError
	iterContinuedFraction( true ); // $ExpectError
	iterContinuedFraction( false ); // $ExpectError
	iterContinuedFraction( null ); // $ExpectError
	iterContinuedFraction( undefined ); // $ExpectError
	iterContinuedFraction( [] ); // $ExpectError
	iterContinuedFraction( {} ); // $ExpectError
	iterContinuedFraction( ( x: number ): number => x ); // $ExpectError

	iterContinuedFraction( '5', {} ); // $ExpectError
	iterContinuedFraction( 5, {} ); // $ExpectError
	iterContinuedFraction( true, {} ); // $ExpectError
	iterContinuedFraction( false, {} ); // $ExpectError
	iterContinuedFraction( null, {} ); // $ExpectError
	iterContinuedFraction( undefined, {} ); // $ExpectError
	iterContinuedFraction( [], {} ); // $ExpectError
	iterContinuedFraction( {}, {} ); // $ExpectError
	iterContinuedFraction( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	iterContinuedFraction( iterator(), '5' ); // $ExpectError
	iterContinuedFraction( iterator(), 5 ); // $ExpectError
	iterContinuedFraction( iterator(), true ); // $ExpectError
	iterContinuedFraction( iterator(), false ); // $ExpectError
	iterContinuedFraction( iterator(), null ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterContinuedFraction( iterator(), { 'iter': '5' } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'iter': true } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'iter': false } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'iter': null } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'iter': [] } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'iter': {} } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'iter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `tol` option which is not a number...
{
	iterContinuedFraction( iterator(), { 'tol': '5' } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'tol': true } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'tol': false } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'tol': null } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'tol': [] } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'tol': {} } ); // $ExpectError
	iterContinuedFraction( iterator(), { 'tol': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	iterContinuedFraction(); // $ExpectError
	iterContinuedFraction( iterator(), {}, {} ); // $ExpectError
}

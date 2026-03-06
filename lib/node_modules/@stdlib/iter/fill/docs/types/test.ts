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

import iterFill = require( './index' );

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


// TESTS //

// The function returns an iterator...
{
	iterFill( iterator(), 'beep' ); // $ExpectType Iterator
	iterFill( iterator(), 'beep', 2 ); // $ExpectType Iterator
	iterFill( iterator(), 'beep', 2, 5 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterFill( '5', 'beep' ); // $ExpectError
	iterFill( 5, 'beep' ); // $ExpectError
	iterFill( true, 'beep' ); // $ExpectError
	iterFill( false, 'beep' ); // $ExpectError
	iterFill( null, 'beep' ); // $ExpectError
	iterFill( undefined, 'beep' ); // $ExpectError
	iterFill( [], 'beep' ); // $ExpectError
	iterFill( {}, 'beep' ); // $ExpectError
	iterFill( ( x: number ): number => x, 'beep' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not is a number...
{
	iterFill( iterator(), 'beep', '5' ); // $ExpectError
	iterFill( iterator(), 'beep', true ); // $ExpectError
	iterFill( iterator(), 'beep', false ); // $ExpectError
	iterFill( iterator(), 'beep', null ); // $ExpectError
	iterFill( iterator(), 'beep', [] ); // $ExpectError
	iterFill( iterator(), 'beep', {} ); // $ExpectError
	iterFill( iterator(), 'beep', ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not is a number...
{
	iterFill( iterator(), 'beep', 2, '5' ); // $ExpectError
	iterFill( iterator(), 'beep', 2, true ); // $ExpectError
	iterFill( iterator(), 'beep', 2, false ); // $ExpectError
	iterFill( iterator(), 'beep', 2, null ); // $ExpectError
	iterFill( iterator(), 'beep', 2, [] ); // $ExpectError
	iterFill( iterator(), 'beep', 2, {} ); // $ExpectError
	iterFill( iterator(), 'beep', 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterFill(); // $ExpectError
	iterFill( iterator() ); // $ExpectError
}

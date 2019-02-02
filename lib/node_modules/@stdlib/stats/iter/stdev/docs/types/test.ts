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

import iterstdev = require( './index' );

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

// The function returns either a number or null...
{
	iterstdev( iterator() ); // $ExpectType number | null
	iterstdev( iterator(), 0.0 ); // $ExpectType number | null
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterstdev( '5' ); // $ExpectError
	iterstdev( 5 ); // $ExpectError
	iterstdev( true ); // $ExpectError
	iterstdev( false ); // $ExpectError
	iterstdev( null ); // $ExpectError
	iterstdev( undefined ); // $ExpectError
	iterstdev( [] ); // $ExpectError
	iterstdev( {} ); // $ExpectError
	iterstdev( ( x: number ): number => x ); // $ExpectError

	iterstdev( '5', 0.0 ); // $ExpectError
	iterstdev( 5, 0.0 ); // $ExpectError
	iterstdev( true, 0.0 ); // $ExpectError
	iterstdev( false, 0.0 ); // $ExpectError
	iterstdev( null, 0.0 ); // $ExpectError
	iterstdev( undefined, 0.0 ); // $ExpectError
	iterstdev( [], 0.0 ); // $ExpectError
	iterstdev( {}, 0.0 ); // $ExpectError
	iterstdev( ( x: number ): number => x, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterstdev( iterator(), '5' ); // $ExpectError
	iterstdev( iterator(), true ); // $ExpectError
	iterstdev( iterator(), false ); // $ExpectError
	iterstdev( iterator(), null ); // $ExpectError
	iterstdev( iterator(), [] ); // $ExpectError
	iterstdev( iterator(), {} ); // $ExpectError
	iterstdev( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterstdev(); // $ExpectError
}

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

import iterAdd = require( './index' );

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
		'value': 1.0,
		'done': false
	};
}


// TESTS //

// The function returns an iterator...
{
	iterAdd( iterator(), iterator() ); // $ExpectType Iterator
	iterAdd( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterAdd( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterAdd( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterAdd( iterator(), 4.0 ); // $ExpectType Iterator
	iterAdd( iterator(), 4.0, iterator() ); // $ExpectType Iterator
	iterAdd( iterator(), 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterAdd( iterator(), 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterAdd( 4.0, iterator() ); // $ExpectType Iterator
	iterAdd( 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterAdd( 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterAdd( 4.0, iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterAdd( 4.0, 4.0 ); // $ExpectType Iterator
	iterAdd( 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterAdd( 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterAdd( 4.0, 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or number...
{
	iterAdd( '5', iterator() ); // $ExpectError
	iterAdd( '5', iterator(), iterator() ); // $ExpectError

	iterAdd( true, iterator() ); // $ExpectError
	iterAdd( true, iterator(), iterator() ); // $ExpectError

	iterAdd( false, iterator() ); // $ExpectError
	iterAdd( false, iterator(), iterator() ); // $ExpectError

	iterAdd( null, iterator() ); // $ExpectError
	iterAdd( null, iterator(), iterator() ); // $ExpectError

	iterAdd( undefined, iterator() ); // $ExpectError
	iterAdd( undefined, iterator(), iterator() ); // $ExpectError

	iterAdd( [], iterator() ); // $ExpectError
	iterAdd( [], iterator(), iterator() ); // $ExpectError

	iterAdd( {}, iterator() ); // $ExpectError
	iterAdd( {}, iterator(), iterator() ); // $ExpectError

	iterAdd( ( x: number ): number => x, iterator() ); // $ExpectError
	iterAdd( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or number...
{
	iterAdd( iterator(), '5' ); // $ExpectError
	iterAdd( iterator(), '5', iterator() ); // $ExpectError

	iterAdd( iterator(), true ); // $ExpectError
	iterAdd( iterator(), true, iterator() ); // $ExpectError

	iterAdd( iterator(), false ); // $ExpectError
	iterAdd( iterator(), false, iterator() ); // $ExpectError

	iterAdd( iterator(), null ); // $ExpectError
	iterAdd( iterator(), null, iterator() ); // $ExpectError

	iterAdd( iterator(), undefined ); // $ExpectError
	iterAdd( iterator(), undefined, iterator() ); // $ExpectError

	iterAdd( iterator(), [] ); // $ExpectError
	iterAdd( iterator(), [], iterator() ); // $ExpectError

	iterAdd( iterator(), {} ); // $ExpectError
	iterAdd( iterator(), {}, iterator() ); // $ExpectError

	iterAdd( iterator(), ( x: number ): number => x ); // $ExpectError
	iterAdd( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object or number...
{
	iterAdd( iterator(), iterator(), '5' ); // $ExpectError
	iterAdd( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), true ); // $ExpectError
	iterAdd( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), false ); // $ExpectError
	iterAdd( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), null ); // $ExpectError
	iterAdd( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), undefined ); // $ExpectError
	iterAdd( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), [] ); // $ExpectError
	iterAdd( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), {} ); // $ExpectError
	iterAdd( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterAdd( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterAdd( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterAdd(); // $ExpectError
	iterAdd( iterator() ); // $ExpectError
	iterAdd( 4.0 ); // $ExpectError
}

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

import iterMod = require( './index' );

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
	iterMod( iterator(), iterator() ); // $ExpectType Iterator
	iterMod( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterMod( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterMod( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterMod( iterator(), 4.0 ); // $ExpectType Iterator
	iterMod( iterator(), 4.0, iterator() ); // $ExpectType Iterator
	iterMod( iterator(), 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterMod( iterator(), 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterMod( 4.0, iterator() ); // $ExpectType Iterator
	iterMod( 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterMod( 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterMod( 4.0, iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterMod( 4.0, 4.0 ); // $ExpectType Iterator
	iterMod( 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterMod( 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterMod( 4.0, 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or a number...
{
	iterMod( '5', iterator() ); // $ExpectError
	iterMod( '5', iterator(), iterator() ); // $ExpectError

	iterMod( true, iterator() ); // $ExpectError
	iterMod( true, iterator(), iterator() ); // $ExpectError

	iterMod( false, iterator() ); // $ExpectError
	iterMod( false, iterator(), iterator() ); // $ExpectError

	iterMod( null, iterator() ); // $ExpectError
	iterMod( null, iterator(), iterator() ); // $ExpectError

	iterMod( undefined, iterator() ); // $ExpectError
	iterMod( undefined, iterator(), iterator() ); // $ExpectError

	iterMod( [], iterator() ); // $ExpectError
	iterMod( [], iterator(), iterator() ); // $ExpectError

	iterMod( {}, iterator() ); // $ExpectError
	iterMod( {}, iterator(), iterator() ); // $ExpectError

	iterMod( ( x: number ): number => x, iterator() ); // $ExpectError
	iterMod( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or a number...
{
	iterMod( iterator(), '5' ); // $ExpectError
	iterMod( iterator(), '5', iterator() ); // $ExpectError

	iterMod( iterator(), true ); // $ExpectError
	iterMod( iterator(), true, iterator() ); // $ExpectError

	iterMod( iterator(), false ); // $ExpectError
	iterMod( iterator(), false, iterator() ); // $ExpectError

	iterMod( iterator(), null ); // $ExpectError
	iterMod( iterator(), null, iterator() ); // $ExpectError

	iterMod( iterator(), undefined ); // $ExpectError
	iterMod( iterator(), undefined, iterator() ); // $ExpectError

	iterMod( iterator(), [] ); // $ExpectError
	iterMod( iterator(), [], iterator() ); // $ExpectError

	iterMod( iterator(), {} ); // $ExpectError
	iterMod( iterator(), {}, iterator() ); // $ExpectError

	iterMod( iterator(), ( x: number ): number => x ); // $ExpectError
	iterMod( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object or a number...
{
	iterMod( iterator(), iterator(), '5' ); // $ExpectError
	iterMod( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), true ); // $ExpectError
	iterMod( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), false ); // $ExpectError
	iterMod( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), null ); // $ExpectError
	iterMod( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), undefined ); // $ExpectError
	iterMod( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), [] ); // $ExpectError
	iterMod( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), {} ); // $ExpectError
	iterMod( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterMod( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterMod( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterMod(); // $ExpectError
	iterMod( iterator() ); // $ExpectError
	iterMod( 4.0 ); // $ExpectError
}

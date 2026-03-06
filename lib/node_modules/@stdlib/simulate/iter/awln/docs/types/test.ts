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

import iterawln = require( './index' );

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
	iterawln( iterator(), 0.2 ); // $ExpectType ExtendedIterator
	iterawln( iterator(), 0.2, {} ); // $ExpectType ExtendedIterator
	iterawln( iterator(), 0.2, { 'seed': 12345 } ); // $ExpectType ExtendedIterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterawln( '5', 1.0 ); // $ExpectError
	iterawln( 5, 1.0 ); // $ExpectError
	iterawln( true, 1.0 ); // $ExpectError
	iterawln( false, 1.0 ); // $ExpectError
	iterawln( null, 1.0 ); // $ExpectError
	iterawln( undefined, 1.0 ); // $ExpectError
	iterawln( [], 1.0 ); // $ExpectError
	iterawln( {}, 1.0 ); // $ExpectError
	iterawln( ( x: number ): number => x, 1.0 ); // $ExpectError

	iterawln( '5', 1.0, {} ); // $ExpectError
	iterawln( 5, 1.0, {} ); // $ExpectError
	iterawln( true, 1.0, {} ); // $ExpectError
	iterawln( false, 1.0, {} ); // $ExpectError
	iterawln( null, 1.0, {} ); // $ExpectError
	iterawln( undefined, 1.0, {} ); // $ExpectError
	iterawln( [], 1.0, {} ); // $ExpectError
	iterawln( {}, 1.0, {} ); // $ExpectError
	iterawln( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterawln( iterator(), '5' ); // $ExpectError
	iterawln( iterator(), true ); // $ExpectError
	iterawln( iterator(), false ); // $ExpectError
	iterawln( iterator(), null ); // $ExpectError
	iterawln( iterator(), undefined ); // $ExpectError
	iterawln( iterator(), [] ); // $ExpectError
	iterawln( iterator(), {} ); // $ExpectError
	iterawln( iterator(), ( x: number ): number => x ); // $ExpectError

	iterawln( iterator(), '5', {} ); // $ExpectError
	iterawln( iterator(), true, {} ); // $ExpectError
	iterawln( iterator(), false, {} ); // $ExpectError
	iterawln( iterator(), null, {} ); // $ExpectError
	iterawln( iterator(), undefined, {} ); // $ExpectError
	iterawln( iterator(), [], {} ); // $ExpectError
	iterawln( iterator(), {}, {} ); // $ExpectError
	iterawln( iterator(), ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	iterawln( iterator(), 1.0, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `seed` option...
{
	iterawln( iterator(), 1.0, { 'seed': '5' } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'seed': true } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'seed': false } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'seed': null } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'seed': {} } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `prng` option...
{
	iterawln( iterator(), 1.0, { 'prng': '5' } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'prng': 5 } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'prng': true } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'prng': false } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'prng': null } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'prng': [] } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'prng': {} } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `state` option...
{
	iterawln( iterator(), 1.0, { 'state': '5' } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': 5 } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': true } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': false } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': null } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': [] } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': {} } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `copy` option...
{
	iterawln( iterator(), 1.0, { 'copy': '5' } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'copy': 5 } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'copy': null } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'copy': [] } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'copy': {} } ); // $ExpectError
	iterawln( iterator(), 1.0, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterawln(); // $ExpectError
	iterawln( iterator() ); // $ExpectError
}

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

import iterawgn = require( './index' );

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
	iterawgn( iterator(), 0.2 ); // $ExpectType ExtendedIterator
	iterawgn( iterator(), 0.2, {} ); // $ExpectType ExtendedIterator
	iterawgn( iterator(), 0.2, { 'seed': 12345 } ); // $ExpectType ExtendedIterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterawgn( '5', 1.0 ); // $ExpectError
	iterawgn( 5, 1.0 ); // $ExpectError
	iterawgn( true, 1.0 ); // $ExpectError
	iterawgn( false, 1.0 ); // $ExpectError
	iterawgn( null, 1.0 ); // $ExpectError
	iterawgn( undefined, 1.0 ); // $ExpectError
	iterawgn( [], 1.0 ); // $ExpectError
	iterawgn( {}, 1.0 ); // $ExpectError
	iterawgn( ( x: number ): number => x, 1.0 ); // $ExpectError

	iterawgn( '5', 1.0, {} ); // $ExpectError
	iterawgn( 5, 1.0, {} ); // $ExpectError
	iterawgn( true, 1.0, {} ); // $ExpectError
	iterawgn( false, 1.0, {} ); // $ExpectError
	iterawgn( null, 1.0, {} ); // $ExpectError
	iterawgn( undefined, 1.0, {} ); // $ExpectError
	iterawgn( [], 1.0, {} ); // $ExpectError
	iterawgn( {}, 1.0, {} ); // $ExpectError
	iterawgn( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterawgn( iterator(), '5' ); // $ExpectError
	iterawgn( iterator(), true ); // $ExpectError
	iterawgn( iterator(), false ); // $ExpectError
	iterawgn( iterator(), null ); // $ExpectError
	iterawgn( iterator(), undefined ); // $ExpectError
	iterawgn( iterator(), [] ); // $ExpectError
	iterawgn( iterator(), {} ); // $ExpectError
	iterawgn( iterator(), ( x: number ): number => x ); // $ExpectError

	iterawgn( iterator(), '5', {} ); // $ExpectError
	iterawgn( iterator(), true, {} ); // $ExpectError
	iterawgn( iterator(), false, {} ); // $ExpectError
	iterawgn( iterator(), null, {} ); // $ExpectError
	iterawgn( iterator(), undefined, {} ); // $ExpectError
	iterawgn( iterator(), [], {} ); // $ExpectError
	iterawgn( iterator(), {}, {} ); // $ExpectError
	iterawgn( iterator(), ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	iterawgn( iterator(), 1.0, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `seed` option...
{
	iterawgn( iterator(), 1.0, { 'seed': '5' } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'seed': true } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'seed': false } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'seed': null } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'seed': {} } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `prng` option...
{
	iterawgn( iterator(), 1.0, { 'prng': '5' } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'prng': 5 } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'prng': true } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'prng': false } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'prng': null } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'prng': [] } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'prng': {} } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `state` option...
{
	iterawgn( iterator(), 1.0, { 'state': '5' } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': 5 } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': true } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': false } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': null } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': [] } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': {} } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `copy` option...
{
	iterawgn( iterator(), 1.0, { 'copy': '5' } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'copy': 5 } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'copy': null } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'copy': [] } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'copy': {} } ); // $ExpectError
	iterawgn( iterator(), 1.0, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterawgn(); // $ExpectError
	iterawgn( iterator() ); // $ExpectError
}

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

import iterawun = require( './index' );

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
	iterawun( iterator(), 0.2 ); // $ExpectType ExtendedIterator
	iterawun( iterator(), 0.2, {} ); // $ExpectType ExtendedIterator
	iterawun( iterator(), 0.2, { 'seed': 12345 } ); // $ExpectType ExtendedIterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterawun( '5', 1.0 ); // $ExpectError
	iterawun( 5, 1.0 ); // $ExpectError
	iterawun( true, 1.0 ); // $ExpectError
	iterawun( false, 1.0 ); // $ExpectError
	iterawun( null, 1.0 ); // $ExpectError
	iterawun( undefined, 1.0 ); // $ExpectError
	iterawun( [], 1.0 ); // $ExpectError
	iterawun( {}, 1.0 ); // $ExpectError
	iterawun( ( x: number ): number => x, 1.0 ); // $ExpectError

	iterawun( '5', 1.0, {} ); // $ExpectError
	iterawun( 5, 1.0, {} ); // $ExpectError
	iterawun( true, 1.0, {} ); // $ExpectError
	iterawun( false, 1.0, {} ); // $ExpectError
	iterawun( null, 1.0, {} ); // $ExpectError
	iterawun( undefined, 1.0, {} ); // $ExpectError
	iterawun( [], 1.0, {} ); // $ExpectError
	iterawun( {}, 1.0, {} ); // $ExpectError
	iterawun( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterawun( iterator(), '5' ); // $ExpectError
	iterawun( iterator(), true ); // $ExpectError
	iterawun( iterator(), false ); // $ExpectError
	iterawun( iterator(), null ); // $ExpectError
	iterawun( iterator(), undefined ); // $ExpectError
	iterawun( iterator(), [] ); // $ExpectError
	iterawun( iterator(), {} ); // $ExpectError
	iterawun( iterator(), ( x: number ): number => x ); // $ExpectError

	iterawun( iterator(), '5', {} ); // $ExpectError
	iterawun( iterator(), true, {} ); // $ExpectError
	iterawun( iterator(), false, {} ); // $ExpectError
	iterawun( iterator(), null, {} ); // $ExpectError
	iterawun( iterator(), undefined, {} ); // $ExpectError
	iterawun( iterator(), [], {} ); // $ExpectError
	iterawun( iterator(), {}, {} ); // $ExpectError
	iterawun( iterator(), ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	iterawun( iterator(), 1.0, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `seed` option...
{
	iterawun( iterator(), 1.0, { 'seed': '5' } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'seed': true } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'seed': false } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'seed': null } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'seed': {} } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'seed': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `prng` option...
{
	iterawun( iterator(), 1.0, { 'prng': '5' } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'prng': 5 } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'prng': true } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'prng': false } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'prng': null } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'prng': [] } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'prng': {} } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `state` option...
{
	iterawun( iterator(), 1.0, { 'state': '5' } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': 5 } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': true } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': false } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': null } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': [] } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': {} } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'state': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `copy` option...
{
	iterawun( iterator(), 1.0, { 'copy': '5' } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'copy': 5 } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'copy': null } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'copy': [] } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'copy': {} } ); // $ExpectError
	iterawun( iterator(), 1.0, { 'copy': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterawun(); // $ExpectError
	iterawun( iterator() ); // $ExpectError
}

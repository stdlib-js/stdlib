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

import iterMultiply = require( './index' );

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
	iterMultiply( iterator(), iterator() ); // $ExpectType Iterator
	iterMultiply( iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterMultiply( iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterMultiply( iterator(), iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterMultiply( iterator(), 4.0 ); // $ExpectType Iterator
	iterMultiply( iterator(), 4.0, iterator() ); // $ExpectType Iterator
	iterMultiply( iterator(), 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterMultiply( iterator(), 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterMultiply( 4.0, iterator() ); // $ExpectType Iterator
	iterMultiply( 4.0, iterator(), iterator() ); // $ExpectType Iterator
	iterMultiply( 4.0, iterator(), iterator(), iterator() ); // $ExpectType Iterator
	iterMultiply( 4.0, iterator(), iterator(), iterator(), iterator() ); // $ExpectType Iterator

	iterMultiply( 4.0, 4.0 ); // $ExpectType Iterator
	iterMultiply( 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterMultiply( 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
	iterMultiply( 4.0, 4.0, 4.0, 4.0, 4.0 ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object or a number...
{
	iterMultiply( '5', iterator() ); // $ExpectError
	iterMultiply( '5', iterator(), iterator() ); // $ExpectError

	iterMultiply( true, iterator() ); // $ExpectError
	iterMultiply( true, iterator(), iterator() ); // $ExpectError

	iterMultiply( false, iterator() ); // $ExpectError
	iterMultiply( false, iterator(), iterator() ); // $ExpectError

	iterMultiply( null, iterator() ); // $ExpectError
	iterMultiply( null, iterator(), iterator() ); // $ExpectError

	iterMultiply( undefined, iterator() ); // $ExpectError
	iterMultiply( undefined, iterator(), iterator() ); // $ExpectError

	iterMultiply( [], iterator() ); // $ExpectError
	iterMultiply( [], iterator(), iterator() ); // $ExpectError

	iterMultiply( {}, iterator() ); // $ExpectError
	iterMultiply( {}, iterator(), iterator() ); // $ExpectError

	iterMultiply( ( x: number ): number => x, iterator() ); // $ExpectError
	iterMultiply( ( x: number ): number => x, iterator(), iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object or a number...
{
	iterMultiply( iterator(), '5' ); // $ExpectError
	iterMultiply( iterator(), '5', iterator() ); // $ExpectError

	iterMultiply( iterator(), true ); // $ExpectError
	iterMultiply( iterator(), true, iterator() ); // $ExpectError

	iterMultiply( iterator(), false ); // $ExpectError
	iterMultiply( iterator(), false, iterator() ); // $ExpectError

	iterMultiply( iterator(), null ); // $ExpectError
	iterMultiply( iterator(), null, iterator() ); // $ExpectError

	iterMultiply( iterator(), undefined ); // $ExpectError
	iterMultiply( iterator(), undefined, iterator() ); // $ExpectError

	iterMultiply( iterator(), [] ); // $ExpectError
	iterMultiply( iterator(), [], iterator() ); // $ExpectError

	iterMultiply( iterator(), {} ); // $ExpectError
	iterMultiply( iterator(), {}, iterator() ); // $ExpectError

	iterMultiply( iterator(), ( x: number ): number => x ); // $ExpectError
	iterMultiply( iterator(), ( x: number ): number => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an iterator protocol-compliant object or a number...
{
	iterMultiply( iterator(), iterator(), '5' ); // $ExpectError
	iterMultiply( iterator(), iterator(), '5', iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), true ); // $ExpectError
	iterMultiply( iterator(), iterator(), true, iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), false ); // $ExpectError
	iterMultiply( iterator(), iterator(), false, iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), null ); // $ExpectError
	iterMultiply( iterator(), iterator(), null, iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), undefined ); // $ExpectError
	iterMultiply( iterator(), iterator(), undefined, iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), [] ); // $ExpectError
	iterMultiply( iterator(), iterator(), [], iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), {} ); // $ExpectError
	iterMultiply( iterator(), iterator(), {}, iterator() ); // $ExpectError

	iterMultiply( iterator(), iterator(), ( x: number ): number => x ); // $ExpectError
	iterMultiply( iterator(), iterator(), ( x: null ): null => x, iterator() ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterMultiply(); // $ExpectError
	iterMultiply( iterator() ); // $ExpectError
	iterMultiply( 4.0 ); // $ExpectError
}

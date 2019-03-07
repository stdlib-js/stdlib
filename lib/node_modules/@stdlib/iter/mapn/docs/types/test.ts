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

import iterMapN = require( './index' );

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
			'value': 1.0,
			'done': false
		};
	}
}

/**
* Mock transform function.
*
* @returns mock value
*/
function transform() {
	return NaN;
}


// TESTS //

// The function returns an iterator...
{
	iterMapN( iterator(), iterator(), transform ); // $ExpectType Iterator
	iterMapN( iterator(), iterator(), iterator(), transform ); // $ExpectType Iterator
	iterMapN( iterator(), iterator(), iterator(), iterator(), transform ); // $ExpectType Iterator
	iterMapN( iterator(), iterator(), iterator(), iterator(), iterator(), transform ); // $ExpectType Iterator

	iterMapN( iterator(), iterator(), transform, {} ); // $ExpectType Iterator
	iterMapN( iterator(), iterator(), iterator(), transform, {} ); // $ExpectType Iterator
	iterMapN( iterator(), iterator(), iterator(), iterator(), transform, {} ); // $ExpectType Iterator
	iterMapN( iterator(), iterator(), iterator(), iterator(), iterator(), transform, {} ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterMapN( '5', iterator(), transform ); // $ExpectError
	iterMapN( '5', iterator(), iterator(), transform ); // $ExpectError

	iterMapN( '5', iterator(), transform, {} ); // $ExpectError
	iterMapN( '5', iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( 5, iterator(), transform ); // $ExpectError
	iterMapN( 5, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( 5, iterator(), transform, {} ); // $ExpectError
	iterMapN( 5, iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( true, iterator(), transform ); // $ExpectError
	iterMapN( true, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( true, iterator(), transform, {} ); // $ExpectError
	iterMapN( true, iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( false, iterator(), transform ); // $ExpectError
	iterMapN( false, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( false, iterator(), transform, {} ); // $ExpectError
	iterMapN( false, iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( null, iterator(), transform ); // $ExpectError
	iterMapN( null, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( null, iterator(), transform, {} ); // $ExpectError
	iterMapN( null, iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( undefined, iterator(), transform ); // $ExpectError
	iterMapN( undefined, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( undefined, iterator(), transform, {} ); // $ExpectError
	iterMapN( undefined, iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( [], iterator(), transform ); // $ExpectError
	iterMapN( [], iterator(), iterator(), transform ); // $ExpectError

	iterMapN( [], iterator(), transform, {} ); // $ExpectError
	iterMapN( [], iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( {}, iterator(), transform ); // $ExpectError
	iterMapN( {}, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( {}, iterator(), transform, {} ); // $ExpectError
	iterMapN( {}, iterator(), iterator(), transform, {} ); // $ExpectError

	iterMapN( ( x: number ): number => x, iterator(), transform ); // $ExpectError
	iterMapN( ( x: number ): number => x, iterator(), iterator(), transform ); // $ExpectError

	iterMapN( ( x: number ): number => x, iterator(), transform, {} ); // $ExpectError
	iterMapN( ( x: number ): number => x, iterator(), iterator(), transform, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an iterator protocol-compliant object...
{
	iterMapN( iterator(), '5', transform ); // $ExpectError
	iterMapN( iterator(), '5', iterator(), transform ); // $ExpectError

	iterMapN( iterator(), '5', transform, {} ); // $ExpectError
	iterMapN( iterator(), '5', iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), 5, transform ); // $ExpectError
	iterMapN( iterator(), 5, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), 5, transform, {} ); // $ExpectError
	iterMapN( iterator(), 5, iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), true, transform ); // $ExpectError
	iterMapN( iterator(), true, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), true, transform, {} ); // $ExpectError
	iterMapN( iterator(), true, iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), false, transform ); // $ExpectError
	iterMapN( iterator(), false, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), false, transform, {} ); // $ExpectError
	iterMapN( iterator(), false, iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), null, transform ); // $ExpectError
	iterMapN( iterator(), null, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), null, transform, {} ); // $ExpectError
	iterMapN( iterator(), null, iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), undefined, transform ); // $ExpectError
	iterMapN( iterator(), undefined, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), undefined, transform, {} ); // $ExpectError
	iterMapN( iterator(), undefined, iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), [], transform ); // $ExpectError
	iterMapN( iterator(), [], iterator(), transform ); // $ExpectError

	iterMapN( iterator(), [], transform, {} ); // $ExpectError
	iterMapN( iterator(), [], iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), {}, transform ); // $ExpectError
	iterMapN( iterator(), {}, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), {}, transform, {} ); // $ExpectError
	iterMapN( iterator(), {}, iterator(), transform, {} ); // $ExpectError

	iterMapN( iterator(), ( x: number ): number => x, transform ); // $ExpectError
	iterMapN( iterator(), ( x: number ): number => x, iterator(), transform ); // $ExpectError

	iterMapN( iterator(), ( x: number ): number => x, transform, {} ); // $ExpectError
	iterMapN( iterator(), ( x: number ): number => x, iterator(), transform, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterMapN(); // $ExpectError
	iterMapN( iterator(), transform ); // $ExpectError
}

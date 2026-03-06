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

import iterSome = require( './index' );

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

// The function returns a boolean...
{
	iterSome( iterator(), 3 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterSome( '5', 3 ); // $ExpectError
	iterSome( 5, 3 ); // $ExpectError
	iterSome( true, 3 ); // $ExpectError
	iterSome( false, 3 ); // $ExpectError
	iterSome( null, 3 ); // $ExpectError
	iterSome( undefined, 3 ); // $ExpectError
	iterSome( [], 3 ); // $ExpectError
	iterSome( {}, 3 ); // $ExpectError
	iterSome( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	iterSome( iterator(), '5' ); // $ExpectError
	iterSome( iterator(), true ); // $ExpectError
	iterSome( iterator(), false ); // $ExpectError
	iterSome( iterator(), null ); // $ExpectError
	iterSome( iterator(), undefined ); // $ExpectError
	iterSome( iterator(), [] ); // $ExpectError
	iterSome( iterator(), {} ); // $ExpectError
	iterSome( iterator(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterSome(); // $ExpectError
	iterSome( iterator() ); // $ExpectError
}

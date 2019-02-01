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

import iterShift = require( './index' );

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

/**
* Callback function.
*
* @param v - iterated value
*/
function clbk( v: any ) {
	if ( v !== v ) {
		throw new Error( 'something went wrong' );
	}
}


// TESTS //

// The function returns an iterator...
{
	iterShift( iterator() ); // $ExpectType Iterator
	iterShift( iterator(), clbk ); // $ExpectType Iterator
	iterShift( iterator(), clbk, {} ); // $ExpectType Iterator
	iterShift( iterator(), clbk, null ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterShift( '5', clbk ); // $ExpectError
	iterShift( 5, clbk ); // $ExpectError
	iterShift( true, clbk ); // $ExpectError
	iterShift( false, clbk ); // $ExpectError
	iterShift( null, clbk ); // $ExpectError
	iterShift( undefined, clbk ); // $ExpectError
	iterShift( [], clbk ); // $ExpectError
	iterShift( {}, clbk ); // $ExpectError
	iterShift( ( x: number ): number => x, clbk ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a callback function...
{
	iterShift( iterator(), '5' ); // $ExpectError
	iterShift( iterator(), 5 ); // $ExpectError
	iterShift( iterator(), true ); // $ExpectError
	iterShift( iterator(), false ); // $ExpectError
	iterShift( iterator(), null ); // $ExpectError
	iterShift( iterator(), [] ); // $ExpectError
	iterShift( iterator(), {} ); // $ExpectError

	iterShift( iterator(), '5', {} ); // $ExpectError
	iterShift( iterator(), 5, {} ); // $ExpectError
	iterShift( iterator(), true, {} ); // $ExpectError
	iterShift( iterator(), false, {} ); // $ExpectError
	iterShift( iterator(), null, {} ); // $ExpectError
	iterShift( iterator(), [], {} ); // $ExpectError
	iterShift( iterator(), {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterShift(); // $ExpectError
}

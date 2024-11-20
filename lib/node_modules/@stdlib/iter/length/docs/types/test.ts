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

import iterLength = require( './index' );

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

// The function returns a number...
{
	iterLength( iterator() ); // $ExpectType number
}

// The compiler throws an error if the function is provided a value other than an iterator protocol-compliant object...
{
	iterLength( '5' ); // $ExpectError
	iterLength( 5 ); // $ExpectError
	iterLength( true ); // $ExpectError
	iterLength( false ); // $ExpectError
	iterLength( null ); // $ExpectError
	iterLength( undefined ); // $ExpectError
	iterLength( [] ); // $ExpectError
	iterLength( {} ); // $ExpectError
	iterLength( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterLength(); // $ExpectError
}

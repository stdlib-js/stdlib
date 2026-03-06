/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import iterSqrt1pm1 = require( './index' );

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
		'value': true,
		'done': false
	};
}


// TESTS //

// The function returns an iterator...
{
	iterSqrt1pm1( iterator() ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an iterator protocol-compliant object...
{
	iterSqrt1pm1( '5' ); // $ExpectError
	iterSqrt1pm1( 5 ); // $ExpectError
	iterSqrt1pm1( true ); // $ExpectError
	iterSqrt1pm1( false ); // $ExpectError
	iterSqrt1pm1( null ); // $ExpectError
	iterSqrt1pm1( undefined ); // $ExpectError
	iterSqrt1pm1( [] ); // $ExpectError
	iterSqrt1pm1( {} ); // $ExpectError
	iterSqrt1pm1( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterSqrt1pm1(); // $ExpectError
}

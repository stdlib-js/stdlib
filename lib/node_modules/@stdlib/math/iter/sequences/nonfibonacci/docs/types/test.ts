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

import iterNonFibonacciSeq = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterNonFibonacciSeq(); // $ExpectType Iterator
	iterNonFibonacciSeq( {} ); // $ExpectType Iterator
	iterNonFibonacciSeq( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterNonFibonacciSeq( null ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterNonFibonacciSeq( { 'iter': '5' } ); // $ExpectError
	iterNonFibonacciSeq( { 'iter': true } ); // $ExpectError
	iterNonFibonacciSeq( { 'iter': false } ); // $ExpectError
	iterNonFibonacciSeq( { 'iter': null } ); // $ExpectError
	iterNonFibonacciSeq( { 'iter': [] } ); // $ExpectError
	iterNonFibonacciSeq( { 'iter': {} } ); // $ExpectError
	iterNonFibonacciSeq( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

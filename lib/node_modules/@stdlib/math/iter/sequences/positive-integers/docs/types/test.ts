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

import iterPositiveIntegersSeq = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterPositiveIntegersSeq(); // $ExpectType Iterator
	iterPositiveIntegersSeq( {} ); // $ExpectType Iterator
	iterPositiveIntegersSeq( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterPositiveIntegersSeq( null ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterPositiveIntegersSeq( { 'iter': '5' } ); // $ExpectError
	iterPositiveIntegersSeq( { 'iter': true } ); // $ExpectError
	iterPositiveIntegersSeq( { 'iter': false } ); // $ExpectError
	iterPositiveIntegersSeq( { 'iter': null } ); // $ExpectError
	iterPositiveIntegersSeq( { 'iter': [] } ); // $ExpectError
	iterPositiveIntegersSeq( { 'iter': {} } ); // $ExpectError
	iterPositiveIntegersSeq( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

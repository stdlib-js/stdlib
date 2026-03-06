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

import iterNegaLucasSeq = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterNegaLucasSeq(); // $ExpectType Iterator
	iterNegaLucasSeq( {} ); // $ExpectType Iterator
	iterNegaLucasSeq( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterNegaLucasSeq( null ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterNegaLucasSeq( { 'iter': '5' } ); // $ExpectError
	iterNegaLucasSeq( { 'iter': true } ); // $ExpectError
	iterNegaLucasSeq( { 'iter': false } ); // $ExpectError
	iterNegaLucasSeq( { 'iter': null } ); // $ExpectError
	iterNegaLucasSeq( { 'iter': [] } ); // $ExpectError
	iterNegaLucasSeq( { 'iter': {} } ); // $ExpectError
	iterNegaLucasSeq( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

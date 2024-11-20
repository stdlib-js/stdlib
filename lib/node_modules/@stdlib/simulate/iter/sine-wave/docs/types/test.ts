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

import iterSineWave = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterSineWave(); // $ExpectType Iterator
	iterSineWave( {} ); // $ExpectType Iterator
	iterSineWave( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterSineWave( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterSineWave( { 'period': '5' } ); // $ExpectError
	iterSineWave( { 'period': true } ); // $ExpectError
	iterSineWave( { 'period': false } ); // $ExpectError
	iterSineWave( { 'period': null } ); // $ExpectError
	iterSineWave( { 'period': [] } ); // $ExpectError
	iterSineWave( { 'period': {} } ); // $ExpectError
	iterSineWave( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterSineWave( { 'amplitude': '5' } ); // $ExpectError
	iterSineWave( { 'amplitude': true } ); // $ExpectError
	iterSineWave( { 'amplitude': false } ); // $ExpectError
	iterSineWave( { 'amplitude': null } ); // $ExpectError
	iterSineWave( { 'amplitude': [] } ); // $ExpectError
	iterSineWave( { 'amplitude': {} } ); // $ExpectError
	iterSineWave( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterSineWave( { 'offset': '5' } ); // $ExpectError
	iterSineWave( { 'offset': true } ); // $ExpectError
	iterSineWave( { 'offset': false } ); // $ExpectError
	iterSineWave( { 'offset': null } ); // $ExpectError
	iterSineWave( { 'offset': [] } ); // $ExpectError
	iterSineWave( { 'offset': {} } ); // $ExpectError
	iterSineWave( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterSineWave( { 'iter': '5' } ); // $ExpectError
	iterSineWave( { 'iter': true } ); // $ExpectError
	iterSineWave( { 'iter': false } ); // $ExpectError
	iterSineWave( { 'iter': null } ); // $ExpectError
	iterSineWave( { 'iter': [] } ); // $ExpectError
	iterSineWave( { 'iter': {} } ); // $ExpectError
	iterSineWave( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

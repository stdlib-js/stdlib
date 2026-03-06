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

import iterSawtoothWave = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterSawtoothWave(); // $ExpectType Iterator
	iterSawtoothWave( {} ); // $ExpectType Iterator
	iterSawtoothWave( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterSawtoothWave( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterSawtoothWave( { 'period': '5' } ); // $ExpectError
	iterSawtoothWave( { 'period': true } ); // $ExpectError
	iterSawtoothWave( { 'period': false } ); // $ExpectError
	iterSawtoothWave( { 'period': null } ); // $ExpectError
	iterSawtoothWave( { 'period': [] } ); // $ExpectError
	iterSawtoothWave( { 'period': {} } ); // $ExpectError
	iterSawtoothWave( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterSawtoothWave( { 'amplitude': '5' } ); // $ExpectError
	iterSawtoothWave( { 'amplitude': true } ); // $ExpectError
	iterSawtoothWave( { 'amplitude': false } ); // $ExpectError
	iterSawtoothWave( { 'amplitude': null } ); // $ExpectError
	iterSawtoothWave( { 'amplitude': [] } ); // $ExpectError
	iterSawtoothWave( { 'amplitude': {} } ); // $ExpectError
	iterSawtoothWave( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterSawtoothWave( { 'offset': '5' } ); // $ExpectError
	iterSawtoothWave( { 'offset': true } ); // $ExpectError
	iterSawtoothWave( { 'offset': false } ); // $ExpectError
	iterSawtoothWave( { 'offset': null } ); // $ExpectError
	iterSawtoothWave( { 'offset': [] } ); // $ExpectError
	iterSawtoothWave( { 'offset': {} } ); // $ExpectError
	iterSawtoothWave( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterSawtoothWave( { 'iter': '5' } ); // $ExpectError
	iterSawtoothWave( { 'iter': true } ); // $ExpectError
	iterSawtoothWave( { 'iter': false } ); // $ExpectError
	iterSawtoothWave( { 'iter': null } ); // $ExpectError
	iterSawtoothWave( { 'iter': [] } ); // $ExpectError
	iterSawtoothWave( { 'iter': {} } ); // $ExpectError
	iterSawtoothWave( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

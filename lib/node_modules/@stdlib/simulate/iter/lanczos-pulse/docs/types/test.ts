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

import iterLanczosPulse = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterLanczosPulse(); // $ExpectType Iterator
	iterLanczosPulse( {} ); // $ExpectType Iterator
	iterLanczosPulse( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterLanczosPulse( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duration` option which is not a number...
{
	iterLanczosPulse( { 'duration': '5' } ); // $ExpectError
	iterLanczosPulse( { 'duration': true } ); // $ExpectError
	iterLanczosPulse( { 'duration': false } ); // $ExpectError
	iterLanczosPulse( { 'duration': null } ); // $ExpectError
	iterLanczosPulse( { 'duration': [] } ); // $ExpectError
	iterLanczosPulse( { 'duration': {} } ); // $ExpectError
	iterLanczosPulse( { 'duration': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterLanczosPulse( { 'period': '5' } ); // $ExpectError
	iterLanczosPulse( { 'period': true } ); // $ExpectError
	iterLanczosPulse( { 'period': false } ); // $ExpectError
	iterLanczosPulse( { 'period': null } ); // $ExpectError
	iterLanczosPulse( { 'period': [] } ); // $ExpectError
	iterLanczosPulse( { 'period': {} } ); // $ExpectError
	iterLanczosPulse( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterLanczosPulse( { 'amplitude': '5' } ); // $ExpectError
	iterLanczosPulse( { 'amplitude': true } ); // $ExpectError
	iterLanczosPulse( { 'amplitude': false } ); // $ExpectError
	iterLanczosPulse( { 'amplitude': null } ); // $ExpectError
	iterLanczosPulse( { 'amplitude': [] } ); // $ExpectError
	iterLanczosPulse( { 'amplitude': {} } ); // $ExpectError
	iterLanczosPulse( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterLanczosPulse( { 'offset': '5' } ); // $ExpectError
	iterLanczosPulse( { 'offset': true } ); // $ExpectError
	iterLanczosPulse( { 'offset': false } ); // $ExpectError
	iterLanczosPulse( { 'offset': null } ); // $ExpectError
	iterLanczosPulse( { 'offset': [] } ); // $ExpectError
	iterLanczosPulse( { 'offset': {} } ); // $ExpectError
	iterLanczosPulse( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterLanczosPulse( { 'iter': '5' } ); // $ExpectError
	iterLanczosPulse( { 'iter': true } ); // $ExpectError
	iterLanczosPulse( { 'iter': false } ); // $ExpectError
	iterLanczosPulse( { 'iter': null } ); // $ExpectError
	iterLanczosPulse( { 'iter': [] } ); // $ExpectError
	iterLanczosPulse( { 'iter': {} } ); // $ExpectError
	iterLanczosPulse( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

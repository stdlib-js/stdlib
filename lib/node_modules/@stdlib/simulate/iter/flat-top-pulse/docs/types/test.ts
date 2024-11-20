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

import iterFlatTopPulse = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterFlatTopPulse(); // $ExpectType Iterator
	iterFlatTopPulse( {} ); // $ExpectType Iterator
	iterFlatTopPulse( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterFlatTopPulse( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duration` option which is not a number...
{
	iterFlatTopPulse( { 'duration': '5' } ); // $ExpectError
	iterFlatTopPulse( { 'duration': true } ); // $ExpectError
	iterFlatTopPulse( { 'duration': false } ); // $ExpectError
	iterFlatTopPulse( { 'duration': null } ); // $ExpectError
	iterFlatTopPulse( { 'duration': [] } ); // $ExpectError
	iterFlatTopPulse( { 'duration': {} } ); // $ExpectError
	iterFlatTopPulse( { 'duration': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterFlatTopPulse( { 'period': '5' } ); // $ExpectError
	iterFlatTopPulse( { 'period': true } ); // $ExpectError
	iterFlatTopPulse( { 'period': false } ); // $ExpectError
	iterFlatTopPulse( { 'period': null } ); // $ExpectError
	iterFlatTopPulse( { 'period': [] } ); // $ExpectError
	iterFlatTopPulse( { 'period': {} } ); // $ExpectError
	iterFlatTopPulse( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterFlatTopPulse( { 'amplitude': '5' } ); // $ExpectError
	iterFlatTopPulse( { 'amplitude': true } ); // $ExpectError
	iterFlatTopPulse( { 'amplitude': false } ); // $ExpectError
	iterFlatTopPulse( { 'amplitude': null } ); // $ExpectError
	iterFlatTopPulse( { 'amplitude': [] } ); // $ExpectError
	iterFlatTopPulse( { 'amplitude': {} } ); // $ExpectError
	iterFlatTopPulse( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterFlatTopPulse( { 'offset': '5' } ); // $ExpectError
	iterFlatTopPulse( { 'offset': true } ); // $ExpectError
	iterFlatTopPulse( { 'offset': false } ); // $ExpectError
	iterFlatTopPulse( { 'offset': null } ); // $ExpectError
	iterFlatTopPulse( { 'offset': [] } ); // $ExpectError
	iterFlatTopPulse( { 'offset': {} } ); // $ExpectError
	iterFlatTopPulse( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterFlatTopPulse( { 'iter': '5' } ); // $ExpectError
	iterFlatTopPulse( { 'iter': true } ); // $ExpectError
	iterFlatTopPulse( { 'iter': false } ); // $ExpectError
	iterFlatTopPulse( { 'iter': null } ); // $ExpectError
	iterFlatTopPulse( { 'iter': [] } ); // $ExpectError
	iterFlatTopPulse( { 'iter': {} } ); // $ExpectError
	iterFlatTopPulse( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

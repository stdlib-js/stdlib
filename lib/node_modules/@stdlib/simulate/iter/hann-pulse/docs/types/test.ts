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

import iterHannPulse = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterHannPulse(); // $ExpectType Iterator
	iterHannPulse( {} ); // $ExpectType Iterator
	iterHannPulse( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterHannPulse( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duration` option which is not a number...
{
	iterHannPulse( { 'duration': '5' } ); // $ExpectError
	iterHannPulse( { 'duration': true } ); // $ExpectError
	iterHannPulse( { 'duration': false } ); // $ExpectError
	iterHannPulse( { 'duration': null } ); // $ExpectError
	iterHannPulse( { 'duration': [] } ); // $ExpectError
	iterHannPulse( { 'duration': {} } ); // $ExpectError
	iterHannPulse( { 'duration': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterHannPulse( { 'period': '5' } ); // $ExpectError
	iterHannPulse( { 'period': true } ); // $ExpectError
	iterHannPulse( { 'period': false } ); // $ExpectError
	iterHannPulse( { 'period': null } ); // $ExpectError
	iterHannPulse( { 'period': [] } ); // $ExpectError
	iterHannPulse( { 'period': {} } ); // $ExpectError
	iterHannPulse( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterHannPulse( { 'amplitude': '5' } ); // $ExpectError
	iterHannPulse( { 'amplitude': true } ); // $ExpectError
	iterHannPulse( { 'amplitude': false } ); // $ExpectError
	iterHannPulse( { 'amplitude': null } ); // $ExpectError
	iterHannPulse( { 'amplitude': [] } ); // $ExpectError
	iterHannPulse( { 'amplitude': {} } ); // $ExpectError
	iterHannPulse( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterHannPulse( { 'offset': '5' } ); // $ExpectError
	iterHannPulse( { 'offset': true } ); // $ExpectError
	iterHannPulse( { 'offset': false } ); // $ExpectError
	iterHannPulse( { 'offset': null } ); // $ExpectError
	iterHannPulse( { 'offset': [] } ); // $ExpectError
	iterHannPulse( { 'offset': {} } ); // $ExpectError
	iterHannPulse( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterHannPulse( { 'iter': '5' } ); // $ExpectError
	iterHannPulse( { 'iter': true } ); // $ExpectError
	iterHannPulse( { 'iter': false } ); // $ExpectError
	iterHannPulse( { 'iter': null } ); // $ExpectError
	iterHannPulse( { 'iter': [] } ); // $ExpectError
	iterHannPulse( { 'iter': {} } ); // $ExpectError
	iterHannPulse( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

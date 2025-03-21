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

import iterBartlettHannPulse = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterBartlettHannPulse(); // $ExpectType Iterator
	iterBartlettHannPulse( {} ); // $ExpectType Iterator
	iterBartlettHannPulse( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterBartlettHannPulse( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duration` option which is not a number...
{
	iterBartlettHannPulse( { 'duration': '5' } ); // $ExpectError
	iterBartlettHannPulse( { 'duration': true } ); // $ExpectError
	iterBartlettHannPulse( { 'duration': false } ); // $ExpectError
	iterBartlettHannPulse( { 'duration': null } ); // $ExpectError
	iterBartlettHannPulse( { 'duration': [] } ); // $ExpectError
	iterBartlettHannPulse( { 'duration': {} } ); // $ExpectError
	iterBartlettHannPulse( { 'duration': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterBartlettHannPulse( { 'period': '5' } ); // $ExpectError
	iterBartlettHannPulse( { 'period': true } ); // $ExpectError
	iterBartlettHannPulse( { 'period': false } ); // $ExpectError
	iterBartlettHannPulse( { 'period': null } ); // $ExpectError
	iterBartlettHannPulse( { 'period': [] } ); // $ExpectError
	iterBartlettHannPulse( { 'period': {} } ); // $ExpectError
	iterBartlettHannPulse( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterBartlettHannPulse( { 'amplitude': '5' } ); // $ExpectError
	iterBartlettHannPulse( { 'amplitude': true } ); // $ExpectError
	iterBartlettHannPulse( { 'amplitude': false } ); // $ExpectError
	iterBartlettHannPulse( { 'amplitude': null } ); // $ExpectError
	iterBartlettHannPulse( { 'amplitude': [] } ); // $ExpectError
	iterBartlettHannPulse( { 'amplitude': {} } ); // $ExpectError
	iterBartlettHannPulse( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterBartlettHannPulse( { 'offset': '5' } ); // $ExpectError
	iterBartlettHannPulse( { 'offset': true } ); // $ExpectError
	iterBartlettHannPulse( { 'offset': false } ); // $ExpectError
	iterBartlettHannPulse( { 'offset': null } ); // $ExpectError
	iterBartlettHannPulse( { 'offset': [] } ); // $ExpectError
	iterBartlettHannPulse( { 'offset': {} } ); // $ExpectError
	iterBartlettHannPulse( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterBartlettHannPulse( { 'iter': '5' } ); // $ExpectError
	iterBartlettHannPulse( { 'iter': true } ); // $ExpectError
	iterBartlettHannPulse( { 'iter': false } ); // $ExpectError
	iterBartlettHannPulse( { 'iter': null } ); // $ExpectError
	iterBartlettHannPulse( { 'iter': [] } ); // $ExpectError
	iterBartlettHannPulse( { 'iter': {} } ); // $ExpectError
	iterBartlettHannPulse( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

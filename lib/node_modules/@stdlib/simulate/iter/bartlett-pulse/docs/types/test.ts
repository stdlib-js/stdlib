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

import iterBartlettPulse = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterBartlettPulse(); // $ExpectType Iterator
	iterBartlettPulse( {} ); // $ExpectType Iterator
	iterBartlettPulse( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterBartlettPulse( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duration` option which is not a number...
{
	iterBartlettPulse( { 'duration': '5' } ); // $ExpectError
	iterBartlettPulse( { 'duration': true } ); // $ExpectError
	iterBartlettPulse( { 'duration': false } ); // $ExpectError
	iterBartlettPulse( { 'duration': null } ); // $ExpectError
	iterBartlettPulse( { 'duration': [] } ); // $ExpectError
	iterBartlettPulse( { 'duration': {} } ); // $ExpectError
	iterBartlettPulse( { 'duration': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterBartlettPulse( { 'period': '5' } ); // $ExpectError
	iterBartlettPulse( { 'period': true } ); // $ExpectError
	iterBartlettPulse( { 'period': false } ); // $ExpectError
	iterBartlettPulse( { 'period': null } ); // $ExpectError
	iterBartlettPulse( { 'period': [] } ); // $ExpectError
	iterBartlettPulse( { 'period': {} } ); // $ExpectError
	iterBartlettPulse( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterBartlettPulse( { 'amplitude': '5' } ); // $ExpectError
	iterBartlettPulse( { 'amplitude': true } ); // $ExpectError
	iterBartlettPulse( { 'amplitude': false } ); // $ExpectError
	iterBartlettPulse( { 'amplitude': null } ); // $ExpectError
	iterBartlettPulse( { 'amplitude': [] } ); // $ExpectError
	iterBartlettPulse( { 'amplitude': {} } ); // $ExpectError
	iterBartlettPulse( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterBartlettPulse( { 'offset': '5' } ); // $ExpectError
	iterBartlettPulse( { 'offset': true } ); // $ExpectError
	iterBartlettPulse( { 'offset': false } ); // $ExpectError
	iterBartlettPulse( { 'offset': null } ); // $ExpectError
	iterBartlettPulse( { 'offset': [] } ); // $ExpectError
	iterBartlettPulse( { 'offset': {} } ); // $ExpectError
	iterBartlettPulse( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterBartlettPulse( { 'iter': '5' } ); // $ExpectError
	iterBartlettPulse( { 'iter': true } ); // $ExpectError
	iterBartlettPulse( { 'iter': false } ); // $ExpectError
	iterBartlettPulse( { 'iter': null } ); // $ExpectError
	iterBartlettPulse( { 'iter': [] } ); // $ExpectError
	iterBartlettPulse( { 'iter': {} } ); // $ExpectError
	iterBartlettPulse( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

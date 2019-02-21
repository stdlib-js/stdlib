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

import iterPulse = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterPulse(); // $ExpectType Iterator
	iterPulse( {} ); // $ExpectType Iterator
	iterPulse( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterPulse( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `duration` option which is not a number...
{
	iterPulse( { 'duration': '5' } ); // $ExpectError
	iterPulse( { 'duration': true } ); // $ExpectError
	iterPulse( { 'duration': false } ); // $ExpectError
	iterPulse( { 'duration': null } ); // $ExpectError
	iterPulse( { 'duration': [] } ); // $ExpectError
	iterPulse( { 'duration': {} } ); // $ExpectError
	iterPulse( { 'duration': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterPulse( { 'period': '5' } ); // $ExpectError
	iterPulse( { 'period': true } ); // $ExpectError
	iterPulse( { 'period': false } ); // $ExpectError
	iterPulse( { 'period': null } ); // $ExpectError
	iterPulse( { 'period': [] } ); // $ExpectError
	iterPulse( { 'period': {} } ); // $ExpectError
	iterPulse( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `min` option which is not a number...
{
	iterPulse( { 'min': '5' } ); // $ExpectError
	iterPulse( { 'min': true } ); // $ExpectError
	iterPulse( { 'min': false } ); // $ExpectError
	iterPulse( { 'min': null } ); // $ExpectError
	iterPulse( { 'min': [] } ); // $ExpectError
	iterPulse( { 'min': {} } ); // $ExpectError
	iterPulse( { 'min': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `max` option which is not a number...
{
	iterPulse( { 'max': '5' } ); // $ExpectError
	iterPulse( { 'max': true } ); // $ExpectError
	iterPulse( { 'max': false } ); // $ExpectError
	iterPulse( { 'max': null } ); // $ExpectError
	iterPulse( { 'max': [] } ); // $ExpectError
	iterPulse( { 'max': {} } ); // $ExpectError
	iterPulse( { 'max': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterPulse( { 'offset': '5' } ); // $ExpectError
	iterPulse( { 'offset': true } ); // $ExpectError
	iterPulse( { 'offset': false } ); // $ExpectError
	iterPulse( { 'offset': null } ); // $ExpectError
	iterPulse( { 'offset': [] } ); // $ExpectError
	iterPulse( { 'offset': {} } ); // $ExpectError
	iterPulse( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterPulse( { 'iter': '5' } ); // $ExpectError
	iterPulse( { 'iter': true } ); // $ExpectError
	iterPulse( { 'iter': false } ); // $ExpectError
	iterPulse( { 'iter': null } ); // $ExpectError
	iterPulse( { 'iter': [] } ); // $ExpectError
	iterPulse( { 'iter': {} } ); // $ExpectError
	iterPulse( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

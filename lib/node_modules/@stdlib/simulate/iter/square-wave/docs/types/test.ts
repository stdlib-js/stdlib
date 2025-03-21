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

import iterSquareWave = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterSquareWave(); // $ExpectType Iterator
	iterSquareWave( {} ); // $ExpectType Iterator
	iterSquareWave( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterSquareWave( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterSquareWave( { 'period': '5' } ); // $ExpectError
	iterSquareWave( { 'period': true } ); // $ExpectError
	iterSquareWave( { 'period': false } ); // $ExpectError
	iterSquareWave( { 'period': null } ); // $ExpectError
	iterSquareWave( { 'period': [] } ); // $ExpectError
	iterSquareWave( { 'period': {} } ); // $ExpectError
	iterSquareWave( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `min` option which is not a number...
{
	iterSquareWave( { 'min': '5' } ); // $ExpectError
	iterSquareWave( { 'min': true } ); // $ExpectError
	iterSquareWave( { 'min': false } ); // $ExpectError
	iterSquareWave( { 'min': null } ); // $ExpectError
	iterSquareWave( { 'min': [] } ); // $ExpectError
	iterSquareWave( { 'min': {} } ); // $ExpectError
	iterSquareWave( { 'min': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `max` option which is not a number...
{
	iterSquareWave( { 'max': '5' } ); // $ExpectError
	iterSquareWave( { 'max': true } ); // $ExpectError
	iterSquareWave( { 'max': false } ); // $ExpectError
	iterSquareWave( { 'max': null } ); // $ExpectError
	iterSquareWave( { 'max': [] } ); // $ExpectError
	iterSquareWave( { 'max': {} } ); // $ExpectError
	iterSquareWave( { 'max': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterSquareWave( { 'offset': '5' } ); // $ExpectError
	iterSquareWave( { 'offset': true } ); // $ExpectError
	iterSquareWave( { 'offset': false } ); // $ExpectError
	iterSquareWave( { 'offset': null } ); // $ExpectError
	iterSquareWave( { 'offset': [] } ); // $ExpectError
	iterSquareWave( { 'offset': {} } ); // $ExpectError
	iterSquareWave( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterSquareWave( { 'iter': '5' } ); // $ExpectError
	iterSquareWave( { 'iter': true } ); // $ExpectError
	iterSquareWave( { 'iter': false } ); // $ExpectError
	iterSquareWave( { 'iter': null } ); // $ExpectError
	iterSquareWave( { 'iter': [] } ); // $ExpectError
	iterSquareWave( { 'iter': {} } ); // $ExpectError
	iterSquareWave( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

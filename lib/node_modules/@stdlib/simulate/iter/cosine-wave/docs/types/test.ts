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

import iterCosineWave = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterCosineWave(); // $ExpectType Iterator
	iterCosineWave( {} ); // $ExpectType Iterator
	iterCosineWave( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterCosineWave( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterCosineWave( { 'period': '5' } ); // $ExpectError
	iterCosineWave( { 'period': true } ); // $ExpectError
	iterCosineWave( { 'period': false } ); // $ExpectError
	iterCosineWave( { 'period': null } ); // $ExpectError
	iterCosineWave( { 'period': [] } ); // $ExpectError
	iterCosineWave( { 'period': {} } ); // $ExpectError
	iterCosineWave( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterCosineWave( { 'amplitude': '5' } ); // $ExpectError
	iterCosineWave( { 'amplitude': true } ); // $ExpectError
	iterCosineWave( { 'amplitude': false } ); // $ExpectError
	iterCosineWave( { 'amplitude': null } ); // $ExpectError
	iterCosineWave( { 'amplitude': [] } ); // $ExpectError
	iterCosineWave( { 'amplitude': {} } ); // $ExpectError
	iterCosineWave( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterCosineWave( { 'offset': '5' } ); // $ExpectError
	iterCosineWave( { 'offset': true } ); // $ExpectError
	iterCosineWave( { 'offset': false } ); // $ExpectError
	iterCosineWave( { 'offset': null } ); // $ExpectError
	iterCosineWave( { 'offset': [] } ); // $ExpectError
	iterCosineWave( { 'offset': {} } ); // $ExpectError
	iterCosineWave( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterCosineWave( { 'iter': '5' } ); // $ExpectError
	iterCosineWave( { 'iter': true } ); // $ExpectError
	iterCosineWave( { 'iter': false } ); // $ExpectError
	iterCosineWave( { 'iter': null } ); // $ExpectError
	iterCosineWave( { 'iter': [] } ); // $ExpectError
	iterCosineWave( { 'iter': {} } ); // $ExpectError
	iterCosineWave( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

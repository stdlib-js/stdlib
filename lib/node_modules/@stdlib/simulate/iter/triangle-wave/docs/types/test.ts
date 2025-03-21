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

import iterTriangleWave = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterTriangleWave(); // $ExpectType Iterator
	iterTriangleWave( {} ); // $ExpectType Iterator
	iterTriangleWave( { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an options object...
{
	iterTriangleWave( null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterTriangleWave( { 'period': '5' } ); // $ExpectError
	iterTriangleWave( { 'period': true } ); // $ExpectError
	iterTriangleWave( { 'period': false } ); // $ExpectError
	iterTriangleWave( { 'period': null } ); // $ExpectError
	iterTriangleWave( { 'period': [] } ); // $ExpectError
	iterTriangleWave( { 'period': {} } ); // $ExpectError
	iterTriangleWave( { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterTriangleWave( { 'amplitude': '5' } ); // $ExpectError
	iterTriangleWave( { 'amplitude': true } ); // $ExpectError
	iterTriangleWave( { 'amplitude': false } ); // $ExpectError
	iterTriangleWave( { 'amplitude': null } ); // $ExpectError
	iterTriangleWave( { 'amplitude': [] } ); // $ExpectError
	iterTriangleWave( { 'amplitude': {} } ); // $ExpectError
	iterTriangleWave( { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterTriangleWave( { 'offset': '5' } ); // $ExpectError
	iterTriangleWave( { 'offset': true } ); // $ExpectError
	iterTriangleWave( { 'offset': false } ); // $ExpectError
	iterTriangleWave( { 'offset': null } ); // $ExpectError
	iterTriangleWave( { 'offset': [] } ); // $ExpectError
	iterTriangleWave( { 'offset': {} } ); // $ExpectError
	iterTriangleWave( { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterTriangleWave( { 'iter': '5' } ); // $ExpectError
	iterTriangleWave( { 'iter': true } ); // $ExpectError
	iterTriangleWave( { 'iter': false } ); // $ExpectError
	iterTriangleWave( { 'iter': null } ); // $ExpectError
	iterTriangleWave( { 'iter': [] } ); // $ExpectError
	iterTriangleWave( { 'iter': {} } ); // $ExpectError
	iterTriangleWave( { 'iter': ( x: number ): number => x } ); // $ExpectError
}

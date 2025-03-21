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

import iterPeriodicSinc = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterPeriodicSinc( 7 ); // $ExpectType Iterator
	iterPeriodicSinc( 8, {} ); // $ExpectType Iterator
	iterPeriodicSinc( 9, { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not an number...
{
	iterPeriodicSinc( '5' ); // $ExpectError
	iterPeriodicSinc( true ); // $ExpectError
	iterPeriodicSinc( false ); // $ExpectError
	iterPeriodicSinc( null ); // $ExpectError
	iterPeriodicSinc( [] ); // $ExpectError
	iterPeriodicSinc( {} ); // $ExpectError
	iterPeriodicSinc( ( x: number ): number => x ); // $ExpectError

	iterPeriodicSinc( '5', {} ); // $ExpectError
	iterPeriodicSinc( true, {} ); // $ExpectError
	iterPeriodicSinc( false, {} ); // $ExpectError
	iterPeriodicSinc( null, {} ); // $ExpectError
	iterPeriodicSinc( [], {} ); // $ExpectError
	iterPeriodicSinc( {}, {} ); // $ExpectError
	iterPeriodicSinc( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	iterPeriodicSinc( 7, null ); // $ExpectError
}

// The compiler throws an error if the function is provided a `period` option which is not a number...
{
	iterPeriodicSinc( 7, { 'period': '5' } ); // $ExpectError
	iterPeriodicSinc( 7, { 'period': true } ); // $ExpectError
	iterPeriodicSinc( 7, { 'period': false } ); // $ExpectError
	iterPeriodicSinc( 7, { 'period': null } ); // $ExpectError
	iterPeriodicSinc( 7, { 'period': [] } ); // $ExpectError
	iterPeriodicSinc( 7, { 'period': {} } ); // $ExpectError
	iterPeriodicSinc( 7, { 'period': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `amplitude` option which is not a number...
{
	iterPeriodicSinc( 7, { 'amplitude': '5' } ); // $ExpectError
	iterPeriodicSinc( 7, { 'amplitude': true } ); // $ExpectError
	iterPeriodicSinc( 7, { 'amplitude': false } ); // $ExpectError
	iterPeriodicSinc( 7, { 'amplitude': null } ); // $ExpectError
	iterPeriodicSinc( 7, { 'amplitude': [] } ); // $ExpectError
	iterPeriodicSinc( 7, { 'amplitude': {} } ); // $ExpectError
	iterPeriodicSinc( 7, { 'amplitude': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `offset` option which is not a number...
{
	iterPeriodicSinc( 7, { 'offset': '5' } ); // $ExpectError
	iterPeriodicSinc( 7, { 'offset': true } ); // $ExpectError
	iterPeriodicSinc( 7, { 'offset': false } ); // $ExpectError
	iterPeriodicSinc( 7, { 'offset': null } ); // $ExpectError
	iterPeriodicSinc( 7, { 'offset': [] } ); // $ExpectError
	iterPeriodicSinc( 7, { 'offset': {} } ); // $ExpectError
	iterPeriodicSinc( 7, { 'offset': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterPeriodicSinc( 7, { 'iter': '5' } ); // $ExpectError
	iterPeriodicSinc( 7, { 'iter': true } ); // $ExpectError
	iterPeriodicSinc( 7, { 'iter': false } ); // $ExpectError
	iterPeriodicSinc( 7, { 'iter': null } ); // $ExpectError
	iterPeriodicSinc( 7, { 'iter': [] } ); // $ExpectError
	iterPeriodicSinc( 7, { 'iter': {} } ); // $ExpectError
	iterPeriodicSinc( 7, { 'iter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterPeriodicSinc(); // $ExpectError
}

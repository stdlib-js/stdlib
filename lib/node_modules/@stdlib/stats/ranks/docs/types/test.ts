/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import ranks = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	ranks( [ 1.1, 2.0, 3.5, 0.0, 2.4 ] ); // $ExpectType number[]
	ranks( [ 1.1, 2.0, 3.5, 0.0, 2.4 ], { 'encoding': [ NaN ] } ); // $ExpectType number[]
	ranks( [ 1.1, 2.0, 3.5, 0.0, 2.4 ], { 'missing': 'first' } ); // $ExpectType number[]
	ranks( [ 1.1, 2.0, 3.5, 0.0, 2.4 ], { 'method': 'min' } ); // $ExpectType number[]
}

// The function does not compile if provided a value other than a collection...
{
	ranks( true ); // $ExpectError
	ranks( false ); // $ExpectError
	ranks( null ); // $ExpectError
	ranks( undefined ); // $ExpectError
	ranks( 5 ); // $ExpectError
	ranks( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	const arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ] ;
	ranks( arr, true ); // $ExpectError
	ranks( arr, false ); // $ExpectError
	ranks( arr, null ); // $ExpectError
	ranks( arr, 5 ); // $ExpectError
	ranks( arr, 'abc' ); // $ExpectError
	ranks( arr, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `method` option which is not a recognized method...
{
	const arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ] ;
	ranks( arr, { 'method': 'abc' } ); // $ExpectError
	ranks( arr, { 'method': '123' } ); // $ExpectError
	ranks( arr, { 'method': true } ); // $ExpectError
	ranks( arr, { 'method': false } ); // $ExpectError
	ranks( arr, { 'method': null } ); // $ExpectError
	ranks( arr, { 'method': [] } ); // $ExpectError
	ranks( arr, { 'method': {} } ); // $ExpectError
	ranks( arr, { 'method': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `missing` option which is not a recognized missing value directive...
{
	const arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ] ;
	ranks( arr, { 'missing': 'abc' } ); // $ExpectError
	ranks( arr, { 'missing': '123' } ); // $ExpectError
	ranks( arr, { 'missing': true } ); // $ExpectError
	ranks( arr, { 'missing': false } ); // $ExpectError
	ranks( arr, { 'missing': null } ); // $ExpectError
	ranks( arr, { 'missing': [] } ); // $ExpectError
	ranks( arr, { 'missing': {} } ); // $ExpectError
	ranks( arr, { 'missing': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an `encoding` option which is not an array...
{
	const arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ] ;
	ranks( arr, { 'encoding': 'abc' } ); // $ExpectError
	ranks( arr, { 'encoding': '123' } ); // $ExpectError
	ranks( arr, { 'encoding': true } ); // $ExpectError
	ranks( arr, { 'encoding': false } ); // $ExpectError
	ranks( arr, { 'encoding': null } ); // $ExpectError
	ranks( arr, { 'encoding': {} } ); // $ExpectError
	ranks( arr, { 'encoding': ( x: number ): number => x } ); // $ExpectError
}

// The function does not compile if provided an invalid number of arguments...
{
	const arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ] ;
	ranks(); // $ExpectError
	ranks( arr, {}, {} ); // $ExpectError
}

/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import iterContinuedFractionSeq = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterContinuedFractionSeq( 3.14 ); // $ExpectType Iterator
	iterContinuedFractionSeq( 3.14, {} ); // $ExpectType Iterator
	iterContinuedFractionSeq( 3.14, { 'iter': 10 } ); // $ExpectType Iterator
	iterContinuedFractionSeq( 3.14, { 'tol': 1.0e-10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	iterContinuedFractionSeq( '5' ); // $ExpectError
	iterContinuedFractionSeq( true ); // $ExpectError
	iterContinuedFractionSeq( false ); // $ExpectError
	iterContinuedFractionSeq( null ); // $ExpectError
	iterContinuedFractionSeq( [] ); // $ExpectError
	iterContinuedFractionSeq( {} ); // $ExpectError
	iterContinuedFractionSeq( ( x: number ): number => x ); // $ExpectError

	iterContinuedFractionSeq( '5', {} ); // $ExpectError
	iterContinuedFractionSeq( true, {} ); // $ExpectError
	iterContinuedFractionSeq( false, {} ); // $ExpectError
	iterContinuedFractionSeq( null, {} ); // $ExpectError
	iterContinuedFractionSeq( [], {} ); // $ExpectError
	iterContinuedFractionSeq( {}, {} ); // $ExpectError
	iterContinuedFractionSeq( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an options object...
{
	iterContinuedFractionSeq( 3.14, '5' ); // $ExpectError
	iterContinuedFractionSeq( 3.14, 5 ); // $ExpectError
	iterContinuedFractionSeq( 3.14, true ); // $ExpectError
	iterContinuedFractionSeq( 3.14, false ); // $ExpectError
	iterContinuedFractionSeq( 3.14, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterContinuedFractionSeq( 3.14, { 'iter': '5' } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'iter': true } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'iter': false } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'iter': null } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'iter': [] } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'iter': {} } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'iter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `tol` option which is not a number...
{
	iterContinuedFractionSeq( 3.14, { 'tol': '5' } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'tol': true } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'tol': false } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'tol': null } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'tol': [] } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'tol': {} } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'tol': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `returns` option which is not a supported value...
{
	iterContinuedFractionSeq( 3.14, { 'returns': '5' } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': 5 } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': true } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': false } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': null } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': [] } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': {} } ); // $ExpectError
	iterContinuedFractionSeq( 3.14, { 'returns': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	iterContinuedFractionSeq(); // $ExpectError
	iterContinuedFractionSeq( 3.14, {}, {} ); // $ExpectError
}

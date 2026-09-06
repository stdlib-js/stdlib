/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray/zeros' );
import logspace = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	logspace( [ 4 ], 10.0, 0.0, 3.0 ); // $ExpectType RealOutputArray
	logspace( [ 4 ], 10.0, 0.0, 3.0, true ); // $ExpectType RealOutputArray
	logspace( [ 4 ], 10.0, 0.0, 3.0, {} ); // $ExpectType RealOutputArray
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, {} ); // $ExpectType RealOutputArray
}

// The compiler throws an error if the function is provided a first argument which is not a number or an array of numbers...
{
	logspace( '5', 10.0, 0.0, 3.0 ); // $ExpectError
	logspace( true, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace( false, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace( null, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace( void 0, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace( {}, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace( ( x: number ): number => x, 10.0, 0.0, 3.0 ); // $ExpectError

	logspace( '5', 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace( true, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace( false, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace( null, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace( void 0, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace( {}, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace( ( x: number ): number => x, 10.0, 0.0, 3.0, true ); // $ExpectError

	logspace( '5', 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace( true, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace( false, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace( null, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace( void 0, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace( {}, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace( ( x: number ): number => x, 10.0, 0.0, 3.0, {} ); // $ExpectError

	logspace( '5', 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( true, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( false, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( null, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( void 0, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( {}, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( ( x: number ): number => x, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray or supported scalar value...
{
	logspace( [ 4 ], 'foo', 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], true, 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], false, 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], null, 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], void 0, 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], [], 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], {}, 0.0, 3.0 ); // $ExpectError
	logspace( [ 4 ], ( x: number ): number => x, 0.0, 3.0 ); // $ExpectError

	logspace( [ 4 ], 'foo', 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], true, 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], false, 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], null, 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], void 0, 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], [], 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], {}, 0.0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], ( x: number ): number => x, 0.0, 3.0, true ); // $ExpectError

	logspace( [ 4 ], 'foo', 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], true, 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], false, 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], null, 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], void 0, 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], [], 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], {}, 0.0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], ( x: number ): number => x, 0.0, 3.0, {} ); // $ExpectError

	logspace( [ 4 ], 'foo', 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], true, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], false, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], null, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], void 0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], [], 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], {}, 0.0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], ( x: number ): number => x, 0.0, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an ndarray or supported scalar value...
{
	logspace( [ 4 ], 10.0, 'foo', 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, true, 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, false, 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, null, 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, void 0, 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, [], 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, {}, 3.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, ( x: number ): number => x, 3.0 ); // $ExpectError

	logspace( [ 4 ], 10.0, 'foo', 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, true, 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, false, 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, null, 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, void 0, 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, [], 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, {}, 3.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, ( x: number ): number => x, 3.0, true ); // $ExpectError

	logspace( [ 4 ], 10.0, 'foo', 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, true, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, false, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, null, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, void 0, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, [], 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, {}, 3.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, ( x: number ): number => x, 3.0, {} ); // $ExpectError

	logspace( [ 4 ], 10.0, 'foo', 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, true, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, false, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, null, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, void 0, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, [], 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, {}, 3.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, ( x: number ): number => x, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an ndarray or supported scalar value...
{
	logspace( [ 4 ], 10.0, 0.0, 'foo' ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, false ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, null ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, void 0 ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, [] ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, ( x: number ): number => x ); // $ExpectError

	logspace( [ 4 ], 10.0, 0.0, 'foo', true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, true, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, false, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, null, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, void 0, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, [], true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, {}, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, ( x: number ): number => x, true ); // $ExpectError

	logspace( [ 4 ], 10.0, 0.0, 'foo', {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, false, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, null, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, void 0, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, [], {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, {}, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, ( x: number ): number => x, {} ); // $ExpectError

	logspace( [ 4 ], 10.0, 0.0, 'foo', true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, true, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, false, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, null, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, void 0, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, [], true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, {}, true, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, ( x: number ): number => x, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not an ndarray, boolean, or options object...
{
	logspace( [ 4 ], 10.0, 0.0, 3.0, 'foo' ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, null ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, [] ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, ( x: number ): number => x ); // $ExpectError

	logspace( [ 4 ], 10.0, 0.0, 3.0, 'foo', {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, null, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, [], {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, {}, {} ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a options argument which is not an object...
{
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, '5' ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, 5 ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, true ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, false ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, null ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, [] ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': '5' } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': 5 } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': true } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': false } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': null } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': [] } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': {} } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': '5' } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': 5 } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': true } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': false } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': null } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': [] } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': {} } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': '5' } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': 5 } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': true } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': false } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': null } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': {} } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, { 'dims': ( x: number ): number => x } ); // $ExpectError

	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': '5' } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': 5 } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': true } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': false } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': null } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': {} } ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	logspace(); // $ExpectError
	logspace( [ 4 ] ); // $ExpectError
	logspace( [ 4 ], 10.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0 ); // $ExpectError
	logspace( [ 4 ], 10.0, 0.0, 3.0, true, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, 10.0, 0.0, 3.0 ); // $ExpectType float64ndarray
	logspace.assign( x, 10.0, 0.0, 3.0, true ); // $ExpectType float64ndarray
	logspace.assign( x, 10.0, 0.0, 3.0, {} ); // $ExpectType float64ndarray
	logspace.assign( x, 10.0, 0.0, 3.0, true, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	logspace.assign( '5', 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( 5, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( true, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( false, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( null, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( void 0, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( {}, 10.0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( ( x: number ): number => x, 10.0, 0.0, 3.0 ); // $ExpectError

	logspace.assign( '5', 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( 5, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( true, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( false, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( null, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( void 0, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( {}, 10.0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( ( x: number ): number => x, 10.0, 0.0, 3.0, true ); // $ExpectError

	logspace.assign( '5', 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( 5, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( true, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( false, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( null, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( void 0, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( {}, 10.0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( ( x: number ): number => x, 10.0, 0.0, 3.0, {} ); // $ExpectError

	logspace.assign( '5', 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( 5, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( true, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( false, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( null, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( void 0, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( {}, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( ( x: number ): number => x, 10.0, 0.0, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray or supported scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, '5', 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, true, 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, false, 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, null, 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, void 0, 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, [], 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, {}, 0.0, 3.0 ); // $ExpectError
	logspace.assign( x, ( x: number ): number => x, 0.0, 3.0 ); // $ExpectError

	logspace.assign( x, '5', 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, true, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, false, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, null, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, void 0, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, [], 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, {}, 0.0, 3.0, true ); // $ExpectError
	logspace.assign( x, ( x: number ): number => x, 0.0, 3.0, true ); // $ExpectError

	logspace.assign( x, '5', 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, true, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, false, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, null, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, void 0, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, [], 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, {}, 0.0, 3.0, {} ); // $ExpectError
	logspace.assign( x, ( x: number ): number => x, 0.0, 3.0, {} ); // $ExpectError

	logspace.assign( x, '5', 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, true, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, false, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, null, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, void 0, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, [], 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, {}, 0.0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, ( x: number ): number => x, 0.0, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray or supported scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, 10.0, '5', 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, true, 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, false, 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, null, 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, void 0, 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, [], 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, {}, 3.0 ); // $ExpectError
	logspace.assign( x, 10.0, ( x: number ): number => x, 3.0 ); // $ExpectError

	logspace.assign( x, 10.0, '5', 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, true, 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, false, 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, null, 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, void 0, 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, [], 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, {}, 3.0, true ); // $ExpectError
	logspace.assign( x, 10.0, ( x: number ): number => x, 3.0, true ); // $ExpectError

	logspace.assign( x, 10.0, '5', 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, true, 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, false, 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, null, 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, void 0, 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, [], 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, {}, 3.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, ( x: number ): number => x, 3.0, {} ); // $ExpectError

	logspace.assign( x, 10.0, '5', 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, true, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, false, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, null, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, void 0, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, [], 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, {}, 3.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, ( x: number ): number => x, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an ndarray or supported scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, 10.0, 0.0, '5' ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, false ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, null ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, void 0 ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, [] ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, ( x: number ): number => x ); // $ExpectError

	logspace.assign( x, 10.0, 0.0, '5', true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, true, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, false, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, null, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, void 0, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, [], true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, {}, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, ( x: number ): number => x, true ); // $ExpectError

	logspace.assign( x, 10.0, 0.0, '5', {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, false, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, null, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, void 0, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, [], {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, {}, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, ( x: number ): number => x, {} ); // $ExpectError

	logspace.assign( x, 10.0, 0.0, '5', true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, true, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, false, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, null, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, void 0, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, [], true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, {}, true, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, ( x: number ): number => x, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not an ndarray, boolean, or options object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, 10.0, 0.0, 3.0, 'foo' ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, null ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, [] ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, ( x: number ): number => x ); // $ExpectError

	logspace.assign( x, 10.0, 0.0, 3.0, 'foo', {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, null, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, [], {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, {}, {} ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, 10.0, 0.0, 3.0, true, '5' ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, true ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, false ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, null ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, [] ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': '5' } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': 5 } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': true } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': false } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': null } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': {} } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, { 'dims': ( x: number ): number => x } ); // $ExpectError

	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': '5' } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': 5 } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': true } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': false } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': null } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': {} } ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	logspace.assign(); // $ExpectError
	logspace.assign( x ); // $ExpectError
	logspace.assign( x, 10.0 ); // $ExpectError
	logspace.assign( x, 10.0, 0.0 ); // $ExpectError
	logspace.assign( x, 10.0, 0.0, 3.0, true, {}, {} ); // $ExpectError
}

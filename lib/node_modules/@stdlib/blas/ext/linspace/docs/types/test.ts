/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
import linspace = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	linspace( [ 4 ], 1.0, 3.0 ); // $ExpectType RealOutputArray
	linspace( [ 4 ], 1.0, 3.0, true ); // $ExpectType RealOutputArray
	linspace( [ 4 ], 1.0, 3.0, {} ); // $ExpectType RealOutputArray
	linspace( [ 4 ], 1.0, 3.0, true, {} ); // $ExpectType RealOutputArray
}

// The compiler throws an error if the function is provided a first argument which is not a number or an array of numbers...
{
	linspace( '5', 1.0, 3.0 ); // $ExpectError
	linspace( true, 1.0, 3.0 ); // $ExpectError
	linspace( false, 1.0, 3.0 ); // $ExpectError
	linspace( null, 1.0, 3.0 ); // $ExpectError
	linspace( void 0, 1.0, 3.0 ); // $ExpectError
	linspace( {}, 1.0, 3.0 ); // $ExpectError
	linspace( ( x: number ): number => x, 1.0, 3.0 ); // $ExpectError

	linspace( '5', 1.0, 3.0, true ); // $ExpectError
	linspace( true, 1.0, 3.0, true ); // $ExpectError
	linspace( false, 1.0, 3.0, true ); // $ExpectError
	linspace( null, 1.0, 3.0, true ); // $ExpectError
	linspace( void 0, 1.0, 3.0, true ); // $ExpectError
	linspace( {}, 1.0, 3.0, true ); // $ExpectError
	linspace( ( x: number ): number => x, 1.0, 3.0, true ); // $ExpectError

	linspace( '5', 1.0, 3.0, {} ); // $ExpectError
	linspace( true, 1.0, 3.0, {} ); // $ExpectError
	linspace( false, 1.0, 3.0, {} ); // $ExpectError
	linspace( null, 1.0, 3.0, {} ); // $ExpectError
	linspace( void 0, 1.0, 3.0, {} ); // $ExpectError
	linspace( {}, 1.0, 3.0, {} ); // $ExpectError
	linspace( ( x: number ): number => x, 1.0, 3.0, {} ); // $ExpectError

	linspace( '5', 1.0, 3.0, true, {} ); // $ExpectError
	linspace( true, 1.0, 3.0, true, {} ); // $ExpectError
	linspace( false, 1.0, 3.0, true, {} ); // $ExpectError
	linspace( null, 1.0, 3.0, true, {} ); // $ExpectError
	linspace( void 0, 1.0, 3.0, true, {} ); // $ExpectError
	linspace( {}, 1.0, 3.0, true, {} ); // $ExpectError
	linspace( ( x: number ): number => x, 1.0, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray or supported scalar value...
{
	linspace( [ 4 ], 'foo', 3.0 ); // $ExpectError
	linspace( [ 4 ], true, 3.0 ); // $ExpectError
	linspace( [ 4 ], false, 3.0 ); // $ExpectError
	linspace( [ 4 ], null, 3.0 ); // $ExpectError
	linspace( [ 4 ], void 0, 3.0 ); // $ExpectError
	linspace( [ 4 ], [], 3.0 ); // $ExpectError
	linspace( [ 4 ], {}, 3.0 ); // $ExpectError
	linspace( [ 4 ], ( x: number ): number => x, 3.0 ); // $ExpectError

	linspace( [ 4 ], 'foo', 3.0, true ); // $ExpectError
	linspace( [ 4 ], true, 3.0, true ); // $ExpectError
	linspace( [ 4 ], false, 3.0, true ); // $ExpectError
	linspace( [ 4 ], null, 3.0, true ); // $ExpectError
	linspace( [ 4 ], void 0, 3.0, true ); // $ExpectError
	linspace( [ 4 ], [], 3.0, true ); // $ExpectError
	linspace( [ 4 ], {}, 3.0, true ); // $ExpectError
	linspace( [ 4 ], ( x: number ): number => x, 3.0, true ); // $ExpectError

	linspace( [ 4 ], 'foo', 3.0, {} ); // $ExpectError
	linspace( [ 4 ], true, 3.0, {} ); // $ExpectError
	linspace( [ 4 ], false, 3.0, {} ); // $ExpectError
	linspace( [ 4 ], null, 3.0, {} ); // $ExpectError
	linspace( [ 4 ], void 0, 3.0, {} ); // $ExpectError
	linspace( [ 4 ], [], 3.0, {} ); // $ExpectError
	linspace( [ 4 ], {}, 3.0, {} ); // $ExpectError
	linspace( [ 4 ], ( x: number ): number => x, 3.0, {} ); // $ExpectError

	linspace( [ 4 ], 'foo', 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], true, 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], false, 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], null, 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], void 0, 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], [], 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], {}, 3.0, true, {} ); // $ExpectError
	linspace( [ 4 ], ( x: number ): number => x, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an ndarray or supported scalar value...
{
	linspace( [ 4 ], 1.0, 'foo' ); // $ExpectError
	linspace( [ 4 ], 1.0, true ); // $ExpectError
	linspace( [ 4 ], 1.0, false ); // $ExpectError
	linspace( [ 4 ], 1.0, null ); // $ExpectError
	linspace( [ 4 ], 1.0, void 0 ); // $ExpectError
	linspace( [ 4 ], 1.0, [] ); // $ExpectError
	linspace( [ 4 ], 1.0, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, ( x: number ): number => x ); // $ExpectError

	linspace( [ 4 ], 1.0, 'foo', true ); // $ExpectError
	linspace( [ 4 ], 1.0, true, true ); // $ExpectError
	linspace( [ 4 ], 1.0, false, true ); // $ExpectError
	linspace( [ 4 ], 1.0, null, true ); // $ExpectError
	linspace( [ 4 ], 1.0, void 0, true ); // $ExpectError
	linspace( [ 4 ], 1.0, [], true ); // $ExpectError
	linspace( [ 4 ], 1.0, {}, true ); // $ExpectError
	linspace( [ 4 ], 1.0, ( x: number ): number => x, true ); // $ExpectError

	linspace( [ 4 ], 1.0, 'foo', {} ); // $ExpectError
	linspace( [ 4 ], 1.0, true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, false, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, null, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, void 0, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, [], {} ); // $ExpectError
	linspace( [ 4 ], 1.0, {}, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, ( x: number ): number => x, {} ); // $ExpectError

	linspace( [ 4 ], 1.0, 'foo', true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, true, true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, false, true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, null, true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, void 0, true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, [], true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, {}, true, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, ( x: number ): number => x, true, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an ndarray, boolean, or options object...
{
	linspace( [ 4 ], 1.0, 3.0, 'foo' ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, null ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, [] ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, ( x: number ): number => x ); // $ExpectError

	linspace( [ 4 ], 1.0, 3.0, 'foo', {} ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, null, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, [], {} ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, {}, {} ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a options argument which is not an object...
{
	linspace( [ 4 ], 1.0, 3.0, true, '5' ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, 5 ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, true ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, false ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, null ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, [] ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': '5' } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': 5 } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': true } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': false } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': null } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': [] } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': {} } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': '5' } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': 5 } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': true } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': false } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': null } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': [] } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': {} } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	linspace( [ 4 ], 1.0, 3.0, { 'dims': '5' } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dims': 5 } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dims': true } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dims': false } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dims': null } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dims': {} } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, { 'dims': ( x: number ): number => x } ); // $ExpectError

	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': '5' } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': 5 } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': true } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': false } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': null } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': {} } ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	linspace(); // $ExpectError
	linspace( [ 4 ] ); // $ExpectError
	linspace( [ 4 ], 1.0 ); // $ExpectError
	linspace( [ 4 ], 1.0, 3.0, true, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign( x, 1.0, 3.0 ); // $ExpectType float64ndarray
	linspace.assign( x, 1.0, 3.0, true ); // $ExpectType float64ndarray
	linspace.assign( x, 1.0, 3.0, {} ); // $ExpectType float64ndarray
	linspace.assign( x, 1.0, 3.0, true, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	linspace.assign( '5', 1.0, 3.0 ); // $ExpectError
	linspace.assign( 5, 1.0, 3.0 ); // $ExpectError
	linspace.assign( true, 1.0, 3.0 ); // $ExpectError
	linspace.assign( false, 1.0, 3.0 ); // $ExpectError
	linspace.assign( null, 1.0, 3.0 ); // $ExpectError
	linspace.assign( void 0, 1.0, 3.0 ); // $ExpectError
	linspace.assign( {}, 1.0, 3.0 ); // $ExpectError
	linspace.assign( ( x: number ): number => x, 1.0, 3.0 ); // $ExpectError

	linspace.assign( '5', 1.0, 3.0, true ); // $ExpectError
	linspace.assign( 5, 1.0, 3.0, true ); // $ExpectError
	linspace.assign( true, 1.0, 3.0, true ); // $ExpectError
	linspace.assign( false, 1.0, 3.0, true ); // $ExpectError
	linspace.assign( null, 1.0, 3.0, true ); // $ExpectError
	linspace.assign( void 0, 1.0, 3.0, true ); // $ExpectError
	linspace.assign( {}, 1.0, 3.0, true ); // $ExpectError
	linspace.assign( ( x: number ): number => x, 1.0, 3.0, true ); // $ExpectError

	linspace.assign( '5', 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( 5, 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( true, 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( false, 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( null, 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( void 0, 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( {}, 1.0, 3.0, {} ); // $ExpectError
	linspace.assign( ( x: number ): number => x, 1.0, 3.0, {} ); // $ExpectError

	linspace.assign( '5', 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( 5, 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( true, 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( false, 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( null, 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( void 0, 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( {}, 1.0, 3.0, true, {} ); // $ExpectError
	linspace.assign( ( x: number ): number => x, 1.0, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray or supported scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign( x, '5', 3.0 ); // $ExpectError
	linspace.assign( x, true, 3.0 ); // $ExpectError
	linspace.assign( x, false, 3.0 ); // $ExpectError
	linspace.assign( x, null, 3.0 ); // $ExpectError
	linspace.assign( x, void 0, 3.0 ); // $ExpectError
	linspace.assign( x, [], 3.0 ); // $ExpectError
	linspace.assign( x, {}, 3.0 ); // $ExpectError
	linspace.assign( x, ( x: number ): number => x, 3.0 ); // $ExpectError

	linspace.assign( x, '5', 3.0, true ); // $ExpectError
	linspace.assign( x, true, 3.0, true ); // $ExpectError
	linspace.assign( x, false, 3.0, true ); // $ExpectError
	linspace.assign( x, null, 3.0, true ); // $ExpectError
	linspace.assign( x, void 0, 3.0, true ); // $ExpectError
	linspace.assign( x, [], 3.0, true ); // $ExpectError
	linspace.assign( x, {}, 3.0, true ); // $ExpectError
	linspace.assign( x, ( x: number ): number => x, 3.0, true ); // $ExpectError

	linspace.assign( x, '5', 3.0, {} ); // $ExpectError
	linspace.assign( x, true, 3.0, {} ); // $ExpectError
	linspace.assign( x, false, 3.0, {} ); // $ExpectError
	linspace.assign( x, null, 3.0, {} ); // $ExpectError
	linspace.assign( x, void 0, 3.0, {} ); // $ExpectError
	linspace.assign( x, [], 3.0, {} ); // $ExpectError
	linspace.assign( x, {}, 3.0, {} ); // $ExpectError
	linspace.assign( x, ( x: number ): number => x, 3.0, {} ); // $ExpectError

	linspace.assign( x, '5', 3.0, true, {} ); // $ExpectError
	linspace.assign( x, true, 3.0, true, {} ); // $ExpectError
	linspace.assign( x, false, 3.0, true, {} ); // $ExpectError
	linspace.assign( x, null, 3.0, true, {} ); // $ExpectError
	linspace.assign( x, void 0, 3.0, true, {} ); // $ExpectError
	linspace.assign( x, [], 3.0, true, {} ); // $ExpectError
	linspace.assign( x, {}, 3.0, true, {} ); // $ExpectError
	linspace.assign( x, ( x: number ): number => x, 3.0, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray or supported scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign( x, 1.0, '5' ); // $ExpectError
	linspace.assign( x, 1.0, true ); // $ExpectError
	linspace.assign( x, 1.0, false ); // $ExpectError
	linspace.assign( x, 1.0, null ); // $ExpectError
	linspace.assign( x, 1.0, void 0 ); // $ExpectError
	linspace.assign( x, 1.0, [] ); // $ExpectError
	linspace.assign( x, 1.0, {} ); // $ExpectError
	linspace.assign( x, 1.0, ( x: number ): number => x ); // $ExpectError

	linspace.assign( x, 1.0, '5', true ); // $ExpectError
	linspace.assign( x, 1.0, true, true ); // $ExpectError
	linspace.assign( x, 1.0, false, true ); // $ExpectError
	linspace.assign( x, 1.0, null, true ); // $ExpectError
	linspace.assign( x, 1.0, void 0, true ); // $ExpectError
	linspace.assign( x, 1.0, [], true ); // $ExpectError
	linspace.assign( x, 1.0, {}, true ); // $ExpectError
	linspace.assign( x, 1.0, ( x: number ): number => x, true ); // $ExpectError

	linspace.assign( x, 1.0, '5', {} ); // $ExpectError
	linspace.assign( x, 1.0, true, {} ); // $ExpectError
	linspace.assign( x, 1.0, false, {} ); // $ExpectError
	linspace.assign( x, 1.0, null, {} ); // $ExpectError
	linspace.assign( x, 1.0, void 0, {} ); // $ExpectError
	linspace.assign( x, 1.0, [], {} ); // $ExpectError
	linspace.assign( x, 1.0, {}, {} ); // $ExpectError
	linspace.assign( x, 1.0, ( x: number ): number => x, {} ); // $ExpectError

	linspace.assign( x, 1.0, '5', true, {} ); // $ExpectError
	linspace.assign( x, 1.0, true, true, {} ); // $ExpectError
	linspace.assign( x, 1.0, false, true, {} ); // $ExpectError
	linspace.assign( x, 1.0, null, true, {} ); // $ExpectError
	linspace.assign( x, 1.0, void 0, true, {} ); // $ExpectError
	linspace.assign( x, 1.0, [], true, {} ); // $ExpectError
	linspace.assign( x, 1.0, {}, true, {} ); // $ExpectError
	linspace.assign( x, 1.0, ( x: number ): number => x, true, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an ndarray, boolean, or options object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign( x, 1.0, 3.0, 'foo' ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, null ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, [] ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, ( x: number ): number => x ); // $ExpectError

	linspace.assign( x, 1.0, 3.0, 'foo', {} ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, null, {} ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, [], {} ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, {}, {} ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign( x, 1.0, 3.0, true, '5' ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, true ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, false ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, null ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, [] ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign( x, 1.0, 3.0, { 'dims': '5' } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, { 'dims': 5 } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, { 'dims': true } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, { 'dims': false } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, { 'dims': null } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, { 'dims': {} } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, { 'dims': ( x: number ): number => x } ); // $ExpectError

	linspace.assign( x, 1.0, 3.0, true, { 'dims': '5' } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, { 'dims': 5 } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, { 'dims': true } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, { 'dims': false } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, { 'dims': null } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, { 'dims': {} } ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	linspace.assign(); // $ExpectError
	linspace.assign( x ); // $ExpectError
	linspace.assign( x, 1.0 ); // $ExpectError
	linspace.assign( x, 1.0, 3.0, true, {}, {} ); // $ExpectError
}

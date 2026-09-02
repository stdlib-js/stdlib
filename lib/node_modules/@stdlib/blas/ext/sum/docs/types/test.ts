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

/* eslint-disable @typescript-eslint/no-unused-expressions, space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray/zeros' );
import sum = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum<number, number>( x ); // $ExpectType OutputArray<number>
	sum<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	sum( '5' ); // $ExpectError
	sum( 5 ); // $ExpectError
	sum( true ); // $ExpectError
	sum( false ); // $ExpectError
	sum( null ); // $ExpectError
	sum( void 0 ); // $ExpectError
	sum( {} ); // $ExpectError
	sum( ( x: number ): number => x ); // $ExpectError

	sum( '5', {} ); // $ExpectError
	sum( 5, {} ); // $ExpectError
	sum( true, {} ); // $ExpectError
	sum( false, {} ); // $ExpectError
	sum( null, {} ); // $ExpectError
	sum( void 0, {} ); // $ExpectError
	sum( {}, {} ); // $ExpectError
	sum( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum( x, '5' ); // $ExpectError
	sum( x, true ); // $ExpectError
	sum( x, false ); // $ExpectError
	sum( x, null ); // $ExpectError
	sum( x, [] ); // $ExpectError
	sum( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum( x, { 'dtype': '5' } ); // $ExpectError
	sum( x, { 'dtype': 5 } ); // $ExpectError
	sum( x, { 'dtype': true } ); // $ExpectError
	sum( x, { 'dtype': false } ); // $ExpectError
	sum( x, { 'dtype': null } ); // $ExpectError
	sum( x, { 'dtype': [] } ); // $ExpectError
	sum( x, { 'dtype': {} } ); // $ExpectError
	sum( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum( x, { 'keepdims': '5' } ); // $ExpectError
	sum( x, { 'keepdims': 5 } ); // $ExpectError
	sum( x, { 'keepdims': null } ); // $ExpectError
	sum( x, { 'keepdims': [] } ); // $ExpectError
	sum( x, { 'keepdims': {} } ); // $ExpectError
	sum( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum( x, { 'dims': '5' } ); // $ExpectError
	sum( x, { 'dims': 5 } ); // $ExpectError
	sum( x, { 'dims': true } ); // $ExpectError
	sum( x, { 'dims': false } ); // $ExpectError
	sum( x, { 'dims': null } ); // $ExpectError
	sum( x, { 'dims': {} } ); // $ExpectError
	sum( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum(); // $ExpectError
	sum( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum.assign( x, x ); // $ExpectType float64ndarray
	sum.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum.assign( '5', x ); // $ExpectError
	sum.assign( 5, x ); // $ExpectError
	sum.assign( true, x ); // $ExpectError
	sum.assign( false, x ); // $ExpectError
	sum.assign( null, x ); // $ExpectError
	sum.assign( void 0, x ); // $ExpectError
	sum.assign( {}, x ); // $ExpectError
	sum.assign( ( x: number ): number => x, x ); // $ExpectError

	sum.assign( '5', x, {} ); // $ExpectError
	sum.assign( 5, x, {} ); // $ExpectError
	sum.assign( true, x, {} ); // $ExpectError
	sum.assign( false, x, {} ); // $ExpectError
	sum.assign( null, x, {} ); // $ExpectError
	sum.assign( void 0, x, {} ); // $ExpectError
	sum.assign( {}, x, {} ); // $ExpectError
	sum.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum.assign( x, '5' ); // $ExpectError
	sum.assign( x, 5 ); // $ExpectError
	sum.assign( x, true ); // $ExpectError
	sum.assign( x, false ); // $ExpectError
	sum.assign( x, null ); // $ExpectError
	sum.assign( x, void 0 ); // $ExpectError
	sum.assign( x, ( x: number ): number => x ); // $ExpectError

	sum.assign( x, '5', {} ); // $ExpectError
	sum.assign( x, 5, {} ); // $ExpectError
	sum.assign( x, true, {} ); // $ExpectError
	sum.assign( x, false, {} ); // $ExpectError
	sum.assign( x, null, {} ); // $ExpectError
	sum.assign( x, void 0, {} ); // $ExpectError
	sum.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum.assign( x, x, '5' ); // $ExpectError
	sum.assign( x, x, true ); // $ExpectError
	sum.assign( x, x, false ); // $ExpectError
	sum.assign( x, x, null ); // $ExpectError
	sum.assign( x, x, [] ); // $ExpectError
	sum.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum.assign( x, x, { 'dims': '5' } ); // $ExpectError
	sum.assign( x, x, { 'dims': 5 } ); // $ExpectError
	sum.assign( x, x, { 'dims': true } ); // $ExpectError
	sum.assign( x, x, { 'dims': false } ); // $ExpectError
	sum.assign( x, x, { 'dims': null } ); // $ExpectError
	sum.assign( x, x, { 'dims': {} } ); // $ExpectError
	sum.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sum.assign(); // $ExpectError
	sum.assign( x ); // $ExpectError
	sum.assign( x, x, {}, {} ); // $ExpectError
}

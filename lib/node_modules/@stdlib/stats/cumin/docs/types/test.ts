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
import cumin = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin<number, number>( x ); // $ExpectType OutputArray<number>
	cumin<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	cumin( '5' ); // $ExpectError
	cumin( 5 ); // $ExpectError
	cumin( true ); // $ExpectError
	cumin( false ); // $ExpectError
	cumin( null ); // $ExpectError
	cumin( void 0 ); // $ExpectError
	cumin( {} ); // $ExpectError
	cumin( ( x: number ): number => x ); // $ExpectError

	cumin( '5', {} ); // $ExpectError
	cumin( 5, {} ); // $ExpectError
	cumin( true, {} ); // $ExpectError
	cumin( false, {} ); // $ExpectError
	cumin( null, {} ); // $ExpectError
	cumin( void 0, {} ); // $ExpectError
	cumin( {}, {} ); // $ExpectError
	cumin( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin( x, '5' ); // $ExpectError
	cumin( x, true ); // $ExpectError
	cumin( x, false ); // $ExpectError
	cumin( x, null ); // $ExpectError
	cumin( x, [] ); // $ExpectError
	cumin( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin( x, { 'dtype': '5' } ); // $ExpectError
	cumin( x, { 'dtype': 5 } ); // $ExpectError
	cumin( x, { 'dtype': true } ); // $ExpectError
	cumin( x, { 'dtype': false } ); // $ExpectError
	cumin( x, { 'dtype': null } ); // $ExpectError
	cumin( x, { 'dtype': [] } ); // $ExpectError
	cumin( x, { 'dtype': {} } ); // $ExpectError
	cumin( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin( x, { 'dims': '5' } ); // $ExpectError
	cumin( x, { 'dims': 5 } ); // $ExpectError
	cumin( x, { 'dims': true } ); // $ExpectError
	cumin( x, { 'dims': false } ); // $ExpectError
	cumin( x, { 'dims': null } ); // $ExpectError
	cumin( x, { 'dims': {} } ); // $ExpectError
	cumin( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin(); // $ExpectError
	cumin( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin.assign( x, x ); // $ExpectType float64ndarray
	cumin.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin.assign( '5', x ); // $ExpectError
	cumin.assign( 5, x ); // $ExpectError
	cumin.assign( true, x ); // $ExpectError
	cumin.assign( false, x ); // $ExpectError
	cumin.assign( null, x ); // $ExpectError
	cumin.assign( void 0, x ); // $ExpectError
	cumin.assign( {}, x ); // $ExpectError
	cumin.assign( ( x: number ): number => x, x ); // $ExpectError

	cumin.assign( '5', x, {} ); // $ExpectError
	cumin.assign( 5, x, {} ); // $ExpectError
	cumin.assign( true, x, {} ); // $ExpectError
	cumin.assign( false, x, {} ); // $ExpectError
	cumin.assign( null, x, {} ); // $ExpectError
	cumin.assign( void 0, x, {} ); // $ExpectError
	cumin.assign( {}, x, {} ); // $ExpectError
	cumin.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin.assign( x, '5' ); // $ExpectError
	cumin.assign( x, 5 ); // $ExpectError
	cumin.assign( x, true ); // $ExpectError
	cumin.assign( x, false ); // $ExpectError
	cumin.assign( x, null ); // $ExpectError
	cumin.assign( x, void 0 ); // $ExpectError
	cumin.assign( x, ( x: number ): number => x ); // $ExpectError

	cumin.assign( x, '5', {} ); // $ExpectError
	cumin.assign( x, 5, {} ); // $ExpectError
	cumin.assign( x, true, {} ); // $ExpectError
	cumin.assign( x, false, {} ); // $ExpectError
	cumin.assign( x, null, {} ); // $ExpectError
	cumin.assign( x, void 0, {} ); // $ExpectError
	cumin.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin.assign( x, x, '5' ); // $ExpectError
	cumin.assign( x, x, true ); // $ExpectError
	cumin.assign( x, x, false ); // $ExpectError
	cumin.assign( x, x, null ); // $ExpectError
	cumin.assign( x, x, [] ); // $ExpectError
	cumin.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin.assign( x, x, { 'dims': '5' } ); // $ExpectError
	cumin.assign( x, x, { 'dims': 5 } ); // $ExpectError
	cumin.assign( x, x, { 'dims': true } ); // $ExpectError
	cumin.assign( x, x, { 'dims': false } ); // $ExpectError
	cumin.assign( x, x, { 'dims': null } ); // $ExpectError
	cumin.assign( x, x, { 'dims': {} } ); // $ExpectError
	cumin.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumin.assign(); // $ExpectError
	cumin.assign( x ); // $ExpectError
	cumin.assign( x, x, {}, {} ); // $ExpectError
}

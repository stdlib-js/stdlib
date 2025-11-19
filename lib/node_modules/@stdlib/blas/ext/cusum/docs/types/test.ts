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
import cusum = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum<number, number>( x ); // $ExpectType OutputArray<number>
	cusum<number, number>( x, 10.0 ); // $ExpectType OutputArray<number>
	cusum<number, number>( x, {} ); // $ExpectType OutputArray<number>
	cusum<number, number>( x, 10.0, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	cusum( '5' ); // $ExpectError
	cusum( 5 ); // $ExpectError
	cusum( true ); // $ExpectError
	cusum( false ); // $ExpectError
	cusum( null ); // $ExpectError
	cusum( void 0 ); // $ExpectError
	cusum( {} ); // $ExpectError
	cusum( ( x: number ): number => x ); // $ExpectError

	cusum( '5', {} ); // $ExpectError
	cusum( 5, {} ); // $ExpectError
	cusum( true, {} ); // $ExpectError
	cusum( false, {} ); // $ExpectError
	cusum( null, {} ); // $ExpectError
	cusum( void 0, {} ); // $ExpectError
	cusum( {}, {} ); // $ExpectError
	cusum( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an initial value argument which is not an ndarray or scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum( x, '5', {} ); // $ExpectError
	cusum( x, true, {} ); // $ExpectError
	cusum( x, false, {} ); // $ExpectError
	cusum( x, [], {} ); // $ExpectError
	cusum( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum( x, '5' ); // $ExpectError
	cusum( x, true ); // $ExpectError
	cusum( x, false ); // $ExpectError
	cusum( x, [] ); // $ExpectError
	cusum( x, ( x: number ): number => x ); // $ExpectError

	cusum( x, 10.0, '5' ); // $ExpectError
	cusum( x, 10.0, true ); // $ExpectError
	cusum( x, 10.0, false ); // $ExpectError
	cusum( x, 10.0, null ); // $ExpectError
	cusum( x, 10.0, [] ); // $ExpectError
	cusum( x, 10.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum( x, { 'dtype': '5' } ); // $ExpectError
	cusum( x, { 'dtype': 5 } ); // $ExpectError
	cusum( x, { 'dtype': true } ); // $ExpectError
	cusum( x, { 'dtype': false } ); // $ExpectError
	cusum( x, { 'dtype': null } ); // $ExpectError
	cusum( x, { 'dtype': [] } ); // $ExpectError
	cusum( x, { 'dtype': {} } ); // $ExpectError
	cusum( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	cusum( x, 10.0, { 'dtype': '5' } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': 5 } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': true } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': false } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': null } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': [] } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': {} } ); // $ExpectError
	cusum( x, 10.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum( x, { 'dims': '5' } ); // $ExpectError
	cusum( x, { 'dims': 5 } ); // $ExpectError
	cusum( x, { 'dims': true } ); // $ExpectError
	cusum( x, { 'dims': false } ); // $ExpectError
	cusum( x, { 'dims': null } ); // $ExpectError
	cusum( x, { 'dims': {} } ); // $ExpectError
	cusum( x, { 'dims': ( x: number ): number => x } ); // $ExpectError

	cusum( x, 10.0, { 'dims': '5' } ); // $ExpectError
	cusum( x, 10.0, { 'dims': 5 } ); // $ExpectError
	cusum( x, 10.0, { 'dims': true } ); // $ExpectError
	cusum( x, 10.0, { 'dims': false } ); // $ExpectError
	cusum( x, 10.0, { 'dims': null } ); // $ExpectError
	cusum( x, 10.0, { 'dims': {} } ); // $ExpectError
	cusum( x, 10.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum(); // $ExpectError
	cusum( x, 10.0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum.assign( x, x ); // $ExpectType float64ndarray
	cusum.assign( x, x, {} ); // $ExpectType float64ndarray
	cusum.assign( x, 10.0, x ); // $ExpectType float64ndarray
	cusum.assign( x, 10.0, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum.assign( '5', x ); // $ExpectError
	cusum.assign( 5, x ); // $ExpectError
	cusum.assign( true, x ); // $ExpectError
	cusum.assign( false, x ); // $ExpectError
	cusum.assign( null, x ); // $ExpectError
	cusum.assign( void 0, x ); // $ExpectError
	cusum.assign( {}, x ); // $ExpectError
	cusum.assign( ( x: number ): number => x, x ); // $ExpectError

	cusum.assign( '5', x, {} ); // $ExpectError
	cusum.assign( 5, x, {} ); // $ExpectError
	cusum.assign( true, x, {} ); // $ExpectError
	cusum.assign( false, x, {} ); // $ExpectError
	cusum.assign( null, x, {} ); // $ExpectError
	cusum.assign( void 0, x, {} ); // $ExpectError
	cusum.assign( {}, x, {} ); // $ExpectError
	cusum.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum.assign( x, '5' ); // $ExpectError
	cusum.assign( x, 5 ); // $ExpectError
	cusum.assign( x, true ); // $ExpectError
	cusum.assign( x, false ); // $ExpectError
	cusum.assign( x, null ); // $ExpectError
	cusum.assign( x, void 0 ); // $ExpectError
	cusum.assign( x, ( x: number ): number => x ); // $ExpectError

	cusum.assign( x, '5', {} ); // $ExpectError
	cusum.assign( x, 5, {} ); // $ExpectError
	cusum.assign( x, true, {} ); // $ExpectError
	cusum.assign( x, false, {} ); // $ExpectError
	cusum.assign( x, null, {} ); // $ExpectError
	cusum.assign( x, void 0, {} ); // $ExpectError
	cusum.assign( x, ( x: number ): number => x, {} ); // $ExpectError

	cusum.assign( x, 10.0, '5' ); // $ExpectError
	cusum.assign( x, 10.0, 5 ); // $ExpectError
	cusum.assign( x, 10.0, true ); // $ExpectError
	cusum.assign( x, 10.0, false ); // $ExpectError
	cusum.assign( x, 10.0, null ); // $ExpectError
	cusum.assign( x, 10.0, void 0 ); // $ExpectError
	cusum.assign( x, 10.0, ( x: number ): number => x ); // $ExpectError

	cusum.assign( x, 10.0, '5', {} ); // $ExpectError
	cusum.assign( x, 10.0, 5, {} ); // $ExpectError
	cusum.assign( x, 10.0, true, {} ); // $ExpectError
	cusum.assign( x, 10.0, false, {} ); // $ExpectError
	cusum.assign( x, 10.0, null, {} ); // $ExpectError
	cusum.assign( x, 10.0, void 0, {} ); // $ExpectError
	cusum.assign( x, 10.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum.assign( x, x, '5' ); // $ExpectError
	cusum.assign( x, x, true ); // $ExpectError
	cusum.assign( x, x, false ); // $ExpectError
	cusum.assign( x, x, null ); // $ExpectError
	cusum.assign( x, x, [] ); // $ExpectError
	cusum.assign( x, x, ( x: number ): number => x ); // $ExpectError

	cusum.assign( x, 10.0, x, '5' ); // $ExpectError
	cusum.assign( x, 10.0, x, true ); // $ExpectError
	cusum.assign( x, 10.0, x, false ); // $ExpectError
	cusum.assign( x, 10.0, x, null ); // $ExpectError
	cusum.assign( x, 10.0, x, [] ); // $ExpectError
	cusum.assign( x, 10.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum.assign( x, x, { 'dims': '5' } ); // $ExpectError
	cusum.assign( x, x, { 'dims': 5 } ); // $ExpectError
	cusum.assign( x, x, { 'dims': true } ); // $ExpectError
	cusum.assign( x, x, { 'dims': false } ); // $ExpectError
	cusum.assign( x, x, { 'dims': null } ); // $ExpectError
	cusum.assign( x, x, { 'dims': {} } ); // $ExpectError
	cusum.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError

	cusum.assign( x, 10.0, x, { 'dims': '5' } ); // $ExpectError
	cusum.assign( x, 10.0, x, { 'dims': 5 } ); // $ExpectError
	cusum.assign( x, 10.0, x, { 'dims': true } ); // $ExpectError
	cusum.assign( x, 10.0, x, { 'dims': false } ); // $ExpectError
	cusum.assign( x, 10.0, x, { 'dims': null } ); // $ExpectError
	cusum.assign( x, 10.0, x, { 'dims': {} } ); // $ExpectError
	cusum.assign( x, 10.0, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusum.assign(); // $ExpectError
	cusum.assign( x ); // $ExpectError
	cusum.assign( x, 10.0 ); // $ExpectError
	cusum.assign( x, 10.0, x, {}, {} ); // $ExpectError
}

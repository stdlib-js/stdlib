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
import mean = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean<number, number>( x ); // $ExpectType OutputArray<number>
	mean<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	mean( '5' ); // $ExpectError
	mean( 5 ); // $ExpectError
	mean( true ); // $ExpectError
	mean( false ); // $ExpectError
	mean( null ); // $ExpectError
	mean( void 0 ); // $ExpectError
	mean( {} ); // $ExpectError
	mean( ( x: number ): number => x ); // $ExpectError

	mean( '5', {} ); // $ExpectError
	mean( 5, {} ); // $ExpectError
	mean( true, {} ); // $ExpectError
	mean( false, {} ); // $ExpectError
	mean( null, {} ); // $ExpectError
	mean( void 0, {} ); // $ExpectError
	mean( {}, {} ); // $ExpectError
	mean( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean( x, '5' ); // $ExpectError
	mean( x, true ); // $ExpectError
	mean( x, false ); // $ExpectError
	mean( x, null ); // $ExpectError
	mean( x, [] ); // $ExpectError
	mean( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean( x, { 'dtype': '5' } ); // $ExpectError
	mean( x, { 'dtype': 5 } ); // $ExpectError
	mean( x, { 'dtype': true } ); // $ExpectError
	mean( x, { 'dtype': false } ); // $ExpectError
	mean( x, { 'dtype': null } ); // $ExpectError
	mean( x, { 'dtype': [] } ); // $ExpectError
	mean( x, { 'dtype': {} } ); // $ExpectError
	mean( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean( x, { 'keepdims': '5' } ); // $ExpectError
	mean( x, { 'keepdims': 5 } ); // $ExpectError
	mean( x, { 'keepdims': null } ); // $ExpectError
	mean( x, { 'keepdims': [] } ); // $ExpectError
	mean( x, { 'keepdims': {} } ); // $ExpectError
	mean( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean( x, { 'dims': '5' } ); // $ExpectError
	mean( x, { 'dims': 5 } ); // $ExpectError
	mean( x, { 'dims': true } ); // $ExpectError
	mean( x, { 'dims': false } ); // $ExpectError
	mean( x, { 'dims': null } ); // $ExpectError
	mean( x, { 'dims': {} } ); // $ExpectError
	mean( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean(); // $ExpectError
	mean( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean.assign( x, x ); // $ExpectType float64ndarray
	mean.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean.assign( '5', x ); // $ExpectError
	mean.assign( 5, x ); // $ExpectError
	mean.assign( true, x ); // $ExpectError
	mean.assign( false, x ); // $ExpectError
	mean.assign( null, x ); // $ExpectError
	mean.assign( void 0, x ); // $ExpectError
	mean.assign( {}, x ); // $ExpectError
	mean.assign( ( x: number ): number => x, x ); // $ExpectError

	mean.assign( '5', x, {} ); // $ExpectError
	mean.assign( 5, x, {} ); // $ExpectError
	mean.assign( true, x, {} ); // $ExpectError
	mean.assign( false, x, {} ); // $ExpectError
	mean.assign( null, x, {} ); // $ExpectError
	mean.assign( void 0, x, {} ); // $ExpectError
	mean.assign( {}, x, {} ); // $ExpectError
	mean.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean.assign( x, '5' ); // $ExpectError
	mean.assign( x, 5 ); // $ExpectError
	mean.assign( x, true ); // $ExpectError
	mean.assign( x, false ); // $ExpectError
	mean.assign( x, null ); // $ExpectError
	mean.assign( x, void 0 ); // $ExpectError
	mean.assign( x, ( x: number ): number => x ); // $ExpectError

	mean.assign( x, '5', {} ); // $ExpectError
	mean.assign( x, 5, {} ); // $ExpectError
	mean.assign( x, true, {} ); // $ExpectError
	mean.assign( x, false, {} ); // $ExpectError
	mean.assign( x, null, {} ); // $ExpectError
	mean.assign( x, void 0, {} ); // $ExpectError
	mean.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean.assign( x, x, '5' ); // $ExpectError
	mean.assign( x, x, true ); // $ExpectError
	mean.assign( x, x, false ); // $ExpectError
	mean.assign( x, x, null ); // $ExpectError
	mean.assign( x, x, [] ); // $ExpectError
	mean.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean.assign( x, x, { 'dims': '5' } ); // $ExpectError
	mean.assign( x, x, { 'dims': 5 } ); // $ExpectError
	mean.assign( x, x, { 'dims': true } ); // $ExpectError
	mean.assign( x, x, { 'dims': false } ); // $ExpectError
	mean.assign( x, x, { 'dims': null } ); // $ExpectError
	mean.assign( x, x, { 'dims': {} } ); // $ExpectError
	mean.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	mean.assign(); // $ExpectError
	mean.assign( x ); // $ExpectError
	mean.assign( x, x, {}, {} ); // $ExpectError
}

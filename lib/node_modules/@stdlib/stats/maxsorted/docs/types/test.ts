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
import maxsorted = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted<number, number>( x ); // $ExpectType OutputArray<number>
	maxsorted<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	maxsorted( '5' ); // $ExpectError
	maxsorted( 5 ); // $ExpectError
	maxsorted( true ); // $ExpectError
	maxsorted( false ); // $ExpectError
	maxsorted( null ); // $ExpectError
	maxsorted( void 0 ); // $ExpectError
	maxsorted( {} ); // $ExpectError
	maxsorted( ( x: number ): number => x ); // $ExpectError

	maxsorted( '5', {} ); // $ExpectError
	maxsorted( 5, {} ); // $ExpectError
	maxsorted( true, {} ); // $ExpectError
	maxsorted( false, {} ); // $ExpectError
	maxsorted( null, {} ); // $ExpectError
	maxsorted( void 0, {} ); // $ExpectError
	maxsorted( {}, {} ); // $ExpectError
	maxsorted( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted( x, '5' ); // $ExpectError
	maxsorted( x, true ); // $ExpectError
	maxsorted( x, false ); // $ExpectError
	maxsorted( x, null ); // $ExpectError
	maxsorted( x, [] ); // $ExpectError
	maxsorted( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted( x, { 'dtype': '5' } ); // $ExpectError
	maxsorted( x, { 'dtype': 5 } ); // $ExpectError
	maxsorted( x, { 'dtype': true } ); // $ExpectError
	maxsorted( x, { 'dtype': false } ); // $ExpectError
	maxsorted( x, { 'dtype': null } ); // $ExpectError
	maxsorted( x, { 'dtype': [] } ); // $ExpectError
	maxsorted( x, { 'dtype': {} } ); // $ExpectError
	maxsorted( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted( x, { 'keepdims': '5' } ); // $ExpectError
	maxsorted( x, { 'keepdims': 5 } ); // $ExpectError
	maxsorted( x, { 'keepdims': null } ); // $ExpectError
	maxsorted( x, { 'keepdims': [] } ); // $ExpectError
	maxsorted( x, { 'keepdims': {} } ); // $ExpectError
	maxsorted( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted( x, { 'dims': '5' } ); // $ExpectError
	maxsorted( x, { 'dims': 5 } ); // $ExpectError
	maxsorted( x, { 'dims': true } ); // $ExpectError
	maxsorted( x, { 'dims': false } ); // $ExpectError
	maxsorted( x, { 'dims': null } ); // $ExpectError
	maxsorted( x, { 'dims': {} } ); // $ExpectError
	maxsorted( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted(); // $ExpectError
	maxsorted( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted.assign( x, x ); // $ExpectType float64ndarray
	maxsorted.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted.assign( '5', x ); // $ExpectError
	maxsorted.assign( 5, x ); // $ExpectError
	maxsorted.assign( true, x ); // $ExpectError
	maxsorted.assign( false, x ); // $ExpectError
	maxsorted.assign( null, x ); // $ExpectError
	maxsorted.assign( void 0, x ); // $ExpectError
	maxsorted.assign( {}, x ); // $ExpectError
	maxsorted.assign( ( x: number ): number => x, x ); // $ExpectError

	maxsorted.assign( '5', x, {} ); // $ExpectError
	maxsorted.assign( 5, x, {} ); // $ExpectError
	maxsorted.assign( true, x, {} ); // $ExpectError
	maxsorted.assign( false, x, {} ); // $ExpectError
	maxsorted.assign( null, x, {} ); // $ExpectError
	maxsorted.assign( void 0, x, {} ); // $ExpectError
	maxsorted.assign( {}, x, {} ); // $ExpectError
	maxsorted.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted.assign( x, '5' ); // $ExpectError
	maxsorted.assign( x, 5 ); // $ExpectError
	maxsorted.assign( x, true ); // $ExpectError
	maxsorted.assign( x, false ); // $ExpectError
	maxsorted.assign( x, null ); // $ExpectError
	maxsorted.assign( x, void 0 ); // $ExpectError
	maxsorted.assign( x, ( x: number ): number => x ); // $ExpectError

	maxsorted.assign( x, '5', {} ); // $ExpectError
	maxsorted.assign( x, 5, {} ); // $ExpectError
	maxsorted.assign( x, true, {} ); // $ExpectError
	maxsorted.assign( x, false, {} ); // $ExpectError
	maxsorted.assign( x, null, {} ); // $ExpectError
	maxsorted.assign( x, void 0, {} ); // $ExpectError
	maxsorted.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted.assign( x, x, '5' ); // $ExpectError
	maxsorted.assign( x, x, true ); // $ExpectError
	maxsorted.assign( x, x, false ); // $ExpectError
	maxsorted.assign( x, x, null ); // $ExpectError
	maxsorted.assign( x, x, [] ); // $ExpectError
	maxsorted.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted.assign( x, x, { 'dims': '5' } ); // $ExpectError
	maxsorted.assign( x, x, { 'dims': 5 } ); // $ExpectError
	maxsorted.assign( x, x, { 'dims': true } ); // $ExpectError
	maxsorted.assign( x, x, { 'dims': false } ); // $ExpectError
	maxsorted.assign( x, x, { 'dims': null } ); // $ExpectError
	maxsorted.assign( x, x, { 'dims': {} } ); // $ExpectError
	maxsorted.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxsorted.assign(); // $ExpectError
	maxsorted.assign( x ); // $ExpectError
	maxsorted.assign( x, x, {}, {} ); // $ExpectError
}

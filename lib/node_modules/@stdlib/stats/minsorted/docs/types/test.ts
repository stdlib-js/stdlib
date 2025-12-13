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
import minsorted = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted<number, number>( x ); // $ExpectType OutputArray<number>
	minsorted<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	minsorted( '5' ); // $ExpectError
	minsorted( 5 ); // $ExpectError
	minsorted( true ); // $ExpectError
	minsorted( false ); // $ExpectError
	minsorted( null ); // $ExpectError
	minsorted( void 0 ); // $ExpectError
	minsorted( {} ); // $ExpectError
	minsorted( ( x: number ): number => x ); // $ExpectError

	minsorted( '5', {} ); // $ExpectError
	minsorted( 5, {} ); // $ExpectError
	minsorted( true, {} ); // $ExpectError
	minsorted( false, {} ); // $ExpectError
	minsorted( null, {} ); // $ExpectError
	minsorted( void 0, {} ); // $ExpectError
	minsorted( {}, {} ); // $ExpectError
	minsorted( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted( x, '5' ); // $ExpectError
	minsorted( x, true ); // $ExpectError
	minsorted( x, false ); // $ExpectError
	minsorted( x, null ); // $ExpectError
	minsorted( x, [] ); // $ExpectError
	minsorted( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted( x, { 'dtype': '5' } ); // $ExpectError
	minsorted( x, { 'dtype': 5 } ); // $ExpectError
	minsorted( x, { 'dtype': true } ); // $ExpectError
	minsorted( x, { 'dtype': false } ); // $ExpectError
	minsorted( x, { 'dtype': null } ); // $ExpectError
	minsorted( x, { 'dtype': [] } ); // $ExpectError
	minsorted( x, { 'dtype': {} } ); // $ExpectError
	minsorted( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted( x, { 'keepdims': '5' } ); // $ExpectError
	minsorted( x, { 'keepdims': 5 } ); // $ExpectError
	minsorted( x, { 'keepdims': null } ); // $ExpectError
	minsorted( x, { 'keepdims': [] } ); // $ExpectError
	minsorted( x, { 'keepdims': {} } ); // $ExpectError
	minsorted( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted( x, { 'dims': '5' } ); // $ExpectError
	minsorted( x, { 'dims': 5 } ); // $ExpectError
	minsorted( x, { 'dims': true } ); // $ExpectError
	minsorted( x, { 'dims': false } ); // $ExpectError
	minsorted( x, { 'dims': null } ); // $ExpectError
	minsorted( x, { 'dims': {} } ); // $ExpectError
	minsorted( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted(); // $ExpectError
	minsorted( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted.assign( x, x ); // $ExpectType float64ndarray
	minsorted.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted.assign( '5', x ); // $ExpectError
	minsorted.assign( 5, x ); // $ExpectError
	minsorted.assign( true, x ); // $ExpectError
	minsorted.assign( false, x ); // $ExpectError
	minsorted.assign( null, x ); // $ExpectError
	minsorted.assign( void 0, x ); // $ExpectError
	minsorted.assign( {}, x ); // $ExpectError
	minsorted.assign( ( x: number ): number => x, x ); // $ExpectError

	minsorted.assign( '5', x, {} ); // $ExpectError
	minsorted.assign( 5, x, {} ); // $ExpectError
	minsorted.assign( true, x, {} ); // $ExpectError
	minsorted.assign( false, x, {} ); // $ExpectError
	minsorted.assign( null, x, {} ); // $ExpectError
	minsorted.assign( void 0, x, {} ); // $ExpectError
	minsorted.assign( {}, x, {} ); // $ExpectError
	minsorted.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted.assign( x, '5' ); // $ExpectError
	minsorted.assign( x, 5 ); // $ExpectError
	minsorted.assign( x, true ); // $ExpectError
	minsorted.assign( x, false ); // $ExpectError
	minsorted.assign( x, null ); // $ExpectError
	minsorted.assign( x, void 0 ); // $ExpectError
	minsorted.assign( x, ( x: number ): number => x ); // $ExpectError

	minsorted.assign( x, '5', {} ); // $ExpectError
	minsorted.assign( x, 5, {} ); // $ExpectError
	minsorted.assign( x, true, {} ); // $ExpectError
	minsorted.assign( x, false, {} ); // $ExpectError
	minsorted.assign( x, null, {} ); // $ExpectError
	minsorted.assign( x, void 0, {} ); // $ExpectError
	minsorted.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted.assign( x, x, '5' ); // $ExpectError
	minsorted.assign( x, x, true ); // $ExpectError
	minsorted.assign( x, x, false ); // $ExpectError
	minsorted.assign( x, x, null ); // $ExpectError
	minsorted.assign( x, x, [] ); // $ExpectError
	minsorted.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted.assign( x, x, { 'dims': '5' } ); // $ExpectError
	minsorted.assign( x, x, { 'dims': 5 } ); // $ExpectError
	minsorted.assign( x, x, { 'dims': true } ); // $ExpectError
	minsorted.assign( x, x, { 'dims': false } ); // $ExpectError
	minsorted.assign( x, x, { 'dims': null } ); // $ExpectError
	minsorted.assign( x, x, { 'dims': {} } ); // $ExpectError
	minsorted.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minsorted.assign(); // $ExpectError
	minsorted.assign( x ); // $ExpectError
	minsorted.assign( x, x, {}, {} ); // $ExpectError
}

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
import min = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min<number, number>( x ); // $ExpectType OutputArray<number>
	min<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	min( '5' ); // $ExpectError
	min( 5 ); // $ExpectError
	min( true ); // $ExpectError
	min( false ); // $ExpectError
	min( null ); // $ExpectError
	min( void 0 ); // $ExpectError
	min( {} ); // $ExpectError
	min( ( x: number ): number => x ); // $ExpectError

	min( '5', {} ); // $ExpectError
	min( 5, {} ); // $ExpectError
	min( true, {} ); // $ExpectError
	min( false, {} ); // $ExpectError
	min( null, {} ); // $ExpectError
	min( void 0, {} ); // $ExpectError
	min( {}, {} ); // $ExpectError
	min( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min( x, '5' ); // $ExpectError
	min( x, true ); // $ExpectError
	min( x, false ); // $ExpectError
	min( x, null ); // $ExpectError
	min( x, [] ); // $ExpectError
	min( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min( x, { 'dtype': '5' } ); // $ExpectError
	min( x, { 'dtype': 5 } ); // $ExpectError
	min( x, { 'dtype': true } ); // $ExpectError
	min( x, { 'dtype': false } ); // $ExpectError
	min( x, { 'dtype': null } ); // $ExpectError
	min( x, { 'dtype': [] } ); // $ExpectError
	min( x, { 'dtype': {} } ); // $ExpectError
	min( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min( x, { 'keepdims': '5' } ); // $ExpectError
	min( x, { 'keepdims': 5 } ); // $ExpectError
	min( x, { 'keepdims': null } ); // $ExpectError
	min( x, { 'keepdims': [] } ); // $ExpectError
	min( x, { 'keepdims': {} } ); // $ExpectError
	min( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min( x, { 'dims': '5' } ); // $ExpectError
	min( x, { 'dims': 5 } ); // $ExpectError
	min( x, { 'dims': true } ); // $ExpectError
	min( x, { 'dims': false } ); // $ExpectError
	min( x, { 'dims': null } ); // $ExpectError
	min( x, { 'dims': {} } ); // $ExpectError
	min( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min(); // $ExpectError
	min( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min.assign( x, x ); // $ExpectType float64ndarray
	min.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min.assign( '5', x ); // $ExpectError
	min.assign( 5, x ); // $ExpectError
	min.assign( true, x ); // $ExpectError
	min.assign( false, x ); // $ExpectError
	min.assign( null, x ); // $ExpectError
	min.assign( void 0, x ); // $ExpectError
	min.assign( {}, x ); // $ExpectError
	min.assign( ( x: number ): number => x, x ); // $ExpectError

	min.assign( '5', x, {} ); // $ExpectError
	min.assign( 5, x, {} ); // $ExpectError
	min.assign( true, x, {} ); // $ExpectError
	min.assign( false, x, {} ); // $ExpectError
	min.assign( null, x, {} ); // $ExpectError
	min.assign( void 0, x, {} ); // $ExpectError
	min.assign( {}, x, {} ); // $ExpectError
	min.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min.assign( x, '5' ); // $ExpectError
	min.assign( x, 5 ); // $ExpectError
	min.assign( x, true ); // $ExpectError
	min.assign( x, false ); // $ExpectError
	min.assign( x, null ); // $ExpectError
	min.assign( x, void 0 ); // $ExpectError
	min.assign( x, ( x: number ): number => x ); // $ExpectError

	min.assign( x, '5', {} ); // $ExpectError
	min.assign( x, 5, {} ); // $ExpectError
	min.assign( x, true, {} ); // $ExpectError
	min.assign( x, false, {} ); // $ExpectError
	min.assign( x, null, {} ); // $ExpectError
	min.assign( x, void 0, {} ); // $ExpectError
	min.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min.assign( x, x, '5' ); // $ExpectError
	min.assign( x, x, true ); // $ExpectError
	min.assign( x, x, false ); // $ExpectError
	min.assign( x, x, null ); // $ExpectError
	min.assign( x, x, [] ); // $ExpectError
	min.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min.assign( x, x, { 'dims': '5' } ); // $ExpectError
	min.assign( x, x, { 'dims': 5 } ); // $ExpectError
	min.assign( x, x, { 'dims': true } ); // $ExpectError
	min.assign( x, x, { 'dims': false } ); // $ExpectError
	min.assign( x, x, { 'dims': null } ); // $ExpectError
	min.assign( x, x, { 'dims': {} } ); // $ExpectError
	min.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	min.assign(); // $ExpectError
	min.assign( x ); // $ExpectError
	min.assign( x, x, {}, {} ); // $ExpectError
}

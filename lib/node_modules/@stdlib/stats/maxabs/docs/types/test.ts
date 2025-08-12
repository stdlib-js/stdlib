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
import maxabs = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs<number, number>( x ); // $ExpectType OutputArray<number>
	maxabs<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	maxabs( '5' ); // $ExpectError
	maxabs( 5 ); // $ExpectError
	maxabs( true ); // $ExpectError
	maxabs( false ); // $ExpectError
	maxabs( null ); // $ExpectError
	maxabs( void 0 ); // $ExpectError
	maxabs( {} ); // $ExpectError
	maxabs( ( x: number ): number => x ); // $ExpectError

	maxabs( '5', {} ); // $ExpectError
	maxabs( 5, {} ); // $ExpectError
	maxabs( true, {} ); // $ExpectError
	maxabs( false, {} ); // $ExpectError
	maxabs( null, {} ); // $ExpectError
	maxabs( void 0, {} ); // $ExpectError
	maxabs( {}, {} ); // $ExpectError
	maxabs( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs( x, '5' ); // $ExpectError
	maxabs( x, true ); // $ExpectError
	maxabs( x, false ); // $ExpectError
	maxabs( x, null ); // $ExpectError
	maxabs( x, [] ); // $ExpectError
	maxabs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs( x, { 'dtype': '5' } ); // $ExpectError
	maxabs( x, { 'dtype': 5 } ); // $ExpectError
	maxabs( x, { 'dtype': true } ); // $ExpectError
	maxabs( x, { 'dtype': false } ); // $ExpectError
	maxabs( x, { 'dtype': null } ); // $ExpectError
	maxabs( x, { 'dtype': [] } ); // $ExpectError
	maxabs( x, { 'dtype': {} } ); // $ExpectError
	maxabs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs( x, { 'keepdims': '5' } ); // $ExpectError
	maxabs( x, { 'keepdims': 5 } ); // $ExpectError
	maxabs( x, { 'keepdims': null } ); // $ExpectError
	maxabs( x, { 'keepdims': [] } ); // $ExpectError
	maxabs( x, { 'keepdims': {} } ); // $ExpectError
	maxabs( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs( x, { 'dims': '5' } ); // $ExpectError
	maxabs( x, { 'dims': 5 } ); // $ExpectError
	maxabs( x, { 'dims': true } ); // $ExpectError
	maxabs( x, { 'dims': false } ); // $ExpectError
	maxabs( x, { 'dims': null } ); // $ExpectError
	maxabs( x, { 'dims': {} } ); // $ExpectError
	maxabs( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs(); // $ExpectError
	maxabs( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs.assign( x, x ); // $ExpectType float64ndarray
	maxabs.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs.assign( '5', x ); // $ExpectError
	maxabs.assign( 5, x ); // $ExpectError
	maxabs.assign( true, x ); // $ExpectError
	maxabs.assign( false, x ); // $ExpectError
	maxabs.assign( null, x ); // $ExpectError
	maxabs.assign( void 0, x ); // $ExpectError
	maxabs.assign( {}, x ); // $ExpectError
	maxabs.assign( ( x: number ): number => x, x ); // $ExpectError

	maxabs.assign( '5', x, {} ); // $ExpectError
	maxabs.assign( 5, x, {} ); // $ExpectError
	maxabs.assign( true, x, {} ); // $ExpectError
	maxabs.assign( false, x, {} ); // $ExpectError
	maxabs.assign( null, x, {} ); // $ExpectError
	maxabs.assign( void 0, x, {} ); // $ExpectError
	maxabs.assign( {}, x, {} ); // $ExpectError
	maxabs.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs.assign( x, '5' ); // $ExpectError
	maxabs.assign( x, 5 ); // $ExpectError
	maxabs.assign( x, true ); // $ExpectError
	maxabs.assign( x, false ); // $ExpectError
	maxabs.assign( x, null ); // $ExpectError
	maxabs.assign( x, void 0 ); // $ExpectError
	maxabs.assign( x, ( x: number ): number => x ); // $ExpectError

	maxabs.assign( x, '5', {} ); // $ExpectError
	maxabs.assign( x, 5, {} ); // $ExpectError
	maxabs.assign( x, true, {} ); // $ExpectError
	maxabs.assign( x, false, {} ); // $ExpectError
	maxabs.assign( x, null, {} ); // $ExpectError
	maxabs.assign( x, void 0, {} ); // $ExpectError
	maxabs.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs.assign( x, x, '5' ); // $ExpectError
	maxabs.assign( x, x, true ); // $ExpectError
	maxabs.assign( x, x, false ); // $ExpectError
	maxabs.assign( x, x, null ); // $ExpectError
	maxabs.assign( x, x, [] ); // $ExpectError
	maxabs.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs.assign( x, x, { 'dims': '5' } ); // $ExpectError
	maxabs.assign( x, x, { 'dims': 5 } ); // $ExpectError
	maxabs.assign( x, x, { 'dims': true } ); // $ExpectError
	maxabs.assign( x, x, { 'dims': false } ); // $ExpectError
	maxabs.assign( x, x, { 'dims': null } ); // $ExpectError
	maxabs.assign( x, x, { 'dims': {} } ); // $ExpectError
	maxabs.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxabs.assign(); // $ExpectError
	maxabs.assign( x ); // $ExpectError
	maxabs.assign( x, x, {}, {} ); // $ExpectError
}

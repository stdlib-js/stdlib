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
import range = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range<number, number>( x ); // $ExpectType OutputArray<number>
	range<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	range( '5' ); // $ExpectError
	range( 5 ); // $ExpectError
	range( true ); // $ExpectError
	range( false ); // $ExpectError
	range( null ); // $ExpectError
	range( void 0 ); // $ExpectError
	range( {} ); // $ExpectError
	range( ( x: number ): number => x ); // $ExpectError

	range( '5', {} ); // $ExpectError
	range( 5, {} ); // $ExpectError
	range( true, {} ); // $ExpectError
	range( false, {} ); // $ExpectError
	range( null, {} ); // $ExpectError
	range( void 0, {} ); // $ExpectError
	range( {}, {} ); // $ExpectError
	range( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range( x, '5' ); // $ExpectError
	range( x, true ); // $ExpectError
	range( x, false ); // $ExpectError
	range( x, null ); // $ExpectError
	range( x, [] ); // $ExpectError
	range( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range( x, { 'dtype': '5' } ); // $ExpectError
	range( x, { 'dtype': 5 } ); // $ExpectError
	range( x, { 'dtype': true } ); // $ExpectError
	range( x, { 'dtype': false } ); // $ExpectError
	range( x, { 'dtype': null } ); // $ExpectError
	range( x, { 'dtype': [] } ); // $ExpectError
	range( x, { 'dtype': {} } ); // $ExpectError
	range( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range( x, { 'keepdims': '5' } ); // $ExpectError
	range( x, { 'keepdims': 5 } ); // $ExpectError
	range( x, { 'keepdims': null } ); // $ExpectError
	range( x, { 'keepdims': [] } ); // $ExpectError
	range( x, { 'keepdims': {} } ); // $ExpectError
	range( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range( x, { 'dims': '5' } ); // $ExpectError
	range( x, { 'dims': 5 } ); // $ExpectError
	range( x, { 'dims': true } ); // $ExpectError
	range( x, { 'dims': false } ); // $ExpectError
	range( x, { 'dims': null } ); // $ExpectError
	range( x, { 'dims': {} } ); // $ExpectError
	range( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range(); // $ExpectError
	range( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range.assign( x, x ); // $ExpectType float64ndarray
	range.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range.assign( '5', x ); // $ExpectError
	range.assign( 5, x ); // $ExpectError
	range.assign( true, x ); // $ExpectError
	range.assign( false, x ); // $ExpectError
	range.assign( null, x ); // $ExpectError
	range.assign( void 0, x ); // $ExpectError
	range.assign( {}, x ); // $ExpectError
	range.assign( ( x: number ): number => x, x ); // $ExpectError

	range.assign( '5', x, {} ); // $ExpectError
	range.assign( 5, x, {} ); // $ExpectError
	range.assign( true, x, {} ); // $ExpectError
	range.assign( false, x, {} ); // $ExpectError
	range.assign( null, x, {} ); // $ExpectError
	range.assign( void 0, x, {} ); // $ExpectError
	range.assign( {}, x, {} ); // $ExpectError
	range.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range.assign( x, '5' ); // $ExpectError
	range.assign( x, 5 ); // $ExpectError
	range.assign( x, true ); // $ExpectError
	range.assign( x, false ); // $ExpectError
	range.assign( x, null ); // $ExpectError
	range.assign( x, void 0 ); // $ExpectError
	range.assign( x, ( x: number ): number => x ); // $ExpectError

	range.assign( x, '5', {} ); // $ExpectError
	range.assign( x, 5, {} ); // $ExpectError
	range.assign( x, true, {} ); // $ExpectError
	range.assign( x, false, {} ); // $ExpectError
	range.assign( x, null, {} ); // $ExpectError
	range.assign( x, void 0, {} ); // $ExpectError
	range.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range.assign( x, x, '5' ); // $ExpectError
	range.assign( x, x, true ); // $ExpectError
	range.assign( x, x, false ); // $ExpectError
	range.assign( x, x, null ); // $ExpectError
	range.assign( x, x, [] ); // $ExpectError
	range.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range.assign( x, x, { 'dims': '5' } ); // $ExpectError
	range.assign( x, x, { 'dims': 5 } ); // $ExpectError
	range.assign( x, x, { 'dims': true } ); // $ExpectError
	range.assign( x, x, { 'dims': false } ); // $ExpectError
	range.assign( x, x, { 'dims': null } ); // $ExpectError
	range.assign( x, x, { 'dims': {} } ); // $ExpectError
	range.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	range.assign(); // $ExpectError
	range.assign( x ); // $ExpectError
	range.assign( x, x, {}, {} ); // $ExpectError
}

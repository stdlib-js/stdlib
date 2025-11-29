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
import max = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max<number, number>( x ); // $ExpectType OutputArray<number>
	max<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	max( '5' ); // $ExpectError
	max( 5 ); // $ExpectError
	max( true ); // $ExpectError
	max( false ); // $ExpectError
	max( null ); // $ExpectError
	max( void 0 ); // $ExpectError
	max( {} ); // $ExpectError
	max( ( x: number ): number => x ); // $ExpectError

	max( '5', {} ); // $ExpectError
	max( 5, {} ); // $ExpectError
	max( true, {} ); // $ExpectError
	max( false, {} ); // $ExpectError
	max( null, {} ); // $ExpectError
	max( void 0, {} ); // $ExpectError
	max( {}, {} ); // $ExpectError
	max( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max( x, '5' ); // $ExpectError
	max( x, true ); // $ExpectError
	max( x, false ); // $ExpectError
	max( x, null ); // $ExpectError
	max( x, [] ); // $ExpectError
	max( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max( x, { 'dtype': '5' } ); // $ExpectError
	max( x, { 'dtype': 5 } ); // $ExpectError
	max( x, { 'dtype': true } ); // $ExpectError
	max( x, { 'dtype': false } ); // $ExpectError
	max( x, { 'dtype': null } ); // $ExpectError
	max( x, { 'dtype': [] } ); // $ExpectError
	max( x, { 'dtype': {} } ); // $ExpectError
	max( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max( x, { 'keepdims': '5' } ); // $ExpectError
	max( x, { 'keepdims': 5 } ); // $ExpectError
	max( x, { 'keepdims': null } ); // $ExpectError
	max( x, { 'keepdims': [] } ); // $ExpectError
	max( x, { 'keepdims': {} } ); // $ExpectError
	max( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max( x, { 'dims': '5' } ); // $ExpectError
	max( x, { 'dims': 5 } ); // $ExpectError
	max( x, { 'dims': true } ); // $ExpectError
	max( x, { 'dims': false } ); // $ExpectError
	max( x, { 'dims': null } ); // $ExpectError
	max( x, { 'dims': {} } ); // $ExpectError
	max( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max(); // $ExpectError
	max( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max.assign( x, x ); // $ExpectType float64ndarray
	max.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max.assign( '5', x ); // $ExpectError
	max.assign( 5, x ); // $ExpectError
	max.assign( true, x ); // $ExpectError
	max.assign( false, x ); // $ExpectError
	max.assign( null, x ); // $ExpectError
	max.assign( void 0, x ); // $ExpectError
	max.assign( {}, x ); // $ExpectError
	max.assign( ( x: number ): number => x, x ); // $ExpectError

	max.assign( '5', x, {} ); // $ExpectError
	max.assign( 5, x, {} ); // $ExpectError
	max.assign( true, x, {} ); // $ExpectError
	max.assign( false, x, {} ); // $ExpectError
	max.assign( null, x, {} ); // $ExpectError
	max.assign( void 0, x, {} ); // $ExpectError
	max.assign( {}, x, {} ); // $ExpectError
	max.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max.assign( x, '5' ); // $ExpectError
	max.assign( x, 5 ); // $ExpectError
	max.assign( x, true ); // $ExpectError
	max.assign( x, false ); // $ExpectError
	max.assign( x, null ); // $ExpectError
	max.assign( x, void 0 ); // $ExpectError
	max.assign( x, ( x: number ): number => x ); // $ExpectError

	max.assign( x, '5', {} ); // $ExpectError
	max.assign( x, 5, {} ); // $ExpectError
	max.assign( x, true, {} ); // $ExpectError
	max.assign( x, false, {} ); // $ExpectError
	max.assign( x, null, {} ); // $ExpectError
	max.assign( x, void 0, {} ); // $ExpectError
	max.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max.assign( x, x, '5' ); // $ExpectError
	max.assign( x, x, true ); // $ExpectError
	max.assign( x, x, false ); // $ExpectError
	max.assign( x, x, null ); // $ExpectError
	max.assign( x, x, [] ); // $ExpectError
	max.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max.assign( x, x, { 'dims': '5' } ); // $ExpectError
	max.assign( x, x, { 'dims': 5 } ); // $ExpectError
	max.assign( x, x, { 'dims': true } ); // $ExpectError
	max.assign( x, x, { 'dims': false } ); // $ExpectError
	max.assign( x, x, { 'dims': null } ); // $ExpectError
	max.assign( x, x, { 'dims': {} } ); // $ExpectError
	max.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	max.assign(); // $ExpectError
	max.assign( x ); // $ExpectError
	max.assign( x, x, {}, {} ); // $ExpectError
}

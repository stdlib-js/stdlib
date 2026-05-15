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
import meankbn = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn<number, number>( x ); // $ExpectType OutputArray<number>
	meankbn<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	meankbn( '5' ); // $ExpectError
	meankbn( 5 ); // $ExpectError
	meankbn( true ); // $ExpectError
	meankbn( false ); // $ExpectError
	meankbn( null ); // $ExpectError
	meankbn( void 0 ); // $ExpectError
	meankbn( {} ); // $ExpectError
	meankbn( ( x: number ): number => x ); // $ExpectError

	meankbn( '5', {} ); // $ExpectError
	meankbn( 5, {} ); // $ExpectError
	meankbn( true, {} ); // $ExpectError
	meankbn( false, {} ); // $ExpectError
	meankbn( null, {} ); // $ExpectError
	meankbn( void 0, {} ); // $ExpectError
	meankbn( {}, {} ); // $ExpectError
	meankbn( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn( x, '5' ); // $ExpectError
	meankbn( x, true ); // $ExpectError
	meankbn( x, false ); // $ExpectError
	meankbn( x, null ); // $ExpectError
	meankbn( x, [] ); // $ExpectError
	meankbn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn( x, { 'dtype': '5' } ); // $ExpectError
	meankbn( x, { 'dtype': 5 } ); // $ExpectError
	meankbn( x, { 'dtype': true } ); // $ExpectError
	meankbn( x, { 'dtype': false } ); // $ExpectError
	meankbn( x, { 'dtype': null } ); // $ExpectError
	meankbn( x, { 'dtype': [] } ); // $ExpectError
	meankbn( x, { 'dtype': {} } ); // $ExpectError
	meankbn( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn( x, { 'keepdims': '5' } ); // $ExpectError
	meankbn( x, { 'keepdims': 5 } ); // $ExpectError
	meankbn( x, { 'keepdims': null } ); // $ExpectError
	meankbn( x, { 'keepdims': [] } ); // $ExpectError
	meankbn( x, { 'keepdims': {} } ); // $ExpectError
	meankbn( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn( x, { 'dims': '5' } ); // $ExpectError
	meankbn( x, { 'dims': 5 } ); // $ExpectError
	meankbn( x, { 'dims': true } ); // $ExpectError
	meankbn( x, { 'dims': false } ); // $ExpectError
	meankbn( x, { 'dims': null } ); // $ExpectError
	meankbn( x, { 'dims': {} } ); // $ExpectError
	meankbn( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn(); // $ExpectError
	meankbn( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn.assign( x, x ); // $ExpectType float64ndarray
	meankbn.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn.assign( '5', x ); // $ExpectError
	meankbn.assign( 5, x ); // $ExpectError
	meankbn.assign( true, x ); // $ExpectError
	meankbn.assign( false, x ); // $ExpectError
	meankbn.assign( null, x ); // $ExpectError
	meankbn.assign( void 0, x ); // $ExpectError
	meankbn.assign( {}, x ); // $ExpectError
	meankbn.assign( ( x: number ): number => x, x ); // $ExpectError

	meankbn.assign( '5', x, {} ); // $ExpectError
	meankbn.assign( 5, x, {} ); // $ExpectError
	meankbn.assign( true, x, {} ); // $ExpectError
	meankbn.assign( false, x, {} ); // $ExpectError
	meankbn.assign( null, x, {} ); // $ExpectError
	meankbn.assign( void 0, x, {} ); // $ExpectError
	meankbn.assign( {}, x, {} ); // $ExpectError
	meankbn.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn.assign( x, '5' ); // $ExpectError
	meankbn.assign( x, 5 ); // $ExpectError
	meankbn.assign( x, true ); // $ExpectError
	meankbn.assign( x, false ); // $ExpectError
	meankbn.assign( x, null ); // $ExpectError
	meankbn.assign( x, void 0 ); // $ExpectError
	meankbn.assign( x, ( x: number ): number => x ); // $ExpectError

	meankbn.assign( x, '5', {} ); // $ExpectError
	meankbn.assign( x, 5, {} ); // $ExpectError
	meankbn.assign( x, true, {} ); // $ExpectError
	meankbn.assign( x, false, {} ); // $ExpectError
	meankbn.assign( x, null, {} ); // $ExpectError
	meankbn.assign( x, void 0, {} ); // $ExpectError
	meankbn.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn.assign( x, x, '5' ); // $ExpectError
	meankbn.assign( x, x, true ); // $ExpectError
	meankbn.assign( x, x, false ); // $ExpectError
	meankbn.assign( x, x, null ); // $ExpectError
	meankbn.assign( x, x, [] ); // $ExpectError
	meankbn.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn.assign( x, x, { 'dims': '5' } ); // $ExpectError
	meankbn.assign( x, x, { 'dims': 5 } ); // $ExpectError
	meankbn.assign( x, x, { 'dims': true } ); // $ExpectError
	meankbn.assign( x, x, { 'dims': false } ); // $ExpectError
	meankbn.assign( x, x, { 'dims': null } ); // $ExpectError
	meankbn.assign( x, x, { 'dims': {} } ); // $ExpectError
	meankbn.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn.assign(); // $ExpectError
	meankbn.assign( x ); // $ExpectError
	meankbn.assign( x, x, {}, {} ); // $ExpectError
}

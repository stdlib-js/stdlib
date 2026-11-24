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
import nanmin = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin<number, number>( x ); // $ExpectType OutputArray<number>
	nanmin<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmin( '5' ); // $ExpectError
	nanmin( 5 ); // $ExpectError
	nanmin( true ); // $ExpectError
	nanmin( false ); // $ExpectError
	nanmin( null ); // $ExpectError
	nanmin( void 0 ); // $ExpectError
	nanmin( {} ); // $ExpectError
	nanmin( ( x: number ): number => x ); // $ExpectError

	nanmin( '5', {} ); // $ExpectError
	nanmin( 5, {} ); // $ExpectError
	nanmin( true, {} ); // $ExpectError
	nanmin( false, {} ); // $ExpectError
	nanmin( null, {} ); // $ExpectError
	nanmin( void 0, {} ); // $ExpectError
	nanmin( {}, {} ); // $ExpectError
	nanmin( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin( x, '5' ); // $ExpectError
	nanmin( x, true ); // $ExpectError
	nanmin( x, false ); // $ExpectError
	nanmin( x, null ); // $ExpectError
	nanmin( x, [] ); // $ExpectError
	nanmin( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin( x, { 'dtype': '5' } ); // $ExpectError
	nanmin( x, { 'dtype': 5 } ); // $ExpectError
	nanmin( x, { 'dtype': true } ); // $ExpectError
	nanmin( x, { 'dtype': false } ); // $ExpectError
	nanmin( x, { 'dtype': null } ); // $ExpectError
	nanmin( x, { 'dtype': [] } ); // $ExpectError
	nanmin( x, { 'dtype': {} } ); // $ExpectError
	nanmin( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin( x, { 'keepdims': '5' } ); // $ExpectError
	nanmin( x, { 'keepdims': 5 } ); // $ExpectError
	nanmin( x, { 'keepdims': null } ); // $ExpectError
	nanmin( x, { 'keepdims': [] } ); // $ExpectError
	nanmin( x, { 'keepdims': {} } ); // $ExpectError
	nanmin( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin( x, { 'dims': '5' } ); // $ExpectError
	nanmin( x, { 'dims': 5 } ); // $ExpectError
	nanmin( x, { 'dims': true } ); // $ExpectError
	nanmin( x, { 'dims': false } ); // $ExpectError
	nanmin( x, { 'dims': null } ); // $ExpectError
	nanmin( x, { 'dims': {} } ); // $ExpectError
	nanmin( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin(); // $ExpectError
	nanmin( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin.assign( x, x ); // $ExpectType float64ndarray
	nanmin.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin.assign( '5', x ); // $ExpectError
	nanmin.assign( 5, x ); // $ExpectError
	nanmin.assign( true, x ); // $ExpectError
	nanmin.assign( false, x ); // $ExpectError
	nanmin.assign( null, x ); // $ExpectError
	nanmin.assign( void 0, x ); // $ExpectError
	nanmin.assign( {}, x ); // $ExpectError
	nanmin.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmin.assign( '5', x, {} ); // $ExpectError
	nanmin.assign( 5, x, {} ); // $ExpectError
	nanmin.assign( true, x, {} ); // $ExpectError
	nanmin.assign( false, x, {} ); // $ExpectError
	nanmin.assign( null, x, {} ); // $ExpectError
	nanmin.assign( void 0, x, {} ); // $ExpectError
	nanmin.assign( {}, x, {} ); // $ExpectError
	nanmin.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin.assign( x, '5' ); // $ExpectError
	nanmin.assign( x, 5 ); // $ExpectError
	nanmin.assign( x, true ); // $ExpectError
	nanmin.assign( x, false ); // $ExpectError
	nanmin.assign( x, null ); // $ExpectError
	nanmin.assign( x, void 0 ); // $ExpectError
	nanmin.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmin.assign( x, '5', {} ); // $ExpectError
	nanmin.assign( x, 5, {} ); // $ExpectError
	nanmin.assign( x, true, {} ); // $ExpectError
	nanmin.assign( x, false, {} ); // $ExpectError
	nanmin.assign( x, null, {} ); // $ExpectError
	nanmin.assign( x, void 0, {} ); // $ExpectError
	nanmin.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin.assign( x, x, '5' ); // $ExpectError
	nanmin.assign( x, x, true ); // $ExpectError
	nanmin.assign( x, x, false ); // $ExpectError
	nanmin.assign( x, x, null ); // $ExpectError
	nanmin.assign( x, x, [] ); // $ExpectError
	nanmin.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmin.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmin.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmin.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmin.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmin.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmin.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmin.assign(); // $ExpectError
	nanmin.assign( x ); // $ExpectError
	nanmin.assign( x, x, {}, {} ); // $ExpectError
}

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
import meanpw = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw<number, number>( x ); // $ExpectType OutputArray<number>
	meanpw<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	meanpw( '5' ); // $ExpectError
	meanpw( 5 ); // $ExpectError
	meanpw( true ); // $ExpectError
	meanpw( false ); // $ExpectError
	meanpw( null ); // $ExpectError
	meanpw( void 0 ); // $ExpectError
	meanpw( {} ); // $ExpectError
	meanpw( ( x: number ): number => x ); // $ExpectError

	meanpw( '5', {} ); // $ExpectError
	meanpw( 5, {} ); // $ExpectError
	meanpw( true, {} ); // $ExpectError
	meanpw( false, {} ); // $ExpectError
	meanpw( null, {} ); // $ExpectError
	meanpw( void 0, {} ); // $ExpectError
	meanpw( {}, {} ); // $ExpectError
	meanpw( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw( x, '5' ); // $ExpectError
	meanpw( x, true ); // $ExpectError
	meanpw( x, false ); // $ExpectError
	meanpw( x, null ); // $ExpectError
	meanpw( x, [] ); // $ExpectError
	meanpw( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw( x, { 'dtype': '5' } ); // $ExpectError
	meanpw( x, { 'dtype': 5 } ); // $ExpectError
	meanpw( x, { 'dtype': true } ); // $ExpectError
	meanpw( x, { 'dtype': false } ); // $ExpectError
	meanpw( x, { 'dtype': null } ); // $ExpectError
	meanpw( x, { 'dtype': [] } ); // $ExpectError
	meanpw( x, { 'dtype': {} } ); // $ExpectError
	meanpw( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw( x, { 'keepdims': '5' } ); // $ExpectError
	meanpw( x, { 'keepdims': 5 } ); // $ExpectError
	meanpw( x, { 'keepdims': null } ); // $ExpectError
	meanpw( x, { 'keepdims': [] } ); // $ExpectError
	meanpw( x, { 'keepdims': {} } ); // $ExpectError
	meanpw( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw( x, { 'dims': '5' } ); // $ExpectError
	meanpw( x, { 'dims': 5 } ); // $ExpectError
	meanpw( x, { 'dims': true } ); // $ExpectError
	meanpw( x, { 'dims': false } ); // $ExpectError
	meanpw( x, { 'dims': null } ); // $ExpectError
	meanpw( x, { 'dims': {} } ); // $ExpectError
	meanpw( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw(); // $ExpectError
	meanpw( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw.assign( x, x ); // $ExpectType float64ndarray
	meanpw.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw.assign( '5', x ); // $ExpectError
	meanpw.assign( 5, x ); // $ExpectError
	meanpw.assign( true, x ); // $ExpectError
	meanpw.assign( false, x ); // $ExpectError
	meanpw.assign( null, x ); // $ExpectError
	meanpw.assign( void 0, x ); // $ExpectError
	meanpw.assign( {}, x ); // $ExpectError
	meanpw.assign( ( x: number ): number => x, x ); // $ExpectError

	meanpw.assign( '5', x, {} ); // $ExpectError
	meanpw.assign( 5, x, {} ); // $ExpectError
	meanpw.assign( true, x, {} ); // $ExpectError
	meanpw.assign( false, x, {} ); // $ExpectError
	meanpw.assign( null, x, {} ); // $ExpectError
	meanpw.assign( void 0, x, {} ); // $ExpectError
	meanpw.assign( {}, x, {} ); // $ExpectError
	meanpw.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw.assign( x, '5' ); // $ExpectError
	meanpw.assign( x, 5 ); // $ExpectError
	meanpw.assign( x, true ); // $ExpectError
	meanpw.assign( x, false ); // $ExpectError
	meanpw.assign( x, null ); // $ExpectError
	meanpw.assign( x, void 0 ); // $ExpectError
	meanpw.assign( x, ( x: number ): number => x ); // $ExpectError

	meanpw.assign( x, '5', {} ); // $ExpectError
	meanpw.assign( x, 5, {} ); // $ExpectError
	meanpw.assign( x, true, {} ); // $ExpectError
	meanpw.assign( x, false, {} ); // $ExpectError
	meanpw.assign( x, null, {} ); // $ExpectError
	meanpw.assign( x, void 0, {} ); // $ExpectError
	meanpw.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw.assign( x, x, '5' ); // $ExpectError
	meanpw.assign( x, x, true ); // $ExpectError
	meanpw.assign( x, x, false ); // $ExpectError
	meanpw.assign( x, x, null ); // $ExpectError
	meanpw.assign( x, x, [] ); // $ExpectError
	meanpw.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw.assign( x, x, { 'dims': '5' } ); // $ExpectError
	meanpw.assign( x, x, { 'dims': 5 } ); // $ExpectError
	meanpw.assign( x, x, { 'dims': true } ); // $ExpectError
	meanpw.assign( x, x, { 'dims': false } ); // $ExpectError
	meanpw.assign( x, x, { 'dims': null } ); // $ExpectError
	meanpw.assign( x, x, { 'dims': {} } ); // $ExpectError
	meanpw.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpw.assign(); // $ExpectError
	meanpw.assign( x ); // $ExpectError
	meanpw.assign( x, x, {}, {} ); // $ExpectError
}

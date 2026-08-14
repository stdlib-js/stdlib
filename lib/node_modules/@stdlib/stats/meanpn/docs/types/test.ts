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
import meanpn = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn<number, number>( x ); // $ExpectType OutputArray<number>
	meanpn<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	meanpn( '5' ); // $ExpectError
	meanpn( 5 ); // $ExpectError
	meanpn( true ); // $ExpectError
	meanpn( false ); // $ExpectError
	meanpn( null ); // $ExpectError
	meanpn( void 0 ); // $ExpectError
	meanpn( {} ); // $ExpectError
	meanpn( ( x: number ): number => x ); // $ExpectError

	meanpn( '5', {} ); // $ExpectError
	meanpn( 5, {} ); // $ExpectError
	meanpn( true, {} ); // $ExpectError
	meanpn( false, {} ); // $ExpectError
	meanpn( null, {} ); // $ExpectError
	meanpn( void 0, {} ); // $ExpectError
	meanpn( {}, {} ); // $ExpectError
	meanpn( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn( x, '5' ); // $ExpectError
	meanpn( x, true ); // $ExpectError
	meanpn( x, false ); // $ExpectError
	meanpn( x, null ); // $ExpectError
	meanpn( x, [] ); // $ExpectError
	meanpn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn( x, { 'dtype': '5' } ); // $ExpectError
	meanpn( x, { 'dtype': 5 } ); // $ExpectError
	meanpn( x, { 'dtype': true } ); // $ExpectError
	meanpn( x, { 'dtype': false } ); // $ExpectError
	meanpn( x, { 'dtype': null } ); // $ExpectError
	meanpn( x, { 'dtype': [] } ); // $ExpectError
	meanpn( x, { 'dtype': {} } ); // $ExpectError
	meanpn( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn( x, { 'keepdims': '5' } ); // $ExpectError
	meanpn( x, { 'keepdims': 5 } ); // $ExpectError
	meanpn( x, { 'keepdims': null } ); // $ExpectError
	meanpn( x, { 'keepdims': [] } ); // $ExpectError
	meanpn( x, { 'keepdims': {} } ); // $ExpectError
	meanpn( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn( x, { 'dims': '5' } ); // $ExpectError
	meanpn( x, { 'dims': 5 } ); // $ExpectError
	meanpn( x, { 'dims': true } ); // $ExpectError
	meanpn( x, { 'dims': false } ); // $ExpectError
	meanpn( x, { 'dims': null } ); // $ExpectError
	meanpn( x, { 'dims': {} } ); // $ExpectError
	meanpn( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn(); // $ExpectError
	meanpn( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn.assign( x, x ); // $ExpectType float64ndarray
	meanpn.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn.assign( '5', x ); // $ExpectError
	meanpn.assign( 5, x ); // $ExpectError
	meanpn.assign( true, x ); // $ExpectError
	meanpn.assign( false, x ); // $ExpectError
	meanpn.assign( null, x ); // $ExpectError
	meanpn.assign( void 0, x ); // $ExpectError
	meanpn.assign( {}, x ); // $ExpectError
	meanpn.assign( ( x: number ): number => x, x ); // $ExpectError

	meanpn.assign( '5', x, {} ); // $ExpectError
	meanpn.assign( 5, x, {} ); // $ExpectError
	meanpn.assign( true, x, {} ); // $ExpectError
	meanpn.assign( false, x, {} ); // $ExpectError
	meanpn.assign( null, x, {} ); // $ExpectError
	meanpn.assign( void 0, x, {} ); // $ExpectError
	meanpn.assign( {}, x, {} ); // $ExpectError
	meanpn.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn.assign( x, '5' ); // $ExpectError
	meanpn.assign( x, 5 ); // $ExpectError
	meanpn.assign( x, true ); // $ExpectError
	meanpn.assign( x, false ); // $ExpectError
	meanpn.assign( x, null ); // $ExpectError
	meanpn.assign( x, void 0 ); // $ExpectError
	meanpn.assign( x, ( x: number ): number => x ); // $ExpectError

	meanpn.assign( x, '5', {} ); // $ExpectError
	meanpn.assign( x, 5, {} ); // $ExpectError
	meanpn.assign( x, true, {} ); // $ExpectError
	meanpn.assign( x, false, {} ); // $ExpectError
	meanpn.assign( x, null, {} ); // $ExpectError
	meanpn.assign( x, void 0, {} ); // $ExpectError
	meanpn.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn.assign( x, x, '5' ); // $ExpectError
	meanpn.assign( x, x, true ); // $ExpectError
	meanpn.assign( x, x, false ); // $ExpectError
	meanpn.assign( x, x, null ); // $ExpectError
	meanpn.assign( x, x, [] ); // $ExpectError
	meanpn.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn.assign( x, x, { 'dims': '5' } ); // $ExpectError
	meanpn.assign( x, x, { 'dims': 5 } ); // $ExpectError
	meanpn.assign( x, x, { 'dims': true } ); // $ExpectError
	meanpn.assign( x, x, { 'dims': false } ); // $ExpectError
	meanpn.assign( x, x, { 'dims': null } ); // $ExpectError
	meanpn.assign( x, x, { 'dims': {} } ); // $ExpectError
	meanpn.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanpn.assign(); // $ExpectError
	meanpn.assign( x ); // $ExpectError
	meanpn.assign( x, x, {}, {} ); // $ExpectError
}

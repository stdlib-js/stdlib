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
import nanmeanpn = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn<number, number>( x ); // $ExpectType OutputArray<number>
	nanmeanpn<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmeanpn( '5' ); // $ExpectError
	nanmeanpn( 5 ); // $ExpectError
	nanmeanpn( true ); // $ExpectError
	nanmeanpn( false ); // $ExpectError
	nanmeanpn( null ); // $ExpectError
	nanmeanpn( void 0 ); // $ExpectError
	nanmeanpn( {} ); // $ExpectError
	nanmeanpn( ( x: number ): number => x ); // $ExpectError

	nanmeanpn( '5', {} ); // $ExpectError
	nanmeanpn( 5, {} ); // $ExpectError
	nanmeanpn( true, {} ); // $ExpectError
	nanmeanpn( false, {} ); // $ExpectError
	nanmeanpn( null, {} ); // $ExpectError
	nanmeanpn( void 0, {} ); // $ExpectError
	nanmeanpn( {}, {} ); // $ExpectError
	nanmeanpn( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn( x, '5' ); // $ExpectError
	nanmeanpn( x, true ); // $ExpectError
	nanmeanpn( x, false ); // $ExpectError
	nanmeanpn( x, null ); // $ExpectError
	nanmeanpn( x, [] ); // $ExpectError
	nanmeanpn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn( x, { 'dtype': '5' } ); // $ExpectError
	nanmeanpn( x, { 'dtype': 5 } ); // $ExpectError
	nanmeanpn( x, { 'dtype': true } ); // $ExpectError
	nanmeanpn( x, { 'dtype': false } ); // $ExpectError
	nanmeanpn( x, { 'dtype': null } ); // $ExpectError
	nanmeanpn( x, { 'dtype': [] } ); // $ExpectError
	nanmeanpn( x, { 'dtype': {} } ); // $ExpectError
	nanmeanpn( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn( x, { 'keepdims': '5' } ); // $ExpectError
	nanmeanpn( x, { 'keepdims': 5 } ); // $ExpectError
	nanmeanpn( x, { 'keepdims': null } ); // $ExpectError
	nanmeanpn( x, { 'keepdims': [] } ); // $ExpectError
	nanmeanpn( x, { 'keepdims': {} } ); // $ExpectError
	nanmeanpn( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn( x, { 'dims': '5' } ); // $ExpectError
	nanmeanpn( x, { 'dims': 5 } ); // $ExpectError
	nanmeanpn( x, { 'dims': true } ); // $ExpectError
	nanmeanpn( x, { 'dims': false } ); // $ExpectError
	nanmeanpn( x, { 'dims': null } ); // $ExpectError
	nanmeanpn( x, { 'dims': {} } ); // $ExpectError
	nanmeanpn( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn(); // $ExpectError
	nanmeanpn( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn.assign( x, x ); // $ExpectType float64ndarray
	nanmeanpn.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn.assign( '5', x ); // $ExpectError
	nanmeanpn.assign( 5, x ); // $ExpectError
	nanmeanpn.assign( true, x ); // $ExpectError
	nanmeanpn.assign( false, x ); // $ExpectError
	nanmeanpn.assign( null, x ); // $ExpectError
	nanmeanpn.assign( void 0, x ); // $ExpectError
	nanmeanpn.assign( {}, x ); // $ExpectError
	nanmeanpn.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmeanpn.assign( '5', x, {} ); // $ExpectError
	nanmeanpn.assign( 5, x, {} ); // $ExpectError
	nanmeanpn.assign( true, x, {} ); // $ExpectError
	nanmeanpn.assign( false, x, {} ); // $ExpectError
	nanmeanpn.assign( null, x, {} ); // $ExpectError
	nanmeanpn.assign( void 0, x, {} ); // $ExpectError
	nanmeanpn.assign( {}, x, {} ); // $ExpectError
	nanmeanpn.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn.assign( x, '5' ); // $ExpectError
	nanmeanpn.assign( x, 5 ); // $ExpectError
	nanmeanpn.assign( x, true ); // $ExpectError
	nanmeanpn.assign( x, false ); // $ExpectError
	nanmeanpn.assign( x, null ); // $ExpectError
	nanmeanpn.assign( x, void 0 ); // $ExpectError
	nanmeanpn.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmeanpn.assign( x, '5', {} ); // $ExpectError
	nanmeanpn.assign( x, 5, {} ); // $ExpectError
	nanmeanpn.assign( x, true, {} ); // $ExpectError
	nanmeanpn.assign( x, false, {} ); // $ExpectError
	nanmeanpn.assign( x, null, {} ); // $ExpectError
	nanmeanpn.assign( x, void 0, {} ); // $ExpectError
	nanmeanpn.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn.assign( x, x, '5' ); // $ExpectError
	nanmeanpn.assign( x, x, true ); // $ExpectError
	nanmeanpn.assign( x, x, false ); // $ExpectError
	nanmeanpn.assign( x, x, null ); // $ExpectError
	nanmeanpn.assign( x, x, [] ); // $ExpectError
	nanmeanpn.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmeanpn.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmeanpn.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmeanpn.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmeanpn.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmeanpn.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmeanpn.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanpn.assign(); // $ExpectError
	nanmeanpn.assign( x ); // $ExpectError
	nanmeanpn.assign( x, x, {}, {} ); // $ExpectError
}

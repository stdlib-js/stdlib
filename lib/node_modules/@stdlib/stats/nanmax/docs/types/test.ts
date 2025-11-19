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
import nanmax = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax<number, number>( x ); // $ExpectType OutputArray<number>
	nanmax<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmax( '5' ); // $ExpectError
	nanmax( 5 ); // $ExpectError
	nanmax( true ); // $ExpectError
	nanmax( false ); // $ExpectError
	nanmax( null ); // $ExpectError
	nanmax( void 0 ); // $ExpectError
	nanmax( {} ); // $ExpectError
	nanmax( ( x: number ): number => x ); // $ExpectError

	nanmax( '5', {} ); // $ExpectError
	nanmax( 5, {} ); // $ExpectError
	nanmax( true, {} ); // $ExpectError
	nanmax( false, {} ); // $ExpectError
	nanmax( null, {} ); // $ExpectError
	nanmax( void 0, {} ); // $ExpectError
	nanmax( {}, {} ); // $ExpectError
	nanmax( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax( x, '5' ); // $ExpectError
	nanmax( x, true ); // $ExpectError
	nanmax( x, false ); // $ExpectError
	nanmax( x, null ); // $ExpectError
	nanmax( x, [] ); // $ExpectError
	nanmax( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax( x, { 'dtype': '5' } ); // $ExpectError
	nanmax( x, { 'dtype': 5 } ); // $ExpectError
	nanmax( x, { 'dtype': true } ); // $ExpectError
	nanmax( x, { 'dtype': false } ); // $ExpectError
	nanmax( x, { 'dtype': null } ); // $ExpectError
	nanmax( x, { 'dtype': [] } ); // $ExpectError
	nanmax( x, { 'dtype': {} } ); // $ExpectError
	nanmax( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax( x, { 'keepdims': '5' } ); // $ExpectError
	nanmax( x, { 'keepdims': 5 } ); // $ExpectError
	nanmax( x, { 'keepdims': null } ); // $ExpectError
	nanmax( x, { 'keepdims': [] } ); // $ExpectError
	nanmax( x, { 'keepdims': {} } ); // $ExpectError
	nanmax( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax( x, { 'dims': '5' } ); // $ExpectError
	nanmax( x, { 'dims': 5 } ); // $ExpectError
	nanmax( x, { 'dims': true } ); // $ExpectError
	nanmax( x, { 'dims': false } ); // $ExpectError
	nanmax( x, { 'dims': null } ); // $ExpectError
	nanmax( x, { 'dims': {} } ); // $ExpectError
	nanmax( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax(); // $ExpectError
	nanmax( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax.assign( x, x ); // $ExpectType float64ndarray
	nanmax.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax.assign( '5', x ); // $ExpectError
	nanmax.assign( 5, x ); // $ExpectError
	nanmax.assign( true, x ); // $ExpectError
	nanmax.assign( false, x ); // $ExpectError
	nanmax.assign( null, x ); // $ExpectError
	nanmax.assign( void 0, x ); // $ExpectError
	nanmax.assign( {}, x ); // $ExpectError
	nanmax.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmax.assign( '5', x, {} ); // $ExpectError
	nanmax.assign( 5, x, {} ); // $ExpectError
	nanmax.assign( true, x, {} ); // $ExpectError
	nanmax.assign( false, x, {} ); // $ExpectError
	nanmax.assign( null, x, {} ); // $ExpectError
	nanmax.assign( void 0, x, {} ); // $ExpectError
	nanmax.assign( {}, x, {} ); // $ExpectError
	nanmax.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax.assign( x, '5' ); // $ExpectError
	nanmax.assign( x, 5 ); // $ExpectError
	nanmax.assign( x, true ); // $ExpectError
	nanmax.assign( x, false ); // $ExpectError
	nanmax.assign( x, null ); // $ExpectError
	nanmax.assign( x, void 0 ); // $ExpectError
	nanmax.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmax.assign( x, '5', {} ); // $ExpectError
	nanmax.assign( x, 5, {} ); // $ExpectError
	nanmax.assign( x, true, {} ); // $ExpectError
	nanmax.assign( x, false, {} ); // $ExpectError
	nanmax.assign( x, null, {} ); // $ExpectError
	nanmax.assign( x, void 0, {} ); // $ExpectError
	nanmax.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax.assign( x, x, '5' ); // $ExpectError
	nanmax.assign( x, x, true ); // $ExpectError
	nanmax.assign( x, x, false ); // $ExpectError
	nanmax.assign( x, x, null ); // $ExpectError
	nanmax.assign( x, x, [] ); // $ExpectError
	nanmax.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmax.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmax.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmax.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmax.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmax.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmax.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmax.assign(); // $ExpectError
	nanmax.assign( x ); // $ExpectError
	nanmax.assign( x, x, {}, {} ); // $ExpectError
}

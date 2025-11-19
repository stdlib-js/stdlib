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
import nanmean = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean<number, number>( x ); // $ExpectType OutputArray<number>
	nanmean<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmean( '5' ); // $ExpectError
	nanmean( 5 ); // $ExpectError
	nanmean( true ); // $ExpectError
	nanmean( false ); // $ExpectError
	nanmean( null ); // $ExpectError
	nanmean( void 0 ); // $ExpectError
	nanmean( {} ); // $ExpectError
	nanmean( ( x: number ): number => x ); // $ExpectError

	nanmean( '5', {} ); // $ExpectError
	nanmean( 5, {} ); // $ExpectError
	nanmean( true, {} ); // $ExpectError
	nanmean( false, {} ); // $ExpectError
	nanmean( null, {} ); // $ExpectError
	nanmean( void 0, {} ); // $ExpectError
	nanmean( {}, {} ); // $ExpectError
	nanmean( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean( x, '5' ); // $ExpectError
	nanmean( x, true ); // $ExpectError
	nanmean( x, false ); // $ExpectError
	nanmean( x, null ); // $ExpectError
	nanmean( x, [] ); // $ExpectError
	nanmean( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean( x, { 'dtype': '5' } ); // $ExpectError
	nanmean( x, { 'dtype': 5 } ); // $ExpectError
	nanmean( x, { 'dtype': true } ); // $ExpectError
	nanmean( x, { 'dtype': false } ); // $ExpectError
	nanmean( x, { 'dtype': null } ); // $ExpectError
	nanmean( x, { 'dtype': [] } ); // $ExpectError
	nanmean( x, { 'dtype': {} } ); // $ExpectError
	nanmean( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean( x, { 'keepdims': '5' } ); // $ExpectError
	nanmean( x, { 'keepdims': 5 } ); // $ExpectError
	nanmean( x, { 'keepdims': null } ); // $ExpectError
	nanmean( x, { 'keepdims': [] } ); // $ExpectError
	nanmean( x, { 'keepdims': {} } ); // $ExpectError
	nanmean( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean( x, { 'dims': '5' } ); // $ExpectError
	nanmean( x, { 'dims': 5 } ); // $ExpectError
	nanmean( x, { 'dims': true } ); // $ExpectError
	nanmean( x, { 'dims': false } ); // $ExpectError
	nanmean( x, { 'dims': null } ); // $ExpectError
	nanmean( x, { 'dims': {} } ); // $ExpectError
	nanmean( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean(); // $ExpectError
	nanmean( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean.assign( x, x ); // $ExpectType float64ndarray
	nanmean.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean.assign( '5', x ); // $ExpectError
	nanmean.assign( 5, x ); // $ExpectError
	nanmean.assign( true, x ); // $ExpectError
	nanmean.assign( false, x ); // $ExpectError
	nanmean.assign( null, x ); // $ExpectError
	nanmean.assign( void 0, x ); // $ExpectError
	nanmean.assign( {}, x ); // $ExpectError
	nanmean.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmean.assign( '5', x, {} ); // $ExpectError
	nanmean.assign( 5, x, {} ); // $ExpectError
	nanmean.assign( true, x, {} ); // $ExpectError
	nanmean.assign( false, x, {} ); // $ExpectError
	nanmean.assign( null, x, {} ); // $ExpectError
	nanmean.assign( void 0, x, {} ); // $ExpectError
	nanmean.assign( {}, x, {} ); // $ExpectError
	nanmean.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean.assign( x, '5' ); // $ExpectError
	nanmean.assign( x, 5 ); // $ExpectError
	nanmean.assign( x, true ); // $ExpectError
	nanmean.assign( x, false ); // $ExpectError
	nanmean.assign( x, null ); // $ExpectError
	nanmean.assign( x, void 0 ); // $ExpectError
	nanmean.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmean.assign( x, '5', {} ); // $ExpectError
	nanmean.assign( x, 5, {} ); // $ExpectError
	nanmean.assign( x, true, {} ); // $ExpectError
	nanmean.assign( x, false, {} ); // $ExpectError
	nanmean.assign( x, null, {} ); // $ExpectError
	nanmean.assign( x, void 0, {} ); // $ExpectError
	nanmean.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean.assign( x, x, '5' ); // $ExpectError
	nanmean.assign( x, x, true ); // $ExpectError
	nanmean.assign( x, x, false ); // $ExpectError
	nanmean.assign( x, x, null ); // $ExpectError
	nanmean.assign( x, x, [] ); // $ExpectError
	nanmean.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmean.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmean.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmean.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmean.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmean.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmean.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmean.assign(); // $ExpectError
	nanmean.assign( x ); // $ExpectError
	nanmean.assign( x, x, {}, {} ); // $ExpectError
}

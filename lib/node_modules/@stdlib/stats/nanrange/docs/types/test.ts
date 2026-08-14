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
import nanrange = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange<number, number>( x ); // $ExpectType OutputArray<number>
	nanrange<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanrange( '5' ); // $ExpectError
	nanrange( 5 ); // $ExpectError
	nanrange( true ); // $ExpectError
	nanrange( false ); // $ExpectError
	nanrange( null ); // $ExpectError
	nanrange( void 0 ); // $ExpectError
	nanrange( {} ); // $ExpectError
	nanrange( ( x: number ): number => x ); // $ExpectError

	nanrange( '5', {} ); // $ExpectError
	nanrange( 5, {} ); // $ExpectError
	nanrange( true, {} ); // $ExpectError
	nanrange( false, {} ); // $ExpectError
	nanrange( null, {} ); // $ExpectError
	nanrange( void 0, {} ); // $ExpectError
	nanrange( {}, {} ); // $ExpectError
	nanrange( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange( x, '5' ); // $ExpectError
	nanrange( x, true ); // $ExpectError
	nanrange( x, false ); // $ExpectError
	nanrange( x, null ); // $ExpectError
	nanrange( x, [] ); // $ExpectError
	nanrange( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange( x, { 'dtype': '5' } ); // $ExpectError
	nanrange( x, { 'dtype': 5 } ); // $ExpectError
	nanrange( x, { 'dtype': true } ); // $ExpectError
	nanrange( x, { 'dtype': false } ); // $ExpectError
	nanrange( x, { 'dtype': null } ); // $ExpectError
	nanrange( x, { 'dtype': [] } ); // $ExpectError
	nanrange( x, { 'dtype': {} } ); // $ExpectError
	nanrange( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange( x, { 'keepdims': '5' } ); // $ExpectError
	nanrange( x, { 'keepdims': 5 } ); // $ExpectError
	nanrange( x, { 'keepdims': null } ); // $ExpectError
	nanrange( x, { 'keepdims': [] } ); // $ExpectError
	nanrange( x, { 'keepdims': {} } ); // $ExpectError
	nanrange( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange( x, { 'dims': '5' } ); // $ExpectError
	nanrange( x, { 'dims': 5 } ); // $ExpectError
	nanrange( x, { 'dims': true } ); // $ExpectError
	nanrange( x, { 'dims': false } ); // $ExpectError
	nanrange( x, { 'dims': null } ); // $ExpectError
	nanrange( x, { 'dims': {} } ); // $ExpectError
	nanrange( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange(); // $ExpectError
	nanrange( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange.assign( x, x ); // $ExpectType float64ndarray
	nanrange.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange.assign( '5', x ); // $ExpectError
	nanrange.assign( 5, x ); // $ExpectError
	nanrange.assign( true, x ); // $ExpectError
	nanrange.assign( false, x ); // $ExpectError
	nanrange.assign( null, x ); // $ExpectError
	nanrange.assign( void 0, x ); // $ExpectError
	nanrange.assign( {}, x ); // $ExpectError
	nanrange.assign( ( x: number ): number => x, x ); // $ExpectError

	nanrange.assign( '5', x, {} ); // $ExpectError
	nanrange.assign( 5, x, {} ); // $ExpectError
	nanrange.assign( true, x, {} ); // $ExpectError
	nanrange.assign( false, x, {} ); // $ExpectError
	nanrange.assign( null, x, {} ); // $ExpectError
	nanrange.assign( void 0, x, {} ); // $ExpectError
	nanrange.assign( {}, x, {} ); // $ExpectError
	nanrange.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange.assign( x, '5' ); // $ExpectError
	nanrange.assign( x, 5 ); // $ExpectError
	nanrange.assign( x, true ); // $ExpectError
	nanrange.assign( x, false ); // $ExpectError
	nanrange.assign( x, null ); // $ExpectError
	nanrange.assign( x, void 0 ); // $ExpectError
	nanrange.assign( x, ( x: number ): number => x ); // $ExpectError

	nanrange.assign( x, '5', {} ); // $ExpectError
	nanrange.assign( x, 5, {} ); // $ExpectError
	nanrange.assign( x, true, {} ); // $ExpectError
	nanrange.assign( x, false, {} ); // $ExpectError
	nanrange.assign( x, null, {} ); // $ExpectError
	nanrange.assign( x, void 0, {} ); // $ExpectError
	nanrange.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange.assign( x, x, '5' ); // $ExpectError
	nanrange.assign( x, x, true ); // $ExpectError
	nanrange.assign( x, x, false ); // $ExpectError
	nanrange.assign( x, x, null ); // $ExpectError
	nanrange.assign( x, x, [] ); // $ExpectError
	nanrange.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanrange.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanrange.assign( x, x, { 'dims': true } ); // $ExpectError
	nanrange.assign( x, x, { 'dims': false } ); // $ExpectError
	nanrange.assign( x, x, { 'dims': null } ); // $ExpectError
	nanrange.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanrange.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanrange.assign(); // $ExpectError
	nanrange.assign( x ); // $ExpectError
	nanrange.assign( x, x, {}, {} ); // $ExpectError
}

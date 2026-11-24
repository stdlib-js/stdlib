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
import midrange = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange<number, number>( x ); // $ExpectType OutputArray<number>
	midrange<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	midrange( '5' ); // $ExpectError
	midrange( 5 ); // $ExpectError
	midrange( true ); // $ExpectError
	midrange( false ); // $ExpectError
	midrange( null ); // $ExpectError
	midrange( void 0 ); // $ExpectError
	midrange( {} ); // $ExpectError
	midrange( ( x: number ): number => x ); // $ExpectError

	midrange( '5', {} ); // $ExpectError
	midrange( 5, {} ); // $ExpectError
	midrange( true, {} ); // $ExpectError
	midrange( false, {} ); // $ExpectError
	midrange( null, {} ); // $ExpectError
	midrange( void 0, {} ); // $ExpectError
	midrange( {}, {} ); // $ExpectError
	midrange( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange( x, '5' ); // $ExpectError
	midrange( x, true ); // $ExpectError
	midrange( x, false ); // $ExpectError
	midrange( x, null ); // $ExpectError
	midrange( x, [] ); // $ExpectError
	midrange( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange( x, { 'dtype': '5' } ); // $ExpectError
	midrange( x, { 'dtype': 5 } ); // $ExpectError
	midrange( x, { 'dtype': true } ); // $ExpectError
	midrange( x, { 'dtype': false } ); // $ExpectError
	midrange( x, { 'dtype': null } ); // $ExpectError
	midrange( x, { 'dtype': [] } ); // $ExpectError
	midrange( x, { 'dtype': {} } ); // $ExpectError
	midrange( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange( x, { 'keepdims': '5' } ); // $ExpectError
	midrange( x, { 'keepdims': 5 } ); // $ExpectError
	midrange( x, { 'keepdims': null } ); // $ExpectError
	midrange( x, { 'keepdims': [] } ); // $ExpectError
	midrange( x, { 'keepdims': {} } ); // $ExpectError
	midrange( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange( x, { 'dims': '5' } ); // $ExpectError
	midrange( x, { 'dims': 5 } ); // $ExpectError
	midrange( x, { 'dims': true } ); // $ExpectError
	midrange( x, { 'dims': false } ); // $ExpectError
	midrange( x, { 'dims': null } ); // $ExpectError
	midrange( x, { 'dims': {} } ); // $ExpectError
	midrange( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange(); // $ExpectError
	midrange( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange.assign( x, x ); // $ExpectType float64ndarray
	midrange.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange.assign( '5', x ); // $ExpectError
	midrange.assign( 5, x ); // $ExpectError
	midrange.assign( true, x ); // $ExpectError
	midrange.assign( false, x ); // $ExpectError
	midrange.assign( null, x ); // $ExpectError
	midrange.assign( void 0, x ); // $ExpectError
	midrange.assign( {}, x ); // $ExpectError
	midrange.assign( ( x: number ): number => x, x ); // $ExpectError

	midrange.assign( '5', x, {} ); // $ExpectError
	midrange.assign( 5, x, {} ); // $ExpectError
	midrange.assign( true, x, {} ); // $ExpectError
	midrange.assign( false, x, {} ); // $ExpectError
	midrange.assign( null, x, {} ); // $ExpectError
	midrange.assign( void 0, x, {} ); // $ExpectError
	midrange.assign( {}, x, {} ); // $ExpectError
	midrange.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange.assign( x, '5' ); // $ExpectError
	midrange.assign( x, 5 ); // $ExpectError
	midrange.assign( x, true ); // $ExpectError
	midrange.assign( x, false ); // $ExpectError
	midrange.assign( x, null ); // $ExpectError
	midrange.assign( x, void 0 ); // $ExpectError
	midrange.assign( x, ( x: number ): number => x ); // $ExpectError

	midrange.assign( x, '5', {} ); // $ExpectError
	midrange.assign( x, 5, {} ); // $ExpectError
	midrange.assign( x, true, {} ); // $ExpectError
	midrange.assign( x, false, {} ); // $ExpectError
	midrange.assign( x, null, {} ); // $ExpectError
	midrange.assign( x, void 0, {} ); // $ExpectError
	midrange.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange.assign( x, x, '5' ); // $ExpectError
	midrange.assign( x, x, true ); // $ExpectError
	midrange.assign( x, x, false ); // $ExpectError
	midrange.assign( x, x, null ); // $ExpectError
	midrange.assign( x, x, [] ); // $ExpectError
	midrange.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange.assign( x, x, { 'dims': '5' } ); // $ExpectError
	midrange.assign( x, x, { 'dims': 5 } ); // $ExpectError
	midrange.assign( x, x, { 'dims': true } ); // $ExpectError
	midrange.assign( x, x, { 'dims': false } ); // $ExpectError
	midrange.assign( x, x, { 'dims': null } ); // $ExpectError
	midrange.assign( x, x, { 'dims': {} } ); // $ExpectError
	midrange.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrange.assign(); // $ExpectError
	midrange.assign( x ); // $ExpectError
	midrange.assign( x, x, {}, {} ); // $ExpectError
}

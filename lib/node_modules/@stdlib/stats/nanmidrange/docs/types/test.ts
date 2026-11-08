/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
import nanmidrange = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange<number, number>( x ); // $ExpectType OutputArray<number>
	nanmidrange<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmidrange( '5' ); // $ExpectError
	nanmidrange( 5 ); // $ExpectError
	nanmidrange( true ); // $ExpectError
	nanmidrange( false ); // $ExpectError
	nanmidrange( null ); // $ExpectError
	nanmidrange( void 0 ); // $ExpectError
	nanmidrange( {} ); // $ExpectError
	nanmidrange( ( x: number ): number => x ); // $ExpectError

	nanmidrange( '5', {} ); // $ExpectError
	nanmidrange( 5, {} ); // $ExpectError
	nanmidrange( true, {} ); // $ExpectError
	nanmidrange( false, {} ); // $ExpectError
	nanmidrange( null, {} ); // $ExpectError
	nanmidrange( void 0, {} ); // $ExpectError
	nanmidrange( {}, {} ); // $ExpectError
	nanmidrange( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange( x, '5' ); // $ExpectError
	nanmidrange( x, true ); // $ExpectError
	nanmidrange( x, false ); // $ExpectError
	nanmidrange( x, null ); // $ExpectError
	nanmidrange( x, [] ); // $ExpectError
	nanmidrange( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange( x, { 'dtype': '5' } ); // $ExpectError
	nanmidrange( x, { 'dtype': 5 } ); // $ExpectError
	nanmidrange( x, { 'dtype': true } ); // $ExpectError
	nanmidrange( x, { 'dtype': false } ); // $ExpectError
	nanmidrange( x, { 'dtype': null } ); // $ExpectError
	nanmidrange( x, { 'dtype': [] } ); // $ExpectError
	nanmidrange( x, { 'dtype': {} } ); // $ExpectError
	nanmidrange( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange( x, { 'keepdims': '5' } ); // $ExpectError
	nanmidrange( x, { 'keepdims': 5 } ); // $ExpectError
	nanmidrange( x, { 'keepdims': null } ); // $ExpectError
	nanmidrange( x, { 'keepdims': [] } ); // $ExpectError
	nanmidrange( x, { 'keepdims': {} } ); // $ExpectError
	nanmidrange( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange( x, { 'dims': '5' } ); // $ExpectError
	nanmidrange( x, { 'dims': 5 } ); // $ExpectError
	nanmidrange( x, { 'dims': true } ); // $ExpectError
	nanmidrange( x, { 'dims': false } ); // $ExpectError
	nanmidrange( x, { 'dims': null } ); // $ExpectError
	nanmidrange( x, { 'dims': {} } ); // $ExpectError
	nanmidrange( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange(); // $ExpectError
	nanmidrange( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange.assign( x, x ); // $ExpectType float64ndarray
	nanmidrange.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange.assign( '5', x ); // $ExpectError
	nanmidrange.assign( 5, x ); // $ExpectError
	nanmidrange.assign( true, x ); // $ExpectError
	nanmidrange.assign( false, x ); // $ExpectError
	nanmidrange.assign( null, x ); // $ExpectError
	nanmidrange.assign( void 0, x ); // $ExpectError
	nanmidrange.assign( {}, x ); // $ExpectError
	nanmidrange.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmidrange.assign( '5', x, {} ); // $ExpectError
	nanmidrange.assign( 5, x, {} ); // $ExpectError
	nanmidrange.assign( true, x, {} ); // $ExpectError
	nanmidrange.assign( false, x, {} ); // $ExpectError
	nanmidrange.assign( null, x, {} ); // $ExpectError
	nanmidrange.assign( void 0, x, {} ); // $ExpectError
	nanmidrange.assign( {}, x, {} ); // $ExpectError
	nanmidrange.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange.assign( x, '5' ); // $ExpectError
	nanmidrange.assign( x, 5 ); // $ExpectError
	nanmidrange.assign( x, true ); // $ExpectError
	nanmidrange.assign( x, false ); // $ExpectError
	nanmidrange.assign( x, null ); // $ExpectError
	nanmidrange.assign( x, void 0 ); // $ExpectError
	nanmidrange.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmidrange.assign( x, '5', {} ); // $ExpectError
	nanmidrange.assign( x, 5, {} ); // $ExpectError
	nanmidrange.assign( x, true, {} ); // $ExpectError
	nanmidrange.assign( x, false, {} ); // $ExpectError
	nanmidrange.assign( x, null, {} ); // $ExpectError
	nanmidrange.assign( x, void 0, {} ); // $ExpectError
	nanmidrange.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange.assign( x, x, '5' ); // $ExpectError
	nanmidrange.assign( x, x, true ); // $ExpectError
	nanmidrange.assign( x, x, false ); // $ExpectError
	nanmidrange.assign( x, x, null ); // $ExpectError
	nanmidrange.assign( x, x, [] ); // $ExpectError
	nanmidrange.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmidrange.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmidrange.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmidrange.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmidrange.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmidrange.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmidrange.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrange.assign(); // $ExpectError
	nanmidrange.assign( x ); // $ExpectError
	nanmidrange.assign( x, x, {}, {} ); // $ExpectError
}

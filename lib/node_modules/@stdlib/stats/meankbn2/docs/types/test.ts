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
import meankbn2 = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2<number, number>( x ); // $ExpectType OutputArray<number>
	meankbn2<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	meankbn2( '5' ); // $ExpectError
	meankbn2( 5 ); // $ExpectError
	meankbn2( true ); // $ExpectError
	meankbn2( false ); // $ExpectError
	meankbn2( null ); // $ExpectError
	meankbn2( void 0 ); // $ExpectError
	meankbn2( {} ); // $ExpectError
	meankbn2( ( x: number ): number => x ); // $ExpectError

	meankbn2( '5', {} ); // $ExpectError
	meankbn2( 5, {} ); // $ExpectError
	meankbn2( true, {} ); // $ExpectError
	meankbn2( false, {} ); // $ExpectError
	meankbn2( null, {} ); // $ExpectError
	meankbn2( void 0, {} ); // $ExpectError
	meankbn2( {}, {} ); // $ExpectError
	meankbn2( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2( x, '5' ); // $ExpectError
	meankbn2( x, true ); // $ExpectError
	meankbn2( x, false ); // $ExpectError
	meankbn2( x, null ); // $ExpectError
	meankbn2( x, [] ); // $ExpectError
	meankbn2( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2( x, { 'dtype': '5' } ); // $ExpectError
	meankbn2( x, { 'dtype': 5 } ); // $ExpectError
	meankbn2( x, { 'dtype': true } ); // $ExpectError
	meankbn2( x, { 'dtype': false } ); // $ExpectError
	meankbn2( x, { 'dtype': null } ); // $ExpectError
	meankbn2( x, { 'dtype': [] } ); // $ExpectError
	meankbn2( x, { 'dtype': {} } ); // $ExpectError
	meankbn2( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2( x, { 'keepdims': '5' } ); // $ExpectError
	meankbn2( x, { 'keepdims': 5 } ); // $ExpectError
	meankbn2( x, { 'keepdims': null } ); // $ExpectError
	meankbn2( x, { 'keepdims': [] } ); // $ExpectError
	meankbn2( x, { 'keepdims': {} } ); // $ExpectError
	meankbn2( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2( x, { 'dims': '5' } ); // $ExpectError
	meankbn2( x, { 'dims': 5 } ); // $ExpectError
	meankbn2( x, { 'dims': true } ); // $ExpectError
	meankbn2( x, { 'dims': false } ); // $ExpectError
	meankbn2( x, { 'dims': null } ); // $ExpectError
	meankbn2( x, { 'dims': {} } ); // $ExpectError
	meankbn2( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2(); // $ExpectError
	meankbn2( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2.assign( x, x ); // $ExpectType float64ndarray
	meankbn2.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2.assign( '5', x ); // $ExpectError
	meankbn2.assign( 5, x ); // $ExpectError
	meankbn2.assign( true, x ); // $ExpectError
	meankbn2.assign( false, x ); // $ExpectError
	meankbn2.assign( null, x ); // $ExpectError
	meankbn2.assign( void 0, x ); // $ExpectError
	meankbn2.assign( {}, x ); // $ExpectError
	meankbn2.assign( ( x: number ): number => x, x ); // $ExpectError

	meankbn2.assign( '5', x, {} ); // $ExpectError
	meankbn2.assign( 5, x, {} ); // $ExpectError
	meankbn2.assign( true, x, {} ); // $ExpectError
	meankbn2.assign( false, x, {} ); // $ExpectError
	meankbn2.assign( null, x, {} ); // $ExpectError
	meankbn2.assign( void 0, x, {} ); // $ExpectError
	meankbn2.assign( {}, x, {} ); // $ExpectError
	meankbn2.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2.assign( x, '5' ); // $ExpectError
	meankbn2.assign( x, 5 ); // $ExpectError
	meankbn2.assign( x, true ); // $ExpectError
	meankbn2.assign( x, false ); // $ExpectError
	meankbn2.assign( x, null ); // $ExpectError
	meankbn2.assign( x, void 0 ); // $ExpectError
	meankbn2.assign( x, ( x: number ): number => x ); // $ExpectError

	meankbn2.assign( x, '5', {} ); // $ExpectError
	meankbn2.assign( x, 5, {} ); // $ExpectError
	meankbn2.assign( x, true, {} ); // $ExpectError
	meankbn2.assign( x, false, {} ); // $ExpectError
	meankbn2.assign( x, null, {} ); // $ExpectError
	meankbn2.assign( x, void 0, {} ); // $ExpectError
	meankbn2.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2.assign( x, x, '5' ); // $ExpectError
	meankbn2.assign( x, x, 5 ); // $ExpectError
	meankbn2.assign( x, x, true ); // $ExpectError
	meankbn2.assign( x, x, false ); // $ExpectError
	meankbn2.assign( x, x, null ); // $ExpectError
	meankbn2.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2.assign( x, x, { 'dims': '5' } ); // $ExpectError
	meankbn2.assign( x, x, { 'dims': 5 } ); // $ExpectError
	meankbn2.assign( x, x, { 'dims': true } ); // $ExpectError
	meankbn2.assign( x, x, { 'dims': false } ); // $ExpectError
	meankbn2.assign( x, x, { 'dims': null } ); // $ExpectError
	meankbn2.assign( x, x, { 'dims': {} } ); // $ExpectError
	meankbn2.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meankbn2.assign(); // $ExpectError
	meankbn2.assign( x ); // $ExpectError
	meankbn2.assign( x, x, {}, {} ); // $ExpectError
}

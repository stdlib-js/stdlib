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
import rangeabs = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs<number, number>( x ); // $ExpectType OutputArray<number>
	rangeabs<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	rangeabs( '5' ); // $ExpectError
	rangeabs( 5 ); // $ExpectError
	rangeabs( true ); // $ExpectError
	rangeabs( false ); // $ExpectError
	rangeabs( null ); // $ExpectError
	rangeabs( void 0 ); // $ExpectError
	rangeabs( {} ); // $ExpectError
	rangeabs( ( x: number ): number => x ); // $ExpectError

	rangeabs( '5', {} ); // $ExpectError
	rangeabs( 5, {} ); // $ExpectError
	rangeabs( true, {} ); // $ExpectError
	rangeabs( false, {} ); // $ExpectError
	rangeabs( null, {} ); // $ExpectError
	rangeabs( void 0, {} ); // $ExpectError
	rangeabs( {}, {} ); // $ExpectError
	rangeabs( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs( x, '5' ); // $ExpectError
	rangeabs( x, true ); // $ExpectError
	rangeabs( x, false ); // $ExpectError
	rangeabs( x, null ); // $ExpectError
	rangeabs( x, [] ); // $ExpectError
	rangeabs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs( x, { 'dtype': '5' } ); // $ExpectError
	rangeabs( x, { 'dtype': 5 } ); // $ExpectError
	rangeabs( x, { 'dtype': true } ); // $ExpectError
	rangeabs( x, { 'dtype': false } ); // $ExpectError
	rangeabs( x, { 'dtype': null } ); // $ExpectError
	rangeabs( x, { 'dtype': [] } ); // $ExpectError
	rangeabs( x, { 'dtype': {} } ); // $ExpectError
	rangeabs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs( x, { 'keepdims': '5' } ); // $ExpectError
	rangeabs( x, { 'keepdims': 5 } ); // $ExpectError
	rangeabs( x, { 'keepdims': null } ); // $ExpectError
	rangeabs( x, { 'keepdims': [] } ); // $ExpectError
	rangeabs( x, { 'keepdims': {} } ); // $ExpectError
	rangeabs( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs( x, { 'dims': '5' } ); // $ExpectError
	rangeabs( x, { 'dims': 5 } ); // $ExpectError
	rangeabs( x, { 'dims': true } ); // $ExpectError
	rangeabs( x, { 'dims': false } ); // $ExpectError
	rangeabs( x, { 'dims': null } ); // $ExpectError
	rangeabs( x, { 'dims': {} } ); // $ExpectError
	rangeabs( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs(); // $ExpectError
	rangeabs( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs.assign( x, x ); // $ExpectType float64ndarray
	rangeabs.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs.assign( '5', x ); // $ExpectError
	rangeabs.assign( 5, x ); // $ExpectError
	rangeabs.assign( true, x ); // $ExpectError
	rangeabs.assign( false, x ); // $ExpectError
	rangeabs.assign( null, x ); // $ExpectError
	rangeabs.assign( void 0, x ); // $ExpectError
	rangeabs.assign( {}, x ); // $ExpectError
	rangeabs.assign( ( x: number ): number => x, x ); // $ExpectError

	rangeabs.assign( '5', x, {} ); // $ExpectError
	rangeabs.assign( 5, x, {} ); // $ExpectError
	rangeabs.assign( true, x, {} ); // $ExpectError
	rangeabs.assign( false, x, {} ); // $ExpectError
	rangeabs.assign( null, x, {} ); // $ExpectError
	rangeabs.assign( void 0, x, {} ); // $ExpectError
	rangeabs.assign( {}, x, {} ); // $ExpectError
	rangeabs.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs.assign( x, '5' ); // $ExpectError
	rangeabs.assign( x, 5 ); // $ExpectError
	rangeabs.assign( x, true ); // $ExpectError
	rangeabs.assign( x, false ); // $ExpectError
	rangeabs.assign( x, null ); // $ExpectError
	rangeabs.assign( x, void 0 ); // $ExpectError
	rangeabs.assign( x, ( x: number ): number => x ); // $ExpectError

	rangeabs.assign( x, '5', {} ); // $ExpectError
	rangeabs.assign( x, 5, {} ); // $ExpectError
	rangeabs.assign( x, true, {} ); // $ExpectError
	rangeabs.assign( x, false, {} ); // $ExpectError
	rangeabs.assign( x, null, {} ); // $ExpectError
	rangeabs.assign( x, void 0, {} ); // $ExpectError
	rangeabs.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs.assign( x, x, '5' ); // $ExpectError
	rangeabs.assign( x, x, true ); // $ExpectError
	rangeabs.assign( x, x, false ); // $ExpectError
	rangeabs.assign( x, x, null ); // $ExpectError
	rangeabs.assign( x, x, [] ); // $ExpectError
	rangeabs.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs.assign( x, x, { 'dims': '5' } ); // $ExpectError
	rangeabs.assign( x, x, { 'dims': 5 } ); // $ExpectError
	rangeabs.assign( x, x, { 'dims': true } ); // $ExpectError
	rangeabs.assign( x, x, { 'dims': false } ); // $ExpectError
	rangeabs.assign( x, x, { 'dims': null } ); // $ExpectError
	rangeabs.assign( x, x, { 'dims': {} } ); // $ExpectError
	rangeabs.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeabs.assign(); // $ExpectError
	rangeabs.assign( x ); // $ExpectError
	rangeabs.assign( x, x, {}, {} ); // $ExpectError
}

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
import nanminabs = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs<number, number>( x ); // $ExpectType OutputArray<number>
	nanminabs<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanminabs( '5' ); // $ExpectError
	nanminabs( 5 ); // $ExpectError
	nanminabs( true ); // $ExpectError
	nanminabs( false ); // $ExpectError
	nanminabs( null ); // $ExpectError
	nanminabs( void 0 ); // $ExpectError
	nanminabs( {} ); // $ExpectError
	nanminabs( ( x: number ): number => x ); // $ExpectError

	nanminabs( '5', {} ); // $ExpectError
	nanminabs( 5, {} ); // $ExpectError
	nanminabs( true, {} ); // $ExpectError
	nanminabs( false, {} ); // $ExpectError
	nanminabs( null, {} ); // $ExpectError
	nanminabs( void 0, {} ); // $ExpectError
	nanminabs( {}, {} ); // $ExpectError
	nanminabs( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs( x, '5' ); // $ExpectError
	nanminabs( x, true ); // $ExpectError
	nanminabs( x, false ); // $ExpectError
	nanminabs( x, null ); // $ExpectError
	nanminabs( x, [] ); // $ExpectError
	nanminabs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs( x, { 'dtype': '5' } ); // $ExpectError
	nanminabs( x, { 'dtype': 5 } ); // $ExpectError
	nanminabs( x, { 'dtype': true } ); // $ExpectError
	nanminabs( x, { 'dtype': false } ); // $ExpectError
	nanminabs( x, { 'dtype': null } ); // $ExpectError
	nanminabs( x, { 'dtype': [] } ); // $ExpectError
	nanminabs( x, { 'dtype': {} } ); // $ExpectError
	nanminabs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs( x, { 'keepdims': '5' } ); // $ExpectError
	nanminabs( x, { 'keepdims': 5 } ); // $ExpectError
	nanminabs( x, { 'keepdims': null } ); // $ExpectError
	nanminabs( x, { 'keepdims': [] } ); // $ExpectError
	nanminabs( x, { 'keepdims': {} } ); // $ExpectError
	nanminabs( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs( x, { 'dims': '5' } ); // $ExpectError
	nanminabs( x, { 'dims': 5 } ); // $ExpectError
	nanminabs( x, { 'dims': true } ); // $ExpectError
	nanminabs( x, { 'dims': false } ); // $ExpectError
	nanminabs( x, { 'dims': null } ); // $ExpectError
	nanminabs( x, { 'dims': {} } ); // $ExpectError
	nanminabs( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs(); // $ExpectError
	nanminabs( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs.assign( x, x ); // $ExpectType float64ndarray
	nanminabs.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs.assign( '5', x ); // $ExpectError
	nanminabs.assign( 5, x ); // $ExpectError
	nanminabs.assign( true, x ); // $ExpectError
	nanminabs.assign( false, x ); // $ExpectError
	nanminabs.assign( null, x ); // $ExpectError
	nanminabs.assign( void 0, x ); // $ExpectError
	nanminabs.assign( {}, x ); // $ExpectError
	nanminabs.assign( ( x: number ): number => x, x ); // $ExpectError

	nanminabs.assign( '5', x, {} ); // $ExpectError
	nanminabs.assign( 5, x, {} ); // $ExpectError
	nanminabs.assign( true, x, {} ); // $ExpectError
	nanminabs.assign( false, x, {} ); // $ExpectError
	nanminabs.assign( null, x, {} ); // $ExpectError
	nanminabs.assign( void 0, x, {} ); // $ExpectError
	nanminabs.assign( {}, x, {} ); // $ExpectError
	nanminabs.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs.assign( x, '5' ); // $ExpectError
	nanminabs.assign( x, 5 ); // $ExpectError
	nanminabs.assign( x, true ); // $ExpectError
	nanminabs.assign( x, false ); // $ExpectError
	nanminabs.assign( x, null ); // $ExpectError
	nanminabs.assign( x, void 0 ); // $ExpectError
	nanminabs.assign( x, ( x: number ): number => x ); // $ExpectError

	nanminabs.assign( x, '5', {} ); // $ExpectError
	nanminabs.assign( x, 5, {} ); // $ExpectError
	nanminabs.assign( x, true, {} ); // $ExpectError
	nanminabs.assign( x, false, {} ); // $ExpectError
	nanminabs.assign( x, null, {} ); // $ExpectError
	nanminabs.assign( x, void 0, {} ); // $ExpectError
	nanminabs.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs.assign( x, x, '5' ); // $ExpectError
	nanminabs.assign( x, x, true ); // $ExpectError
	nanminabs.assign( x, x, false ); // $ExpectError
	nanminabs.assign( x, x, null ); // $ExpectError
	nanminabs.assign( x, x, [] ); // $ExpectError
	nanminabs.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanminabs.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanminabs.assign( x, x, { 'dims': true } ); // $ExpectError
	nanminabs.assign( x, x, { 'dims': false } ); // $ExpectError
	nanminabs.assign( x, x, { 'dims': null } ); // $ExpectError
	nanminabs.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanminabs.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminabs.assign(); // $ExpectError
	nanminabs.assign( x ); // $ExpectError
	nanminabs.assign( x, x, {}, {} ); // $ExpectError
}

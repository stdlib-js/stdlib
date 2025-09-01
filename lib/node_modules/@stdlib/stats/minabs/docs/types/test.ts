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
import minabs = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs<number, number>( x ); // $ExpectType OutputArray<number>
	minabs<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	minabs( '5' ); // $ExpectError
	minabs( 5 ); // $ExpectError
	minabs( true ); // $ExpectError
	minabs( false ); // $ExpectError
	minabs( null ); // $ExpectError
	minabs( void 0 ); // $ExpectError
	minabs( {} ); // $ExpectError
	minabs( ( x: number ): number => x ); // $ExpectError

	minabs( '5', {} ); // $ExpectError
	minabs( 5, {} ); // $ExpectError
	minabs( true, {} ); // $ExpectError
	minabs( false, {} ); // $ExpectError
	minabs( null, {} ); // $ExpectError
	minabs( void 0, {} ); // $ExpectError
	minabs( {}, {} ); // $ExpectError
	minabs( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs( x, '5' ); // $ExpectError
	minabs( x, true ); // $ExpectError
	minabs( x, false ); // $ExpectError
	minabs( x, null ); // $ExpectError
	minabs( x, [] ); // $ExpectError
	minabs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs( x, { 'dtype': '5' } ); // $ExpectError
	minabs( x, { 'dtype': 5 } ); // $ExpectError
	minabs( x, { 'dtype': true } ); // $ExpectError
	minabs( x, { 'dtype': false } ); // $ExpectError
	minabs( x, { 'dtype': null } ); // $ExpectError
	minabs( x, { 'dtype': [] } ); // $ExpectError
	minabs( x, { 'dtype': {} } ); // $ExpectError
	minabs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs( x, { 'keepdims': '5' } ); // $ExpectError
	minabs( x, { 'keepdims': 5 } ); // $ExpectError
	minabs( x, { 'keepdims': null } ); // $ExpectError
	minabs( x, { 'keepdims': [] } ); // $ExpectError
	minabs( x, { 'keepdims': {} } ); // $ExpectError
	minabs( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs( x, { 'dims': '5' } ); // $ExpectError
	minabs( x, { 'dims': 5 } ); // $ExpectError
	minabs( x, { 'dims': true } ); // $ExpectError
	minabs( x, { 'dims': false } ); // $ExpectError
	minabs( x, { 'dims': null } ); // $ExpectError
	minabs( x, { 'dims': {} } ); // $ExpectError
	minabs( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs(); // $ExpectError
	minabs( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs.assign( x, x ); // $ExpectType float64ndarray
	minabs.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs.assign( '5', x ); // $ExpectError
	minabs.assign( 5, x ); // $ExpectError
	minabs.assign( true, x ); // $ExpectError
	minabs.assign( false, x ); // $ExpectError
	minabs.assign( null, x ); // $ExpectError
	minabs.assign( void 0, x ); // $ExpectError
	minabs.assign( {}, x ); // $ExpectError
	minabs.assign( ( x: number ): number => x, x ); // $ExpectError

	minabs.assign( '5', x, {} ); // $ExpectError
	minabs.assign( 5, x, {} ); // $ExpectError
	minabs.assign( true, x, {} ); // $ExpectError
	minabs.assign( false, x, {} ); // $ExpectError
	minabs.assign( null, x, {} ); // $ExpectError
	minabs.assign( void 0, x, {} ); // $ExpectError
	minabs.assign( {}, x, {} ); // $ExpectError
	minabs.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs.assign( x, '5' ); // $ExpectError
	minabs.assign( x, 5 ); // $ExpectError
	minabs.assign( x, true ); // $ExpectError
	minabs.assign( x, false ); // $ExpectError
	minabs.assign( x, null ); // $ExpectError
	minabs.assign( x, void 0 ); // $ExpectError
	minabs.assign( x, ( x: number ): number => x ); // $ExpectError

	minabs.assign( x, '5', {} ); // $ExpectError
	minabs.assign( x, 5, {} ); // $ExpectError
	minabs.assign( x, true, {} ); // $ExpectError
	minabs.assign( x, false, {} ); // $ExpectError
	minabs.assign( x, null, {} ); // $ExpectError
	minabs.assign( x, void 0, {} ); // $ExpectError
	minabs.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs.assign( x, x, '5' ); // $ExpectError
	minabs.assign( x, x, true ); // $ExpectError
	minabs.assign( x, x, false ); // $ExpectError
	minabs.assign( x, x, null ); // $ExpectError
	minabs.assign( x, x, [] ); // $ExpectError
	minabs.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs.assign( x, x, { 'dims': '5' } ); // $ExpectError
	minabs.assign( x, x, { 'dims': 5 } ); // $ExpectError
	minabs.assign( x, x, { 'dims': true } ); // $ExpectError
	minabs.assign( x, x, { 'dims': false } ); // $ExpectError
	minabs.assign( x, x, { 'dims': null } ); // $ExpectError
	minabs.assign( x, x, { 'dims': {} } ); // $ExpectError
	minabs.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minabs.assign(); // $ExpectError
	minabs.assign( x ); // $ExpectError
	minabs.assign( x, x, {}, {} ); // $ExpectError
}

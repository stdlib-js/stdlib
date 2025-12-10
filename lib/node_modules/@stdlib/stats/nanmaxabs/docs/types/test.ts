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
import nanmaxabs = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs<number, number>( x ); // $ExpectType OutputArray<number>
	nanmaxabs<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmaxabs( '5' ); // $ExpectError
	nanmaxabs( 5 ); // $ExpectError
	nanmaxabs( true ); // $ExpectError
	nanmaxabs( false ); // $ExpectError
	nanmaxabs( null ); // $ExpectError
	nanmaxabs( void 0 ); // $ExpectError
	nanmaxabs( {} ); // $ExpectError
	nanmaxabs( ( x: number ): number => x ); // $ExpectError

	nanmaxabs( '5', {} ); // $ExpectError
	nanmaxabs( 5, {} ); // $ExpectError
	nanmaxabs( true, {} ); // $ExpectError
	nanmaxabs( false, {} ); // $ExpectError
	nanmaxabs( null, {} ); // $ExpectError
	nanmaxabs( void 0, {} ); // $ExpectError
	nanmaxabs( {}, {} ); // $ExpectError
	nanmaxabs( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs( x, '5' ); // $ExpectError
	nanmaxabs( x, true ); // $ExpectError
	nanmaxabs( x, false ); // $ExpectError
	nanmaxabs( x, null ); // $ExpectError
	nanmaxabs( x, [] ); // $ExpectError
	nanmaxabs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs( x, { 'dtype': '5' } ); // $ExpectError
	nanmaxabs( x, { 'dtype': 5 } ); // $ExpectError
	nanmaxabs( x, { 'dtype': true } ); // $ExpectError
	nanmaxabs( x, { 'dtype': false } ); // $ExpectError
	nanmaxabs( x, { 'dtype': null } ); // $ExpectError
	nanmaxabs( x, { 'dtype': [] } ); // $ExpectError
	nanmaxabs( x, { 'dtype': {} } ); // $ExpectError
	nanmaxabs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs( x, { 'keepdims': '5' } ); // $ExpectError
	nanmaxabs( x, { 'keepdims': 5 } ); // $ExpectError
	nanmaxabs( x, { 'keepdims': null } ); // $ExpectError
	nanmaxabs( x, { 'keepdims': [] } ); // $ExpectError
	nanmaxabs( x, { 'keepdims': {} } ); // $ExpectError
	nanmaxabs( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs( x, { 'dims': '5' } ); // $ExpectError
	nanmaxabs( x, { 'dims': 5 } ); // $ExpectError
	nanmaxabs( x, { 'dims': true } ); // $ExpectError
	nanmaxabs( x, { 'dims': false } ); // $ExpectError
	nanmaxabs( x, { 'dims': null } ); // $ExpectError
	nanmaxabs( x, { 'dims': {} } ); // $ExpectError
	nanmaxabs( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs(); // $ExpectError
	nanmaxabs( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs.assign( x, x ); // $ExpectType float64ndarray
	nanmaxabs.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs.assign( '5', x ); // $ExpectError
	nanmaxabs.assign( 5, x ); // $ExpectError
	nanmaxabs.assign( true, x ); // $ExpectError
	nanmaxabs.assign( false, x ); // $ExpectError
	nanmaxabs.assign( null, x ); // $ExpectError
	nanmaxabs.assign( void 0, x ); // $ExpectError
	nanmaxabs.assign( {}, x ); // $ExpectError
	nanmaxabs.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmaxabs.assign( '5', x, {} ); // $ExpectError
	nanmaxabs.assign( 5, x, {} ); // $ExpectError
	nanmaxabs.assign( true, x, {} ); // $ExpectError
	nanmaxabs.assign( false, x, {} ); // $ExpectError
	nanmaxabs.assign( null, x, {} ); // $ExpectError
	nanmaxabs.assign( void 0, x, {} ); // $ExpectError
	nanmaxabs.assign( {}, x, {} ); // $ExpectError
	nanmaxabs.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs.assign( x, '5' ); // $ExpectError
	nanmaxabs.assign( x, 5 ); // $ExpectError
	nanmaxabs.assign( x, true ); // $ExpectError
	nanmaxabs.assign( x, false ); // $ExpectError
	nanmaxabs.assign( x, null ); // $ExpectError
	nanmaxabs.assign( x, void 0 ); // $ExpectError
	nanmaxabs.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmaxabs.assign( x, '5', {} ); // $ExpectError
	nanmaxabs.assign( x, 5, {} ); // $ExpectError
	nanmaxabs.assign( x, true, {} ); // $ExpectError
	nanmaxabs.assign( x, false, {} ); // $ExpectError
	nanmaxabs.assign( x, null, {} ); // $ExpectError
	nanmaxabs.assign( x, void 0, {} ); // $ExpectError
	nanmaxabs.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs.assign( x, x, '5' ); // $ExpectError
	nanmaxabs.assign( x, x, true ); // $ExpectError
	nanmaxabs.assign( x, x, false ); // $ExpectError
	nanmaxabs.assign( x, x, null ); // $ExpectError
	nanmaxabs.assign( x, x, [] ); // $ExpectError
	nanmaxabs.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmaxabs.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmaxabs.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmaxabs.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmaxabs.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmaxabs.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmaxabs.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxabs.assign(); // $ExpectError
	nanmaxabs.assign( x ); // $ExpectError
	nanmaxabs.assign( x, x, {}, {} ); // $ExpectError
}

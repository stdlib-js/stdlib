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
import nanmeanors = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors<number, number>( x ); // $ExpectType OutputArray<number>
	nanmeanors<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmeanors( '5' ); // $ExpectError
	nanmeanors( 5 ); // $ExpectError
	nanmeanors( true ); // $ExpectError
	nanmeanors( false ); // $ExpectError
	nanmeanors( null ); // $ExpectError
	nanmeanors( void 0 ); // $ExpectError
	nanmeanors( {} ); // $ExpectError
	nanmeanors( ( x: number ): number => x ); // $ExpectError

	nanmeanors( '5', {} ); // $ExpectError
	nanmeanors( 5, {} ); // $ExpectError
	nanmeanors( true, {} ); // $ExpectError
	nanmeanors( false, {} ); // $ExpectError
	nanmeanors( null, {} ); // $ExpectError
	nanmeanors( void 0, {} ); // $ExpectError
	nanmeanors( {}, {} ); // $ExpectError
	nanmeanors( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors( x, '5' ); // $ExpectError
	nanmeanors( x, true ); // $ExpectError
	nanmeanors( x, false ); // $ExpectError
	nanmeanors( x, null ); // $ExpectError
	nanmeanors( x, [] ); // $ExpectError
	nanmeanors( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors( x, { 'dtype': '5' } ); // $ExpectError
	nanmeanors( x, { 'dtype': 5 } ); // $ExpectError
	nanmeanors( x, { 'dtype': true } ); // $ExpectError
	nanmeanors( x, { 'dtype': false } ); // $ExpectError
	nanmeanors( x, { 'dtype': null } ); // $ExpectError
	nanmeanors( x, { 'dtype': [] } ); // $ExpectError
	nanmeanors( x, { 'dtype': {} } ); // $ExpectError
	nanmeanors( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors( x, { 'keepdims': '5' } ); // $ExpectError
	nanmeanors( x, { 'keepdims': 5 } ); // $ExpectError
	nanmeanors( x, { 'keepdims': null } ); // $ExpectError
	nanmeanors( x, { 'keepdims': [] } ); // $ExpectError
	nanmeanors( x, { 'keepdims': {} } ); // $ExpectError
	nanmeanors( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors( x, { 'dims': '5' } ); // $ExpectError
	nanmeanors( x, { 'dims': 5 } ); // $ExpectError
	nanmeanors( x, { 'dims': true } ); // $ExpectError
	nanmeanors( x, { 'dims': false } ); // $ExpectError
	nanmeanors( x, { 'dims': null } ); // $ExpectError
	nanmeanors( x, { 'dims': {} } ); // $ExpectError
	nanmeanors( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors(); // $ExpectError
	nanmeanors( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors.assign( x, x ); // $ExpectType float64ndarray
	nanmeanors.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors.assign( '5', x ); // $ExpectError
	nanmeanors.assign( 5, x ); // $ExpectError
	nanmeanors.assign( true, x ); // $ExpectError
	nanmeanors.assign( false, x ); // $ExpectError
	nanmeanors.assign( null, x ); // $ExpectError
	nanmeanors.assign( void 0, x ); // $ExpectError
	nanmeanors.assign( {}, x ); // $ExpectError
	nanmeanors.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmeanors.assign( '5', x, {} ); // $ExpectError
	nanmeanors.assign( 5, x, {} ); // $ExpectError
	nanmeanors.assign( true, x, {} ); // $ExpectError
	nanmeanors.assign( false, x, {} ); // $ExpectError
	nanmeanors.assign( null, x, {} ); // $ExpectError
	nanmeanors.assign( void 0, x, {} ); // $ExpectError
	nanmeanors.assign( {}, x, {} ); // $ExpectError
	nanmeanors.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors.assign( x, '5' ); // $ExpectError
	nanmeanors.assign( x, 5 ); // $ExpectError
	nanmeanors.assign( x, true ); // $ExpectError
	nanmeanors.assign( x, false ); // $ExpectError
	nanmeanors.assign( x, null ); // $ExpectError
	nanmeanors.assign( x, void 0 ); // $ExpectError
	nanmeanors.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmeanors.assign( x, '5', {} ); // $ExpectError
	nanmeanors.assign( x, 5, {} ); // $ExpectError
	nanmeanors.assign( x, true, {} ); // $ExpectError
	nanmeanors.assign( x, false, {} ); // $ExpectError
	nanmeanors.assign( x, null, {} ); // $ExpectError
	nanmeanors.assign( x, void 0, {} ); // $ExpectError
	nanmeanors.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors.assign( x, x, '5' ); // $ExpectError
	nanmeanors.assign( x, x, true ); // $ExpectError
	nanmeanors.assign( x, x, false ); // $ExpectError
	nanmeanors.assign( x, x, null ); // $ExpectError
	nanmeanors.assign( x, x, [] ); // $ExpectError
	nanmeanors.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmeanors.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmeanors.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmeanors.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmeanors.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmeanors.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmeanors.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanors.assign(); // $ExpectError
	nanmeanors.assign( x ); // $ExpectError
	nanmeanors.assign( x, x, {}, {} ); // $ExpectError
}

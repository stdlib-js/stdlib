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
import meanwd = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd<number, number>( x ); // $ExpectType OutputArray<number>
	meanwd<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	meanwd( '5' ); // $ExpectError
	meanwd( 5 ); // $ExpectError
	meanwd( true ); // $ExpectError
	meanwd( false ); // $ExpectError
	meanwd( null ); // $ExpectError
	meanwd( void 0 ); // $ExpectError
	meanwd( {} ); // $ExpectError
	meanwd( ( x: number ): number => x ); // $ExpectError

	meanwd( '5', {} ); // $ExpectError
	meanwd( 5, {} ); // $ExpectError
	meanwd( true, {} ); // $ExpectError
	meanwd( false, {} ); // $ExpectError
	meanwd( null, {} ); // $ExpectError
	meanwd( void 0, {} ); // $ExpectError
	meanwd( {}, {} ); // $ExpectError
	meanwd( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd( x, '5' ); // $ExpectError
	meanwd( x, true ); // $ExpectError
	meanwd( x, false ); // $ExpectError
	meanwd( x, null ); // $ExpectError
	meanwd( x, [] ); // $ExpectError
	meanwd( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd( x, { 'dtype': '5' } ); // $ExpectError
	meanwd( x, { 'dtype': 5 } ); // $ExpectError
	meanwd( x, { 'dtype': true } ); // $ExpectError
	meanwd( x, { 'dtype': false } ); // $ExpectError
	meanwd( x, { 'dtype': null } ); // $ExpectError
	meanwd( x, { 'dtype': [] } ); // $ExpectError
	meanwd( x, { 'dtype': {} } ); // $ExpectError
	meanwd( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd( x, { 'keepdims': '5' } ); // $ExpectError
	meanwd( x, { 'keepdims': 5 } ); // $ExpectError
	meanwd( x, { 'keepdims': null } ); // $ExpectError
	meanwd( x, { 'keepdims': [] } ); // $ExpectError
	meanwd( x, { 'keepdims': {} } ); // $ExpectError
	meanwd( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd( x, { 'dims': '5' } ); // $ExpectError
	meanwd( x, { 'dims': 5 } ); // $ExpectError
	meanwd( x, { 'dims': true } ); // $ExpectError
	meanwd( x, { 'dims': false } ); // $ExpectError
	meanwd( x, { 'dims': null } ); // $ExpectError
	meanwd( x, { 'dims': {} } ); // $ExpectError
	meanwd( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd(); // $ExpectError
	meanwd( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd.assign( x, x ); // $ExpectType float64ndarray
	meanwd.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd.assign( '5', x ); // $ExpectError
	meanwd.assign( 5, x ); // $ExpectError
	meanwd.assign( true, x ); // $ExpectError
	meanwd.assign( false, x ); // $ExpectError
	meanwd.assign( null, x ); // $ExpectError
	meanwd.assign( void 0, x ); // $ExpectError
	meanwd.assign( {}, x ); // $ExpectError
	meanwd.assign( ( x: number ): number => x, x ); // $ExpectError

	meanwd.assign( '5', x, {} ); // $ExpectError
	meanwd.assign( 5, x, {} ); // $ExpectError
	meanwd.assign( true, x, {} ); // $ExpectError
	meanwd.assign( false, x, {} ); // $ExpectError
	meanwd.assign( null, x, {} ); // $ExpectError
	meanwd.assign( void 0, x, {} ); // $ExpectError
	meanwd.assign( {}, x, {} ); // $ExpectError
	meanwd.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd.assign( x, '5' ); // $ExpectError
	meanwd.assign( x, 5 ); // $ExpectError
	meanwd.assign( x, true ); // $ExpectError
	meanwd.assign( x, false ); // $ExpectError
	meanwd.assign( x, null ); // $ExpectError
	meanwd.assign( x, void 0 ); // $ExpectError
	meanwd.assign( x, ( x: number ): number => x ); // $ExpectError

	meanwd.assign( x, '5', {} ); // $ExpectError
	meanwd.assign( x, 5, {} ); // $ExpectError
	meanwd.assign( x, true, {} ); // $ExpectError
	meanwd.assign( x, false, {} ); // $ExpectError
	meanwd.assign( x, null, {} ); // $ExpectError
	meanwd.assign( x, void 0, {} ); // $ExpectError
	meanwd.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd.assign( x, x, '5' ); // $ExpectError
	meanwd.assign( x, x, true ); // $ExpectError
	meanwd.assign( x, x, false ); // $ExpectError
	meanwd.assign( x, x, null ); // $ExpectError
	meanwd.assign( x, x, [] ); // $ExpectError
	meanwd.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd.assign( x, x, { 'dims': '5' } ); // $ExpectError
	meanwd.assign( x, x, { 'dims': 5 } ); // $ExpectError
	meanwd.assign( x, x, { 'dims': true } ); // $ExpectError
	meanwd.assign( x, x, { 'dims': false } ); // $ExpectError
	meanwd.assign( x, x, { 'dims': null } ); // $ExpectError
	meanwd.assign( x, x, { 'dims': {} } ); // $ExpectError
	meanwd.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanwd.assign(); // $ExpectError
	meanwd.assign( x ); // $ExpectError
	meanwd.assign( x, x, {}, {} ); // $ExpectError
}

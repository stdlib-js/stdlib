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
import cumax = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax<number, number>( x ); // $ExpectType OutputArray<number>
	cumax<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	cumax( '5' ); // $ExpectError
	cumax( 5 ); // $ExpectError
	cumax( true ); // $ExpectError
	cumax( false ); // $ExpectError
	cumax( null ); // $ExpectError
	cumax( void 0 ); // $ExpectError
	cumax( {} ); // $ExpectError
	cumax( ( x: number ): number => x ); // $ExpectError

	cumax( '5', {} ); // $ExpectError
	cumax( 5, {} ); // $ExpectError
	cumax( true, {} ); // $ExpectError
	cumax( false, {} ); // $ExpectError
	cumax( null, {} ); // $ExpectError
	cumax( void 0, {} ); // $ExpectError
	cumax( {}, {} ); // $ExpectError
	cumax( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax( x, '5' ); // $ExpectError
	cumax( x, true ); // $ExpectError
	cumax( x, false ); // $ExpectError
	cumax( x, null ); // $ExpectError
	cumax( x, [] ); // $ExpectError
	cumax( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax( x, { 'dtype': '5' } ); // $ExpectError
	cumax( x, { 'dtype': 5 } ); // $ExpectError
	cumax( x, { 'dtype': true } ); // $ExpectError
	cumax( x, { 'dtype': false } ); // $ExpectError
	cumax( x, { 'dtype': null } ); // $ExpectError
	cumax( x, { 'dtype': [] } ); // $ExpectError
	cumax( x, { 'dtype': {} } ); // $ExpectError
	cumax( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax( x, { 'dims': '5' } ); // $ExpectError
	cumax( x, { 'dims': 5 } ); // $ExpectError
	cumax( x, { 'dims': true } ); // $ExpectError
	cumax( x, { 'dims': false } ); // $ExpectError
	cumax( x, { 'dims': null } ); // $ExpectError
	cumax( x, { 'dims': {} } ); // $ExpectError
	cumax( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax(); // $ExpectError
	cumax( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax.assign( x, x ); // $ExpectType float64ndarray
	cumax.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax.assign( '5', x ); // $ExpectError
	cumax.assign( 5, x ); // $ExpectError
	cumax.assign( true, x ); // $ExpectError
	cumax.assign( false, x ); // $ExpectError
	cumax.assign( null, x ); // $ExpectError
	cumax.assign( void 0, x ); // $ExpectError
	cumax.assign( {}, x ); // $ExpectError
	cumax.assign( ( x: number ): number => x, x ); // $ExpectError

	cumax.assign( '5', x, {} ); // $ExpectError
	cumax.assign( 5, x, {} ); // $ExpectError
	cumax.assign( true, x, {} ); // $ExpectError
	cumax.assign( false, x, {} ); // $ExpectError
	cumax.assign( null, x, {} ); // $ExpectError
	cumax.assign( void 0, x, {} ); // $ExpectError
	cumax.assign( {}, x, {} ); // $ExpectError
	cumax.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax.assign( x, '5' ); // $ExpectError
	cumax.assign( x, 5 ); // $ExpectError
	cumax.assign( x, true ); // $ExpectError
	cumax.assign( x, false ); // $ExpectError
	cumax.assign( x, null ); // $ExpectError
	cumax.assign( x, void 0 ); // $ExpectError
	cumax.assign( x, ( x: number ): number => x ); // $ExpectError

	cumax.assign( x, '5', {} ); // $ExpectError
	cumax.assign( x, 5, {} ); // $ExpectError
	cumax.assign( x, true, {} ); // $ExpectError
	cumax.assign( x, false, {} ); // $ExpectError
	cumax.assign( x, null, {} ); // $ExpectError
	cumax.assign( x, void 0, {} ); // $ExpectError
	cumax.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax.assign( x, x, '5' ); // $ExpectError
	cumax.assign( x, x, true ); // $ExpectError
	cumax.assign( x, x, false ); // $ExpectError
	cumax.assign( x, x, null ); // $ExpectError
	cumax.assign( x, x, [] ); // $ExpectError
	cumax.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax.assign( x, x, { 'dims': '5' } ); // $ExpectError
	cumax.assign( x, x, { 'dims': 5 } ); // $ExpectError
	cumax.assign( x, x, { 'dims': true } ); // $ExpectError
	cumax.assign( x, x, { 'dims': false } ); // $ExpectError
	cumax.assign( x, x, { 'dims': null } ); // $ExpectError
	cumax.assign( x, x, { 'dims': {} } ); // $ExpectError
	cumax.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cumax.assign(); // $ExpectError
	cumax.assign( x ); // $ExpectError
	cumax.assign( x, x, {}, {} ); // $ExpectError
}

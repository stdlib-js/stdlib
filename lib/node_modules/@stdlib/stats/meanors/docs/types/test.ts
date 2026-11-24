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
import meanors = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors<number, number>( x ); // $ExpectType OutputArray<number>
	meanors<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	meanors( '5' ); // $ExpectError
	meanors( 5 ); // $ExpectError
	meanors( true ); // $ExpectError
	meanors( false ); // $ExpectError
	meanors( null ); // $ExpectError
	meanors( void 0 ); // $ExpectError
	meanors( {} ); // $ExpectError
	meanors( ( x: number ): number => x ); // $ExpectError

	meanors( '5', {} ); // $ExpectError
	meanors( 5, {} ); // $ExpectError
	meanors( true, {} ); // $ExpectError
	meanors( false, {} ); // $ExpectError
	meanors( null, {} ); // $ExpectError
	meanors( void 0, {} ); // $ExpectError
	meanors( {}, {} ); // $ExpectError
	meanors( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors( x, '5' ); // $ExpectError
	meanors( x, true ); // $ExpectError
	meanors( x, false ); // $ExpectError
	meanors( x, null ); // $ExpectError
	meanors( x, [] ); // $ExpectError
	meanors( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors( x, { 'dtype': '5' } ); // $ExpectError
	meanors( x, { 'dtype': 5 } ); // $ExpectError
	meanors( x, { 'dtype': true } ); // $ExpectError
	meanors( x, { 'dtype': false } ); // $ExpectError
	meanors( x, { 'dtype': null } ); // $ExpectError
	meanors( x, { 'dtype': [] } ); // $ExpectError
	meanors( x, { 'dtype': {} } ); // $ExpectError
	meanors( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors( x, { 'dims': '5' } ); // $ExpectError
	meanors( x, { 'dims': 5 } ); // $ExpectError
	meanors( x, { 'dims': true } ); // $ExpectError
	meanors( x, { 'dims': false } ); // $ExpectError
	meanors( x, { 'dims': null } ); // $ExpectError
	meanors( x, { 'dims': {} } ); // $ExpectError
	meanors( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors( x, { 'keepdims': '5' } ); // $ExpectError
	meanors( x, { 'keepdims': 5 } ); // $ExpectError
	meanors( x, { 'keepdims': null } ); // $ExpectError
	meanors( x, { 'keepdims': [] } ); // $ExpectError
	meanors( x, { 'keepdims': {} } ); // $ExpectError
	meanors( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors(); // $ExpectError
	meanors( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors.assign( x, x ); // $ExpectType float64ndarray
	meanors.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors.assign( '5', x ); // $ExpectError
	meanors.assign( 5, x ); // $ExpectError
	meanors.assign( true, x ); // $ExpectError
	meanors.assign( false, x ); // $ExpectError
	meanors.assign( null, x ); // $ExpectError
	meanors.assign( void 0, x ); // $ExpectError
	meanors.assign( {}, x ); // $ExpectError
	meanors.assign( ( x: number ): number => x, x ); // $ExpectError

	meanors.assign( '5', x, {} ); // $ExpectError
	meanors.assign( 5, x, {} ); // $ExpectError
	meanors.assign( true, x, {} ); // $ExpectError
	meanors.assign( false, x, {} ); // $ExpectError
	meanors.assign( null, x, {} ); // $ExpectError
	meanors.assign( void 0, x, {} ); // $ExpectError
	meanors.assign( {}, x, {} ); // $ExpectError
	meanors.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors.assign( x, '5' ); // $ExpectError
	meanors.assign( x, 5 ); // $ExpectError
	meanors.assign( x, true ); // $ExpectError
	meanors.assign( x, false ); // $ExpectError
	meanors.assign( x, null ); // $ExpectError
	meanors.assign( x, void 0 ); // $ExpectError
	meanors.assign( x, ( x: number ): number => x ); // $ExpectError

	meanors.assign( x, '5', {} ); // $ExpectError
	meanors.assign( x, 5, {} ); // $ExpectError
	meanors.assign( x, true, {} ); // $ExpectError
	meanors.assign( x, false, {} ); // $ExpectError
	meanors.assign( x, null, {} ); // $ExpectError
	meanors.assign( x, void 0, {} ); // $ExpectError
	meanors.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors.assign( x, x, '5' ); // $ExpectError
	meanors.assign( x, x, true ); // $ExpectError
	meanors.assign( x, x, false ); // $ExpectError
	meanors.assign( x, x, null ); // $ExpectError
	meanors.assign( x, x, [] ); // $ExpectError
	meanors.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors.assign( x, x, { 'dims': '5' } ); // $ExpectError
	meanors.assign( x, x, { 'dims': 5 } ); // $ExpectError
	meanors.assign( x, x, { 'dims': true } ); // $ExpectError
	meanors.assign( x, x, { 'dims': false } ); // $ExpectError
	meanors.assign( x, x, { 'dims': null } ); // $ExpectError
	meanors.assign( x, x, { 'dims': {} } ); // $ExpectError
	meanors.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	meanors.assign(); // $ExpectError
	meanors.assign( x ); // $ExpectError
	meanors.assign( x, x, {}, {} ); // $ExpectError
}

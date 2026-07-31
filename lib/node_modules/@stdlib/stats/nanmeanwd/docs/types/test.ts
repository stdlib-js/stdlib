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
import nanmeanwd = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd<number, number>( x ); // $ExpectType OutputArray<number>
	nanmeanwd<number, number>( x, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmeanwd( '5' ); // $ExpectError
	nanmeanwd( 5 ); // $ExpectError
	nanmeanwd( true ); // $ExpectError
	nanmeanwd( false ); // $ExpectError
	nanmeanwd( null ); // $ExpectError
	nanmeanwd( void 0 ); // $ExpectError
	nanmeanwd( {} ); // $ExpectError
	nanmeanwd( ( x: number ): number => x ); // $ExpectError

	nanmeanwd( '5', {} ); // $ExpectError
	nanmeanwd( 5, {} ); // $ExpectError
	nanmeanwd( true, {} ); // $ExpectError
	nanmeanwd( false, {} ); // $ExpectError
	nanmeanwd( null, {} ); // $ExpectError
	nanmeanwd( void 0, {} ); // $ExpectError
	nanmeanwd( {}, {} ); // $ExpectError
	nanmeanwd( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd( x, '5' ); // $ExpectError
	nanmeanwd( x, true ); // $ExpectError
	nanmeanwd( x, false ); // $ExpectError
	nanmeanwd( x, null ); // $ExpectError
	nanmeanwd( x, [] ); // $ExpectError
	nanmeanwd( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd( x, { 'dtype': '5' } ); // $ExpectError
	nanmeanwd( x, { 'dtype': 5 } ); // $ExpectError
	nanmeanwd( x, { 'dtype': true } ); // $ExpectError
	nanmeanwd( x, { 'dtype': false } ); // $ExpectError
	nanmeanwd( x, { 'dtype': null } ); // $ExpectError
	nanmeanwd( x, { 'dtype': [] } ); // $ExpectError
	nanmeanwd( x, { 'dtype': {} } ); // $ExpectError
	nanmeanwd( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd( x, { 'keepdims': '5' } ); // $ExpectError
	nanmeanwd( x, { 'keepdims': 5 } ); // $ExpectError
	nanmeanwd( x, { 'keepdims': null } ); // $ExpectError
	nanmeanwd( x, { 'keepdims': [] } ); // $ExpectError
	nanmeanwd( x, { 'keepdims': {} } ); // $ExpectError
	nanmeanwd( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd( x, { 'dims': '5' } ); // $ExpectError
	nanmeanwd( x, { 'dims': 5 } ); // $ExpectError
	nanmeanwd( x, { 'dims': true } ); // $ExpectError
	nanmeanwd( x, { 'dims': false } ); // $ExpectError
	nanmeanwd( x, { 'dims': null } ); // $ExpectError
	nanmeanwd( x, { 'dims': {} } ); // $ExpectError
	nanmeanwd( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd(); // $ExpectError
	nanmeanwd( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd.assign( x, x ); // $ExpectType float64ndarray
	nanmeanwd.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd.assign( '5', x ); // $ExpectError
	nanmeanwd.assign( 5, x ); // $ExpectError
	nanmeanwd.assign( true, x ); // $ExpectError
	nanmeanwd.assign( false, x ); // $ExpectError
	nanmeanwd.assign( null, x ); // $ExpectError
	nanmeanwd.assign( void 0, x ); // $ExpectError
	nanmeanwd.assign( {}, x ); // $ExpectError
	nanmeanwd.assign( ( x: number ): number => x, x ); // $ExpectError

	nanmeanwd.assign( '5', x, {} ); // $ExpectError
	nanmeanwd.assign( 5, x, {} ); // $ExpectError
	nanmeanwd.assign( true, x, {} ); // $ExpectError
	nanmeanwd.assign( false, x, {} ); // $ExpectError
	nanmeanwd.assign( null, x, {} ); // $ExpectError
	nanmeanwd.assign( void 0, x, {} ); // $ExpectError
	nanmeanwd.assign( {}, x, {} ); // $ExpectError
	nanmeanwd.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd.assign( x, '5' ); // $ExpectError
	nanmeanwd.assign( x, 5 ); // $ExpectError
	nanmeanwd.assign( x, true ); // $ExpectError
	nanmeanwd.assign( x, false ); // $ExpectError
	nanmeanwd.assign( x, null ); // $ExpectError
	nanmeanwd.assign( x, void 0 ); // $ExpectError
	nanmeanwd.assign( x, ( x: number ): number => x ); // $ExpectError

	nanmeanwd.assign( x, '5', {} ); // $ExpectError
	nanmeanwd.assign( x, 5, {} ); // $ExpectError
	nanmeanwd.assign( x, true, {} ); // $ExpectError
	nanmeanwd.assign( x, false, {} ); // $ExpectError
	nanmeanwd.assign( x, null, {} ); // $ExpectError
	nanmeanwd.assign( x, void 0, {} ); // $ExpectError
	nanmeanwd.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd.assign( x, x, '5' ); // $ExpectError
	nanmeanwd.assign( x, x, true ); // $ExpectError
	nanmeanwd.assign( x, x, false ); // $ExpectError
	nanmeanwd.assign( x, x, null ); // $ExpectError
	nanmeanwd.assign( x, x, [] ); // $ExpectError
	nanmeanwd.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nanmeanwd.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nanmeanwd.assign( x, x, { 'dims': true } ); // $ExpectError
	nanmeanwd.assign( x, x, { 'dims': false } ); // $ExpectError
	nanmeanwd.assign( x, x, { 'dims': null } ); // $ExpectError
	nanmeanwd.assign( x, x, { 'dims': {} } ); // $ExpectError
	nanmeanwd.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmeanwd.assign(); // $ExpectError
	nanmeanwd.assign( x ); // $ExpectError
	nanmeanwd.assign( x, x, {}, {} ); // $ExpectError
}

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
import sorthp = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sorthp( x ); // $ExpectType float64ndarray
	sorthp( x, 1.0 ); // $ExpectType float64ndarray
	sorthp( x, {} ); // $ExpectType float64ndarray
	sorthp( x, 1.0, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	sorthp( '5' ); // $ExpectError
	sorthp( 5 ); // $ExpectError
	sorthp( true ); // $ExpectError
	sorthp( false ); // $ExpectError
	sorthp( null ); // $ExpectError
	sorthp( void 0 ); // $ExpectError
	sorthp( {} ); // $ExpectError
	sorthp( ( x: number ): number => x ); // $ExpectError

	sorthp( '5', 1.0 ); // $ExpectError
	sorthp( 5, 1.0 ); // $ExpectError
	sorthp( true, 1.0 ); // $ExpectError
	sorthp( false, 1.0 ); // $ExpectError
	sorthp( null, 1.0 ); // $ExpectError
	sorthp( void 0, 1.0 ); // $ExpectError
	sorthp( {}, 1.0 ); // $ExpectError
	sorthp( ( x: number ): number => x, 1.0 ); // $ExpectError

	sorthp( '5', {} ); // $ExpectError
	sorthp( 5, {} ); // $ExpectError
	sorthp( true, {} ); // $ExpectError
	sorthp( false, {} ); // $ExpectError
	sorthp( null, {} ); // $ExpectError
	sorthp( void 0, {} ); // $ExpectError
	sorthp( {}, {} ); // $ExpectError
	sorthp( ( x: number ): number => x, {} ); // $ExpectError

	sorthp( '5', 1.0, {} ); // $ExpectError
	sorthp( 5, 1.0, {} ); // $ExpectError
	sorthp( true, 1.0, {} ); // $ExpectError
	sorthp( false, 1.0, {} ); // $ExpectError
	sorthp( null, 1.0, {} ); // $ExpectError
	sorthp( void 0, 1.0, {} ); // $ExpectError
	sorthp( {}, 1.0, {} ); // $ExpectError
	sorthp( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a sort order argument which is not an ndarray, supported string literal, or scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sorthp( x, true ); // $ExpectError
	sorthp( x, false ); // $ExpectError
	sorthp( x, [] ); // $ExpectError
	sorthp( x, ( x: number ): number => x ); // $ExpectError

	sorthp( x, 'foo', {} ); // $ExpectError
	sorthp( x, true, {} ); // $ExpectError
	sorthp( x, false, {} ); // $ExpectError
	sorthp( x, null, {} ); // $ExpectError
	sorthp( x, void 0, {} ); // $ExpectError
	sorthp( x, [], {} ); // $ExpectError
	sorthp( x, {}, {} ); // $ExpectError
	sorthp( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sorthp( x, true ); // $ExpectError
	sorthp( x, false ); // $ExpectError
	sorthp( x, [] ); // $ExpectError
	sorthp( x, ( x: number ): number => x ); // $ExpectError

	sorthp( x, 1.0, '5' ); // $ExpectError
	sorthp( x, 1.0, true ); // $ExpectError
	sorthp( x, 1.0, false ); // $ExpectError
	sorthp( x, 1.0, null ); // $ExpectError
	sorthp( x, 1.0, [] ); // $ExpectError
	sorthp( x, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sorthp( x, { 'dims': '5' } ); // $ExpectError
	sorthp( x, { 'dims': 5 } ); // $ExpectError
	sorthp( x, { 'dims': true } ); // $ExpectError
	sorthp( x, { 'dims': false } ); // $ExpectError
	sorthp( x, { 'dims': null } ); // $ExpectError
	sorthp( x, { 'dims': {} } ); // $ExpectError
	sorthp( x, { 'dims': ( x: number ): number => x } ); // $ExpectError

	sorthp( x, 1.0, { 'dims': '5' } ); // $ExpectError
	sorthp( x, 1.0, { 'dims': 5 } ); // $ExpectError
	sorthp( x, 1.0, { 'dims': true } ); // $ExpectError
	sorthp( x, 1.0, { 'dims': false } ); // $ExpectError
	sorthp( x, 1.0, { 'dims': null } ); // $ExpectError
	sorthp( x, 1.0, { 'dims': {} } ); // $ExpectError
	sorthp( x, 1.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	sorthp(); // $ExpectError
	sorthp( x, 10.0, {}, {} ); // $ExpectError
}

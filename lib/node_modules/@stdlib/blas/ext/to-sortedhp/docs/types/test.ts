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
import toSortedhp = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp( x ); // $ExpectType float64ndarray
	toSortedhp( x, 1.0 ); // $ExpectType float64ndarray
	toSortedhp( x, {} ); // $ExpectType float64ndarray
	toSortedhp( x, 1.0, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	toSortedhp( '5' ); // $ExpectError
	toSortedhp( 5 ); // $ExpectError
	toSortedhp( true ); // $ExpectError
	toSortedhp( false ); // $ExpectError
	toSortedhp( null ); // $ExpectError
	toSortedhp( void 0 ); // $ExpectError
	toSortedhp( {} ); // $ExpectError
	toSortedhp( ( x: number ): number => x ); // $ExpectError

	toSortedhp( '5', 1.0 ); // $ExpectError
	toSortedhp( 5, 1.0 ); // $ExpectError
	toSortedhp( true, 1.0 ); // $ExpectError
	toSortedhp( false, 1.0 ); // $ExpectError
	toSortedhp( null, 1.0 ); // $ExpectError
	toSortedhp( void 0, 1.0 ); // $ExpectError
	toSortedhp( {}, 1.0 ); // $ExpectError
	toSortedhp( ( x: number ): number => x, 1.0 ); // $ExpectError

	toSortedhp( '5', {} ); // $ExpectError
	toSortedhp( 5, {} ); // $ExpectError
	toSortedhp( true, {} ); // $ExpectError
	toSortedhp( false, {} ); // $ExpectError
	toSortedhp( null, {} ); // $ExpectError
	toSortedhp( void 0, {} ); // $ExpectError
	toSortedhp( {}, {} ); // $ExpectError
	toSortedhp( ( x: number ): number => x, {} ); // $ExpectError

	toSortedhp( '5', 1.0, {} ); // $ExpectError
	toSortedhp( 5, 1.0, {} ); // $ExpectError
	toSortedhp( true, 1.0, {} ); // $ExpectError
	toSortedhp( false, 1.0, {} ); // $ExpectError
	toSortedhp( null, 1.0, {} ); // $ExpectError
	toSortedhp( void 0, 1.0, {} ); // $ExpectError
	toSortedhp( {}, 1.0, {} ); // $ExpectError
	toSortedhp( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a sort order argument which is not an ndarray, supported string literal, or scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp( x, true ); // $ExpectError
	toSortedhp( x, false ); // $ExpectError
	toSortedhp( x, [] ); // $ExpectError
	toSortedhp( x, ( x: number ): number => x ); // $ExpectError

	toSortedhp( x, 'foo', {} ); // $ExpectError
	toSortedhp( x, true, {} ); // $ExpectError
	toSortedhp( x, false, {} ); // $ExpectError
	toSortedhp( x, null, {} ); // $ExpectError
	toSortedhp( x, void 0, {} ); // $ExpectError
	toSortedhp( x, [], {} ); // $ExpectError
	toSortedhp( x, {}, {} ); // $ExpectError
	toSortedhp( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp( x, true ); // $ExpectError
	toSortedhp( x, false ); // $ExpectError
	toSortedhp( x, [] ); // $ExpectError
	toSortedhp( x, ( x: number ): number => x ); // $ExpectError

	toSortedhp( x, 1.0, '5' ); // $ExpectError
	toSortedhp( x, 1.0, true ); // $ExpectError
	toSortedhp( x, 1.0, false ); // $ExpectError
	toSortedhp( x, 1.0, null ); // $ExpectError
	toSortedhp( x, 1.0, [] ); // $ExpectError
	toSortedhp( x, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp( x, { 'dtype': '5' } ); // $ExpectError
	toSortedhp( x, { 'dtype': 5 } ); // $ExpectError
	toSortedhp( x, { 'dtype': true } ); // $ExpectError
	toSortedhp( x, { 'dtype': false } ); // $ExpectError
	toSortedhp( x, { 'dtype': null } ); // $ExpectError
	toSortedhp( x, { 'dtype': [] } ); // $ExpectError
	toSortedhp( x, { 'dtype': {} } ); // $ExpectError
	toSortedhp( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	toSortedhp( x, 1.0, { 'dtype': '5' } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': 5 } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': true } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': false } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': null } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': [] } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': {} } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp( x, { 'dims': '5' } ); // $ExpectError
	toSortedhp( x, { 'dims': 5 } ); // $ExpectError
	toSortedhp( x, { 'dims': true } ); // $ExpectError
	toSortedhp( x, { 'dims': false } ); // $ExpectError
	toSortedhp( x, { 'dims': null } ); // $ExpectError
	toSortedhp( x, { 'dims': {} } ); // $ExpectError
	toSortedhp( x, { 'dims': ( x: number ): number => x } ); // $ExpectError

	toSortedhp( x, 1.0, { 'dims': '5' } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dims': 5 } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dims': true } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dims': false } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dims': null } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dims': {} } ); // $ExpectError
	toSortedhp( x, 1.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp(); // $ExpectError
	toSortedhp( x, 10.0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign( x, y ); // $ExpectType float64ndarray
	toSortedhp.assign( x, y, 1.0 ); // $ExpectType float64ndarray
	toSortedhp.assign( x, y, {} ); // $ExpectType float64ndarray
	toSortedhp.assign( x, y, 1.0, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign( '5', y ); // $ExpectError
	toSortedhp.assign( 5, y ); // $ExpectError
	toSortedhp.assign( true, y ); // $ExpectError
	toSortedhp.assign( false, y ); // $ExpectError
	toSortedhp.assign( null, y ); // $ExpectError
	toSortedhp.assign( void 0, y ); // $ExpectError
	toSortedhp.assign( {}, y ); // $ExpectError
	toSortedhp.assign( ( x: number ): number => x, y ); // $ExpectError

	toSortedhp.assign( '5', y, 1.0 ); // $ExpectError
	toSortedhp.assign( 5, y, 1.0 ); // $ExpectError
	toSortedhp.assign( true, y, 1.0 ); // $ExpectError
	toSortedhp.assign( false, y, 1.0 ); // $ExpectError
	toSortedhp.assign( null, y, 1.0 ); // $ExpectError
	toSortedhp.assign( void 0, y, 1.0 ); // $ExpectError
	toSortedhp.assign( {}, y, 1.0 ); // $ExpectError
	toSortedhp.assign( ( x: number ): number => x, y, 1.0 ); // $ExpectError

	toSortedhp.assign( '5', y, {} ); // $ExpectError
	toSortedhp.assign( 5, y, {} ); // $ExpectError
	toSortedhp.assign( true, y, {} ); // $ExpectError
	toSortedhp.assign( false, y, {} ); // $ExpectError
	toSortedhp.assign( null, y, {} ); // $ExpectError
	toSortedhp.assign( void 0, y, {} ); // $ExpectError
	toSortedhp.assign( {}, y, {} ); // $ExpectError
	toSortedhp.assign( ( x: number ): number => x, y, {} ); // $ExpectError

	toSortedhp.assign( '5', y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( 5, y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( true, y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( false, y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( null, y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( void 0, y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( {}, y, 1.0, {} ); // $ExpectError
	toSortedhp.assign( ( x: number ): number => x, y, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign( x, '5' ); // $ExpectError
	toSortedhp.assign( x, 5 ); // $ExpectError
	toSortedhp.assign( x, true ); // $ExpectError
	toSortedhp.assign( x, false ); // $ExpectError
	toSortedhp.assign( x, null ); // $ExpectError
	toSortedhp.assign( x, void 0 ); // $ExpectError
	toSortedhp.assign( x, {} ); // $ExpectError
	toSortedhp.assign( x, ( x: number ): number => x ); // $ExpectError

	toSortedhp.assign( x, '5', 1.0 ); // $ExpectError
	toSortedhp.assign( x, 5, 1.0 ); // $ExpectError
	toSortedhp.assign( x, true, 1.0 ); // $ExpectError
	toSortedhp.assign( x, false, 1.0 ); // $ExpectError
	toSortedhp.assign( x, null, 1.0 ); // $ExpectError
	toSortedhp.assign( x, void 0, 1.0 ); // $ExpectError
	toSortedhp.assign( x, {}, 1.0 ); // $ExpectError
	toSortedhp.assign( x, ( x: number ): number => x, 1.0 ); // $ExpectError

	toSortedhp.assign( x, '5', {} ); // $ExpectError
	toSortedhp.assign( x, 5, {} ); // $ExpectError
	toSortedhp.assign( x, true, {} ); // $ExpectError
	toSortedhp.assign( x, false, {} ); // $ExpectError
	toSortedhp.assign( x, null, {} ); // $ExpectError
	toSortedhp.assign( x, void 0, {} ); // $ExpectError
	toSortedhp.assign( x, {}, {} ); // $ExpectError
	toSortedhp.assign( x, ( x: number ): number => x, {} ); // $ExpectError

	toSortedhp.assign( x, '5', 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, 5, 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, true, 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, false, 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, null, 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, void 0, 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, {}, 1.0, {} ); // $ExpectError
	toSortedhp.assign( x, ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sort order argument which is not an ndarray, supported string literal, or scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign( x, y, true ); // $ExpectError
	toSortedhp.assign( x, y, false ); // $ExpectError
	toSortedhp.assign( x, y, [] ); // $ExpectError
	toSortedhp.assign( x, y, ( x: number ): number => x ); // $ExpectError

	toSortedhp.assign( x, y, 'foo', {} ); // $ExpectError
	toSortedhp.assign( x, y, true, {} ); // $ExpectError
	toSortedhp.assign( x, y, false, {} ); // $ExpectError
	toSortedhp.assign( x, y, null, {} ); // $ExpectError
	toSortedhp.assign( x, y, void 0, {} ); // $ExpectError
	toSortedhp.assign( x, y, [], {} ); // $ExpectError
	toSortedhp.assign( x, y, {}, {} ); // $ExpectError
	toSortedhp.assign( x, y, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign( x, y, true ); // $ExpectError
	toSortedhp.assign( x, y, false ); // $ExpectError
	toSortedhp.assign( x, y, [] ); // $ExpectError
	toSortedhp.assign( x, y, ( x: number ): number => x ); // $ExpectError

	toSortedhp.assign( x, y, 1.0, '5' ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, true ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, false ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, null ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, [] ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign( x, y, { 'dims': '5' } ); // $ExpectError
	toSortedhp.assign( x, y, { 'dims': 5 } ); // $ExpectError
	toSortedhp.assign( x, y, { 'dims': true } ); // $ExpectError
	toSortedhp.assign( x, y, { 'dims': false } ); // $ExpectError
	toSortedhp.assign( x, y, { 'dims': null } ); // $ExpectError
	toSortedhp.assign( x, y, { 'dims': {} } ); // $ExpectError
	toSortedhp.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError

	toSortedhp.assign( x, y, 1.0, { 'dims': '5' } ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, { 'dims': 5 } ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, { 'dims': true } ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, { 'dims': false } ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, { 'dims': null } ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, { 'dims': {} } ); // $ExpectError
	toSortedhp.assign( x, y, 1.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSortedhp.assign(); // $ExpectError
	toSortedhp.assign( x ); // $ExpectError
	toSortedhp.assign( x, y, 10.0, {}, {} ); // $ExpectError
}

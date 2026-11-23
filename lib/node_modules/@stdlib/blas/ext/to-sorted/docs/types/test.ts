/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
import toSorted = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted( x ); // $ExpectType float64ndarray
	toSorted( x, 1.0 ); // $ExpectType float64ndarray
	toSorted( x, {} ); // $ExpectType float64ndarray
	toSorted( x, 1.0, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	toSorted( '5' ); // $ExpectError
	toSorted( 5 ); // $ExpectError
	toSorted( true ); // $ExpectError
	toSorted( false ); // $ExpectError
	toSorted( null ); // $ExpectError
	toSorted( void 0 ); // $ExpectError
	toSorted( {} ); // $ExpectError
	toSorted( ( x: number ): number => x ); // $ExpectError

	toSorted( '5', 1.0 ); // $ExpectError
	toSorted( 5, 1.0 ); // $ExpectError
	toSorted( true, 1.0 ); // $ExpectError
	toSorted( false, 1.0 ); // $ExpectError
	toSorted( null, 1.0 ); // $ExpectError
	toSorted( void 0, 1.0 ); // $ExpectError
	toSorted( {}, 1.0 ); // $ExpectError
	toSorted( ( x: number ): number => x, 1.0 ); // $ExpectError

	toSorted( '5', {} ); // $ExpectError
	toSorted( 5, {} ); // $ExpectError
	toSorted( true, {} ); // $ExpectError
	toSorted( false, {} ); // $ExpectError
	toSorted( null, {} ); // $ExpectError
	toSorted( void 0, {} ); // $ExpectError
	toSorted( {}, {} ); // $ExpectError
	toSorted( ( x: number ): number => x, {} ); // $ExpectError

	toSorted( '5', 1.0, {} ); // $ExpectError
	toSorted( 5, 1.0, {} ); // $ExpectError
	toSorted( true, 1.0, {} ); // $ExpectError
	toSorted( false, 1.0, {} ); // $ExpectError
	toSorted( null, 1.0, {} ); // $ExpectError
	toSorted( void 0, 1.0, {} ); // $ExpectError
	toSorted( {}, 1.0, {} ); // $ExpectError
	toSorted( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a sort order argument which is not an ndarray, supported string literal, or scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted( x, true ); // $ExpectError
	toSorted( x, false ); // $ExpectError
	toSorted( x, [] ); // $ExpectError
	toSorted( x, ( x: number ): number => x ); // $ExpectError

	toSorted( x, 'foo', {} ); // $ExpectError
	toSorted( x, true, {} ); // $ExpectError
	toSorted( x, false, {} ); // $ExpectError
	toSorted( x, null, {} ); // $ExpectError
	toSorted( x, void 0, {} ); // $ExpectError
	toSorted( x, [], {} ); // $ExpectError
	toSorted( x, {}, {} ); // $ExpectError
	toSorted( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted( x, true ); // $ExpectError
	toSorted( x, false ); // $ExpectError
	toSorted( x, [] ); // $ExpectError
	toSorted( x, ( x: number ): number => x ); // $ExpectError

	toSorted( x, 1.0, '5' ); // $ExpectError
	toSorted( x, 1.0, true ); // $ExpectError
	toSorted( x, 1.0, false ); // $ExpectError
	toSorted( x, 1.0, null ); // $ExpectError
	toSorted( x, 1.0, [] ); // $ExpectError
	toSorted( x, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted( x, { 'dtype': '5' } ); // $ExpectError
	toSorted( x, { 'dtype': 5 } ); // $ExpectError
	toSorted( x, { 'dtype': true } ); // $ExpectError
	toSorted( x, { 'dtype': false } ); // $ExpectError
	toSorted( x, { 'dtype': null } ); // $ExpectError
	toSorted( x, { 'dtype': [] } ); // $ExpectError
	toSorted( x, { 'dtype': {} } ); // $ExpectError
	toSorted( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	toSorted( x, 1.0, { 'dtype': '5' } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': 5 } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': true } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': false } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': null } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': [] } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': {} } ); // $ExpectError
	toSorted( x, 1.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted( x, { 'dims': '5' } ); // $ExpectError
	toSorted( x, { 'dims': 5 } ); // $ExpectError
	toSorted( x, { 'dims': true } ); // $ExpectError
	toSorted( x, { 'dims': false } ); // $ExpectError
	toSorted( x, { 'dims': null } ); // $ExpectError
	toSorted( x, { 'dims': {} } ); // $ExpectError
	toSorted( x, { 'dims': ( x: number ): number => x } ); // $ExpectError

	toSorted( x, 1.0, { 'dims': '5' } ); // $ExpectError
	toSorted( x, 1.0, { 'dims': 5 } ); // $ExpectError
	toSorted( x, 1.0, { 'dims': true } ); // $ExpectError
	toSorted( x, 1.0, { 'dims': false } ); // $ExpectError
	toSorted( x, 1.0, { 'dims': null } ); // $ExpectError
	toSorted( x, 1.0, { 'dims': {} } ); // $ExpectError
	toSorted( x, 1.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted(); // $ExpectError
	toSorted( x, 10.0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign( x, y ); // $ExpectType float64ndarray
	toSorted.assign( x, y, {} ); // $ExpectType float64ndarray
	toSorted.assign( x, 1.0, y ); // $ExpectType float64ndarray
	toSorted.assign( x, 1.0, y, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign( '5', y ); // $ExpectError
	toSorted.assign( 5, y ); // $ExpectError
	toSorted.assign( true, y ); // $ExpectError
	toSorted.assign( false, y ); // $ExpectError
	toSorted.assign( null, y ); // $ExpectError
	toSorted.assign( void 0, y ); // $ExpectError
	toSorted.assign( {}, y ); // $ExpectError
	toSorted.assign( ( x: number ): number => x, y ); // $ExpectError

	toSorted.assign( '5', y, {} ); // $ExpectError
	toSorted.assign( 5, y, {} ); // $ExpectError
	toSorted.assign( true, y, {} ); // $ExpectError
	toSorted.assign( false, y, {} ); // $ExpectError
	toSorted.assign( null, y, {} ); // $ExpectError
	toSorted.assign( void 0, y, {} ); // $ExpectError
	toSorted.assign( {}, y, {} ); // $ExpectError
	toSorted.assign( ( x: number ): number => x, y, {} ); // $ExpectError

	toSorted.assign( '5', 1.0, y ); // $ExpectError
	toSorted.assign( 5, 1.0, y ); // $ExpectError
	toSorted.assign( true, 1.0, y ); // $ExpectError
	toSorted.assign( false, 1.0, y ); // $ExpectError
	toSorted.assign( null, 1.0, y ); // $ExpectError
	toSorted.assign( void 0, 1.0, y ); // $ExpectError
	toSorted.assign( {}, 1.0, y ); // $ExpectError
	toSorted.assign( ( x: number ): number => x, 1.0, y ); // $ExpectError

	toSorted.assign( '5', 1.0, y, {} ); // $ExpectError
	toSorted.assign( 5, 1.0, y, {} ); // $ExpectError
	toSorted.assign( true, 1.0, y, {} ); // $ExpectError
	toSorted.assign( false, 1.0, y, {} ); // $ExpectError
	toSorted.assign( null, 1.0, y, {} ); // $ExpectError
	toSorted.assign( void 0, 1.0, y, {} ); // $ExpectError
	toSorted.assign( {}, 1.0, y, {} ); // $ExpectError
	toSorted.assign( ( x: number ): number => x, 1.0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sort order argument which is not an ndarray, supported string literal, or scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign( x, true, y ); // $ExpectError
	toSorted.assign( x, false, y ); // $ExpectError
	toSorted.assign( x, [], y ); // $ExpectError
	toSorted.assign( x, ( x: number ): number => x, y ); // $ExpectError

	toSorted.assign( x, 'foo', y, {} ); // $ExpectError
	toSorted.assign( x, true, y, {} ); // $ExpectError
	toSorted.assign( x, false, y, {} ); // $ExpectError
	toSorted.assign( x, null, y, {} ); // $ExpectError
	toSorted.assign( x, void 0, y, {} ); // $ExpectError
	toSorted.assign( x, [], y, {} ); // $ExpectError
	toSorted.assign( x, ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign( x, '5' ); // $ExpectError
	toSorted.assign( x, 5 ); // $ExpectError
	toSorted.assign( x, true ); // $ExpectError
	toSorted.assign( x, false ); // $ExpectError
	toSorted.assign( x, null ); // $ExpectError
	toSorted.assign( x, void 0 ); // $ExpectError
	toSorted.assign( x, {} ); // $ExpectError
	toSorted.assign( x, ( x: number ): number => x ); // $ExpectError

	toSorted.assign( x, 1.0, '5' ); // $ExpectError
	toSorted.assign( x, 1.0, 5 ); // $ExpectError
	toSorted.assign( x, 1.0, true ); // $ExpectError
	toSorted.assign( x, 1.0, false ); // $ExpectError
	toSorted.assign( x, 1.0, null ); // $ExpectError
	toSorted.assign( x, 1.0, void 0 ); // $ExpectError
	toSorted.assign( x, 1.0, {} ); // $ExpectError
	toSorted.assign( x, 1.0, ( x: number ): number => x ); // $ExpectError

	toSorted.assign( x, 1.0, '5', {} ); // $ExpectError
	toSorted.assign( x, 1.0, 5, {} ); // $ExpectError
	toSorted.assign( x, 1.0, true, {} ); // $ExpectError
	toSorted.assign( x, 1.0, false, {} ); // $ExpectError
	toSorted.assign( x, 1.0, null, {} ); // $ExpectError
	toSorted.assign( x, 1.0, void 0, {} ); // $ExpectError
	toSorted.assign( x, 1.0, {}, {} ); // $ExpectError
	toSorted.assign( x, 1.0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign( x, y, '5' ); // $ExpectError
	toSorted.assign( x, y, true ); // $ExpectError
	toSorted.assign( x, y, false ); // $ExpectError
	toSorted.assign( x, y, null ); // $ExpectError
	toSorted.assign( x, y, [] ); // $ExpectError
	toSorted.assign( x, y, ( x: number ): number => x ); // $ExpectError

	toSorted.assign( x, 1.0, y, '5' ); // $ExpectError
	toSorted.assign( x, 1.0, y, true ); // $ExpectError
	toSorted.assign( x, 1.0, y, false ); // $ExpectError
	toSorted.assign( x, 1.0, y, null ); // $ExpectError
	toSorted.assign( x, 1.0, y, [] ); // $ExpectError
	toSorted.assign( x, 1.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign( x, y, { 'dims': '5' } ); // $ExpectError
	toSorted.assign( x, y, { 'dims': 5 } ); // $ExpectError
	toSorted.assign( x, y, { 'dims': true } ); // $ExpectError
	toSorted.assign( x, y, { 'dims': false } ); // $ExpectError
	toSorted.assign( x, y, { 'dims': null } ); // $ExpectError
	toSorted.assign( x, y, { 'dims': {} } ); // $ExpectError
	toSorted.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError

	toSorted.assign( x, 1.0, y, { 'dims': '5' } ); // $ExpectError
	toSorted.assign( x, 1.0, y, { 'dims': 5 } ); // $ExpectError
	toSorted.assign( x, 1.0, y, { 'dims': true } ); // $ExpectError
	toSorted.assign( x, 1.0, y, { 'dims': false } ); // $ExpectError
	toSorted.assign( x, 1.0, y, { 'dims': null } ); // $ExpectError
	toSorted.assign( x, 1.0, y, { 'dims': {} } ); // $ExpectError
	toSorted.assign( x, 1.0, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	toSorted.assign(); // $ExpectError
	toSorted.assign( x ); // $ExpectError
	toSorted.assign( x, 1.0, y, {}, {} ); // $ExpectError
}

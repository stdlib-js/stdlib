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

/* eslint-disable @typescript-eslint/no-unused-expressions, space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray/zeros' );
import lastIndexOfTruthy = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy( x ); // $ExpectType OutputArray
	lastIndexOfTruthy( x, 1 ); // $ExpectType OutputArray
	lastIndexOfTruthy( x, {} ); // $ExpectType OutputArray
	lastIndexOfTruthy( x, 1, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	lastIndexOfTruthy( '5' ); // $ExpectError
	lastIndexOfTruthy( 5 ); // $ExpectError
	lastIndexOfTruthy( true ); // $ExpectError
	lastIndexOfTruthy( false ); // $ExpectError
	lastIndexOfTruthy( null ); // $ExpectError
	lastIndexOfTruthy( void 0 ); // $ExpectError
	lastIndexOfTruthy( {} ); // $ExpectError
	lastIndexOfTruthy( ( x: number ): number => x ); // $ExpectError

	lastIndexOfTruthy( '5', 0 ); // $ExpectError
	lastIndexOfTruthy( 5, 0 ); // $ExpectError
	lastIndexOfTruthy( true, 0 ); // $ExpectError
	lastIndexOfTruthy( false, 0 ); // $ExpectError
	lastIndexOfTruthy( null, 0 ); // $ExpectError
	lastIndexOfTruthy( void 0, 0 ); // $ExpectError
	lastIndexOfTruthy( {}, 0 ); // $ExpectError
	lastIndexOfTruthy( ( x: number ): number => x, 0 ); // $ExpectError

	lastIndexOfTruthy( '5', {} ); // $ExpectError
	lastIndexOfTruthy( 5, {} ); // $ExpectError
	lastIndexOfTruthy( true, {} ); // $ExpectError
	lastIndexOfTruthy( false, {} ); // $ExpectError
	lastIndexOfTruthy( null, {} ); // $ExpectError
	lastIndexOfTruthy( void 0, {} ); // $ExpectError
	lastIndexOfTruthy( {}, {} ); // $ExpectError
	lastIndexOfTruthy( ( x: number ): number => x, {} ); // $ExpectError

	lastIndexOfTruthy( '5', 0, {} ); // $ExpectError
	lastIndexOfTruthy( 5, 0, {} ); // $ExpectError
	lastIndexOfTruthy( true, 0, {} ); // $ExpectError
	lastIndexOfTruthy( false, 0, {} ); // $ExpectError
	lastIndexOfTruthy( null, 0, {} ); // $ExpectError
	lastIndexOfTruthy( void 0, 0, {} ); // $ExpectError
	lastIndexOfTruthy( {}, 0, {} ); // $ExpectError
	lastIndexOfTruthy( ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy( x, '5' ); // $ExpectError
	lastIndexOfTruthy( x, true ); // $ExpectError
	lastIndexOfTruthy( x, false ); // $ExpectError
	lastIndexOfTruthy( x, [] ); // $ExpectError
	lastIndexOfTruthy( x, ( x: number ): number => x ); // $ExpectError

	lastIndexOfTruthy( x, '5', {} ); // $ExpectError
	lastIndexOfTruthy( x, true, {} ); // $ExpectError
	lastIndexOfTruthy( x, false, {} ); // $ExpectError
	lastIndexOfTruthy( x, [], {} ); // $ExpectError
	lastIndexOfTruthy( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy( x, '5' ); // $ExpectError
	lastIndexOfTruthy( x, true ); // $ExpectError
	lastIndexOfTruthy( x, false ); // $ExpectError
	lastIndexOfTruthy( x, [] ); // $ExpectError
	lastIndexOfTruthy( x, ( x: number ): number => x ); // $ExpectError

	lastIndexOfTruthy( x, 0, '5' ); // $ExpectError
	lastIndexOfTruthy( x, 0, true ); // $ExpectError
	lastIndexOfTruthy( x, 0, false ); // $ExpectError
	lastIndexOfTruthy( x, 0, null ); // $ExpectError
	lastIndexOfTruthy( x, 0, [] ); // $ExpectError
	lastIndexOfTruthy( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy( x, { 'dtype': '5' } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': 5 } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': true } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': false } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': null } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': [] } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': {} } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	lastIndexOfTruthy( x, 0, { 'dtype': '5' } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': 5 } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': true } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': false } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': null } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': [] } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': {} } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy( x, { 'dim': '5' } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dim': true } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dim': false } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dim': null } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dim': [] } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dim': {} } ); // $ExpectError
	lastIndexOfTruthy( x, { 'dim': ( x: number ): number => x } ); // $ExpectError

	lastIndexOfTruthy( x, 0, { 'dim': '5' } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dim': true } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dim': false } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dim': null } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dim': [] } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dim': {} } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy( x, { 'keepdims': '5' } ); // $ExpectError
	lastIndexOfTruthy( x, { 'keepdims': 5 } ); // $ExpectError
	lastIndexOfTruthy( x, { 'keepdims': null } ); // $ExpectError
	lastIndexOfTruthy( x, { 'keepdims': {} } ); // $ExpectError
	lastIndexOfTruthy( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError

	lastIndexOfTruthy( x, 0, { 'keepdims': '5' } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'keepdims': 5 } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'keepdims': null } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'keepdims': {} } ); // $ExpectError
	lastIndexOfTruthy( x, 0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy(); // $ExpectError
	lastIndexOfTruthy( x, 0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexOfTruthy.assign( x, y ); // $ExpectType int32ndarray
	lastIndexOfTruthy.assign( x, y, {} ); // $ExpectType int32ndarray
	lastIndexOfTruthy.assign( x, 1, y ); // $ExpectType int32ndarray
	lastIndexOfTruthy.assign( x, 1, y, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexOfTruthy.assign( '5', y ); // $ExpectError
	lastIndexOfTruthy.assign( 5, y ); // $ExpectError
	lastIndexOfTruthy.assign( true, y ); // $ExpectError
	lastIndexOfTruthy.assign( false, y ); // $ExpectError
	lastIndexOfTruthy.assign( null, y ); // $ExpectError
	lastIndexOfTruthy.assign( void 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( {}, y ); // $ExpectError
	lastIndexOfTruthy.assign( ( x: number ): number => x, y ); // $ExpectError

	lastIndexOfTruthy.assign( '5', 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( 5, 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( true, 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( false, 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( null, 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( void 0, 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( {}, 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( ( x: number ): number => x, 0, y ); // $ExpectError

	lastIndexOfTruthy.assign( '5', y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( 5, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( true, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( false, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( null, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( void 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( {}, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( ( x: number ): number => x, y, {} ); // $ExpectError

	lastIndexOfTruthy.assign( '5', 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( 5, 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( true, 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( false, 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( null, 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( void 0, 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( {}, 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( ( x: number ): number => x, 0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexOfTruthy.assign( x, '5', y ); // $ExpectError
	lastIndexOfTruthy.assign( x, true, y ); // $ExpectError
	lastIndexOfTruthy.assign( x, false, y ); // $ExpectError
	lastIndexOfTruthy.assign( x, null, y ); // $ExpectError
	lastIndexOfTruthy.assign( x, void 0, y ); // $ExpectError
	lastIndexOfTruthy.assign( x, {}, y ); // $ExpectError
	lastIndexOfTruthy.assign( x, ( x: number ): number => x, y ); // $ExpectError

	lastIndexOfTruthy.assign( x, '5', y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, true, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, false, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, null, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, void 0, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, {}, y, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexOfTruthy.assign( x, '5' ); // $ExpectError
	lastIndexOfTruthy.assign( x, 5 ); // $ExpectError
	lastIndexOfTruthy.assign( x, true ); // $ExpectError
	lastIndexOfTruthy.assign( x, false ); // $ExpectError
	lastIndexOfTruthy.assign( x, null ); // $ExpectError
	lastIndexOfTruthy.assign( x, void 0 ); // $ExpectError
	lastIndexOfTruthy.assign( x, ( x: number ): number => x ); // $ExpectError

	lastIndexOfTruthy.assign( x, '5', {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 5, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, true, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, false, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, null, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, void 0, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, ( x: number ): number => x, {} ); // $ExpectError

	lastIndexOfTruthy.assign( x, 1, '5' ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, 5 ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, true ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, false ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, null ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, void 0 ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, ( x: number ): number => x ); // $ExpectError

	lastIndexOfTruthy.assign( x, 1, '5', {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, 5, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, true, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, false, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, null, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, void 0, {} ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexOfTruthy.assign( x, y, '5' ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, true ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, false ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, null ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, [] ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, ( x: number ): number => x ); // $ExpectError

	lastIndexOfTruthy.assign( x, 1, y, '5' ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, true ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, false ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, null ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, [] ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexOfTruthy.assign( x, y, { 'dim': '5' } ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, { 'dim': true } ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, { 'dim': false } ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, { 'dim': null } ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, { 'dim': [] } ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, { 'dim': {} } ); // $ExpectError
	lastIndexOfTruthy.assign( x, y, { 'dim': ( x: number ): number => x } ); // $ExpectError

	lastIndexOfTruthy.assign( x, 1, y, { 'dim': '5' } ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, { 'dim': true } ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, { 'dim': false } ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, { 'dim': null } ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, { 'dim': [] } ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, { 'dim': {} } ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexOfTruthy.assign(); // $ExpectError
	lastIndexOfTruthy.assign( x ); // $ExpectError
	lastIndexOfTruthy.assign( x, 1, y, {}, {} ); // $ExpectError
}

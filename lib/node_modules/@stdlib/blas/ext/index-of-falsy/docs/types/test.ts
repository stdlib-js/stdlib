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
import indexOfFalsy = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy( x ); // $ExpectType OutputArray
	indexOfFalsy( x, 1 ); // $ExpectType OutputArray
	indexOfFalsy( x, {} ); // $ExpectType OutputArray
	indexOfFalsy( x, 1, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	indexOfFalsy( '5' ); // $ExpectError
	indexOfFalsy( 5 ); // $ExpectError
	indexOfFalsy( true ); // $ExpectError
	indexOfFalsy( false ); // $ExpectError
	indexOfFalsy( null ); // $ExpectError
	indexOfFalsy( void 0 ); // $ExpectError
	indexOfFalsy( {} ); // $ExpectError
	indexOfFalsy( ( x: number ): number => x ); // $ExpectError

	indexOfFalsy( '5', 0 ); // $ExpectError
	indexOfFalsy( 5, 0 ); // $ExpectError
	indexOfFalsy( true, 0 ); // $ExpectError
	indexOfFalsy( false, 0 ); // $ExpectError
	indexOfFalsy( null, 0 ); // $ExpectError
	indexOfFalsy( void 0, 0 ); // $ExpectError
	indexOfFalsy( {}, 0 ); // $ExpectError
	indexOfFalsy( ( x: number ): number => x, 0 ); // $ExpectError

	indexOfFalsy( '5', {} ); // $ExpectError
	indexOfFalsy( 5, {} ); // $ExpectError
	indexOfFalsy( true, {} ); // $ExpectError
	indexOfFalsy( false, {} ); // $ExpectError
	indexOfFalsy( null, {} ); // $ExpectError
	indexOfFalsy( void 0, {} ); // $ExpectError
	indexOfFalsy( {}, {} ); // $ExpectError
	indexOfFalsy( ( x: number ): number => x, {} ); // $ExpectError

	indexOfFalsy( '5', 0, {} ); // $ExpectError
	indexOfFalsy( 5, 0, {} ); // $ExpectError
	indexOfFalsy( true, 0, {} ); // $ExpectError
	indexOfFalsy( false, 0, {} ); // $ExpectError
	indexOfFalsy( null, 0, {} ); // $ExpectError
	indexOfFalsy( void 0, 0, {} ); // $ExpectError
	indexOfFalsy( {}, 0, {} ); // $ExpectError
	indexOfFalsy( ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy( x, '5' ); // $ExpectError
	indexOfFalsy( x, true ); // $ExpectError
	indexOfFalsy( x, false ); // $ExpectError
	indexOfFalsy( x, [] ); // $ExpectError
	indexOfFalsy( x, ( x: number ): number => x ); // $ExpectError

	indexOfFalsy( x, '5', {} ); // $ExpectError
	indexOfFalsy( x, true, {} ); // $ExpectError
	indexOfFalsy( x, false, {} ); // $ExpectError
	indexOfFalsy( x, [], {} ); // $ExpectError
	indexOfFalsy( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy( x, '5' ); // $ExpectError
	indexOfFalsy( x, true ); // $ExpectError
	indexOfFalsy( x, false ); // $ExpectError
	indexOfFalsy( x, [] ); // $ExpectError
	indexOfFalsy( x, ( x: number ): number => x ); // $ExpectError

	indexOfFalsy( x, 0, '5' ); // $ExpectError
	indexOfFalsy( x, 0, true ); // $ExpectError
	indexOfFalsy( x, 0, false ); // $ExpectError
	indexOfFalsy( x, 0, null ); // $ExpectError
	indexOfFalsy( x, 0, [] ); // $ExpectError
	indexOfFalsy( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy( x, { 'dtype': '5' } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': 5 } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': true } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': false } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': null } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': [] } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': {} } ); // $ExpectError
	indexOfFalsy( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	indexOfFalsy( x, 0, { 'dtype': '5' } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': 5 } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': true } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': false } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': null } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': [] } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': {} } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy( x, { 'dim': '5' } ); // $ExpectError
	indexOfFalsy( x, { 'dim': true } ); // $ExpectError
	indexOfFalsy( x, { 'dim': false } ); // $ExpectError
	indexOfFalsy( x, { 'dim': null } ); // $ExpectError
	indexOfFalsy( x, { 'dim': [] } ); // $ExpectError
	indexOfFalsy( x, { 'dim': {} } ); // $ExpectError
	indexOfFalsy( x, { 'dim': ( x: number ): number => x } ); // $ExpectError

	indexOfFalsy( x, 0, { 'dim': '5' } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dim': true } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dim': false } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dim': null } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dim': [] } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dim': {} } ); // $ExpectError
	indexOfFalsy( x, 0, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy( x, { 'keepdims': '5' } ); // $ExpectError
	indexOfFalsy( x, { 'keepdims': 5 } ); // $ExpectError
	indexOfFalsy( x, { 'keepdims': null } ); // $ExpectError
	indexOfFalsy( x, { 'keepdims': {} } ); // $ExpectError
	indexOfFalsy( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError

	indexOfFalsy( x, 0, { 'keepdims': '5' } ); // $ExpectError
	indexOfFalsy( x, 0, { 'keepdims': 5 } ); // $ExpectError
	indexOfFalsy( x, 0, { 'keepdims': null } ); // $ExpectError
	indexOfFalsy( x, 0, { 'keepdims': {} } ); // $ExpectError
	indexOfFalsy( x, 0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy(); // $ExpectError
	indexOfFalsy( x, 0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfFalsy.assign( x, y ); // $ExpectType int32ndarray
	indexOfFalsy.assign( x, y, {} ); // $ExpectType int32ndarray
	indexOfFalsy.assign( x, 1, y ); // $ExpectType int32ndarray
	indexOfFalsy.assign( x, 1, y, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfFalsy.assign( '5', y ); // $ExpectError
	indexOfFalsy.assign( 5, y ); // $ExpectError
	indexOfFalsy.assign( true, y ); // $ExpectError
	indexOfFalsy.assign( false, y ); // $ExpectError
	indexOfFalsy.assign( null, y ); // $ExpectError
	indexOfFalsy.assign( void 0, y ); // $ExpectError
	indexOfFalsy.assign( {}, y ); // $ExpectError
	indexOfFalsy.assign( ( x: number ): number => x, y ); // $ExpectError

	indexOfFalsy.assign( '5', 0, y ); // $ExpectError
	indexOfFalsy.assign( 5, 0, y ); // $ExpectError
	indexOfFalsy.assign( true, 0, y ); // $ExpectError
	indexOfFalsy.assign( false, 0, y ); // $ExpectError
	indexOfFalsy.assign( null, 0, y ); // $ExpectError
	indexOfFalsy.assign( void 0, 0, y ); // $ExpectError
	indexOfFalsy.assign( {}, 0, y ); // $ExpectError
	indexOfFalsy.assign( ( x: number ): number => x, 0, y ); // $ExpectError

	indexOfFalsy.assign( '5', y, {} ); // $ExpectError
	indexOfFalsy.assign( 5, y, {} ); // $ExpectError
	indexOfFalsy.assign( true, y, {} ); // $ExpectError
	indexOfFalsy.assign( false, y, {} ); // $ExpectError
	indexOfFalsy.assign( null, y, {} ); // $ExpectError
	indexOfFalsy.assign( void 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( {}, y, {} ); // $ExpectError
	indexOfFalsy.assign( ( x: number ): number => x, y, {} ); // $ExpectError

	indexOfFalsy.assign( '5', 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( 5, 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( true, 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( false, 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( null, 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( void 0, 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( {}, 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( ( x: number ): number => x, 0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfFalsy.assign( x, '5', y ); // $ExpectError
	indexOfFalsy.assign( x, true, y ); // $ExpectError
	indexOfFalsy.assign( x, false, y ); // $ExpectError
	indexOfFalsy.assign( x, null, y ); // $ExpectError
	indexOfFalsy.assign( x, void 0, y ); // $ExpectError
	indexOfFalsy.assign( x, {}, y ); // $ExpectError
	indexOfFalsy.assign( x, ( x: number ): number => x, y ); // $ExpectError

	indexOfFalsy.assign( x, '5', y, {} ); // $ExpectError
	indexOfFalsy.assign( x, true, y, {} ); // $ExpectError
	indexOfFalsy.assign( x, false, y, {} ); // $ExpectError
	indexOfFalsy.assign( x, null, y, {} ); // $ExpectError
	indexOfFalsy.assign( x, void 0, y, {} ); // $ExpectError
	indexOfFalsy.assign( x, {}, y, {} ); // $ExpectError
	indexOfFalsy.assign( x, ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfFalsy.assign( x, '5' ); // $ExpectError
	indexOfFalsy.assign( x, 5 ); // $ExpectError
	indexOfFalsy.assign( x, true ); // $ExpectError
	indexOfFalsy.assign( x, false ); // $ExpectError
	indexOfFalsy.assign( x, null ); // $ExpectError
	indexOfFalsy.assign( x, void 0 ); // $ExpectError
	indexOfFalsy.assign( x, ( x: number ): number => x ); // $ExpectError

	indexOfFalsy.assign( x, '5', {} ); // $ExpectError
	indexOfFalsy.assign( x, 5, {} ); // $ExpectError
	indexOfFalsy.assign( x, true, {} ); // $ExpectError
	indexOfFalsy.assign( x, false, {} ); // $ExpectError
	indexOfFalsy.assign( x, null, {} ); // $ExpectError
	indexOfFalsy.assign( x, void 0, {} ); // $ExpectError
	indexOfFalsy.assign( x, ( x: number ): number => x, {} ); // $ExpectError

	indexOfFalsy.assign( x, 1, '5' ); // $ExpectError
	indexOfFalsy.assign( x, 1, 5 ); // $ExpectError
	indexOfFalsy.assign( x, 1, true ); // $ExpectError
	indexOfFalsy.assign( x, 1, false ); // $ExpectError
	indexOfFalsy.assign( x, 1, null ); // $ExpectError
	indexOfFalsy.assign( x, 1, void 0 ); // $ExpectError
	indexOfFalsy.assign( x, 1, ( x: number ): number => x ); // $ExpectError

	indexOfFalsy.assign( x, 1, '5', {} ); // $ExpectError
	indexOfFalsy.assign( x, 1, 5, {} ); // $ExpectError
	indexOfFalsy.assign( x, 1, true, {} ); // $ExpectError
	indexOfFalsy.assign( x, 1, false, {} ); // $ExpectError
	indexOfFalsy.assign( x, 1, null, {} ); // $ExpectError
	indexOfFalsy.assign( x, 1, void 0, {} ); // $ExpectError
	indexOfFalsy.assign( x, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfFalsy.assign( x, y, '5' ); // $ExpectError
	indexOfFalsy.assign( x, y, true ); // $ExpectError
	indexOfFalsy.assign( x, y, false ); // $ExpectError
	indexOfFalsy.assign( x, y, null ); // $ExpectError
	indexOfFalsy.assign( x, y, [] ); // $ExpectError
	indexOfFalsy.assign( x, y, ( x: number ): number => x ); // $ExpectError

	indexOfFalsy.assign( x, 1, y, '5' ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, true ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, false ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, null ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, [] ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfFalsy.assign( x, y, { 'dim': '5' } ); // $ExpectError
	indexOfFalsy.assign( x, y, { 'dim': true } ); // $ExpectError
	indexOfFalsy.assign( x, y, { 'dim': false } ); // $ExpectError
	indexOfFalsy.assign( x, y, { 'dim': null } ); // $ExpectError
	indexOfFalsy.assign( x, y, { 'dim': [] } ); // $ExpectError
	indexOfFalsy.assign( x, y, { 'dim': {} } ); // $ExpectError
	indexOfFalsy.assign( x, y, { 'dim': ( x: number ): number => x } ); // $ExpectError

	indexOfFalsy.assign( x, 1, y, { 'dim': '5' } ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, { 'dim': true } ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, { 'dim': false } ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, { 'dim': null } ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, { 'dim': [] } ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, { 'dim': {} } ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfFalsy.assign(); // $ExpectError
	indexOfFalsy.assign( x ); // $ExpectError
	indexOfFalsy.assign( x, 1, y, {}, {} ); // $ExpectError
}

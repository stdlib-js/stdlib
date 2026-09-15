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
import indexOfNotEqual = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual<number>( x, 0.0 ); // $ExpectType OutputArray
	indexOfNotEqual<number>( x, 0.0, 1 ); // $ExpectType OutputArray
	indexOfNotEqual<number>( x, 0.0, {} ); // $ExpectType OutputArray
	indexOfNotEqual<number>( x, 0.0, 1, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	indexOfNotEqual( '5', 0.0 ); // $ExpectError
	indexOfNotEqual( 5, 0.0 ); // $ExpectError
	indexOfNotEqual( true, 0.0 ); // $ExpectError
	indexOfNotEqual( false, 0.0 ); // $ExpectError
	indexOfNotEqual( null, 0.0 ); // $ExpectError
	indexOfNotEqual( void 0, 0.0 ); // $ExpectError
	indexOfNotEqual( {}, 0.0 ); // $ExpectError
	indexOfNotEqual( ( x: number ): number => x, 0.0 ); // $ExpectError

	indexOfNotEqual( '5', 0.0, 0 ); // $ExpectError
	indexOfNotEqual( 5, 0.0, 0 ); // $ExpectError
	indexOfNotEqual( true, 0.0, 0 ); // $ExpectError
	indexOfNotEqual( false, 0.0, 0 ); // $ExpectError
	indexOfNotEqual( null, 0.0, 0 ); // $ExpectError
	indexOfNotEqual( void 0, 0.0, 0 ); // $ExpectError
	indexOfNotEqual( {}, 0.0, 0 ); // $ExpectError
	indexOfNotEqual( ( x: number ): number => x, 0.0, 0 ); // $ExpectError

	indexOfNotEqual( '5', 0.0, {} ); // $ExpectError
	indexOfNotEqual( 5, 0.0, {} ); // $ExpectError
	indexOfNotEqual( true, 0.0, {} ); // $ExpectError
	indexOfNotEqual( false, 0.0, {} ); // $ExpectError
	indexOfNotEqual( null, 0.0, {} ); // $ExpectError
	indexOfNotEqual( void 0, 0.0, {} ); // $ExpectError
	indexOfNotEqual( {}, 0.0, {} ); // $ExpectError
	indexOfNotEqual( ( x: number ): number => x, 0.0, {} ); // $ExpectError

	indexOfNotEqual( '5', 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( 5, 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( true, 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( false, 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( null, 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( void 0, 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( {}, 0.0, 0, {} ); // $ExpectError
	indexOfNotEqual( ( x: number ): number => x, 0.0, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a search element argument which is not an ndarray or scalar value having the same "type"...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual( x, '5' ); // $ExpectError
	indexOfNotEqual( x, true ); // $ExpectError
	indexOfNotEqual( x, false ); // $ExpectError
	indexOfNotEqual( x, [] ); // $ExpectError
	indexOfNotEqual( x, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual( x, '5', 0 ); // $ExpectError
	indexOfNotEqual( x, true, 0 ); // $ExpectError
	indexOfNotEqual( x, false, 0 ); // $ExpectError
	indexOfNotEqual( x, [], 0 ); // $ExpectError
	indexOfNotEqual( x, ( x: number ): number => x, 0 ); // $ExpectError

	indexOfNotEqual( x, '5', {} ); // $ExpectError
	indexOfNotEqual( x, true, {} ); // $ExpectError
	indexOfNotEqual( x, false, {} ); // $ExpectError
	indexOfNotEqual( x, [], {} ); // $ExpectError
	indexOfNotEqual( x, ( x: number ): number => x, {} ); // $ExpectError

	indexOfNotEqual( x, '5', 0, {} ); // $ExpectError
	indexOfNotEqual( x, true, 0, {} ); // $ExpectError
	indexOfNotEqual( x, false, 0, {} ); // $ExpectError
	indexOfNotEqual( x, [], 0, {} ); // $ExpectError
	indexOfNotEqual( x, ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual( x, 0.0, '5' ); // $ExpectError
	indexOfNotEqual( x, 0.0, true ); // $ExpectError
	indexOfNotEqual( x, 0.0, false ); // $ExpectError
	indexOfNotEqual( x, 0.0, [] ); // $ExpectError
	indexOfNotEqual( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual( x, 0.0, '5' ); // $ExpectError
	indexOfNotEqual( x, 0.0, true ); // $ExpectError
	indexOfNotEqual( x, 0.0, false ); // $ExpectError
	indexOfNotEqual( x, 0.0, [] ); // $ExpectError
	indexOfNotEqual( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual( x, 0.0, '5', {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, true, {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, false, {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, [], {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError

	indexOfNotEqual( x, 0.0, '5', {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, true, {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, false, {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, [], {} ); // $ExpectError
	indexOfNotEqual( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError
}


// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual( x, 0.0, '5' ); // $ExpectError
	indexOfNotEqual( x, 0.0, true ); // $ExpectError
	indexOfNotEqual( x, 0.0, false ); // $ExpectError
	indexOfNotEqual( x, 0.0, [] ); // $ExpectError
	indexOfNotEqual( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual( x, 0.0, 0, '5' ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, true ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, false ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, null ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, [] ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual( x, 0.0, { 'dtype': '5' } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': 5 } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': true } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': false } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': null } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': [] } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': {} } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	indexOfNotEqual( x, 0.0, 0, { 'dtype': '5' } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': 5 } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': true } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': false } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': null } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': [] } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': {} } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual( x, 0.0, { 'dim': '5' } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dim': true } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dim': false } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dim': null } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dim': [] } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dim': {} } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'dim': ( x: number ): number => x } ); // $ExpectError

	indexOfNotEqual( x, 0.0, 0, { 'dim': '5' } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dim': true } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dim': false } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dim': null } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dim': [] } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dim': {} } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual( x, 0.0, { 'keepdims': '5' } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'keepdims': 5 } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'keepdims': null } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'keepdims': {} } ); // $ExpectError
	indexOfNotEqual( x, 0.0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError

	indexOfNotEqual( x, 0.0, 0, { 'keepdims': '5' } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'keepdims': 5 } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'keepdims': null } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'keepdims': {} } ); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual(); // $ExpectError
	indexOfNotEqual( x, 0.0, 0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign( x, 0.0, y ); // $ExpectType int32ndarray
	indexOfNotEqual.assign( x, 0.0, y, {} ); // $ExpectType int32ndarray
	indexOfNotEqual.assign( x, 0.0, 1, y ); // $ExpectType int32ndarray
	indexOfNotEqual.assign( x, 0.0, 1, y, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign( '5', 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( 5, 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( true, 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( false, 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( null, 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( void 0, 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( {}, 0.0, y ); // $ExpectError
	indexOfNotEqual.assign( ( x: number ): number => x, 0.0, y ); // $ExpectError

	indexOfNotEqual.assign( '5', 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( 5, 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( true, 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( false, 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( null, 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( void 0, 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( {}, 0.0, 0, y ); // $ExpectError
	indexOfNotEqual.assign( ( x: number ): number => x, 0.0, 0, y ); // $ExpectError

	indexOfNotEqual.assign( '5', 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( 5, 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( true, 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( false, 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( null, 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( void 0, 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( {}, 0.0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( ( x: number ): number => x, 0.0, y, {} ); // $ExpectError

	indexOfNotEqual.assign( '5', 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( 5, 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( true, 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( false, 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( null, 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( void 0, 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( {}, 0.0, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( ( x: number ): number => x, 0.0, 0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a search element argument which is not an ndarray or scalar value having the same "type"...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign( x, '5', y ); // $ExpectError
	indexOfNotEqual.assign( x, true, y ); // $ExpectError
	indexOfNotEqual.assign( x, false, y ); // $ExpectError
	indexOfNotEqual.assign( x, {}, y ); // $ExpectError
	indexOfNotEqual.assign( x, ( x: number ): number => x, y ); // $ExpectError

	indexOfNotEqual.assign( x, '5', 0, y ); // $ExpectError
	indexOfNotEqual.assign( x, true, 0, y ); // $ExpectError
	indexOfNotEqual.assign( x, false, 0, y ); // $ExpectError
	indexOfNotEqual.assign( x, {}, 0, y ); // $ExpectError
	indexOfNotEqual.assign( x, ( x: number ): number => x, 0, y ); // $ExpectError

	indexOfNotEqual.assign( x, '5', y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, true, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, false, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, {}, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, ( x: number ): number => x, y, {} ); // $ExpectError

	indexOfNotEqual.assign( x, '5', 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, true, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, false, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, {}, 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, ( x: number ): number => x, 0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign( x, 0.0, '5', y ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, true, y ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, false, y ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, null, y ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, void 0, y ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, {}, y ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, ( x: number ): number => x, y ); // $ExpectError

	indexOfNotEqual.assign( x, 0.0, '5', y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, true, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, false, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, null, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, void 0, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, {}, y, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOfNotEqual.assign( x, 0.0, '5' ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 5 ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, true ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, false ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, null ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, void 0 ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual.assign( x, 0.0, '5', {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 5, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, true, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, false, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, null, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, void 0, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError

	indexOfNotEqual.assign( x, 0.0, 1, '5' ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, 5 ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, true ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, false ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, null ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, void 0 ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual.assign( x, 0.0, 1, '5', {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, 5, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, true, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, false, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, null, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, void 0, {} ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign( x, 0.0, y, '5' ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, true ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, false ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, null ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, [] ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, ( x: number ): number => x ); // $ExpectError

	indexOfNotEqual.assign( x, 0.0, 1, y, '5' ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, true ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, false ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, null ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, [] ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign( x, 0.0, y, { 'dim': '5' } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, { 'dim': true } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, { 'dim': false } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, { 'dim': null } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, { 'dim': [] } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, { 'dim': {} } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, y, { 'dim': ( x: number ): number => x } ); // $ExpectError

	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': '5' } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': true } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': false } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': null } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': [] } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': {} } ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOfNotEqual.assign(); // $ExpectError
	indexOfNotEqual.assign( x ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0 ); // $ExpectError
	indexOfNotEqual.assign( x, 0.0, 1, y, {}, {} ); // $ExpectError
}

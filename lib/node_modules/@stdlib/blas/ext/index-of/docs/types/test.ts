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

/* eslint-disable @typescript-eslint/no-unused-expressions, space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray/zeros' );
import indexOf = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf<number>( x, 0.0 ); // $ExpectType OutputArray
	indexOf<number>( x, 0.0, 1 ); // $ExpectType OutputArray
	indexOf<number>( x, 0.0, {} ); // $ExpectType OutputArray
	indexOf<number>( x, 0.0, 1, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	indexOf( '5', 0.0 ); // $ExpectError
	indexOf( 5, 0.0 ); // $ExpectError
	indexOf( true, 0.0 ); // $ExpectError
	indexOf( false, 0.0 ); // $ExpectError
	indexOf( null, 0.0 ); // $ExpectError
	indexOf( void 0, 0.0 ); // $ExpectError
	indexOf( {}, 0.0 ); // $ExpectError
	indexOf( ( x: number ): number => x, 0.0 ); // $ExpectError

	indexOf( '5', 0.0, 0 ); // $ExpectError
	indexOf( 5, 0.0, 0 ); // $ExpectError
	indexOf( true, 0.0, 0 ); // $ExpectError
	indexOf( false, 0.0, 0 ); // $ExpectError
	indexOf( null, 0.0, 0 ); // $ExpectError
	indexOf( void 0, 0.0, 0 ); // $ExpectError
	indexOf( {}, 0.0, 0 ); // $ExpectError
	indexOf( ( x: number ): number => x, 0.0, 0 ); // $ExpectError

	indexOf( '5', 0.0, {} ); // $ExpectError
	indexOf( 5, 0.0, {} ); // $ExpectError
	indexOf( true, 0.0, {} ); // $ExpectError
	indexOf( false, 0.0, {} ); // $ExpectError
	indexOf( null, 0.0, {} ); // $ExpectError
	indexOf( void 0, 0.0, {} ); // $ExpectError
	indexOf( {}, 0.0, {} ); // $ExpectError
	indexOf( ( x: number ): number => x, 0.0, {} ); // $ExpectError

	indexOf( '5', 0.0, 0, {} ); // $ExpectError
	indexOf( 5, 0.0, 0, {} ); // $ExpectError
	indexOf( true, 0.0, 0, {} ); // $ExpectError
	indexOf( false, 0.0, 0, {} ); // $ExpectError
	indexOf( null, 0.0, 0, {} ); // $ExpectError
	indexOf( void 0, 0.0, 0, {} ); // $ExpectError
	indexOf( {}, 0.0, 0, {} ); // $ExpectError
	indexOf( ( x: number ): number => x, 0.0, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a search element argument which is not an ndarray or scalar value having the same "type"...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf( x, '5' ); // $ExpectError
	indexOf( x, true ); // $ExpectError
	indexOf( x, false ); // $ExpectError
	indexOf( x, [] ); // $ExpectError
	indexOf( x, ( x: number ): number => x ); // $ExpectError

	indexOf( x, '5', 0 ); // $ExpectError
	indexOf( x, true, 0 ); // $ExpectError
	indexOf( x, false, 0 ); // $ExpectError
	indexOf( x, [], 0 ); // $ExpectError
	indexOf( x, ( x: number ): number => x, 0 ); // $ExpectError

	indexOf( x, '5', {} ); // $ExpectError
	indexOf( x, true, {} ); // $ExpectError
	indexOf( x, false, {} ); // $ExpectError
	indexOf( x, [], {} ); // $ExpectError
	indexOf( x, ( x: number ): number => x, {} ); // $ExpectError

	indexOf( x, '5', 0, {} ); // $ExpectError
	indexOf( x, true, 0, {} ); // $ExpectError
	indexOf( x, false, 0, {} ); // $ExpectError
	indexOf( x, [], 0, {} ); // $ExpectError
	indexOf( x, ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf( x, 0.0, '5' ); // $ExpectError
	indexOf( x, 0.0, true ); // $ExpectError
	indexOf( x, 0.0, false ); // $ExpectError
	indexOf( x, 0.0, [] ); // $ExpectError
	indexOf( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOf( x, 0.0, '5' ); // $ExpectError
	indexOf( x, 0.0, true ); // $ExpectError
	indexOf( x, 0.0, false ); // $ExpectError
	indexOf( x, 0.0, [] ); // $ExpectError
	indexOf( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOf( x, 0.0, '5', {} ); // $ExpectError
	indexOf( x, 0.0, true, {} ); // $ExpectError
	indexOf( x, 0.0, false, {} ); // $ExpectError
	indexOf( x, 0.0, [], {} ); // $ExpectError
	indexOf( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError

	indexOf( x, 0.0, '5', {} ); // $ExpectError
	indexOf( x, 0.0, true, {} ); // $ExpectError
	indexOf( x, 0.0, false, {} ); // $ExpectError
	indexOf( x, 0.0, [], {} ); // $ExpectError
	indexOf( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError
}


// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf( x, 0.0, '5' ); // $ExpectError
	indexOf( x, 0.0, true ); // $ExpectError
	indexOf( x, 0.0, false ); // $ExpectError
	indexOf( x, 0.0, [] ); // $ExpectError
	indexOf( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOf( x, 0.0, 0, '5' ); // $ExpectError
	indexOf( x, 0.0, 0, true ); // $ExpectError
	indexOf( x, 0.0, 0, false ); // $ExpectError
	indexOf( x, 0.0, 0, null ); // $ExpectError
	indexOf( x, 0.0, 0, [] ); // $ExpectError
	indexOf( x, 0.0, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf( x, 0.0, { 'dtype': '5' } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': 5 } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': true } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': false } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': null } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': [] } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': {} } ); // $ExpectError
	indexOf( x, 0.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	indexOf( x, 0.0, 0, { 'dtype': '5' } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': 5 } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': true } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': false } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': null } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': [] } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': {} } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf( x, 0.0, { 'dim': '5' } ); // $ExpectError
	indexOf( x, 0.0, { 'dim': true } ); // $ExpectError
	indexOf( x, 0.0, { 'dim': false } ); // $ExpectError
	indexOf( x, 0.0, { 'dim': null } ); // $ExpectError
	indexOf( x, 0.0, { 'dim': [] } ); // $ExpectError
	indexOf( x, 0.0, { 'dim': {} } ); // $ExpectError
	indexOf( x, 0.0, { 'dim': ( x: number ): number => x } ); // $ExpectError

	indexOf( x, 0.0, 0, { 'dim': '5' } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dim': true } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dim': false } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dim': null } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dim': [] } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dim': {} } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf( x, 0.0, { 'keepdims': '5' } ); // $ExpectError
	indexOf( x, 0.0, { 'keepdims': 5 } ); // $ExpectError
	indexOf( x, 0.0, { 'keepdims': null } ); // $ExpectError
	indexOf( x, 0.0, { 'keepdims': {} } ); // $ExpectError
	indexOf( x, 0.0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError

	indexOf( x, 0.0, 0, { 'keepdims': '5' } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'keepdims': 5 } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'keepdims': null } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'keepdims': {} } ); // $ExpectError
	indexOf( x, 0.0, 0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf(); // $ExpectError
	indexOf( x, 0.0, 0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign( x, 0.0, y ); // $ExpectType int32ndarray
	indexOf.assign( x, 0.0, y, {} ); // $ExpectType int32ndarray
	indexOf.assign( x, 0.0, 1, y ); // $ExpectType int32ndarray
	indexOf.assign( x, 0.0, 1, y, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign( '5', 0.0, y ); // $ExpectError
	indexOf.assign( 5, 0.0, y ); // $ExpectError
	indexOf.assign( true, 0.0, y ); // $ExpectError
	indexOf.assign( false, 0.0, y ); // $ExpectError
	indexOf.assign( null, 0.0, y ); // $ExpectError
	indexOf.assign( void 0, 0.0, y ); // $ExpectError
	indexOf.assign( {}, 0.0, y ); // $ExpectError
	indexOf.assign( ( x: number ): number => x, 0.0, y ); // $ExpectError

	indexOf.assign( '5', 0.0, 0, y ); // $ExpectError
	indexOf.assign( 5, 0.0, 0, y ); // $ExpectError
	indexOf.assign( true, 0.0, 0, y ); // $ExpectError
	indexOf.assign( false, 0.0, 0, y ); // $ExpectError
	indexOf.assign( null, 0.0, 0, y ); // $ExpectError
	indexOf.assign( void 0, 0.0, 0, y ); // $ExpectError
	indexOf.assign( {}, 0.0, 0, y ); // $ExpectError
	indexOf.assign( ( x: number ): number => x, 0.0, 0, y ); // $ExpectError

	indexOf.assign( '5', 0.0, y, {} ); // $ExpectError
	indexOf.assign( 5, 0.0, y, {} ); // $ExpectError
	indexOf.assign( true, 0.0, y, {} ); // $ExpectError
	indexOf.assign( false, 0.0, y, {} ); // $ExpectError
	indexOf.assign( null, 0.0, y, {} ); // $ExpectError
	indexOf.assign( void 0, 0.0, y, {} ); // $ExpectError
	indexOf.assign( {}, 0.0, y, {} ); // $ExpectError
	indexOf.assign( ( x: number ): number => x, 0.0, y, {} ); // $ExpectError

	indexOf.assign( '5', 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( 5, 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( true, 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( false, 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( null, 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( void 0, 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( {}, 0.0, 0, y, {} ); // $ExpectError
	indexOf.assign( ( x: number ): number => x, 0.0, 0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a search element argument which is not an ndarray or scalar value having the same "type"...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign( x, '5', y ); // $ExpectError
	indexOf.assign( x, true, y ); // $ExpectError
	indexOf.assign( x, false, y ); // $ExpectError
	indexOf.assign( x, {}, y ); // $ExpectError
	indexOf.assign( x, ( x: number ): number => x, y ); // $ExpectError

	indexOf.assign( x, '5', 0, y ); // $ExpectError
	indexOf.assign( x, true, 0, y ); // $ExpectError
	indexOf.assign( x, false, 0, y ); // $ExpectError
	indexOf.assign( x, {}, 0, y ); // $ExpectError
	indexOf.assign( x, ( x: number ): number => x, 0, y ); // $ExpectError

	indexOf.assign( x, '5', y, {} ); // $ExpectError
	indexOf.assign( x, true, y, {} ); // $ExpectError
	indexOf.assign( x, false, y, {} ); // $ExpectError
	indexOf.assign( x, {}, y, {} ); // $ExpectError
	indexOf.assign( x, ( x: number ): number => x, y, {} ); // $ExpectError

	indexOf.assign( x, '5', 0, y, {} ); // $ExpectError
	indexOf.assign( x, true, 0, y, {} ); // $ExpectError
	indexOf.assign( x, false, 0, y, {} ); // $ExpectError
	indexOf.assign( x, {}, 0, y, {} ); // $ExpectError
	indexOf.assign( x, ( x: number ): number => x, 0, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign( x, 0.0, '5', y ); // $ExpectError
	indexOf.assign( x, 0.0, true, y ); // $ExpectError
	indexOf.assign( x, 0.0, false, y ); // $ExpectError
	indexOf.assign( x, 0.0, null, y ); // $ExpectError
	indexOf.assign( x, 0.0, void 0, y ); // $ExpectError
	indexOf.assign( x, 0.0, {}, y ); // $ExpectError
	indexOf.assign( x, 0.0, ( x: number ): number => x, y ); // $ExpectError

	indexOf.assign( x, 0.0, '5', y, {} ); // $ExpectError
	indexOf.assign( x, 0.0, true, y, {} ); // $ExpectError
	indexOf.assign( x, 0.0, false, y, {} ); // $ExpectError
	indexOf.assign( x, 0.0, null, y, {} ); // $ExpectError
	indexOf.assign( x, 0.0, void 0, y, {} ); // $ExpectError
	indexOf.assign( x, 0.0, {}, y, {} ); // $ExpectError
	indexOf.assign( x, 0.0, ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	indexOf.assign( x, 0.0, '5' ); // $ExpectError
	indexOf.assign( x, 0.0, 5 ); // $ExpectError
	indexOf.assign( x, 0.0, true ); // $ExpectError
	indexOf.assign( x, 0.0, false ); // $ExpectError
	indexOf.assign( x, 0.0, null ); // $ExpectError
	indexOf.assign( x, 0.0, void 0 ); // $ExpectError
	indexOf.assign( x, 0.0, ( x: number ): number => x ); // $ExpectError

	indexOf.assign( x, 0.0, '5', {} ); // $ExpectError
	indexOf.assign( x, 0.0, 5, {} ); // $ExpectError
	indexOf.assign( x, 0.0, true, {} ); // $ExpectError
	indexOf.assign( x, 0.0, false, {} ); // $ExpectError
	indexOf.assign( x, 0.0, null, {} ); // $ExpectError
	indexOf.assign( x, 0.0, void 0, {} ); // $ExpectError
	indexOf.assign( x, 0.0, ( x: number ): number => x, {} ); // $ExpectError

	indexOf.assign( x, 0.0, 1, '5' ); // $ExpectError
	indexOf.assign( x, 0.0, 1, 5 ); // $ExpectError
	indexOf.assign( x, 0.0, 1, true ); // $ExpectError
	indexOf.assign( x, 0.0, 1, false ); // $ExpectError
	indexOf.assign( x, 0.0, 1, null ); // $ExpectError
	indexOf.assign( x, 0.0, 1, void 0 ); // $ExpectError
	indexOf.assign( x, 0.0, 1, ( x: number ): number => x ); // $ExpectError

	indexOf.assign( x, 0.0, 1, '5', {} ); // $ExpectError
	indexOf.assign( x, 0.0, 1, 5, {} ); // $ExpectError
	indexOf.assign( x, 0.0, 1, true, {} ); // $ExpectError
	indexOf.assign( x, 0.0, 1, false, {} ); // $ExpectError
	indexOf.assign( x, 0.0, 1, null, {} ); // $ExpectError
	indexOf.assign( x, 0.0, 1, void 0, {} ); // $ExpectError
	indexOf.assign( x, 0.0, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign( x, 0.0, y, '5' ); // $ExpectError
	indexOf.assign( x, 0.0, y, true ); // $ExpectError
	indexOf.assign( x, 0.0, y, false ); // $ExpectError
	indexOf.assign( x, 0.0, y, null ); // $ExpectError
	indexOf.assign( x, 0.0, y, [] ); // $ExpectError
	indexOf.assign( x, 0.0, y, ( x: number ): number => x ); // $ExpectError

	indexOf.assign( x, 0.0, 1, y, '5' ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, true ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, false ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, null ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, [] ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign( x, 0.0, y, { 'dim': '5' } ); // $ExpectError
	indexOf.assign( x, 0.0, y, { 'dim': true } ); // $ExpectError
	indexOf.assign( x, 0.0, y, { 'dim': false } ); // $ExpectError
	indexOf.assign( x, 0.0, y, { 'dim': null } ); // $ExpectError
	indexOf.assign( x, 0.0, y, { 'dim': [] } ); // $ExpectError
	indexOf.assign( x, 0.0, y, { 'dim': {} } ); // $ExpectError
	indexOf.assign( x, 0.0, y, { 'dim': ( x: number ): number => x } ); // $ExpectError

	indexOf.assign( x, 0.0, 1, y, { 'dim': '5' } ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, { 'dim': true } ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, { 'dim': false } ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, { 'dim': null } ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, { 'dim': [] } ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, { 'dim': {} } ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	indexOf.assign(); // $ExpectError
	indexOf.assign( x ); // $ExpectError
	indexOf.assign( x, 0.0 ); // $ExpectError
	indexOf.assign( x, 0.0, 1, y, {}, {} ); // $ExpectError
}

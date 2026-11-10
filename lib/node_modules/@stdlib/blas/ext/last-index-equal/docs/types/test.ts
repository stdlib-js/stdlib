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
import lastIndexEqual = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual<number>( x, y ); // $ExpectType OutputArray
	lastIndexEqual<number>( x, y, 1 ); // $ExpectType OutputArray
	lastIndexEqual<number>( x, y, {} ); // $ExpectType OutputArray
	lastIndexEqual<number>( x, y, 1, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( '5', y ); // $ExpectError
	lastIndexEqual( 5, y ); // $ExpectError
	lastIndexEqual( true, y ); // $ExpectError
	lastIndexEqual( false, y ); // $ExpectError
	lastIndexEqual( null, y ); // $ExpectError
	lastIndexEqual( void 0, y ); // $ExpectError
	lastIndexEqual( {}, y ); // $ExpectError
	lastIndexEqual( ( x: number ): number => x, y ); // $ExpectError

	lastIndexEqual( '5', y, 0 ); // $ExpectError
	lastIndexEqual( 5, y, 0 ); // $ExpectError
	lastIndexEqual( true, y, 0 ); // $ExpectError
	lastIndexEqual( false, y, 0 ); // $ExpectError
	lastIndexEqual( null, y, 0 ); // $ExpectError
	lastIndexEqual( void 0, y, 0 ); // $ExpectError
	lastIndexEqual( {}, y, 0 ); // $ExpectError
	lastIndexEqual( ( x: number ): number => x, y, 0 ); // $ExpectError

	lastIndexEqual( '5', y, {} ); // $ExpectError
	lastIndexEqual( 5, y, {} ); // $ExpectError
	lastIndexEqual( true, y, {} ); // $ExpectError
	lastIndexEqual( false, y, {} ); // $ExpectError
	lastIndexEqual( null, y, {} ); // $ExpectError
	lastIndexEqual( void 0, y, {} ); // $ExpectError
	lastIndexEqual( {}, y, {} ); // $ExpectError
	lastIndexEqual( ( x: number ): number => x, y, {} ); // $ExpectError

	lastIndexEqual( '5', y, 0, {} ); // $ExpectError
	lastIndexEqual( 5, y, 0, {} ); // $ExpectError
	lastIndexEqual( true, y, 0, {} ); // $ExpectError
	lastIndexEqual( false, y, 0, {} ); // $ExpectError
	lastIndexEqual( null, y, 0, {} ); // $ExpectError
	lastIndexEqual( void 0, y, 0, {} ); // $ExpectError
	lastIndexEqual( {}, y, 0, {} ); // $ExpectError
	lastIndexEqual( ( x: number ): number => x, y, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( x, '5' ); // $ExpectError
	lastIndexEqual( x, 5 ); // $ExpectError
	lastIndexEqual( x, true ); // $ExpectError
	lastIndexEqual( x, false ); // $ExpectError
	lastIndexEqual( x, null ); // $ExpectError
	lastIndexEqual( x, void 0 ); // $ExpectError
	lastIndexEqual( x, [] ); // $ExpectError
	lastIndexEqual( x, {} ); // $ExpectError
	lastIndexEqual( x, ( x: number ): number => x ); // $ExpectError

	lastIndexEqual( x, '5', 0 ); // $ExpectError
	lastIndexEqual( x, 5, 0 ); // $ExpectError
	lastIndexEqual( x, true, 0 ); // $ExpectError
	lastIndexEqual( x, false, 0 ); // $ExpectError
	lastIndexEqual( x, null, 0 ); // $ExpectError
	lastIndexEqual( x, void 0, 0 ); // $ExpectError
	lastIndexEqual( x, [], 0 ); // $ExpectError
	lastIndexEqual( x, {}, 0 ); // $ExpectError
	lastIndexEqual( x, ( x: number ): number => x, 0 ); // $ExpectError

	lastIndexEqual( x, '5', {} ); // $ExpectError
	lastIndexEqual( x, 5, {} ); // $ExpectError
	lastIndexEqual( x, true, {} ); // $ExpectError
	lastIndexEqual( x, false, {} ); // $ExpectError
	lastIndexEqual( x, null, {} ); // $ExpectError
	lastIndexEqual( x, void 0, {} ); // $ExpectError
	lastIndexEqual( x, [], {} ); // $ExpectError
	lastIndexEqual( x, {}, {} ); // $ExpectError
	lastIndexEqual( x, ( x: number ): number => x, {} ); // $ExpectError

	lastIndexEqual( x, '5', 0, {} ); // $ExpectError
	lastIndexEqual( x, 5, 0, {} ); // $ExpectError
	lastIndexEqual( x, true, 0, {} ); // $ExpectError
	lastIndexEqual( x, false, 0, {} ); // $ExpectError
	lastIndexEqual( x, null, 0, {} ); // $ExpectError
	lastIndexEqual( x, void 0, 0, {} ); // $ExpectError
	lastIndexEqual( x, [], 0, {} ); // $ExpectError
	lastIndexEqual( x, {}, 0, {} ); // $ExpectError
	lastIndexEqual( x, ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( x, y, '5' ); // $ExpectError
	lastIndexEqual( x, y, true ); // $ExpectError
	lastIndexEqual( x, y, false ); // $ExpectError
	lastIndexEqual( x, y, [] ); // $ExpectError
	lastIndexEqual( x, y, ( x: number ): number => x ); // $ExpectError

	lastIndexEqual( x, y, '5', {} ); // $ExpectError
	lastIndexEqual( x, y, true, {} ); // $ExpectError
	lastIndexEqual( x, y, false, {} ); // $ExpectError
	lastIndexEqual( x, y, [], {} ); // $ExpectError
	lastIndexEqual( x, y, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( x, y, '5' ); // $ExpectError
	lastIndexEqual( x, y, true ); // $ExpectError
	lastIndexEqual( x, y, false ); // $ExpectError
	lastIndexEqual( x, y, [] ); // $ExpectError
	lastIndexEqual( x, y, ( x: number ): number => x ); // $ExpectError

	lastIndexEqual( x, y, 0, '5' ); // $ExpectError
	lastIndexEqual( x, y, 0, true ); // $ExpectError
	lastIndexEqual( x, y, 0, false ); // $ExpectError
	lastIndexEqual( x, y, 0, null ); // $ExpectError
	lastIndexEqual( x, y, 0, [] ); // $ExpectError
	lastIndexEqual( x, y, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( x, y, { 'dtype': '5' } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': 5 } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': true } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': false } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': null } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': [] } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': {} } ); // $ExpectError
	lastIndexEqual( x, y, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	lastIndexEqual( x, y, 0, { 'dtype': '5' } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': 5 } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': true } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': false } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': null } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': [] } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': {} } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( x, y, { 'dim': '5' } ); // $ExpectError
	lastIndexEqual( x, y, { 'dim': true } ); // $ExpectError
	lastIndexEqual( x, y, { 'dim': false } ); // $ExpectError
	lastIndexEqual( x, y, { 'dim': null } ); // $ExpectError
	lastIndexEqual( x, y, { 'dim': [] } ); // $ExpectError
	lastIndexEqual( x, y, { 'dim': {} } ); // $ExpectError
	lastIndexEqual( x, y, { 'dim': ( x: number ): number => x } ); // $ExpectError

	lastIndexEqual( x, y, 0, { 'dim': '5' } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dim': true } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dim': false } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dim': null } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dim': [] } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dim': {} } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual( x, y, { 'keepdims': '5' } ); // $ExpectError
	lastIndexEqual( x, y, { 'keepdims': 5 } ); // $ExpectError
	lastIndexEqual( x, y, { 'keepdims': null } ); // $ExpectError
	lastIndexEqual( x, y, { 'keepdims': {} } ); // $ExpectError
	lastIndexEqual( x, y, { 'keepdims': ( x: number ): number => x } ); // $ExpectError

	lastIndexEqual( x, y, 0, { 'keepdims': '5' } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'keepdims': 5 } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'keepdims': null } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'keepdims': {} } ); // $ExpectError
	lastIndexEqual( x, y, 0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual(); // $ExpectError
	lastIndexEqual( x ); // $ExpectError
	lastIndexEqual( x, y, 0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign( x, y, out ); // $ExpectType int32ndarray
	lastIndexEqual.assign( x, y, out, {} ); // $ExpectType int32ndarray
	lastIndexEqual.assign( x, y, 1, out ); // $ExpectType int32ndarray
	lastIndexEqual.assign( x, y, 1, out, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign( '5', y, out ); // $ExpectError
	lastIndexEqual.assign( 5, y, out ); // $ExpectError
	lastIndexEqual.assign( true, y, out ); // $ExpectError
	lastIndexEqual.assign( false, y, out ); // $ExpectError
	lastIndexEqual.assign( null, y, out ); // $ExpectError
	lastIndexEqual.assign( void 0, y, out ); // $ExpectError
	lastIndexEqual.assign( {}, y, out ); // $ExpectError
	lastIndexEqual.assign( ( x: number ): number => x, y, out ); // $ExpectError

	lastIndexEqual.assign( '5', y, 0, out ); // $ExpectError
	lastIndexEqual.assign( 5, y, 0, out ); // $ExpectError
	lastIndexEqual.assign( true, y, 0, out ); // $ExpectError
	lastIndexEqual.assign( false, y, 0, out ); // $ExpectError
	lastIndexEqual.assign( null, y, 0, out ); // $ExpectError
	lastIndexEqual.assign( void 0, y, 0, out ); // $ExpectError
	lastIndexEqual.assign( {}, y, 0, out ); // $ExpectError
	lastIndexEqual.assign( ( x: number ): number => x, y, 0, out ); // $ExpectError

	lastIndexEqual.assign( '5', y, out, {} ); // $ExpectError
	lastIndexEqual.assign( 5, y, out, {} ); // $ExpectError
	lastIndexEqual.assign( true, y, out, {} ); // $ExpectError
	lastIndexEqual.assign( false, y, out, {} ); // $ExpectError
	lastIndexEqual.assign( null, y, out, {} ); // $ExpectError
	lastIndexEqual.assign( void 0, y, out, {} ); // $ExpectError
	lastIndexEqual.assign( {}, y, out, {} ); // $ExpectError
	lastIndexEqual.assign( ( x: number ): number => x, y, out, {} ); // $ExpectError

	lastIndexEqual.assign( '5', y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( 5, y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( true, y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( false, y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( null, y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( void 0, y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( {}, y, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( ( x: number ): number => x, y, 0, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign( x, '5', out ); // $ExpectError
	lastIndexEqual.assign( x, 5, out ); // $ExpectError
	lastIndexEqual.assign( x, true, out ); // $ExpectError
	lastIndexEqual.assign( x, false, out ); // $ExpectError
	lastIndexEqual.assign( x, null, out ); // $ExpectError
	lastIndexEqual.assign( x, void 0, out ); // $ExpectError
	lastIndexEqual.assign( x, [], out ); // $ExpectError
	lastIndexEqual.assign( x, {}, out ); // $ExpectError
	lastIndexEqual.assign( x, ( x: number ): number => x, out ); // $ExpectError

	lastIndexEqual.assign( x, '5', 0, out ); // $ExpectError
	lastIndexEqual.assign( x, 5, 0, out ); // $ExpectError
	lastIndexEqual.assign( x, true, 0, out ); // $ExpectError
	lastIndexEqual.assign( x, false, 0, out ); // $ExpectError
	lastIndexEqual.assign( x, null, 0, out ); // $ExpectError
	lastIndexEqual.assign( x, void 0, 0, out ); // $ExpectError
	lastIndexEqual.assign( x, [], 0, out ); // $ExpectError
	lastIndexEqual.assign( x, {}, 0, out ); // $ExpectError
	lastIndexEqual.assign( x, ( x: number ): number => x, 0, out ); // $ExpectError

	lastIndexEqual.assign( x, '5', out, {} ); // $ExpectError
	lastIndexEqual.assign( x, 5, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, true, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, false, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, null, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, void 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, [], out, {} ); // $ExpectError
	lastIndexEqual.assign( x, {}, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, ( x: number ): number => x, out, {} ); // $ExpectError

	lastIndexEqual.assign( x, '5', 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, 5, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, true, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, false, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, null, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, void 0, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, [], 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, {}, 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, ( x: number ): number => x, 0, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign( x, y, '5', out ); // $ExpectError
	lastIndexEqual.assign( x, y, true, out ); // $ExpectError
	lastIndexEqual.assign( x, y, false, out ); // $ExpectError
	lastIndexEqual.assign( x, y, null, out ); // $ExpectError
	lastIndexEqual.assign( x, y, void 0, out ); // $ExpectError
	lastIndexEqual.assign( x, y, {}, out ); // $ExpectError
	lastIndexEqual.assign( x, y, ( x: number ): number => x, out ); // $ExpectError

	lastIndexEqual.assign( x, y, '5', out, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, true, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, false, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, null, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, void 0, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, {}, out, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, ( x: number ): number => x, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	lastIndexEqual.assign( x, y, '5' ); // $ExpectError
	lastIndexEqual.assign( x, y, 5 ); // $ExpectError
	lastIndexEqual.assign( x, y, true ); // $ExpectError
	lastIndexEqual.assign( x, y, false ); // $ExpectError
	lastIndexEqual.assign( x, y, null ); // $ExpectError
	lastIndexEqual.assign( x, y, void 0 ); // $ExpectError
	lastIndexEqual.assign( x, y, ( x: number ): number => x ); // $ExpectError

	lastIndexEqual.assign( x, y, '5', {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 5, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, true, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, false, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, null, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, void 0, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, ( x: number ): number => x, {} ); // $ExpectError

	lastIndexEqual.assign( x, y, 1, '5' ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, 5 ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, true ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, false ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, null ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, void 0 ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, ( x: number ): number => x ); // $ExpectError

	lastIndexEqual.assign( x, y, 1, '5', {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, 5, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, true, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, false, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, null, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, void 0, {} ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign( x, y, out, '5' ); // $ExpectError
	lastIndexEqual.assign( x, y, out, true ); // $ExpectError
	lastIndexEqual.assign( x, y, out, false ); // $ExpectError
	lastIndexEqual.assign( x, y, out, null ); // $ExpectError
	lastIndexEqual.assign( x, y, out, [] ); // $ExpectError
	lastIndexEqual.assign( x, y, out, ( x: number ): number => x ); // $ExpectError

	lastIndexEqual.assign( x, y, 1, out, '5' ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, true ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, false ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, null ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, [] ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign( x, y, out, { 'dim': '5' } ); // $ExpectError
	lastIndexEqual.assign( x, y, out, { 'dim': true } ); // $ExpectError
	lastIndexEqual.assign( x, y, out, { 'dim': false } ); // $ExpectError
	lastIndexEqual.assign( x, y, out, { 'dim': null } ); // $ExpectError
	lastIndexEqual.assign( x, y, out, { 'dim': [] } ); // $ExpectError
	lastIndexEqual.assign( x, y, out, { 'dim': {} } ); // $ExpectError
	lastIndexEqual.assign( x, y, out, { 'dim': ( x: number ): number => x } ); // $ExpectError

	lastIndexEqual.assign( x, y, 1, out, { 'dim': '5' } ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, { 'dim': true } ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, { 'dim': false } ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, { 'dim': null } ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, { 'dim': [] } ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, { 'dim': {} } ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	lastIndexEqual.assign(); // $ExpectError
	lastIndexEqual.assign( x ); // $ExpectError
	lastIndexEqual.assign( x, y ); // $ExpectError
	lastIndexEqual.assign( x, y, 1, out, {}, {} ); // $ExpectError
}

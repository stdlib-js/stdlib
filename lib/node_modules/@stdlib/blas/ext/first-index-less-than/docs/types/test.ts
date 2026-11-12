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
import firstIndexLessThan = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan<number>( x, y ); // $ExpectType OutputArray
	firstIndexLessThan<number>( x, y, 1 ); // $ExpectType OutputArray
	firstIndexLessThan<number>( x, y, {} ); // $ExpectType OutputArray
	firstIndexLessThan<number>( x, y, 1, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( '5', y ); // $ExpectError
	firstIndexLessThan( 5, y ); // $ExpectError
	firstIndexLessThan( true, y ); // $ExpectError
	firstIndexLessThan( false, y ); // $ExpectError
	firstIndexLessThan( null, y ); // $ExpectError
	firstIndexLessThan( void 0, y ); // $ExpectError
	firstIndexLessThan( {}, y ); // $ExpectError
	firstIndexLessThan( ( x: number ): number => x, y ); // $ExpectError

	firstIndexLessThan( '5', y, 0 ); // $ExpectError
	firstIndexLessThan( 5, y, 0 ); // $ExpectError
	firstIndexLessThan( true, y, 0 ); // $ExpectError
	firstIndexLessThan( false, y, 0 ); // $ExpectError
	firstIndexLessThan( null, y, 0 ); // $ExpectError
	firstIndexLessThan( void 0, y, 0 ); // $ExpectError
	firstIndexLessThan( {}, y, 0 ); // $ExpectError
	firstIndexLessThan( ( x: number ): number => x, y, 0 ); // $ExpectError

	firstIndexLessThan( '5', y, {} ); // $ExpectError
	firstIndexLessThan( 5, y, {} ); // $ExpectError
	firstIndexLessThan( true, y, {} ); // $ExpectError
	firstIndexLessThan( false, y, {} ); // $ExpectError
	firstIndexLessThan( null, y, {} ); // $ExpectError
	firstIndexLessThan( void 0, y, {} ); // $ExpectError
	firstIndexLessThan( {}, y, {} ); // $ExpectError
	firstIndexLessThan( ( x: number ): number => x, y, {} ); // $ExpectError

	firstIndexLessThan( '5', y, 0, {} ); // $ExpectError
	firstIndexLessThan( 5, y, 0, {} ); // $ExpectError
	firstIndexLessThan( true, y, 0, {} ); // $ExpectError
	firstIndexLessThan( false, y, 0, {} ); // $ExpectError
	firstIndexLessThan( null, y, 0, {} ); // $ExpectError
	firstIndexLessThan( void 0, y, 0, {} ); // $ExpectError
	firstIndexLessThan( {}, y, 0, {} ); // $ExpectError
	firstIndexLessThan( ( x: number ): number => x, y, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( x, '5' ); // $ExpectError
	firstIndexLessThan( x, 5 ); // $ExpectError
	firstIndexLessThan( x, true ); // $ExpectError
	firstIndexLessThan( x, false ); // $ExpectError
	firstIndexLessThan( x, null ); // $ExpectError
	firstIndexLessThan( x, void 0 ); // $ExpectError
	firstIndexLessThan( x, [] ); // $ExpectError
	firstIndexLessThan( x, {} ); // $ExpectError
	firstIndexLessThan( x, ( x: number ): number => x ); // $ExpectError

	firstIndexLessThan( x, '5', 0 ); // $ExpectError
	firstIndexLessThan( x, 5, 0 ); // $ExpectError
	firstIndexLessThan( x, true, 0 ); // $ExpectError
	firstIndexLessThan( x, false, 0 ); // $ExpectError
	firstIndexLessThan( x, null, 0 ); // $ExpectError
	firstIndexLessThan( x, void 0, 0 ); // $ExpectError
	firstIndexLessThan( x, [], 0 ); // $ExpectError
	firstIndexLessThan( x, {}, 0 ); // $ExpectError
	firstIndexLessThan( x, ( x: number ): number => x, 0 ); // $ExpectError

	firstIndexLessThan( x, '5', {} ); // $ExpectError
	firstIndexLessThan( x, 5, {} ); // $ExpectError
	firstIndexLessThan( x, true, {} ); // $ExpectError
	firstIndexLessThan( x, false, {} ); // $ExpectError
	firstIndexLessThan( x, null, {} ); // $ExpectError
	firstIndexLessThan( x, void 0, {} ); // $ExpectError
	firstIndexLessThan( x, [], {} ); // $ExpectError
	firstIndexLessThan( x, {}, {} ); // $ExpectError
	firstIndexLessThan( x, ( x: number ): number => x, {} ); // $ExpectError

	firstIndexLessThan( x, '5', 0, {} ); // $ExpectError
	firstIndexLessThan( x, 5, 0, {} ); // $ExpectError
	firstIndexLessThan( x, true, 0, {} ); // $ExpectError
	firstIndexLessThan( x, false, 0, {} ); // $ExpectError
	firstIndexLessThan( x, null, 0, {} ); // $ExpectError
	firstIndexLessThan( x, void 0, 0, {} ); // $ExpectError
	firstIndexLessThan( x, [], 0, {} ); // $ExpectError
	firstIndexLessThan( x, {}, 0, {} ); // $ExpectError
	firstIndexLessThan( x, ( x: number ): number => x, 0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a from index argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( x, y, '5' ); // $ExpectError
	firstIndexLessThan( x, y, true ); // $ExpectError
	firstIndexLessThan( x, y, false ); // $ExpectError
	firstIndexLessThan( x, y, [] ); // $ExpectError
	firstIndexLessThan( x, y, ( x: number ): number => x ); // $ExpectError

	firstIndexLessThan( x, y, '5', {} ); // $ExpectError
	firstIndexLessThan( x, y, true, {} ); // $ExpectError
	firstIndexLessThan( x, y, false, {} ); // $ExpectError
	firstIndexLessThan( x, y, [], {} ); // $ExpectError
	firstIndexLessThan( x, y, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( x, y, '5' ); // $ExpectError
	firstIndexLessThan( x, y, true ); // $ExpectError
	firstIndexLessThan( x, y, false ); // $ExpectError
	firstIndexLessThan( x, y, [] ); // $ExpectError
	firstIndexLessThan( x, y, ( x: number ): number => x ); // $ExpectError

	firstIndexLessThan( x, y, 0, '5' ); // $ExpectError
	firstIndexLessThan( x, y, 0, true ); // $ExpectError
	firstIndexLessThan( x, y, 0, false ); // $ExpectError
	firstIndexLessThan( x, y, 0, null ); // $ExpectError
	firstIndexLessThan( x, y, 0, [] ); // $ExpectError
	firstIndexLessThan( x, y, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( x, y, { 'dtype': '5' } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': 5 } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': true } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': false } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': null } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': [] } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': {} } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dtype': ( x: number ): number => x } ); // $ExpectError

	firstIndexLessThan( x, y, 0, { 'dtype': '5' } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': 5 } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': true } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': false } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': null } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': [] } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': {} } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( x, y, { 'dim': '5' } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dim': true } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dim': false } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dim': null } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dim': [] } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dim': {} } ); // $ExpectError
	firstIndexLessThan( x, y, { 'dim': ( x: number ): number => x } ); // $ExpectError

	firstIndexLessThan( x, y, 0, { 'dim': '5' } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dim': true } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dim': false } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dim': null } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dim': [] } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dim': {} } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan( x, y, { 'keepdims': '5' } ); // $ExpectError
	firstIndexLessThan( x, y, { 'keepdims': 5 } ); // $ExpectError
	firstIndexLessThan( x, y, { 'keepdims': null } ); // $ExpectError
	firstIndexLessThan( x, y, { 'keepdims': {} } ); // $ExpectError
	firstIndexLessThan( x, y, { 'keepdims': ( x: number ): number => x } ); // $ExpectError

	firstIndexLessThan( x, y, 0, { 'keepdims': '5' } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'keepdims': 5 } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'keepdims': null } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'keepdims': {} } ); // $ExpectError
	firstIndexLessThan( x, y, 0, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan(); // $ExpectError
	firstIndexLessThan( x ); // $ExpectError
	firstIndexLessThan( x, y, 0, {}, {} ); // $ExpectError
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

	firstIndexLessThan.assign( x, y, out ); // $ExpectType int32ndarray
	firstIndexLessThan.assign( x, y, out, {} ); // $ExpectType int32ndarray
	firstIndexLessThan.assign( x, y, 1, out ); // $ExpectType int32ndarray
	firstIndexLessThan.assign( x, y, 1, out, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	firstIndexLessThan.assign( '5', y, out ); // $ExpectError
	firstIndexLessThan.assign( 5, y, out ); // $ExpectError
	firstIndexLessThan.assign( true, y, out ); // $ExpectError
	firstIndexLessThan.assign( false, y, out ); // $ExpectError
	firstIndexLessThan.assign( null, y, out ); // $ExpectError
	firstIndexLessThan.assign( void 0, y, out ); // $ExpectError
	firstIndexLessThan.assign( {}, y, out ); // $ExpectError
	firstIndexLessThan.assign( ( x: number ): number => x, y, out ); // $ExpectError

	firstIndexLessThan.assign( '5', y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( 5, y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( true, y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( false, y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( null, y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( void 0, y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( {}, y, 0, out ); // $ExpectError
	firstIndexLessThan.assign( ( x: number ): number => x, y, 0, out ); // $ExpectError

	firstIndexLessThan.assign( '5', y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( 5, y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( true, y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( false, y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( null, y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( void 0, y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( {}, y, out, {} ); // $ExpectError
	firstIndexLessThan.assign( ( x: number ): number => x, y, out, {} ); // $ExpectError

	firstIndexLessThan.assign( '5', y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( 5, y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( true, y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( false, y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( null, y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( void 0, y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( {}, y, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( ( x: number ): number => x, y, 0, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = zeros( [], {
		'dtype': 'int32'
	});

	firstIndexLessThan.assign( x, '5', out ); // $ExpectError
	firstIndexLessThan.assign( x, 5, out ); // $ExpectError
	firstIndexLessThan.assign( x, true, out ); // $ExpectError
	firstIndexLessThan.assign( x, false, out ); // $ExpectError
	firstIndexLessThan.assign( x, null, out ); // $ExpectError
	firstIndexLessThan.assign( x, void 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, [], out ); // $ExpectError
	firstIndexLessThan.assign( x, {}, out ); // $ExpectError
	firstIndexLessThan.assign( x, ( x: number ): number => x, out ); // $ExpectError

	firstIndexLessThan.assign( x, '5', 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, 5, 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, true, 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, false, 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, null, 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, void 0, 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, [], 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, {}, 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, ( x: number ): number => x, 0, out ); // $ExpectError

	firstIndexLessThan.assign( x, '5', out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, 5, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, true, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, false, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, null, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, void 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, [], out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, {}, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, ( x: number ): number => x, out, {} ); // $ExpectError

	firstIndexLessThan.assign( x, '5', 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, 5, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, true, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, false, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, null, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, void 0, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, [], 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, {}, 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, ( x: number ): number => x, 0, out, {} ); // $ExpectError
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

	firstIndexLessThan.assign( x, y, '5', out ); // $ExpectError
	firstIndexLessThan.assign( x, y, true, out ); // $ExpectError
	firstIndexLessThan.assign( x, y, false, out ); // $ExpectError
	firstIndexLessThan.assign( x, y, null, out ); // $ExpectError
	firstIndexLessThan.assign( x, y, void 0, out ); // $ExpectError
	firstIndexLessThan.assign( x, y, {}, out ); // $ExpectError
	firstIndexLessThan.assign( x, y, ( x: number ): number => x, out ); // $ExpectError

	firstIndexLessThan.assign( x, y, '5', out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, true, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, false, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, null, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, void 0, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, {}, out, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, ( x: number ): number => x, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	firstIndexLessThan.assign( x, y, '5' ); // $ExpectError
	firstIndexLessThan.assign( x, y, 5 ); // $ExpectError
	firstIndexLessThan.assign( x, y, true ); // $ExpectError
	firstIndexLessThan.assign( x, y, false ); // $ExpectError
	firstIndexLessThan.assign( x, y, null ); // $ExpectError
	firstIndexLessThan.assign( x, y, void 0 ); // $ExpectError
	firstIndexLessThan.assign( x, y, ( x: number ): number => x ); // $ExpectError

	firstIndexLessThan.assign( x, y, '5', {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 5, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, true, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, false, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, null, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, void 0, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, ( x: number ): number => x, {} ); // $ExpectError

	firstIndexLessThan.assign( x, y, 1, '5' ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, 5 ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, true ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, false ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, null ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, void 0 ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, ( x: number ): number => x ); // $ExpectError

	firstIndexLessThan.assign( x, y, 1, '5', {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, 5, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, true, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, false, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, null, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, void 0, {} ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, ( x: number ): number => x, {} ); // $ExpectError
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

	firstIndexLessThan.assign( x, y, out, '5' ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, true ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, false ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, null ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, [] ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, ( x: number ): number => x ); // $ExpectError

	firstIndexLessThan.assign( x, y, 1, out, '5' ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, true ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, false ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, null ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, [] ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, ( x: number ): number => x ); // $ExpectError
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

	firstIndexLessThan.assign( x, y, out, { 'dim': '5' } ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, { 'dim': true } ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, { 'dim': false } ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, { 'dim': null } ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, { 'dim': [] } ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, { 'dim': {} } ); // $ExpectError
	firstIndexLessThan.assign( x, y, out, { 'dim': ( x: number ): number => x } ); // $ExpectError

	firstIndexLessThan.assign( x, y, 1, out, { 'dim': '5' } ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, { 'dim': true } ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, { 'dim': false } ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, { 'dim': null } ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, { 'dim': [] } ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, { 'dim': {} } ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, { 'dim': ( x: number ): number => x } ); // $ExpectError
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

	firstIndexLessThan.assign(); // $ExpectError
	firstIndexLessThan.assign( x ); // $ExpectError
	firstIndexLessThan.assign( x, y ); // $ExpectError
	firstIndexLessThan.assign( x, y, 1, out, {}, {} ); // $ExpectError
}

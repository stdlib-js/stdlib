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
import findLastIndex = require( './index' );

/**
* Callback function.
*
* @param value - ndarray element
* @returns result
*/
function clbk( value: any ): boolean {
	return value % 2.0 === 0.0;
}


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex( x, clbk ); // $ExpectType OutputArray
	findLastIndex( x, clbk, {} ); // $ExpectType OutputArray

	findLastIndex( x, {}, clbk ); // $ExpectType OutputArray
	findLastIndex( x, {}, clbk, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	findLastIndex( '5', clbk ); // $ExpectError
	findLastIndex( 5, clbk ); // $ExpectError
	findLastIndex( true, clbk ); // $ExpectError
	findLastIndex( false, clbk ); // $ExpectError
	findLastIndex( null, clbk ); // $ExpectError
	findLastIndex( void 0, clbk ); // $ExpectError
	findLastIndex( {}, clbk ); // $ExpectError
	findLastIndex( ( x: number ): number => x, clbk ); // $ExpectError

	findLastIndex( '5', clbk, {} ); // $ExpectError
	findLastIndex( 5, clbk, {} ); // $ExpectError
	findLastIndex( true, clbk, {} ); // $ExpectError
	findLastIndex( false, clbk, {} ); // $ExpectError
	findLastIndex( null, clbk, {} ); // $ExpectError
	findLastIndex( void 0, clbk, {} ); // $ExpectError
	findLastIndex( {}, clbk, {} ); // $ExpectError
	findLastIndex( ( x: number ): number => x, clbk, {} ); // $ExpectError

	findLastIndex( '5', {}, clbk ); // $ExpectError
	findLastIndex( 5, {}, clbk ); // $ExpectError
	findLastIndex( true, {}, clbk ); // $ExpectError
	findLastIndex( false, {}, clbk ); // $ExpectError
	findLastIndex( null, {}, clbk ); // $ExpectError
	findLastIndex( void 0, {}, clbk ); // $ExpectError
	findLastIndex( {}, {}, clbk ); // $ExpectError
	findLastIndex( ( x: number ): number => x, {}, clbk ); // $ExpectError

	findLastIndex( '5', {}, clbk, {} ); // $ExpectError
	findLastIndex( 5, {}, clbk, {} ); // $ExpectError
	findLastIndex( true, {}, clbk, {} ); // $ExpectError
	findLastIndex( false, {}, clbk, {} ); // $ExpectError
	findLastIndex( null, {}, clbk, {} ); // $ExpectError
	findLastIndex( void 0, {}, clbk, {} ); // $ExpectError
	findLastIndex( {}, {}, clbk, {} ); // $ExpectError
	findLastIndex( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex( x, '5', clbk ); // $ExpectError
	findLastIndex( x, true, clbk ); // $ExpectError
	findLastIndex( x, false, clbk ); // $ExpectError
	findLastIndex( x, null, clbk ); // $ExpectError
	findLastIndex( x, [], clbk ); // $ExpectError

	findLastIndex( x, '5', clbk, {} ); // $ExpectError
	findLastIndex( x, true, clbk, {} ); // $ExpectError
	findLastIndex( x, false, clbk, {} ); // $ExpectError
	findLastIndex( x, null, clbk, {} ); // $ExpectError
	findLastIndex( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex( x, '5' ); // $ExpectError
	findLastIndex( x, true ); // $ExpectError
	findLastIndex( x, false ); // $ExpectError
	findLastIndex( x, null ); // $ExpectError
	findLastIndex( x, [] ); // $ExpectError

	findLastIndex( x, '5', {} ); // $ExpectError
	findLastIndex( x, true, {} ); // $ExpectError
	findLastIndex( x, false, {} ); // $ExpectError
	findLastIndex( x, null, {} ); // $ExpectError
	findLastIndex( x, [], {} ); // $ExpectError

	findLastIndex( x, {}, '5', {} ); // $ExpectError
	findLastIndex( x, {}, true, {} ); // $ExpectError
	findLastIndex( x, {}, false, {} ); // $ExpectError
	findLastIndex( x, {}, null, {} ); // $ExpectError
	findLastIndex( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex( x, { 'dtype': '5' }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': 5 }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': true }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': false }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': null }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': [] }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': {} }, clbk ); // $ExpectError
	findLastIndex( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndex( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	findLastIndex( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	findLastIndex( x, { 'keepdims': null }, clbk ); // $ExpectError
	findLastIndex( x, { 'keepdims': [] }, clbk ); // $ExpectError
	findLastIndex( x, { 'keepdims': {} }, clbk ); // $ExpectError
	findLastIndex( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndex( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex( x, { 'dim': '5' }, clbk ); // $ExpectError
	findLastIndex( x, { 'dim': true }, clbk ); // $ExpectError
	findLastIndex( x, { 'dim': false }, clbk ); // $ExpectError
	findLastIndex( x, { 'dim': null }, clbk ); // $ExpectError
	findLastIndex( x, { 'dim': {} }, clbk ); // $ExpectError
	findLastIndex( x, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndex( x, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dim': true }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dim': false }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dim': null }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dim': {} }, clbk, {} ); // $ExpectError
	findLastIndex( x, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex(); // $ExpectError
	findLastIndex( x );
	findLastIndex( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndex.assign( x, y, clbk ); // $ExpectType int32ndarray
	findLastIndex.assign( x, y, {}, clbk ); // $ExpectType int32ndarray

	findLastIndex.assign( x, y, clbk, {} ); // $ExpectType int32ndarray
	findLastIndex.assign( x, y, {}, clbk, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndex.assign( '5', y, clbk ); // $ExpectError
	findLastIndex.assign( 5, y, clbk ); // $ExpectError
	findLastIndex.assign( true, y, clbk ); // $ExpectError
	findLastIndex.assign( false, y, clbk ); // $ExpectError
	findLastIndex.assign( null, y, clbk ); // $ExpectError
	findLastIndex.assign( void 0, y, clbk ); // $ExpectError
	findLastIndex.assign( {}, y, clbk ); // $ExpectError
	findLastIndex.assign( ( x: number ): number => x, y, clbk ); // $ExpectError

	findLastIndex.assign( '5', y, {}, clbk ); // $ExpectError
	findLastIndex.assign( 5, y, {}, clbk ); // $ExpectError
	findLastIndex.assign( true, y, {}, clbk ); // $ExpectError
	findLastIndex.assign( false, y, {}, clbk ); // $ExpectError
	findLastIndex.assign( null, y, {}, clbk ); // $ExpectError
	findLastIndex.assign( void 0, y, {}, clbk ); // $ExpectError
	findLastIndex.assign( {}, y, {}, clbk ); // $ExpectError
	findLastIndex.assign( ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	findLastIndex.assign( '5', y, clbk, {} ); // $ExpectError
	findLastIndex.assign( 5, y, clbk, {} ); // $ExpectError
	findLastIndex.assign( true, y, clbk, {} ); // $ExpectError
	findLastIndex.assign( false, y, clbk, {} ); // $ExpectError
	findLastIndex.assign( null, y, clbk, {} ); // $ExpectError
	findLastIndex.assign( void 0, y, clbk, {} ); // $ExpectError
	findLastIndex.assign( {}, y, clbk, {} ); // $ExpectError
	findLastIndex.assign( ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	findLastIndex.assign( '5', y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( 5, y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( true, y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( false, y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( null, y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( void 0, y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( {}, y, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndex.assign( x, '5', clbk ); // $ExpectError
	findLastIndex.assign( x, 5, clbk ); // $ExpectError
	findLastIndex.assign( x, true, clbk ); // $ExpectError
	findLastIndex.assign( x, false, clbk ); // $ExpectError
	findLastIndex.assign( x, null, clbk ); // $ExpectError
	findLastIndex.assign( x, void 0, clbk ); // $ExpectError
	findLastIndex.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	findLastIndex.assign( x, '5', {}, clbk ); // $ExpectError
	findLastIndex.assign( x, 5, {}, clbk ); // $ExpectError
	findLastIndex.assign( x, true, {}, clbk ); // $ExpectError
	findLastIndex.assign( x, false, {}, clbk ); // $ExpectError
	findLastIndex.assign( x, null, {}, clbk ); // $ExpectError
	findLastIndex.assign( x, void 0, {}, clbk ); // $ExpectError
	findLastIndex.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	findLastIndex.assign( x, '5', clbk, {} ); // $ExpectError
	findLastIndex.assign( x, 5, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, true, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, false, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, null, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, void 0, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	findLastIndex.assign( x, '5', {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, 5, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, true, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, false, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, null, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndex.assign( x, y, '5', clbk ); // $ExpectError
	findLastIndex.assign( x, y, true, clbk ); // $ExpectError
	findLastIndex.assign( x, y, false, clbk ); // $ExpectError
	findLastIndex.assign( x, y, null, clbk ); // $ExpectError
	findLastIndex.assign( x, y, [], clbk ); // $ExpectError

	findLastIndex.assign( x, y, '5', clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, true, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, false, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, null, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndex.assign( x, y, '5' ); // $ExpectError
	findLastIndex.assign( x, y, true ); // $ExpectError
	findLastIndex.assign( x, y, false ); // $ExpectError
	findLastIndex.assign( x, y, null ); // $ExpectError
	findLastIndex.assign( x, y, [] ); // $ExpectError

	findLastIndex.assign( x, y, '5', {} ); // $ExpectError
	findLastIndex.assign( x, y, true, {} ); // $ExpectError
	findLastIndex.assign( x, y, false, {} ); // $ExpectError
	findLastIndex.assign( x, y, null, {} ); // $ExpectError
	findLastIndex.assign( x, y, [], {} ); // $ExpectError

	findLastIndex.assign( x, y, {}, '5' ); // $ExpectError
	findLastIndex.assign( x, y, {}, true ); // $ExpectError
	findLastIndex.assign( x, y, {}, false ); // $ExpectError
	findLastIndex.assign( x, y, {}, null ); // $ExpectError
	findLastIndex.assign( x, y, {}, [] ); // $ExpectError

	findLastIndex.assign( x, y, {}, '5', {} ); // $ExpectError
	findLastIndex.assign( x, y, {}, true, {} ); // $ExpectError
	findLastIndex.assign( x, y, {}, false, {} ); // $ExpectError
	findLastIndex.assign( x, y, {}, null, {} ); // $ExpectError
	findLastIndex.assign( x, y, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndex.assign( x, y, { 'dim': '5' }, clbk ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': true }, clbk ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': false }, clbk ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': null }, clbk ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': {} }, clbk ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndex.assign( x, y, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': true }, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': false }, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': null }, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': {} }, clbk, {} ); // $ExpectError
	findLastIndex.assign( x, y, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndex.assign(); // $ExpectError
	findLastIndex.assign( x ); // $ExpectError
	findLastIndex.assign( x, y ); // $ExpectError
	findLastIndex.assign( x, y, {}, clbk, {}, {} ); // $ExpectError
}

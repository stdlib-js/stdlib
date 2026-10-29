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
import findLastIndexBetween = require( './index' );

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

	findLastIndexBetween( x, 0, 2, clbk ); // $ExpectType OutputArray
	findLastIndexBetween( x, 0, 2, clbk, {} ); // $ExpectType OutputArray

	findLastIndexBetween( x, 0, 2, {}, clbk ); // $ExpectType OutputArray
	findLastIndexBetween( x, 0, 2, {}, clbk, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	findLastIndexBetween( '5', 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( 5, 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( true, 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( false, 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( null, 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( void 0, 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( {}, 0, 2, clbk ); // $ExpectError
	findLastIndexBetween( ( x: number ): number => x, 0, 2, clbk ); // $ExpectError

	findLastIndexBetween( '5', 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( 5, 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( true, 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( false, 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( null, 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( void 0, 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( {}, 0, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( ( x: number ): number => x, 0, 2, clbk, {} ); // $ExpectError

	findLastIndexBetween( '5', 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( 5, 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( true, 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( false, 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( null, 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( void 0, 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( {}, 0, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( ( x: number ): number => x, 0, 2, {}, clbk ); // $ExpectError

	findLastIndexBetween( '5', 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( 5, 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( true, 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( false, 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( null, 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( void 0, 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( {}, 0, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( ( x: number ): number => x, 0, 2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `fromIndex` argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, '5', 2, clbk ); // $ExpectError
	findLastIndexBetween( x, true, 2, clbk ); // $ExpectError
	findLastIndexBetween( x, false, 2, clbk ); // $ExpectError
	findLastIndexBetween( x, null, 2, clbk ); // $ExpectError
	findLastIndexBetween( x, [], 2, clbk ); // $ExpectError

	findLastIndexBetween( x, '5', 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, true, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, false, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, null, 2, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, [], 2, clbk, {} ); // $ExpectError

	findLastIndexBetween( x, '5', 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, true, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, false, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, null, 2, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, [], 2, {}, clbk ); // $ExpectError

	findLastIndexBetween( x, '5', 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, true, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, false, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, null, 2, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, [], 2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `toIndex` argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, 0, '5', clbk ); // $ExpectError
	findLastIndexBetween( x, 0, true, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, false, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, null, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, [], clbk ); // $ExpectError

	findLastIndexBetween( x, 0, '5', clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, true, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, false, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, null, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, [], clbk, {} ); // $ExpectError

	findLastIndexBetween( x, 0, '5', {}, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, true, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, false, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, null, {}, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, [], {}, clbk ); // $ExpectError

	findLastIndexBetween( x, 0, '5', {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, true, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, false, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, null, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, [], {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, 0, 2, '5', clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, true, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, false, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, null, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, [], clbk ); // $ExpectError

	findLastIndexBetween( x, 0, 2, '5', clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, true, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, false, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, null, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, 0, 2, '5' ); // $ExpectError
	findLastIndexBetween( x, 0, 2, true ); // $ExpectError
	findLastIndexBetween( x, 0, 2, false ); // $ExpectError
	findLastIndexBetween( x, 0, 2, null ); // $ExpectError
	findLastIndexBetween( x, 0, 2, [] ); // $ExpectError

	findLastIndexBetween( x, 0, 2, '5', {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, true, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, false, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, null, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, [], {} ); // $ExpectError

	findLastIndexBetween( x, 0, 2, {}, '5', {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, {}, true, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, {}, false, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, {}, null, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, 0, 2, { 'dtype': '5' }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': 5 }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': true }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': false }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': null }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': [] }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': {} }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndexBetween( x, 0, 2, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': true }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': false }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': null }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': [] }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': {} }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, 0, 2, { 'keepdims': '5' }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': 5 }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': null }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': [] }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': {} }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndexBetween( x, 0, 2, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': null }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween( x, 0, 2, { 'dim': '5' }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': true }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': false }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': null }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': {} }, clbk ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndexBetween( x, 0, 2, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': true }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': false }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': null }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': {} }, clbk, {} ); // $ExpectError
	findLastIndexBetween( x, 0, 2, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween(); // $ExpectError
	findLastIndexBetween( x );
	findLastIndexBetween( x, 0 );
	findLastIndexBetween( x, 0, 2 );
	findLastIndexBetween( x, 0, 2, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndexBetween.assign( x, 0, 2, y, clbk ); // $ExpectType int32ndarray
	findLastIndexBetween.assign( x, 0, 2, y, {}, clbk ); // $ExpectType int32ndarray

	findLastIndexBetween.assign( x, 0, 2, y, clbk, {} ); // $ExpectType int32ndarray
	findLastIndexBetween.assign( x, 0, 2, y, {}, clbk, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndexBetween.assign( '5', 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( 5, 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( true, 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( false, 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( null, 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( void 0, 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( {}, 0, 2, y, clbk ); // $ExpectError
	findLastIndexBetween.assign( ( x: number ): number => x, 0, 2, y, clbk ); // $ExpectError

	findLastIndexBetween.assign( '5', 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( 5, 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( true, 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( false, 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( null, 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( void 0, 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( {}, 0, 2, y, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( ( x: number ): number => x, 0, 2, y, {}, clbk ); // $ExpectError

	findLastIndexBetween.assign( '5', 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( 5, 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( true, 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( false, 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( null, 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( void 0, 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( {}, 0, 2, y, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( ( x: number ): number => x, 0, 2, y, clbk, {} ); // $ExpectError

	findLastIndexBetween.assign( '5', 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( 5, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( true, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( false, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( null, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( void 0, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( {}, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( ( x: number ): number => x, 0, 2, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findLastIndexBetween.assign( x, 0, 2, '5', clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, 5, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, true, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, false, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, null, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, void 0, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, ( x: number ): number => x, clbk ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, '5', {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, 5, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, true, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, false, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, null, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, void 0, {}, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, ( x: number ): number => x, {}, clbk ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, '5', clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, 5, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, true, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, false, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, null, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, void 0, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, ( x: number ): number => x, clbk, {} ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, '5', {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, 5, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, true, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, false, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, null, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, void 0, {}, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndexBetween.assign( x, 0, 2, y, '5', clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, true, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, false, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, null, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, [], clbk ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, y, '5', clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, true, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, false, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, null, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndexBetween.assign( x, 0, 2, y, '5' ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, true ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, false ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, null ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, [] ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, y, '5', {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, true, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, false, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, null, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, [], {} ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, y, {}, '5' ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, true ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, false ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, null ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, [] ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, y, {}, '5', {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, true, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, false, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, null, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': '5' }, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': true }, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': false }, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': null }, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': {} }, clbk ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': true }, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': false }, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': null }, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': {} }, clbk, {} ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findLastIndexBetween.assign(); // $ExpectError
	findLastIndexBetween.assign( x ); // $ExpectError
	findLastIndexBetween.assign( x, 0 ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2 ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y ); // $ExpectError
	findLastIndexBetween.assign( x, 0, 2, y, {}, clbk, {}, {} ); // $ExpectError
}

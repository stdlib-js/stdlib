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
import findIndexBetween = require( './index' );

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

	findIndexBetween( x, 0, 2, clbk ); // $ExpectType OutputArray
	findIndexBetween( x, 0, 2, clbk, {} ); // $ExpectType OutputArray

	findIndexBetween( x, 0, 2, {}, clbk ); // $ExpectType OutputArray
	findIndexBetween( x, 0, 2, {}, clbk, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	findIndexBetween( '5', 0, 2, clbk ); // $ExpectError
	findIndexBetween( 5, 0, 2, clbk ); // $ExpectError
	findIndexBetween( true, 0, 2, clbk ); // $ExpectError
	findIndexBetween( false, 0, 2, clbk ); // $ExpectError
	findIndexBetween( null, 0, 2, clbk ); // $ExpectError
	findIndexBetween( void 0, 0, 2, clbk ); // $ExpectError
	findIndexBetween( {}, 0, 2, clbk ); // $ExpectError
	findIndexBetween( ( x: number ): number => x, 0, 2, clbk ); // $ExpectError

	findIndexBetween( '5', 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( 5, 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( true, 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( false, 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( null, 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( void 0, 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( {}, 0, 2, clbk, {} ); // $ExpectError
	findIndexBetween( ( x: number ): number => x, 0, 2, clbk, {} ); // $ExpectError

	findIndexBetween( '5', 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( 5, 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( true, 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( false, 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( null, 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( void 0, 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( {}, 0, 2, {}, clbk ); // $ExpectError
	findIndexBetween( ( x: number ): number => x, 0, 2, {}, clbk ); // $ExpectError

	findIndexBetween( '5', 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( 5, 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( true, 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( false, 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( null, 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( void 0, 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( {}, 0, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( ( x: number ): number => x, 0, 2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `fromIndex` argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, '5', 2, clbk ); // $ExpectError
	findIndexBetween( x, true, 2, clbk ); // $ExpectError
	findIndexBetween( x, false, 2, clbk ); // $ExpectError
	findIndexBetween( x, null, 2, clbk ); // $ExpectError
	findIndexBetween( x, [], 2, clbk ); // $ExpectError

	findIndexBetween( x, '5', 2, clbk, {} ); // $ExpectError
	findIndexBetween( x, true, 2, clbk, {} ); // $ExpectError
	findIndexBetween( x, false, 2, clbk, {} ); // $ExpectError
	findIndexBetween( x, null, 2, clbk, {} ); // $ExpectError
	findIndexBetween( x, [], 2, clbk, {} ); // $ExpectError

	findIndexBetween( x, '5', 2, {}, clbk ); // $ExpectError
	findIndexBetween( x, true, 2, {}, clbk ); // $ExpectError
	findIndexBetween( x, false, 2, {}, clbk ); // $ExpectError
	findIndexBetween( x, null, 2, {}, clbk ); // $ExpectError
	findIndexBetween( x, [], 2, {}, clbk ); // $ExpectError

	findIndexBetween( x, '5', 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, true, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, false, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, null, 2, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, [], 2, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `toIndex` argument which is not an ndarray or an integer value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, 0, '5', clbk ); // $ExpectError
	findIndexBetween( x, 0, true, clbk ); // $ExpectError
	findIndexBetween( x, 0, false, clbk ); // $ExpectError
	findIndexBetween( x, 0, null, clbk ); // $ExpectError
	findIndexBetween( x, 0, [], clbk ); // $ExpectError

	findIndexBetween( x, 0, '5', clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, true, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, false, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, null, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, [], clbk, {} ); // $ExpectError

	findIndexBetween( x, 0, '5', {}, clbk ); // $ExpectError
	findIndexBetween( x, 0, true, {}, clbk ); // $ExpectError
	findIndexBetween( x, 0, false, {}, clbk ); // $ExpectError
	findIndexBetween( x, 0, null, {}, clbk ); // $ExpectError
	findIndexBetween( x, 0, [], {}, clbk ); // $ExpectError

	findIndexBetween( x, 0, '5', {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, true, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, false, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, null, {}, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, [], {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, 0, 2, '5', clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, true, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, false, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, null, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, [], clbk ); // $ExpectError

	findIndexBetween( x, 0, 2, '5', clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, true, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, false, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, null, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, 0, 2, '5' ); // $ExpectError
	findIndexBetween( x, 0, 2, true ); // $ExpectError
	findIndexBetween( x, 0, 2, false ); // $ExpectError
	findIndexBetween( x, 0, 2, null ); // $ExpectError
	findIndexBetween( x, 0, 2, [] ); // $ExpectError

	findIndexBetween( x, 0, 2, '5', {} ); // $ExpectError
	findIndexBetween( x, 0, 2, true, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, false, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, null, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, [], {} ); // $ExpectError

	findIndexBetween( x, 0, 2, {}, '5', {} ); // $ExpectError
	findIndexBetween( x, 0, 2, {}, true, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, {}, false, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, {}, null, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, 0, 2, { 'dtype': '5' }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': 5 }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': true }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': false }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': null }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': [] }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': {} }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndexBetween( x, 0, 2, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': true }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': false }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': null }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': [] }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': {} }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, 0, 2, { 'keepdims': '5' }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': 5 }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': null }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': [] }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': {} }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndexBetween( x, 0, 2, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': null }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween( x, 0, 2, { 'dim': '5' }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': true }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': false }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': null }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': {} }, clbk ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndexBetween( x, 0, 2, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': true }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': false }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': null }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': {} }, clbk, {} ); // $ExpectError
	findIndexBetween( x, 0, 2, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween(); // $ExpectError
	findIndexBetween( x );
	findIndexBetween( x, 0 );
	findIndexBetween( x, 0, 2 );
	findIndexBetween( x, 0, 2, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndexBetween.assign( x, 0, 2, y, clbk ); // $ExpectType int32ndarray
	findIndexBetween.assign( x, 0, 2, y, {}, clbk ); // $ExpectType int32ndarray

	findIndexBetween.assign( x, 0, 2, y, clbk, {} ); // $ExpectType int32ndarray
	findIndexBetween.assign( x, 0, 2, y, {}, clbk, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndexBetween.assign( '5', 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( 5, 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( true, 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( false, 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( null, 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( void 0, 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( {}, 0, 2, y, clbk ); // $ExpectError
	findIndexBetween.assign( ( x: number ): number => x, 0, 2, y, clbk ); // $ExpectError

	findIndexBetween.assign( '5', 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( 5, 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( true, 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( false, 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( null, 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( void 0, 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( {}, 0, 2, y, {}, clbk ); // $ExpectError
	findIndexBetween.assign( ( x: number ): number => x, 0, 2, y, {}, clbk ); // $ExpectError

	findIndexBetween.assign( '5', 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( 5, 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( true, 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( false, 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( null, 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( void 0, 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( {}, 0, 2, y, clbk, {} ); // $ExpectError
	findIndexBetween.assign( ( x: number ): number => x, 0, 2, y, clbk, {} ); // $ExpectError

	findIndexBetween.assign( '5', 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( 5, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( true, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( false, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( null, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( void 0, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( {}, 0, 2, y, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( ( x: number ): number => x, 0, 2, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndexBetween.assign( x, 0, 2, '5', clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, 5, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, true, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, false, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, null, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, void 0, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, ( x: number ): number => x, clbk ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, '5', {}, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, 5, {}, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, true, {}, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, false, {}, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, null, {}, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, void 0, {}, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, ( x: number ): number => x, {}, clbk ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, '5', clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, 5, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, true, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, false, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, null, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, void 0, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, ( x: number ): number => x, clbk, {} ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, '5', {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, 5, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, true, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, false, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, null, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, void 0, {}, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndexBetween.assign( x, 0, 2, y, '5', clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, true, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, false, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, null, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, [], clbk ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, y, '5', clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, true, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, false, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, null, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndexBetween.assign( x, 0, 2, y, '5' ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, true ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, false ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, null ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, [] ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, y, '5', {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, true, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, false, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, null, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, [], {} ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, y, {}, '5' ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, true ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, false ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, null ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, [] ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, y, {}, '5', {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, true, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, false, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, null, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndexBetween.assign( x, 0, 2, y, { 'dim': '5' }, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': true }, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': false }, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': null }, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': {} }, clbk ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndexBetween.assign( x, 0, 2, y, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': true }, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': false }, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': null }, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': {} }, clbk, {} ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndexBetween.assign(); // $ExpectError
	findIndexBetween.assign( x ); // $ExpectError
	findIndexBetween.assign( x, 0 ); // $ExpectError
	findIndexBetween.assign( x, 0, 2 ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y ); // $ExpectError
	findIndexBetween.assign( x, 0, 2, y, {}, clbk, {}, {} ); // $ExpectError
}

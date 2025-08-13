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
import minBy = require( './index' );

/**
* Callback function.
*
* @param value - ndarray element
* @returns result
*/
function clbk( value: number ): number {
	return value * 2.0;
}


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy( x, clbk ); // $ExpectType OutputArray<number>
	minBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	minBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	minBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	minBy( '5', clbk ); // $ExpectError
	minBy( 5, clbk ); // $ExpectError
	minBy( true, clbk ); // $ExpectError
	minBy( false, clbk ); // $ExpectError
	minBy( null, clbk ); // $ExpectError
	minBy( void 0, clbk ); // $ExpectError
	minBy( {}, clbk ); // $ExpectError
	minBy( ( x: number ): number => x, clbk ); // $ExpectError

	minBy( '5', clbk, {} ); // $ExpectError
	minBy( 5, clbk, {} ); // $ExpectError
	minBy( true, clbk, {} ); // $ExpectError
	minBy( false, clbk, {} ); // $ExpectError
	minBy( null, clbk, {} ); // $ExpectError
	minBy( void 0, clbk, {} ); // $ExpectError
	minBy( {}, clbk, {} ); // $ExpectError
	minBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	minBy( '5', {}, clbk ); // $ExpectError
	minBy( 5, {}, clbk ); // $ExpectError
	minBy( true, {}, clbk ); // $ExpectError
	minBy( false, {}, clbk ); // $ExpectError
	minBy( null, {}, clbk ); // $ExpectError
	minBy( void 0, {}, clbk ); // $ExpectError
	minBy( {}, {}, clbk ); // $ExpectError
	minBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	minBy( '5', {}, clbk, {} ); // $ExpectError
	minBy( 5, {}, clbk, {} ); // $ExpectError
	minBy( true, {}, clbk, {} ); // $ExpectError
	minBy( false, {}, clbk, {} ); // $ExpectError
	minBy( null, {}, clbk, {} ); // $ExpectError
	minBy( void 0, {}, clbk, {} ); // $ExpectError
	minBy( {}, {}, clbk, {} ); // $ExpectError
	minBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy( x, '5', clbk ); // $ExpectError
	minBy( x, true, clbk ); // $ExpectError
	minBy( x, false, clbk ); // $ExpectError
	minBy( x, null, clbk ); // $ExpectError
	minBy( x, [], clbk ); // $ExpectError

	minBy( x, '5', clbk, {} ); // $ExpectError
	minBy( x, true, clbk, {} ); // $ExpectError
	minBy( x, false, clbk, {} ); // $ExpectError
	minBy( x, null, clbk, {} ); // $ExpectError
	minBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy( x, '5' ); // $ExpectError
	minBy( x, true ); // $ExpectError
	minBy( x, false ); // $ExpectError
	minBy( x, null ); // $ExpectError
	minBy( x, [] ); // $ExpectError

	minBy( x, '5', {} ); // $ExpectError
	minBy( x, true, {} ); // $ExpectError
	minBy( x, false, {} ); // $ExpectError
	minBy( x, null, {} ); // $ExpectError
	minBy( x, [], {} ); // $ExpectError

	minBy( x, {}, '5', {} ); // $ExpectError
	minBy( x, {}, true, {} ); // $ExpectError
	minBy( x, {}, false, {} ); // $ExpectError
	minBy( x, {}, null, {} ); // $ExpectError
	minBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	minBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	minBy( x, { 'dtype': true }, clbk ); // $ExpectError
	minBy( x, { 'dtype': false }, clbk ); // $ExpectError
	minBy( x, { 'dtype': null }, clbk ); // $ExpectError
	minBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	minBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	minBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	minBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	minBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	minBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	minBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	minBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	minBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	minBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	minBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	minBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	minBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	minBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	minBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	minBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	minBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	minBy( x, { 'dims': true }, clbk ); // $ExpectError
	minBy( x, { 'dims': false }, clbk ); // $ExpectError
	minBy( x, { 'dims': null }, clbk ); // $ExpectError
	minBy( x, { 'dims': {} }, clbk ); // $ExpectError
	minBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	minBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	minBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	minBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	minBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	minBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	minBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	minBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy(); // $ExpectError
	minBy( x );
	minBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign( x, x, clbk ); // $ExpectType float64ndarray
	minBy.assign( x, x, {}, clbk ); // $ExpectType float64ndarray

	minBy.assign( x, x, clbk, {} ); // $ExpectType float64ndarray
	minBy.assign( x, x, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign( '5', x, clbk ); // $ExpectError
	minBy.assign( 5, x, clbk ); // $ExpectError
	minBy.assign( true, x, clbk ); // $ExpectError
	minBy.assign( false, x, clbk ); // $ExpectError
	minBy.assign( null, x, clbk ); // $ExpectError
	minBy.assign( void 0, x, clbk ); // $ExpectError
	minBy.assign( {}, x, clbk ); // $ExpectError
	minBy.assign( ( x: number ): number => x, x, clbk ); // $ExpectError

	minBy.assign( '5', x, {}, clbk ); // $ExpectError
	minBy.assign( 5, x, {}, clbk ); // $ExpectError
	minBy.assign( true, x, {}, clbk ); // $ExpectError
	minBy.assign( false, x, {}, clbk ); // $ExpectError
	minBy.assign( null, x, {}, clbk ); // $ExpectError
	minBy.assign( void 0, x, {}, clbk ); // $ExpectError
	minBy.assign( {}, x, {}, clbk ); // $ExpectError
	minBy.assign( ( x: number ): number => x, x, {}, clbk ); // $ExpectError

	minBy.assign( '5', x, clbk, {} ); // $ExpectError
	minBy.assign( 5, x, clbk, {} ); // $ExpectError
	minBy.assign( true, x, clbk, {} ); // $ExpectError
	minBy.assign( false, x, clbk, {} ); // $ExpectError
	minBy.assign( null, x, clbk, {} ); // $ExpectError
	minBy.assign( void 0, x, clbk, {} ); // $ExpectError
	minBy.assign( {}, x, clbk, {} ); // $ExpectError
	minBy.assign( ( x: number ): number => x, x, clbk, {} ); // $ExpectError

	minBy.assign( '5', x, {}, clbk, {} ); // $ExpectError
	minBy.assign( 5, x, {}, clbk, {} ); // $ExpectError
	minBy.assign( true, x, {}, clbk, {} ); // $ExpectError
	minBy.assign( false, x, {}, clbk, {} ); // $ExpectError
	minBy.assign( null, x, {}, clbk, {} ); // $ExpectError
	minBy.assign( void 0, x, {}, clbk, {} ); // $ExpectError
	minBy.assign( {}, x, {}, clbk, {} ); // $ExpectError
	minBy.assign( ( x: number ): number => x, x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign( x, '5', clbk ); // $ExpectError
	minBy.assign( x, 5, clbk ); // $ExpectError
	minBy.assign( x, true, clbk ); // $ExpectError
	minBy.assign( x, false, clbk ); // $ExpectError
	minBy.assign( x, null, clbk ); // $ExpectError
	minBy.assign( x, void 0, clbk ); // $ExpectError
	minBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	minBy.assign( x, '5', {}, clbk ); // $ExpectError
	minBy.assign( x, 5, {}, clbk ); // $ExpectError
	minBy.assign( x, true, {}, clbk ); // $ExpectError
	minBy.assign( x, false, {}, clbk ); // $ExpectError
	minBy.assign( x, null, {}, clbk ); // $ExpectError
	minBy.assign( x, void 0, {}, clbk ); // $ExpectError
	minBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	minBy.assign( x, '5', clbk, {} ); // $ExpectError
	minBy.assign( x, 5, clbk, {} ); // $ExpectError
	minBy.assign( x, true, clbk, {} ); // $ExpectError
	minBy.assign( x, false, clbk, {} ); // $ExpectError
	minBy.assign( x, null, clbk, {} ); // $ExpectError
	minBy.assign( x, void 0, clbk, {} ); // $ExpectError
	minBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	minBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	minBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	minBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	minBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	minBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	minBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	minBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign( x, x, '5', clbk ); // $ExpectError
	minBy.assign( x, x, true, clbk ); // $ExpectError
	minBy.assign( x, x, false, clbk ); // $ExpectError
	minBy.assign( x, x, null, clbk ); // $ExpectError
	minBy.assign( x, x, [], clbk ); // $ExpectError

	minBy.assign( x, x, '5', clbk, {} ); // $ExpectError
	minBy.assign( x, x, true, clbk, {} ); // $ExpectError
	minBy.assign( x, x, false, clbk, {} ); // $ExpectError
	minBy.assign( x, x, null, clbk, {} ); // $ExpectError
	minBy.assign( x, x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign( x, x, '5' ); // $ExpectError
	minBy.assign( x, x, true ); // $ExpectError
	minBy.assign( x, x, false ); // $ExpectError
	minBy.assign( x, x, null ); // $ExpectError
	minBy.assign( x, x, [] ); // $ExpectError

	minBy.assign( x, x, '5', {} ); // $ExpectError
	minBy.assign( x, x, true, {} ); // $ExpectError
	minBy.assign( x, x, false, {} ); // $ExpectError
	minBy.assign( x, x, null, {} ); // $ExpectError
	minBy.assign( x, x, [], {} ); // $ExpectError

	minBy.assign( x, x, {}, '5' ); // $ExpectError
	minBy.assign( x, x, {}, true ); // $ExpectError
	minBy.assign( x, x, {}, false ); // $ExpectError
	minBy.assign( x, x, {}, null ); // $ExpectError
	minBy.assign( x, x, {}, [] ); // $ExpectError

	minBy.assign( x, x, {}, '5', {} ); // $ExpectError
	minBy.assign( x, x, {}, true, {} ); // $ExpectError
	minBy.assign( x, x, {}, false, {} ); // $ExpectError
	minBy.assign( x, x, {}, null, {} ); // $ExpectError
	minBy.assign( x, x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign( x, x, { 'dims': '5' }, clbk ); // $ExpectError
	minBy.assign( x, x, { 'dims': 5 }, clbk ); // $ExpectError
	minBy.assign( x, x, { 'dims': true }, clbk ); // $ExpectError
	minBy.assign( x, x, { 'dims': false }, clbk ); // $ExpectError
	minBy.assign( x, x, { 'dims': null }, clbk ); // $ExpectError
	minBy.assign( x, x, { 'dims': {} }, clbk ); // $ExpectError
	minBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	minBy.assign( x, x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	minBy.assign( x, x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	minBy.assign( x, x, { 'dims': true }, clbk, {} ); // $ExpectError
	minBy.assign( x, x, { 'dims': false }, clbk, {} ); // $ExpectError
	minBy.assign( x, x, { 'dims': null }, clbk, {} ); // $ExpectError
	minBy.assign( x, x, { 'dims': {} }, clbk, {} ); // $ExpectError
	minBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	minBy.assign(); // $ExpectError
	minBy.assign( x ); // $ExpectError
	minBy.assign( x, x ); // $ExpectError
	minBy.assign( x, x, {}, clbk, {}, {} ); // $ExpectError
}

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
import maxBy = require( './index' );

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

	maxBy( x, clbk ); // $ExpectType OutputArray<number>
	maxBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	maxBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	maxBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	maxBy( '5', clbk ); // $ExpectError
	maxBy( 5, clbk ); // $ExpectError
	maxBy( true, clbk ); // $ExpectError
	maxBy( false, clbk ); // $ExpectError
	maxBy( null, clbk ); // $ExpectError
	maxBy( void 0, clbk ); // $ExpectError
	maxBy( {}, clbk ); // $ExpectError
	maxBy( ( x: number ): number => x, clbk ); // $ExpectError

	maxBy( '5', clbk, {} ); // $ExpectError
	maxBy( 5, clbk, {} ); // $ExpectError
	maxBy( true, clbk, {} ); // $ExpectError
	maxBy( false, clbk, {} ); // $ExpectError
	maxBy( null, clbk, {} ); // $ExpectError
	maxBy( void 0, clbk, {} ); // $ExpectError
	maxBy( {}, clbk, {} ); // $ExpectError
	maxBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	maxBy( '5', {}, clbk ); // $ExpectError
	maxBy( 5, {}, clbk ); // $ExpectError
	maxBy( true, {}, clbk ); // $ExpectError
	maxBy( false, {}, clbk ); // $ExpectError
	maxBy( null, {}, clbk ); // $ExpectError
	maxBy( void 0, {}, clbk ); // $ExpectError
	maxBy( {}, {}, clbk ); // $ExpectError
	maxBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	maxBy( '5', {}, clbk, {} ); // $ExpectError
	maxBy( 5, {}, clbk, {} ); // $ExpectError
	maxBy( true, {}, clbk, {} ); // $ExpectError
	maxBy( false, {}, clbk, {} ); // $ExpectError
	maxBy( null, {}, clbk, {} ); // $ExpectError
	maxBy( void 0, {}, clbk, {} ); // $ExpectError
	maxBy( {}, {}, clbk, {} ); // $ExpectError
	maxBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy( x, '5', clbk ); // $ExpectError
	maxBy( x, true, clbk ); // $ExpectError
	maxBy( x, false, clbk ); // $ExpectError
	maxBy( x, null, clbk ); // $ExpectError
	maxBy( x, [], clbk ); // $ExpectError

	maxBy( x, '5', clbk, {} ); // $ExpectError
	maxBy( x, true, clbk, {} ); // $ExpectError
	maxBy( x, false, clbk, {} ); // $ExpectError
	maxBy( x, null, clbk, {} ); // $ExpectError
	maxBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy( x, '5' ); // $ExpectError
	maxBy( x, true ); // $ExpectError
	maxBy( x, false ); // $ExpectError
	maxBy( x, null ); // $ExpectError
	maxBy( x, [] ); // $ExpectError

	maxBy( x, '5', {} ); // $ExpectError
	maxBy( x, true, {} ); // $ExpectError
	maxBy( x, false, {} ); // $ExpectError
	maxBy( x, null, {} ); // $ExpectError
	maxBy( x, [], {} ); // $ExpectError

	maxBy( x, {}, '5', {} ); // $ExpectError
	maxBy( x, {}, true, {} ); // $ExpectError
	maxBy( x, {}, false, {} ); // $ExpectError
	maxBy( x, {}, null, {} ); // $ExpectError
	maxBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': true }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': false }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': null }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	maxBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	maxBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	maxBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	maxBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	maxBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	maxBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	maxBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	maxBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	maxBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	maxBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	maxBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	maxBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	maxBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	maxBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	maxBy( x, { 'dims': true }, clbk ); // $ExpectError
	maxBy( x, { 'dims': false }, clbk ); // $ExpectError
	maxBy( x, { 'dims': null }, clbk ); // $ExpectError
	maxBy( x, { 'dims': {} }, clbk ); // $ExpectError
	maxBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	maxBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	maxBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy(); // $ExpectError
	maxBy( x );
	maxBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign( x, x, clbk ); // $ExpectType float64ndarray
	maxBy.assign( x, x, {}, clbk ); // $ExpectType float64ndarray

	maxBy.assign( x, x, clbk, {} ); // $ExpectType float64ndarray
	maxBy.assign( x, x, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign( '5', x, clbk ); // $ExpectError
	maxBy.assign( 5, x, clbk ); // $ExpectError
	maxBy.assign( true, x, clbk ); // $ExpectError
	maxBy.assign( false, x, clbk ); // $ExpectError
	maxBy.assign( null, x, clbk ); // $ExpectError
	maxBy.assign( void 0, x, clbk ); // $ExpectError
	maxBy.assign( {}, x, clbk ); // $ExpectError
	maxBy.assign( ( x: number ): number => x, x, clbk ); // $ExpectError

	maxBy.assign( '5', x, {}, clbk ); // $ExpectError
	maxBy.assign( 5, x, {}, clbk ); // $ExpectError
	maxBy.assign( true, x, {}, clbk ); // $ExpectError
	maxBy.assign( false, x, {}, clbk ); // $ExpectError
	maxBy.assign( null, x, {}, clbk ); // $ExpectError
	maxBy.assign( void 0, x, {}, clbk ); // $ExpectError
	maxBy.assign( {}, x, {}, clbk ); // $ExpectError
	maxBy.assign( ( x: number ): number => x, x, {}, clbk ); // $ExpectError

	maxBy.assign( '5', x, clbk, {} ); // $ExpectError
	maxBy.assign( 5, x, clbk, {} ); // $ExpectError
	maxBy.assign( true, x, clbk, {} ); // $ExpectError
	maxBy.assign( false, x, clbk, {} ); // $ExpectError
	maxBy.assign( null, x, clbk, {} ); // $ExpectError
	maxBy.assign( void 0, x, clbk, {} ); // $ExpectError
	maxBy.assign( {}, x, clbk, {} ); // $ExpectError
	maxBy.assign( ( x: number ): number => x, x, clbk, {} ); // $ExpectError

	maxBy.assign( '5', x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( 5, x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( true, x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( false, x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( null, x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( void 0, x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( {}, x, {}, clbk, {} ); // $ExpectError
	maxBy.assign( ( x: number ): number => x, x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign( x, '5', clbk ); // $ExpectError
	maxBy.assign( x, 5, clbk ); // $ExpectError
	maxBy.assign( x, true, clbk ); // $ExpectError
	maxBy.assign( x, false, clbk ); // $ExpectError
	maxBy.assign( x, null, clbk ); // $ExpectError
	maxBy.assign( x, void 0, clbk ); // $ExpectError
	maxBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	maxBy.assign( x, '5', {}, clbk ); // $ExpectError
	maxBy.assign( x, 5, {}, clbk ); // $ExpectError
	maxBy.assign( x, true, {}, clbk ); // $ExpectError
	maxBy.assign( x, false, {}, clbk ); // $ExpectError
	maxBy.assign( x, null, {}, clbk ); // $ExpectError
	maxBy.assign( x, void 0, {}, clbk ); // $ExpectError
	maxBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	maxBy.assign( x, '5', clbk, {} ); // $ExpectError
	maxBy.assign( x, 5, clbk, {} ); // $ExpectError
	maxBy.assign( x, true, clbk, {} ); // $ExpectError
	maxBy.assign( x, false, clbk, {} ); // $ExpectError
	maxBy.assign( x, null, clbk, {} ); // $ExpectError
	maxBy.assign( x, void 0, clbk, {} ); // $ExpectError
	maxBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	maxBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	maxBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	maxBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	maxBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	maxBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	maxBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	maxBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign( x, x, '5', clbk ); // $ExpectError
	maxBy.assign( x, x, true, clbk ); // $ExpectError
	maxBy.assign( x, x, false, clbk ); // $ExpectError
	maxBy.assign( x, x, null, clbk ); // $ExpectError
	maxBy.assign( x, x, [], clbk ); // $ExpectError

	maxBy.assign( x, x, '5', clbk, {} ); // $ExpectError
	maxBy.assign( x, x, true, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, false, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, null, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign( x, x, '5' ); // $ExpectError
	maxBy.assign( x, x, true ); // $ExpectError
	maxBy.assign( x, x, false ); // $ExpectError
	maxBy.assign( x, x, null ); // $ExpectError
	maxBy.assign( x, x, [] ); // $ExpectError

	maxBy.assign( x, x, '5', {} ); // $ExpectError
	maxBy.assign( x, x, true, {} ); // $ExpectError
	maxBy.assign( x, x, false, {} ); // $ExpectError
	maxBy.assign( x, x, null, {} ); // $ExpectError
	maxBy.assign( x, x, [], {} ); // $ExpectError

	maxBy.assign( x, x, {}, '5' ); // $ExpectError
	maxBy.assign( x, x, {}, true ); // $ExpectError
	maxBy.assign( x, x, {}, false ); // $ExpectError
	maxBy.assign( x, x, {}, null ); // $ExpectError
	maxBy.assign( x, x, {}, [] ); // $ExpectError

	maxBy.assign( x, x, {}, '5', {} ); // $ExpectError
	maxBy.assign( x, x, {}, true, {} ); // $ExpectError
	maxBy.assign( x, x, {}, false, {} ); // $ExpectError
	maxBy.assign( x, x, {}, null, {} ); // $ExpectError
	maxBy.assign( x, x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign( x, x, { 'dims': '5' }, clbk ); // $ExpectError
	maxBy.assign( x, x, { 'dims': 5 }, clbk ); // $ExpectError
	maxBy.assign( x, x, { 'dims': true }, clbk ); // $ExpectError
	maxBy.assign( x, x, { 'dims': false }, clbk ); // $ExpectError
	maxBy.assign( x, x, { 'dims': null }, clbk ); // $ExpectError
	maxBy.assign( x, x, { 'dims': {} }, clbk ); // $ExpectError
	maxBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	maxBy.assign( x, x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, { 'dims': true }, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, { 'dims': false }, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, { 'dims': null }, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, { 'dims': {} }, clbk, {} ); // $ExpectError
	maxBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	maxBy.assign(); // $ExpectError
	maxBy.assign( x ); // $ExpectError
	maxBy.assign( x, x ); // $ExpectError
	maxBy.assign( x, x, {}, clbk, {}, {} ); // $ExpectError
}

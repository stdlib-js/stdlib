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

/* eslint-disable space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray/zeros' );
import nanmaxBy = require( './index' );

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

	nanmaxBy( x, clbk ); // $ExpectType OutputArray<number>
	nanmaxBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	nanmaxBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	nanmaxBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmaxBy( '5', clbk ); // $ExpectError
	nanmaxBy( 5, clbk ); // $ExpectError
	nanmaxBy( true, clbk ); // $ExpectError
	nanmaxBy( false, clbk ); // $ExpectError
	nanmaxBy( null, clbk ); // $ExpectError
	nanmaxBy( void 0, clbk ); // $ExpectError
	nanmaxBy( {}, clbk ); // $ExpectError
	nanmaxBy( ( x: number ): number => x, clbk ); // $ExpectError

	nanmaxBy( '5', clbk, {} ); // $ExpectError
	nanmaxBy( 5, clbk, {} ); // $ExpectError
	nanmaxBy( true, clbk, {} ); // $ExpectError
	nanmaxBy( false, clbk, {} ); // $ExpectError
	nanmaxBy( null, clbk, {} ); // $ExpectError
	nanmaxBy( void 0, clbk, {} ); // $ExpectError
	nanmaxBy( {}, clbk, {} ); // $ExpectError
	nanmaxBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	nanmaxBy( '5', {}, clbk ); // $ExpectError
	nanmaxBy( 5, {}, clbk ); // $ExpectError
	nanmaxBy( true, {}, clbk ); // $ExpectError
	nanmaxBy( false, {}, clbk ); // $ExpectError
	nanmaxBy( null, {}, clbk ); // $ExpectError
	nanmaxBy( void 0, {}, clbk ); // $ExpectError
	nanmaxBy( {}, {}, clbk ); // $ExpectError
	nanmaxBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	nanmaxBy( '5', {}, clbk, {} ); // $ExpectError
	nanmaxBy( 5, {}, clbk, {} ); // $ExpectError
	nanmaxBy( true, {}, clbk, {} ); // $ExpectError
	nanmaxBy( false, {}, clbk, {} ); // $ExpectError
	nanmaxBy( null, {}, clbk, {} ); // $ExpectError
	nanmaxBy( void 0, {}, clbk, {} ); // $ExpectError
	nanmaxBy( {}, {}, clbk, {} ); // $ExpectError
	nanmaxBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy( x, '5', clbk ); // $ExpectError
	nanmaxBy( x, true, clbk ); // $ExpectError
	nanmaxBy( x, false, clbk ); // $ExpectError
	nanmaxBy( x, null, clbk ); // $ExpectError
	nanmaxBy( x, [], clbk ); // $ExpectError

	nanmaxBy( x, '5', clbk, {} ); // $ExpectError
	nanmaxBy( x, true, clbk, {} ); // $ExpectError
	nanmaxBy( x, false, clbk, {} ); // $ExpectError
	nanmaxBy( x, null, clbk, {} ); // $ExpectError
	nanmaxBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy( x, '5' ); // $ExpectError
	nanmaxBy( x, true ); // $ExpectError
	nanmaxBy( x, false ); // $ExpectError
	nanmaxBy( x, null ); // $ExpectError
	nanmaxBy( x, [] ); // $ExpectError

	nanmaxBy( x, '5', {} ); // $ExpectError
	nanmaxBy( x, true, {} ); // $ExpectError
	nanmaxBy( x, false, {} ); // $ExpectError
	nanmaxBy( x, null, {} ); // $ExpectError
	nanmaxBy( x, [], {} ); // $ExpectError

	nanmaxBy( x, {}, '5', {} ); // $ExpectError
	nanmaxBy( x, {}, true, {} ); // $ExpectError
	nanmaxBy( x, {}, false, {} ); // $ExpectError
	nanmaxBy( x, {}, null, {} ); // $ExpectError
	nanmaxBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': true }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': false }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': null }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmaxBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	nanmaxBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	nanmaxBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	nanmaxBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	nanmaxBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	nanmaxBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmaxBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dims': true }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dims': false }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dims': null }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dims': {} }, clbk ); // $ExpectError
	nanmaxBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmaxBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	nanmaxBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy(); // $ExpectError
	nanmaxBy( x );
	nanmaxBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign( x, x, clbk ); // $ExpectType float64ndarray
	nanmaxBy.assign( x, x, {}, clbk ); // $ExpectType float64ndarray

	nanmaxBy.assign( x, x, clbk, {} ); // $ExpectType float64ndarray
	nanmaxBy.assign( x, x, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign( '5', x, clbk ); // $ExpectError
	nanmaxBy.assign( 5, x, clbk ); // $ExpectError
	nanmaxBy.assign( true, x, clbk ); // $ExpectError
	nanmaxBy.assign( false, x, clbk ); // $ExpectError
	nanmaxBy.assign( null, x, clbk ); // $ExpectError
	nanmaxBy.assign( void 0, x, clbk ); // $ExpectError
	nanmaxBy.assign( {}, x, clbk ); // $ExpectError
	nanmaxBy.assign( ( x: number ): number => x, x, clbk ); // $ExpectError

	nanmaxBy.assign( '5', x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( 5, x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( true, x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( false, x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( null, x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( void 0, x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( {}, x, {}, clbk ); // $ExpectError
	nanmaxBy.assign( ( x: number ): number => x, x, {}, clbk ); // $ExpectError

	nanmaxBy.assign( '5', x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( 5, x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( true, x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( false, x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( null, x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( void 0, x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( {}, x, clbk, {} ); // $ExpectError
	nanmaxBy.assign( ( x: number ): number => x, x, clbk, {} ); // $ExpectError

	nanmaxBy.assign( '5', x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( 5, x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( true, x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( false, x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( null, x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( void 0, x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( {}, x, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( ( x: number ): number => x, x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign( x, '5', clbk ); // $ExpectError
	nanmaxBy.assign( x, 5, clbk ); // $ExpectError
	nanmaxBy.assign( x, true, clbk ); // $ExpectError
	nanmaxBy.assign( x, false, clbk ); // $ExpectError
	nanmaxBy.assign( x, null, clbk ); // $ExpectError
	nanmaxBy.assign( x, void 0, clbk ); // $ExpectError
	nanmaxBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	nanmaxBy.assign( x, '5', {}, clbk ); // $ExpectError
	nanmaxBy.assign( x, 5, {}, clbk ); // $ExpectError
	nanmaxBy.assign( x, true, {}, clbk ); // $ExpectError
	nanmaxBy.assign( x, false, {}, clbk ); // $ExpectError
	nanmaxBy.assign( x, null, {}, clbk ); // $ExpectError
	nanmaxBy.assign( x, void 0, {}, clbk ); // $ExpectError
	nanmaxBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	nanmaxBy.assign( x, '5', clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, 5, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, true, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, false, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, null, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, void 0, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	nanmaxBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign( x, x, '5', clbk ); // $ExpectError
	nanmaxBy.assign( x, x, true, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, false, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, null, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, [], clbk ); // $ExpectError

	nanmaxBy.assign( x, x, '5', clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, true, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, false, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, null, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign( x, x, '5' ); // $ExpectError
	nanmaxBy.assign( x, x, true ); // $ExpectError
	nanmaxBy.assign( x, x, false ); // $ExpectError
	nanmaxBy.assign( x, x, null ); // $ExpectError
	nanmaxBy.assign( x, x, [] ); // $ExpectError

	nanmaxBy.assign( x, x, '5', {} ); // $ExpectError
	nanmaxBy.assign( x, x, true, {} ); // $ExpectError
	nanmaxBy.assign( x, x, false, {} ); // $ExpectError
	nanmaxBy.assign( x, x, null, {} ); // $ExpectError
	nanmaxBy.assign( x, x, [], {} ); // $ExpectError

	nanmaxBy.assign( x, x, {}, '5' ); // $ExpectError
	nanmaxBy.assign( x, x, {}, true ); // $ExpectError
	nanmaxBy.assign( x, x, {}, false ); // $ExpectError
	nanmaxBy.assign( x, x, {}, null ); // $ExpectError
	nanmaxBy.assign( x, x, {}, [] ); // $ExpectError

	nanmaxBy.assign( x, x, {}, '5', {} ); // $ExpectError
	nanmaxBy.assign( x, x, {}, true, {} ); // $ExpectError
	nanmaxBy.assign( x, x, {}, false, {} ); // $ExpectError
	nanmaxBy.assign( x, x, {}, null, {} ); // $ExpectError
	nanmaxBy.assign( x, x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign( x, x, { 'dims': '5' }, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': 5 }, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': true }, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': false }, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': null }, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': {} }, clbk ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmaxBy.assign( x, x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': true }, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': false }, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': null }, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': {} }, clbk, {} ); // $ExpectError
	nanmaxBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmaxBy.assign(); // $ExpectError
	nanmaxBy.assign( x ); // $ExpectError
	nanmaxBy.assign( x, x ); // $ExpectError
	nanmaxBy.assign( x, x, {}, clbk, {}, {} ); // $ExpectError
}

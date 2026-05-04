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
import rangeBy = require( './index' );

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

	rangeBy( x, clbk ); // $ExpectType OutputArray<number>
	rangeBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	rangeBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	rangeBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	rangeBy( '5', clbk ); // $ExpectError
	rangeBy( 5, clbk ); // $ExpectError
	rangeBy( true, clbk ); // $ExpectError
	rangeBy( false, clbk ); // $ExpectError
	rangeBy( null, clbk ); // $ExpectError
	rangeBy( void 0, clbk ); // $ExpectError
	rangeBy( {}, clbk ); // $ExpectError
	rangeBy( ( x: number ): number => x, clbk ); // $ExpectError

	rangeBy( '5', clbk, {} ); // $ExpectError
	rangeBy( 5, clbk, {} ); // $ExpectError
	rangeBy( true, clbk, {} ); // $ExpectError
	rangeBy( false, clbk, {} ); // $ExpectError
	rangeBy( null, clbk, {} ); // $ExpectError
	rangeBy( void 0, clbk, {} ); // $ExpectError
	rangeBy( {}, clbk, {} ); // $ExpectError
	rangeBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	rangeBy( '5', {}, clbk ); // $ExpectError
	rangeBy( 5, {}, clbk ); // $ExpectError
	rangeBy( true, {}, clbk ); // $ExpectError
	rangeBy( false, {}, clbk ); // $ExpectError
	rangeBy( null, {}, clbk ); // $ExpectError
	rangeBy( void 0, {}, clbk ); // $ExpectError
	rangeBy( {}, {}, clbk ); // $ExpectError
	rangeBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	rangeBy( '5', {}, clbk, {} ); // $ExpectError
	rangeBy( 5, {}, clbk, {} ); // $ExpectError
	rangeBy( true, {}, clbk, {} ); // $ExpectError
	rangeBy( false, {}, clbk, {} ); // $ExpectError
	rangeBy( null, {}, clbk, {} ); // $ExpectError
	rangeBy( void 0, {}, clbk, {} ); // $ExpectError
	rangeBy( {}, {}, clbk, {} ); // $ExpectError
	rangeBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy( x, '5', clbk ); // $ExpectError
	rangeBy( x, true, clbk ); // $ExpectError
	rangeBy( x, false, clbk ); // $ExpectError
	rangeBy( x, null, clbk ); // $ExpectError
	rangeBy( x, [], clbk ); // $ExpectError

	rangeBy( x, '5', clbk, {} ); // $ExpectError
	rangeBy( x, true, clbk, {} ); // $ExpectError
	rangeBy( x, false, clbk, {} ); // $ExpectError
	rangeBy( x, null, clbk, {} ); // $ExpectError
	rangeBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy( x, '5' ); // $ExpectError
	rangeBy( x, 5 ); // $ExpectError
	rangeBy( x, true ); // $ExpectError
	rangeBy( x, false ); // $ExpectError
	rangeBy( x, null ); // $ExpectError
	rangeBy( x, void 0 ); // $ExpectError
	rangeBy( x, {} ); // $ExpectError
	rangeBy( x, [] ); // $ExpectError

	rangeBy( x, '5', {} ); // $ExpectError
	rangeBy( x, true, {} ); // $ExpectError
	rangeBy( x, false, {} ); // $ExpectError
	rangeBy( x, null, {} ); // $ExpectError
	rangeBy( x, [], {} ); // $ExpectError

	rangeBy( x, {}, '5' ); // $ExpectError
	rangeBy( x, {}, 5 ); // $ExpectError
	rangeBy( x, {}, true ); // $ExpectError
	rangeBy( x, {}, false ); // $ExpectError
	rangeBy( x, {}, null ); // $ExpectError
	rangeBy( x, {}, void 0 ); // $ExpectError
	rangeBy( x, {}, {} ); // $ExpectError
	rangeBy( x, {}, [] ); // $ExpectError

	rangeBy( x, {}, '5', {} ); // $ExpectError
	rangeBy( x, {}, true, {} ); // $ExpectError
	rangeBy( x, {}, false, {} ); // $ExpectError
	rangeBy( x, {}, null, {} ); // $ExpectError
	rangeBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': true }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': false }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': null }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	rangeBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	rangeBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	rangeBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	rangeBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	rangeBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	rangeBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	rangeBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	rangeBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	rangeBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	rangeBy( x, { 'dims': true }, clbk ); // $ExpectError
	rangeBy( x, { 'dims': false }, clbk ); // $ExpectError
	rangeBy( x, { 'dims': null }, clbk ); // $ExpectError
	rangeBy( x, { 'dims': {} }, clbk ); // $ExpectError
	rangeBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	rangeBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	rangeBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy(); // $ExpectError
	rangeBy( x );
	rangeBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'float64'
	});

	rangeBy.assign( x, y, clbk ); // $ExpectType float64ndarray
	rangeBy.assign( x, y, clbk, {} ); // $ExpectType float64ndarray

	rangeBy.assign( x, y, {}, clbk ); // $ExpectType float64ndarray
	rangeBy.assign( x, y, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [] );

	rangeBy.assign( '5', y, clbk ); // $ExpectError
	rangeBy.assign( 5, y, clbk ); // $ExpectError
	rangeBy.assign( true, y, clbk ); // $ExpectError
	rangeBy.assign( false, y, clbk ); // $ExpectError
	rangeBy.assign( null, y, clbk ); // $ExpectError
	rangeBy.assign( void 0, y, clbk ); // $ExpectError
	rangeBy.assign( {}, y, clbk ); // $ExpectError
	rangeBy.assign( ( x: number ): number => x, y, clbk ); // $ExpectError

	rangeBy.assign( '5', y, clbk, {} ); // $ExpectError
	rangeBy.assign( 5, y, clbk, {} ); // $ExpectError
	rangeBy.assign( true, y, clbk, {} ); // $ExpectError
	rangeBy.assign( false, y, clbk, {} ); // $ExpectError
	rangeBy.assign( null, y, clbk, {} ); // $ExpectError
	rangeBy.assign( void 0, y, clbk, {} ); // $ExpectError
	rangeBy.assign( {}, y, clbk, {} ); // $ExpectError
	rangeBy.assign( ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	rangeBy.assign( '5', y, {}, clbk ); // $ExpectError
	rangeBy.assign( 5, y, {}, clbk ); // $ExpectError
	rangeBy.assign( true, y, {}, clbk ); // $ExpectError
	rangeBy.assign( false, y, {}, clbk ); // $ExpectError
	rangeBy.assign( null, y, {}, clbk ); // $ExpectError
	rangeBy.assign( void 0, y, {}, clbk ); // $ExpectError
	rangeBy.assign( {}, y, {}, clbk ); // $ExpectError
	rangeBy.assign( ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	rangeBy.assign( '5', y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( 5, y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( true, y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( false, y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( null, y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( void 0, y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( {}, y, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	rangeBy.assign( x, '5', clbk ); // $ExpectError
	rangeBy.assign( x, 5, clbk ); // $ExpectError
	rangeBy.assign( x, true, clbk ); // $ExpectError
	rangeBy.assign( x, false, clbk ); // $ExpectError
	rangeBy.assign( x, null, clbk ); // $ExpectError
	rangeBy.assign( x, void 0, clbk ); // $ExpectError
	rangeBy.assign( x, {}, clbk ); // $ExpectError
	rangeBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	rangeBy.assign( x, '5', clbk, {} ); // $ExpectError
	rangeBy.assign( x, 5, clbk, {} ); // $ExpectError
	rangeBy.assign( x, true, clbk, {} ); // $ExpectError
	rangeBy.assign( x, false, clbk, {} ); // $ExpectError
	rangeBy.assign( x, null, clbk, {} ); // $ExpectError
	rangeBy.assign( x, void 0, clbk, {} ); // $ExpectError
	rangeBy.assign( x, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	rangeBy.assign( x, '5', {}, clbk ); // $ExpectError
	rangeBy.assign( x, 5, {}, clbk ); // $ExpectError
	rangeBy.assign( x, true, {}, clbk ); // $ExpectError
	rangeBy.assign( x, false, {}, clbk ); // $ExpectError
	rangeBy.assign( x, null, {}, clbk ); // $ExpectError
	rangeBy.assign( x, void 0, {}, clbk ); // $ExpectError
	rangeBy.assign( x, {}, {}, clbk ); // $ExpectError
	rangeBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	rangeBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, {}, {}, clbk, {} ); // $ExpectError
	rangeBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [] );

	rangeBy.assign( x, y, '5' ); // $ExpectError
	rangeBy.assign( x, y, 5 ); // $ExpectError
	rangeBy.assign( x, y, true ); // $ExpectError
	rangeBy.assign( x, y, false ); // $ExpectError
	rangeBy.assign( x, y, null ); // $ExpectError
	rangeBy.assign( x, y, void 0 ); // $ExpectError
	rangeBy.assign( x, y, {} ); // $ExpectError
	rangeBy.assign( x, y, [] ); // $ExpectError

	rangeBy.assign( x, y, '5', {} ); // $ExpectError
	rangeBy.assign( x, y, true, {} ); // $ExpectError
	rangeBy.assign( x, y, false, {} ); // $ExpectError
	rangeBy.assign( x, y, null, {} ); // $ExpectError
	rangeBy.assign( x, y, [], {} ); // $ExpectError

	rangeBy.assign( x, y, {}, '5' ); // $ExpectError
	rangeBy.assign( x, y, {}, 5 ); // $ExpectError
	rangeBy.assign( x, y, {}, true ); // $ExpectError
	rangeBy.assign( x, y, {}, false ); // $ExpectError
	rangeBy.assign( x, y, {}, null ); // $ExpectError
	rangeBy.assign( x, y, {}, void 0 ); // $ExpectError
	rangeBy.assign( x, y, {}, {} ); // $ExpectError
	rangeBy.assign( x, y, {}, [] ); // $ExpectError

	rangeBy.assign( x, y, {}, '5', {} ); // $ExpectError
	rangeBy.assign( x, y, {}, true, {} ); // $ExpectError
	rangeBy.assign( x, y, {}, false, {} ); // $ExpectError
	rangeBy.assign( x, y, {}, null, {} ); // $ExpectError
	rangeBy.assign( x, y, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [] );

	rangeBy.assign( x, y, { 'dims': '5' }, clbk ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': 5 }, clbk ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': true }, clbk ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': false }, clbk ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': null }, clbk ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': {} }, clbk ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	rangeBy.assign( x, y, { 'dims': '5' }, clbk, {} ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': 5 }, clbk, {} ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': true }, clbk, {} ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': false }, clbk, {} ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': null }, clbk, {} ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': {} }, clbk, {} ); // $ExpectError
	rangeBy.assign( x, y, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [] );

	rangeBy.assign(); // $ExpectError
	rangeBy.assign( x ); // $ExpectError
	rangeBy.assign( x, y ); // $ExpectError
	rangeBy.assign( x, y, {}, clbk, {}, {} ); // $ExpectError
}

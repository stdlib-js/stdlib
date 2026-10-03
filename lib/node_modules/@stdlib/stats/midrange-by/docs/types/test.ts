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

/* eslint-disable space-in-parens */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/ndarray/zeros' );
import midrangeBy = require( './index' );

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

	midrangeBy( x, clbk ); // $ExpectType OutputArray<number>
	midrangeBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	midrangeBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	midrangeBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	midrangeBy( '5', clbk ); // $ExpectError
	midrangeBy( 5, clbk ); // $ExpectError
	midrangeBy( true, clbk ); // $ExpectError
	midrangeBy( false, clbk ); // $ExpectError
	midrangeBy( null, clbk ); // $ExpectError
	midrangeBy( void 0, clbk ); // $ExpectError
	midrangeBy( {}, clbk ); // $ExpectError
	midrangeBy( ( x: number ): number => x, clbk ); // $ExpectError

	midrangeBy( '5', clbk, {} ); // $ExpectError
	midrangeBy( 5, clbk, {} ); // $ExpectError
	midrangeBy( true, clbk, {} ); // $ExpectError
	midrangeBy( false, clbk, {} ); // $ExpectError
	midrangeBy( null, clbk, {} ); // $ExpectError
	midrangeBy( void 0, clbk, {} ); // $ExpectError
	midrangeBy( {}, clbk, {} ); // $ExpectError
	midrangeBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	midrangeBy( '5', {}, clbk ); // $ExpectError
	midrangeBy( 5, {}, clbk ); // $ExpectError
	midrangeBy( true, {}, clbk ); // $ExpectError
	midrangeBy( false, {}, clbk ); // $ExpectError
	midrangeBy( null, {}, clbk ); // $ExpectError
	midrangeBy( void 0, {}, clbk ); // $ExpectError
	midrangeBy( {}, {}, clbk ); // $ExpectError
	midrangeBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	midrangeBy( '5', {}, clbk, {} ); // $ExpectError
	midrangeBy( 5, {}, clbk, {} ); // $ExpectError
	midrangeBy( true, {}, clbk, {} ); // $ExpectError
	midrangeBy( false, {}, clbk, {} ); // $ExpectError
	midrangeBy( null, {}, clbk, {} ); // $ExpectError
	midrangeBy( void 0, {}, clbk, {} ); // $ExpectError
	midrangeBy( {}, {}, clbk, {} ); // $ExpectError
	midrangeBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy( x, '5', clbk ); // $ExpectError
	midrangeBy( x, true, clbk ); // $ExpectError
	midrangeBy( x, false, clbk ); // $ExpectError
	midrangeBy( x, null, clbk ); // $ExpectError
	midrangeBy( x, [], clbk ); // $ExpectError

	midrangeBy( x, '5', clbk, {} ); // $ExpectError
	midrangeBy( x, true, clbk, {} ); // $ExpectError
	midrangeBy( x, false, clbk, {} ); // $ExpectError
	midrangeBy( x, null, clbk, {} ); // $ExpectError
	midrangeBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy( x, '5' ); // $ExpectError
	midrangeBy( x, 5 ); // $ExpectError
	midrangeBy( x, true ); // $ExpectError
	midrangeBy( x, false ); // $ExpectError
	midrangeBy( x, null ); // $ExpectError
	midrangeBy( x, void 0 ); // $ExpectError
	midrangeBy( x, {} ); // $ExpectError
	midrangeBy( x, [] ); // $ExpectError

	midrangeBy( x, '5', {} ); // $ExpectError
	midrangeBy( x, true, {} ); // $ExpectError
	midrangeBy( x, false, {} ); // $ExpectError
	midrangeBy( x, null, {} ); // $ExpectError
	midrangeBy( x, [], {} ); // $ExpectError

	midrangeBy( x, {}, '5' ); // $ExpectError
	midrangeBy( x, {}, 5 ); // $ExpectError
	midrangeBy( x, {}, true ); // $ExpectError
	midrangeBy( x, {}, false ); // $ExpectError
	midrangeBy( x, {}, null ); // $ExpectError
	midrangeBy( x, {}, void 0 ); // $ExpectError
	midrangeBy( x, {}, {} ); // $ExpectError
	midrangeBy( x, {}, [] ); // $ExpectError

	midrangeBy( x, {}, '5', {} ); // $ExpectError
	midrangeBy( x, {}, true, {} ); // $ExpectError
	midrangeBy( x, {}, false, {} ); // $ExpectError
	midrangeBy( x, {}, null, {} ); // $ExpectError
	midrangeBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': true }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': false }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': null }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	midrangeBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	midrangeBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	midrangeBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	midrangeBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	midrangeBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	midrangeBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	midrangeBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	midrangeBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	midrangeBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	midrangeBy( x, { 'dims': true }, clbk ); // $ExpectError
	midrangeBy( x, { 'dims': false }, clbk ); // $ExpectError
	midrangeBy( x, { 'dims': null }, clbk ); // $ExpectError
	midrangeBy( x, { 'dims': {} }, clbk ); // $ExpectError
	midrangeBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	midrangeBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	midrangeBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy(); // $ExpectError
	midrangeBy( x );
	midrangeBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [], {
		'dtype': 'float64'
	});

	midrangeBy.assign( x, y, clbk ); // $ExpectType float64ndarray
	midrangeBy.assign( x, y, clbk, {} ); // $ExpectType float64ndarray

	midrangeBy.assign( x, y, {}, clbk ); // $ExpectType float64ndarray
	midrangeBy.assign( x, y, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [] );

	midrangeBy.assign( '5', y, clbk ); // $ExpectError
	midrangeBy.assign( 5, y, clbk ); // $ExpectError
	midrangeBy.assign( true, y, clbk ); // $ExpectError
	midrangeBy.assign( false, y, clbk ); // $ExpectError
	midrangeBy.assign( null, y, clbk ); // $ExpectError
	midrangeBy.assign( void 0, y, clbk ); // $ExpectError
	midrangeBy.assign( {}, y, clbk ); // $ExpectError
	midrangeBy.assign( ( x: number ): number => x, y, clbk ); // $ExpectError

	midrangeBy.assign( '5', y, clbk, {} ); // $ExpectError
	midrangeBy.assign( 5, y, clbk, {} ); // $ExpectError
	midrangeBy.assign( true, y, clbk, {} ); // $ExpectError
	midrangeBy.assign( false, y, clbk, {} ); // $ExpectError
	midrangeBy.assign( null, y, clbk, {} ); // $ExpectError
	midrangeBy.assign( void 0, y, clbk, {} ); // $ExpectError
	midrangeBy.assign( {}, y, clbk, {} ); // $ExpectError
	midrangeBy.assign( ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	midrangeBy.assign( '5', y, {}, clbk ); // $ExpectError
	midrangeBy.assign( 5, y, {}, clbk ); // $ExpectError
	midrangeBy.assign( true, y, {}, clbk ); // $ExpectError
	midrangeBy.assign( false, y, {}, clbk ); // $ExpectError
	midrangeBy.assign( null, y, {}, clbk ); // $ExpectError
	midrangeBy.assign( void 0, y, {}, clbk ); // $ExpectError
	midrangeBy.assign( {}, y, {}, clbk ); // $ExpectError
	midrangeBy.assign( ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	midrangeBy.assign( '5', y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( 5, y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( true, y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( false, y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( null, y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( void 0, y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( {}, y, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	midrangeBy.assign( x, '5', clbk ); // $ExpectError
	midrangeBy.assign( x, 5, clbk ); // $ExpectError
	midrangeBy.assign( x, true, clbk ); // $ExpectError
	midrangeBy.assign( x, false, clbk ); // $ExpectError
	midrangeBy.assign( x, null, clbk ); // $ExpectError
	midrangeBy.assign( x, void 0, clbk ); // $ExpectError
	midrangeBy.assign( x, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	midrangeBy.assign( x, '5', clbk, {} ); // $ExpectError
	midrangeBy.assign( x, 5, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, true, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, false, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, null, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, void 0, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	midrangeBy.assign( x, '5', {}, clbk ); // $ExpectError
	midrangeBy.assign( x, 5, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, true, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, false, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, null, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, void 0, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, {}, {}, clbk ); // $ExpectError
	midrangeBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	midrangeBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, {}, {}, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [] );

	midrangeBy.assign( x, y, '5' ); // $ExpectError
	midrangeBy.assign( x, y, 5 ); // $ExpectError
	midrangeBy.assign( x, y, true ); // $ExpectError
	midrangeBy.assign( x, y, false ); // $ExpectError
	midrangeBy.assign( x, y, null ); // $ExpectError
	midrangeBy.assign( x, y, void 0 ); // $ExpectError
	midrangeBy.assign( x, y, {} ); // $ExpectError
	midrangeBy.assign( x, y, [] ); // $ExpectError

	midrangeBy.assign( x, y, '5', {} ); // $ExpectError
	midrangeBy.assign( x, y, true, {} ); // $ExpectError
	midrangeBy.assign( x, y, false, {} ); // $ExpectError
	midrangeBy.assign( x, y, null, {} ); // $ExpectError
	midrangeBy.assign( x, y, [], {} ); // $ExpectError

	midrangeBy.assign( x, y, {}, '5' ); // $ExpectError
	midrangeBy.assign( x, y, {}, 5 ); // $ExpectError
	midrangeBy.assign( x, y, {}, true ); // $ExpectError
	midrangeBy.assign( x, y, {}, false ); // $ExpectError
	midrangeBy.assign( x, y, {}, null ); // $ExpectError
	midrangeBy.assign( x, y, {}, void 0 ); // $ExpectError
	midrangeBy.assign( x, y, {}, {} ); // $ExpectError
	midrangeBy.assign( x, y, {}, [] ); // $ExpectError

	midrangeBy.assign( x, y, {}, '5', {} ); // $ExpectError
	midrangeBy.assign( x, y, {}, true, {} ); // $ExpectError
	midrangeBy.assign( x, y, {}, false, {} ); // $ExpectError
	midrangeBy.assign( x, y, {}, null, {} ); // $ExpectError
	midrangeBy.assign( x, y, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [] );

	midrangeBy.assign( x, y, { 'dims': '5' }, clbk ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': 5 }, clbk ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': true }, clbk ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': false }, clbk ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': null }, clbk ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': {} }, clbk ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	midrangeBy.assign( x, y, { 'dims': '5' }, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': 5 }, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': true }, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': false }, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': null }, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': {} }, clbk, {} ); // $ExpectError
	midrangeBy.assign( x, y, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = zeros( [] );

	midrangeBy.assign(); // $ExpectError
	midrangeBy.assign( x ); // $ExpectError
	midrangeBy.assign( x, y ); // $ExpectError
	midrangeBy.assign( x, y, {}, clbk, {}, {} ); // $ExpectError
}

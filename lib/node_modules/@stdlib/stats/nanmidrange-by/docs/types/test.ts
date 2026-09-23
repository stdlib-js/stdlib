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
import nanmidrangeBy = require( './index' );

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

	nanmidrangeBy( x, clbk ); // $ExpectType OutputArray<number>
	nanmidrangeBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	nanmidrangeBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	nanmidrangeBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanmidrangeBy( '5', clbk ); // $ExpectError
	nanmidrangeBy( 5, clbk ); // $ExpectError
	nanmidrangeBy( true, clbk ); // $ExpectError
	nanmidrangeBy( false, clbk ); // $ExpectError
	nanmidrangeBy( null, clbk ); // $ExpectError
	nanmidrangeBy( void 0, clbk ); // $ExpectError
	nanmidrangeBy( {}, clbk ); // $ExpectError
	nanmidrangeBy( ( x: number ): number => x, clbk ); // $ExpectError

	nanmidrangeBy( '5', clbk, {} ); // $ExpectError
	nanmidrangeBy( 5, clbk, {} ); // $ExpectError
	nanmidrangeBy( true, clbk, {} ); // $ExpectError
	nanmidrangeBy( false, clbk, {} ); // $ExpectError
	nanmidrangeBy( null, clbk, {} ); // $ExpectError
	nanmidrangeBy( void 0, clbk, {} ); // $ExpectError
	nanmidrangeBy( {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	nanmidrangeBy( '5', {}, clbk ); // $ExpectError
	nanmidrangeBy( 5, {}, clbk ); // $ExpectError
	nanmidrangeBy( true, {}, clbk ); // $ExpectError
	nanmidrangeBy( false, {}, clbk ); // $ExpectError
	nanmidrangeBy( null, {}, clbk ); // $ExpectError
	nanmidrangeBy( void 0, {}, clbk ); // $ExpectError
	nanmidrangeBy( {}, {}, clbk ); // $ExpectError
	nanmidrangeBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	nanmidrangeBy( '5', {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( 5, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( true, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( false, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( null, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( void 0, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( {}, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy( x, '5', clbk ); // $ExpectError
	nanmidrangeBy( x, true, clbk ); // $ExpectError
	nanmidrangeBy( x, false, clbk ); // $ExpectError
	nanmidrangeBy( x, null, clbk ); // $ExpectError
	nanmidrangeBy( x, [], clbk ); // $ExpectError

	nanmidrangeBy( x, '5', clbk, {} ); // $ExpectError
	nanmidrangeBy( x, true, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, false, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, null, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy( x, '5' ); // $ExpectError
	nanmidrangeBy( x, true ); // $ExpectError
	nanmidrangeBy( x, false ); // $ExpectError
	nanmidrangeBy( x, null ); // $ExpectError
	nanmidrangeBy( x, [] ); // $ExpectError

	nanmidrangeBy( x, '5', {} ); // $ExpectError
	nanmidrangeBy( x, true, {} ); // $ExpectError
	nanmidrangeBy( x, false, {} ); // $ExpectError
	nanmidrangeBy( x, null, {} ); // $ExpectError
	nanmidrangeBy( x, [], {} ); // $ExpectError

	nanmidrangeBy( x, {}, '5', {} ); // $ExpectError
	nanmidrangeBy( x, {}, true, {} ); // $ExpectError
	nanmidrangeBy( x, {}, false, {} ); // $ExpectError
	nanmidrangeBy( x, {}, null, {} ); // $ExpectError
	nanmidrangeBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': true }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': false }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': null }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmidrangeBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmidrangeBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dims': true }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dims': false }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dims': null }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dims': {} }, clbk ); // $ExpectError
	nanmidrangeBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmidrangeBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	nanmidrangeBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy(); // $ExpectError
	nanmidrangeBy( x );
	nanmidrangeBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign( x, x, clbk ); // $ExpectType float64ndarray
	nanmidrangeBy.assign( x, x, {}, clbk ); // $ExpectType float64ndarray

	nanmidrangeBy.assign( x, x, clbk, {} ); // $ExpectType float64ndarray
	nanmidrangeBy.assign( x, x, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign( '5', x, clbk ); // $ExpectError
	nanmidrangeBy.assign( 5, x, clbk ); // $ExpectError
	nanmidrangeBy.assign( true, x, clbk ); // $ExpectError
	nanmidrangeBy.assign( false, x, clbk ); // $ExpectError
	nanmidrangeBy.assign( null, x, clbk ); // $ExpectError
	nanmidrangeBy.assign( void 0, x, clbk ); // $ExpectError
	nanmidrangeBy.assign( {}, x, clbk ); // $ExpectError
	nanmidrangeBy.assign( ( x: number ): number => x, x, clbk ); // $ExpectError

	nanmidrangeBy.assign( '5', x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( 5, x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( true, x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( false, x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( null, x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( void 0, x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( {}, x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( ( x: number ): number => x, x, {}, clbk ); // $ExpectError

	nanmidrangeBy.assign( '5', x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( 5, x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( true, x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( false, x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( null, x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( void 0, x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( {}, x, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( ( x: number ): number => x, x, clbk, {} ); // $ExpectError

	nanmidrangeBy.assign( '5', x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( 5, x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( true, x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( false, x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( null, x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( void 0, x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( {}, x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( ( x: number ): number => x, x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign( x, '5', clbk ); // $ExpectError
	nanmidrangeBy.assign( x, 5, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, true, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, false, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, null, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, void 0, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	nanmidrangeBy.assign( x, '5', clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, 5, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, true, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, false, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, null, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, void 0, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	nanmidrangeBy.assign( x, '5', {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, 5, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, true, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, false, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, null, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, void 0, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, {}, {}, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	nanmidrangeBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, {}, {}, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign( x, x, '5', clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, true, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, false, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, null, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, [], clbk ); // $ExpectError

	nanmidrangeBy.assign( x, x, '5', clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, true, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, false, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, null, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign( x, x, '5' ); // $ExpectError
	nanmidrangeBy.assign( x, x, true ); // $ExpectError
	nanmidrangeBy.assign( x, x, false ); // $ExpectError
	nanmidrangeBy.assign( x, x, null ); // $ExpectError
	nanmidrangeBy.assign( x, x, [] ); // $ExpectError

	nanmidrangeBy.assign( x, x, '5', {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, true, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, false, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, null, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, [], {} ); // $ExpectError

	nanmidrangeBy.assign( x, x, {}, '5' ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, true ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, false ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, null ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, [] ); // $ExpectError

	nanmidrangeBy.assign( x, x, {}, '5', {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, true, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, false, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, null, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign( x, x, { 'dims': '5' }, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': 5 }, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': true }, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': false }, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': null }, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': {} }, clbk ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanmidrangeBy.assign( x, x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': true }, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': false }, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': null }, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': {} }, clbk, {} ); // $ExpectError
	nanmidrangeBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanmidrangeBy.assign(); // $ExpectError
	nanmidrangeBy.assign( x ); // $ExpectError
	nanmidrangeBy.assign( x, x ); // $ExpectError
	nanmidrangeBy.assign( x, x, {}, clbk, {}, {} ); // $ExpectError
}

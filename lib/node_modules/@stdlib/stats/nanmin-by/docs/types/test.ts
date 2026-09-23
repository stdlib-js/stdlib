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
import nanminBy = require( './index' );

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

	nanminBy( x, clbk ); // $ExpectType OutputArray<number>
	nanminBy( x, clbk, {} ); // $ExpectType OutputArray<number>

	nanminBy( x, {}, clbk ); // $ExpectType OutputArray<number>
	nanminBy( x, {}, clbk, {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nanminBy( '5', clbk ); // $ExpectError
	nanminBy( 5, clbk ); // $ExpectError
	nanminBy( true, clbk ); // $ExpectError
	nanminBy( false, clbk ); // $ExpectError
	nanminBy( null, clbk ); // $ExpectError
	nanminBy( void 0, clbk ); // $ExpectError
	nanminBy( {}, clbk ); // $ExpectError
	nanminBy( ( x: number ): number => x, clbk ); // $ExpectError

	nanminBy( '5', clbk, {} ); // $ExpectError
	nanminBy( 5, clbk, {} ); // $ExpectError
	nanminBy( true, clbk, {} ); // $ExpectError
	nanminBy( false, clbk, {} ); // $ExpectError
	nanminBy( null, clbk, {} ); // $ExpectError
	nanminBy( void 0, clbk, {} ); // $ExpectError
	nanminBy( {}, clbk, {} ); // $ExpectError
	nanminBy( ( x: number ): number => x, clbk, {} ); // $ExpectError

	nanminBy( '5', {}, clbk ); // $ExpectError
	nanminBy( 5, {}, clbk ); // $ExpectError
	nanminBy( true, {}, clbk ); // $ExpectError
	nanminBy( false, {}, clbk ); // $ExpectError
	nanminBy( null, {}, clbk ); // $ExpectError
	nanminBy( void 0, {}, clbk ); // $ExpectError
	nanminBy( {}, {}, clbk ); // $ExpectError
	nanminBy( ( x: number ): number => x, {}, clbk ); // $ExpectError

	nanminBy( '5', {}, clbk, {} ); // $ExpectError
	nanminBy( 5, {}, clbk, {} ); // $ExpectError
	nanminBy( true, {}, clbk, {} ); // $ExpectError
	nanminBy( false, {}, clbk, {} ); // $ExpectError
	nanminBy( null, {}, clbk, {} ); // $ExpectError
	nanminBy( void 0, {}, clbk, {} ); // $ExpectError
	nanminBy( {}, {}, clbk, {} ); // $ExpectError
	nanminBy( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy( x, '5', clbk ); // $ExpectError
	nanminBy( x, true, clbk ); // $ExpectError
	nanminBy( x, false, clbk ); // $ExpectError
	nanminBy( x, null, clbk ); // $ExpectError
	nanminBy( x, [], clbk ); // $ExpectError

	nanminBy( x, '5', clbk, {} ); // $ExpectError
	nanminBy( x, true, clbk, {} ); // $ExpectError
	nanminBy( x, false, clbk, {} ); // $ExpectError
	nanminBy( x, null, clbk, {} ); // $ExpectError
	nanminBy( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy( x, '5' ); // $ExpectError
	nanminBy( x, true ); // $ExpectError
	nanminBy( x, false ); // $ExpectError
	nanminBy( x, null ); // $ExpectError
	nanminBy( x, [] ); // $ExpectError

	nanminBy( x, '5', {} ); // $ExpectError
	nanminBy( x, true, {} ); // $ExpectError
	nanminBy( x, false, {} ); // $ExpectError
	nanminBy( x, null, {} ); // $ExpectError
	nanminBy( x, [], {} ); // $ExpectError

	nanminBy( x, {}, '5', {} ); // $ExpectError
	nanminBy( x, {}, true, {} ); // $ExpectError
	nanminBy( x, {}, false, {} ); // $ExpectError
	nanminBy( x, {}, null, {} ); // $ExpectError
	nanminBy( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy( x, { 'dtype': '5' }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': 5 }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': true }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': false }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': null }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': [] }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': {} }, clbk ); // $ExpectError
	nanminBy( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	nanminBy( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	nanminBy( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	nanminBy( x, { 'keepdims': null }, clbk ); // $ExpectError
	nanminBy( x, { 'keepdims': [] }, clbk ); // $ExpectError
	nanminBy( x, { 'keepdims': {} }, clbk ); // $ExpectError
	nanminBy( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanminBy( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy( x, { 'dims': '5' }, clbk ); // $ExpectError
	nanminBy( x, { 'dims': 5 }, clbk ); // $ExpectError
	nanminBy( x, { 'dims': true }, clbk ); // $ExpectError
	nanminBy( x, { 'dims': false }, clbk ); // $ExpectError
	nanminBy( x, { 'dims': null }, clbk ); // $ExpectError
	nanminBy( x, { 'dims': {} }, clbk ); // $ExpectError
	nanminBy( x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanminBy( x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dims': true }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dims': false }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dims': null }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dims': {} }, clbk, {} ); // $ExpectError
	nanminBy( x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy(); // $ExpectError
	nanminBy( x );
	nanminBy( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign( x, x, clbk ); // $ExpectType float64ndarray
	nanminBy.assign( x, x, {}, clbk ); // $ExpectType float64ndarray

	nanminBy.assign( x, x, clbk, {} ); // $ExpectType float64ndarray
	nanminBy.assign( x, x, {}, clbk, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign( '5', x, clbk ); // $ExpectError
	nanminBy.assign( 5, x, clbk ); // $ExpectError
	nanminBy.assign( true, x, clbk ); // $ExpectError
	nanminBy.assign( false, x, clbk ); // $ExpectError
	nanminBy.assign( null, x, clbk ); // $ExpectError
	nanminBy.assign( void 0, x, clbk ); // $ExpectError
	nanminBy.assign( {}, x, clbk ); // $ExpectError
	nanminBy.assign( ( x: number ): number => x, x, clbk ); // $ExpectError

	nanminBy.assign( '5', x, {}, clbk ); // $ExpectError
	nanminBy.assign( 5, x, {}, clbk ); // $ExpectError
	nanminBy.assign( true, x, {}, clbk ); // $ExpectError
	nanminBy.assign( false, x, {}, clbk ); // $ExpectError
	nanminBy.assign( null, x, {}, clbk ); // $ExpectError
	nanminBy.assign( void 0, x, {}, clbk ); // $ExpectError
	nanminBy.assign( {}, x, {}, clbk ); // $ExpectError
	nanminBy.assign( ( x: number ): number => x, x, {}, clbk ); // $ExpectError

	nanminBy.assign( '5', x, clbk, {} ); // $ExpectError
	nanminBy.assign( 5, x, clbk, {} ); // $ExpectError
	nanminBy.assign( true, x, clbk, {} ); // $ExpectError
	nanminBy.assign( false, x, clbk, {} ); // $ExpectError
	nanminBy.assign( null, x, clbk, {} ); // $ExpectError
	nanminBy.assign( void 0, x, clbk, {} ); // $ExpectError
	nanminBy.assign( {}, x, clbk, {} ); // $ExpectError
	nanminBy.assign( ( x: number ): number => x, x, clbk, {} ); // $ExpectError

	nanminBy.assign( '5', x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( 5, x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( true, x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( false, x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( null, x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( void 0, x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( {}, x, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( ( x: number ): number => x, x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign( x, '5', clbk ); // $ExpectError
	nanminBy.assign( x, 5, clbk ); // $ExpectError
	nanminBy.assign( x, true, clbk ); // $ExpectError
	nanminBy.assign( x, false, clbk ); // $ExpectError
	nanminBy.assign( x, null, clbk ); // $ExpectError
	nanminBy.assign( x, void 0, clbk ); // $ExpectError
	nanminBy.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	nanminBy.assign( x, '5', {}, clbk ); // $ExpectError
	nanminBy.assign( x, 5, {}, clbk ); // $ExpectError
	nanminBy.assign( x, true, {}, clbk ); // $ExpectError
	nanminBy.assign( x, false, {}, clbk ); // $ExpectError
	nanminBy.assign( x, null, {}, clbk ); // $ExpectError
	nanminBy.assign( x, void 0, {}, clbk ); // $ExpectError
	nanminBy.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	nanminBy.assign( x, '5', clbk, {} ); // $ExpectError
	nanminBy.assign( x, 5, clbk, {} ); // $ExpectError
	nanminBy.assign( x, true, clbk, {} ); // $ExpectError
	nanminBy.assign( x, false, clbk, {} ); // $ExpectError
	nanminBy.assign( x, null, clbk, {} ); // $ExpectError
	nanminBy.assign( x, void 0, clbk, {} ); // $ExpectError
	nanminBy.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	nanminBy.assign( x, '5', {}, clbk, {} ); // $ExpectError
	nanminBy.assign( x, 5, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( x, true, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( x, false, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( x, null, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	nanminBy.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign( x, x, '5', clbk ); // $ExpectError
	nanminBy.assign( x, x, true, clbk ); // $ExpectError
	nanminBy.assign( x, x, false, clbk ); // $ExpectError
	nanminBy.assign( x, x, null, clbk ); // $ExpectError
	nanminBy.assign( x, x, [], clbk ); // $ExpectError

	nanminBy.assign( x, x, '5', clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, true, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, false, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, null, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign( x, x, '5' ); // $ExpectError
	nanminBy.assign( x, x, true ); // $ExpectError
	nanminBy.assign( x, x, false ); // $ExpectError
	nanminBy.assign( x, x, null ); // $ExpectError
	nanminBy.assign( x, x, [] ); // $ExpectError

	nanminBy.assign( x, x, '5', {} ); // $ExpectError
	nanminBy.assign( x, x, true, {} ); // $ExpectError
	nanminBy.assign( x, x, false, {} ); // $ExpectError
	nanminBy.assign( x, x, null, {} ); // $ExpectError
	nanminBy.assign( x, x, [], {} ); // $ExpectError

	nanminBy.assign( x, x, {}, '5' ); // $ExpectError
	nanminBy.assign( x, x, {}, true ); // $ExpectError
	nanminBy.assign( x, x, {}, false ); // $ExpectError
	nanminBy.assign( x, x, {}, null ); // $ExpectError
	nanminBy.assign( x, x, {}, [] ); // $ExpectError

	nanminBy.assign( x, x, {}, '5', {} ); // $ExpectError
	nanminBy.assign( x, x, {}, true, {} ); // $ExpectError
	nanminBy.assign( x, x, {}, false, {} ); // $ExpectError
	nanminBy.assign( x, x, {}, null, {} ); // $ExpectError
	nanminBy.assign( x, x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign( x, x, { 'dims': '5' }, clbk ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': 5 }, clbk ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': true }, clbk ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': false }, clbk ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': null }, clbk ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': {} }, clbk ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk ); // $ExpectError

	nanminBy.assign( x, x, { 'dims': '5' }, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': 5 }, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': true }, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': false }, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': null }, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': {} }, clbk, {} ); // $ExpectError
	nanminBy.assign( x, x, { 'dims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nanminBy.assign(); // $ExpectError
	nanminBy.assign( x ); // $ExpectError
	nanminBy.assign( x, x ); // $ExpectError
	nanminBy.assign( x, x, {}, clbk, {}, {} ); // $ExpectError
}

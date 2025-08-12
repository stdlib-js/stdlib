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
import findIndex = require( './index' );

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

	findIndex( x, clbk ); // $ExpectType OutputArray
	findIndex( x, clbk, {} ); // $ExpectType OutputArray

	findIndex( x, {}, clbk ); // $ExpectType OutputArray
	findIndex( x, {}, clbk, {} ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	findIndex( '5', clbk ); // $ExpectError
	findIndex( 5, clbk ); // $ExpectError
	findIndex( true, clbk ); // $ExpectError
	findIndex( false, clbk ); // $ExpectError
	findIndex( null, clbk ); // $ExpectError
	findIndex( void 0, clbk ); // $ExpectError
	findIndex( {}, clbk ); // $ExpectError
	findIndex( ( x: number ): number => x, clbk ); // $ExpectError

	findIndex( '5', clbk, {} ); // $ExpectError
	findIndex( 5, clbk, {} ); // $ExpectError
	findIndex( true, clbk, {} ); // $ExpectError
	findIndex( false, clbk, {} ); // $ExpectError
	findIndex( null, clbk, {} ); // $ExpectError
	findIndex( void 0, clbk, {} ); // $ExpectError
	findIndex( {}, clbk, {} ); // $ExpectError
	findIndex( ( x: number ): number => x, clbk, {} ); // $ExpectError

	findIndex( '5', {}, clbk ); // $ExpectError
	findIndex( 5, {}, clbk ); // $ExpectError
	findIndex( true, {}, clbk ); // $ExpectError
	findIndex( false, {}, clbk ); // $ExpectError
	findIndex( null, {}, clbk ); // $ExpectError
	findIndex( void 0, {}, clbk ); // $ExpectError
	findIndex( {}, {}, clbk ); // $ExpectError
	findIndex( ( x: number ): number => x, {}, clbk ); // $ExpectError

	findIndex( '5', {}, clbk, {} ); // $ExpectError
	findIndex( 5, {}, clbk, {} ); // $ExpectError
	findIndex( true, {}, clbk, {} ); // $ExpectError
	findIndex( false, {}, clbk, {} ); // $ExpectError
	findIndex( null, {}, clbk, {} ); // $ExpectError
	findIndex( void 0, {}, clbk, {} ); // $ExpectError
	findIndex( {}, {}, clbk, {} ); // $ExpectError
	findIndex( ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex( x, '5', clbk ); // $ExpectError
	findIndex( x, true, clbk ); // $ExpectError
	findIndex( x, false, clbk ); // $ExpectError
	findIndex( x, null, clbk ); // $ExpectError
	findIndex( x, [], clbk ); // $ExpectError

	findIndex( x, '5', clbk, {} ); // $ExpectError
	findIndex( x, true, clbk, {} ); // $ExpectError
	findIndex( x, false, clbk, {} ); // $ExpectError
	findIndex( x, null, clbk, {} ); // $ExpectError
	findIndex( x, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex( x, '5' ); // $ExpectError
	findIndex( x, true ); // $ExpectError
	findIndex( x, false ); // $ExpectError
	findIndex( x, null ); // $ExpectError
	findIndex( x, [] ); // $ExpectError

	findIndex( x, '5', {} ); // $ExpectError
	findIndex( x, true, {} ); // $ExpectError
	findIndex( x, false, {} ); // $ExpectError
	findIndex( x, null, {} ); // $ExpectError
	findIndex( x, [], {} ); // $ExpectError

	findIndex( x, {}, '5', {} ); // $ExpectError
	findIndex( x, {}, true, {} ); // $ExpectError
	findIndex( x, {}, false, {} ); // $ExpectError
	findIndex( x, {}, null, {} ); // $ExpectError
	findIndex( x, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex( x, { 'dtype': '5' }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': 5 }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': true }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': false }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': null }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': [] }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': {} }, clbk ); // $ExpectError
	findIndex( x, { 'dtype': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndex( x, { 'dtype': '5' }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': 5 }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': true }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': false }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': null }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': [] }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': {} }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dtype': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex( x, { 'keepdims': '5' }, clbk ); // $ExpectError
	findIndex( x, { 'keepdims': 5 }, clbk ); // $ExpectError
	findIndex( x, { 'keepdims': null }, clbk ); // $ExpectError
	findIndex( x, { 'keepdims': [] }, clbk ); // $ExpectError
	findIndex( x, { 'keepdims': {} }, clbk ); // $ExpectError
	findIndex( x, { 'keepdims': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndex( x, { 'keepdims': '5' }, clbk, {} ); // $ExpectError
	findIndex( x, { 'keepdims': 5 }, clbk, {} ); // $ExpectError
	findIndex( x, { 'keepdims': null }, clbk, {} ); // $ExpectError
	findIndex( x, { 'keepdims': [] }, clbk, {} ); // $ExpectError
	findIndex( x, { 'keepdims': {} }, clbk, {} ); // $ExpectError
	findIndex( x, { 'keepdims': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex( x, { 'dim': '5' }, clbk ); // $ExpectError
	findIndex( x, { 'dim': true }, clbk ); // $ExpectError
	findIndex( x, { 'dim': false }, clbk ); // $ExpectError
	findIndex( x, { 'dim': null }, clbk ); // $ExpectError
	findIndex( x, { 'dim': {} }, clbk ); // $ExpectError
	findIndex( x, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndex( x, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dim': true }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dim': false }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dim': null }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dim': {} }, clbk, {} ); // $ExpectError
	findIndex( x, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex(); // $ExpectError
	findIndex( x );
	findIndex( x, {}, clbk, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndex.assign( x, y, clbk ); // $ExpectType int32ndarray
	findIndex.assign( x, y, {}, clbk ); // $ExpectType int32ndarray

	findIndex.assign( x, y, clbk, {} ); // $ExpectType int32ndarray
	findIndex.assign( x, y, {}, clbk, {} ); // $ExpectType int32ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndex.assign( '5', y, clbk ); // $ExpectError
	findIndex.assign( 5, y, clbk ); // $ExpectError
	findIndex.assign( true, y, clbk ); // $ExpectError
	findIndex.assign( false, y, clbk ); // $ExpectError
	findIndex.assign( null, y, clbk ); // $ExpectError
	findIndex.assign( void 0, y, clbk ); // $ExpectError
	findIndex.assign( {}, y, clbk ); // $ExpectError
	findIndex.assign( ( x: number ): number => x, y, clbk ); // $ExpectError

	findIndex.assign( '5', y, {}, clbk ); // $ExpectError
	findIndex.assign( 5, y, {}, clbk ); // $ExpectError
	findIndex.assign( true, y, {}, clbk ); // $ExpectError
	findIndex.assign( false, y, {}, clbk ); // $ExpectError
	findIndex.assign( null, y, {}, clbk ); // $ExpectError
	findIndex.assign( void 0, y, {}, clbk ); // $ExpectError
	findIndex.assign( {}, y, {}, clbk ); // $ExpectError
	findIndex.assign( ( x: number ): number => x, y, {}, clbk ); // $ExpectError

	findIndex.assign( '5', y, clbk, {} ); // $ExpectError
	findIndex.assign( 5, y, clbk, {} ); // $ExpectError
	findIndex.assign( true, y, clbk, {} ); // $ExpectError
	findIndex.assign( false, y, clbk, {} ); // $ExpectError
	findIndex.assign( null, y, clbk, {} ); // $ExpectError
	findIndex.assign( void 0, y, clbk, {} ); // $ExpectError
	findIndex.assign( {}, y, clbk, {} ); // $ExpectError
	findIndex.assign( ( x: number ): number => x, y, clbk, {} ); // $ExpectError

	findIndex.assign( '5', y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( 5, y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( true, y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( false, y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( null, y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( void 0, y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( {}, y, {}, clbk, {} ); // $ExpectError
	findIndex.assign( ( x: number ): number => x, y, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});

	findIndex.assign( x, '5', clbk ); // $ExpectError
	findIndex.assign( x, 5, clbk ); // $ExpectError
	findIndex.assign( x, true, clbk ); // $ExpectError
	findIndex.assign( x, false, clbk ); // $ExpectError
	findIndex.assign( x, null, clbk ); // $ExpectError
	findIndex.assign( x, void 0, clbk ); // $ExpectError
	findIndex.assign( x, ( x: number ): number => x, clbk ); // $ExpectError

	findIndex.assign( x, '5', {}, clbk ); // $ExpectError
	findIndex.assign( x, 5, {}, clbk ); // $ExpectError
	findIndex.assign( x, true, {}, clbk ); // $ExpectError
	findIndex.assign( x, false, {}, clbk ); // $ExpectError
	findIndex.assign( x, null, {}, clbk ); // $ExpectError
	findIndex.assign( x, void 0, {}, clbk ); // $ExpectError
	findIndex.assign( x, ( x: number ): number => x, {}, clbk ); // $ExpectError

	findIndex.assign( x, '5', clbk, {} ); // $ExpectError
	findIndex.assign( x, 5, clbk, {} ); // $ExpectError
	findIndex.assign( x, true, clbk, {} ); // $ExpectError
	findIndex.assign( x, false, clbk, {} ); // $ExpectError
	findIndex.assign( x, null, clbk, {} ); // $ExpectError
	findIndex.assign( x, void 0, clbk, {} ); // $ExpectError
	findIndex.assign( x, ( x: number ): number => x, clbk, {} ); // $ExpectError

	findIndex.assign( x, '5', {}, clbk, {} ); // $ExpectError
	findIndex.assign( x, 5, {}, clbk, {} ); // $ExpectError
	findIndex.assign( x, true, {}, clbk, {} ); // $ExpectError
	findIndex.assign( x, false, {}, clbk, {} ); // $ExpectError
	findIndex.assign( x, null, {}, clbk, {} ); // $ExpectError
	findIndex.assign( x, void 0, {}, clbk, {} ); // $ExpectError
	findIndex.assign( x, ( x: number ): number => x, {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndex.assign( x, y, '5', clbk ); // $ExpectError
	findIndex.assign( x, y, true, clbk ); // $ExpectError
	findIndex.assign( x, y, false, clbk ); // $ExpectError
	findIndex.assign( x, y, null, clbk ); // $ExpectError
	findIndex.assign( x, y, [], clbk ); // $ExpectError

	findIndex.assign( x, y, '5', clbk, {} ); // $ExpectError
	findIndex.assign( x, y, true, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, false, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, null, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, [], clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a callback argument which is not a function...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndex.assign( x, y, '5' ); // $ExpectError
	findIndex.assign( x, y, true ); // $ExpectError
	findIndex.assign( x, y, false ); // $ExpectError
	findIndex.assign( x, y, null ); // $ExpectError
	findIndex.assign( x, y, [] ); // $ExpectError

	findIndex.assign( x, y, '5', {} ); // $ExpectError
	findIndex.assign( x, y, true, {} ); // $ExpectError
	findIndex.assign( x, y, false, {} ); // $ExpectError
	findIndex.assign( x, y, null, {} ); // $ExpectError
	findIndex.assign( x, y, [], {} ); // $ExpectError

	findIndex.assign( x, y, {}, '5' ); // $ExpectError
	findIndex.assign( x, y, {}, true ); // $ExpectError
	findIndex.assign( x, y, {}, false ); // $ExpectError
	findIndex.assign( x, y, {}, null ); // $ExpectError
	findIndex.assign( x, y, {}, [] ); // $ExpectError

	findIndex.assign( x, y, {}, '5', {} ); // $ExpectError
	findIndex.assign( x, y, {}, true, {} ); // $ExpectError
	findIndex.assign( x, y, {}, false, {} ); // $ExpectError
	findIndex.assign( x, y, {}, null, {} ); // $ExpectError
	findIndex.assign( x, y, {}, [], {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndex.assign( x, y, { 'dim': '5' }, clbk ); // $ExpectError
	findIndex.assign( x, y, { 'dim': true }, clbk ); // $ExpectError
	findIndex.assign( x, y, { 'dim': false }, clbk ); // $ExpectError
	findIndex.assign( x, y, { 'dim': null }, clbk ); // $ExpectError
	findIndex.assign( x, y, { 'dim': {} }, clbk ); // $ExpectError
	findIndex.assign( x, y, { 'dim': ( x: number ): number => x }, clbk ); // $ExpectError

	findIndex.assign( x, y, { 'dim': '5' }, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, { 'dim': true }, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, { 'dim': false }, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, { 'dim': null }, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, { 'dim': {} }, clbk, {} ); // $ExpectError
	findIndex.assign( x, y, { 'dim': ( x: number ): number => x }, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'generic'
	});
	const y = zeros( [], {
		'dtype': 'int32'
	});

	findIndex.assign(); // $ExpectError
	findIndex.assign( x ); // $ExpectError
	findIndex.assign( x, y ); // $ExpectError
	findIndex.assign( x, y, {}, clbk, {}, {} ); // $ExpectError
}

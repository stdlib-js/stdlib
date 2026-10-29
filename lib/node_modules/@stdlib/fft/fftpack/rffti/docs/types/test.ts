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
import rffti = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	rffti( 4 ); // $ExpectType floatndarray
	rffti( 4, {} ); // $ExpectType floatndarray
	rffti( 4, { 'dtype': 'float64' } ); // $ExpectType floatndarray
	rffti( 4, { 'dtype': 'float32' } ); // $ExpectType floatndarray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	rffti( '5' ); // $ExpectError
	rffti( true ); // $ExpectError
	rffti( false ); // $ExpectError
	rffti( null ); // $ExpectError
	rffti( void 0 ); // $ExpectError
	rffti( [] ); // $ExpectError
	rffti( {} ); // $ExpectError
	rffti( ( x: number ): number => x ); // $ExpectError

	rffti( '5', {} ); // $ExpectError
	rffti( true, {} ); // $ExpectError
	rffti( false, {} ); // $ExpectError
	rffti( null, {} ); // $ExpectError
	rffti( void 0, {} ); // $ExpectError
	rffti( [], {} ); // $ExpectError
	rffti( {}, {} ); // $ExpectError
	rffti( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	rffti( 4, '5' ); // $ExpectError
	rffti( 4, 5 ); // $ExpectError
	rffti( 4, true ); // $ExpectError
	rffti( 4, false ); // $ExpectError
	rffti( 4, null ); // $ExpectError
	rffti( 4, [] ); // $ExpectError
	rffti( 4, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	rffti( 4, { 'dtype': '5' } ); // $ExpectError
	rffti( 4, { 'dtype': 5 } ); // $ExpectError
	rffti( 4, { 'dtype': true } ); // $ExpectError
	rffti( 4, { 'dtype': false } ); // $ExpectError
	rffti( 4, { 'dtype': null } ); // $ExpectError
	rffti( 4, { 'dtype': [] } ); // $ExpectError
	rffti( 4, { 'dtype': {} } ); // $ExpectError
	rffti( 4, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	rffti(); // $ExpectError
	rffti( 4, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const ws = zeros( [ 42 ], {
		'dtype': 'float64'
	});

	rffti.assign( ws, 4 ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	rffti.assign( '5', 4 ); // $ExpectError
	rffti.assign( 5, 4 ); // $ExpectError
	rffti.assign( true, 4 ); // $ExpectError
	rffti.assign( false, 4 ); // $ExpectError
	rffti.assign( null, 4 ); // $ExpectError
	rffti.assign( void 0, 4 ); // $ExpectError
	rffti.assign( {}, 4 ); // $ExpectError
	rffti.assign( ( x: number ): number => x, 4 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const ws = zeros( [ 42 ], {
		'dtype': 'float64'
	});

	rffti.assign( ws, '5' ); // $ExpectError
	rffti.assign( ws, true ); // $ExpectError
	rffti.assign( ws, false ); // $ExpectError
	rffti.assign( ws, null ); // $ExpectError
	rffti.assign( ws, void 0 ); // $ExpectError
	rffti.assign( ws, [] ); // $ExpectError
	rffti.assign( ws, {} ); // $ExpectError
	rffti.assign( ws, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const ws = zeros( [ 42 ], {
		'dtype': 'float64'
	});

	rffti.assign(); // $ExpectError
	rffti.assign( ws ); // $ExpectError
	rffti.assign( ws, 4, {} ); // $ExpectError
}

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
import oneTo = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	oneTo( [ 3 ] ); // $ExpectType OutputArray
	oneTo( [ 2, 2 ] ); // $ExpectType OutputArray
	oneTo( 3 ); // $ExpectType OutputArray
	oneTo( [ 3 ], {} ); // $ExpectType OutputArray
	oneTo( [ 3 ], { 'dtype': 'float32' } ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not a number or an array of numbers...
{
	oneTo( '5' ); // $ExpectError
	oneTo( true ); // $ExpectError
	oneTo( false ); // $ExpectError
	oneTo( null ); // $ExpectError
	oneTo( void 0 ); // $ExpectError
	oneTo( {} ); // $ExpectError
	oneTo( ( x: number ): number => x ); // $ExpectError

	oneTo( '5', {} ); // $ExpectError
	oneTo( true, {} ); // $ExpectError
	oneTo( false, {} ); // $ExpectError
	oneTo( null, {} ); // $ExpectError
	oneTo( void 0, {} ); // $ExpectError
	oneTo( {}, {} ); // $ExpectError
	oneTo( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	oneTo( [ 3 ], '5' ); // $ExpectError
	oneTo( [ 3 ], 5 ); // $ExpectError
	oneTo( [ 3 ], true ); // $ExpectError
	oneTo( [ 3 ], false ); // $ExpectError
	oneTo( [ 3 ], null ); // $ExpectError
	oneTo( [ 3 ], [] ); // $ExpectError
	oneTo( [ 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	oneTo( [ 3 ], { 'dtype': '5' } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': 5 } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': true } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': false } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': null } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': [] } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': {} } ); // $ExpectError
	oneTo( [ 3 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	oneTo( [ 3 ], { 'dims': '5' } ); // $ExpectError
	oneTo( [ 3 ], { 'dims': 5 } ); // $ExpectError
	oneTo( [ 3 ], { 'dims': true } ); // $ExpectError
	oneTo( [ 3 ], { 'dims': false } ); // $ExpectError
	oneTo( [ 3 ], { 'dims': null } ); // $ExpectError
	oneTo( [ 3 ], { 'dims': {} } ); // $ExpectError
	oneTo( [ 3 ], { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	oneTo(); // $ExpectError
	oneTo( [ 3 ], {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	oneTo.assign( x ); // $ExpectType float64ndarray
	oneTo.assign( x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	oneTo.assign( '5' ); // $ExpectError
	oneTo.assign( 5 ); // $ExpectError
	oneTo.assign( true ); // $ExpectError
	oneTo.assign( false ); // $ExpectError
	oneTo.assign( null ); // $ExpectError
	oneTo.assign( void 0 ); // $ExpectError
	oneTo.assign( {} ); // $ExpectError
	oneTo.assign( ( x: number ): number => x ); // $ExpectError

	oneTo.assign( '5', {} ); // $ExpectError
	oneTo.assign( 5, {} ); // $ExpectError
	oneTo.assign( true, {} ); // $ExpectError
	oneTo.assign( false, {} ); // $ExpectError
	oneTo.assign( null, {} ); // $ExpectError
	oneTo.assign( void 0, {} ); // $ExpectError
	oneTo.assign( {}, {} ); // $ExpectError
	oneTo.assign( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	oneTo.assign( x, '5' ); // $ExpectError
	oneTo.assign( x, 5 ); // $ExpectError
	oneTo.assign( x, true ); // $ExpectError
	oneTo.assign( x, false ); // $ExpectError
	oneTo.assign( x, null ); // $ExpectError
	oneTo.assign( x, [] ); // $ExpectError
	oneTo.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	oneTo.assign( x, { 'dims': '5' } ); // $ExpectError
	oneTo.assign( x, { 'dims': 5 } ); // $ExpectError
	oneTo.assign( x, { 'dims': true } ); // $ExpectError
	oneTo.assign( x, { 'dims': false } ); // $ExpectError
	oneTo.assign( x, { 'dims': null } ); // $ExpectError
	oneTo.assign( x, { 'dims': {} } ); // $ExpectError
	oneTo.assign( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	oneTo.assign(); // $ExpectError
	oneTo.assign( x, {}, {} ); // $ExpectError
}

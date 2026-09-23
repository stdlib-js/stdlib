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
import zeroTo = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	zeroTo( [ 3 ] ); // $ExpectType OutputArray
	zeroTo( [ 2, 2 ] ); // $ExpectType OutputArray
	zeroTo( 3 ); // $ExpectType OutputArray
	zeroTo( [ 3 ], {} ); // $ExpectType OutputArray
	zeroTo( [ 3 ], { 'dtype': 'float32' } ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not a number or an array of numbers...
{
	zeroTo( '5' ); // $ExpectError
	zeroTo( true ); // $ExpectError
	zeroTo( false ); // $ExpectError
	zeroTo( null ); // $ExpectError
	zeroTo( void 0 ); // $ExpectError
	zeroTo( {} ); // $ExpectError
	zeroTo( ( x: number ): number => x ); // $ExpectError

	zeroTo( '5', {} ); // $ExpectError
	zeroTo( true, {} ); // $ExpectError
	zeroTo( false, {} ); // $ExpectError
	zeroTo( null, {} ); // $ExpectError
	zeroTo( void 0, {} ); // $ExpectError
	zeroTo( {}, {} ); // $ExpectError
	zeroTo( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	zeroTo( [ 3 ], '5' ); // $ExpectError
	zeroTo( [ 3 ], 5 ); // $ExpectError
	zeroTo( [ 3 ], true ); // $ExpectError
	zeroTo( [ 3 ], false ); // $ExpectError
	zeroTo( [ 3 ], null ); // $ExpectError
	zeroTo( [ 3 ], [] ); // $ExpectError
	zeroTo( [ 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	zeroTo( [ 3 ], { 'dtype': '5' } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': 5 } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': true } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': false } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': null } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': [] } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': {} } ); // $ExpectError
	zeroTo( [ 3 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	zeroTo( [ 3 ], { 'dims': '5' } ); // $ExpectError
	zeroTo( [ 3 ], { 'dims': 5 } ); // $ExpectError
	zeroTo( [ 3 ], { 'dims': true } ); // $ExpectError
	zeroTo( [ 3 ], { 'dims': false } ); // $ExpectError
	zeroTo( [ 3 ], { 'dims': null } ); // $ExpectError
	zeroTo( [ 3 ], { 'dims': {} } ); // $ExpectError
	zeroTo( [ 3 ], { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeroTo(); // $ExpectError
	zeroTo( [ 3 ], {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	zeroTo.assign( x ); // $ExpectType float64ndarray
	zeroTo.assign( x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	zeroTo.assign( '5' ); // $ExpectError
	zeroTo.assign( 5 ); // $ExpectError
	zeroTo.assign( true ); // $ExpectError
	zeroTo.assign( false ); // $ExpectError
	zeroTo.assign( null ); // $ExpectError
	zeroTo.assign( void 0 ); // $ExpectError
	zeroTo.assign( {} ); // $ExpectError
	zeroTo.assign( ( x: number ): number => x ); // $ExpectError

	zeroTo.assign( '5', {} ); // $ExpectError
	zeroTo.assign( 5, {} ); // $ExpectError
	zeroTo.assign( true, {} ); // $ExpectError
	zeroTo.assign( false, {} ); // $ExpectError
	zeroTo.assign( null, {} ); // $ExpectError
	zeroTo.assign( void 0, {} ); // $ExpectError
	zeroTo.assign( {}, {} ); // $ExpectError
	zeroTo.assign( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	zeroTo.assign( x, '5' ); // $ExpectError
	zeroTo.assign( x, 5 ); // $ExpectError
	zeroTo.assign( x, true ); // $ExpectError
	zeroTo.assign( x, false ); // $ExpectError
	zeroTo.assign( x, null ); // $ExpectError
	zeroTo.assign( x, [] ); // $ExpectError
	zeroTo.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	zeroTo.assign( x, { 'dims': '5' } ); // $ExpectError
	zeroTo.assign( x, { 'dims': 5 } ); // $ExpectError
	zeroTo.assign( x, { 'dims': true } ); // $ExpectError
	zeroTo.assign( x, { 'dims': false } ); // $ExpectError
	zeroTo.assign( x, { 'dims': null } ); // $ExpectError
	zeroTo.assign( x, { 'dims': {} } ); // $ExpectError
	zeroTo.assign( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	zeroTo.assign(); // $ExpectError
	zeroTo.assign( x, {}, {} ); // $ExpectError
}

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

/* eslint-disable @typescript-eslint/no-unused-expressions */

/// <reference types="@stdlib/types"/>

import zeros = require( '@stdlib/array/zeros' );
import abs = require( './index' );


// TESTS //

// The function returns an array...
{
	abs( [ 1.0, 2.0, 3.0, 4.0 ] ); // $ExpectType number[]
	abs( [ 1.0, 2.0, 3.0, 4.0 ], {} ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	abs( '5' ); // $ExpectError
	abs( 5 ); // $ExpectError
	abs( true ); // $ExpectError
	abs( false ); // $ExpectError
	abs( null ); // $ExpectError
	abs( void 0 ); // $ExpectError
	abs( {} ); // $ExpectError
	abs( ( x: number ): number => x ); // $ExpectError

	abs( '5', {} ); // $ExpectError
	abs( 5, {} ); // $ExpectError
	abs( true, {} ); // $ExpectError
	abs( false, {} ); // $ExpectError
	abs( null, {} ); // $ExpectError
	abs( void 0, {} ); // $ExpectError
	abs( {}, {} ); // $ExpectError
	abs( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	abs( [ 1.0, 2.0, 3.0, 4.0 ], '5' ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], true ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], false ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], null ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], [] ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': '5' } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': 5 } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': true } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': false } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': null } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': [] } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': {} } ); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	abs(); // $ExpectError
	abs( [ 1.0, 2.0, 3.0, 4.0 ], {}, {} ); // $ExpectError
}

// The function has an `assign` method which returns an array...
{
	const x = zeros( 10, 'float64' );

	abs.assign( x, x ); // $ExpectType Float64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const x = zeros( 10, 'generic' );

	abs.assign( '5', x ); // $ExpectError
	abs.assign( 5, x ); // $ExpectError
	abs.assign( true, x ); // $ExpectError
	abs.assign( false, x ); // $ExpectError
	abs.assign( null, x ); // $ExpectError
	abs.assign( void 0, x ); // $ExpectError
	abs.assign( {}, x ); // $ExpectError
	abs.assign( ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const x = zeros( 10, 'generic' );

	abs.assign( x, '5' ); // $ExpectError
	abs.assign( x, 5 ); // $ExpectError
	abs.assign( x, true ); // $ExpectError
	abs.assign( x, false ); // $ExpectError
	abs.assign( x, null ); // $ExpectError
	abs.assign( x, void 0 ); // $ExpectError
	abs.assign( x, {} ); // $ExpectError
	abs.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( 10, 'generic' );

	abs.assign(); // $ExpectError
	abs.assign( x ); // $ExpectError
	abs.assign( x, x, {} ); // $ExpectError
}

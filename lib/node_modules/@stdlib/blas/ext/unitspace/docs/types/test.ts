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
import unitspace = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	unitspace( [ 4 ], 1.0 ); // $ExpectType RealOutputArray
	unitspace( [ 4 ], 1.0, {} ); // $ExpectType RealOutputArray
	unitspace( [ 4 ], 1.0, { 'dtype': 'float32' } ); // $ExpectType OutputArray
}

// The compiler throws an error if the function is provided a first argument which is not a number or an array of numbers...
{
	unitspace( '5', 1.0 ); // $ExpectError
	unitspace( true, 1.0 ); // $ExpectError
	unitspace( false, 1.0 ); // $ExpectError
	unitspace( null, 1.0 ); // $ExpectError
	unitspace( void 0, 1.0 ); // $ExpectError
	unitspace( {}, 1.0 ); // $ExpectError
	unitspace( ( x: number ): number => x, 1.0 ); // $ExpectError

	unitspace( '5', 1.0, {} ); // $ExpectError
	unitspace( true, 1.0, {} ); // $ExpectError
	unitspace( false, 1.0, {} ); // $ExpectError
	unitspace( null, 1.0, {} ); // $ExpectError
	unitspace( void 0, 1.0, {} ); // $ExpectError
	unitspace( {}, 1.0, {} ); // $ExpectError
	unitspace( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray or supported scalar value...
{
	unitspace( [ 4 ], 'foo' ); // $ExpectError
	unitspace( [ 4 ], true ); // $ExpectError
	unitspace( [ 4 ], false ); // $ExpectError
	unitspace( [ 4 ], null ); // $ExpectError
	unitspace( [ 4 ], void 0 ); // $ExpectError
	unitspace( [ 4 ], [] ); // $ExpectError
	unitspace( [ 4 ], {} ); // $ExpectError
	unitspace( [ 4 ], ( x: number ): number => x ); // $ExpectError

	unitspace( [ 4 ], 'foo', {} ); // $ExpectError
	unitspace( [ 4 ], true, {} ); // $ExpectError
	unitspace( [ 4 ], false, {} ); // $ExpectError
	unitspace( [ 4 ], null, {} ); // $ExpectError
	unitspace( [ 4 ], void 0, {} ); // $ExpectError
	unitspace( [ 4 ], [], {} ); // $ExpectError
	unitspace( [ 4 ], {}, {} ); // $ExpectError
	unitspace( [ 4 ], ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	unitspace( [ 4 ], 1.0, '5' ); // $ExpectError
	unitspace( [ 4 ], 1.0, 5 ); // $ExpectError
	unitspace( [ 4 ], 1.0, true ); // $ExpectError
	unitspace( [ 4 ], 1.0, false ); // $ExpectError
	unitspace( [ 4 ], 1.0, null ); // $ExpectError
	unitspace( [ 4 ], 1.0, [] ); // $ExpectError
	unitspace( [ 4 ], 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	unitspace( [ 4 ], 1.0, { 'dtype': '5' } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': 5 } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': true } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': false } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': null } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': [] } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': {} } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	unitspace( [ 4 ], 1.0, { 'dims': '5' } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dims': 5 } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dims': true } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dims': false } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dims': null } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dims': {} } ); // $ExpectError
	unitspace( [ 4 ], 1.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	unitspace(); // $ExpectError
	unitspace( [ 4 ] ); // $ExpectError
	unitspace( [ 4 ], 1.0, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	unitspace.assign( x, 1.0 ); // $ExpectType float64ndarray
	unitspace.assign( x, 1.0, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	unitspace.assign( '5', 1.0 ); // $ExpectError
	unitspace.assign( 5, 1.0 ); // $ExpectError
	unitspace.assign( true, 1.0 ); // $ExpectError
	unitspace.assign( false, 1.0 ); // $ExpectError
	unitspace.assign( null, 1.0 ); // $ExpectError
	unitspace.assign( void 0, 1.0 ); // $ExpectError
	unitspace.assign( {}, 1.0 ); // $ExpectError
	unitspace.assign( ( x: number ): number => x, 1.0 ); // $ExpectError

	unitspace.assign( '5', 1.0, {} ); // $ExpectError
	unitspace.assign( 5, 1.0, {} ); // $ExpectError
	unitspace.assign( true, 1.0, {} ); // $ExpectError
	unitspace.assign( false, 1.0, {} ); // $ExpectError
	unitspace.assign( null, 1.0, {} ); // $ExpectError
	unitspace.assign( void 0, 1.0, {} ); // $ExpectError
	unitspace.assign( {}, 1.0, {} ); // $ExpectError
	unitspace.assign( ( x: number ): number => x, 1.0, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray or supported scalar value...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	unitspace.assign( x, '5' ); // $ExpectError
	unitspace.assign( x, true ); // $ExpectError
	unitspace.assign( x, false ); // $ExpectError
	unitspace.assign( x, null ); // $ExpectError
	unitspace.assign( x, void 0 ); // $ExpectError
	unitspace.assign( x, [] ); // $ExpectError
	unitspace.assign( x, {} ); // $ExpectError
	unitspace.assign( x, ( x: number ): number => x ); // $ExpectError

	unitspace.assign( x, '5', {} ); // $ExpectError
	unitspace.assign( x, true, {} ); // $ExpectError
	unitspace.assign( x, false, {} ); // $ExpectError
	unitspace.assign( x, null, {} ); // $ExpectError
	unitspace.assign( x, void 0, {} ); // $ExpectError
	unitspace.assign( x, [], {} ); // $ExpectError
	unitspace.assign( x, {}, {} ); // $ExpectError
	unitspace.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	unitspace.assign( x, 1.0, '5' ); // $ExpectError
	unitspace.assign( x, 1.0, 5 ); // $ExpectError
	unitspace.assign( x, 1.0, true ); // $ExpectError
	unitspace.assign( x, 1.0, false ); // $ExpectError
	unitspace.assign( x, 1.0, null ); // $ExpectError
	unitspace.assign( x, 1.0, [] ); // $ExpectError
	unitspace.assign( x, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	unitspace.assign( x, 1.0, { 'dims': '5' } ); // $ExpectError
	unitspace.assign( x, 1.0, { 'dims': 5 } ); // $ExpectError
	unitspace.assign( x, 1.0, { 'dims': true } ); // $ExpectError
	unitspace.assign( x, 1.0, { 'dims': false } ); // $ExpectError
	unitspace.assign( x, 1.0, { 'dims': null } ); // $ExpectError
	unitspace.assign( x, 1.0, { 'dims': {} } ); // $ExpectError
	unitspace.assign( x, 1.0, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	unitspace.assign(); // $ExpectError
	unitspace.assign( x ); // $ExpectError
	unitspace.assign( x, 1.0, {}, {} ); // $ExpectError
}

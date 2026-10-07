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
import fillBetween = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0 ); // $ExpectType float64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, {} ); // $ExpectType float64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0 ); // $ExpectType float64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0, {} ); // $ExpectType float64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0, 2 ); // $ExpectType float64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0, 2, {} ); // $ExpectType float64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0 ); // $ExpectType float32ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0, {} ); // $ExpectType float32ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10 ); // $ExpectType int32ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10, {} ); // $ExpectType int32ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), 10.0 ); // $ExpectType complex128ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), 10.0, {} ); // $ExpectType complex128ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), 10.0 ); // $ExpectType complex64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), 10.0, {} ); // $ExpectType complex64ndarray
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'generic' } ), 10.0 ); // $ExpectType genericndarray<number>
	fillBetween( zeros( [ 2, 2 ], { 'dtype': 'generic' } ), 10.0, {} ); // $ExpectType genericndarray<number>
}

// The function returns an ndarray when provided ndarray value and index arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillBetween( x, x ); // $ExpectType float64ndarray
	fillBetween( x, x, {} ); // $ExpectType float64ndarray
	fillBetween( x, x, x ); // $ExpectType float64ndarray
	fillBetween( x, x, x, {} ); // $ExpectType float64ndarray
	fillBetween( x, x, x, x ); // $ExpectType float64ndarray
	fillBetween( x, x, x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	fillBetween( '5', 10.0 ); // $ExpectError
	fillBetween( 5, 10.0 ); // $ExpectError
	fillBetween( true, 10.0 ); // $ExpectError
	fillBetween( false, 10.0 ); // $ExpectError
	fillBetween( null, 10.0 ); // $ExpectError
	fillBetween( void 0, 10.0 ); // $ExpectError
	fillBetween( {}, 10.0 ); // $ExpectError
	fillBetween( ( x: number ): number => x, 10.0 ); // $ExpectError

	fillBetween( '5', 10.0, {} ); // $ExpectError
	fillBetween( 5, 10.0, {} ); // $ExpectError
	fillBetween( true, 10.0, {} ); // $ExpectError
	fillBetween( false, 10.0, {} ); // $ExpectError
	fillBetween( null, 10.0, {} ); // $ExpectError
	fillBetween( void 0, 10.0, {} ); // $ExpectError
	fillBetween( {}, 10.0, {} ); // $ExpectError
	fillBetween( ( x: number ): number => x, 10.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a start index argument which is not an ndarray or integer...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillBetween( x, 10.0, '5' ); // $ExpectError
	fillBetween( x, 10.0, true ); // $ExpectError
	fillBetween( x, 10.0, false ); // $ExpectError
	fillBetween( x, 10.0, null ); // $ExpectError
	fillBetween( x, 10.0, [] ); // $ExpectError
	fillBetween( x, 10.0, ( x: number ): number => x ); // $ExpectError

	fillBetween( x, 10.0, '5', {} ); // $ExpectError
	fillBetween( x, 10.0, true, {} ); // $ExpectError
	fillBetween( x, 10.0, false, {} ); // $ExpectError
	fillBetween( x, 10.0, null, {} ); // $ExpectError
	fillBetween( x, 10.0, [], {} ); // $ExpectError
	fillBetween( x, 10.0, ( x: number ): number => x, {} ); // $ExpectError

	fillBetween( x, 10.0, '5', 2, {} ); // $ExpectError
	fillBetween( x, 10.0, true, 2, {} ); // $ExpectError
	fillBetween( x, 10.0, false, 2, {} ); // $ExpectError
	fillBetween( x, 10.0, null, 2, {} ); // $ExpectError
	fillBetween( x, 10.0, [], 2, {} ); // $ExpectError
	fillBetween( x, 10.0, ( x: number ): number => x, 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an end index argument which is not an ndarray or integer...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillBetween( x, 10.0, 0, '5', {} ); // $ExpectError
	fillBetween( x, 10.0, 0, true, {} ); // $ExpectError
	fillBetween( x, 10.0, 0, false, {} ); // $ExpectError
	fillBetween( x, 10.0, 0, null, {} ); // $ExpectError
	fillBetween( x, 10.0, 0, [], {} ); // $ExpectError
	fillBetween( x, 10.0, 0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillBetween( x, 10.0, 0, '5' ); // $ExpectError
	fillBetween( x, 10.0, 0, true ); // $ExpectError
	fillBetween( x, 10.0, 0, false ); // $ExpectError
	fillBetween( x, 10.0, 0, null ); // $ExpectError
	fillBetween( x, 10.0, 0, [] ); // $ExpectError
	fillBetween( x, 10.0, 0, ( x: number ): number => x ); // $ExpectError

	fillBetween( x, 10.0, 0, 2, '5' ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, true ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, false ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, null ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, [] ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillBetween( x, 10.0, { 'dim': '5' } ); // $ExpectError
	fillBetween( x, 10.0, { 'dim': true } ); // $ExpectError
	fillBetween( x, 10.0, { 'dim': false } ); // $ExpectError
	fillBetween( x, 10.0, { 'dim': null } ); // $ExpectError
	fillBetween( x, 10.0, { 'dim': [] } ); // $ExpectError
	fillBetween( x, 10.0, { 'dim': {} } ); // $ExpectError
	fillBetween( x, 10.0, { 'dim': ( x: number ): number => x } ); // $ExpectError

	fillBetween( x, 10.0, 0, 2, { 'dim': '5' } ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, { 'dim': true } ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, { 'dim': false } ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, { 'dim': null } ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, { 'dim': [] } ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, { 'dim': {} } ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillBetween(); // $ExpectError
	fillBetween( x ); // $ExpectError
	fillBetween( x, 10.0, 0, 2, {}, {} ); // $ExpectError
}

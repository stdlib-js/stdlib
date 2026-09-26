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
import fillRange = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0 ); // $ExpectType float64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, {} ); // $ExpectType float64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0 ); // $ExpectType float64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0, {} ); // $ExpectType float64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0, 2 ); // $ExpectType float64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float64' } ), 10.0, 0, 2, {} ); // $ExpectType float64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0 ); // $ExpectType float32ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'float32' } ), 10.0, {} ); // $ExpectType float32ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10 ); // $ExpectType int32ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'int32' } ), 10, {} ); // $ExpectType int32ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), 10.0 ); // $ExpectType complex128ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'complex128' } ), 10.0, {} ); // $ExpectType complex128ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), 10.0 ); // $ExpectType complex64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'complex64' } ), 10.0, {} ); // $ExpectType complex64ndarray
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'generic' } ), 10.0 ); // $ExpectType genericndarray<number>
	fillRange( zeros( [ 2, 2 ], { 'dtype': 'generic' } ), 10.0, {} ); // $ExpectType genericndarray<number>
}

// The function returns an ndarray when provided ndarray value and index arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillRange( x, x ); // $ExpectType float64ndarray
	fillRange( x, x, {} ); // $ExpectType float64ndarray
	fillRange( x, x, x ); // $ExpectType float64ndarray
	fillRange( x, x, x, {} ); // $ExpectType float64ndarray
	fillRange( x, x, x, x ); // $ExpectType float64ndarray
	fillRange( x, x, x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	fillRange( '5', 10.0 ); // $ExpectError
	fillRange( 5, 10.0 ); // $ExpectError
	fillRange( true, 10.0 ); // $ExpectError
	fillRange( false, 10.0 ); // $ExpectError
	fillRange( null, 10.0 ); // $ExpectError
	fillRange( void 0, 10.0 ); // $ExpectError
	fillRange( {}, 10.0 ); // $ExpectError
	fillRange( ( x: number ): number => x, 10.0 ); // $ExpectError

	fillRange( '5', 10.0, {} ); // $ExpectError
	fillRange( 5, 10.0, {} ); // $ExpectError
	fillRange( true, 10.0, {} ); // $ExpectError
	fillRange( false, 10.0, {} ); // $ExpectError
	fillRange( null, 10.0, {} ); // $ExpectError
	fillRange( void 0, 10.0, {} ); // $ExpectError
	fillRange( {}, 10.0, {} ); // $ExpectError
	fillRange( ( x: number ): number => x, 10.0, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a start index argument which is not an ndarray or integer...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillRange( x, 10.0, '5' ); // $ExpectError
	fillRange( x, 10.0, true ); // $ExpectError
	fillRange( x, 10.0, false ); // $ExpectError
	fillRange( x, 10.0, null ); // $ExpectError
	fillRange( x, 10.0, [] ); // $ExpectError
	fillRange( x, 10.0, ( x: number ): number => x ); // $ExpectError

	fillRange( x, 10.0, '5', {} ); // $ExpectError
	fillRange( x, 10.0, true, {} ); // $ExpectError
	fillRange( x, 10.0, false, {} ); // $ExpectError
	fillRange( x, 10.0, null, {} ); // $ExpectError
	fillRange( x, 10.0, [], {} ); // $ExpectError
	fillRange( x, 10.0, ( x: number ): number => x, {} ); // $ExpectError

	fillRange( x, 10.0, '5', 2, {} ); // $ExpectError
	fillRange( x, 10.0, true, 2, {} ); // $ExpectError
	fillRange( x, 10.0, false, 2, {} ); // $ExpectError
	fillRange( x, 10.0, null, 2, {} ); // $ExpectError
	fillRange( x, 10.0, [], 2, {} ); // $ExpectError
	fillRange( x, 10.0, ( x: number ): number => x, 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an end index argument which is not an ndarray or integer...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillRange( x, 10.0, 0, '5', {} ); // $ExpectError
	fillRange( x, 10.0, 0, true, {} ); // $ExpectError
	fillRange( x, 10.0, 0, false, {} ); // $ExpectError
	fillRange( x, 10.0, 0, null, {} ); // $ExpectError
	fillRange( x, 10.0, 0, [], {} ); // $ExpectError
	fillRange( x, 10.0, 0, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillRange( x, 10.0, 0, '5' ); // $ExpectError
	fillRange( x, 10.0, 0, true ); // $ExpectError
	fillRange( x, 10.0, 0, false ); // $ExpectError
	fillRange( x, 10.0, 0, null ); // $ExpectError
	fillRange( x, 10.0, 0, [] ); // $ExpectError
	fillRange( x, 10.0, 0, ( x: number ): number => x ); // $ExpectError

	fillRange( x, 10.0, 0, 2, '5' ); // $ExpectError
	fillRange( x, 10.0, 0, 2, true ); // $ExpectError
	fillRange( x, 10.0, 0, 2, false ); // $ExpectError
	fillRange( x, 10.0, 0, 2, null ); // $ExpectError
	fillRange( x, 10.0, 0, 2, [] ); // $ExpectError
	fillRange( x, 10.0, 0, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dim` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillRange( x, 10.0, { 'dim': '5' } ); // $ExpectError
	fillRange( x, 10.0, { 'dim': true } ); // $ExpectError
	fillRange( x, 10.0, { 'dim': false } ); // $ExpectError
	fillRange( x, 10.0, { 'dim': null } ); // $ExpectError
	fillRange( x, 10.0, { 'dim': [] } ); // $ExpectError
	fillRange( x, 10.0, { 'dim': {} } ); // $ExpectError
	fillRange( x, 10.0, { 'dim': ( x: number ): number => x } ); // $ExpectError

	fillRange( x, 10.0, 0, 2, { 'dim': '5' } ); // $ExpectError
	fillRange( x, 10.0, 0, 2, { 'dim': true } ); // $ExpectError
	fillRange( x, 10.0, 0, 2, { 'dim': false } ); // $ExpectError
	fillRange( x, 10.0, 0, 2, { 'dim': null } ); // $ExpectError
	fillRange( x, 10.0, 0, 2, { 'dim': [] } ); // $ExpectError
	fillRange( x, 10.0, 0, 2, { 'dim': {} } ); // $ExpectError
	fillRange( x, 10.0, 0, 2, { 'dim': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	fillRange(); // $ExpectError
	fillRange( x ); // $ExpectError
	fillRange( x, 10.0, 0, 2, {}, {} ); // $ExpectError
}

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

import empty = require( '@stdlib/ndarray/empty' );
import circshift = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	circshift( empty( [ 2, 2 ], { 'dtype': 'float64' } ), 2 ); // $ExpectType float64ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'float64' } ), 2, {} ); // $ExpectType float64ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'float32' } ), 2 ); // $ExpectType float32ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'float32' } ), 2, {} ); // $ExpectType float32ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'int32' } ), 2 ); // $ExpectType int32ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'int32' } ), 2, {} ); // $ExpectType int32ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'complex128' } ), 2 ); // $ExpectType complex128ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'complex128' } ), 2, {} ); // $ExpectType complex128ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'complex64' } ), 2 ); // $ExpectType complex64ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'complex64' } ), 2, {} ); // $ExpectType complex64ndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'bool' } ), 2 ); // $ExpectType boolndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'bool' } ), 2, {} ); // $ExpectType boolndarray
	circshift( empty( [ 2, 2 ], { 'dtype': 'generic' } ), 2 ); // $ExpectType genericndarray<number>
	circshift( empty( [ 2, 2 ], { 'dtype': 'generic' } ), 2, {} ); // $ExpectType genericndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	circshift( '5', 2 ); // $ExpectError
	circshift( 5, 2 ); // $ExpectError
	circshift( true, 2 ); // $ExpectError
	circshift( false, 2 ); // $ExpectError
	circshift( null, 2 ); // $ExpectError
	circshift( void 0, 2 ); // $ExpectError
	circshift( {}, 2 ); // $ExpectError
	circshift( ( x: number ): number => x, 2 ); // $ExpectError

	circshift( '5', 2, {} ); // $ExpectError
	circshift( 5, 2, {} ); // $ExpectError
	circshift( true, 2, {} ); // $ExpectError
	circshift( false, 2, {} ); // $ExpectError
	circshift( null, 2, {} ); // $ExpectError
	circshift( void 0, 2, {} ); // $ExpectError
	circshift( {}, 2, {} ); // $ExpectError
	circshift( ( x: number ): number => x, 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a `k` argument which is not an ndarray or scalar value...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	circshift( x, true ); // $ExpectError
	circshift( x, false ); // $ExpectError
	circshift( x, '5' ); // $ExpectError
	circshift( x, null ); // $ExpectError
	circshift( x, void 0 ); // $ExpectError
	circshift( x, [] ); // $ExpectError
	circshift( x, {} ); // $ExpectError
	circshift( x, ( x: number ): number => x ); // $ExpectError

	circshift( x, true, {} ); // $ExpectError
	circshift( x, false, {} ); // $ExpectError
	circshift( x, '5', {} ); // $ExpectError
	circshift( x, null, {} ); // $ExpectError
	circshift( x, void 0, {} ); // $ExpectError
	circshift( x, [], {} ); // $ExpectError
	circshift( x, {}, {} ); // $ExpectError
	circshift( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	circshift( x, 2, '5' ); // $ExpectError
	circshift( x, 2, true ); // $ExpectError
	circshift( x, 2, false ); // $ExpectError
	circshift( x, 2, null ); // $ExpectError
	circshift( x, 2, [] ); // $ExpectError
	circshift( x, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	circshift( x, 2, { 'dims': '5' } ); // $ExpectError
	circshift( x, 2, { 'dims': 5 } ); // $ExpectError
	circshift( x, 2, { 'dims': true } ); // $ExpectError
	circshift( x, 2, { 'dims': false } ); // $ExpectError
	circshift( x, 2, { 'dims': null } ); // $ExpectError
	circshift( x, 2, { 'dims': {} } ); // $ExpectError
	circshift( x, 2, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	circshift(); // $ExpectError
	circshift( x ); // $ExpectError
	circshift( x, 2, {}, {} ); // $ExpectError
}

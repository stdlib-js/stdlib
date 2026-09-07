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

import zeros = require( '@stdlib/ndarray/zeros' );
import empty = require( '@stdlib/ndarray/empty' );
import asum = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'float64' } ) ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'float64' } ), {} ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'float32' } ) ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'float32' } ), {} ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'int32' } ) ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'int32' } ), {} ); // $ExpectType OutputArray<number>
	asum<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex128' } ) ); // $ExpectType OutputArray<number>
	asum<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex128' } ), {} ); // $ExpectType OutputArray<number>
	asum<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex64' } ) ); // $ExpectType OutputArray<number>
	asum<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex64' } ), {} ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'generic' } ) ); // $ExpectType OutputArray<number>
	asum<number, number>( empty( [ 2, 2 ], { 'dtype': 'generic' } ), {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	asum( '5' ); // $ExpectError
	asum( 5 ); // $ExpectError
	asum( true ); // $ExpectError
	asum( false ); // $ExpectError
	asum( null ); // $ExpectError
	asum( void 0 ); // $ExpectError
	asum( {} ); // $ExpectError
	asum( ( x: number ): number => x ); // $ExpectError

	asum( '5', {} ); // $ExpectError
	asum( 5, {} ); // $ExpectError
	asum( true, {} ); // $ExpectError
	asum( false, {} ); // $ExpectError
	asum( null, {} ); // $ExpectError
	asum( void 0, {} ); // $ExpectError
	asum( {}, {} ); // $ExpectError
	asum( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum( x, '5' ); // $ExpectError
	asum( x, true ); // $ExpectError
	asum( x, false ); // $ExpectError
	asum( x, null ); // $ExpectError
	asum( x, [] ); // $ExpectError
	asum( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum( x, { 'dtype': '5' } ); // $ExpectError
	asum( x, { 'dtype': 5 } ); // $ExpectError
	asum( x, { 'dtype': true } ); // $ExpectError
	asum( x, { 'dtype': false } ); // $ExpectError
	asum( x, { 'dtype': null } ); // $ExpectError
	asum( x, { 'dtype': [] } ); // $ExpectError
	asum( x, { 'dtype': {} } ); // $ExpectError
	asum( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum( x, { 'keepdims': '5' } ); // $ExpectError
	asum( x, { 'keepdims': 5 } ); // $ExpectError
	asum( x, { 'keepdims': null } ); // $ExpectError
	asum( x, { 'keepdims': [] } ); // $ExpectError
	asum( x, { 'keepdims': {} } ); // $ExpectError
	asum( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum( x, { 'dims': '5' } ); // $ExpectError
	asum( x, { 'dims': 5 } ); // $ExpectError
	asum( x, { 'dims': true } ); // $ExpectError
	asum( x, { 'dims': false } ); // $ExpectError
	asum( x, { 'dims': null } ); // $ExpectError
	asum( x, { 'dims': {} } ); // $ExpectError
	asum( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum(); // $ExpectError
	asum( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum.assign( x, x ); // $ExpectType float64ndarray
	asum.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum.assign( '5', x ); // $ExpectError
	asum.assign( 5, x ); // $ExpectError
	asum.assign( true, x ); // $ExpectError
	asum.assign( false, x ); // $ExpectError
	asum.assign( null, x ); // $ExpectError
	asum.assign( void 0, x ); // $ExpectError
	asum.assign( {}, x ); // $ExpectError
	asum.assign( ( x: number ): number => x, x ); // $ExpectError

	asum.assign( '5', x, {} ); // $ExpectError
	asum.assign( 5, x, {} ); // $ExpectError
	asum.assign( true, x, {} ); // $ExpectError
	asum.assign( false, x, {} ); // $ExpectError
	asum.assign( null, x, {} ); // $ExpectError
	asum.assign( void 0, x, {} ); // $ExpectError
	asum.assign( {}, x, {} ); // $ExpectError
	asum.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum.assign( x, '5' ); // $ExpectError
	asum.assign( x, 5 ); // $ExpectError
	asum.assign( x, true ); // $ExpectError
	asum.assign( x, false ); // $ExpectError
	asum.assign( x, null ); // $ExpectError
	asum.assign( x, void 0 ); // $ExpectError
	asum.assign( x, ( x: number ): number => x ); // $ExpectError

	asum.assign( x, '5', {} ); // $ExpectError
	asum.assign( x, 5, {} ); // $ExpectError
	asum.assign( x, true, {} ); // $ExpectError
	asum.assign( x, false, {} ); // $ExpectError
	asum.assign( x, null, {} ); // $ExpectError
	asum.assign( x, void 0, {} ); // $ExpectError
	asum.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum.assign( x, x, '5' ); // $ExpectError
	asum.assign( x, x, true ); // $ExpectError
	asum.assign( x, x, false ); // $ExpectError
	asum.assign( x, x, null ); // $ExpectError
	asum.assign( x, x, [] ); // $ExpectError
	asum.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum.assign( x, x, { 'dims': '5' } ); // $ExpectError
	asum.assign( x, x, { 'dims': 5 } ); // $ExpectError
	asum.assign( x, x, { 'dims': true } ); // $ExpectError
	asum.assign( x, x, { 'dims': false } ); // $ExpectError
	asum.assign( x, x, { 'dims': null } ); // $ExpectError
	asum.assign( x, x, { 'dims': {} } ); // $ExpectError
	asum.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	asum.assign(); // $ExpectError
	asum.assign( x ); // $ExpectError
	asum.assign( x, x, {}, {} ); // $ExpectError
}

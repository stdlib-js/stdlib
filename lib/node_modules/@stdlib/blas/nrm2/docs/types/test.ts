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
import nrm2 = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'float64' } ) ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'float64' } ), {} ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'float32' } ) ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'float32' } ), {} ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'int32' } ) ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'int32' } ), {} ); // $ExpectType OutputArray<number>
	nrm2<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex128' } ) ); // $ExpectType OutputArray<number>
	nrm2<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex128' } ), {} ); // $ExpectType OutputArray<number>
	nrm2<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex64' } ) ); // $ExpectType OutputArray<number>
	nrm2<unknown, number>( empty( [ 2, 2 ], { 'dtype': 'complex64' } ), {} ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'generic' } ) ); // $ExpectType OutputArray<number>
	nrm2<number, number>( empty( [ 2, 2 ], { 'dtype': 'generic' } ), {} ); // $ExpectType OutputArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	nrm2( '5' ); // $ExpectError
	nrm2( 5 ); // $ExpectError
	nrm2( true ); // $ExpectError
	nrm2( false ); // $ExpectError
	nrm2( null ); // $ExpectError
	nrm2( void 0 ); // $ExpectError
	nrm2( {} ); // $ExpectError
	nrm2( ( x: number ): number => x ); // $ExpectError

	nrm2( '5', {} ); // $ExpectError
	nrm2( 5, {} ); // $ExpectError
	nrm2( true, {} ); // $ExpectError
	nrm2( false, {} ); // $ExpectError
	nrm2( null, {} ); // $ExpectError
	nrm2( void 0, {} ); // $ExpectError
	nrm2( {}, {} ); // $ExpectError
	nrm2( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2( x, '5' ); // $ExpectError
	nrm2( x, true ); // $ExpectError
	nrm2( x, false ); // $ExpectError
	nrm2( x, null ); // $ExpectError
	nrm2( x, [] ); // $ExpectError
	nrm2( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2( x, { 'dtype': '5' } ); // $ExpectError
	nrm2( x, { 'dtype': 5 } ); // $ExpectError
	nrm2( x, { 'dtype': true } ); // $ExpectError
	nrm2( x, { 'dtype': false } ); // $ExpectError
	nrm2( x, { 'dtype': null } ); // $ExpectError
	nrm2( x, { 'dtype': [] } ); // $ExpectError
	nrm2( x, { 'dtype': {} } ); // $ExpectError
	nrm2( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2( x, { 'keepdims': '5' } ); // $ExpectError
	nrm2( x, { 'keepdims': 5 } ); // $ExpectError
	nrm2( x, { 'keepdims': null } ); // $ExpectError
	nrm2( x, { 'keepdims': [] } ); // $ExpectError
	nrm2( x, { 'keepdims': {} } ); // $ExpectError
	nrm2( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2( x, { 'dims': '5' } ); // $ExpectError
	nrm2( x, { 'dims': 5 } ); // $ExpectError
	nrm2( x, { 'dims': true } ); // $ExpectError
	nrm2( x, { 'dims': false } ); // $ExpectError
	nrm2( x, { 'dims': null } ); // $ExpectError
	nrm2( x, { 'dims': {} } ); // $ExpectError
	nrm2( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2(); // $ExpectError
	nrm2( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2.assign( x, x ); // $ExpectType float64ndarray
	nrm2.assign( x, x, {} ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2.assign( '5', x ); // $ExpectError
	nrm2.assign( 5, x ); // $ExpectError
	nrm2.assign( true, x ); // $ExpectError
	nrm2.assign( false, x ); // $ExpectError
	nrm2.assign( null, x ); // $ExpectError
	nrm2.assign( void 0, x ); // $ExpectError
	nrm2.assign( {}, x ); // $ExpectError
	nrm2.assign( ( x: number ): number => x, x ); // $ExpectError

	nrm2.assign( '5', x, {} ); // $ExpectError
	nrm2.assign( 5, x, {} ); // $ExpectError
	nrm2.assign( true, x, {} ); // $ExpectError
	nrm2.assign( false, x, {} ); // $ExpectError
	nrm2.assign( null, x, {} ); // $ExpectError
	nrm2.assign( void 0, x, {} ); // $ExpectError
	nrm2.assign( {}, x, {} ); // $ExpectError
	nrm2.assign( ( x: number ): number => x, x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2.assign( x, '5' ); // $ExpectError
	nrm2.assign( x, 5 ); // $ExpectError
	nrm2.assign( x, true ); // $ExpectError
	nrm2.assign( x, false ); // $ExpectError
	nrm2.assign( x, null ); // $ExpectError
	nrm2.assign( x, void 0 ); // $ExpectError
	nrm2.assign( x, ( x: number ): number => x ); // $ExpectError

	nrm2.assign( x, '5', {} ); // $ExpectError
	nrm2.assign( x, 5, {} ); // $ExpectError
	nrm2.assign( x, true, {} ); // $ExpectError
	nrm2.assign( x, false, {} ); // $ExpectError
	nrm2.assign( x, null, {} ); // $ExpectError
	nrm2.assign( x, void 0, {} ); // $ExpectError
	nrm2.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2.assign( x, x, '5' ); // $ExpectError
	nrm2.assign( x, x, true ); // $ExpectError
	nrm2.assign( x, x, false ); // $ExpectError
	nrm2.assign( x, x, null ); // $ExpectError
	nrm2.assign( x, x, [] ); // $ExpectError
	nrm2.assign( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2.assign( x, x, { 'dims': '5' } ); // $ExpectError
	nrm2.assign( x, x, { 'dims': 5 } ); // $ExpectError
	nrm2.assign( x, x, { 'dims': true } ); // $ExpectError
	nrm2.assign( x, x, { 'dims': false } ); // $ExpectError
	nrm2.assign( x, x, { 'dims': null } ); // $ExpectError
	nrm2.assign( x, x, { 'dims': {} } ); // $ExpectError
	nrm2.assign( x, x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	nrm2.assign(); // $ExpectError
	nrm2.assign( x ); // $ExpectError
	nrm2.assign( x, x, {}, {} ); // $ExpectError
}

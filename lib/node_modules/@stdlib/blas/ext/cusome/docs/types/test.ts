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
import cusome = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const k = empty( [], {
		'dtype': 'int32'
	});

	cusome( x, 2 ); // $ExpectType OutputArray<boolean>
	cusome( x, 2, {} ); // $ExpectType OutputArray<boolean>

	cusome( x, k ); // $ExpectType OutputArray<boolean>
	cusome( x, k, {} ); // $ExpectType OutputArray<boolean>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	cusome( '5', 2 ); // $ExpectError
	cusome( 5, 2 ); // $ExpectError
	cusome( true, 2 ); // $ExpectError
	cusome( false, 2 ); // $ExpectError
	cusome( null, 2 ); // $ExpectError
	cusome( void 0, 2 ); // $ExpectError
	cusome( {}, 2 ); // $ExpectError
	cusome( ( x: number ): number => x, 2 ); // $ExpectError

	cusome( '5', 2, {} ); // $ExpectError
	cusome( 5, 2, {} ); // $ExpectError
	cusome( true, 2, {} ); // $ExpectError
	cusome( false, 2, {} ); // $ExpectError
	cusome( null, 2, {} ); // $ExpectError
	cusome( void 0, 2, {} ); // $ExpectError
	cusome( {}, 2, {} ); // $ExpectError
	cusome( ( x: number ): number => x, 2, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray or number...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusome( x, '5' ); // $ExpectError
	cusome( x, true ); // $ExpectError
	cusome( x, false ); // $ExpectError
	cusome( x, null ); // $ExpectError
	cusome( x, void 0 ); // $ExpectError
	cusome( x, [] ); // $ExpectError
	cusome( x, ( x: number ): number => x ); // $ExpectError

	cusome( x, '5', {} ); // $ExpectError
	cusome( x, true, {} ); // $ExpectError
	cusome( x, false, {} ); // $ExpectError
	cusome( x, null, {} ); // $ExpectError
	cusome( x, void 0, {} ); // $ExpectError
	cusome( x, [], {} ); // $ExpectError
	cusome( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusome( x, 2, '5' ); // $ExpectError
	cusome( x, 2, true ); // $ExpectError
	cusome( x, 2, false ); // $ExpectError
	cusome( x, 2, null ); // $ExpectError
	cusome( x, 2, [] ); // $ExpectError
	cusome( x, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusome( x, 2, { 'dtype': '5' } ); // $ExpectError
	cusome( x, 2, { 'dtype': 5 } ); // $ExpectError
	cusome( x, 2, { 'dtype': true } ); // $ExpectError
	cusome( x, 2, { 'dtype': false } ); // $ExpectError
	cusome( x, 2, { 'dtype': null } ); // $ExpectError
	cusome( x, 2, { 'dtype': [] } ); // $ExpectError
	cusome( x, 2, { 'dtype': {} } ); // $ExpectError
	cusome( x, 2, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusome( x, 2, { 'dims': '5' } ); // $ExpectError
	cusome( x, 2, { 'dims': 5 } ); // $ExpectError
	cusome( x, 2, { 'dims': true } ); // $ExpectError
	cusome( x, 2, { 'dims': false } ); // $ExpectError
	cusome( x, 2, { 'dims': null } ); // $ExpectError
	cusome( x, 2, { 'dims': {} } ); // $ExpectError
	cusome( x, 2, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusome(); // $ExpectError
	cusome( x ); // $ExpectError
	cusome( x, 2, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const k = empty( [], {
		'dtype': 'int32'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cusome.assign( x, 2, out ); // $ExpectType boolndarray
	cusome.assign( x, 2, out, {} ); // $ExpectType boolndarray

	cusome.assign( x, k, out ); // $ExpectType boolndarray
	cusome.assign( x, k, out, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cusome.assign( '5', 2, out ); // $ExpectError
	cusome.assign( 5, 2, out ); // $ExpectError
	cusome.assign( true, 2, out ); // $ExpectError
	cusome.assign( false, 2, out ); // $ExpectError
	cusome.assign( null, 2, out ); // $ExpectError
	cusome.assign( void 0, 2, out ); // $ExpectError
	cusome.assign( {}, 2, out ); // $ExpectError
	cusome.assign( ( x: number ): number => x, 2, out ); // $ExpectError

	cusome.assign( '5', 2, out, {} ); // $ExpectError
	cusome.assign( 5, 2, out, {} ); // $ExpectError
	cusome.assign( true, 2, out, {} ); // $ExpectError
	cusome.assign( false, 2, out, {} ); // $ExpectError
	cusome.assign( null, 2, out, {} ); // $ExpectError
	cusome.assign( void 0, 2, out, {} ); // $ExpectError
	cusome.assign( {}, 2, out, {} ); // $ExpectError
	cusome.assign( ( x: number ): number => x, 2, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray or number...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cusome.assign( x, '5', out ); // $ExpectError
	cusome.assign( x, true, out ); // $ExpectError
	cusome.assign( x, false, out ); // $ExpectError
	cusome.assign( x, null, out ); // $ExpectError
	cusome.assign( x, void 0, out ); // $ExpectError
	cusome.assign( x, [], out ); // $ExpectError
	cusome.assign( x, ( x: number ): number => x, out ); // $ExpectError

	cusome.assign( x, '5', out, {} ); // $ExpectError
	cusome.assign( x, true, out, {} ); // $ExpectError
	cusome.assign( x, false, out, {} ); // $ExpectError
	cusome.assign( x, null, out, {} ); // $ExpectError
	cusome.assign( x, void 0, out, {} ); // $ExpectError
	cusome.assign( x, [], out, {} ); // $ExpectError
	cusome.assign( x, ( x: number ): number => x, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cusome.assign( x, 2, '5' ); // $ExpectError
	cusome.assign( x, 2, 5 ); // $ExpectError
	cusome.assign( x, 2, true ); // $ExpectError
	cusome.assign( x, 2, false ); // $ExpectError
	cusome.assign( x, 2, null ); // $ExpectError
	cusome.assign( x, 2, void 0 ); // $ExpectError
	cusome.assign( x, 2, ( x: number ): number => x ); // $ExpectError

	cusome.assign( x, 2, '5', {} ); // $ExpectError
	cusome.assign( x, 2, 5, {} ); // $ExpectError
	cusome.assign( x, 2, true, {} ); // $ExpectError
	cusome.assign( x, 2, false, {} ); // $ExpectError
	cusome.assign( x, 2, null, {} ); // $ExpectError
	cusome.assign( x, 2, void 0, {} ); // $ExpectError
	cusome.assign( x, 2, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cusome.assign( x, 2, out, '5' ); // $ExpectError
	cusome.assign( x, 2, out, true ); // $ExpectError
	cusome.assign( x, 2, out, false ); // $ExpectError
	cusome.assign( x, 2, out, null ); // $ExpectError
	cusome.assign( x, 2, out, [] ); // $ExpectError
	cusome.assign( x, 2, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cusome.assign( x, 2, out, { 'dims': '5' } ); // $ExpectError
	cusome.assign( x, 2, out, { 'dims': 5 } ); // $ExpectError
	cusome.assign( x, 2, out, { 'dims': true } ); // $ExpectError
	cusome.assign( x, 2, out, { 'dims': false } ); // $ExpectError
	cusome.assign( x, 2, out, { 'dims': null } ); // $ExpectError
	cusome.assign( x, 2, out, { 'dims': {} } ); // $ExpectError
	cusome.assign( x, 2, out, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cusome.assign(); // $ExpectError
	cusome.assign( x ); // $ExpectError
	cusome.assign( x, 2 ); // $ExpectError
	cusome.assign( x, 2, out, {}, {} ); // $ExpectError
}

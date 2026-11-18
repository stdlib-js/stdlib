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
import cuevery = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cuevery( x ); // $ExpectType OutputArray<boolean>
	cuevery( x, {} ); // $ExpectType OutputArray<boolean>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	cuevery( '5' ); // $ExpectError
	cuevery( 5 ); // $ExpectError
	cuevery( true ); // $ExpectError
	cuevery( false ); // $ExpectError
	cuevery( null ); // $ExpectError
	cuevery( void 0 ); // $ExpectError
	cuevery( {} ); // $ExpectError
	cuevery( ( x: number ): number => x ); // $ExpectError

	cuevery( '5', {} ); // $ExpectError
	cuevery( 5, {} ); // $ExpectError
	cuevery( true, {} ); // $ExpectError
	cuevery( false, {} ); // $ExpectError
	cuevery( null, {} ); // $ExpectError
	cuevery( void 0, {} ); // $ExpectError
	cuevery( {}, {} ); // $ExpectError
	cuevery( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cuevery( x, '5' ); // $ExpectError
	cuevery( x, true ); // $ExpectError
	cuevery( x, false ); // $ExpectError
	cuevery( x, null ); // $ExpectError
	cuevery( x, [] ); // $ExpectError
	cuevery( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cuevery( x, { 'dtype': '5' } ); // $ExpectError
	cuevery( x, { 'dtype': 5 } ); // $ExpectError
	cuevery( x, { 'dtype': true } ); // $ExpectError
	cuevery( x, { 'dtype': false } ); // $ExpectError
	cuevery( x, { 'dtype': null } ); // $ExpectError
	cuevery( x, { 'dtype': [] } ); // $ExpectError
	cuevery( x, { 'dtype': {} } ); // $ExpectError
	cuevery( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cuevery( x, { 'dims': '5' } ); // $ExpectError
	cuevery( x, { 'dims': 5 } ); // $ExpectError
	cuevery( x, { 'dims': true } ); // $ExpectError
	cuevery( x, { 'dims': false } ); // $ExpectError
	cuevery( x, { 'dims': null } ); // $ExpectError
	cuevery( x, { 'dims': {} } ); // $ExpectError
	cuevery( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cuevery(); // $ExpectError
	cuevery( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cuevery.assign( x, out ); // $ExpectType boolndarray
	cuevery.assign( x, out, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cuevery.assign( '5', out ); // $ExpectError
	cuevery.assign( 5, out ); // $ExpectError
	cuevery.assign( true, out ); // $ExpectError
	cuevery.assign( false, out ); // $ExpectError
	cuevery.assign( null, out ); // $ExpectError
	cuevery.assign( void 0, out ); // $ExpectError
	cuevery.assign( {}, out ); // $ExpectError
	cuevery.assign( ( x: number ): number => x, out ); // $ExpectError

	cuevery.assign( '5', out, {} ); // $ExpectError
	cuevery.assign( 5, out, {} ); // $ExpectError
	cuevery.assign( true, out, {} ); // $ExpectError
	cuevery.assign( false, out, {} ); // $ExpectError
	cuevery.assign( null, out, {} ); // $ExpectError
	cuevery.assign( void 0, out, {} ); // $ExpectError
	cuevery.assign( {}, out, {} ); // $ExpectError
	cuevery.assign( ( x: number ): number => x, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cuevery.assign( x, '5' ); // $ExpectError
	cuevery.assign( x, 5 ); // $ExpectError
	cuevery.assign( x, true ); // $ExpectError
	cuevery.assign( x, false ); // $ExpectError
	cuevery.assign( x, null ); // $ExpectError
	cuevery.assign( x, void 0 ); // $ExpectError
	cuevery.assign( x, ( x: number ): number => x ); // $ExpectError

	cuevery.assign( x, '5', {} ); // $ExpectError
	cuevery.assign( x, 5, {} ); // $ExpectError
	cuevery.assign( x, true, {} ); // $ExpectError
	cuevery.assign( x, false, {} ); // $ExpectError
	cuevery.assign( x, null, {} ); // $ExpectError
	cuevery.assign( x, void 0, {} ); // $ExpectError
	cuevery.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cuevery.assign( x, out, '5' ); // $ExpectError
	cuevery.assign( x, out, true ); // $ExpectError
	cuevery.assign( x, out, false ); // $ExpectError
	cuevery.assign( x, out, null ); // $ExpectError
	cuevery.assign( x, out, [] ); // $ExpectError
	cuevery.assign( x, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cuevery.assign( x, out, { 'dims': '5' } ); // $ExpectError
	cuevery.assign( x, out, { 'dims': 5 } ); // $ExpectError
	cuevery.assign( x, out, { 'dims': true } ); // $ExpectError
	cuevery.assign( x, out, { 'dims': false } ); // $ExpectError
	cuevery.assign( x, out, { 'dims': null } ); // $ExpectError
	cuevery.assign( x, out, { 'dims': {} } ); // $ExpectError
	cuevery.assign( x, out, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cuevery.assign(); // $ExpectError
	cuevery.assign( x ); // $ExpectError
	cuevery.assign( x, out, {}, {} ); // $ExpectError
}

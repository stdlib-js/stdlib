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
import cunone = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cunone( x ); // $ExpectType OutputArray<boolean>
	cunone( x, {} ); // $ExpectType OutputArray<boolean>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	cunone( '5' ); // $ExpectError
	cunone( 5 ); // $ExpectError
	cunone( true ); // $ExpectError
	cunone( false ); // $ExpectError
	cunone( null ); // $ExpectError
	cunone( void 0 ); // $ExpectError
	cunone( {} ); // $ExpectError
	cunone( ( x: number ): number => x ); // $ExpectError

	cunone( '5', {} ); // $ExpectError
	cunone( 5, {} ); // $ExpectError
	cunone( true, {} ); // $ExpectError
	cunone( false, {} ); // $ExpectError
	cunone( null, {} ); // $ExpectError
	cunone( void 0, {} ); // $ExpectError
	cunone( {}, {} ); // $ExpectError
	cunone( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cunone( x, '5' ); // $ExpectError
	cunone( x, true ); // $ExpectError
	cunone( x, false ); // $ExpectError
	cunone( x, null ); // $ExpectError
	cunone( x, [] ); // $ExpectError
	cunone( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cunone( x, { 'dtype': '5' } ); // $ExpectError
	cunone( x, { 'dtype': 5 } ); // $ExpectError
	cunone( x, { 'dtype': true } ); // $ExpectError
	cunone( x, { 'dtype': false } ); // $ExpectError
	cunone( x, { 'dtype': null } ); // $ExpectError
	cunone( x, { 'dtype': [] } ); // $ExpectError
	cunone( x, { 'dtype': {} } ); // $ExpectError
	cunone( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cunone( x, { 'dims': '5' } ); // $ExpectError
	cunone( x, { 'dims': 5 } ); // $ExpectError
	cunone( x, { 'dims': true } ); // $ExpectError
	cunone( x, { 'dims': false } ); // $ExpectError
	cunone( x, { 'dims': null } ); // $ExpectError
	cunone( x, { 'dims': {} } ); // $ExpectError
	cunone( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cunone(); // $ExpectError
	cunone( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cunone.assign( x, out ); // $ExpectType boolndarray
	cunone.assign( x, out, {} ); // $ExpectType boolndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cunone.assign( '5', out ); // $ExpectError
	cunone.assign( 5, out ); // $ExpectError
	cunone.assign( true, out ); // $ExpectError
	cunone.assign( false, out ); // $ExpectError
	cunone.assign( null, out ); // $ExpectError
	cunone.assign( void 0, out ); // $ExpectError
	cunone.assign( {}, out ); // $ExpectError
	cunone.assign( ( x: number ): number => x, out ); // $ExpectError

	cunone.assign( '5', out, {} ); // $ExpectError
	cunone.assign( 5, out, {} ); // $ExpectError
	cunone.assign( true, out, {} ); // $ExpectError
	cunone.assign( false, out, {} ); // $ExpectError
	cunone.assign( null, out, {} ); // $ExpectError
	cunone.assign( void 0, out, {} ); // $ExpectError
	cunone.assign( {}, out, {} ); // $ExpectError
	cunone.assign( ( x: number ): number => x, out, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});

	cunone.assign( x, '5' ); // $ExpectError
	cunone.assign( x, 5 ); // $ExpectError
	cunone.assign( x, true ); // $ExpectError
	cunone.assign( x, false ); // $ExpectError
	cunone.assign( x, null ); // $ExpectError
	cunone.assign( x, void 0 ); // $ExpectError
	cunone.assign( x, ( x: number ): number => x ); // $ExpectError

	cunone.assign( x, '5', {} ); // $ExpectError
	cunone.assign( x, 5, {} ); // $ExpectError
	cunone.assign( x, true, {} ); // $ExpectError
	cunone.assign( x, false, {} ); // $ExpectError
	cunone.assign( x, null, {} ); // $ExpectError
	cunone.assign( x, void 0, {} ); // $ExpectError
	cunone.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an object...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cunone.assign( x, out, '5' ); // $ExpectError
	cunone.assign( x, out, true ); // $ExpectError
	cunone.assign( x, out, false ); // $ExpectError
	cunone.assign( x, out, null ); // $ExpectError
	cunone.assign( x, out, [] ); // $ExpectError
	cunone.assign( x, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cunone.assign( x, out, { 'dims': '5' } ); // $ExpectError
	cunone.assign( x, out, { 'dims': 5 } ); // $ExpectError
	cunone.assign( x, out, { 'dims': true } ); // $ExpectError
	cunone.assign( x, out, { 'dims': false } ); // $ExpectError
	cunone.assign( x, out, { 'dims': null } ); // $ExpectError
	cunone.assign( x, out, { 'dims': {} } ); // $ExpectError
	cunone.assign( x, out, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = empty( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const out = empty( [ 2, 2 ], {
		'dtype': 'bool'
	});

	cunone.assign(); // $ExpectError
	cunone.assign( x ); // $ExpectError
	cunone.assign( x, out, {}, {} ); // $ExpectError
}

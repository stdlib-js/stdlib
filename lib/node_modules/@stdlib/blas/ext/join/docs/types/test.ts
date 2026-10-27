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

/* eslint-disable space-in-parens */

import zeros = require( '@stdlib/ndarray/zeros' );
import scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
import join = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	join( x ); // $ExpectType OutputArray<string>
	join( x, {} ); // $ExpectType OutputArray<string>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	join( '5' ); // $ExpectError
	join( 5 ); // $ExpectError
	join( true ); // $ExpectError
	join( false ); // $ExpectError
	join( null ); // $ExpectError
	join( void 0 ); // $ExpectError
	join( {} ); // $ExpectError
	join( ( x: number ): number => x ); // $ExpectError

	join( '5', {} ); // $ExpectError
	join( 5, {} ); // $ExpectError
	join( true, {} ); // $ExpectError
	join( false, {} ); // $ExpectError
	join( null, {} ); // $ExpectError
	join( void 0, {} ); // $ExpectError
	join( {}, {} ); // $ExpectError
	join( ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	join( x, '5' ); // $ExpectError
	join( x, true ); // $ExpectError
	join( x, false ); // $ExpectError
	join( x, [] ); // $ExpectError
	join( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	join( x, { 'dims': '5' } ); // $ExpectError
	join( x, { 'dims': 5 } ); // $ExpectError
	join( x, { 'dims': true } ); // $ExpectError
	join( x, { 'dims': false } ); // $ExpectError
	join( x, { 'dims': null } ); // $ExpectError
	join( x, { 'dims': {} } ); // $ExpectError
	join( x, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `keepdims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	join( x, { 'keepdims': '5' } ); // $ExpectError
	join( x, { 'keepdims': 5 } ); // $ExpectError
	join( x, { 'keepdims': null } ); // $ExpectError
	join( x, { 'keepdims': {} } ); // $ExpectError
	join( x, { 'keepdims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	join(); // $ExpectError
	join( x, {}, {} ); // $ExpectError
}

// Attached to the function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = scalar2ndarray( '', {
		'dtype': 'generic'
	});

	join.assign( x, y ); // $ExpectType genericndarray<string>
	join.assign( x, y, {} ); // $ExpectType genericndarray<string>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const y = scalar2ndarray( '' );

	join.assign( '5', y ); // $ExpectError
	join.assign( 5, y ); // $ExpectError
	join.assign( true, y ); // $ExpectError
	join.assign( false, y ); // $ExpectError
	join.assign( null, y ); // $ExpectError
	join.assign( void 0, y ); // $ExpectError
	join.assign( {}, y ); // $ExpectError
	join.assign( ( x: number ): number => x, y ); // $ExpectError

	join.assign( '5', y, {} ); // $ExpectError
	join.assign( 5, y, {} ); // $ExpectError
	join.assign( true, y, {} ); // $ExpectError
	join.assign( false, y, {} ); // $ExpectError
	join.assign( null, y, {} ); // $ExpectError
	join.assign( void 0, y, {} ); // $ExpectError
	join.assign( {}, y, {} ); // $ExpectError
	join.assign( ( x: number ): number => x, y, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a output argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	join.assign( x, '5' ); // $ExpectError
	join.assign( x, 5 ); // $ExpectError
	join.assign( x, true ); // $ExpectError
	join.assign( x, false ); // $ExpectError
	join.assign( x, null ); // $ExpectError
	join.assign( x, void 0 ); // $ExpectError
	join.assign( x, ( x: number ): number => x ); // $ExpectError

	join.assign( x, '5', {} ); // $ExpectError
	join.assign( x, 5, {} ); // $ExpectError
	join.assign( x, true, {} ); // $ExpectError
	join.assign( x, false, {} ); // $ExpectError
	join.assign( x, null, {} ); // $ExpectError
	join.assign( x, void 0, {} ); // $ExpectError
	join.assign( x, ( x: number ): number => x, {} ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an options argument which is not an object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = scalar2ndarray( '' );

	join.assign( x, y, '5' ); // $ExpectError
	join.assign( x, y, true ); // $ExpectError
	join.assign( x, y, false ); // $ExpectError
	join.assign( x, y, null ); // $ExpectError
	join.assign( x, y, [] ); // $ExpectError
	join.assign( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an invalid `dims` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = scalar2ndarray( '' );

	join.assign( x, y, { 'dims': '5' } ); // $ExpectError
	join.assign( x, y, { 'dims': 5 } ); // $ExpectError
	join.assign( x, y, { 'dims': true } ); // $ExpectError
	join.assign( x, y, { 'dims': false } ); // $ExpectError
	join.assign( x, y, { 'dims': null } ); // $ExpectError
	join.assign( x, y, { 'dims': {} } ); // $ExpectError
	join.assign( x, y, { 'dims': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});
	const y = scalar2ndarray( '' );

	join.assign(); // $ExpectError
	join.assign( x ); // $ExpectError
	join.assign( x, y, {}, {} ); // $ExpectError
}

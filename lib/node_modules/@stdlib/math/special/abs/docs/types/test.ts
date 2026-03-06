/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
import abs = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs( x ); // $ExpectType typedndarray<number>
	abs( x, {} ); // $ExpectType typedndarray<number>
	abs( x, { 'dtype': 'float32' } ); // $ExpectType typedndarray<number>
	abs( x, { 'order': 'row-major' } ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	abs( '5' ); // $ExpectError
	abs( 5 ); // $ExpectError
	abs( true ); // $ExpectError
	abs( false ); // $ExpectError
	abs( null ); // $ExpectError
	abs( void 0 ); // $ExpectError
	abs( [] ); // $ExpectError
	abs( {} ); // $ExpectError
	abs( [ '5' ] ); // $ExpectError
	abs( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid options object...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs( x, '5' ); // $ExpectError
	abs( x, true ); // $ExpectError
	abs( x, false ); // $ExpectError
	abs( x, [ '5' ] ); // $ExpectError
	abs( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `dtype` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs( x, { 'dtype': '5' } ); // $ExpectError
	abs( x, { 'dtype': true } ); // $ExpectError
	abs( x, { 'dtype': false } ); // $ExpectError
	abs( x, { 'dtype': null } ); // $ExpectError
	abs( x, { 'dtype': {} } ); // $ExpectError
	abs( x, { 'dtype': [ '5' ] } ); // $ExpectError
	abs( x, { 'dtype': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an invalid `order` option...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs( x, { 'order': '5' } ); // $ExpectError
	abs( x, { 'order': true } ); // $ExpectError
	abs( x, { 'order': false } ); // $ExpectError
	abs( x, { 'order': null } ); // $ExpectError
	abs( x, { 'order': {} } ); // $ExpectError
	abs( x, { 'order': [ '5' ] } ); // $ExpectError
	abs( x, { 'order': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs(); // $ExpectError
	abs( x, {}, {} ); // $ExpectError
}

// Attached to the main function is an `assign` method which returns an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs.assign( x, x ); // $ExpectType float64ndarray
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs.assign( '5', x ); // $ExpectError
	abs.assign( true, x ); // $ExpectError
	abs.assign( false, x ); // $ExpectError
	abs.assign( null, x ); // $ExpectError
	abs.assign( void 0, x ); // $ExpectError
	abs.assign( {}, x ); // $ExpectError
	abs.assign( ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs.assign( x, '5' ); // $ExpectError
	abs.assign( x, true ); // $ExpectError
	abs.assign( x, false ); // $ExpectError
	abs.assign( x, null ); // $ExpectError
	abs.assign( x, void 0 ); // $ExpectError
	abs.assign( x, {} ); // $ExpectError
	abs.assign( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = zeros( [ 2, 2 ], {
		'dtype': 'float64'
	});

	abs.assign(); // $ExpectError
	abs.assign( x ); // $ExpectError
	abs.assign( x, x, x ); // $ExpectError
}

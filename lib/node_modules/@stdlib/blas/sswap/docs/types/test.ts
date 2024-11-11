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

import zeros = require( '@stdlib/ndarray/zeros' );
import sswap = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	sswap( zeros( [ 10 ], { 'dtype': 'float32' } ), zeros( [ 10 ], { 'dtype': 'float32' } ) ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 10 ], { 'dtype': 'float32' } );

	sswap( 10, y ); // $ExpectError
	sswap( '10', y ); // $ExpectError
	sswap( true, y ); // $ExpectError
	sswap( false, y ); // $ExpectError
	sswap( null, y ); // $ExpectError
	sswap( undefined, y ); // $ExpectError
	sswap( {}, y ); // $ExpectError
	sswap( [], y ); // $ExpectError
	sswap( ( x: number ): number => x, y ); // $ExpectError

	sswap( 10, y, -1 ); // $ExpectError
	sswap( '10', y, -1 ); // $ExpectError
	sswap( true, y, -1 ); // $ExpectError
	sswap( false, y, -1 ); // $ExpectError
	sswap( null, y, -1 ); // $ExpectError
	sswap( undefined, y, -1 ); // $ExpectError
	sswap( {}, y, -1 ); // $ExpectError
	sswap( [], y, -1 ); // $ExpectError
	sswap( ( x: number ): number => x, y, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 10 ], { 'dtype': 'float32' } );

	sswap( x, 10 ); // $ExpectError
	sswap( x, '10' ); // $ExpectError
	sswap( x, true ); // $ExpectError
	sswap( x, false ); // $ExpectError
	sswap( x, null ); // $ExpectError
	sswap( x, undefined ); // $ExpectError
	sswap( x, {} ); // $ExpectError
	sswap( x, [] ); // $ExpectError
	sswap( x, ( x: number ): number => x ); // $ExpectError

	sswap( x, 10, -1 ); // $ExpectError
	sswap( x, '10', -1 ); // $ExpectError
	sswap( x, true, -1 ); // $ExpectError
	sswap( x, false, -1 ); // $ExpectError
	sswap( x, null, -1 ); // $ExpectError
	sswap( x, undefined, -1 ); // $ExpectError
	sswap( x, {}, -1 ); // $ExpectError
	sswap( x, [], -1 ); // $ExpectError
	sswap( x, ( x: number ): number => x, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = zeros( [ 10 ], { 'dtype': 'float32' } );
	const y = zeros( [ 10 ], { 'dtype': 'float32' } );

	sswap( x, y, '10' ); // $ExpectError
	sswap( x, y, true ); // $ExpectError
	sswap( x, y, false ); // $ExpectError
	sswap( x, y, null ); // $ExpectError
	sswap( x, y, {} ); // $ExpectError
	sswap( x, y, [] ); // $ExpectError
	sswap( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], { 'dtype': 'float32' } );
	const y = zeros( [ 10 ], { 'dtype': 'float32' } );

	sswap(); // $ExpectError
	sswap( x ); // $ExpectError
	sswap( x, y, -1, {} ); // $ExpectError
}

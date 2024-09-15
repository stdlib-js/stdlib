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
import dswap = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	dswap( zeros( [ 10 ], { 'dtype': 'float64' } ), zeros( [ 10 ], { 'dtype': 'float64' } ) ); // $ExpectType float64ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 10 ], { 'dtype': 'float64' } );

	dswap( 10, y ); // $ExpectError
	dswap( '10', y ); // $ExpectError
	dswap( true, y ); // $ExpectError
	dswap( false, y ); // $ExpectError
	dswap( null, y ); // $ExpectError
	dswap( undefined, y ); // $ExpectError
	dswap( {}, y ); // $ExpectError
	dswap( [], y ); // $ExpectError
	dswap( ( x: number ): number => x, y ); // $ExpectError

	dswap( 10, y, -1 ); // $ExpectError
	dswap( '10', y, -1 ); // $ExpectError
	dswap( true, y, -1 ); // $ExpectError
	dswap( false, y, -1 ); // $ExpectError
	dswap( null, y, -1 ); // $ExpectError
	dswap( undefined, y, -1 ); // $ExpectError
	dswap( {}, y, -1 ); // $ExpectError
	dswap( [], y, -1 ); // $ExpectError
	dswap( ( x: number ): number => x, y, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 10 ], { 'dtype': 'float64' } );

	dswap( x, 10 ); // $ExpectError
	dswap( x, '10' ); // $ExpectError
	dswap( x, true ); // $ExpectError
	dswap( x, false ); // $ExpectError
	dswap( x, null ); // $ExpectError
	dswap( x, undefined ); // $ExpectError
	dswap( x, {} ); // $ExpectError
	dswap( x, [] ); // $ExpectError
	dswap( x, ( x: number ): number => x ); // $ExpectError

	dswap( x, 10, -1 ); // $ExpectError
	dswap( x, '10', -1 ); // $ExpectError
	dswap( x, true, -1 ); // $ExpectError
	dswap( x, false, -1 ); // $ExpectError
	dswap( x, null, -1 ); // $ExpectError
	dswap( x, undefined, -1 ); // $ExpectError
	dswap( x, {}, -1 ); // $ExpectError
	dswap( x, [], -1 ); // $ExpectError
	dswap( x, ( x: number ): number => x, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = zeros( [ 10 ], { 'dtype': 'float64' } );
	const y = zeros( [ 10 ], { 'dtype': 'float64' } );

	dswap( x, y, '10' ); // $ExpectError
	dswap( x, y, true ); // $ExpectError
	dswap( x, y, false ); // $ExpectError
	dswap( x, y, null ); // $ExpectError
	dswap( x, y, {} ); // $ExpectError
	dswap( x, y, [] ); // $ExpectError
	dswap( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ], { 'dtype': 'float64' } );
	const y = zeros( [ 10 ], { 'dtype': 'float64' } );

	dswap(); // $ExpectError
	dswap( x ); // $ExpectError
	dswap( x, y, -1, {} ); // $ExpectError
}

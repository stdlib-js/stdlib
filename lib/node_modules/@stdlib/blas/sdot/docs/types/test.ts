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
import sdot = require( './index' );


// TESTS //

// The function returns a number...
{
	sdot( zeros( [ 10 ] ), zeros( [ 10 ] ) ); // $ExpectType float32ndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 10 ] );

	sdot( 10, y ); // $ExpectError
	sdot( '10', y ); // $ExpectError
	sdot( true, y ); // $ExpectError
	sdot( false, y ); // $ExpectError
	sdot( null, y ); // $ExpectError
	sdot( undefined, y ); // $ExpectError
	sdot( {}, y ); // $ExpectError
	sdot( [], y ); // $ExpectError
	sdot( ( x: number ): number => x, y ); // $ExpectError

	sdot( 10, y, -1 ); // $ExpectError
	sdot( '10', y, -1 ); // $ExpectError
	sdot( true, y, -1 ); // $ExpectError
	sdot( false, y, -1 ); // $ExpectError
	sdot( null, y, -1 ); // $ExpectError
	sdot( undefined, y, -1 ); // $ExpectError
	sdot( {}, y, -1 ); // $ExpectError
	sdot( [], y, -1 ); // $ExpectError
	sdot( ( x: number ): number => x, y, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 10 ] );

	sdot( x, 10 ); // $ExpectError
	sdot( x, '10' ); // $ExpectError
	sdot( x, true ); // $ExpectError
	sdot( x, false ); // $ExpectError
	sdot( x, null ); // $ExpectError
	sdot( x, undefined ); // $ExpectError
	sdot( x, {} ); // $ExpectError
	sdot( x, [] ); // $ExpectError
	sdot( x, ( x: number ): number => x ); // $ExpectError

	sdot( x, 10, -1 ); // $ExpectError
	sdot( x, '10', -1 ); // $ExpectError
	sdot( x, true, -1 ); // $ExpectError
	sdot( x, false, -1 ); // $ExpectError
	sdot( x, null, -1 ); // $ExpectError
	sdot( x, undefined, -1 ); // $ExpectError
	sdot( x, {}, -1 ); // $ExpectError
	sdot( x, [], -1 ); // $ExpectError
	sdot( x, ( x: number ): number => x, -1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = zeros( [ 10 ] );
	const y = zeros( [ 10 ] );

	sdot( x, y, '10' ); // $ExpectError
	sdot( x, y, true ); // $ExpectError
	sdot( x, y, false ); // $ExpectError
	sdot( x, y, null ); // $ExpectError
	sdot( x, y, {} ); // $ExpectError
	sdot( x, y, [] ); // $ExpectError
	sdot( x, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ] );
	const y = zeros( [ 10 ] );

	sdot(); // $ExpectError
	sdot( x ); // $ExpectError
	sdot( x, y, -1, {} ); // $ExpectError
}

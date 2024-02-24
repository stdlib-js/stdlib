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
import ddot = require( './index' );


// TESTS //

// The function returns a number...
{
	ddot( zeros( [ 10 ] ), zeros( [ 10 ] ) ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const y = zeros( [ 10 ] );

	ddot( 10, y ); // $ExpectError
	ddot( '10', y ); // $ExpectError
	ddot( true, y ); // $ExpectError
	ddot( false, y ); // $ExpectError
	ddot( null, y ); // $ExpectError
	ddot( undefined, y ); // $ExpectError
	ddot( {}, y ); // $ExpectError
	ddot( [], y ); // $ExpectError
	ddot( ( x: number ): number => x, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an ndarray...
{
	const x = zeros( [ 10 ] );

	ddot( x, 10 ); // $ExpectError
	ddot( x, '10' ); // $ExpectError
	ddot( x, true ); // $ExpectError
	ddot( x, false ); // $ExpectError
	ddot( x, null ); // $ExpectError
	ddot( x, undefined ); // $ExpectError
	ddot( x, {} ); // $ExpectError
	ddot( x, [] ); // $ExpectError
	ddot( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = zeros( [ 10 ] );
	const y = zeros( [ 10 ] );

	ddot(); // $ExpectError
	ddot( x ); // $ExpectError
	ddot( x, y, {} ); // $ExpectError
}

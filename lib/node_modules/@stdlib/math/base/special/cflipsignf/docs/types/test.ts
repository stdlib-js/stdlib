/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import Complex64 = require( '@stdlib/complex/float32/ctor' );
import cflipsignf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex64( 1.0, 2.0 );

	cflipsignf( z, 5.0 ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	cflipsignf( '5', 55.0 ); // $ExpectError
	cflipsignf( 5, 55.0 ); // $ExpectError
	cflipsignf( true, 55.0 ); // $ExpectError
	cflipsignf( false, 55.0 ); // $ExpectError
	cflipsignf( null, 55.0 ); // $ExpectError
	cflipsignf( undefined, 55.0 ); // $ExpectError
	cflipsignf( [], 55.0 ); // $ExpectError
	cflipsignf( {}, 55.0 ); // $ExpectError
	cflipsignf( ( x: number ): number => x, 55.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const z = new Complex64( 1.0, 2.0 );

	cflipsignf( z, '5' ); // $ExpectError
	cflipsignf( z, true ); // $ExpectError
	cflipsignf( z, false ); // $ExpectError
	cflipsignf( z, null ); // $ExpectError
	cflipsignf( z, undefined ); // $ExpectError
	cflipsignf( z, [] ); // $ExpectError
	cflipsignf( z, {} ); // $ExpectError
	cflipsignf( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 2.0 );

	cflipsignf(); // $ExpectError
	cflipsignf( z ); // $ExpectError
	cflipsignf( z, 55.0, {} ); // $ExpectError
}

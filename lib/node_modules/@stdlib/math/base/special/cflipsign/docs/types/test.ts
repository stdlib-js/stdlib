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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import cflipsign = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex128( 1.0, 2.0 );

	cflipsign( z, 5.0 ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	cflipsign( '5', 55.0 ); // $ExpectError
	cflipsign( 5, 55.0 ); // $ExpectError
	cflipsign( true, 55.0 ); // $ExpectError
	cflipsign( false, 55.0 ); // $ExpectError
	cflipsign( null, 55.0 ); // $ExpectError
	cflipsign( undefined, 55.0 ); // $ExpectError
	cflipsign( [], 55.0 ); // $ExpectError
	cflipsign( {}, 55.0 ); // $ExpectError
	cflipsign( ( x: number ): number => x, 55.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const z = new Complex128( 1.0, 2.0 );

	cflipsign( z, '5' ); // $ExpectError
	cflipsign( z, true ); // $ExpectError
	cflipsign( z, false ); // $ExpectError
	cflipsign( z, null ); // $ExpectError
	cflipsign( z, undefined ); // $ExpectError
	cflipsign( z, [] ); // $ExpectError
	cflipsign( z, {} ); // $ExpectError
	cflipsign( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex128( 1.0, 2.0 );

	cflipsign(); // $ExpectError
	cflipsign( z ); // $ExpectError
	cflipsign( z, 55.0, {} ); // $ExpectError
}

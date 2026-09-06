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

import Complex64 = require( '@stdlib/complex/float32/ctor' );
import cfloornf = require( './index' );


// TESTS //

// The function returns a single-precision complex floating-point number...
{
	const z = new Complex64( 1.0, 2.0 );

	cfloornf( z, -2 ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	cfloornf( 3, -2 ); // $ExpectError
	cfloornf( true, -2 ); // $ExpectError
	cfloornf( false, -2 ); // $ExpectError
	cfloornf( null, -2 ); // $ExpectError
	cfloornf( undefined, -2 ); // $ExpectError
	cfloornf( '5', -2 ); // $ExpectError
	cfloornf( [], -2 ); // $ExpectError
	cfloornf( {}, -2 ); // $ExpectError
	cfloornf( ( x: number ): number => x, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const z = new Complex64( 1.0, 2.0 );

	cfloornf( z, true ); // $ExpectError
	cfloornf( z, false ); // $ExpectError
	cfloornf( z, null ); // $ExpectError
	cfloornf( z, undefined ); // $ExpectError
	cfloornf( z, '5' ); // $ExpectError
	cfloornf( z, [] ); // $ExpectError
	cfloornf( z, {} ); // $ExpectError
	cfloornf( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 2.0 );

	cfloornf(); // $ExpectError
	cfloornf( z ); // $ExpectError
	cfloornf( z, -2, {} ); // $ExpectError
}

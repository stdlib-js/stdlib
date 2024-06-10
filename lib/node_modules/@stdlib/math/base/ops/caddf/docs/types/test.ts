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
import caddf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	caddf( z, z ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	caddf( true, z ); // $ExpectError
	caddf( false, z ); // $ExpectError
	caddf( null, z ); // $ExpectError
	caddf( undefined, z ); // $ExpectError
	caddf( '5', z ); // $ExpectError
	caddf( [], z ); // $ExpectError
	caddf( {}, z ); // $ExpectError
	caddf( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	caddf( z, true ); // $ExpectError
	caddf( z, false ); // $ExpectError
	caddf( z, null ); // $ExpectError
	caddf( z, undefined ); // $ExpectError
	caddf( z, '5' ); // $ExpectError
	caddf( z, [] ); // $ExpectError
	caddf( z, {} ); // $ExpectError
	caddf( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	caddf(); // $ExpectError
	caddf( z ); // $ExpectError
	caddf( z, z, z ); // $ExpectError
}

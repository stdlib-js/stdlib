/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
import csubf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	csubf( z, z ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	csubf( true, z ); // $ExpectError
	csubf( false, z ); // $ExpectError
	csubf( null, z ); // $ExpectError
	csubf( undefined, z ); // $ExpectError
	csubf( '5', z ); // $ExpectError
	csubf( [], z ); // $ExpectError
	csubf( {}, z ); // $ExpectError
	csubf( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex64( 1.0, 1.0 );

	csubf( z, true ); // $ExpectError
	csubf( z, false ); // $ExpectError
	csubf( z, null ); // $ExpectError
	csubf( z, undefined ); // $ExpectError
	csubf( z, '5' ); // $ExpectError
	csubf( z, [] ); // $ExpectError
	csubf( z, {} ); // $ExpectError
	csubf( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex64( 1.0, 1.0 );

	csubf(); // $ExpectError
	csubf( z ); // $ExpectError
	csubf( z, z, z ); // $ExpectError
}

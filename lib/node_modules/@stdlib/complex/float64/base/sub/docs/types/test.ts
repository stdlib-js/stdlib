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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import csub = require( './index' );


// TESTS //

// The function returns a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	csub( z, z ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	csub( true, z ); // $ExpectError
	csub( false, z ); // $ExpectError
	csub( null, z ); // $ExpectError
	csub( undefined, z ); // $ExpectError
	csub( '5', z ); // $ExpectError
	csub( [], z ); // $ExpectError
	csub( {}, z ); // $ExpectError
	csub( ( x: number ): number => x, z ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const z = new Complex128( 1.0, 1.0 );

	csub( z, true ); // $ExpectError
	csub( z, false ); // $ExpectError
	csub( z, null ); // $ExpectError
	csub( z, undefined ); // $ExpectError
	csub( z, '5' ); // $ExpectError
	csub( z, [] ); // $ExpectError
	csub( z, {} ); // $ExpectError
	csub( z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex128( 1.0, 1.0 );

	csub(); // $ExpectError
	csub( z ); // $ExpectError
	csub( z, z, z ); // $ExpectError
}

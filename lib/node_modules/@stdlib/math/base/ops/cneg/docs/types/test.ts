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

import Complex128 = require( '@stdlib/complex/float64' );
import cneg = require( './index' );


// TESTS //

// The function returns a double-precision complex floating-point number...
{
	const z = new Complex128( 1.0, 1.0 );

	cneg( z ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided an argument which is not a complex number...
{
	cneg( true ); // $ExpectError
	cneg( false ); // $ExpectError
	cneg( null ); // $ExpectError
	cneg( undefined ); // $ExpectError
	cneg( '5' ); // $ExpectError
	cneg( [] ); // $ExpectError
	cneg( {} ); // $ExpectError
	cneg( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex128( 1.0, 1.0 );

	cneg(); // $ExpectError
	cneg( z, z ); // $ExpectError
	cneg( z, z, z ); // $ExpectError
}

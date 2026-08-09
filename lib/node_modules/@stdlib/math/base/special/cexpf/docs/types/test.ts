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
import cexpf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	cexpf( new Complex64( 1.0, 2.0 ) ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a value other than a complex number...
{
	cexpf( 2 ); // $ExpectError
	cexpf( true ); // $ExpectError
	cexpf( false ); // $ExpectError
	cexpf( null ); // $ExpectError
	cexpf( undefined ); // $ExpectError
	cexpf( '5' ); // $ExpectError
	cexpf( [] ); // $ExpectError
	cexpf( {} ); // $ExpectError
	cexpf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cexpf(); // $ExpectError
}

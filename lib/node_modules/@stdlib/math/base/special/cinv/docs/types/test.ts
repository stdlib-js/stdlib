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
import cinv = require( './index' );


// TESTS //

// The function returns a double-precision complex floating-point number...
{
	cinv( new Complex128( 1.0, 2.0 ) ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a value other than a complex number...
{
	cinv( true ); // $ExpectError
	cinv( false ); // $ExpectError
	cinv( null ); // $ExpectError
	cinv( undefined ); // $ExpectError
	cinv( '5' ); // $ExpectError
	cinv( [] ); // $ExpectError
	cinv( {} ); // $ExpectError
	cinv( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cinv(); // $ExpectError
}

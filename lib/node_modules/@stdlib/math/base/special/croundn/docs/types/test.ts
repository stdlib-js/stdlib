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
import croundn = require( './index' );


// TESTS //

// The function returns a double-precision complex floating-point number...
{
	croundn( new Complex128( 1.0, 2.0 ), -2 ); // $ExpectType Complex128
}

// The compiler throws an error if the first argument is not a complex number...
{
	croundn( true, 3 ); // $ExpectError
	croundn( false, 3 ); // $ExpectError
	croundn( null, 3 ); // $ExpectError
	croundn( undefined, 3 ); // $ExpectError
	croundn( '5', 3 ); // $ExpectError
	croundn( [], 3 ); // $ExpectError
	croundn( {}, 3 ); // $ExpectError
	croundn( ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided an integer power which is not a number...
{
	croundn( new Complex128( 1.0, 2.0 ), true ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), false ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), null ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), undefined ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), '5' ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), [] ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), {} ); // $ExpectError
	croundn( new Complex128( 1.0, 2.0 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	croundn(); // $ExpectError
	croundn( 2 ); // $ExpectError
}

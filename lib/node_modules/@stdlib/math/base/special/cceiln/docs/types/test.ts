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
import cceiln = require( './index' );


// TESTS //

// The function returns a double-precision complex floating-point number...
{
	cceiln( new Complex128( 5.0, 3.0 ), -2 ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	cceiln( true, -2 ); // $ExpectError
	cceiln( false, -2 ); // $ExpectError
	cceiln( null, -2 ); // $ExpectError
	cceiln( undefined, -2 ); // $ExpectError
	cceiln( '5', -2 ); // $ExpectError
	cceiln( [], -2 ); // $ExpectError
	cceiln( {}, -2 ); // $ExpectError
	cceiln( ( x: number ): number => x, -2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an integer power which is not a number...
{
	cceiln( new Complex128( 5.0, 3.0 ), true ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), false ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), null ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), undefined ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), '5' ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), [] ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), {} ); // $ExpectError
	cceiln( new Complex128( 5.0, 3.0 ), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cceiln(); // $ExpectError
}

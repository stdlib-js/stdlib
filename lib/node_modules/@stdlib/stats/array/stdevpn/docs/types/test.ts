/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import stdevpn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	stdevpn( x ); // $ExpectType number
	stdevpn( new AccessorArray( x ) ); // $ExpectType number

	stdevpn( x, 1.0 ); // $ExpectType number
	stdevpn( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	stdevpn( 10 ); // $ExpectError
	stdevpn( '10' ); // $ExpectError
	stdevpn( true ); // $ExpectError
	stdevpn( false ); // $ExpectError
	stdevpn( null ); // $ExpectError
	stdevpn( undefined ); // $ExpectError
	stdevpn( {} ); // $ExpectError
	stdevpn( ( x: number ): number => x ); // $ExpectError

	stdevpn( 10, 1.0 ); // $ExpectError
	stdevpn( '10', 1.0 ); // $ExpectError
	stdevpn( true, 1.0 ); // $ExpectError
	stdevpn( false, 1.0 ); // $ExpectError
	stdevpn( null, 1.0 ); // $ExpectError
	stdevpn( undefined, 1.0 ); // $ExpectError
	stdevpn( {}, 1.0 ); // $ExpectError
	stdevpn( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	stdevpn( x, '10' ); // $ExpectError
	stdevpn( x, true ); // $ExpectError
	stdevpn( x, false ); // $ExpectError
	stdevpn( x, null ); // $ExpectError
	stdevpn( x, [] ); // $ExpectError
	stdevpn( x, {} ); // $ExpectError
	stdevpn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	stdevpn(); // $ExpectError
	stdevpn( x, 1.0, {} ); // $ExpectError
}

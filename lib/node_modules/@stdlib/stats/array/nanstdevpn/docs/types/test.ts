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
import nanstdevpn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanstdevpn( x ); // $ExpectType number
	nanstdevpn( new AccessorArray( x ) ); // $ExpectType number

	nanstdevpn( x, 1.0 ); // $ExpectType number
	nanstdevpn( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanstdevpn( 10 ); // $ExpectError
	nanstdevpn( '10' ); // $ExpectError
	nanstdevpn( true ); // $ExpectError
	nanstdevpn( false ); // $ExpectError
	nanstdevpn( null ); // $ExpectError
	nanstdevpn( undefined ); // $ExpectError
	nanstdevpn( {} ); // $ExpectError
	nanstdevpn( ( x: number ): number => x ); // $ExpectError

	nanstdevpn( 10, 1.0 ); // $ExpectError
	nanstdevpn( '10', 1.0 ); // $ExpectError
	nanstdevpn( true, 1.0 ); // $ExpectError
	nanstdevpn( false, 1.0 ); // $ExpectError
	nanstdevpn( null, 1.0 ); // $ExpectError
	nanstdevpn( undefined, 1.0 ); // $ExpectError
	nanstdevpn( {}, 1.0 ); // $ExpectError
	nanstdevpn( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanstdevpn( x, '10' ); // $ExpectError
	nanstdevpn( x, true ); // $ExpectError
	nanstdevpn( x, false ); // $ExpectError
	nanstdevpn( x, null ); // $ExpectError
	nanstdevpn( x, [] ); // $ExpectError
	nanstdevpn( x, {} ); // $ExpectError
	nanstdevpn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanstdevpn(); // $ExpectError
	nanstdevpn( x, 1.0, {} ); // $ExpectError
}

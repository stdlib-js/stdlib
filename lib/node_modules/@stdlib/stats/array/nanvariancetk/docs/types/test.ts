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
import nanvariancetk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvariancetk( x ); // $ExpectType number
	nanvariancetk( new AccessorArray( x ) ); // $ExpectType number

	nanvariancetk( x, 1.0 ); // $ExpectType number
	nanvariancetk( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanvariancetk( 10 ); // $ExpectError
	nanvariancetk( '10' ); // $ExpectError
	nanvariancetk( true ); // $ExpectError
	nanvariancetk( false ); // $ExpectError
	nanvariancetk( null ); // $ExpectError
	nanvariancetk( undefined ); // $ExpectError
	nanvariancetk( {} ); // $ExpectError
	nanvariancetk( ( x: number ): number => x ); // $ExpectError

	nanvariancetk( 10, 1.0 ); // $ExpectError
	nanvariancetk( '10', 1.0 ); // $ExpectError
	nanvariancetk( true, 1.0 ); // $ExpectError
	nanvariancetk( false, 1.0 ); // $ExpectError
	nanvariancetk( null, 1.0 ); // $ExpectError
	nanvariancetk( undefined, 1.0 ); // $ExpectError
	nanvariancetk( {}, 1.0 ); // $ExpectError
	nanvariancetk( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariancetk( x, '10' ); // $ExpectError
	nanvariancetk( x, true ); // $ExpectError
	nanvariancetk( x, false ); // $ExpectError
	nanvariancetk( x, null ); // $ExpectError
	nanvariancetk( x, [] ); // $ExpectError
	nanvariancetk( x, {} ); // $ExpectError
	nanvariancetk( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariancetk(); // $ExpectError
	nanvariancetk( x, 1.0, {} ); // $ExpectError
}

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
import nanvariancech = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvariancech( x ); // $ExpectType number
	nanvariancech( new AccessorArray( x ) ); // $ExpectType number

	nanvariancech( x, 1.0 ); // $ExpectType number
	nanvariancech( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanvariancech( 10 ); // $ExpectError
	nanvariancech( '10' ); // $ExpectError
	nanvariancech( true ); // $ExpectError
	nanvariancech( false ); // $ExpectError
	nanvariancech( null ); // $ExpectError
	nanvariancech( undefined ); // $ExpectError
	nanvariancech( {} ); // $ExpectError
	nanvariancech( ( x: number ): number => x ); // $ExpectError

	nanvariancech( 10, 1.0 ); // $ExpectError
	nanvariancech( '10', 1.0 ); // $ExpectError
	nanvariancech( true, 1.0 ); // $ExpectError
	nanvariancech( false, 1.0 ); // $ExpectError
	nanvariancech( null, 1.0 ); // $ExpectError
	nanvariancech( undefined, 1.0 ); // $ExpectError
	nanvariancech( {}, 1.0 ); // $ExpectError
	nanvariancech( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariancech( x, '10' ); // $ExpectError
	nanvariancech( x, true ); // $ExpectError
	nanvariancech( x, false ); // $ExpectError
	nanvariancech( x, null ); // $ExpectError
	nanvariancech( x, [] ); // $ExpectError
	nanvariancech( x, {} ); // $ExpectError
	nanvariancech( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariancech(); // $ExpectError
	nanvariancech( x, 1.0, {} ); // $ExpectError
}

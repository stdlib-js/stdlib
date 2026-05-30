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
import nanvariancepn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvariancepn( x ); // $ExpectType number
	nanvariancepn( new AccessorArray( x ) ); // $ExpectType number

	nanvariancepn( x, 1.0 ); // $ExpectType number
	nanvariancepn( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanvariancepn( 10 ); // $ExpectError
	nanvariancepn( '10' ); // $ExpectError
	nanvariancepn( true ); // $ExpectError
	nanvariancepn( false ); // $ExpectError
	nanvariancepn( null ); // $ExpectError
	nanvariancepn( undefined ); // $ExpectError
	nanvariancepn( {} ); // $ExpectError
	nanvariancepn( ( x: number ): number => x ); // $ExpectError

	nanvariancepn( 10, 1.0 ); // $ExpectError
	nanvariancepn( '10', 1.0 ); // $ExpectError
	nanvariancepn( true, 1.0 ); // $ExpectError
	nanvariancepn( false, 1.0 ); // $ExpectError
	nanvariancepn( null, 1.0 ); // $ExpectError
	nanvariancepn( undefined, 1.0 ); // $ExpectError
	nanvariancepn( {}, 1.0 ); // $ExpectError
	nanvariancepn( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariancepn( x, '10' ); // $ExpectError
	nanvariancepn( x, true ); // $ExpectError
	nanvariancepn( x, false ); // $ExpectError
	nanvariancepn( x, null ); // $ExpectError
	nanvariancepn( x, [] ); // $ExpectError
	nanvariancepn( x, {} ); // $ExpectError
	nanvariancepn( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariancepn(); // $ExpectError
	nanvariancepn( x, 1.0, {} ); // $ExpectError
}

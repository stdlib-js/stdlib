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
import nanvariancewd = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvariancewd( x ); // $ExpectType number
	nanvariancewd( new AccessorArray( x ) ); // $ExpectType number

	nanvariancewd( x, 1.0 ); // $ExpectType number
	nanvariancewd( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanvariancewd( 10 ); // $ExpectError
	nanvariancewd( '10' ); // $ExpectError
	nanvariancewd( true ); // $ExpectError
	nanvariancewd( false ); // $ExpectError
	nanvariancewd( null ); // $ExpectError
	nanvariancewd( undefined ); // $ExpectError
	nanvariancewd( {} ); // $ExpectError
	nanvariancewd( ( x: number ): number => x ); // $ExpectError

	nanvariancewd( 10, 1.0 ); // $ExpectError
	nanvariancewd( '10', 1.0 ); // $ExpectError
	nanvariancewd( true, 1.0 ); // $ExpectError
	nanvariancewd( false, 1.0 ); // $ExpectError
	nanvariancewd( null, 1.0 ); // $ExpectError
	nanvariancewd( undefined, 1.0 ); // $ExpectError
	nanvariancewd( {}, 1.0 ); // $ExpectError
	nanvariancewd( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariancewd( x, '10' ); // $ExpectError
	nanvariancewd( x, true ); // $ExpectError
	nanvariancewd( x, false ); // $ExpectError
	nanvariancewd( x, null ); // $ExpectError
	nanvariancewd( x, [] ); // $ExpectError
	nanvariancewd( x, {} ); // $ExpectError
	nanvariancewd( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariancewd(); // $ExpectError
	nanvariancewd( x, 1.0, {} ); // $ExpectError
}

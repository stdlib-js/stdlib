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
import nanstdev = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanstdev( x ); // $ExpectType number
	nanstdev( new AccessorArray( x ) ); // $ExpectType number

	nanstdev( x, 1.0 ); // $ExpectType number
	nanstdev( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanstdev( 10 ); // $ExpectError
	nanstdev( '10' ); // $ExpectError
	nanstdev( true ); // $ExpectError
	nanstdev( false ); // $ExpectError
	nanstdev( null ); // $ExpectError
	nanstdev( undefined ); // $ExpectError
	nanstdev( {} ); // $ExpectError
	nanstdev( ( x: number ): number => x ); // $ExpectError

	nanstdev( 10, 1.0 ); // $ExpectError
	nanstdev( '10', 1.0 ); // $ExpectError
	nanstdev( true, 1.0 ); // $ExpectError
	nanstdev( false, 1.0 ); // $ExpectError
	nanstdev( null, 1.0 ); // $ExpectError
	nanstdev( undefined, 1.0 ); // $ExpectError
	nanstdev( {}, 1.0 ); // $ExpectError
	nanstdev( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanstdev( x, '10' ); // $ExpectError
	nanstdev( x, true ); // $ExpectError
	nanstdev( x, false ); // $ExpectError
	nanstdev( x, null ); // $ExpectError
	nanstdev( x, [] ); // $ExpectError
	nanstdev( x, {} ); // $ExpectError
	nanstdev( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanstdev(); // $ExpectError
	nanstdev( x, 1.0, {} ); // $ExpectError
}

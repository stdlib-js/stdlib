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
import stdevtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	stdevtk( x ); // $ExpectType number
	stdevtk( new AccessorArray( x ) ); // $ExpectType number

	stdevtk( x, 1.0 ); // $ExpectType number
	stdevtk( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	stdevtk( 10 ); // $ExpectError
	stdevtk( '10' ); // $ExpectError
	stdevtk( true ); // $ExpectError
	stdevtk( false ); // $ExpectError
	stdevtk( null ); // $ExpectError
	stdevtk( undefined ); // $ExpectError
	stdevtk( {} ); // $ExpectError
	stdevtk( ( x: number ): number => x ); // $ExpectError

	stdevtk( 10, 1.0 ); // $ExpectError
	stdevtk( '10', 1.0 ); // $ExpectError
	stdevtk( true, 1.0 ); // $ExpectError
	stdevtk( false, 1.0 ); // $ExpectError
	stdevtk( null, 1.0 ); // $ExpectError
	stdevtk( undefined, 1.0 ); // $ExpectError
	stdevtk( {}, 1.0 ); // $ExpectError
	stdevtk( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	stdevtk( x, '10' ); // $ExpectError
	stdevtk( x, true ); // $ExpectError
	stdevtk( x, false ); // $ExpectError
	stdevtk( x, null ); // $ExpectError
	stdevtk( x, [] ); // $ExpectError
	stdevtk( x, {} ); // $ExpectError
	stdevtk( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	stdevtk(); // $ExpectError
	stdevtk( x, 1.0, {} ); // $ExpectError
}

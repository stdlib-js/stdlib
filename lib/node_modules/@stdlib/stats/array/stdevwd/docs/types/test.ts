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
import stdevwd = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	stdevwd( x ); // $ExpectType number
	stdevwd( new AccessorArray( x ) ); // $ExpectType number

	stdevwd( x, 1.0 ); // $ExpectType number
	stdevwd( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	stdevwd( 10 ); // $ExpectError
	stdevwd( '10' ); // $ExpectError
	stdevwd( true ); // $ExpectError
	stdevwd( false ); // $ExpectError
	stdevwd( null ); // $ExpectError
	stdevwd( undefined ); // $ExpectError
	stdevwd( {} ); // $ExpectError
	stdevwd( ( x: number ): number => x ); // $ExpectError

	stdevwd( 10, 1.0 ); // $ExpectError
	stdevwd( '10', 1.0 ); // $ExpectError
	stdevwd( true, 1.0 ); // $ExpectError
	stdevwd( false, 1.0 ); // $ExpectError
	stdevwd( null, 1.0 ); // $ExpectError
	stdevwd( undefined, 1.0 ); // $ExpectError
	stdevwd( {}, 1.0 ); // $ExpectError
	stdevwd( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	stdevwd( x, '10' ); // $ExpectError
	stdevwd( x, true ); // $ExpectError
	stdevwd( x, false ); // $ExpectError
	stdevwd( x, null ); // $ExpectError
	stdevwd( x, [] ); // $ExpectError
	stdevwd( x, {} ); // $ExpectError
	stdevwd( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	stdevwd(); // $ExpectError
	stdevwd( x, 1.0, {} ); // $ExpectError
}

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
import nanstdevwd = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanstdevwd( x ); // $ExpectType number
	nanstdevwd( new AccessorArray( x ) ); // $ExpectType number

	nanstdevwd( x, 1.0 ); // $ExpectType number
	nanstdevwd( new AccessorArray( x ), 1.0 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a numeric array...
{
	nanstdevwd( 10 ); // $ExpectError
	nanstdevwd( '10' ); // $ExpectError
	nanstdevwd( true ); // $ExpectError
	nanstdevwd( false ); // $ExpectError
	nanstdevwd( null ); // $ExpectError
	nanstdevwd( undefined ); // $ExpectError
	nanstdevwd( {} ); // $ExpectError
	nanstdevwd( ( x: number ): number => x ); // $ExpectError

	nanstdevwd( 10, 1.0 ); // $ExpectError
	nanstdevwd( '10', 1.0 ); // $ExpectError
	nanstdevwd( true, 1.0 ); // $ExpectError
	nanstdevwd( false, 1.0 ); // $ExpectError
	nanstdevwd( null, 1.0 ); // $ExpectError
	nanstdevwd( undefined, 1.0 ); // $ExpectError
	nanstdevwd( {}, 1.0 ); // $ExpectError
	nanstdevwd( ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanstdevwd( x, '10' ); // $ExpectError
	nanstdevwd( x, true ); // $ExpectError
	nanstdevwd( x, false ); // $ExpectError
	nanstdevwd( x, null ); // $ExpectError
	nanstdevwd( x, [] ); // $ExpectError
	nanstdevwd( x, {} ); // $ExpectError
	nanstdevwd( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanstdevwd(); // $ExpectError
	nanstdevwd( x, 1.0, {} ); // $ExpectError
}

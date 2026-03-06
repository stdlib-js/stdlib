/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import BooleanArray = require( '@stdlib/array/bool' );
import reinterpret = require( './index' );


// TESTS //

// The function returns a Uint8Array...
{
	reinterpret( new BooleanArray( 10 ), 0 ); // $ExpectType Uint8Array
}

// The compiler throws an error if not provided a first argument which is a BooleanArray...
{
	reinterpret( '10', 0 ); // $ExpectError
	reinterpret( 10, 0 ); // $ExpectError
	reinterpret( true, 0 ); // $ExpectError
	reinterpret( false, 0 ); // $ExpectError
	reinterpret( null, 0 ); // $ExpectError
	reinterpret( undefined, 0 ); // $ExpectError
	reinterpret( [], 0 ); // $ExpectError
	reinterpret( {}, 0 ); // $ExpectError
	reinterpret( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a number...
{
	const x = new BooleanArray( 10 );

	reinterpret( x, '10' ); // $ExpectError
	reinterpret( x, true ); // $ExpectError
	reinterpret( x, false ); // $ExpectError
	reinterpret( x, null ); // $ExpectError
	reinterpret( x, undefined ); // $ExpectError
	reinterpret( x, [] ); // $ExpectError
	reinterpret( x, {} ); // $ExpectError
	reinterpret( x, ( x: number ): number => x ); // $ExpectError
}

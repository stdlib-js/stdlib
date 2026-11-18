/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable space-in-parens */

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gnone = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 0, 0, 1, 1 ];

	gnone( x.length, x, 1); // $ExpectType boolean
	gnone( x.length, new AccessorArray( x ), 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];

	gnone( '10', x, 1 ); // $ExpectError
	gnone( true, x, 1 ); // $ExpectError
	gnone( false, x, 1 ); // $ExpectError
	gnone( null, x, 1 ); // $ExpectError
	gnone( undefined, x, 1 ); // $ExpectError
	gnone( [], x, 1 ); // $ExpectError
	gnone( {}, x, 1 ); // $ExpectError
	gnone( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	gnone( 4, 10, 1 ); // $ExpectError
	gnone( 4, true, 1 ); // $ExpectError
	gnone( 4, false, 1 ); // $ExpectError
	gnone( 4, null, 1 ); // $ExpectError
	gnone( 4, undefined, 1 ); // $ExpectError
	gnone( 4, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];

	gnone( x.length, x, '10' ); // $ExpectError
	gnone( x.length, x, true ); // $ExpectError
	gnone( x.length, x, false ); // $ExpectError
	gnone( x.length, x, null ); // $ExpectError
	gnone( x.length, x, undefined ); // $ExpectError
	gnone( x.length, x, [] ); // $ExpectError
	gnone( x.length, x, {} ); // $ExpectError
	gnone( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 1 ];

	gnone(); // $ExpectError
	gnone( x.length ); // $ExpectError
	gnone( x.length, x ); // $ExpectError
	gnone( x.length, x, 1, {} ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a boolean...
{
	const x = [ 0, 0, 1, 1 ];

	gnone.ndarray( x.length, x, 1, 0 ); // $ExpectType boolean
	gnone.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];

	gnone.ndarray( '10', x, 1, 0 ); // $ExpectError
	gnone.ndarray( true, x, 1, 0 ); // $ExpectError
	gnone.ndarray( false, x, 1, 0 ); // $ExpectError
	gnone.ndarray( null, x, 1, 0 ); // $ExpectError
	gnone.ndarray( undefined, x, 1, 0 ); // $ExpectError
	gnone.ndarray( [], x, 1, 0 ); // $ExpectError
	gnone.ndarray( {}, x, 1, 0 ); // $ExpectError
	gnone.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	gnone.ndarray( 4, 10, 1, 0 ); // $ExpectError
	gnone.ndarray( 4, true, 1, 0 ); // $ExpectError
	gnone.ndarray( 4, false, 1, 0 ); // $ExpectError
	gnone.ndarray( 4, null, 1, 0 ); // $ExpectError
	gnone.ndarray( 4, undefined, 1, 0 ); // $ExpectError
	gnone.ndarray( 4, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];

	gnone.ndarray( x.length, x, '10', 0 ); // $ExpectError
	gnone.ndarray( x.length, x, true, 0 ); // $ExpectError
	gnone.ndarray( x.length, x, false, 0 ); // $ExpectError
	gnone.ndarray( x.length, x, null, 0 ); // $ExpectError
	gnone.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	gnone.ndarray( x.length, x, [], 0 ); // $ExpectError
	gnone.ndarray( x.length, x, {}, 0 ); // $ExpectError
	gnone.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];

	gnone.ndarray( x.length, x, 1, '10' ); // $ExpectError
	gnone.ndarray( x.length, x, 1, true ); // $ExpectError
	gnone.ndarray( x.length, x, 1, false ); // $ExpectError
	gnone.ndarray( x.length, x, 1, null ); // $ExpectError
	gnone.ndarray( x.length, x, 1, undefined ); // $ExpectError
	gnone.ndarray( x.length, x, 1, [] ); // $ExpectError
	gnone.ndarray( x.length, x, 1, {} ); // $ExpectError
	gnone.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 1 ];

	gnone.ndarray(); // $ExpectError
	gnone.ndarray( x.length ); // $ExpectError
	gnone.ndarray( x.length, x ); // $ExpectError
	gnone.ndarray( x.length, x, 1 ); // $ExpectError
	gnone.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

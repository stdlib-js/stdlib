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
import gevery = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float64Array( 10 );

	gevery( x.length, x, 1 ); // $ExpectType boolean
	gevery( x.length, new AccessorArray( x ), 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gevery( '10', x, 1 ); // $ExpectError
	gevery( true, x, 1 ); // $ExpectError
	gevery( false, x, 1 ); // $ExpectError
	gevery( null, x, 1 ); // $ExpectError
	gevery( undefined, x, 1 ); // $ExpectError
	gevery( [], x, 1 ); // $ExpectError
	gevery( {}, x, 1 ); // $ExpectError
	gevery( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	gevery( 4, 10, 1 ); // $ExpectError
	gevery( 4, true, 1 ); // $ExpectError
	gevery( 4, false, 1 ); // $ExpectError
	gevery( 4, null, 1 ); // $ExpectError
	gevery( 4, undefined, 1 ); // $ExpectError
	gevery( 4, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gevery( x.length, x, '10' ); // $ExpectError
	gevery( x.length, x, true ); // $ExpectError
	gevery( x.length, x, false ); // $ExpectError
	gevery( x.length, x, null ); // $ExpectError
	gevery( x.length, x, undefined ); // $ExpectError
	gevery( x.length, x, [] ); // $ExpectError
	gevery( x.length, x, {} ); // $ExpectError
	gevery( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gevery(); // $ExpectError
	gevery( x.length ); // $ExpectError
	gevery( x.length, x ); // $ExpectError
	gevery( x.length, x, 1, 0 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a boolean...
{
	const x = new Float64Array( 10 );

	gevery.ndarray( x.length, x, 1, 0 ); // $ExpectType boolean
	gevery.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gevery.ndarray( '10', x, 1, 0 ); // $ExpectError
	gevery.ndarray( true, x, 1, 0 ); // $ExpectError
	gevery.ndarray( false, x, 1, 0 ); // $ExpectError
	gevery.ndarray( null, x, 1, 0 ); // $ExpectError
	gevery.ndarray( undefined, x, 1, 0 ); // $ExpectError
	gevery.ndarray( [], x, 1, 0 ); // $ExpectError
	gevery.ndarray( {}, x, 1, 0 ); // $ExpectError
	gevery.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	gevery.ndarray( 4, 10, 1, 0 ); // $ExpectError
	gevery.ndarray( 4, true, 1, 0 ); // $ExpectError
	gevery.ndarray( 4, false, 1, 0 ); // $ExpectError
	gevery.ndarray( 4, null, 1, 0 ); // $ExpectError
	gevery.ndarray( 4, undefined, 1, 0 ); // $ExpectError
	gevery.ndarray( 4, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gevery.ndarray( x.length, x, '10', 0 ); // $ExpectError
	gevery.ndarray( x.length, x, true, 0 ); // $ExpectError
	gevery.ndarray( x.length, x, false, 0 ); // $ExpectError
	gevery.ndarray( x.length, x, null, 0 ); // $ExpectError
	gevery.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	gevery.ndarray( x.length, x, [], 0 ); // $ExpectError
	gevery.ndarray( x.length, x, {}, 0 ); // $ExpectError
	gevery.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gevery.ndarray( x.length, x, 1, '10' ); // $ExpectError
	gevery.ndarray( x.length, x, 1, true ); // $ExpectError
	gevery.ndarray( x.length, x, 1, false ); // $ExpectError
	gevery.ndarray( x.length, x, 1, null ); // $ExpectError
	gevery.ndarray( x.length, x, 1, undefined ); // $ExpectError
	gevery.ndarray( x.length, x, 1, [] ); // $ExpectError
	gevery.ndarray( x.length, x, 1, {} ); // $ExpectError
	gevery.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gevery.ndarray(); // $ExpectError
	gevery.ndarray( x.length ); // $ExpectError
	gevery.ndarray( x.length, x ); // $ExpectError
	gevery.ndarray( x.length, x, 1 ); // $ExpectError
	gevery.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

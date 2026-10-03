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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gany = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float64Array( 10 );

	gany( x.length, x, 1 ); // $ExpectType boolean
	gany( x.length, new AccessorArray( x ), 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gany( '10', x, 1 ); // $ExpectError
	gany( true, x, 1 ); // $ExpectError
	gany( false, x, 1 ); // $ExpectError
	gany( null, x, 1 ); // $ExpectError
	gany( undefined, x, 1 ); // $ExpectError
	gany( [], x, 1 ); // $ExpectError
	gany( {}, x, 1 ); // $ExpectError
	gany( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	const x = new Float64Array( 10 );

	gany( x.length, 10, 1 ); // $ExpectError
	gany( x.length, true, 1 ); // $ExpectError
	gany( x.length, false, 1 ); // $ExpectError
	gany( x.length, null, 1 ); // $ExpectError
	gany( x.length, undefined, 1 ); // $ExpectError
	gany( x.length, {}, 1 ); // $ExpectError
	gany( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gany( x.length, x, '10' ); // $ExpectError
	gany( x.length, x, true ); // $ExpectError
	gany( x.length, x, false ); // $ExpectError
	gany( x.length, x, null ); // $ExpectError
	gany( x.length, x, undefined ); // $ExpectError
	gany( x.length, x, [] ); // $ExpectError
	gany( x.length, x, {} ); // $ExpectError
	gany( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gany(); // $ExpectError
	gany( x.length ); // $ExpectError
	gany( x.length, x ); // $ExpectError
	gany( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Float64Array( 10 );

	gany.ndarray( x.length, x, 1, 0 ); // $ExpectType boolean
	gany.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gany.ndarray( '10', x, 1, 0 ); // $ExpectError
	gany.ndarray( true, x, 1, 0 ); // $ExpectError
	gany.ndarray( false, x, 1, 0 ); // $ExpectError
	gany.ndarray( null, x, 1, 0 ); // $ExpectError
	gany.ndarray( undefined, x, 1, 0 ); // $ExpectError
	gany.ndarray( [], x, 1, 0 ); // $ExpectError
	gany.ndarray( {}, x, 1, 0 ); // $ExpectError
	gany.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an array-like object...
{
	const x = new Float64Array( 10 );

	gany.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	gany.ndarray( x.length, true, 1, 0 ); // $ExpectError
	gany.ndarray( x.length, false, 1, 0 ); // $ExpectError
	gany.ndarray( x.length, null, 1, 0 ); // $ExpectError
	gany.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	gany.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	gany.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gany.ndarray( x.length, x, '10', 0 ); // $ExpectError
	gany.ndarray( x.length, x, true, 0 ); // $ExpectError
	gany.ndarray( x.length, x, false, 0 ); // $ExpectError
	gany.ndarray( x.length, x, null, 0 ); // $ExpectError
	gany.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	gany.ndarray( x.length, x, [], 0 ); // $ExpectError
	gany.ndarray( x.length, x, {}, 0 ); // $ExpectError
	gany.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gany.ndarray( x.length, x, 1, '0' ); // $ExpectError
	gany.ndarray( x.length, x, 1, true ); // $ExpectError
	gany.ndarray( x.length, x, 1, false ); // $ExpectError
	gany.ndarray( x.length, x, 1, null ); // $ExpectError
	gany.ndarray( x.length, x, 1, undefined ); // $ExpectError
	gany.ndarray( x.length, x, 1, [] ); // $ExpectError
	gany.ndarray( x.length, x, 1, {} ); // $ExpectError
	gany.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gany.ndarray(); // $ExpectError
	gany.ndarray( x.length ); // $ExpectError
	gany.ndarray( x.length, x ); // $ExpectError
	gany.ndarray( x.length, x, 1 ); // $ExpectError
	gany.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

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

import dzeros = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dzeros( x.length, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dzeros( '10', x, 1 ); // $ExpectError
	dzeros( true, x, 1 ); // $ExpectError
	dzeros( false, x, 1 ); // $ExpectError
	dzeros( null, x, 1 ); // $ExpectError
	dzeros( undefined, x, 1 ); // $ExpectError
	dzeros( [], x, 1 ); // $ExpectError
	dzeros( {}, x, 1 ); // $ExpectError
	dzeros( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dzeros( x.length, 10, 1 ); // $ExpectError
	dzeros( x.length, '10', 1 ); // $ExpectError
	dzeros( x.length, true, 1 ); // $ExpectError
	dzeros( x.length, false, 1 ); // $ExpectError
	dzeros( x.length, null, 1 ); // $ExpectError
	dzeros( x.length, undefined, 1 ); // $ExpectError
	dzeros( x.length, [], 1 ); // $ExpectError
	dzeros( x.length, {}, 1 ); // $ExpectError
	dzeros( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dzeros( x.length, x, '10' ); // $ExpectError
	dzeros( x.length, x, true ); // $ExpectError
	dzeros( x.length, x, false ); // $ExpectError
	dzeros( x.length, x, null ); // $ExpectError
	dzeros( x.length, x, undefined ); // $ExpectError
	dzeros( x.length, x, [] ); // $ExpectError
	dzeros( x.length, x, {} ); // $ExpectError
	dzeros( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dzeros(); // $ExpectError
	dzeros( x.length ); // $ExpectError
	dzeros( x.length, x ); // $ExpectError
	dzeros( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dzeros.ndarray( x.length, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dzeros.ndarray( '10', x, 1, 0 ); // $ExpectError
	dzeros.ndarray( true, x, 1, 0 ); // $ExpectError
	dzeros.ndarray( false, x, 1, 0 ); // $ExpectError
	dzeros.ndarray( null, x, 1, 0 ); // $ExpectError
	dzeros.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dzeros.ndarray( [], x, 1, 0 ); // $ExpectError
	dzeros.ndarray( {}, x, 1, 0 ); // $ExpectError
	dzeros.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dzeros.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dzeros.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dzeros.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, true, 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, false, 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, null, 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, [], 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dzeros.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dzeros.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, true ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, false ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, null ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, [] ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, {} ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dzeros.ndarray(); // $ExpectError
	dzeros.ndarray( x.length ); // $ExpectError
	dzeros.ndarray( x.length, x ); // $ExpectError
	dzeros.ndarray( x.length, x, 1 ); // $ExpectError
	dzeros.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

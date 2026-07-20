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

import gunitspace = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gunitspace( x.length, 3.0, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace( '10', 3.0, x, 1 ); // $ExpectError
	gunitspace( true, 3.0, x, 1 ); // $ExpectError
	gunitspace( false, 3.0, x, 1 ); // $ExpectError
	gunitspace( null, 3.0, x, 1 ); // $ExpectError
	gunitspace( undefined, 3.0, x, 1 ); // $ExpectError
	gunitspace( [], 3.0, x, 1 ); // $ExpectError
	gunitspace( {}, 3.0, x, 1 ); // $ExpectError
	gunitspace( ( x: number ): number => x, 3.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace( x.length, '10', x, 1 ); // $ExpectError
	gunitspace( x.length, true, x, 1 ); // $ExpectError
	gunitspace( x.length, false, x, 1 ); // $ExpectError
	gunitspace( x.length, null, x, 1 ); // $ExpectError
	gunitspace( x.length, undefined, x, 1 ); // $ExpectError
	gunitspace( x.length, [], x, 1 ); // $ExpectError
	gunitspace( x.length, {}, x, 1 ); // $ExpectError
	gunitspace( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	gunitspace( 10, 3.0, 10, 1 ); // $ExpectError
	gunitspace( 10, 3.0, true, 1 ); // $ExpectError
	gunitspace( 10, 3.0, false, 1 ); // $ExpectError
	gunitspace( 10, 3.0, null, 1 ); // $ExpectError
	gunitspace( 10, 3.0, undefined, 1 ); // $ExpectError
	gunitspace( 10, 3.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace( x.length, 3.0, x, '10' ); // $ExpectError
	gunitspace( x.length, 3.0, x, true ); // $ExpectError
	gunitspace( x.length, 3.0, x, false ); // $ExpectError
	gunitspace( x.length, 3.0, x, null ); // $ExpectError
	gunitspace( x.length, 3.0, x, undefined ); // $ExpectError
	gunitspace( x.length, 3.0, x, [] ); // $ExpectError
	gunitspace( x.length, 3.0, x, {} ); // $ExpectError
	gunitspace( x.length, 3.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gunitspace(); // $ExpectError
	gunitspace( x.length ); // $ExpectError
	gunitspace( x.length, 3.0 ); // $ExpectError
	gunitspace( x.length, 3.0, x ); // $ExpectError
	gunitspace( x.length, 3.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gunitspace.ndarray( x.length, 3.0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace.ndarray( '10', 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( true, 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( false, 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( null, 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( undefined, 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( [], 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( {}, 3.0, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( ( x: number ): number => x, 3.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	gunitspace.ndarray( 10, 3.0, 10, 1, 0 ); // $ExpectError
	gunitspace.ndarray( 10, 3.0, true, 1, 0 ); // $ExpectError
	gunitspace.ndarray( 10, 3.0, false, 1, 0 ); // $ExpectError
	gunitspace.ndarray( 10, 3.0, null, 1, 0 ); // $ExpectError
	gunitspace.ndarray( 10, 3.0, undefined, 1, 0 ); // $ExpectError
	gunitspace.ndarray( 10, 3.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace.ndarray( x.length, 3.0, x, '10', 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, true, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, false, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, null, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, undefined, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, [], 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, {}, 0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gunitspace.ndarray( x.length, 3.0, x, 1, '10' ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, true ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, false ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, null ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, undefined ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, [] ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, {} ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gunitspace.ndarray(); // $ExpectError
	gunitspace.ndarray( x.length ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1 ); // $ExpectError
	gunitspace.ndarray( x.length, 3.0, x, 1, 0, 10 ); // $ExpectError
}

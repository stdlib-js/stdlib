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

import gcircshift = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gcircshift( x.length, 2, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift( '10', 2, x, 1 ); // $ExpectError
	gcircshift( true, 2, x, 1 ); // $ExpectError
	gcircshift( false, 2, x, 1 ); // $ExpectError
	gcircshift( null, 2, x, 1 ); // $ExpectError
	gcircshift( undefined, 2, x, 1 ); // $ExpectError
	gcircshift( [], 2, x, 1 ); // $ExpectError
	gcircshift( {}, 2, x, 1 ); // $ExpectError
	gcircshift( ( x: number ): number => x, 2, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift( x.length, '10', x, 1 ); // $ExpectError
	gcircshift( x.length, true, x, 1 ); // $ExpectError
	gcircshift( x.length, false, x, 1 ); // $ExpectError
	gcircshift( x.length, null, x, 1 ); // $ExpectError
	gcircshift( x.length, undefined, x, 1 ); // $ExpectError
	gcircshift( x.length, [], x, 1 ); // $ExpectError
	gcircshift( x.length, {}, x, 1 ); // $ExpectError
	gcircshift( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gcircshift( x.length, 2, '10', 1 ); // $ExpectError
	gcircshift( x.length, 2, true, 1 ); // $ExpectError
	gcircshift( x.length, 2, false, 1 ); // $ExpectError
	gcircshift( x.length, 2, null, 1 ); // $ExpectError
	gcircshift( x.length, 2, undefined, 1 ); // $ExpectError
	gcircshift( x.length, 2, [], 1 ); // $ExpectError
	gcircshift( x.length, 2, {}, 1 ); // $ExpectError
	gcircshift( x.length, 2, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift( x.length, 2, x, '10' ); // $ExpectError
	gcircshift( x.length, 2, x, true ); // $ExpectError
	gcircshift( x.length, 2, x, false ); // $ExpectError
	gcircshift( x.length, 2, x, null ); // $ExpectError
	gcircshift( x.length, 2, x, undefined ); // $ExpectError
	gcircshift( x.length, 2, x, [] ); // $ExpectError
	gcircshift( x.length, 2, x, {} ); // $ExpectError
	gcircshift( x.length, 2, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gcircshift(); // $ExpectError
	gcircshift( x.length ); // $ExpectError
	gcircshift( x.length, 2 ); // $ExpectError
	gcircshift( x.length, 2, x ); // $ExpectError
	gcircshift( x.length, 2, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray( x.length, 2, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray( '10', 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( true, 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( false, 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( null, 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( undefined, 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( [], 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( {}, 2, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( ( x: number ): number => x, 2, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray( x.length, 2, '10', 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, true, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, false, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, null, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, undefined, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, [], 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, {}, 1, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray( x.length, 2, x, '10', 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, true, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, false, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, null, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, undefined, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, [], 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, {}, 0 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray( x.length, 2, x, 1, '10' ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, true ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, false ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, null ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, undefined ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, [] ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, {} ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gcircshift.ndarray(); // $ExpectError
	gcircshift.ndarray( x.length ); // $ExpectError
	gcircshift.ndarray( x.length, 2 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1 ); // $ExpectError
	gcircshift.ndarray( x.length, 2, x, 1, 0, 10 ); // $ExpectError
}

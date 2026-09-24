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

import dcircshift = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dcircshift( x.length, 2, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift( '10', 2, x, 1 ); // $ExpectError
	dcircshift( true, 2, x, 1 ); // $ExpectError
	dcircshift( false, 2, x, 1 ); // $ExpectError
	dcircshift( null, 2, x, 1 ); // $ExpectError
	dcircshift( undefined, 2, x, 1 ); // $ExpectError
	dcircshift( [], 2, x, 1 ); // $ExpectError
	dcircshift( {}, 2, x, 1 ); // $ExpectError
	dcircshift( ( x: number ): number => x, 2, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift( x.length, '2', x, 1 ); // $ExpectError
	dcircshift( x.length, true, x, 1 ); // $ExpectError
	dcircshift( x.length, false, x, 1 ); // $ExpectError
	dcircshift( x.length, null, x, 1 ); // $ExpectError
	dcircshift( x.length, undefined, x, 1 ); // $ExpectError
	dcircshift( x.length, [], x, 1 ); // $ExpectError
	dcircshift( x.length, {}, x, 1 ); // $ExpectError
	dcircshift( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcircshift( x.length, 2, 10, 1 ); // $ExpectError
	dcircshift( x.length, 2, '10', 1 ); // $ExpectError
	dcircshift( x.length, 2, true, 1 ); // $ExpectError
	dcircshift( x.length, 2, false, 1 ); // $ExpectError
	dcircshift( x.length, 2, null, 1 ); // $ExpectError
	dcircshift( x.length, 2, undefined, 1 ); // $ExpectError
	dcircshift( x.length, 2, [], 1 ); // $ExpectError
	dcircshift( x.length, 2, {}, 1 ); // $ExpectError
	dcircshift( x.length, 2, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift( x.length, 2, x, '10' ); // $ExpectError
	dcircshift( x.length, 2, x, true ); // $ExpectError
	dcircshift( x.length, 2, x, false ); // $ExpectError
	dcircshift( x.length, 2, x, null ); // $ExpectError
	dcircshift( x.length, 2, x, undefined ); // $ExpectError
	dcircshift( x.length, 2, x, [] ); // $ExpectError
	dcircshift( x.length, 2, x, {} ); // $ExpectError
	dcircshift( x.length, 2, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dcircshift(); // $ExpectError
	dcircshift( x.length ); // $ExpectError
	dcircshift( x.length, 2 ); // $ExpectError
	dcircshift( x.length, 2, x ); // $ExpectError
	dcircshift( x.length, 2, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray( x.length, 2, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray( '10', 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( true, 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( false, 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( null, 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( undefined, 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( [], 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( {}, 2, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( ( x: number ): number => x, 2, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray( x.length, '2', x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray( x.length, 2, 10, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, '10', 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, true, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, false, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, null, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, undefined, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, [], 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, {}, 1, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray( x.length, 2, x, '10', 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, true, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, false, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, null, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, undefined, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, [], 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, {}, 0 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray( x.length, 2, x, 1, '10' ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, true ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, false ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, null ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, undefined ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, [] ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, {} ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dcircshift.ndarray(); // $ExpectError
	dcircshift.ndarray( x.length ); // $ExpectError
	dcircshift.ndarray( x.length, 2 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1 ); // $ExpectError
	dcircshift.ndarray( x.length, 2, x, 1, 0, 10 ); // $ExpectError
}

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

import daxpb = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpb( x.length, 5.0, 3.0, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb( '10', 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( true, 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( false, 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( null, 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( undefined, 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( [], 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( {}, 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb( ( x: number ): number => x, 5.0, 3.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb( x.length, '10', 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, true, 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, false, 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, null, 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, undefined, 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, [], 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, {}, 3.0, x, 1 ); // $ExpectError
	daxpb( x.length, ( x: number ): number => x, 3.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb( x.length, 5.0, '10', x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, true, x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, false, x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, null, x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, undefined, x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, [], x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, {}, x, 1 ); // $ExpectError
	daxpb( x.length, 5.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpb( x.length, 5.0, 3.0, 10, 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, '10', 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, true, 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, false, 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, null, 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, undefined, 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, [], 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, {}, 1 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb( x.length, 5.0, 3.0, x, '10' ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, true ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, false ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, null ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, undefined ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, [] ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, {} ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	daxpb(); // $ExpectError
	daxpb( x.length ); // $ExpectError
	daxpb( x.length, 5.0 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0 ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x ); // $ExpectError
	daxpb( x.length, 5.0, 3.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( '10', 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( true, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( false, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( null, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( undefined, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( [], 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( {}, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( ( x: number ): number => x, 5.0, 3.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( x.length, '10', 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, true, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, false, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, null, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, undefined, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, [], 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, {}, 3.0, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, ( x: number ): number => x, 3.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( x.length, 5.0, '10', x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, true, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, false, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, null, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, undefined, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, [], x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, {}, x, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( x.length, 5.0, 3.0, 10, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, '10', 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, true, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, false, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, null, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, undefined, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, [], 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, {}, 1, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( x.length, 5.0, 3.0, x, '10', 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, true, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, false, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, null, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, undefined, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, [], 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, {}, 0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, '10' ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, true ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, false ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, null ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, undefined ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, [] ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, {} ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	daxpb.ndarray(); // $ExpectError
	daxpb.ndarray( x.length ); // $ExpectError
	daxpb.ndarray( x.length, 5.0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1 ); // $ExpectError
	daxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0, 10 ); // $ExpectError
}

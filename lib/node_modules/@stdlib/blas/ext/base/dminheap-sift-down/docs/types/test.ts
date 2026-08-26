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

import dminheapSiftDown = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown( x.length, 0, 1.0, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown( '10', 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( true, 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( false, 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( null, 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( undefined, 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( [], 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( {}, 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( ( x: number ): number => x, 0, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown( x.length, '10', 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, true, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, false, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, null, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, undefined, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, [], 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, {}, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, ( x: number ): number => x, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown( x.length, 0, '10', x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, true, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, false, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, null, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, undefined, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, [], x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, {}, x, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown( x.length, 0, 1.0, 10, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, '10', 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, true, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, false, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, null, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, undefined, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, [], 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, {}, 1 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown( x.length, 0, 1.0, x, '10' ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, true ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, false ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, null ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, undefined ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, [] ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, {} ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown(); // $ExpectError
	dminheapSiftDown( x.length ); // $ExpectError
	dminheapSiftDown( x.length, 0 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0 ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x ); // $ExpectError
	dminheapSiftDown( x.length, 0, 1.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( '10', 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( true, 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( false, 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( null, 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( undefined, 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( [], 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( {}, 0, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( ( x: number ): number => x, 0, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( x.length, '10', 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, true, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, false, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, null, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, undefined, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, [], 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, {}, 1.0, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, ( x: number ): number => x, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( x.length, 0, '10', x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, true, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, false, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, null, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, undefined, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, [], x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, {}, x, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( x.length, 0, 1.0, 10, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, '10', 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, true, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, false, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, null, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, undefined, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, [], 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, {}, 1, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, '10', 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, true, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, false, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, null, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, undefined, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, [], 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, {}, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, '10' ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, true ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, false ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, null ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, undefined ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, [] ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, {} ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dminheapSiftDown.ndarray(); // $ExpectError
	dminheapSiftDown.ndarray( x.length ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1 ); // $ExpectError
	dminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, 0, 10 ); // $ExpectError
}

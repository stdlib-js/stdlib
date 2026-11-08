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

import dfillEqual = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dfillEqual( x.length, 0.0, 5.0, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual( '10', 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( true, 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( false, 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( null, 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( undefined, 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( [], 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( {}, 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual( ( x: number ): number => x, 0.0, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual( x.length, '10', 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, true, 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, false, 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, null, 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, undefined, 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, [], 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, {}, 5.0, x, 1 ); // $ExpectError
	dfillEqual( x.length, ( x: number ): number => x, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual( x.length, 0.0, '10', x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, true, x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, false, x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, null, x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, undefined, x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, [], x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, {}, x, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dfillEqual( x.length, 0.0, 5.0, 10, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, '10', 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, true, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, false, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, null, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, undefined, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, [], 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, {}, 1 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual( x.length, 0.0, 5.0, x, '10' ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, true ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, false ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, null ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, undefined ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, [] ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, {} ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dfillEqual(); // $ExpectError
	dfillEqual( x.length ); // $ExpectError
	dfillEqual( x.length, 0.0 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0 ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x ); // $ExpectError
	dfillEqual( x.length, 0.0, 5.0, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( '10', 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( true, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( false, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( null, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( undefined, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( [], 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( {}, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( ( x: number ): number => x, 0.0, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( x.length, '10', 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, true, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, false, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, null, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, undefined, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, [], 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, {}, 5.0, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, ( x: number ): number => x, x, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( x.length, 0.0, '10', x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, true, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, false, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, null, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, undefined, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, [], x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, {}, x, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}


// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( x.length, 0.0, 5.0, 10, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, '10', 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, true, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, false, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, null, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, undefined, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, [], 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, {}, 1, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( x.length, 0.0, 5.0, x, '10', 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, true, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, false, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, null, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, undefined, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, [], 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, {}, 0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, ( x: number ): number => x, x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, '10' ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, true ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, false ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, null ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, undefined ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, [] ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, {} ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dfillEqual.ndarray(); // $ExpectError
	dfillEqual.ndarray( x.length ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, x ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1 ); // $ExpectError
	dfillEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0, {} ); // $ExpectError
}

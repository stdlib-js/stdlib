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

import szeroTo = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	szeroTo( x.length, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeroTo( '10', x, 1 ); // $ExpectError
	szeroTo( true, x, 1 ); // $ExpectError
	szeroTo( false, x, 1 ); // $ExpectError
	szeroTo( null, x, 1 ); // $ExpectError
	szeroTo( undefined, x, 1 ); // $ExpectError
	szeroTo( [], x, 1 ); // $ExpectError
	szeroTo( {}, x, 1 ); // $ExpectError
	szeroTo( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	szeroTo( x.length, 10, 1 ); // $ExpectError
	szeroTo( x.length, '10', 1 ); // $ExpectError
	szeroTo( x.length, true, 1 ); // $ExpectError
	szeroTo( x.length, false, 1 ); // $ExpectError
	szeroTo( x.length, null, 1 ); // $ExpectError
	szeroTo( x.length, undefined, 1 ); // $ExpectError
	szeroTo( x.length, [], 1 ); // $ExpectError
	szeroTo( x.length, {}, 1 ); // $ExpectError
	szeroTo( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeroTo( x.length, x, '10' ); // $ExpectError
	szeroTo( x.length, x, true ); // $ExpectError
	szeroTo( x.length, x, false ); // $ExpectError
	szeroTo( x.length, x, null ); // $ExpectError
	szeroTo( x.length, x, undefined ); // $ExpectError
	szeroTo( x.length, x, [] ); // $ExpectError
	szeroTo( x.length, x, {} ); // $ExpectError
	szeroTo( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	szeroTo(); // $ExpectError
	szeroTo( x.length ); // $ExpectError
	szeroTo( x.length, x ); // $ExpectError
	szeroTo( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	szeroTo.ndarray( x.length, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeroTo.ndarray( '10', x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( true, x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( false, x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( null, x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( undefined, x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( [], x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( {}, x, 1, 0 ); // $ExpectError
	szeroTo.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	szeroTo.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, true, 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, false, 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, null, 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, [], 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeroTo.ndarray( x.length, x, '10', 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, true, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, false, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, null, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, [], 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, {}, 0 ); // $ExpectError
	szeroTo.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	szeroTo.ndarray( x.length, x, 1, '10' ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, true ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, false ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, null ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, undefined ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, [] ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, {} ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	szeroTo.ndarray(); // $ExpectError
	szeroTo.ndarray( x.length ); // $ExpectError
	szeroTo.ndarray( x.length, x ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1 ); // $ExpectError
	szeroTo.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

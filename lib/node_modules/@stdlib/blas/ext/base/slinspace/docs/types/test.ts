/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import slinspace = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	slinspace( x.length, 0.0, 10.0, true, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace( '10', 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( true, 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( false, 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( null, 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( undefined, 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( [], 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( {}, 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace( ( x: number ): number => x, 0.0, 10.0, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace( x.length, '10', 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, true, 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, false, 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, null, 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, undefined, 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, [], 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, {}, 10.0, true, x, 1 ); // $ExpectError
	slinspace( x.length, ( x: number ): number => x, 10.0, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace( x.length, 0.0, '10', true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, true, true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, false, true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, null, true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, undefined, true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, [], true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, {}, true, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, ( x: number ): number => x, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = new Float32Array( 10 );

	slinspace( x.length, 0.0, 10.0, '10', x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, 99.99, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, null, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, undefined, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, [], x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, {}, x, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	slinspace( x.length, 0.0, 10.0, true, 10, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, '10', 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, true, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, false, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, null, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, undefined, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, [], 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, {}, 1 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace( x.length, 0.0, 10.0, true, x, '10' ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, true ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, false ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, null ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, undefined ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, [] ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, {} ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	slinspace(); // $ExpectError
	slinspace( x.length ); // $ExpectError
	slinspace( x.length, 0.0 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0 ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x ); // $ExpectError
	slinspace( x.length, 0.0, 10.0, true, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( '10', 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( true, 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( false, 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( null, 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( undefined, 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( [], 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( {}, 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( ( x: number ): number => x, 0.0, 10.0, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, '10', 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, true, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, false, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, null, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, undefined, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, [], 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, {}, 10.0, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, ( x: number ): number => x, 10.0, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, 0.0, '10', true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, true, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, false, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, null, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, undefined, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, [], true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, {}, true, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, ( x: number ): number => x, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a boolean...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, 0.0, 10.0, '10', x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, 99.99, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, null, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, undefined, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, [], x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, {}, x, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, 0.0, 10.0, true, 10, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, '10', 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, true, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, false, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, null, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, undefined, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, [], 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, {}, 1, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, 0.0, 10.0, true, x, '10', 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, true, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, false, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, null, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, undefined, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, [], 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, {}, 0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, '10' ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, true ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, false ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, null ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, undefined ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, [] ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, {} ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	slinspace.ndarray(); // $ExpectError
	slinspace.ndarray( x.length ); // $ExpectError
	slinspace.ndarray( x.length, 0.0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1 ); // $ExpectError
	slinspace.ndarray( x.length, 0.0, 10.0, true, x, 1, 0, 10 ); // $ExpectError
}

/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import dsmeanors = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	dsmeanors( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanors( '10', x, 1 ); // $ExpectError
	dsmeanors( true, x, 1 ); // $ExpectError
	dsmeanors( false, x, 1 ); // $ExpectError
	dsmeanors( null, x, 1 ); // $ExpectError
	dsmeanors( undefined, x, 1 ); // $ExpectError
	dsmeanors( [], x, 1 ); // $ExpectError
	dsmeanors( {}, x, 1 ); // $ExpectError
	dsmeanors( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsmeanors( x.length, 10, 1 ); // $ExpectError
	dsmeanors( x.length, '10', 1 ); // $ExpectError
	dsmeanors( x.length, true, 1 ); // $ExpectError
	dsmeanors( x.length, false, 1 ); // $ExpectError
	dsmeanors( x.length, null, 1 ); // $ExpectError
	dsmeanors( x.length, undefined, 1 ); // $ExpectError
	dsmeanors( x.length, [], 1 ); // $ExpectError
	dsmeanors( x.length, {}, 1 ); // $ExpectError
	dsmeanors( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanors( x.length, x, '10' ); // $ExpectError
	dsmeanors( x.length, x, true ); // $ExpectError
	dsmeanors( x.length, x, false ); // $ExpectError
	dsmeanors( x.length, x, null ); // $ExpectError
	dsmeanors( x.length, x, undefined ); // $ExpectError
	dsmeanors( x.length, x, [] ); // $ExpectError
	dsmeanors( x.length, x, {} ); // $ExpectError
	dsmeanors( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsmeanors(); // $ExpectError
	dsmeanors( x.length ); // $ExpectError
	dsmeanors( x.length, x ); // $ExpectError
	dsmeanors( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	dsmeanors.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanors.ndarray( '10', x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( true, x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( false, x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( null, x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( [], x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( {}, x, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsmeanors.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanors.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, true, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, false, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, null, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, [], 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanors.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, true ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, false ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, null ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, [] ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, {} ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsmeanors.ndarray(); // $ExpectError
	dsmeanors.ndarray( x.length ); // $ExpectError
	dsmeanors.ndarray( x.length, x ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1 ); // $ExpectError
	dsmeanors.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

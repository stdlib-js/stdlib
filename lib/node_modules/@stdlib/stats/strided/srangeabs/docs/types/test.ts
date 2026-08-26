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

import srangeabs = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	srangeabs( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	srangeabs( '10', x, 1 ); // $ExpectError
	srangeabs( true, x, 1 ); // $ExpectError
	srangeabs( false, x, 1 ); // $ExpectError
	srangeabs( null, x, 1 ); // $ExpectError
	srangeabs( undefined, x, 1 ); // $ExpectError
	srangeabs( [], x, 1 ); // $ExpectError
	srangeabs( {}, x, 1 ); // $ExpectError
	srangeabs( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	srangeabs( x.length, 10, 1 ); // $ExpectError
	srangeabs( x.length, '10', 1 ); // $ExpectError
	srangeabs( x.length, true, 1 ); // $ExpectError
	srangeabs( x.length, false, 1 ); // $ExpectError
	srangeabs( x.length, null, 1 ); // $ExpectError
	srangeabs( x.length, undefined, 1 ); // $ExpectError
	srangeabs( x.length, [], 1 ); // $ExpectError
	srangeabs( x.length, {}, 1 ); // $ExpectError
	srangeabs( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	srangeabs( x.length, x, '10' ); // $ExpectError
	srangeabs( x.length, x, true ); // $ExpectError
	srangeabs( x.length, x, false ); // $ExpectError
	srangeabs( x.length, x, null ); // $ExpectError
	srangeabs( x.length, x, undefined ); // $ExpectError
	srangeabs( x.length, x, [] ); // $ExpectError
	srangeabs( x.length, x, {} ); // $ExpectError
	srangeabs( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	srangeabs(); // $ExpectError
	srangeabs( x.length ); // $ExpectError
	srangeabs( x.length, x ); // $ExpectError
	srangeabs( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	srangeabs.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	srangeabs.ndarray( '10', x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( true, x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( false, x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( null, x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( undefined, x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( [], x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( {}, x, 1, 0 ); // $ExpectError
	srangeabs.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	srangeabs.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, true, 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, false, 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, null, 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, [], 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	srangeabs.ndarray( x.length, x, '10', 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, true, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, false, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, null, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, [], 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, {}, 0 ); // $ExpectError
	srangeabs.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	srangeabs.ndarray( x.length, x, 1, '10' ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, true ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, false ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, null ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, undefined ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, [] ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, {} ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	srangeabs.ndarray(); // $ExpectError
	srangeabs.ndarray( x.length ); // $ExpectError
	srangeabs.ndarray( x.length, x ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1 ); // $ExpectError
	srangeabs.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

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

import snanvariancetk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk( '10', 1, x, 1 ); // $ExpectError
	snanvariancetk( true, 1, x, 1 ); // $ExpectError
	snanvariancetk( false, 1, x, 1 ); // $ExpectError
	snanvariancetk( null, 1, x, 1 ); // $ExpectError
	snanvariancetk( undefined, 1, x, 1 ); // $ExpectError
	snanvariancetk( [], 1, x, 1 ); // $ExpectError
	snanvariancetk( {}, 1, x, 1 ); // $ExpectError
	snanvariancetk( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk( x.length, '10', x, 1 ); // $ExpectError
	snanvariancetk( x.length, true, x, 1 ); // $ExpectError
	snanvariancetk( x.length, false, x, 1 ); // $ExpectError
	snanvariancetk( x.length, null, x, 1 ); // $ExpectError
	snanvariancetk( x.length, undefined, x, 1 ); // $ExpectError
	snanvariancetk( x.length, [], x, 1 ); // $ExpectError
	snanvariancetk( x.length, {}, x, 1 ); // $ExpectError
	snanvariancetk( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	snanvariancetk( x.length, 1, 10, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, '10', 1 ); // $ExpectError
	snanvariancetk( x.length, 1, true, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, false, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, null, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, undefined, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, [], 1 ); // $ExpectError
	snanvariancetk( x.length, 1, {}, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk( x.length, 1, x, '10' ); // $ExpectError
	snanvariancetk( x.length, 1, x, true ); // $ExpectError
	snanvariancetk( x.length, 1, x, false ); // $ExpectError
	snanvariancetk( x.length, 1, x, null ); // $ExpectError
	snanvariancetk( x.length, 1, x, undefined ); // $ExpectError
	snanvariancetk( x.length, 1, x, [] ); // $ExpectError
	snanvariancetk( x.length, 1, x, {} ); // $ExpectError
	snanvariancetk( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	snanvariancetk(); // $ExpectError
	snanvariancetk( x.length ); // $ExpectError
	snanvariancetk( x.length, 1 ); // $ExpectError
	snanvariancetk( x.length, 1, x ); // $ExpectError
	snanvariancetk( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	snanvariancetk.ndarray(); // $ExpectError
	snanvariancetk.ndarray( x.length ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1 ); // $ExpectError
	snanvariancetk.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

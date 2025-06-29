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

import smean = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	smean( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	smean( '10', x, 1 ); // $ExpectError
	smean( true, x, 1 ); // $ExpectError
	smean( false, x, 1 ); // $ExpectError
	smean( null, x, 1 ); // $ExpectError
	smean( undefined, x, 1 ); // $ExpectError
	smean( [], x, 1 ); // $ExpectError
	smean( {}, x, 1 ); // $ExpectError
	smean( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	smean( x.length, 10, 1 ); // $ExpectError
	smean( x.length, '10', 1 ); // $ExpectError
	smean( x.length, true, 1 ); // $ExpectError
	smean( x.length, false, 1 ); // $ExpectError
	smean( x.length, null, 1 ); // $ExpectError
	smean( x.length, undefined, 1 ); // $ExpectError
	smean( x.length, [], 1 ); // $ExpectError
	smean( x.length, {}, 1 ); // $ExpectError
	smean( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	smean( x.length, x, '10' ); // $ExpectError
	smean( x.length, x, true ); // $ExpectError
	smean( x.length, x, false ); // $ExpectError
	smean( x.length, x, null ); // $ExpectError
	smean( x.length, x, undefined ); // $ExpectError
	smean( x.length, x, [] ); // $ExpectError
	smean( x.length, x, {} ); // $ExpectError
	smean( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	smean(); // $ExpectError
	smean( x.length ); // $ExpectError
	smean( x.length, x ); // $ExpectError
	smean( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	smean.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	smean.ndarray( '10', x, 1, 0 ); // $ExpectError
	smean.ndarray( true, x, 1, 0 ); // $ExpectError
	smean.ndarray( false, x, 1, 0 ); // $ExpectError
	smean.ndarray( null, x, 1, 0 ); // $ExpectError
	smean.ndarray( undefined, x, 1, 0 ); // $ExpectError
	smean.ndarray( [], x, 1, 0 ); // $ExpectError
	smean.ndarray( {}, x, 1, 0 ); // $ExpectError
	smean.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	smean.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	smean.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	smean.ndarray( x.length, true, 1, 0 ); // $ExpectError
	smean.ndarray( x.length, false, 1, 0 ); // $ExpectError
	smean.ndarray( x.length, null, 1, 0 ); // $ExpectError
	smean.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	smean.ndarray( x.length, [], 1, 0 ); // $ExpectError
	smean.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	smean.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	smean.ndarray( x.length, x, '10', 0 ); // $ExpectError
	smean.ndarray( x.length, x, true, 0 ); // $ExpectError
	smean.ndarray( x.length, x, false, 0 ); // $ExpectError
	smean.ndarray( x.length, x, null, 0 ); // $ExpectError
	smean.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	smean.ndarray( x.length, x, [], 0 ); // $ExpectError
	smean.ndarray( x.length, x, {}, 0 ); // $ExpectError
	smean.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	smean.ndarray( x.length, x, 1, '10' ); // $ExpectError
	smean.ndarray( x.length, x, 1, true ); // $ExpectError
	smean.ndarray( x.length, x, 1, false ); // $ExpectError
	smean.ndarray( x.length, x, 1, null ); // $ExpectError
	smean.ndarray( x.length, x, 1, undefined ); // $ExpectError
	smean.ndarray( x.length, x, 1, [] ); // $ExpectError
	smean.ndarray( x.length, x, 1, {} ); // $ExpectError
	smean.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	smean.ndarray(); // $ExpectError
	smean.ndarray( x.length ); // $ExpectError
	smean.ndarray( x.length, x ); // $ExpectError
	smean.ndarray( x.length, x, 1 ); // $ExpectError
	smean.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

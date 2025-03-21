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

import dsmean = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	dsmean( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmean( '10', x, 1 ); // $ExpectError
	dsmean( true, x, 1 ); // $ExpectError
	dsmean( false, x, 1 ); // $ExpectError
	dsmean( null, x, 1 ); // $ExpectError
	dsmean( undefined, x, 1 ); // $ExpectError
	dsmean( [], x, 1 ); // $ExpectError
	dsmean( {}, x, 1 ); // $ExpectError
	dsmean( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsmean( x.length, 10, 1 ); // $ExpectError
	dsmean( x.length, '10', 1 ); // $ExpectError
	dsmean( x.length, true, 1 ); // $ExpectError
	dsmean( x.length, false, 1 ); // $ExpectError
	dsmean( x.length, null, 1 ); // $ExpectError
	dsmean( x.length, undefined, 1 ); // $ExpectError
	dsmean( x.length, [], 1 ); // $ExpectError
	dsmean( x.length, {}, 1 ); // $ExpectError
	dsmean( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmean( x.length, x, '10' ); // $ExpectError
	dsmean( x.length, x, true ); // $ExpectError
	dsmean( x.length, x, false ); // $ExpectError
	dsmean( x.length, x, null ); // $ExpectError
	dsmean( x.length, x, undefined ); // $ExpectError
	dsmean( x.length, x, [] ); // $ExpectError
	dsmean( x.length, x, {} ); // $ExpectError
	dsmean( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsmean(); // $ExpectError
	dsmean( x.length ); // $ExpectError
	dsmean( x.length, x ); // $ExpectError
	dsmean( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	dsmean.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmean.ndarray( '10', x, 1, 0 ); // $ExpectError
	dsmean.ndarray( true, x, 1, 0 ); // $ExpectError
	dsmean.ndarray( false, x, 1, 0 ); // $ExpectError
	dsmean.ndarray( null, x, 1, 0 ); // $ExpectError
	dsmean.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dsmean.ndarray( [], x, 1, 0 ); // $ExpectError
	dsmean.ndarray( {}, x, 1, 0 ); // $ExpectError
	dsmean.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsmean.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dsmean.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmean.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, true, 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, false, 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, null, 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, [], 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dsmean.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmean.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, true ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, false ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, null ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, [] ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, {} ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsmean.ndarray(); // $ExpectError
	dsmean.ndarray( x.length ); // $ExpectError
	dsmean.ndarray( x.length, x ); // $ExpectError
	dsmean.ndarray( x.length, x, 1 ); // $ExpectError
	dsmean.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

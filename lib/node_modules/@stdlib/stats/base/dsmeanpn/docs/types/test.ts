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

import dsmeanpn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn( '10', x, 1 ); // $ExpectError
	dsmeanpn( true, x, 1 ); // $ExpectError
	dsmeanpn( false, x, 1 ); // $ExpectError
	dsmeanpn( null, x, 1 ); // $ExpectError
	dsmeanpn( undefined, x, 1 ); // $ExpectError
	dsmeanpn( [], x, 1 ); // $ExpectError
	dsmeanpn( {}, x, 1 ); // $ExpectError
	dsmeanpn( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsmeanpn( x.length, 10, 1 ); // $ExpectError
	dsmeanpn( x.length, '10', 1 ); // $ExpectError
	dsmeanpn( x.length, true, 1 ); // $ExpectError
	dsmeanpn( x.length, false, 1 ); // $ExpectError
	dsmeanpn( x.length, null, 1 ); // $ExpectError
	dsmeanpn( x.length, undefined, 1 ); // $ExpectError
	dsmeanpn( x.length, [], 1 ); // $ExpectError
	dsmeanpn( x.length, {}, 1 ); // $ExpectError
	dsmeanpn( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn( x.length, x, '10' ); // $ExpectError
	dsmeanpn( x.length, x, true ); // $ExpectError
	dsmeanpn( x.length, x, false ); // $ExpectError
	dsmeanpn( x.length, x, null ); // $ExpectError
	dsmeanpn( x.length, x, undefined ); // $ExpectError
	dsmeanpn( x.length, x, [] ); // $ExpectError
	dsmeanpn( x.length, x, {} ); // $ExpectError
	dsmeanpn( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsmeanpn(); // $ExpectError
	dsmeanpn( x.length ); // $ExpectError
	dsmeanpn( x.length, x ); // $ExpectError
	dsmeanpn( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn.ndarray( '10', x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( true, x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( false, x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( null, x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( [], x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( {}, x, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsmeanpn.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, true, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, false, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, null, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, [], 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsmeanpn.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, true ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, false ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, null ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, [] ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, {} ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsmeanpn.ndarray(); // $ExpectError
	dsmeanpn.ndarray( x.length ); // $ExpectError
	dsmeanpn.ndarray( x.length, x ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1 ); // $ExpectError
	dsmeanpn.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

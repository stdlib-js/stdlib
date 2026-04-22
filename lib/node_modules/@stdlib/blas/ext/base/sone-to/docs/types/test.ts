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

import soneTo = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	soneTo( x.length, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	soneTo( '10', x, 1 ); // $ExpectError
	soneTo( true, x, 1 ); // $ExpectError
	soneTo( false, x, 1 ); // $ExpectError
	soneTo( null, x, 1 ); // $ExpectError
	soneTo( undefined, x, 1 ); // $ExpectError
	soneTo( [], x, 1 ); // $ExpectError
	soneTo( {}, x, 1 ); // $ExpectError
	soneTo( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	soneTo( x.length, 10, 1 ); // $ExpectError
	soneTo( x.length, '10', 1 ); // $ExpectError
	soneTo( x.length, true, 1 ); // $ExpectError
	soneTo( x.length, false, 1 ); // $ExpectError
	soneTo( x.length, null, 1 ); // $ExpectError
	soneTo( x.length, undefined, 1 ); // $ExpectError
	soneTo( x.length, [], 1 ); // $ExpectError
	soneTo( x.length, {}, 1 ); // $ExpectError
	soneTo( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	soneTo( x.length, x, '10' ); // $ExpectError
	soneTo( x.length, x, true ); // $ExpectError
	soneTo( x.length, x, false ); // $ExpectError
	soneTo( x.length, x, null ); // $ExpectError
	soneTo( x.length, x, undefined ); // $ExpectError
	soneTo( x.length, x, [] ); // $ExpectError
	soneTo( x.length, x, {} ); // $ExpectError
	soneTo( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	soneTo(); // $ExpectError
	soneTo( x.length ); // $ExpectError
	soneTo( x.length, x ); // $ExpectError
	soneTo( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	soneTo.ndarray( x.length, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	soneTo.ndarray( '10', x, 1, 0 ); // $ExpectError
	soneTo.ndarray( true, x, 1, 0 ); // $ExpectError
	soneTo.ndarray( false, x, 1, 0 ); // $ExpectError
	soneTo.ndarray( null, x, 1, 0 ); // $ExpectError
	soneTo.ndarray( undefined, x, 1, 0 ); // $ExpectError
	soneTo.ndarray( [], x, 1, 0 ); // $ExpectError
	soneTo.ndarray( {}, x, 1, 0 ); // $ExpectError
	soneTo.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	soneTo.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, true, 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, false, 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, null, 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, [], 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	soneTo.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	soneTo.ndarray( x.length, x, '10', 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, true, 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, false, 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, null, 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, [], 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, {}, 0 ); // $ExpectError
	soneTo.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	soneTo.ndarray( x.length, x, 1, '10' ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, true ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, false ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, null ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, undefined ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, [] ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, {} ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	soneTo.ndarray(); // $ExpectError
	soneTo.ndarray( x.length ); // $ExpectError
	soneTo.ndarray( x.length, x ); // $ExpectError
	soneTo.ndarray( x.length, x, 1 ); // $ExpectError
	soneTo.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

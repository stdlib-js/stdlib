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

import sones = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );

	sones( x.length, x, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sones( '10', x, 1 ); // $ExpectError
	sones( true, x, 1 ); // $ExpectError
	sones( false, x, 1 ); // $ExpectError
	sones( null, x, 1 ); // $ExpectError
	sones( undefined, x, 1 ); // $ExpectError
	sones( [], x, 1 ); // $ExpectError
	sones( {}, x, 1 ); // $ExpectError
	sones( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sones( x.length, 10, 1 ); // $ExpectError
	sones( x.length, '10', 1 ); // $ExpectError
	sones( x.length, true, 1 ); // $ExpectError
	sones( x.length, false, 1 ); // $ExpectError
	sones( x.length, null, 1 ); // $ExpectError
	sones( x.length, undefined, 1 ); // $ExpectError
	sones( x.length, [], 1 ); // $ExpectError
	sones( x.length, {}, 1 ); // $ExpectError
	sones( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	sones( x.length, x, '10' ); // $ExpectError
	sones( x.length, x, true ); // $ExpectError
	sones( x.length, x, false ); // $ExpectError
	sones( x.length, x, null ); // $ExpectError
	sones( x.length, x, undefined ); // $ExpectError
	sones( x.length, x, [] ); // $ExpectError
	sones( x.length, x, {} ); // $ExpectError
	sones( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sones(); // $ExpectError
	sones( x.length ); // $ExpectError
	sones( x.length, x ); // $ExpectError
	sones( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );

	sones.ndarray( x.length, x, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	sones.ndarray( '10', x, 1, 0 ); // $ExpectError
	sones.ndarray( true, x, 1, 0 ); // $ExpectError
	sones.ndarray( false, x, 1, 0 ); // $ExpectError
	sones.ndarray( null, x, 1, 0 ); // $ExpectError
	sones.ndarray( undefined, x, 1, 0 ); // $ExpectError
	sones.ndarray( [], x, 1, 0 ); // $ExpectError
	sones.ndarray( {}, x, 1, 0 ); // $ExpectError
	sones.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sones.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	sones.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	sones.ndarray( x.length, true, 1, 0 ); // $ExpectError
	sones.ndarray( x.length, false, 1, 0 ); // $ExpectError
	sones.ndarray( x.length, null, 1, 0 ); // $ExpectError
	sones.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	sones.ndarray( x.length, [], 1, 0 ); // $ExpectError
	sones.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	sones.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );

	sones.ndarray( x.length, x, '10', 0 ); // $ExpectError
	sones.ndarray( x.length, x, true, 0 ); // $ExpectError
	sones.ndarray( x.length, x, false, 0 ); // $ExpectError
	sones.ndarray( x.length, x, null, 0 ); // $ExpectError
	sones.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	sones.ndarray( x.length, x, [], 0 ); // $ExpectError
	sones.ndarray( x.length, x, {}, 0 ); // $ExpectError
	sones.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	sones.ndarray( x.length, x, 1, '10' ); // $ExpectError
	sones.ndarray( x.length, x, 1, true ); // $ExpectError
	sones.ndarray( x.length, x, 1, false ); // $ExpectError
	sones.ndarray( x.length, x, 1, null ); // $ExpectError
	sones.ndarray( x.length, x, 1, undefined ); // $ExpectError
	sones.ndarray( x.length, x, 1, [] ); // $ExpectError
	sones.ndarray( x.length, x, 1, {} ); // $ExpectError
	sones.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	sones.ndarray(); // $ExpectError
	sones.ndarray( x.length ); // $ExpectError
	sones.ndarray( x.length, x ); // $ExpectError
	sones.ndarray( x.length, x, 1 ); // $ExpectError
	sones.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

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

import swax = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax( x.length, 5.0, x, 1, w, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax( '10', 5.0, x, 1, w, 1 ); // $ExpectError
	swax( true, 5.0, x, 1, w, 1 ); // $ExpectError
	swax( false, 5.0, x, 1, w, 1 ); // $ExpectError
	swax( null, 5.0, x, 1, w, 1 ); // $ExpectError
	swax( undefined, 5.0, x, 1, w, 1 ); // $ExpectError
	swax( [], 5.0, x, 1, w, 1 ); // $ExpectError
	swax( {}, 5.0, x, 1, w, 1 ); // $ExpectError
	swax( ( x: number ): number => x, 5.0, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax( x.length, '10', x, 1, w, 1 ); // $ExpectError
	swax( x.length, true, x, 1, w, 1 ); // $ExpectError
	swax( x.length, false, x, 1, w, 1 ); // $ExpectError
	swax( x.length, null, x, 1, w, 1 ); // $ExpectError
	swax( x.length, undefined, x, 1, w, 1 ); // $ExpectError
	swax( x.length, [], x, 1, w, 1 ); // $ExpectError
	swax( x.length, {}, x, 1, w, 1 ); // $ExpectError
	swax( x.length, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const w = new Float32Array( 10 );

	swax( 10, 5.0, 10, 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, '10', 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, true, 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, false, 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, null, 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, undefined, 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, [], 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, {}, 1, w, 1 ); // $ExpectError
	swax( 10, 5.0, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax( x.length, 5.0, x, '10', w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, true, w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, false, w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, null, w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, undefined, w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, [], w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, {}, w, 1 ); // $ExpectError
	swax( x.length, 5.0, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	swax( 10, 5.0, x, 1, 10, 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, '10', 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, true, 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, false, 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, null, 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, undefined, 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, [], 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, {}, 1 ); // $ExpectError
	swax( 10, 5.0, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax( x.length, 5.0, x, 1, w, '10' ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, true ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, false ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, null ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, undefined ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, [] ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, {} ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax(); // $ExpectError
	swax( x.length ); // $ExpectError
	swax( x.length, 5.0 ); // $ExpectError
	swax( x.length, 5.0, x ); // $ExpectError
	swax( x.length, 5.0, x, 1 ); // $ExpectError
	swax( x.length, 5.0, x, 1, w ); // $ExpectError
	swax( x.length, 5.0, x, 1, w, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( '10', 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( true, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( false, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( null, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( undefined, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( [], 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( {}, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( ( x: number ): number => x, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( x.length, '10', x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, undefined, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const w = new Float32Array( 10 );

	swax.ndarray( 10, 5.0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, true, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, false, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, null, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, [], 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( x.length, 5.0, x, '10', 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, true, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, false, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, null, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, undefined, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, [], 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, {}, 0, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( x.length, 5.0, x, 1, '10', w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, true, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, false, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, null, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, undefined, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, [], w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, {}, w, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	swax.ndarray( 10, 5.0, x, 1, 0, 10, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, '10', 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, true, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, false, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, null, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, [], 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	swax.ndarray( 10, 5.0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( x.length, 5.0, x, 1, 0, w, '10', 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, true, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, false, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, null, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, undefined, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, [], 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, {}, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, '10' ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, true ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, false ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, null ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, undefined ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, [] ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, {} ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swax.ndarray(); // $ExpectError
	swax.ndarray( x.length ); // $ExpectError
	swax.ndarray( x.length, 5.0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1 ); // $ExpectError
	swax.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0, 10 ); // $ExpectError
}

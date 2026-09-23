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

import swapx = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx( x.length, 5.0, x, 1, w, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx( '10', 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( true, 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( false, 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( null, 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( undefined, 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( [], 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( {}, 5.0, x, 1, w, 1 ); // $ExpectError
	swapx( ( x: number ): number => x, 5.0, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx( x.length, '10', x, 1, w, 1 ); // $ExpectError
	swapx( x.length, true, x, 1, w, 1 ); // $ExpectError
	swapx( x.length, false, x, 1, w, 1 ); // $ExpectError
	swapx( x.length, null, x, 1, w, 1 ); // $ExpectError
	swapx( x.length, undefined, x, 1, w, 1 ); // $ExpectError
	swapx( x.length, [], x, 1, w, 1 ); // $ExpectError
	swapx( x.length, {}, x, 1, w, 1 ); // $ExpectError
	swapx( x.length, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const w = new Float32Array( 10 );

	swapx( 10, 5.0, 10, 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, '10', 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, true, 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, false, 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, null, 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, undefined, 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, [], 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, {}, 1, w, 1 ); // $ExpectError
	swapx( 10, 5.0, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx( x.length, 5.0, x, '10', w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, true, w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, false, w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, null, w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, undefined, w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, [], w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, {}, w, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	swapx( 10, 5.0, x, 1, 10, 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, '10', 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, true, 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, false, 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, null, 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, undefined, 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, [], 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, {}, 1 ); // $ExpectError
	swapx( 10, 5.0, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx( x.length, 5.0, x, 1, w, '10' ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, true ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, false ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, null ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, undefined ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, [] ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, {} ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx(); // $ExpectError
	swapx( x.length ); // $ExpectError
	swapx( x.length, 5.0 ); // $ExpectError
	swapx( x.length, 5.0, x ); // $ExpectError
	swapx( x.length, 5.0, x, 1 ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w ); // $ExpectError
	swapx( x.length, 5.0, x, 1, w, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( '10', 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( true, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( false, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( null, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( undefined, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( [], 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( {}, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( ( x: number ): number => x, 5.0, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( x.length, '10', x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, undefined, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const w = new Float32Array( 10 );

	swapx.ndarray( 10, 5.0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, true, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, false, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, null, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, [], 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( x.length, 5.0, x, '10', 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, true, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, false, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, null, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, undefined, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, [], 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, {}, 0, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( x.length, 5.0, x, 1, '10', w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, true, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, false, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, null, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, undefined, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, [], w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, {}, w, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	swapx.ndarray( 10, 5.0, x, 1, 0, 10, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, '10', 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, true, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, false, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, null, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, [], 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	swapx.ndarray( 10, 5.0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( x.length, 5.0, x, 1, 0, w, '10', 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, true, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, false, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, null, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, undefined, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, [], 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, {}, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, '10' ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, true ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, false ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, null ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, undefined ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, [] ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, {} ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const w = new Float32Array( 10 );

	swapx.ndarray(); // $ExpectError
	swapx.ndarray( x.length ); // $ExpectError
	swapx.ndarray( x.length, 5.0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1 ); // $ExpectError
	swapx.ndarray( x.length, 5.0, x, 1, 0, w, 1, 0, 10 ); // $ExpectError
}

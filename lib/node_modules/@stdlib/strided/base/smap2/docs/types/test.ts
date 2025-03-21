/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import smap2 = require( './index' );

/**
* Binary callback.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function binary( x: number, y: number ): number {
	return x + y;
}


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, x, 1, y, 1, z, 1, binary ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( '10', x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( true, x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( false, x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( null, x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( undefined, x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( [], x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( {}, x, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( ( x: number ): number => x, x, 1, y, 1, z, 1, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, 10, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, '10', 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, true, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, false, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, null, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, undefined, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, [ '1' ], 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, {}, 1, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, ( x: number ): number => x, 1, y, 1, z, 1, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, x, '10', y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, true, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, false, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, null, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, undefined, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, [], y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, {}, y, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, ( x: number ): number => x, y, 1, z, 1, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, x, 1, 10, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, '10', 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, true, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, false, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, null, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, undefined, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, [ '1' ], 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, {}, 1, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, ( x: number ): number => x, 1, z, 1, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, x, 1, y, '10', z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, true, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, false, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, null, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, undefined, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, [], z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, {}, z, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, ( x: number ): number => x, z, 1, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap2( x.length, x, 1, y, 1, 10, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, '10', 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, true, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, false, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, null, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, undefined, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, [ '1' ], 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, {}, 1, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, ( x: number ): number => x, 1, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, x, 1, y, 1, z, '10', binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, true, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, false, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, null, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, undefined, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, [], binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, {}, binary ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, ( x: number ): number => x, binary ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a binary function...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2( x.length, x, 1, y, 1, z, 1, '10' ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, 0 ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, true ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, false ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, null ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, undefined ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, [] ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2(); // $ExpectError
	smap2( x.length ); // $ExpectError
	smap2( x.length, x ); // $ExpectError
	smap2( x.length, x, 1 ); // $ExpectError
	smap2( x.length, x, 1, y ); // $ExpectError
	smap2( x.length, x, 1, y, 1 ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1 ); // $ExpectError
	smap2( x.length, x, 1, y, 1, z, 1, binary, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( '10', x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( true, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( false, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( null, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( undefined, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( [], x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( {}, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, 10, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, '10', 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, true, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, false, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, null, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, undefined, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, {}, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, '10', 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, true, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, false, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, null, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, undefined, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, [], 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, {}, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, '10', y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, true, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, false, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, null, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, undefined, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, [], y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, {}, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, 10, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, '10', 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, true, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, false, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, null, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, undefined, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, {}, 1, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, '10', 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, true, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, false, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, null, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, undefined, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, [], 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, {}, 0, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, 1, '10', z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, true, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, false, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, null, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, undefined, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, [], z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, {}, z, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, z, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, 10, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, '10', 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, true, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, false, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, null, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, [ '1' ], 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, {}, 1, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x, 1, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, z, '10', 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, true, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, false, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, null, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, undefined, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, [], 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, {}, 0, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, z, ( x: number ): number => x, 0, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, '10', binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, true, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, false, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, null, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, undefined, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, [], binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, {}, binary ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, ( x: number ): number => x, binary ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a binary function...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, '10' ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, 0 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, true ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, false ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, null ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, undefined ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, [] ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );
	const z = new Float32Array( 10 );

	smap2.ndarray(); // $ExpectError
	smap2.ndarray( x.length ); // $ExpectError
	smap2.ndarray( x.length, x ); // $ExpectError
	smap2.ndarray( x.length, x, 1 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0 ); // $ExpectError
	smap2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, 10 ); // $ExpectError
}

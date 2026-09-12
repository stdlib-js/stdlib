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

/* eslint-disable space-in-parens */

import sleftPadEdge = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge( x.length, 10, x, 1, y, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge( '10', 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( true, 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( false, 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( null, 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( undefined, 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( [], 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( {}, 10, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( ( x: number ): number => x, 10, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge( x.length, '10', x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, true, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, false, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, null, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, [], x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, {}, x, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge( x.length, 10, 10, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, '10', 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, true, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, false, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, null, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, undefined, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, [ '1' ], 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, {}, 1, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge( x.length, 10, x, '10', y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, true, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, false, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, null, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, undefined, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, [], y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, {}, y, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sleftPadEdge( x.length, 10, x, 1, 10, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, '10', 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, true, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, false, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, null, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, undefined, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, [ '1' ], 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, {}, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge( x.length, 10, x, 1, y, '10' ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, true ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, false ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, null ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, undefined ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, [] ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, {} ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge(); // $ExpectError
	sleftPadEdge( x.length ); // $ExpectError
	sleftPadEdge( x.length, 10 ); // $ExpectError
	sleftPadEdge( x.length, 10, x ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1 ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, out ); // $ExpectError
	sleftPadEdge( x.length, 10, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( '10', 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( true, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( false, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( null, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( undefined, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( [], 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( {}, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( ( x: number ): number => x, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, 10, 10, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, '10', 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, true, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, false, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, null, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, {}, 1, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, 10, x, '10', 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, true, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, false, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, null, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, undefined, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, [], 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, {}, 0, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, 10, x, 1, '10', y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, true, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, false, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, null, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, undefined, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, [], y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, {}, y, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, 10, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, '10', 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, true, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, false, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, null, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, {}, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, '10', 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, true, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, false, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, null, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, undefined, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, [], 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, {}, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, '10' ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, true ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, false ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, null ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, undefined ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, [] ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, {} ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 20 );

	sleftPadEdge.ndarray(); // $ExpectError
	sleftPadEdge.ndarray( x.length ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, out ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1 ); // $ExpectError
	sleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

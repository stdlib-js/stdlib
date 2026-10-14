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

import dleftPadEdge = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge( x.length, 10, x, 1, y, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge( '10', 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( true, 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( false, 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( null, 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( undefined, 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( [], 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( {}, 10, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( ( x: number ): number => x, 10, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge( x.length, '10', x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, true, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, false, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, null, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, [], x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, {}, x, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge( x.length, 10, 10, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, '10', 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, true, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, false, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, null, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, undefined, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, [ '1' ], 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, {}, 1, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge( x.length, 10, x, '10', y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, true, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, false, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, null, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, undefined, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, [], y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, {}, y, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dleftPadEdge( x.length, 10, x, 1, 10, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, '10', 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, true, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, false, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, null, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, undefined, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, [ '1' ], 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, {}, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge( x.length, 10, x, 1, y, '10' ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, true ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, false ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, null ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, undefined ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, [] ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, {} ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge(); // $ExpectError
	dleftPadEdge( x.length ); // $ExpectError
	dleftPadEdge( x.length, 10 ); // $ExpectError
	dleftPadEdge( x.length, 10, x ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1 ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y ); // $ExpectError
	dleftPadEdge( x.length, 10, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( '10', 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( true, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( false, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( null, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( undefined, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( [], 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( {}, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( ( x: number ): number => x, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, 10, 10, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, '10', 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, true, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, false, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, null, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, [ '1' ], 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, {}, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, 10, x, '10', 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, true, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, false, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, null, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, undefined, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, [], 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, {}, 0, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, 10, x, 1, '10', y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, true, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, false, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, null, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, undefined, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, [], y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, {}, y, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, true, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, false, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, null, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, '10', 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, true, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, false, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, null, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, undefined, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, [], 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, {}, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, '10' ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, true ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, false ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, null ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, undefined ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, [] ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, {} ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 20 );

	dleftPadEdge.ndarray(); // $ExpectError
	dleftPadEdge.ndarray( x.length ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1 ); // $ExpectError
	dleftPadEdge.ndarray( x.length, 10, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

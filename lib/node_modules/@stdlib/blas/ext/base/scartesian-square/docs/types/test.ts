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

import scartesianSquare = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare( 'row-major', x.length, x, 1, out, 3 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare( 10, x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( true, x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( false, x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( null, x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( undefined, x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( [], x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( {}, x.length, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( ( x: number ): number => x, x.length, x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare( 'row-major', '10', x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', true, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', false, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', null, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', undefined, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', [], x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', {}, x, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', ( x: number ): number => x, x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const out = new Float32Array( 18 );

	scartesianSquare( 'row-major', 3, 10, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, '10', 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, true, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, false, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, null, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, undefined, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, [], 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, {}, 1, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', 3, ( x: number ): number => x, 1, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare( 'row-major', x.length, x, '10', out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, true, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, false, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, null, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, undefined, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, [], out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, {}, out, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, ( x: number ): number => x, out, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 3 );

	scartesianSquare( 'row-major', x.length, x, 1, 10, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, '10', 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, true, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, false, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, null, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, undefined, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, [], 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, {}, 3 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare( 'row-major', x.length, x, 1, out, '10' ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, true ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, false ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, null ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, undefined ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, [] ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, {} ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare(); // $ExpectError
	scartesianSquare( 'row-major' ); // $ExpectError
	scartesianSquare( 'row-major', x.length ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1 ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out ); // $ExpectError
	scartesianSquare( 'row-major', x.length, x, 1, out, 3, 1 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( '10', x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( true, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( false, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( null, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( undefined, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( [], x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( {}, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( ( x: number ): number => x, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( 3, 10, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, '10', 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, true, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, false, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, null, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, undefined, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, [], 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, {}, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( 3, ( x: number ): number => x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( x.length, x, '10', 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, true, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, false, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, null, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, undefined, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, [], 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, {}, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, ( x: number ): number => x, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( x.length, x, 1, '10', out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, true, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, false, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, null, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, undefined, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, [], out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, {}, out, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, ( x: number ): number => x, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 3 );

	scartesianSquare.ndarray( x.length, x, 1, 0, 10, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, '10', 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, true, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, false, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, null, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, undefined, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, [], 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( x.length, x, 1, 0, out, '10', 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, true, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, false, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, null, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, [], 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, {}, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, '10', 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, true, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, false, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, null, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, undefined, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, [], 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, {}, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, '10' ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, true ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, false ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, null ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, undefined ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, [] ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, {} ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 3 );
	const out = new Float32Array( 18 );

	scartesianSquare.ndarray(); // $ExpectError
	scartesianSquare.ndarray( x.length ); // $ExpectError
	scartesianSquare.ndarray( x.length, x ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1 ); // $ExpectError
	scartesianSquare.ndarray( x.length, x, 1, 0, out, 2, 1, 0, 10 ); // $ExpectError
}

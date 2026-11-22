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

import scartesianProduct = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 10, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( true, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( false, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( null, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( undefined, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( [], x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( {}, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( ( x: number ): number => x, x.length, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', '10', y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', true, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', false, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', null, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', undefined, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', [], y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', {}, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', ( x: number ): number => x, y.length, x, 1, y, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', x.length, '10', x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, true, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, false, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, null, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, undefined, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, [], x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, {}, x, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, ( x: number ): number => x, x, 1, y, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float32Array...
{
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', 2, y.length, 10, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, '10', 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, true, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, false, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, null, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, undefined, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, [], 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, {}, 1, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', 2, y.length, ( x: number ): number => x, 1, y, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', x.length, y.length, x, '10', y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, true, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, false, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, null, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, undefined, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, [], y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, {}, y, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, ( x: number ): number => x, y, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', x.length, 2, x, 1, 10, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, '10', 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, true, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, false, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, null, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, undefined, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, [], 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, {}, 1, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, 2, x, 1, ( x: number ): number => x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, '10', out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, true, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, false, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, null, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, undefined, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, [], out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, {}, out, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, ( x: number ): number => x, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float32Array...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, 10, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, '10', 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, true, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, false, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, null, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, undefined, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, [], 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, {}, 2 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, '10' ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, true ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, false ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, null ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, undefined ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, [] ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, {} ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct(); // $ExpectError
	scartesianProduct( 'row-major' ); // $ExpectError
	scartesianProduct( 'row-major', x.length ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1 ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out ); // $ExpectError
	scartesianProduct( 'row-major', x.length, y.length, x, 1, y, 1, out, 2, 1 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( '10', y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( true, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( false, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( null, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( undefined, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( [], y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( {}, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( ( x: number ): number => x, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, '10', x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, true, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, false, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, null, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, undefined, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, [], x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, {}, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( 2, y.length, 10, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, '10', 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, true, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, false, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, null, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, undefined, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, [], 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, {}, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( 2, y.length, ( x: number ): number => x, 1, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, '10', 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, true, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, false, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, null, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, undefined, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, [], 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, {}, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, ( x: number ): number => x, 0, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, '10', y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, true, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, false, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, null, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, undefined, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, [], y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, {}, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, ( x: number ): number => x, y, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, 2, x, 1, 0, 10, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, '10', 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, true, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, false, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, null, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, undefined, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, [], 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, {}, 1, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, '10', 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, true, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, false, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, null, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, undefined, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, [], 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, {}, 0, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, ( x: number ): number => x, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, '10', out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, true, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, false, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, null, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, undefined, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, [], out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, {}, out, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, ( x: number ): number => x, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a Float32Array...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, 10, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, '10', 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, true, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, false, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, null, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, undefined, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, [], 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, '10', 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, true, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, false, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, null, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, [], 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, {}, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, '10', 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, true, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, false, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, null, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, undefined, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, [], 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, {}, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, '10' ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, true ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, false ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, null ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, undefined ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, [] ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, {} ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 2 );
	const y = new Float32Array( 2 );
	const out = new Float32Array( 8 );

	scartesianProduct.ndarray(); // $ExpectError
	scartesianProduct.ndarray( x.length ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1 ); // $ExpectError
	scartesianProduct.ndarray( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0, {} ); // $ExpectError
}

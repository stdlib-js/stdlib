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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gcartesianSquare = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare( 'row-major', 10, x, 1, out, 2 ); // $ExpectType Float64Array
	gcartesianSquare( 'row-major', 10, new AccessorArray( x ), 1, new AccessorArray( out ), 2 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a valid order...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare( '10', 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( true, 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( false, 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( null, 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( undefined, 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( [], 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( {}, 10, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( ( x: number ): number => x, 10, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare( 'row-major', '10', x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', true, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', false, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', null, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', undefined, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', [], x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', {}, x, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', ( x: number ): number => x, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const out = new Float64Array( 200 );

	gcartesianSquare( 'row-major', 10, true, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, false, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, null, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, undefined, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, {}, 1, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, ( x: number ): number => x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare( 'row-major', 10, x, '10', out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, true, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, false, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, null, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, undefined, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, [], out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, {}, out, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, ( x: number ): number => x, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gcartesianSquare( 'row-major', 10, x, 1, true, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, false, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, null, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, undefined, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, {}, 2 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare( 'row-major', 10, x, 1, out, '10' ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, true ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, false ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, null ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, undefined ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, [] ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, {} ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare(); // $ExpectError
	gcartesianSquare( 'row-major' ); // $ExpectError
	gcartesianSquare( 'row-major', 10 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1 ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out ); // $ExpectError
	gcartesianSquare( 'row-major', 10, x, 1, out, 2, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, 0 ); // $ExpectType Float64Array
	gcartesianSquare.ndarray( 10, new AccessorArray( x ), 1, 0, new AccessorArray( out ), 2, 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( '10', x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( true, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( false, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( null, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( undefined, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( [], x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( {}, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( ( x: number ): number => x, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, true, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, false, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, null, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, undefined, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, {}, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, ( x: number ): number => x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, x, '10', 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, true, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, false, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, null, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, undefined, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, [], 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, {}, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, ( x: number ): number => x, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, x, 1, '10', out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, true, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, false, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, null, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, undefined, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, [], out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, {}, out, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, ( x: number ): number => x, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gcartesianSquare.ndarray( 10, x, 1, 0, true, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, false, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, null, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, undefined, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, x, 1, 0, out, '10', 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, true, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, false, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, null, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, [], 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, {}, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, '10', 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, true, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, false, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, null, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, undefined, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, [], 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, {}, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, '10' ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, true ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, false ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, null ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, undefined ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, [] ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, {} ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const out = new Float64Array( 200 );

	gcartesianSquare.ndarray(); // $ExpectError
	gcartesianSquare.ndarray( 10 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1 ); // $ExpectError
	gcartesianSquare.ndarray( 10, x, 1, 0, out, 2, 1, 0, 10 ); // $ExpectError
}

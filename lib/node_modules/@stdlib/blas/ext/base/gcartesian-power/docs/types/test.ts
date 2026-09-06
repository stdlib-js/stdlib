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
import gcartesianPower = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower( 'row-major', x.length, 2, x, 1, out, 2 ); // $ExpectType Float64Array
	gcartesianPower( 'row-major', x.length, 2, new AccessorArray( x ), 1, new AccessorArray( out ), 2 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a valid order...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower( 10, x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( true, x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( false, x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( null, x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( undefined, x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( [], x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( {}, x.length, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( ( x: number ): number => x, x.length, 2, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower( 'row-major', '10', 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', true, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', false, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', null, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', undefined, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', [], 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', {}, 2, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', ( x: number ): number => x, 2, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower( 'row-major', x.length, '10', x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, true, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, false, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, null, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, undefined, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, [], x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, {}, x, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, ( x: number ): number => x, x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const out = new Float64Array( 8 );

	gcartesianPower( 'row-major', 2, 2, 10, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', 2, 2, true, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', 2, 2, false, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', 2, 2, null, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', 2, 2, undefined, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', 2, 2, {}, 1, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', 2, 2, ( x: number ): number => x, 1, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower( 'row-major', x.length, 2, x, '10', out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, true, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, false, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, null, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, undefined, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, [], out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, {}, out, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, ( x: number ): number => x, out, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 2 );

	gcartesianPower( 'row-major', x.length, 2, x, 1, 10, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, true, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, false, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, null, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, undefined, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, {}, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, ( x: number ): number => x, 2 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower( 'row-major', x.length, 2, x, 1, out, '10' ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, true ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, false ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, null ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, undefined ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, [] ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, {} ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower(); // $ExpectError
	gcartesianPower( 'row-major' ); // $ExpectError
	gcartesianPower( 'row-major', x.length ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1 ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out ); // $ExpectError
	gcartesianPower( 'row-major', x.length, 2, x, 1, out, 2, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectType Float64Array
	gcartesianPower.ndarray( x.length, 2, new AccessorArray( x ), 1, 0, new AccessorArray( out ), 2, 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( '10', 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( true, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( false, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( null, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( undefined, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( [], 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( {}, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( ( x: number ): number => x, 2, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, '10', x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, true, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, false, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, null, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, undefined, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, [], x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, {}, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( 2, 2, 10, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( 2, 2, true, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( 2, 2, false, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( 2, 2, null, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( 2, 2, undefined, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( 2, 2, {}, 1, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( 2, 2, ( x: number ): number => x, 1, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, 2, x, '10', 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, true, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, false, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, null, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, undefined, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, [], 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, {}, 0, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, ( x: number ): number => x, 0, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, 2, x, 1, '10', out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, true, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, false, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, null, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, undefined, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, [], out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, {}, out, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, ( x: number ): number => x, out, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 2 );

	gcartesianPower.ndarray( x.length, 2, x, 1, 0, 10, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, true, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, false, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, null, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, undefined, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, {}, 2, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 2, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, '10', 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, true, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, false, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, null, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, undefined, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, [], 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, {}, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, '10', 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, true, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, false, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, null, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, undefined, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, [], 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, {}, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, '10' ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, true ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, false ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, null ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, undefined ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, [] ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, {} ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 2 );
	const out = new Float64Array( 8 );

	gcartesianPower.ndarray(); // $ExpectError
	gcartesianPower.ndarray( x.length ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1 ); // $ExpectError
	gcartesianPower.ndarray( x.length, 2, x, 1, 0, out, 2, 1, 0, 10 ); // $ExpectError
}

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

import BooleanArray = require( '@stdlib/array/bool' );
import dwhere = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( '10', condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( true, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( false, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( null, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( undefined, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( [], condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( {}, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( ( x: number ): number => x, condition, 1, x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a BooleanArray...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, '10', 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, 10, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, true, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, false, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, null, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, undefined, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, [ '1' ], 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, {}, 1, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, ( x: number ): number => x, 1, x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, '10', x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, true, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, false, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, null, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, undefined, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, [], x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, {}, x, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, ( x: number ): number => x, x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, 1, '10', 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, 10, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, true, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, false, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, null, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, undefined, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, [ '1' ], 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, {}, 1, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, ( x: number ): number => x, 1, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, 1, x, '10', y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, true, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, false, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, null, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, undefined, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, [], y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, {}, y, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, ( x: number ): number => x, y, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, 1, x, 1, '10', 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, 10, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, true, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, false, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, null, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, undefined, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, [ '1' ], 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, {}, 1, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, 1, x, 1, y, '10', out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, true, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, false, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, null, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, undefined, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, [], out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, {}, out, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a Float64Array...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );

	dwhere( 3, condition, 1, x, 1, y, 1, '10', 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, 10, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, true, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, false, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, null, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, undefined, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, [ '1' ], 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, {}, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere( 3, condition, 1, x, 1, y, 1, out, '10' ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, true ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, false ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, null ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, undefined ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, [] ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, {} ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere(); // $ExpectError
	dwhere( 3 ); // $ExpectError
	dwhere( 3, condition ); // $ExpectError
	dwhere( 3, condition, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x ); // $ExpectError
	dwhere( 3, condition, 1, x, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1 ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out ); // $ExpectError
	dwhere( 3, condition, 1, x, 1, y, 1, out, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( '10', condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( true, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( false, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( null, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( undefined, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( [], condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( {}, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( ( x: number ): number => x, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a BooleanArray...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, '10', 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, 10, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, true, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, false, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, null, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, undefined, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, [ '1' ], 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, {}, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, ( x: number ): number => x, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, '10', 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, true, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, false, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, null, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, undefined, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, [], 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, {}, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, ( x: number ): number => x, 0, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, '10', x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, true, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, false, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, null, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, undefined, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, [], x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, {}, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, ( x: number ): number => x, x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, '10', 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, 10, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, true, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, false, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, null, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, undefined, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, [ '1' ], 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, {}, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, ( x: number ): number => x, 1, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, '10', 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, true, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, false, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, null, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, undefined, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, [], 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, {}, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, ( x: number ): number => x, 0, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, '10', y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, true, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, false, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, null, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, undefined, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, [], y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, {}, y, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, ( x: number ): number => x, y, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float64Array...
{
	const x = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, '10', 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, 10, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, true, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, false, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, null, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, [ '1' ], 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, {}, 1, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, '10', 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, true, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, false, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, null, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, undefined, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, [], 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, {}, 0, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, '10', out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, true, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, false, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, null, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, undefined, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, [], out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, {}, out, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a Float64Array...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, '10', 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, 10, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, true, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, false, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, null, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, undefined, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, {}, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, '10', 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, true, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, false, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, null, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, undefined, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, [], 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, {}, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, '10' ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, true ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, false ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, null ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, undefined ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, [] ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, {} ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 3 );
	const y = new Float64Array( 3 );
	const condition = new BooleanArray( 3 );
	const out = new Float64Array( 3 );

	dwhere.ndarray(); // $ExpectError
	dwhere.ndarray( 3 ); // $ExpectError
	dwhere.ndarray( 3, condition ); // $ExpectError
	dwhere.ndarray( 3, condition, 1 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1 ); // $ExpectError
	dwhere.ndarray( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0, 10 ); // $ExpectError
}

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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gcopyWithin = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, 3, 1, 4, x, 1, w, 1 ); // $ExpectType Float64Array
	gcopyWithin( x.length, 3, 1, 4, new AccessorArray( x ), 1, w, 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( '3', 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( true, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( false, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( null, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( undefined, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( [], 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( {}, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( ( x: number ): number => x, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, '3', 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, true, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, false, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, null, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, undefined, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, [], 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, {}, 1, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, ( x: number ): number => x, 1, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, 3, '1', 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, true, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, false, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, null, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, undefined, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, [], 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, {}, 2, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, ( x: number ): number => x, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, 3, 1, '2', x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, true, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, false, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, null, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, undefined, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, [], x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, {}, x, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, 3, 1, 2, 10, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, true, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, false, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, null, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, undefined, 1, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, {}, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, 3, 1, 2, x, '4', w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, true, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, false, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, null, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, undefined, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, [], w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, {}, w, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gcopyWithin( x.length, 3, 1, 2, x, 1, 10, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, true, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, false, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, null, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, undefined, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin( x.length, 3, 1, 2, x, 1, w, '1' ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, true ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, false ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, null ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, undefined ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, [] ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, {} ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin(); // $ExpectError
	gcopyWithin( x.length ); // $ExpectError
	gcopyWithin( x.length, 3 ); // $ExpectError
	gcopyWithin( x.length, 3, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1 ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w ); // $ExpectError
	gcopyWithin( x.length, 3, 1, 2, x, 1, w, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 4, x, 1, 0, w, 1, 0 ); // $ExpectType Float64Array
	gcopyWithin.ndarray( x.length, 3, 1, 4, new AccessorArray( x ), 1, 0, w, 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( '2', 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( true, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( false, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( null, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( undefined, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( [], 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( {}, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( ( x: number ): number => x, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, '3', 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, true, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, false, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, null, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, undefined, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, [], 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, {}, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, ( x: number ): number => x, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, '1', 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, true, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, false, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, null, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, undefined, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, [], 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, {}, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, ( x: number ): number => x, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, '2', x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, undefined, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 2, 10, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, true, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, false, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, null, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, {}, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 2, x, '4', 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, true, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, false, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, null, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, undefined, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, [], 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, {}, 0, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, '0', w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, true, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, false, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, null, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, undefined, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, [], w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, {}, w, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, '1', 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, true, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, false, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, null, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, undefined, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, [], 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, {}, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, '0' ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, true ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, false ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, null ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, undefined ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, [] ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, {} ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gcopyWithin.ndarray(); // $ExpectError
	gcopyWithin.ndarray( x.length ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1 ); // $ExpectError
	gcopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, 0, {} ); // $ExpectError
}

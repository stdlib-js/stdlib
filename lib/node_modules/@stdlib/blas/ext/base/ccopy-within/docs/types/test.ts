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

import Complex64Array = require( '@stdlib/array/complex64' );
import ccopyWithin = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, 1, 4, x, 1, w, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( '3', 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( true, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( false, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( null, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( undefined, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( [], 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( {}, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( ( x: number ): number => x, 3, 1, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, '3', 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, true, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, false, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, null, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, undefined, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, [], 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, {}, 1, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, ( x: number ): number => x, 1, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, '1', 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, true, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, false, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, null, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, undefined, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, [], 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, {}, 2, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, ( x: number ): number => x, 2, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, 1, '2', x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, true, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, false, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, null, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, undefined, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, [], x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, {}, x, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, 1, 2, '5', 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, 5, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, true, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, false, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, null, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, undefined, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, [], 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, {}, 1, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, 1, 2, x, '4', w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, true, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, false, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, null, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, undefined, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, [], w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, {}, w, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, 1, 2, x, 1, '5', 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, 5, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, true, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, false, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, null, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, undefined, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, [], 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, {}, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin( x.length, 3, 1, 2, x, 1, w, '1' ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, true ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, false ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, null ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, undefined ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, [] ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, {} ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin(); // $ExpectError
	ccopyWithin( x.length ); // $ExpectError
	ccopyWithin( x.length, 3 ); // $ExpectError
	ccopyWithin( x.length, 3, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1 ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w ); // $ExpectError
	ccopyWithin( x.length, 3, 1, 2, x, 1, w, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 4, x, 1, 0, w, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( '2', 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( true, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( false, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( null, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( undefined, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( [], 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( {}, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( ( x: number ): number => x, 3, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, '3', 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, true, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, false, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, null, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, undefined, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, [], 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, {}, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, ( x: number ): number => x, 1, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, '1', 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, true, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, false, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, null, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, undefined, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, [], 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, {}, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, ( x: number ): number => x, 2, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, '2', x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, undefined, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 2, '5', 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, 5, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, true, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, false, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, null, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, [], 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, {}, 1, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 2, x, '4', 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, true, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, false, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, null, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, undefined, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, [], 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, {}, 0, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, '0', w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, true, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, false, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, null, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, undefined, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, [], w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, {}, w, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, '5', 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, 5, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, [], 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, '1', 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, true, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, false, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, null, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, undefined, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, [], 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, {}, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, '0' ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, true ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, false ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, null ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, undefined ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, [] ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, {} ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	ccopyWithin.ndarray(); // $ExpectError
	ccopyWithin.ndarray( x.length ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1 ); // $ExpectError
	ccopyWithin.ndarray( x.length, 3, 1, 2, x, 1, 0, w, 1, 0, {} ); // $ExpectError
}

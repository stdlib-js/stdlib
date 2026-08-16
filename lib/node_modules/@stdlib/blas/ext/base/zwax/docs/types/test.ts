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

import Complex128Array = require( '@stdlib/array/complex128' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import zwax = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax( x.length, alpha, x, 1, w, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax( '10', alpha, x, 1, w, 1 ); // $ExpectError
	zwax( true, alpha, x, 1, w, 1 ); // $ExpectError
	zwax( false, alpha, x, 1, w, 1 ); // $ExpectError
	zwax( null, alpha, x, 1, w, 1 ); // $ExpectError
	zwax( undefined, alpha, x, 1, w, 1 ); // $ExpectError
	zwax( [], alpha, x, 1, w, 1 ); // $ExpectError
	zwax( {}, alpha, x, 1, w, 1 ); // $ExpectError
	zwax( ( x: number ): number => x, alpha, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex-like...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );

	zwax( x.length, 10, x, 1, w, 1 ); // $ExpectError
	zwax( x.length, '10', x, 1, w, 1 ); // $ExpectError
	zwax( x.length, true, x, 1, w, 1 ); // $ExpectError
	zwax( x.length, false, x, 1, w, 1 ); // $ExpectError
	zwax( x.length, null, x, 1, w, 1 ); // $ExpectError
	zwax( x.length, undefined, x, 1, w, 1 ); // $ExpectError
	zwax( x.length, [], x, 1, w, 1 ); // $ExpectError
	zwax( x.length, {}, x, 1, w, 1 ); // $ExpectError
	zwax( x.length, ( x: number ): number => x, x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex128Array...
{
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax( 10, alpha, 10, 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, '10', 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, true, 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, false, 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, null, 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, undefined, 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, [ '1' ], 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, {}, 1, w, 1 ); // $ExpectError
	zwax( 10, alpha, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax( x.length, alpha, x, '10', w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, true, w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, false, w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, null, w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, undefined, w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, [], w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, {}, w, 1 ); // $ExpectError
	zwax( x.length, alpha, x, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax( x.length, alpha, x, 1, 10, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, '10', 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, true, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, false, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, null, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, undefined, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, [ '1' ], 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, {}, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax( x.length, alpha, x, 1, w, '10' ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, true ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, false ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, null ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, undefined ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, [] ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, {} ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax(); // $ExpectError
	zwax( x.length ); // $ExpectError
	zwax( x.length, alpha ); // $ExpectError
	zwax( x.length, alpha, x ); // $ExpectError
	zwax( x.length, alpha, x, 1 ); // $ExpectError
	zwax( x.length, alpha, x, 1, w ); // $ExpectError
	zwax( x.length, alpha, x, 1, w, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( '10', alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( true, alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( false, alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( null, alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( undefined, alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( [], alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( {}, alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( ( x: number ): number => x, alpha, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex-like...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );

	zwax.ndarray( x.length, 10, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, '10', x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, true, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, false, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, null, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, undefined, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, [], x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, {}, x, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, ( x: number ): number => x, x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( 10, alpha, 10, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, '10', 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, true, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, false, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, null, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, [ '1' ], 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, {}, 1, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( 10, alpha, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( x.length, alpha, x, '10', 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, true, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, false, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, null, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, undefined, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, [], 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, {}, 0, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( x.length, alpha, x, 1, '10', w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, true, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, false, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, null, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, undefined, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, [], w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, {}, w, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( x.length, alpha, x, 1, 0, 10, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, '10', 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, true, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, false, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, null, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, {}, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( x.length, alpha, x, 1, 0, w, '10', 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, true, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, false, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, null, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, undefined, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, [], 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, {}, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, '10' ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, true ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, false ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, null ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, undefined ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, [] ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, {} ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const w = new Complex128Array( 10 );
	const alpha = new Complex128( 5.0, 3.0 );

	zwax.ndarray(); // $ExpectError
	zwax.ndarray( x.length ); // $ExpectError
	zwax.ndarray( x.length, alpha ); // $ExpectError
	zwax.ndarray( x.length, alpha, x ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1 ); // $ExpectError
	zwax.ndarray( x.length, alpha, x, 1, 0, w, 1, 0, 10 ); // $ExpectError
}

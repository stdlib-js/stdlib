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
import creplicate = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate( x.length, 2, x, 1, out, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate( '10', 2, x, 1, out, 1 ); // $ExpectError
	creplicate( true, 2, x, 1, out, 1 ); // $ExpectError
	creplicate( false, 2, x, 1, out, 1 ); // $ExpectError
	creplicate( null, 2, x, 1, out, 1 ); // $ExpectError
	creplicate( undefined, 2, x, 1, out, 1 ); // $ExpectError
	creplicate( [], 2, x, 1, out, 1 ); // $ExpectError
	creplicate( {}, 2, x, 1, out, 1 ); // $ExpectError
	creplicate( ( x: number ): number => x, 2, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate( x.length, '10', x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, true, x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, false, x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, null, x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, undefined, x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, [], x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, {}, x, 1, out, 1 ); // $ExpectError
	creplicate( x.length, ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate( x.length, 2, 10, 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, '10', 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, true, 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, false, 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, null, 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, undefined, 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, [ '1' ], 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, {}, 1, out, 1 ); // $ExpectError
	creplicate( x.length, 2, ( x: number ): number => x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate( x.length, 2, x, '10', out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, true, out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, false, out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, null, out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, undefined, out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, [], out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, {}, out, 1 ); // $ExpectError
	creplicate( x.length, 2, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	creplicate( x.length, 2, x, 1, 10, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, '10', 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, true, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, false, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, null, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, undefined, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, [ '1' ], 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, {}, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate( x.length, 2, x, 1, out, '10' ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, true ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, false ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, null ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, undefined ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, [] ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, {} ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate(); // $ExpectError
	creplicate( x.length ); // $ExpectError
	creplicate( x.length, 2 ); // $ExpectError
	creplicate( x.length, 2, x ); // $ExpectError
	creplicate( x.length, 2, x, 1 ); // $ExpectError
	creplicate( x.length, 2, x, 1, out ); // $ExpectError
	creplicate( x.length, 2, x, 1, out, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( '10', 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( true, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( false, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( null, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( undefined, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( [], 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( {}, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( ( x: number ): number => x, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, true, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, false, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, null, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, [], x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, 2, 10, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, '10', 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, true, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, false, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, null, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, [ '1' ], 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, {}, 1, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, 2, x, '10', 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, true, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, false, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, null, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, undefined, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, [], 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, {}, 0, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, 2, x, 1, '10', out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, true, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, false, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, null, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, undefined, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, [], out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, {}, out, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	creplicate.ndarray( x.length, 2, x, 1, 0, 10, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, '10', 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, 2, x, 1, 0, out, '10', 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, true, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, false, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, null, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, undefined, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, [], 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, {}, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, '10' ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, true ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, false ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, null ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, undefined ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, [] ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, {} ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const out = new Complex64Array( 20 );

	creplicate.ndarray(); // $ExpectError
	creplicate.ndarray( x.length ); // $ExpectError
	creplicate.ndarray( x.length, 2 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1 ); // $ExpectError
	creplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0, {} ); // $ExpectError
}

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

import Complex64Array = require( '@stdlib/array/complex64' );
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import clinspace = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace( x.length, strt, stp, true, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace( '10', strt, stp, true, x, 1 ); // $ExpectError
	clinspace( true, strt, stp, true, x, 1 ); // $ExpectError
	clinspace( false, strt, stp, true, x, 1 ); // $ExpectError
	clinspace( null, strt, stp, true, x, 1 ); // $ExpectError
	clinspace( undefined, strt, stp, true, x, 1 ); // $ExpectError
	clinspace( [], strt, stp, true, x, 1 ); // $ExpectError
	clinspace( {}, strt, stp, true, x, 1 ); // $ExpectError
	clinspace( ( x: number ): number => x, strt, stp, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a complex number...
{
	const x = new Complex64Array( 10 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace( x.length, '10', stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, 10, stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, true, stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, false, stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, null, stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, undefined, stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, [], stp, true, x, 1 ); // $ExpectError
	clinspace( x.length, ( x: number ): number => x, stp, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a complex number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );

	clinspace( x.length, strt, '10', true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, 10, true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, true, true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, false, true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, null, true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, undefined, true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, [], true, x, 1 ); // $ExpectError
	clinspace( x.length, strt, ( x: number ): number => x, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace( x.length, strt, stp, '10', x, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, 99.99, x, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, null, x, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, undefined, x, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, [], x, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, {}, x, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace( x.length, strt, stp, true, 10, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, '10', 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, true, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, false, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, null, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, undefined, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, [], 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, {}, 1 ); // $ExpectError
	clinspace( x.length, strt, stp, true, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace( x.length, strt, stp, true, x, '10' ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, true ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, false ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, null ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, undefined ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, [] ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, {} ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace(); // $ExpectError
	clinspace( x.length ); // $ExpectError
	clinspace( x.length, strt ); // $ExpectError
	clinspace( x.length, strt, stp ); // $ExpectError
	clinspace( x.length, strt, stp, true ); // $ExpectError
	clinspace( x.length, strt, stp, true, x ); // $ExpectError
	clinspace( x.length, strt, stp, true, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( x.length, strt, stp, true, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( '10', strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( true, strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( false, strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( null, strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( undefined, strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( [], strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( {}, strt, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( ( x: number ): number => x, strt, stp, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const x = new Complex64Array( 10 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( x.length, '10', stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, 10, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, true, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, false, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, null, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, undefined, stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, [], stp, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, ( x: number ): number => x, stp, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a complex number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );

	clinspace.ndarray( x.length, strt, '10', true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, 10, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, true, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, false, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, null, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, undefined, true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, [], true, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, ( x: number ): number => x, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a boolean...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( x.length, strt, stp, '10', x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, 99.99, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, null, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, undefined, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, [], x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, {}, x, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( x.length, strt, stp, true, 10, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, '10', 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, true, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, false, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, null, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, undefined, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, [], 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, {}, 1, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( x.length, strt, stp, true, x, '10', 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, true, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, false, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, null, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, undefined, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, [], 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, {}, 0 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray( x.length, strt, stp, true, x, 1, '10' ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, true ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, false ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, null ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, undefined ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, [] ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, {} ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const strt = new Complex64( 0.0, 0.0 );
	const stp = new Complex64( 10.0, 5.0 );

	clinspace.ndarray(); // $ExpectError
	clinspace.ndarray( x.length ); // $ExpectError
	clinspace.ndarray( x.length, strt ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1 ); // $ExpectError
	clinspace.ndarray( x.length, strt, stp, true, x, 1, 0, 10 ); // $ExpectError
}

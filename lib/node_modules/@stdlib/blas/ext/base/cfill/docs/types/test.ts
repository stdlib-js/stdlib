/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import cfill = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill( x.length, alpha, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill( '10', alpha, x, 1 ); // $ExpectError
	cfill( true, alpha, x, 1 ); // $ExpectError
	cfill( false, alpha, x, 1 ); // $ExpectError
	cfill( null, alpha, x, 1 ); // $ExpectError
	cfill( undefined, alpha, x, 1 ); // $ExpectError
	cfill( [], alpha, x, 1 ); // $ExpectError
	cfill( {}, alpha, x, 1 ); // $ExpectError
	cfill( ( x: number ): number => x, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );

	cfill( x.length, 10, x, 1 ); // $ExpectError
	cfill( x.length, '10', x, 1 ); // $ExpectError
	cfill( x.length, true, x, 1 ); // $ExpectError
	cfill( x.length, false, x, 1 ); // $ExpectError
	cfill( x.length, null, x, 1 ); // $ExpectError
	cfill( x.length, undefined, x, 1 ); // $ExpectError
	cfill( x.length, [ '1' ], x, 1 ); // $ExpectError
	cfill( x.length, {}, x, 1 ); // $ExpectError
	cfill( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill( x.length, alpha, 10, 1 ); // $ExpectError
	cfill( x.length, alpha, '10', 1 ); // $ExpectError
	cfill( x.length, alpha, true, 1 ); // $ExpectError
	cfill( x.length, alpha, false, 1 ); // $ExpectError
	cfill( x.length, alpha, null, 1 ); // $ExpectError
	cfill( x.length, alpha, undefined, 1 ); // $ExpectError
	cfill( x.length, alpha, [ '1' ], 1 ); // $ExpectError
	cfill( x.length, alpha, {}, 1 ); // $ExpectError
	cfill( x.length, alpha, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill( x.length, alpha, x, '10' ); // $ExpectError
	cfill( x.length, alpha, x, true ); // $ExpectError
	cfill( x.length, alpha, x, false ); // $ExpectError
	cfill( x.length, alpha, x, null ); // $ExpectError
	cfill( x.length, alpha, x, undefined ); // $ExpectError
	cfill( x.length, alpha, x, [] ); // $ExpectError
	cfill( x.length, alpha, x, {} ); // $ExpectError
	cfill( x.length, alpha, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill(); // $ExpectError
	cfill( x.length ); // $ExpectError
	cfill( x.length, alpha ); // $ExpectError
	cfill( x.length, alpha, x ); // $ExpectError
	cfill( x.length, alpha, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill.ndarray( '10', alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( true, alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( false, alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( null, alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( undefined, alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( [], alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( {}, alpha, x, 1, 0 ); // $ExpectError
	cfill.ndarray( ( x: number ): number => x, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );

	cfill.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, [ '1' ], x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill.ndarray( x.length, alpha, 10, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, '10', 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, true, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, false, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, null, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, undefined, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, [ '1' ], 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, {}, 1, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill.ndarray( x.length, alpha, x, '10', 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, true, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, false, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, null, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, undefined, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, [], 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, {}, 0 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill.ndarray( x.length, alpha, x, 1, '10' ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, true ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, false ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, null ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, undefined ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, [] ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, {} ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 2.0, 2.0 );

	cfill.ndarray(); // $ExpectError
	cfill.ndarray( x.length ); // $ExpectError
	cfill.ndarray( x.length, alpha ); // $ExpectError
	cfill.ndarray( x.length, alpha, x ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	cfill.ndarray( x.length, alpha, x, 1, 0, 10 ); // $ExpectError
}

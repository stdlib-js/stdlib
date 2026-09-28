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
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import cfillEqual = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual( x.length, s, alpha, x, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual( '10', s, alpha, x, 1 ); // $ExpectError
	cfillEqual( true, s, alpha, x, 1 ); // $ExpectError
	cfillEqual( false, s, alpha, x, 1 ); // $ExpectError
	cfillEqual( null, s, alpha, x, 1 ); // $ExpectError
	cfillEqual( undefined, s, alpha, x, 1 ); // $ExpectError
	cfillEqual( [], s, alpha, x, 1 ); // $ExpectError
	cfillEqual( {}, s, alpha, x, 1 ); // $ExpectError
	cfillEqual( ( x: number ): number => x, s, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual( x.length, 10, alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, '10', alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, true, alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, false, alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, null, alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, undefined, alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, [ '1' ], alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, {}, alpha, x, 1 ); // $ExpectError
	cfillEqual( x.length, ( x: number ): number => x, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );

	cfillEqual( x.length, s, 10, x, 1 ); // $ExpectError
	cfillEqual( x.length, s, '10', x, 1 ); // $ExpectError
	cfillEqual( x.length, s, true, x, 1 ); // $ExpectError
	cfillEqual( x.length, s, false, x, 1 ); // $ExpectError
	cfillEqual( x.length, s, null, x, 1 ); // $ExpectError
	cfillEqual( x.length, s, undefined, x, 1 ); // $ExpectError
	cfillEqual( x.length, s, [ '1' ], x, 1 ); // $ExpectError
	cfillEqual( x.length, s, {}, x, 1 ); // $ExpectError
	cfillEqual( x.length, s, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual( x.length, s, alpha, '10', 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, true, 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, false, 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, null, 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, undefined, 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, [ '1' ], 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, {}, 1 ); // $ExpectError
	cfillEqual( x.length, s, alpha, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual( x.length, s, alpha, x, '10' ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, true ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, false ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, null ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, undefined ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, [] ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, {} ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual(); // $ExpectError
	cfillEqual( x.length ); // $ExpectError
	cfillEqual( x.length, s ); // $ExpectError
	cfillEqual( x.length, s, alpha ); // $ExpectError
	cfillEqual( x.length, s, alpha, x ); // $ExpectError
	cfillEqual( x.length, s, alpha, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray( x.length, s, alpha, x, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray( '10', s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( true, s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( false, s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( null, s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( undefined, s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( [], s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( {}, s, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( ( x: number ): number => x, s, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray( x.length, 10, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, '10', alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, true, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, false, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, null, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, undefined, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, [ '1' ], alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, {}, alpha, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, ( x: number ): number => x, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not complex-like...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );

	cfillEqual.ndarray( x.length, s, 10, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, '10', x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, true, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, false, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, null, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, undefined, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, [ '1' ], x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, {}, x, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray( x.length, s, alpha, '10', 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, true, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, false, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, null, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, undefined, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, [ '1' ], 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, {}, 1, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray( x.length, s, alpha, x, '10', 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, true, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, false, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, null, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, undefined, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, [], 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, {}, 0 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray( x.length, s, alpha, x, 1, '10' ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, true ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, false ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, null ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, undefined ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, [] ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, {} ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const s = new Complex64( 0.0, 0.0 );
	const alpha = new Complex64( 5.0, 5.0 );

	cfillEqual.ndarray(); // $ExpectError
	cfillEqual.ndarray( x.length ); // $ExpectError
	cfillEqual.ndarray( x.length, s ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1 ); // $ExpectError
	cfillEqual.ndarray( x.length, s, alpha, x, 1, 0, {} ); // $ExpectError
}

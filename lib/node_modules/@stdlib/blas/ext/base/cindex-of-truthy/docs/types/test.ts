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
import cindexOfTruthy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy( '1', x, 1 ); // $ExpectError
	cindexOfTruthy( true, x, 1 ); // $ExpectError
	cindexOfTruthy( false, x, 1 ); // $ExpectError
	cindexOfTruthy( null, x, 1 ); // $ExpectError
	cindexOfTruthy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy( x.length, '1', 1 ); // $ExpectError
	cindexOfTruthy( x.length, true, 1 ); // $ExpectError
	cindexOfTruthy( x.length, false, 1 ); // $ExpectError
	cindexOfTruthy( x.length, null, 1 ); // $ExpectError
	cindexOfTruthy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy( x.length, x, '1' ); // $ExpectError
	cindexOfTruthy( x.length, x, true ); // $ExpectError
	cindexOfTruthy( x.length, x, false ); // $ExpectError
	cindexOfTruthy( x.length, x, null ); // $ExpectError
	cindexOfTruthy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	cindexOfTruthy(); // $ExpectError
	cindexOfTruthy( 3 ); // $ExpectError
	cindexOfTruthy( 3, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ) ); // $ExpectError
	cindexOfTruthy( 3, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy.ndarray( '1', x, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( true, x, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( false, x, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( null, x, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy.ndarray( x.length, '1', 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, true, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, false, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, null, 1 ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	cindexOfTruthy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, 1, true ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, 1, false ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, 1, null ); // $ExpectError
	cindexOfTruthy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	cindexOfTruthy.ndarray(); // $ExpectError
	cindexOfTruthy.ndarray( 3 ); // $ExpectError
	cindexOfTruthy.ndarray( 3, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ) ); // $ExpectError
	cindexOfTruthy.ndarray( 3, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 1 ); // $ExpectError
	cindexOfTruthy.ndarray( 3, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 1, 0, {} ); // $ExpectError
}

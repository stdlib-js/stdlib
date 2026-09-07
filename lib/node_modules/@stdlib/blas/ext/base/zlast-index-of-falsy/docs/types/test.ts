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

import Complex128Array = require( '@stdlib/array/complex128' );
import zlastIndexOfFalsy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy( '1', x, 1 ); // $ExpectError
	zlastIndexOfFalsy( true, x, 1 ); // $ExpectError
	zlastIndexOfFalsy( false, x, 1 ); // $ExpectError
	zlastIndexOfFalsy( null, x, 1 ); // $ExpectError
	zlastIndexOfFalsy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	zlastIndexOfFalsy( 3, '1', 1 ); // $ExpectError
	zlastIndexOfFalsy( 3, true, 1 ); // $ExpectError
	zlastIndexOfFalsy( 3, false, 1 ); // $ExpectError
	zlastIndexOfFalsy( 3, null, 1 ); // $ExpectError
	zlastIndexOfFalsy( 3, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy( x.length, x, '1' ); // $ExpectError
	zlastIndexOfFalsy( x.length, x, true ); // $ExpectError
	zlastIndexOfFalsy( x.length, x, false ); // $ExpectError
	zlastIndexOfFalsy( x.length, x, null ); // $ExpectError
	zlastIndexOfFalsy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zlastIndexOfFalsy(); // $ExpectError
	zlastIndexOfFalsy( 3 ); // $ExpectError
	zlastIndexOfFalsy( 3, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ) ); // $ExpectError
	zlastIndexOfFalsy( 3, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy.ndarray( '1', x, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( true, x, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( false, x, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( null, x, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	zlastIndexOfFalsy.ndarray( 3, '1', 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, true, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, false, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, null, 1, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, true, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, false, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, null, 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

	zlastIndexOfFalsy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, 1, true ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, 1, false ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, 1, null ); // $ExpectError
	zlastIndexOfFalsy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	zlastIndexOfFalsy.ndarray(); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ) ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ), 1 ); // $ExpectError
	zlastIndexOfFalsy.ndarray( 3, new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] ), 1, 0, {} ); // $ExpectError
}

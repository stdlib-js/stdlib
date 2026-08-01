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
import zindexOfFalsy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy( '1', x, 1 ); // $ExpectError
	zindexOfFalsy( true, x, 1 ); // $ExpectError
	zindexOfFalsy( false, x, 1 ); // $ExpectError
	zindexOfFalsy( null, x, 1 ); // $ExpectError
	zindexOfFalsy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy( x.length, '1', 1 ); // $ExpectError
	zindexOfFalsy( x.length, true, 1 ); // $ExpectError
	zindexOfFalsy( x.length, false, 1 ); // $ExpectError
	zindexOfFalsy( x.length, null, 1 ); // $ExpectError
	zindexOfFalsy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy( x.length, x, '1' ); // $ExpectError
	zindexOfFalsy( x.length, x, true ); // $ExpectError
	zindexOfFalsy( x.length, x, false ); // $ExpectError
	zindexOfFalsy( x.length, x, null ); // $ExpectError
	zindexOfFalsy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zindexOfFalsy(); // $ExpectError
	zindexOfFalsy( 3 ); // $ExpectError
	zindexOfFalsy( 3, new Complex128Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	zindexOfFalsy( 3, new Complex128Array( [ 1.0, 2.0, 3.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy.ndarray( '1', x, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( true, x, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( false, x, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( null, x, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy.ndarray( x.length, '1', 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, true, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, false, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, null, 1 ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Complex128Array( [ 1.0, 2.0, 3.0 ] );

	zindexOfFalsy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, 1, true ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, 1, false ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, 1, null ); // $ExpectError
	zindexOfFalsy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	zindexOfFalsy.ndarray(); // $ExpectError
	zindexOfFalsy.ndarray( 3 ); // $ExpectError
	zindexOfFalsy.ndarray( 3, new Complex128Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	zindexOfFalsy.ndarray( 3, new Complex128Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	zindexOfFalsy.ndarray( 3, new Complex128Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, {} ); // $ExpectError
}

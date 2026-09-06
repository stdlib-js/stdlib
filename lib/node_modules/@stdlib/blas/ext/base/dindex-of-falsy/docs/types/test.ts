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

import dindexOfFalsy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy( '1', x, 1 ); // $ExpectError
	dindexOfFalsy( true, x, 1 ); // $ExpectError
	dindexOfFalsy( false, x, 1 ); // $ExpectError
	dindexOfFalsy( null, x, 1 ); // $ExpectError
	dindexOfFalsy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	dindexOfFalsy( x.length, '1', 1 ); // $ExpectError
	dindexOfFalsy( x.length, true, 1 ); // $ExpectError
	dindexOfFalsy( x.length, false, 1 ); // $ExpectError
	dindexOfFalsy( x.length, null, 1 ); // $ExpectError
	dindexOfFalsy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy( x.length, x, '1' ); // $ExpectError
	dindexOfFalsy( x.length, x, true ); // $ExpectError
	dindexOfFalsy( x.length, x, false ); // $ExpectError
	dindexOfFalsy( x.length, x, null ); // $ExpectError
	dindexOfFalsy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dindexOfFalsy(); // $ExpectError
	dindexOfFalsy( 3 ); // $ExpectError
	dindexOfFalsy( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dindexOfFalsy( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy.ndarray( '1', x, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( true, x, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( false, x, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( null, x, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	dindexOfFalsy.ndarray( x.length, '1', 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, true, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, false, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, null, 1 ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfFalsy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, 1, true ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, 1, false ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, 1, null ); // $ExpectError
	dindexOfFalsy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	dindexOfFalsy.ndarray(); // $ExpectError
	dindexOfFalsy.ndarray( 3 ); // $ExpectError
	dindexOfFalsy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dindexOfFalsy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	dindexOfFalsy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, 0 ); // $ExpectError
}

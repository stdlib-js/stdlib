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

import dlastIndexOfFalsy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy( '1', x, 1 ); // $ExpectError
	dlastIndexOfFalsy( true, x, 1 ); // $ExpectError
	dlastIndexOfFalsy( false, x, 1 ); // $ExpectError
	dlastIndexOfFalsy( null, x, 1 ); // $ExpectError
	dlastIndexOfFalsy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	dlastIndexOfFalsy( x.length, '1', 1 ); // $ExpectError
	dlastIndexOfFalsy( x.length, true, 1 ); // $ExpectError
	dlastIndexOfFalsy( x.length, false, 1 ); // $ExpectError
	dlastIndexOfFalsy( x.length, null, 1 ); // $ExpectError
	dlastIndexOfFalsy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy( x.length, x, '1' ); // $ExpectError
	dlastIndexOfFalsy( x.length, x, true ); // $ExpectError
	dlastIndexOfFalsy( x.length, x, false ); // $ExpectError
	dlastIndexOfFalsy( x.length, x, null ); // $ExpectError
	dlastIndexOfFalsy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dlastIndexOfFalsy(); // $ExpectError
	dlastIndexOfFalsy( 3 ); // $ExpectError
	dlastIndexOfFalsy( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dlastIndexOfFalsy( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy.ndarray( '1', x, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( true, x, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( false, x, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( null, x, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	dlastIndexOfFalsy.ndarray( x.length, '1', 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, true, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, false, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, null, 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dlastIndexOfFalsy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, 1, true ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, 1, false ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, 1, null ); // $ExpectError
	dlastIndexOfFalsy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	dlastIndexOfFalsy.ndarray(); // $ExpectError
	dlastIndexOfFalsy.ndarray( 3 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dlastIndexOfFalsy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	dlastIndexOfFalsy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, {} ); // $ExpectError
}

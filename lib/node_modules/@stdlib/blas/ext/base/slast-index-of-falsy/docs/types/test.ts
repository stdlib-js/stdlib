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

import slastIndexOfFalsy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy( '1', x, 1 ); // $ExpectError
	slastIndexOfFalsy( true, x, 1 ); // $ExpectError
	slastIndexOfFalsy( false, x, 1 ); // $ExpectError
	slastIndexOfFalsy( null, x, 1 ); // $ExpectError
	slastIndexOfFalsy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	slastIndexOfFalsy( x.length, '1', 1 ); // $ExpectError
	slastIndexOfFalsy( x.length, true, 1 ); // $ExpectError
	slastIndexOfFalsy( x.length, false, 1 ); // $ExpectError
	slastIndexOfFalsy( x.length, null, 1 ); // $ExpectError
	slastIndexOfFalsy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy( x.length, x, '1' ); // $ExpectError
	slastIndexOfFalsy( x.length, x, true ); // $ExpectError
	slastIndexOfFalsy( x.length, x, false ); // $ExpectError
	slastIndexOfFalsy( x.length, x, null ); // $ExpectError
	slastIndexOfFalsy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	slastIndexOfFalsy(); // $ExpectError
	slastIndexOfFalsy( 3 ); // $ExpectError
	slastIndexOfFalsy( 3, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	slastIndexOfFalsy( 3, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy.ndarray( '1', x, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( true, x, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( false, x, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( null, x, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	slastIndexOfFalsy.ndarray( x.length, '1', 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, true, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, false, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, null, 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOfFalsy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, 1, true ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, 1, false ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, 1, null ); // $ExpectError
	slastIndexOfFalsy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	slastIndexOfFalsy.ndarray(); // $ExpectError
	slastIndexOfFalsy.ndarray( 3 ); // $ExpectError
	slastIndexOfFalsy.ndarray( 3, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	slastIndexOfFalsy.ndarray( 3, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	slastIndexOfFalsy.ndarray( 3, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, {} ); // $ExpectError
}

/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import slastIndexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf( x.length, 2.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf( '1', 2.0, x, 1 ); // $ExpectError
	slastIndexOf( true, 2.0, x, 1 ); // $ExpectError
	slastIndexOf( false, 2.0, x, 1 ); // $ExpectError
	slastIndexOf( null, 2.0, x, 1 ); // $ExpectError
	slastIndexOf( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf( x.length, '1', x, 1 ); // $ExpectError
	slastIndexOf( x.length, true, x, 1 ); // $ExpectError
	slastIndexOf( x.length, false, x, 1 ); // $ExpectError
	slastIndexOf( x.length, null, x, 1 ); // $ExpectError
	slastIndexOf( x.length, {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	slastIndexOf( 3, 1.0, '1', 1 ); // $ExpectError
	slastIndexOf( 3, 1.0, true, 1 ); // $ExpectError
	slastIndexOf( 3, 1.0, false, 1 ); // $ExpectError
	slastIndexOf( 3, 1.0, null, 1 ); // $ExpectError
	slastIndexOf( 3, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf( x.length, 2.0, x, '1' ); // $ExpectError
	slastIndexOf( x.length, 2.0, x, true ); // $ExpectError
	slastIndexOf( x.length, 2.0, x, false ); // $ExpectError
	slastIndexOf( x.length, 2.0, x, null ); // $ExpectError
	slastIndexOf( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	slastIndexOf(); // $ExpectError
	slastIndexOf( 3, 2.0 ); // $ExpectError
	slastIndexOf( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	slastIndexOf( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf.ndarray( x.length, '1', x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, true, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, false, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, null, x, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	slastIndexOf.ndarray( 3, 1.0, '1', 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( 3, 1.0, true, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( 3, 1.0, false, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( 3, 1.0, null, 1, 1 ); // $ExpectError
	slastIndexOf.ndarray( 3, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	slastIndexOf.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	slastIndexOf.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	slastIndexOf.ndarray(); // $ExpectError
	slastIndexOf.ndarray( 3, 2.0 ); // $ExpectError
	slastIndexOf.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	slastIndexOf.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	slastIndexOf.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, 0 ); // $ExpectError
}

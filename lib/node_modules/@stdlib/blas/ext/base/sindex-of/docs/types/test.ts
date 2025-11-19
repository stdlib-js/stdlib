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

import sindexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf( x.length, 2.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf( '1', 2.0, x, 1 ); // $ExpectError
	sindexOf( true, 2.0, x, 1 ); // $ExpectError
	sindexOf( false, 2.0, x, 1 ); // $ExpectError
	sindexOf( null, 2.0, x, 1 ); // $ExpectError
	sindexOf( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf( x.length, '1', x, 1 ); // $ExpectError
	sindexOf( x.length, true, x, 1 ); // $ExpectError
	sindexOf( x.length, false, x, 1 ); // $ExpectError
	sindexOf( x.length, null, x, 1 ); // $ExpectError
	sindexOf( x.length, {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	sindexOf( x.length, 1.0, '1', 1 ); // $ExpectError
	sindexOf( x.length, 1.0, true, 1 ); // $ExpectError
	sindexOf( x.length, 1.0, false, 1 ); // $ExpectError
	sindexOf( x.length, 1.0, null, 1 ); // $ExpectError
	sindexOf( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf( x.length, 2.0, x, '1' ); // $ExpectError
	sindexOf( x.length, 2.0, x, true ); // $ExpectError
	sindexOf( x.length, 2.0, x, false ); // $ExpectError
	sindexOf( x.length, 2.0, x, null ); // $ExpectError
	sindexOf( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sindexOf(); // $ExpectError
	sindexOf( 3, 2.0 ); // $ExpectError
	sindexOf( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	sindexOf( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf.ndarray( x.length, '1', x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, true, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, false, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, null, x, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	sindexOf.ndarray( x.length, 1.0, '1', 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOf.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	sindexOf.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	sindexOf.ndarray(); // $ExpectError
	sindexOf.ndarray( 3, 2.0 ); // $ExpectError
	sindexOf.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	sindexOf.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	sindexOf.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, 0 ); // $ExpectError
}

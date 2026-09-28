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

import sindexOfNotEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual( x.length, 2.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual( '1', 2.0, x, 1 ); // $ExpectError
	sindexOfNotEqual( true, 2.0, x, 1 ); // $ExpectError
	sindexOfNotEqual( false, 2.0, x, 1 ); // $ExpectError
	sindexOfNotEqual( null, 2.0, x, 1 ); // $ExpectError
	sindexOfNotEqual( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual( x.length, '1', x, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, true, x, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, false, x, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, null, x, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	sindexOfNotEqual( x.length, 1.0, '1', 1 ); // $ExpectError
	sindexOfNotEqual( x.length, 1.0, true, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, 1.0, false, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, 1.0, null, 1 ); // $ExpectError
	sindexOfNotEqual( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual( x.length, 2.0, x, '1' ); // $ExpectError
	sindexOfNotEqual( x.length, 2.0, x, true ); // $ExpectError
	sindexOfNotEqual( x.length, 2.0, x, false ); // $ExpectError
	sindexOfNotEqual( x.length, 2.0, x, null ); // $ExpectError
	sindexOfNotEqual( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sindexOfNotEqual(); // $ExpectError
	sindexOfNotEqual( 3, 2.0 ); // $ExpectError
	sindexOfNotEqual( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	sindexOfNotEqual( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual.ndarray( x.length, '1', x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, true, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, false, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, null, x, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	sindexOfNotEqual.ndarray( x.length, 1.0, '1', 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sindexOfNotEqual.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	sindexOfNotEqual.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	sindexOfNotEqual.ndarray(); // $ExpectError
	sindexOfNotEqual.ndarray( 3, 2.0 ); // $ExpectError
	sindexOfNotEqual.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	sindexOfNotEqual.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	sindexOfNotEqual.ndarray( 3, 2.0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, {} ); // $ExpectError
}

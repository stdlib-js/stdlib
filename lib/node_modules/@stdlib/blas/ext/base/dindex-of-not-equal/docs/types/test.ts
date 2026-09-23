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

import dindexOfNotEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual( x.length, 2.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual( '1', 2.0, x, 1 ); // $ExpectError
	dindexOfNotEqual( true, 2.0, x, 1 ); // $ExpectError
	dindexOfNotEqual( false, 2.0, x, 1 ); // $ExpectError
	dindexOfNotEqual( null, 2.0, x, 1 ); // $ExpectError
	dindexOfNotEqual( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual( x.length, '1', x, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, true, x, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, false, x, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, null, x, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	dindexOfNotEqual( x.length, 1.0, '1', 1 ); // $ExpectError
	dindexOfNotEqual( x.length, 1.0, true, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, 1.0, false, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, 1.0, null, 1 ); // $ExpectError
	dindexOfNotEqual( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual( x.length, 2.0, x, '1' ); // $ExpectError
	dindexOfNotEqual( x.length, 2.0, x, true ); // $ExpectError
	dindexOfNotEqual( x.length, 2.0, x, false ); // $ExpectError
	dindexOfNotEqual( x.length, 2.0, x, null ); // $ExpectError
	dindexOfNotEqual( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dindexOfNotEqual(); // $ExpectError
	dindexOfNotEqual( 3, 2.0 ); // $ExpectError
	dindexOfNotEqual( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dindexOfNotEqual( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual.ndarray( x.length, '1', x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, true, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, false, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, null, x, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	dindexOfNotEqual.ndarray( x.length, 1.0, '1', 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfNotEqual.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	dindexOfNotEqual.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	dindexOfNotEqual.ndarray(); // $ExpectError
	dindexOfNotEqual.ndarray( 3, 2.0 ); // $ExpectError
	dindexOfNotEqual.ndarray( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dindexOfNotEqual.ndarray( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	dindexOfNotEqual.ndarray( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, {} ); // $ExpectError
}

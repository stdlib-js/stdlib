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

import dindexOfTruthy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy( '1', x, 1 ); // $ExpectError
	dindexOfTruthy( true, x, 1 ); // $ExpectError
	dindexOfTruthy( false, x, 1 ); // $ExpectError
	dindexOfTruthy( null, x, 1 ); // $ExpectError
	dindexOfTruthy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	dindexOfTruthy( x.length, '1', 1 ); // $ExpectError
	dindexOfTruthy( x.length, true, 1 ); // $ExpectError
	dindexOfTruthy( x.length, false, 1 ); // $ExpectError
	dindexOfTruthy( x.length, null, 1 ); // $ExpectError
	dindexOfTruthy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy( x.length, x, '1' ); // $ExpectError
	dindexOfTruthy( x.length, x, true ); // $ExpectError
	dindexOfTruthy( x.length, x, false ); // $ExpectError
	dindexOfTruthy( x.length, x, null ); // $ExpectError
	dindexOfTruthy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	dindexOfTruthy(); // $ExpectError
	dindexOfTruthy( 3 ); // $ExpectError
	dindexOfTruthy( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dindexOfTruthy( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy.ndarray( '1', x, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( true, x, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( false, x, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( null, x, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	dindexOfTruthy.ndarray( x.length, '1', 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, true, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, false, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, null, 1 ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dindexOfTruthy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, 1, true ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, 1, false ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, 1, null ); // $ExpectError
	dindexOfTruthy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	dindexOfTruthy.ndarray(); // $ExpectError
	dindexOfTruthy.ndarray( 3 ); // $ExpectError
	dindexOfTruthy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	dindexOfTruthy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	dindexOfTruthy.ndarray( 3, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, 0 ); // $ExpectError
}

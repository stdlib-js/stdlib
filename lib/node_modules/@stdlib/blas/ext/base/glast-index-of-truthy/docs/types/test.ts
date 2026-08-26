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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import glastIndexOfTruthy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy( x.length, x, 1 ); // $ExpectType number
	glastIndexOfTruthy( x.length, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy( '1', x, 1 ); // $ExpectError
	glastIndexOfTruthy( true, x, 1 ); // $ExpectError
	glastIndexOfTruthy( false, x, 1 ); // $ExpectError
	glastIndexOfTruthy( null, x, 1 ); // $ExpectError
	glastIndexOfTruthy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	glastIndexOfTruthy( x.length, 1, 1 ); // $ExpectError
	glastIndexOfTruthy( x.length, true, 1 ); // $ExpectError
	glastIndexOfTruthy( x.length, false, 1 ); // $ExpectError
	glastIndexOfTruthy( x.length, null, 1 ); // $ExpectError
	glastIndexOfTruthy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy( x.length, x, '1' ); // $ExpectError
	glastIndexOfTruthy( x.length, x, true ); // $ExpectError
	glastIndexOfTruthy( x.length, x, false ); // $ExpectError
	glastIndexOfTruthy( x.length, x, null ); // $ExpectError
	glastIndexOfTruthy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	glastIndexOfTruthy(); // $ExpectError
	glastIndexOfTruthy( 3 ); // $ExpectError
	glastIndexOfTruthy( 3, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	glastIndexOfTruthy( 3, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
	glastIndexOfTruthy.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy.ndarray( '1', x, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( true, x, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( false, x, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( null, x, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	glastIndexOfTruthy.ndarray( x.length, 1, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, true, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, false, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, null, 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOfTruthy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, 1, true ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, 1, false ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, 1, null ); // $ExpectError
	glastIndexOfTruthy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	glastIndexOfTruthy.ndarray(); // $ExpectError
	glastIndexOfTruthy.ndarray( 3 ); // $ExpectError
	glastIndexOfTruthy.ndarray( 3, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	glastIndexOfTruthy.ndarray( 3, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	glastIndexOfTruthy.ndarray( 3, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

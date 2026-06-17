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
import gindexOfTruthy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy( x.length, x, 1 ); // $ExpectType number
	gindexOfTruthy( x.length, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy( '1', x, 1 ); // $ExpectError
	gindexOfTruthy( true, x, 1 ); // $ExpectError
	gindexOfTruthy( false, x, 1 ); // $ExpectError
	gindexOfTruthy( null, x, 1 ); // $ExpectError
	gindexOfTruthy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	gindexOfTruthy( x.length, 1, 1 ); // $ExpectError
	gindexOfTruthy( x.length, true, 1 ); // $ExpectError
	gindexOfTruthy( x.length, false, 1 ); // $ExpectError
	gindexOfTruthy( x.length, null, 1 ); // $ExpectError
	gindexOfTruthy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy( x.length, x, '1' ); // $ExpectError
	gindexOfTruthy( x.length, x, true ); // $ExpectError
	gindexOfTruthy( x.length, x, false ); // $ExpectError
	gindexOfTruthy( x.length, x, null ); // $ExpectError
	gindexOfTruthy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOfTruthy(); // $ExpectError
	gindexOfTruthy( 3 ); // $ExpectError
	gindexOfTruthy( 3, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfTruthy( 3, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
	gindexOfTruthy.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy.ndarray( '1', x, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( true, x, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( false, x, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( null, x, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	gindexOfTruthy.ndarray( x.length, 1, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, true, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, false, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, null, 1 ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfTruthy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, 1, true ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, 1, false ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, 1, null ); // $ExpectError
	gindexOfTruthy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOfTruthy.ndarray(); // $ExpectError
	gindexOfTruthy.ndarray( 3 ); // $ExpectError
	gindexOfTruthy.ndarray( 3, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfTruthy.ndarray( 3, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOfTruthy.ndarray( 3, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

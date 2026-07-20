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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gindexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf( x.length, 2.0, x, 1 ); // $ExpectType number
	gindexOf( x.length, 2.0, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf( '1', 2.0, x, 1 ); // $ExpectError
	gindexOf( true, 2.0, x, 1 ); // $ExpectError
	gindexOf( false, 2.0, x, 1 ); // $ExpectError
	gindexOf( null, 2.0, x, 1 ); // $ExpectError
	gindexOf( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	gindexOf( x.length, 1.0, '1', 1 ); // $ExpectError
	gindexOf( x.length, 1.0, true, 1 ); // $ExpectError
	gindexOf( x.length, 1.0, false, 1 ); // $ExpectError
	gindexOf( x.length, 1.0, null, 1 ); // $ExpectError
	gindexOf( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf( x.length, 2.0, x, '1' ); // $ExpectError
	gindexOf( x.length, 2.0, x, true ); // $ExpectError
	gindexOf( x.length, 2.0, x, false ); // $ExpectError
	gindexOf( x.length, 2.0, x, null ); // $ExpectError
	gindexOf( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOf(); // $ExpectError
	gindexOf( 3, 2.0 ); // $ExpectError
	gindexOf( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOf( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
	gindexOf.ndarray( x.length, 2.0, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	gindexOf.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	gindexOf.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	gindexOf.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	gindexOf.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	gindexOf.ndarray( x.length, 1.0, '1', 1, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOf.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	gindexOf.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOf.ndarray(); // $ExpectError
	gindexOf.ndarray( 3, 2.0 ); // $ExpectError
	gindexOf.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOf.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOf.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0, 0 ); // $ExpectError
}

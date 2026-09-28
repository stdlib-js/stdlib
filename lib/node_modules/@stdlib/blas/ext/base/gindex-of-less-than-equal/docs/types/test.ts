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
import gindexOfLessThanEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual( x.length, 2.0, x, 1 ); // $ExpectType number
	gindexOfLessThanEqual( x.length, 2.0, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual( '1', 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqual( true, 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqual( false, 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqual( null, 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqual( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	gindexOfLessThanEqual( x.length, 1.0, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual( x.length, 1.0, true, 1 ); // $ExpectError
	gindexOfLessThanEqual( x.length, 1.0, false, 1 ); // $ExpectError
	gindexOfLessThanEqual( x.length, 1.0, null, 1 ); // $ExpectError
	gindexOfLessThanEqual( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual( x.length, 2.0, x, '1' ); // $ExpectError
	gindexOfLessThanEqual( x.length, 2.0, x, true ); // $ExpectError
	gindexOfLessThanEqual( x.length, 2.0, x, false ); // $ExpectError
	gindexOfLessThanEqual( x.length, 2.0, x, null ); // $ExpectError
	gindexOfLessThanEqual( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOfLessThanEqual(); // $ExpectError
	gindexOfLessThanEqual( 3, 2.0 ); // $ExpectError
	gindexOfLessThanEqual( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfLessThanEqual( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
	gindexOfLessThanEqual.ndarray( x.length, 2.0, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	gindexOfLessThanEqual.ndarray( x.length, 1.0, 1, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	gindexOfLessThanEqual.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOfLessThanEqual.ndarray(); // $ExpectError
	gindexOfLessThanEqual.ndarray( 3, 2.0 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfLessThanEqual.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOfLessThanEqual.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

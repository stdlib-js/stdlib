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
import gindexOfGreaterThanEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual( x.length, 2.0, x, 1 ); // $ExpectType number
	gindexOfGreaterThanEqual( x.length, 2.0, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual( '1', 2.0, x, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( true, 2.0, x, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( false, 2.0, x, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( null, 2.0, x, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	gindexOfGreaterThanEqual( x.length, 1.0, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 1.0, true, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 1.0, false, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 1.0, null, 1 ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual( x.length, 2.0, x, '1' ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 2.0, x, true ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 2.0, x, false ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 2.0, x, null ); // $ExpectError
	gindexOfGreaterThanEqual( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOfGreaterThanEqual(); // $ExpectError
	gindexOfGreaterThanEqual( 3, 2.0 ); // $ExpectError
	gindexOfGreaterThanEqual( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfGreaterThanEqual( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	gindexOfGreaterThanEqual.ndarray( x.length, 1.0, 1, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOfGreaterThanEqual.ndarray(); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( 3, 2.0 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOfGreaterThanEqual.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

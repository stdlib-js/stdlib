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
import gindexOfLessThanEqualSorted = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 ); // $ExpectType number
	gindexOfLessThanEqualSorted( x.length, 2.0, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted( '1', 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( true, 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( false, 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( null, 2.0, x, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	gindexOfLessThanEqualSorted( x.length, 1.0, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 1.0, true, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 1.0, false, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 1.0, null, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted( x.length, 2.0, x, '1' ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 2.0, x, true ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 2.0, x, false ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 2.0, x, null ); // $ExpectError
	gindexOfLessThanEqualSorted( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOfLessThanEqualSorted(); // $ExpectError
	gindexOfLessThanEqualSorted( 3, 2.0 ); // $ExpectError
	gindexOfLessThanEqualSorted( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfLessThanEqualSorted( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// The function has an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	gindexOfLessThanEqualSorted.ndarray( x.length, 1.0, 1, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 1.0, true, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 1.0, false, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 1.0, null, 1, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOfLessThanEqualSorted.ndarray(); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( 3, 2.0 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOfLessThanEqualSorted.ndarray( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

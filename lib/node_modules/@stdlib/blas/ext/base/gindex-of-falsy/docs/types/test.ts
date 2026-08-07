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
import gindexOfFalsy = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy( x.length, x, 1 ); // $ExpectType number
	gindexOfFalsy( x.length, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy( '1', x, 1 ); // $ExpectError
	gindexOfFalsy( true, x, 1 ); // $ExpectError
	gindexOfFalsy( false, x, 1 ); // $ExpectError
	gindexOfFalsy( null, x, 1 ); // $ExpectError
	gindexOfFalsy( {}, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	gindexOfFalsy( x.length, 1, 1 ); // $ExpectError
	gindexOfFalsy( x.length, true, 1 ); // $ExpectError
	gindexOfFalsy( x.length, false, 1 ); // $ExpectError
	gindexOfFalsy( x.length, null, 1 ); // $ExpectError
	gindexOfFalsy( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy( x.length, x, '1' ); // $ExpectError
	gindexOfFalsy( x.length, x, true ); // $ExpectError
	gindexOfFalsy( x.length, x, false ); // $ExpectError
	gindexOfFalsy( x.length, x, null ); // $ExpectError
	gindexOfFalsy( x.length, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOfFalsy(); // $ExpectError
	gindexOfFalsy( 3 ); // $ExpectError
	gindexOfFalsy( 3, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfFalsy( 3, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy.ndarray( x.length, x, 1, 0 ); // $ExpectType number
	gindexOfFalsy.ndarray( x.length, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy.ndarray( '1', x, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( true, x, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( false, x, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( null, x, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( {}, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	gindexOfFalsy.ndarray( x.length, 1, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, true, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, false, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, null, 1, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy.ndarray( x.length, x, '1', 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, true, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, false, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, null, 1 ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gindexOfFalsy.ndarray( x.length, x, 1, '1' ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, 1, true ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, 1, false ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, 1, null ); // $ExpectError
	gindexOfFalsy.ndarray( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOfFalsy.ndarray(); // $ExpectError
	gindexOfFalsy.ndarray( 3 ); // $ExpectError
	gindexOfFalsy.ndarray( 3, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfFalsy.ndarray( 3, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOfFalsy.ndarray( 3, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

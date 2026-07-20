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
import glastIndexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf( x.length, 2.0, x, 1 ); // $ExpectType number
	glastIndexOf( x.length, 2.0, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf( '1', 2.0, x, 1 ); // $ExpectError
	glastIndexOf( true, 2.0, x, 1 ); // $ExpectError
	glastIndexOf( false, 2.0, x, 1 ); // $ExpectError
	glastIndexOf( null, 2.0, x, 1 ); // $ExpectError
	glastIndexOf( {}, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	glastIndexOf( 3, 1.0, 1, 1 ); // $ExpectError
	glastIndexOf( 3, 1.0, true, 1 ); // $ExpectError
	glastIndexOf( 3, 1.0, false, 1 ); // $ExpectError
	glastIndexOf( 3, 1.0, null, 1 ); // $ExpectError
	glastIndexOf( 3, 1.0, void 0, 1 ); // $ExpectError
	glastIndexOf( 3, 1.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf( x.length, 2.0, x, '1' ); // $ExpectError
	glastIndexOf( x.length, 2.0, x, true ); // $ExpectError
	glastIndexOf( x.length, 2.0, x, false ); // $ExpectError
	glastIndexOf( x.length, 2.0, x, null ); // $ExpectError
	glastIndexOf( x.length, 2.0, x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	glastIndexOf(); // $ExpectError
	glastIndexOf( 3, 2.0 ); // $ExpectError
	glastIndexOf( 3, 2.0, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	glastIndexOf( 3, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectType number
	glastIndexOf.ndarray( x.length, 2.0, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf.ndarray( '1', 2.0, x, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( true, 2.0, x, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( false, 2.0, x, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( null, 2.0, x, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( {}, 2.0, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	glastIndexOf.ndarray( 3, 1.0, 1, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( 3, 1.0, true, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( 3, 1.0, false, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( 3, 1.0, null, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( 3, 1.0, void 0, 1, 1 ); // $ExpectError
	glastIndexOf.ndarray( 3, 1.0, {}, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf.ndarray( x.length, 2.0, x, '1', 1 ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, true, 1 ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, false, 1 ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, null, 1 ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];

	glastIndexOf.ndarray( x.length, 2.0, x, 1, '1' ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, 1, true ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, 1, false ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, 1, null ); // $ExpectError
	glastIndexOf.ndarray( x.length, 2.0, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	glastIndexOf.ndarray(); // $ExpectError
	glastIndexOf.ndarray( 3, 2.0 ); // $ExpectError
	glastIndexOf.ndarray( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ) ); // $ExpectError
	glastIndexOf.ndarray( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 ); // $ExpectError
	glastIndexOf.ndarray( 3, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, 0 ); // $ExpectError
}

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
import gindexOfAlmostSameValue = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue( x.length, 2.0, 1, x, 1 ); // $ExpectType number
	gindexOfAlmostSameValue( x.length, 2.0, 1, new AccessorArray( x ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue( '1', 2.0, 1, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( true, 2.0, 1, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( false, 2.0, 1, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( null, 2.0, 1, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( {}, 2.0, 1, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( ( x: number ): number => x, 2.0, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue( x.length, 2.0, '1', x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, true, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, false, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, null, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, {}, x, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	gindexOfAlmostSameValue( x.length, 1.0, 1, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 1.0, 1, true, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 1.0, 1, false, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 1.0, 1, null, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 1.0, 1, {}, 1 ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 1.0, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue( x.length, 2.0, 1, x, '1' ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, 1, x, true ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, 1, x, false ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, 1, x, null ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, 1, x, {} ); // $ExpectError
	gindexOfAlmostSameValue( x.length, 2.0, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	gindexOfAlmostSameValue(); // $ExpectError
	gindexOfAlmostSameValue( 3, 2.0 ); // $ExpectError
	gindexOfAlmostSameValue( 3, 2.0, 1 ); // $ExpectError
	gindexOfAlmostSameValue( 3, 2.0, 1, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfAlmostSameValue( 3, 2.0, 1, [ 1.0, 2.0, 3.0 ], 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, 0 ); // $ExpectType number
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, new AccessorArray( x ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue.ndarray( '1', 2.0, 1, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( true, 2.0, 1, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( false, 2.0, 1, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( null, 2.0, 1, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( {}, 2.0, 1, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( ( x: number ): number => x, 2.0, 1, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue.ndarray( x.length, 2.0, '1', x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, true, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, false, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, null, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, {}, x, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, ( x: number ): number => x, x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a collection...
{
	gindexOfAlmostSameValue.ndarray( x.length, 1.0, 1, 1, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 1.0, 1, true, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 1.0, 1, false, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 1.0, 1, null, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 1.0, 1, {}, 1, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 1.0, 1, ( x: number ): number => x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, '1', 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, true, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, false, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, null, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, {}, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, '1' ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, true ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, false ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, null ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, {} ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( x.length, 2.0, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	gindexOfAlmostSameValue.ndarray(); // $ExpectError
	gindexOfAlmostSameValue.ndarray( 3, 2.0 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( 3, 2.0, 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( 3, 2.0, 1, [ 1.0, 2.0, 3.0 ] ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( 3, 2.0, 1, [ 1.0, 2.0, 3.0 ], 1 ); // $ExpectError
	gindexOfAlmostSameValue.ndarray( 3, 2.0, 1, [ 1.0, 2.0, 3.0 ], 1, 0, {} ); // $ExpectError
}

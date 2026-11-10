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
import gfillLessThanEqual = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual( x.length, 0.0, 5.0, x, 1 ); // $ExpectType Float64Array
	gfillLessThanEqual( x.length, 0.0, 5.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual( '10', 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( true, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( false, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( null, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( undefined, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( [], 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( {}, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual( ( x: number ): number => x, 0.0, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual( x.length, 0.0, 5.0, 10, 1 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, true, 1 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, false, 1 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, null, 1 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, undefined, 1 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual( x.length, 0.0, 5.0, x, '10' ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, true ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, false ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, null ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, undefined ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, [] ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, {} ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual(); // $ExpectError
	gfillLessThanEqual( x.length ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0 ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x ); // $ExpectError
	gfillLessThanEqual( x.length, 0.0, 5.0, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0 ); // $ExpectType Float64Array
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual.ndarray( '10', 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( true, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( false, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( null, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( undefined, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( [], 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( {}, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( ( x: number ): number => x, 0.0, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, 10, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, true, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, false, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, null, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, undefined, 1, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, '10', 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, true, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, false, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, null, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, undefined, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, [], 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, {}, 0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, '10' ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, true ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, false ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, null ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, undefined ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, [] ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, {} ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillLessThanEqual.ndarray(); // $ExpectError
	gfillLessThanEqual.ndarray( x.length ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillLessThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0, {} ); // $ExpectError
}

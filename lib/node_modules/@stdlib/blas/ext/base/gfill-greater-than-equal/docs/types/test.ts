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
import gfillGreaterThanEqual = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, 1 ); // $ExpectType Float64Array
	gfillGreaterThanEqual( x.length, 0.0, 5.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual( '10', 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( true, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( false, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( null, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( undefined, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( [], 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( {}, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual( ( x: number ): number => x, 0.0, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual( x.length, 0.0, 5.0, 10, 1 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, true, 1 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, false, 1 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, null, 1 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, undefined, 1 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, '10' ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, true ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, false ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, null ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, undefined ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, [] ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, {} ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual(); // $ExpectError
	gfillGreaterThanEqual( x.length ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0 ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x ); // $ExpectError
	gfillGreaterThanEqual( x.length, 0.0, 5.0, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0 ); // $ExpectType Float64Array
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual.ndarray( '10', 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( true, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( false, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( null, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( undefined, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( [], 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( {}, 0.0, 5.0, x, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( ( x: number ): number => x, 0.0, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, 10, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, true, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, false, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, null, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, undefined, 1, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, '10', 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, true, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, false, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, null, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, undefined, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, [], 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, {}, 0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, '10' ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, true ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, false ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, null ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, undefined ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, [] ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, {} ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillGreaterThanEqual.ndarray(); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1 ); // $ExpectError
	gfillGreaterThanEqual.ndarray( x.length, 0.0, 5.0, x, 1, 0, {} ); // $ExpectError
}

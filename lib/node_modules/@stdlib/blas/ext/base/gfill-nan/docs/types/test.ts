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
import gfillNaN = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gfillNaN( x.length, 0.0, x, 1 ); // $ExpectType Float64Array
	gfillNaN( x.length, 0.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillNaN( '10', 0.0, x, 1 ); // $ExpectError
	gfillNaN( true, 0.0, x, 1 ); // $ExpectError
	gfillNaN( false, 0.0, x, 1 ); // $ExpectError
	gfillNaN( null, 0.0, x, 1 ); // $ExpectError
	gfillNaN( undefined, 0.0, x, 1 ); // $ExpectError
	gfillNaN( [], 0.0, x, 1 ); // $ExpectError
	gfillNaN( {}, 0.0, x, 1 ); // $ExpectError
	gfillNaN( ( x: number ): number => x, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillNaN( x.length, 0.0, 10, 1 ); // $ExpectError
	gfillNaN( x.length, 0.0, true, 1 ); // $ExpectError
	gfillNaN( x.length, 0.0, false, 1 ); // $ExpectError
	gfillNaN( x.length, 0.0, null, 1 ); // $ExpectError
	gfillNaN( x.length, 0.0, undefined, 1 ); // $ExpectError
	gfillNaN( x.length, 0.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillNaN( x.length, 0.0, x, '10' ); // $ExpectError
	gfillNaN( x.length, 0.0, x, true ); // $ExpectError
	gfillNaN( x.length, 0.0, x, false ); // $ExpectError
	gfillNaN( x.length, 0.0, x, null ); // $ExpectError
	gfillNaN( x.length, 0.0, x, undefined ); // $ExpectError
	gfillNaN( x.length, 0.0, x, [] ); // $ExpectError
	gfillNaN( x.length, 0.0, x, {} ); // $ExpectError
	gfillNaN( x.length, 0.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillNaN(); // $ExpectError
	gfillNaN( x.length ); // $ExpectError
	gfillNaN( x.length, 0.0 ); // $ExpectError
	gfillNaN( x.length, 0.0, x ); // $ExpectError
	gfillNaN( x.length, 0.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gfillNaN.ndarray( x.length, 0.0, x, 1, 0 ); // $ExpectType Float64Array
	gfillNaN.ndarray( x.length, 0.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillNaN.ndarray( '10', 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( true, 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( false, 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( null, 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( undefined, 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( [], 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( {}, 0.0, x, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( ( x: number ): number => x, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillNaN.ndarray( x.length, 0.0, 10, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, true, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, false, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, null, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, undefined, 1, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillNaN.ndarray( x.length, 0.0, x, '10', 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, true, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, false, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, null, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, undefined, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, [], 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, {}, 0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillNaN.ndarray( x.length, 0.0, x, 1, '10' ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, true ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, false ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, null ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, undefined ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, [] ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, {} ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillNaN.ndarray(); // $ExpectError
	gfillNaN.ndarray( x.length ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1 ); // $ExpectError
	gfillNaN.ndarray( x.length, 0.0, x, 1, 0, 10 ); // $ExpectError
}

/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
import gfill = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gfill( x.length, 5.0, x, 1 ); // $ExpectType Collection<number>
	gfill( x.length, 5.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfill( '10', 5.0, x, 1 ); // $ExpectError
	gfill( true, 5.0, x, 1 ); // $ExpectError
	gfill( false, 5.0, x, 1 ); // $ExpectError
	gfill( null, 5.0, x, 1 ); // $ExpectError
	gfill( undefined, 5.0, x, 1 ); // $ExpectError
	gfill( [], 5.0, x, 1 ); // $ExpectError
	gfill( {}, 5.0, x, 1 ); // $ExpectError
	gfill( ( x: number ): number => x, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfill( x.length, 5.0, 10, 1 ); // $ExpectError
	gfill( x.length, 5.0, true, 1 ); // $ExpectError
	gfill( x.length, 5.0, false, 1 ); // $ExpectError
	gfill( x.length, 5.0, null, 1 ); // $ExpectError
	gfill( x.length, 5.0, undefined, 1 ); // $ExpectError
	gfill( x.length, 5.0, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfill( x.length, 5.0, x, '10' ); // $ExpectError
	gfill( x.length, 5.0, x, true ); // $ExpectError
	gfill( x.length, 5.0, x, false ); // $ExpectError
	gfill( x.length, 5.0, x, null ); // $ExpectError
	gfill( x.length, 5.0, x, undefined ); // $ExpectError
	gfill( x.length, 5.0, x, [] ); // $ExpectError
	gfill( x.length, 5.0, x, {} ); // $ExpectError
	gfill( x.length, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfill(); // $ExpectError
	gfill( x.length ); // $ExpectError
	gfill( x.length, 5.0 ); // $ExpectError
	gfill( x.length, 5.0, x ); // $ExpectError
	gfill( x.length, 5.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gfill.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectType Collection<number>
	gfill.ndarray( x.length, 5.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArrayLike<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfill.ndarray( '10', 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( true, 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( false, 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( null, 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( undefined, 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( [], 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( {}, 5.0, x, 1, 0 ); // $ExpectError
	gfill.ndarray( ( x: number ): number => x, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfill.ndarray( x.length, 5.0, 10, 1, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, true, 1, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, false, 1, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, null, 1, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, undefined, 1, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfill.ndarray( x.length, 5.0, x, '10', 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, true, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, false, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, null, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, undefined, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, [], 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, {}, 0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfill.ndarray( x.length, 5.0, x, 1, '10' ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, true ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, false ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, null ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, undefined ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, [] ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, {} ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfill.ndarray(); // $ExpectError
	gfill.ndarray( x.length ); // $ExpectError
	gfill.ndarray( x.length, 5.0 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	gfill.ndarray( x.length, 5.0, x, 1, 0, 10 ); // $ExpectError
}

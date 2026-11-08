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
import gminheapSiftDown = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown( x.length, 0, 1.0, x, 1 ); // $ExpectType Float64Array
	gminheapSiftDown( x.length, 0, 1.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown( '10', 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( true, 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( false, 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( null, 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( undefined, 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( [], 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( {}, 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( ( x: number ): number => x, 0, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown( x.length, '10', 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, true, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, false, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, null, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, undefined, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, [], 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, {}, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, ( x: number ): number => x, 1.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown( x.length, 0, '10', x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, true, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, false, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, null, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, undefined, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, [], x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, {}, x, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown( x.length, 0, 1.0, 10, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, '10', 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, true, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, false, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, null, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, undefined, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, [ '1' ], 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, {}, 1 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown( x.length, 0, 1.0, x, '10' ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, true ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, false ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, null ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, undefined ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, [] ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, {} ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown(); // $ExpectError
	gminheapSiftDown( x.length ); // $ExpectError
	gminheapSiftDown( x.length, 0 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0 ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x ); // $ExpectError
	gminheapSiftDown( x.length, 0, 1.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, 0 ); // $ExpectType Float64Array
	gminheapSiftDown.ndarray( x.length, 0, 1.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( '10', 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( true, 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( false, 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( null, 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( undefined, 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( [], 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( {}, 0, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( ( x: number ): number => x, 0, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( x.length, '10', 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, true, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, false, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, null, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, undefined, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, [], 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, {}, 1.0, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, ( x: number ): number => x, 1.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( x.length, 0, '10', x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, true, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, false, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, null, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, undefined, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, [], x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, {}, x, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( x.length, 0, 1.0, 10, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, '10', 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, true, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, false, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, null, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, undefined, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, [ '1' ], 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, {}, 1, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, '10', 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, true, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, false, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, null, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, undefined, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, [], 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, {}, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, '10' ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, true ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, false ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, null ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, undefined ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, [] ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, {} ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gminheapSiftDown.ndarray(); // $ExpectError
	gminheapSiftDown.ndarray( x.length ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1 ); // $ExpectError
	gminheapSiftDown.ndarray( x.length, 0, 1.0, x, 1, 0, 10 ); // $ExpectError
}

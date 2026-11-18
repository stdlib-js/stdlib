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
import gaxpb = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );

	gaxpb( x.length, 5.0, 3.0, x, 1 ); // $ExpectType Float64Array
	gaxpb( x.length, 5.0, 3.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb( '10', 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( true, 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( false, 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( null, 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( undefined, 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( [], 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( {}, 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb( ( x: number ): number => x, 5.0, 3.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb( x.length, '10', 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, true, 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, false, 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, null, 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, undefined, 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, [], 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, {}, 3.0, x, 1 ); // $ExpectError
	gaxpb( x.length, ( x: number ): number => x, 3.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb( x.length, 5.0, '10', x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, true, x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, false, x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, null, x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, undefined, x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, [], x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, {}, x, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gaxpb( x.length, 5.0, 3.0, 10, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, '10', 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, true, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, false, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, null, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, undefined, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, [ '1' ], 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, {}, 1 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb( x.length, 5.0, 3.0, x, '10' ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, true ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, false ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, null ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, undefined ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, [] ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, {} ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gaxpb(); // $ExpectError
	gaxpb( x.length ); // $ExpectError
	gaxpb( x.length, 5.0 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0 ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x ); // $ExpectError
	gaxpb( x.length, 5.0, 3.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0 ); // $ExpectType Float64Array
	gaxpb.ndarray( x.length, 5.0, 3.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( '10', 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( true, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( false, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( null, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( undefined, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( [], 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( {}, 5.0, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( ( x: number ): number => x, 5.0, 3.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( x.length, '10', 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, true, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, false, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, null, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, undefined, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, [], 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, {}, 3.0, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, ( x: number ): number => x, 3.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( x.length, 5.0, '10', x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, true, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, false, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, null, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, undefined, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, [], x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, {}, x, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( x.length, 5.0, 3.0, 10, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, '10', 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, true, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, false, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, null, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, undefined, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, [ '1' ], 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, {}, 1, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( x.length, 5.0, 3.0, x, '10', 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, true, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, false, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, null, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, undefined, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, [], 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, {}, 0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, '10' ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, true ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, false ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, null ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, undefined ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, [] ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, {} ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gaxpb.ndarray(); // $ExpectError
	gaxpb.ndarray( x.length ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1 ); // $ExpectError
	gaxpb.ndarray( x.length, 5.0, 3.0, x, 1, 0, 10 ); // $ExpectError
}

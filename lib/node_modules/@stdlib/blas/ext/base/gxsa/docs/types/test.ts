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
import gxsa = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );

	gxsa( x.length, 5.0, x, 1 ); // $ExpectType Float64Array
	gxsa( x.length, 5.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa( '10', 5.0, x, 1 ); // $ExpectError
	gxsa( true, 5.0, x, 1 ); // $ExpectError
	gxsa( false, 5.0, x, 1 ); // $ExpectError
	gxsa( null, 5.0, x, 1 ); // $ExpectError
	gxsa( undefined, 5.0, x, 1 ); // $ExpectError
	gxsa( [], 5.0, x, 1 ); // $ExpectError
	gxsa( {}, 5.0, x, 1 ); // $ExpectError
	gxsa( ( x: number ): number => x, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa( x.length, '10', x, 1 ); // $ExpectError
	gxsa( x.length, true, x, 1 ); // $ExpectError
	gxsa( x.length, false, x, 1 ); // $ExpectError
	gxsa( x.length, null, x, 1 ); // $ExpectError
	gxsa( x.length, undefined, x, 1 ); // $ExpectError
	gxsa( x.length, [], x, 1 ); // $ExpectError
	gxsa( x.length, {}, x, 1 ); // $ExpectError
	gxsa( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gxsa( x.length, 5.0, 10, 1 ); // $ExpectError
	gxsa( x.length, 5.0, '10', 1 ); // $ExpectError
	gxsa( x.length, 5.0, true, 1 ); // $ExpectError
	gxsa( x.length, 5.0, false, 1 ); // $ExpectError
	gxsa( x.length, 5.0, null, 1 ); // $ExpectError
	gxsa( x.length, 5.0, undefined, 1 ); // $ExpectError
	gxsa( x.length, 5.0, [ '1' ], 1 ); // $ExpectError
	gxsa( x.length, 5.0, {}, 1 ); // $ExpectError
	gxsa( x.length, 5.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa( x.length, 5.0, x, '10' ); // $ExpectError
	gxsa( x.length, 5.0, x, true ); // $ExpectError
	gxsa( x.length, 5.0, x, false ); // $ExpectError
	gxsa( x.length, 5.0, x, null ); // $ExpectError
	gxsa( x.length, 5.0, x, undefined ); // $ExpectError
	gxsa( x.length, 5.0, x, [] ); // $ExpectError
	gxsa( x.length, 5.0, x, {} ); // $ExpectError
	gxsa( x.length, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gxsa(); // $ExpectError
	gxsa( x.length ); // $ExpectError
	gxsa( x.length, 5.0 ); // $ExpectError
	gxsa( x.length, 5.0, x ); // $ExpectError
	gxsa( x.length, 5.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectType Float64Array
	gxsa.ndarray( x.length, 5.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray( '10', 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( true, 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( false, 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( null, 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( undefined, 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( [], 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( {}, 5.0, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( ( x: number ): number => x, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray( x.length, 5.0, 10, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, '10', 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, true, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, false, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, null, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, undefined, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, [ '1' ], 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, {}, 1, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray( x.length, 5.0, x, '10', 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, true, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, false, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, null, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, undefined, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, [], 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, {}, 0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray( x.length, 5.0, x, 1, '10' ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, true ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, false ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, null ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, undefined ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, [] ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, {} ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gxsa.ndarray(); // $ExpectError
	gxsa.ndarray( x.length ); // $ExpectError
	gxsa.ndarray( x.length, 5.0 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	gxsa.ndarray( x.length, 5.0, x, 1, 0, 10 ); // $ExpectError
}

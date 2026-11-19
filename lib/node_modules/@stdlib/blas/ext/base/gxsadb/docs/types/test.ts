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
import gxsadb = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );

	gxsadb( x.length, 3.0, 2.0, x, 1 ); // $ExpectType Float64Array
	gxsadb( x.length, 3.0, 2.0, new AccessorArray( x ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb( '10', 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( true, 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( false, 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( null, 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( undefined, 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( [], 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( {}, 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb( ( x: number ): number => x, 3.0, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb( x.length, '10', 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, true, 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, false, 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, null, 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, undefined, 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, [], 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, {}, 2.0, x, 1 ); // $ExpectError
	gxsadb( x.length, ( x: number ): number => x, 2.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb( x.length, 3.0, '10', x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, true, x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, false, x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, null, x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, undefined, x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, [], x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, {}, x, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gxsadb( x.length, 3.0, 2.0, 10, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, '10', 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, true, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, false, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, null, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, undefined, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, [ '1' ], 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, {}, 1 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb( x.length, 3.0, 2.0, x, '10' ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, true ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, false ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, null ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, undefined ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, [] ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, {} ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gxsadb(); // $ExpectError
	gxsadb( x.length ); // $ExpectError
	gxsadb( x.length, 3.0 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0 ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x ); // $ExpectError
	gxsadb( x.length, 3.0, 2.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0 ); // $ExpectType Float64Array
	gxsadb.ndarray( x.length, 3.0, 2.0, new AccessorArray( x ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( '10', 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( true, 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( false, 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( null, 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( undefined, 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( [], 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( {}, 3.0, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( ( x: number ): number => x, 3.0, 2.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( x.length, '10', 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, true, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, false, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, null, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, undefined, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, [], 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, {}, 2.0, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, ( x: number ): number => x, 2.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( x.length, 3.0, '10', x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, true, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, false, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, null, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, undefined, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, [], x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, {}, x, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( x.length, 3.0, 2.0, 10, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, '10', 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, true, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, false, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, null, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, undefined, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, [ '1' ], 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, {}, 1, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( x.length, 3.0, 2.0, x, '10', 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, true, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, false, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, null, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, undefined, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, [], 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, {}, 0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, '10' ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, true ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, false ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, null ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, undefined ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, [] ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, {} ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gxsadb.ndarray(); // $ExpectError
	gxsadb.ndarray( x.length ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1 ); // $ExpectError
	gxsadb.ndarray( x.length, 3.0, 2.0, x, 1, 0, 10 ); // $ExpectError
}

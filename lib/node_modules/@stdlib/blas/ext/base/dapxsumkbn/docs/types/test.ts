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

import dapxsumkbn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn( x.length, 5.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn( '10', 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( true, 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( false, 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( null, 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( undefined, 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( [], 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( {}, 5.0, x, 1 ); // $ExpectError
	dapxsumkbn( ( x: number ): number => x, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn( x.length, '10', x, 1 ); // $ExpectError
	dapxsumkbn( x.length, true, x, 1 ); // $ExpectError
	dapxsumkbn( x.length, false, x, 1 ); // $ExpectError
	dapxsumkbn( x.length, null, x, 1 ); // $ExpectError
	dapxsumkbn( x.length, undefined, x, 1 ); // $ExpectError
	dapxsumkbn( x.length, [], x, 1 ); // $ExpectError
	dapxsumkbn( x.length, {}, x, 1 ); // $ExpectError
	dapxsumkbn( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dapxsumkbn( x.length, 5.0, 10, 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, '10', 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, true, 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, false, 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, null, 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, undefined, 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, [], 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, {}, 1 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn( x.length, 5.0, x, '10' ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, true ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, false ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, null ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, undefined ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, [] ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, {} ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dapxsumkbn(); // $ExpectError
	dapxsumkbn( x.length ); // $ExpectError
	dapxsumkbn( x.length, 5.0 ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x ); // $ExpectError
	dapxsumkbn( x.length, 5.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray( '10', 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( true, 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( false, 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( null, 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( undefined, 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( [], 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( {}, 5.0, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( ( x: number ): number => x, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray( x.length, 5.0, 10, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, '10', 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, true, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, false, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, null, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, undefined, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, [], 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, {}, 1, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray( x.length, 5.0, x, '10', 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, true, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, false, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, null, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, undefined, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, [], 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, {}, 0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray( x.length, 5.0, x, 1, '10' ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, true ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, false ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, null ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, undefined ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, [] ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, {} ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dapxsumkbn.ndarray(); // $ExpectError
	dapxsumkbn.ndarray( x.length ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	dapxsumkbn.ndarray( x.length, 5.0, x, 1, 0, 10 ); // $ExpectError
}

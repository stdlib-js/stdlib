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

import dlaruv = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv( seed, 3, x ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not an Int32Array...
{
	const x = new Float64Array( 3 );

	dlaruv( '5', 3, x ); // $ExpectError
	dlaruv( 5, 3, x ); // $ExpectError
	dlaruv( true, 3, x ); // $ExpectError
	dlaruv( false, 3, x ); // $ExpectError
	dlaruv( null, 3, x ); // $ExpectError
	dlaruv( void 0, 3, x ); // $ExpectError
	dlaruv( [], 3, x ); // $ExpectError
	dlaruv( {}, 3, x ); // $ExpectError
	dlaruv( ( x: number ): number => x, 3, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv( seed, '5', x ); // $ExpectError
	dlaruv( seed, true, x ); // $ExpectError
	dlaruv( seed, false, x ); // $ExpectError
	dlaruv( seed, null, x ); // $ExpectError
	dlaruv( seed, void 0, x ); // $ExpectError
	dlaruv( seed, [], x ); // $ExpectError
	dlaruv( seed, {}, x ); // $ExpectError
	dlaruv( seed, ( x: number ): number => x, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );

	dlaruv( seed, 3, '5' ); // $ExpectError
	dlaruv( seed, 3, 5 ); // $ExpectError
	dlaruv( seed, 3, true ); // $ExpectError
	dlaruv( seed, 3, false ); // $ExpectError
	dlaruv( seed, 3, null ); // $ExpectError
	dlaruv( seed, 3, void 0 ); // $ExpectError
	dlaruv( seed, 3, [] ); // $ExpectError
	dlaruv( seed, 3, {} ); // $ExpectError
	dlaruv( seed, 3, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv(); // $ExpectError
	dlaruv( seed ); // $ExpectError
	dlaruv( seed, 3 ); // $ExpectError
	dlaruv( seed, 3, x, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray( 3, seed, 1, 0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray( '5', seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( true, seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( false, seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( null, seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( void 0, seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( [], seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( {}, seed, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( ( x: number ): number => x, seed, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not an Int32Array...
{
	const x = new Float64Array( 3 );

	dlaruv.ndarray( 3, '5', 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, 5, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, true, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, false, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, null, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, void 0, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, [], 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, {}, 1, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, ( x: number ): number => x, 1, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray( 3, seed, '5', 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, true, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, false, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, null, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, void 0, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, [], 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, {}, 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, ( x: number ): number => x, 0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray( 3, seed, 1, '5', x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, true, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, false, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, null, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, void 0, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, [], x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, {}, x, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );

	dlaruv.ndarray( 3, seed, 1, 0, '5', 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, 5, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, true, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, false, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, null, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, void 0, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, [], 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, {}, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray( 3, seed, 1, 0, x, '5', 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, true, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, false, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, null, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, void 0, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, [], 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, {}, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray( 3, seed, 1, 0, x, 1, '5' ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, true ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, false ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, null ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, void 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, [] ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, {} ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const seed = new Int32Array( [ 0, 1, 2, 3 ] );
	const x = new Float64Array( 3 );

	dlaruv.ndarray(); // $ExpectError
	dlaruv.ndarray( 3 ); // $ExpectError
	dlaruv.ndarray( 3, seed ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1 ); // $ExpectError
	dlaruv.ndarray( 3, seed, 1, 0, x, 1, 0, 10 ); // $ExpectError
}

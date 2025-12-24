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

import dnanstdevtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk( '10', 1, x, 1 ); // $ExpectError
	dnanstdevtk( true, 1, x, 1 ); // $ExpectError
	dnanstdevtk( false, 1, x, 1 ); // $ExpectError
	dnanstdevtk( null, 1, x, 1 ); // $ExpectError
	dnanstdevtk( undefined, 1, x, 1 ); // $ExpectError
	dnanstdevtk( [], 1, x, 1 ); // $ExpectError
	dnanstdevtk( {}, 1, x, 1 ); // $ExpectError
	dnanstdevtk( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk( x.length, '10', x, 1 ); // $ExpectError
	dnanstdevtk( x.length, true, x, 1 ); // $ExpectError
	dnanstdevtk( x.length, false, x, 1 ); // $ExpectError
	dnanstdevtk( x.length, null, x, 1 ); // $ExpectError
	dnanstdevtk( x.length, undefined, x, 1 ); // $ExpectError
	dnanstdevtk( x.length, [], x, 1 ); // $ExpectError
	dnanstdevtk( x.length, {}, x, 1 ); // $ExpectError
	dnanstdevtk( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanstdevtk( x.length, 1, 10, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, '10', 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, true, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, false, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, null, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, undefined, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, [], 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, {}, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk( x.length, 1, x, '10' ); // $ExpectError
	dnanstdevtk( x.length, 1, x, true ); // $ExpectError
	dnanstdevtk( x.length, 1, x, false ); // $ExpectError
	dnanstdevtk( x.length, 1, x, null ); // $ExpectError
	dnanstdevtk( x.length, 1, x, undefined ); // $ExpectError
	dnanstdevtk( x.length, 1, x, [] ); // $ExpectError
	dnanstdevtk( x.length, 1, x, {} ); // $ExpectError
	dnanstdevtk( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanstdevtk(); // $ExpectError
	dnanstdevtk( x.length ); // $ExpectError
	dnanstdevtk( x.length, 1 ); // $ExpectError
	dnanstdevtk( x.length, 1, x ); // $ExpectError
	dnanstdevtk( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanstdevtk.ndarray(); // $ExpectError
	dnanstdevtk.ndarray( x.length ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dnanstdevtk.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

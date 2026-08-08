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

import dnanstdev = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dnanstdev( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev( '10', 1, x, 1 ); // $ExpectError
	dnanstdev( true, 1, x, 1 ); // $ExpectError
	dnanstdev( false, 1, x, 1 ); // $ExpectError
	dnanstdev( null, 1, x, 1 ); // $ExpectError
	dnanstdev( undefined, 1, x, 1 ); // $ExpectError
	dnanstdev( [], 1, x, 1 ); // $ExpectError
	dnanstdev( {}, 1, x, 1 ); // $ExpectError
	dnanstdev( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev( x.length, '10', x, 1 ); // $ExpectError
	dnanstdev( x.length, true, x, 1 ); // $ExpectError
	dnanstdev( x.length, false, x, 1 ); // $ExpectError
	dnanstdev( x.length, null, x, 1 ); // $ExpectError
	dnanstdev( x.length, undefined, x, 1 ); // $ExpectError
	dnanstdev( x.length, [], x, 1 ); // $ExpectError
	dnanstdev( x.length, {}, x, 1 ); // $ExpectError
	dnanstdev( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanstdev( x.length, 1, 10, 1 ); // $ExpectError
	dnanstdev( x.length, 1, '10', 1 ); // $ExpectError
	dnanstdev( x.length, 1, true, 1 ); // $ExpectError
	dnanstdev( x.length, 1, false, 1 ); // $ExpectError
	dnanstdev( x.length, 1, null, 1 ); // $ExpectError
	dnanstdev( x.length, 1, undefined, 1 ); // $ExpectError
	dnanstdev( x.length, 1, [], 1 ); // $ExpectError
	dnanstdev( x.length, 1, {}, 1 ); // $ExpectError
	dnanstdev( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev( x.length, 1, x, '10' ); // $ExpectError
	dnanstdev( x.length, 1, x, true ); // $ExpectError
	dnanstdev( x.length, 1, x, false ); // $ExpectError
	dnanstdev( x.length, 1, x, null ); // $ExpectError
	dnanstdev( x.length, 1, x, undefined ); // $ExpectError
	dnanstdev( x.length, 1, x, [] ); // $ExpectError
	dnanstdev( x.length, 1, x, {} ); // $ExpectError
	dnanstdev( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanstdev(); // $ExpectError
	dnanstdev( x.length ); // $ExpectError
	dnanstdev( x.length, 1 ); // $ExpectError
	dnanstdev( x.length, 1, x ); // $ExpectError
	dnanstdev( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanstdev.ndarray(); // $ExpectError
	dnanstdev.ndarray( x.length ); // $ExpectError
	dnanstdev.ndarray( x.length, 1 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dnanstdev.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

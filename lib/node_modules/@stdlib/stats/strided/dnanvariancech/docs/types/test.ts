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

import dnanvariancech = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech( '10', 1, x, 1 ); // $ExpectError
	dnanvariancech( true, 1, x, 1 ); // $ExpectError
	dnanvariancech( false, 1, x, 1 ); // $ExpectError
	dnanvariancech( null, 1, x, 1 ); // $ExpectError
	dnanvariancech( undefined, 1, x, 1 ); // $ExpectError
	dnanvariancech( [], 1, x, 1 ); // $ExpectError
	dnanvariancech( {}, 1, x, 1 ); // $ExpectError
	dnanvariancech( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech( x.length, '10', x, 1 ); // $ExpectError
	dnanvariancech( x.length, true, x, 1 ); // $ExpectError
	dnanvariancech( x.length, false, x, 1 ); // $ExpectError
	dnanvariancech( x.length, null, x, 1 ); // $ExpectError
	dnanvariancech( x.length, undefined, x, 1 ); // $ExpectError
	dnanvariancech( x.length, [], x, 1 ); // $ExpectError
	dnanvariancech( x.length, {}, x, 1 ); // $ExpectError
	dnanvariancech( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanvariancech( x.length, 1, 10, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, '10', 1 ); // $ExpectError
	dnanvariancech( x.length, 1, true, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, false, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, null, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, undefined, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, [], 1 ); // $ExpectError
	dnanvariancech( x.length, 1, {}, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech( x.length, 1, x, '10' ); // $ExpectError
	dnanvariancech( x.length, 1, x, true ); // $ExpectError
	dnanvariancech( x.length, 1, x, false ); // $ExpectError
	dnanvariancech( x.length, 1, x, null ); // $ExpectError
	dnanvariancech( x.length, 1, x, undefined ); // $ExpectError
	dnanvariancech( x.length, 1, x, [] ); // $ExpectError
	dnanvariancech( x.length, 1, x, {} ); // $ExpectError
	dnanvariancech( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanvariancech(); // $ExpectError
	dnanvariancech( x.length ); // $ExpectError
	dnanvariancech( x.length, 1 ); // $ExpectError
	dnanvariancech( x.length, 1, x ); // $ExpectError
	dnanvariancech( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanvariancech.ndarray(); // $ExpectError
	dnanvariancech.ndarray( x.length ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dnanvariancech.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

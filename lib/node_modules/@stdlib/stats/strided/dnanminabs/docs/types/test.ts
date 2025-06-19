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

import dnanminabs = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dnanminabs( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanminabs( '10', x, 1 ); // $ExpectError
	dnanminabs( true, x, 1 ); // $ExpectError
	dnanminabs( false, x, 1 ); // $ExpectError
	dnanminabs( null, x, 1 ); // $ExpectError
	dnanminabs( undefined, x, 1 ); // $ExpectError
	dnanminabs( [], x, 1 ); // $ExpectError
	dnanminabs( {}, x, 1 ); // $ExpectError
	dnanminabs( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanminabs( x.length, 10, 1 ); // $ExpectError
	dnanminabs( x.length, '10', 1 ); // $ExpectError
	dnanminabs( x.length, true, 1 ); // $ExpectError
	dnanminabs( x.length, false, 1 ); // $ExpectError
	dnanminabs( x.length, null, 1 ); // $ExpectError
	dnanminabs( x.length, undefined, 1 ); // $ExpectError
	dnanminabs( x.length, [], 1 ); // $ExpectError
	dnanminabs( x.length, {}, 1 ); // $ExpectError
	dnanminabs( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanminabs( x.length, x, '10' ); // $ExpectError
	dnanminabs( x.length, x, true ); // $ExpectError
	dnanminabs( x.length, x, false ); // $ExpectError
	dnanminabs( x.length, x, null ); // $ExpectError
	dnanminabs( x.length, x, undefined ); // $ExpectError
	dnanminabs( x.length, x, [] ); // $ExpectError
	dnanminabs( x.length, x, {} ); // $ExpectError
	dnanminabs( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanminabs(); // $ExpectError
	dnanminabs( x.length ); // $ExpectError
	dnanminabs( x.length, x ); // $ExpectError
	dnanminabs( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanminabs.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanminabs.ndarray( '10', x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( true, x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( false, x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( null, x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( [], x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( {}, x, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanminabs.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanminabs.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, true, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, false, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, null, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, [], 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanminabs.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, true ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, false ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, null ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, [] ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, {} ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanminabs.ndarray(); // $ExpectError
	dnanminabs.ndarray( x.length ); // $ExpectError
	dnanminabs.ndarray( x.length, x ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1 ); // $ExpectError
	dnanminabs.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

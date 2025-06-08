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

import dsempn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dsempn( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn( '10', 1, x, 1 ); // $ExpectError
	dsempn( true, 1, x, 1 ); // $ExpectError
	dsempn( false, 1, x, 1 ); // $ExpectError
	dsempn( null, 1, x, 1 ); // $ExpectError
	dsempn( undefined, 1, x, 1 ); // $ExpectError
	dsempn( [], 1, x, 1 ); // $ExpectError
	dsempn( {}, 1, x, 1 ); // $ExpectError
	dsempn( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn( x.length, '10', x, 1 ); // $ExpectError
	dsempn( x.length, true, x, 1 ); // $ExpectError
	dsempn( x.length, false, x, 1 ); // $ExpectError
	dsempn( x.length, null, x, 1 ); // $ExpectError
	dsempn( x.length, undefined, x, 1 ); // $ExpectError
	dsempn( x.length, [], x, 1 ); // $ExpectError
	dsempn( x.length, {}, x, 1 ); // $ExpectError
	dsempn( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dsempn( x.length, 1, 10, 1 ); // $ExpectError
	dsempn( x.length, 1, '10', 1 ); // $ExpectError
	dsempn( x.length, 1, true, 1 ); // $ExpectError
	dsempn( x.length, 1, false, 1 ); // $ExpectError
	dsempn( x.length, 1, null, 1 ); // $ExpectError
	dsempn( x.length, 1, undefined, 1 ); // $ExpectError
	dsempn( x.length, 1, [], 1 ); // $ExpectError
	dsempn( x.length, 1, {}, 1 ); // $ExpectError
	dsempn( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn( x.length, 1, x, '10' ); // $ExpectError
	dsempn( x.length, 1, x, true ); // $ExpectError
	dsempn( x.length, 1, x, false ); // $ExpectError
	dsempn( x.length, 1, x, null ); // $ExpectError
	dsempn( x.length, 1, x, undefined ); // $ExpectError
	dsempn( x.length, 1, x, [] ); // $ExpectError
	dsempn( x.length, 1, x, {} ); // $ExpectError
	dsempn( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dsempn(); // $ExpectError
	dsempn( x.length ); // $ExpectError
	dsempn( x.length, 1 ); // $ExpectError
	dsempn( x.length, 1, x ); // $ExpectError
	dsempn( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dsempn.ndarray(); // $ExpectError
	dsempn.ndarray( x.length ); // $ExpectError
	dsempn.ndarray( x.length, 1 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dsempn.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

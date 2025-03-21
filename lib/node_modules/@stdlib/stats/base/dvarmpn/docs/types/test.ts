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

import dvarmpn = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dvarmpn( x.length, 0.0, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn( '10', 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( true, 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( false, 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( null, 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( undefined, 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( [], 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( {}, 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn( ( x: number ): number => x, 0.0, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn( x.length, '10', 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, true, 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, false, 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, null, 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, undefined, 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, [], 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, {}, 1, x, 1 ); // $ExpectError
	dvarmpn( x.length, ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn( x.length, 0.0, '10', x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, true, x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, false, x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, null, x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, undefined, x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, [], x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, {}, x, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvarmpn( x.length, 0.0, 1, 10, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, '10', 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, true, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, false, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, null, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, undefined, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, [ '1' ], 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, {}, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn( x.length, 0.0, 1, x, '10' ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, true ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, false ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, null ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, undefined ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, [] ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, {} ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dvarmpn(); // $ExpectError
	dvarmpn( x.length ); // $ExpectError
	dvarmpn( x.length, 0.0 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1 ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x ); // $ExpectError
	dvarmpn( x.length, 0.0, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( '10', 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( true, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( false, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( null, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( undefined, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( [], 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( {}, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( ( x: number ): number => x, 0.0, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( x.length, '10', 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, true, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, false, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, null, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, undefined, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, [], 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, {}, 1, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( x.length, 0.0, '10', x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, true, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, false, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, null, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, undefined, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, [], x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, {}, x, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( x.length, 0.0, 1, 10, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, '10', 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, true, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, false, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, null, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, undefined, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, [ '1' ], 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, {}, 1, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( x.length, 0.0, 1, x, '10', 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, true, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, false, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, null, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, undefined, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, [], 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, {}, 0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, '10' ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, true ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, false ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, null ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, undefined ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, [] ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, {} ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dvarmpn.ndarray(); // $ExpectError
	dvarmpn.ndarray( x.length ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1 ); // $ExpectError
	dvarmpn.ndarray( x.length, 0.0, 1, x, 1, 0, 10 ); // $ExpectError
}

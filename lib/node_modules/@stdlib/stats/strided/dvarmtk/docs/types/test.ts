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

import dvarmtk = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dvarmtk( x.length, 1, 0.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk( '10', 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( true, 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( false, 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( null, 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( undefined, 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( [], 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( {}, 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk( ( x: number ): number => x, 1, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk( x.length, '10', 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, true, 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, false, 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, null, 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, undefined, 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, [], 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, {}, 0.0, x, 1 ); // $ExpectError
	dvarmtk( x.length, ( x: number ): number => x, 0.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk( x.length, 1, '10', x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, true, x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, false, x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, null, x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, undefined, x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, [], x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, {}, x, 1 ); // $ExpectError
	dvarmtk( x.length, 1, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvarmtk( x.length, 1, 0.0, 10, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, '10', 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, true, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, false, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, null, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, undefined, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, [ '1' ], 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, {}, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk( x.length, 1, 0.0, x, '10' ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, true ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, false ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, null ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, undefined ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, [] ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, {} ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dvarmtk(); // $ExpectError
	dvarmtk( x.length ); // $ExpectError
	dvarmtk( x.length, 1 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0 ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x ); // $ExpectError
	dvarmtk( x.length, 1, 0.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( '10', 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( true, 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( false, 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( null, 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( undefined, 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( [], 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( {}, 1, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( ( x: number ): number => x, 1, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( x.length, '10', 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, true, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, false, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, null, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, undefined, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, [], 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, {}, 0.0, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, ( x: number ): number => x, 0.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( x.length, 1, '10', x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, true, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, false, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, null, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, undefined, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, [], x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, {}, x, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( x.length, 1, 0.0, 10, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, '10', 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, true, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, false, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, null, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, undefined, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, [ '1' ], 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, {}, 1, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( x.length, 1, 0.0, x, '10', 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, true, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, false, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, null, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, undefined, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, [], 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, {}, 0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, '10' ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, true ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, false ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, null ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, undefined ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, [] ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, {} ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dvarmtk.ndarray(); // $ExpectError
	dvarmtk.ndarray( x.length ); // $ExpectError
	dvarmtk.ndarray( x.length, 1 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1 ); // $ExpectError
	dvarmtk.ndarray( x.length, 1, 0.0, x, 1, 0, 10 ); // $ExpectError
}

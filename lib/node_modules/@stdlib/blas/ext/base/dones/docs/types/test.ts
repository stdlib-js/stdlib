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

import dones = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dones( x.length, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dones( '10', x, 1 ); // $ExpectError
	dones( true, x, 1 ); // $ExpectError
	dones( false, x, 1 ); // $ExpectError
	dones( null, x, 1 ); // $ExpectError
	dones( undefined, x, 1 ); // $ExpectError
	dones( [], x, 1 ); // $ExpectError
	dones( {}, x, 1 ); // $ExpectError
	dones( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dones( x.length, 10, 1 ); // $ExpectError
	dones( x.length, '10', 1 ); // $ExpectError
	dones( x.length, true, 1 ); // $ExpectError
	dones( x.length, false, 1 ); // $ExpectError
	dones( x.length, null, 1 ); // $ExpectError
	dones( x.length, undefined, 1 ); // $ExpectError
	dones( x.length, [], 1 ); // $ExpectError
	dones( x.length, {}, 1 ); // $ExpectError
	dones( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dones( x.length, x, '10' ); // $ExpectError
	dones( x.length, x, true ); // $ExpectError
	dones( x.length, x, false ); // $ExpectError
	dones( x.length, x, null ); // $ExpectError
	dones( x.length, x, undefined ); // $ExpectError
	dones( x.length, x, [] ); // $ExpectError
	dones( x.length, x, {} ); // $ExpectError
	dones( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dones(); // $ExpectError
	dones( x.length ); // $ExpectError
	dones( x.length, x ); // $ExpectError
	dones( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dones.ndarray( x.length, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dones.ndarray( '10', x, 1, 0 ); // $ExpectError
	dones.ndarray( true, x, 1, 0 ); // $ExpectError
	dones.ndarray( false, x, 1, 0 ); // $ExpectError
	dones.ndarray( null, x, 1, 0 ); // $ExpectError
	dones.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dones.ndarray( [], x, 1, 0 ); // $ExpectError
	dones.ndarray( {}, x, 1, 0 ); // $ExpectError
	dones.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dones.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dones.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dones.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dones.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dones.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dones.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dones.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dones.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dones.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dones.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dones.ndarray( x.length, x, true, 0 ); // $ExpectError
	dones.ndarray( x.length, x, false, 0 ); // $ExpectError
	dones.ndarray( x.length, x, null, 0 ); // $ExpectError
	dones.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dones.ndarray( x.length, x, [], 0 ); // $ExpectError
	dones.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dones.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dones.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dones.ndarray( x.length, x, 1, true ); // $ExpectError
	dones.ndarray( x.length, x, 1, false ); // $ExpectError
	dones.ndarray( x.length, x, 1, null ); // $ExpectError
	dones.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dones.ndarray( x.length, x, 1, [] ); // $ExpectError
	dones.ndarray( x.length, x, 1, {} ); // $ExpectError
	dones.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dones.ndarray(); // $ExpectError
	dones.ndarray( x.length ); // $ExpectError
	dones.ndarray( x.length, x ); // $ExpectError
	dones.ndarray( x.length, x, 1 ); // $ExpectError
	dones.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

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

import dvarm = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dvarm( x.length, 0.0, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm( '10', 0.0, 1, x, 1 ); // $ExpectError
	dvarm( true, 0.0, 1, x, 1 ); // $ExpectError
	dvarm( false, 0.0, 1, x, 1 ); // $ExpectError
	dvarm( null, 0.0, 1, x, 1 ); // $ExpectError
	dvarm( undefined, 0.0, 1, x, 1 ); // $ExpectError
	dvarm( [], 0.0, 1, x, 1 ); // $ExpectError
	dvarm( {}, 0.0, 1, x, 1 ); // $ExpectError
	dvarm( ( x: number ): number => x, 0.0, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm( x.length, '10', 1, x, 1 ); // $ExpectError
	dvarm( x.length, true, 1, x, 1 ); // $ExpectError
	dvarm( x.length, false, 1, x, 1 ); // $ExpectError
	dvarm( x.length, null, 1, x, 1 ); // $ExpectError
	dvarm( x.length, undefined, 1, x, 1 ); // $ExpectError
	dvarm( x.length, [], 1, x, 1 ); // $ExpectError
	dvarm( x.length, {}, 1, x, 1 ); // $ExpectError
	dvarm( x.length, ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm( x.length, 0.0, '10', x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, true, x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, false, x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, null, x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, undefined, x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, [], x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, {}, x, 1 ); // $ExpectError
	dvarm( x.length, 0.0, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvarm( x.length, 0.0, 1, 10, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, '10', 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, true, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, false, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, null, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, undefined, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, [ '1' ], 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, {}, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm( x.length, 0.0, 1, x, '10' ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, true ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, false ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, null ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, undefined ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, [] ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, {} ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dvarm(); // $ExpectError
	dvarm( x.length ); // $ExpectError
	dvarm( x.length, 0.0 ); // $ExpectError
	dvarm( x.length, 0.0, 1 ); // $ExpectError
	dvarm( x.length, 0.0, 1, x ); // $ExpectError
	dvarm( x.length, 0.0, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( x.length, 0.0, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( '10', 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( true, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( false, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( null, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( undefined, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( [], 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( {}, 0.0, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( ( x: number ): number => x, 0.0, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( x.length, '10', 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, true, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, false, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, null, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, undefined, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, [], 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, {}, 1, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( x.length, 0.0, '10', x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, true, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, false, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, null, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, undefined, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, [], x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, {}, x, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( x.length, 0.0, 1, 10, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, '10', 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, true, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, false, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, null, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, undefined, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, [ '1' ], 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, {}, 1, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( x.length, 0.0, 1, x, '10', 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, true, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, false, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, null, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, undefined, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, [], 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, {}, 0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray( x.length, 0.0, 1, x, 1, '10' ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, true ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, false ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, null ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, undefined ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, [] ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, {} ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dvarm.ndarray(); // $ExpectError
	dvarm.ndarray( x.length ); // $ExpectError
	dvarm.ndarray( x.length, 0.0 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1 ); // $ExpectError
	dvarm.ndarray( x.length, 0.0, 1, x, 1, 0, 10 ); // $ExpectError
}

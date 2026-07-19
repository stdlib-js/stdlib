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

import drange = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	drange( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	drange( '10', x, 1 ); // $ExpectError
	drange( true, x, 1 ); // $ExpectError
	drange( false, x, 1 ); // $ExpectError
	drange( null, x, 1 ); // $ExpectError
	drange( undefined, x, 1 ); // $ExpectError
	drange( [], x, 1 ); // $ExpectError
	drange( {}, x, 1 ); // $ExpectError
	drange( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	drange( x.length, 10, 1 ); // $ExpectError
	drange( x.length, '10', 1 ); // $ExpectError
	drange( x.length, true, 1 ); // $ExpectError
	drange( x.length, false, 1 ); // $ExpectError
	drange( x.length, null, 1 ); // $ExpectError
	drange( x.length, undefined, 1 ); // $ExpectError
	drange( x.length, [], 1 ); // $ExpectError
	drange( x.length, {}, 1 ); // $ExpectError
	drange( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	drange( x.length, x, '10' ); // $ExpectError
	drange( x.length, x, true ); // $ExpectError
	drange( x.length, x, false ); // $ExpectError
	drange( x.length, x, null ); // $ExpectError
	drange( x.length, x, undefined ); // $ExpectError
	drange( x.length, x, [] ); // $ExpectError
	drange( x.length, x, {} ); // $ExpectError
	drange( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	drange(); // $ExpectError
	drange( x.length ); // $ExpectError
	drange( x.length, x ); // $ExpectError
	drange( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	drange.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	drange.ndarray( '10', x, 1, 0 ); // $ExpectError
	drange.ndarray( true, x, 1, 0 ); // $ExpectError
	drange.ndarray( false, x, 1, 0 ); // $ExpectError
	drange.ndarray( null, x, 1, 0 ); // $ExpectError
	drange.ndarray( undefined, x, 1, 0 ); // $ExpectError
	drange.ndarray( [], x, 1, 0 ); // $ExpectError
	drange.ndarray( {}, x, 1, 0 ); // $ExpectError
	drange.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	drange.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	drange.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	drange.ndarray( x.length, true, 1, 0 ); // $ExpectError
	drange.ndarray( x.length, false, 1, 0 ); // $ExpectError
	drange.ndarray( x.length, null, 1, 0 ); // $ExpectError
	drange.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	drange.ndarray( x.length, [], 1, 0 ); // $ExpectError
	drange.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	drange.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	drange.ndarray( x.length, x, '10', 0 ); // $ExpectError
	drange.ndarray( x.length, x, true, 0 ); // $ExpectError
	drange.ndarray( x.length, x, false, 0 ); // $ExpectError
	drange.ndarray( x.length, x, null, 0 ); // $ExpectError
	drange.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	drange.ndarray( x.length, x, [], 0 ); // $ExpectError
	drange.ndarray( x.length, x, {}, 0 ); // $ExpectError
	drange.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	drange.ndarray( x.length, x, 1, '10' ); // $ExpectError
	drange.ndarray( x.length, x, 1, true ); // $ExpectError
	drange.ndarray( x.length, x, 1, false ); // $ExpectError
	drange.ndarray( x.length, x, 1, null ); // $ExpectError
	drange.ndarray( x.length, x, 1, undefined ); // $ExpectError
	drange.ndarray( x.length, x, 1, [] ); // $ExpectError
	drange.ndarray( x.length, x, 1, {} ); // $ExpectError
	drange.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	drange.ndarray(); // $ExpectError
	drange.ndarray( x.length ); // $ExpectError
	drange.ndarray( x.length, x ); // $ExpectError
	drange.ndarray( x.length, x, 1 ); // $ExpectError
	drange.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

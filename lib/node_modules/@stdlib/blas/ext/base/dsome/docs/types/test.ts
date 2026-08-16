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

/* eslint-disable space-in-parens */

import dsome = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float64Array( 10 );

	dsome( x.length, 5, x, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome( '10', 5, x, 1 ); // $ExpectError
	dsome( true, 5, x, 1 ); // $ExpectError
	dsome( false, 5, x, 1 ); // $ExpectError
	dsome( null, 5, x, 1 ); // $ExpectError
	dsome( undefined, 5, x, 1 ); // $ExpectError
	dsome( [], 5, x, 1 ); // $ExpectError
	dsome( {}, 5, x, 1 ); // $ExpectError
	dsome( ( x: number ): number => x, 5, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome( x.length, '5', x, 1 ); // $ExpectError
	dsome( x.length, true, x, 1 ); // $ExpectError
	dsome( x.length, false, x, 1 ); // $ExpectError
	dsome( x.length, null, x, 1 ); // $ExpectError
	dsome( x.length, undefined, x, 1 ); // $ExpectError
	dsome( x.length, [], x, 1 ); // $ExpectError
	dsome( x.length, {}, x, 1 ); // $ExpectError
	dsome( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dsome( x.length, 5, '10', 1 ); // $ExpectError
	dsome( x.length, 5, true, 1 ); // $ExpectError
	dsome( x.length, 5, false, 1 ); // $ExpectError
	dsome( x.length, 5, null, 1 ); // $ExpectError
	dsome( x.length, 5, undefined, 1 ); // $ExpectError
	dsome( x.length, 5, [], 1 ); // $ExpectError
	dsome( x.length, 5, {}, 1 ); // $ExpectError
	dsome( x.length, 5, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome( x.length, 5, x, '1' ); // $ExpectError
	dsome( x.length, 5, x, true ); // $ExpectError
	dsome( x.length, 5, x, false ); // $ExpectError
	dsome( x.length, 5, x, null ); // $ExpectError
	dsome( x.length, 5, x, undefined ); // $ExpectError
	dsome( x.length, 5, x, [] ); // $ExpectError
	dsome( x.length, 5, x, {} ); // $ExpectError
	dsome( x.length, 5, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dsome(); // $ExpectError
	dsome( x.length ); // $ExpectError
	dsome( x.length, 5 ); // $ExpectError
	dsome( x.length, 5, x ); // $ExpectError
	dsome( x.length, 5, x, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Float64Array( 10 );

	dsome.ndarray( x.length, 5, x, 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome.ndarray( '10', 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( true, 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( false, 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( null, 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( undefined, 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( [], 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( {}, 5, x, 1, 0 ); // $ExpectError
	dsome.ndarray( ( x: number ): number => x, 5, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome.ndarray( x.length, '5', x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dsome.ndarray( x.length, 5, '10', 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, true, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, false, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, null, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, undefined, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, [], 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, {}, 1, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome.ndarray( x.length, 5, x, '1', 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, true, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, false, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, null, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, undefined, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, [], 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, {}, 0 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dsome.ndarray( x.length, 5, x, 1, '0' ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, true ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, false ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, null ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, undefined ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, [] ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, {} ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dsome.ndarray(); // $ExpectError
	dsome.ndarray( x.length ); // $ExpectError
	dsome.ndarray( x.length, 5 ); // $ExpectError
	dsome.ndarray( x.length, 5, x ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1 ); // $ExpectError
	dsome.ndarray( x.length, 5, x, 1, 0, {} ); // $ExpectError
}

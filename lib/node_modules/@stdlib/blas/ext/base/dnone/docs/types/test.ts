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

import dnone = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float64Array( 10 );

	dnone( x.length, x, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnone( '10', x, 1 ); // $ExpectError
	dnone( true, x, 1 ); // $ExpectError
	dnone( false, x, 1 ); // $ExpectError
	dnone( null, x, 1 ); // $ExpectError
	dnone( undefined, x, 1 ); // $ExpectError
	dnone( [], x, 1 ); // $ExpectError
	dnone( {}, x, 1 ); // $ExpectError
	dnone( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnone( x.length, '10', 1 ); // $ExpectError
	dnone( x.length, true, 1 ); // $ExpectError
	dnone( x.length, false, 1 ); // $ExpectError
	dnone( x.length, null, 1 ); // $ExpectError
	dnone( x.length, undefined, 1 ); // $ExpectError
	dnone( x.length, [], 1 ); // $ExpectError
	dnone( x.length, {}, 1 ); // $ExpectError
	dnone( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnone( x.length, x, '1' ); // $ExpectError
	dnone( x.length, x, true ); // $ExpectError
	dnone( x.length, x, false ); // $ExpectError
	dnone( x.length, x, null ); // $ExpectError
	dnone( x.length, x, undefined ); // $ExpectError
	dnone( x.length, x, [] ); // $ExpectError
	dnone( x.length, x, {} ); // $ExpectError
	dnone( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnone(); // $ExpectError
	dnone( x.length ); // $ExpectError
	dnone( x.length, x ); // $ExpectError
	dnone( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Float64Array( 10 );

	dnone.ndarray( x.length, x, 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnone.ndarray( '10', x, 1, 0 ); // $ExpectError
	dnone.ndarray( true, x, 1, 0 ); // $ExpectError
	dnone.ndarray( false, x, 1, 0 ); // $ExpectError
	dnone.ndarray( null, x, 1, 0 ); // $ExpectError
	dnone.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dnone.ndarray( [], x, 1, 0 ); // $ExpectError
	dnone.ndarray( {}, x, 1, 0 ); // $ExpectError
	dnone.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnone.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dnone.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnone.ndarray( x.length, x, '1', 0 ); // $ExpectError
	dnone.ndarray( x.length, x, true, 0 ); // $ExpectError
	dnone.ndarray( x.length, x, false, 0 ); // $ExpectError
	dnone.ndarray( x.length, x, null, 0 ); // $ExpectError
	dnone.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dnone.ndarray( x.length, x, [], 0 ); // $ExpectError
	dnone.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dnone.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnone.ndarray( x.length, x, 1, '0' ); // $ExpectError
	dnone.ndarray( x.length, x, 1, true ); // $ExpectError
	dnone.ndarray( x.length, x, 1, false ); // $ExpectError
	dnone.ndarray( x.length, x, 1, null ); // $ExpectError
	dnone.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dnone.ndarray( x.length, x, 1, [] ); // $ExpectError
	dnone.ndarray( x.length, x, 1, {} ); // $ExpectError
	dnone.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnone.ndarray(); // $ExpectError
	dnone.ndarray( x.length ); // $ExpectError
	dnone.ndarray( x.length, x ); // $ExpectError
	dnone.ndarray( x.length, x, 1 ); // $ExpectError
	dnone.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

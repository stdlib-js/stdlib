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

import dany = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = new Float64Array( 10 );

	dany( x.length, x, 1 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dany( '10', x, 1 ); // $ExpectError
	dany( true, x, 1 ); // $ExpectError
	dany( false, x, 1 ); // $ExpectError
	dany( null, x, 1 ); // $ExpectError
	dany( undefined, x, 1 ); // $ExpectError
	dany( [], x, 1 ); // $ExpectError
	dany( {}, x, 1 ); // $ExpectError
	dany( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dany( x.length, '10', 1 ); // $ExpectError
	dany( x.length, true, 1 ); // $ExpectError
	dany( x.length, false, 1 ); // $ExpectError
	dany( x.length, null, 1 ); // $ExpectError
	dany( x.length, undefined, 1 ); // $ExpectError
	dany( x.length, [], 1 ); // $ExpectError
	dany( x.length, {}, 1 ); // $ExpectError
	dany( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dany( x.length, x, '1' ); // $ExpectError
	dany( x.length, x, true ); // $ExpectError
	dany( x.length, x, false ); // $ExpectError
	dany( x.length, x, null ); // $ExpectError
	dany( x.length, x, undefined ); // $ExpectError
	dany( x.length, x, [] ); // $ExpectError
	dany( x.length, x, {} ); // $ExpectError
	dany( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dany(); // $ExpectError
	dany( x.length ); // $ExpectError
	dany( x.length, x ); // $ExpectError
	dany( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a boolean...
{
	const x = new Float64Array( 10 );

	dany.ndarray( x.length, x, 1, 0 ); // $ExpectType boolean
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dany.ndarray( '10', x, 1, 0 ); // $ExpectError
	dany.ndarray( true, x, 1, 0 ); // $ExpectError
	dany.ndarray( false, x, 1, 0 ); // $ExpectError
	dany.ndarray( null, x, 1, 0 ); // $ExpectError
	dany.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dany.ndarray( [], x, 1, 0 ); // $ExpectError
	dany.ndarray( {}, x, 1, 0 ); // $ExpectError
	dany.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dany.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dany.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dany.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dany.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dany.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dany.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dany.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dany.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dany.ndarray( x.length, x, '1', 0 ); // $ExpectError
	dany.ndarray( x.length, x, true, 0 ); // $ExpectError
	dany.ndarray( x.length, x, false, 0 ); // $ExpectError
	dany.ndarray( x.length, x, null, 0 ); // $ExpectError
	dany.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dany.ndarray( x.length, x, [], 0 ); // $ExpectError
	dany.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dany.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dany.ndarray( x.length, x, 1, '0' ); // $ExpectError
	dany.ndarray( x.length, x, 1, true ); // $ExpectError
	dany.ndarray( x.length, x, 1, false ); // $ExpectError
	dany.ndarray( x.length, x, 1, null ); // $ExpectError
	dany.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dany.ndarray( x.length, x, 1, [] ); // $ExpectError
	dany.ndarray( x.length, x, 1, {} ); // $ExpectError
	dany.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dany.ndarray(); // $ExpectError
	dany.ndarray( x.length ); // $ExpectError
	dany.ndarray( x.length, x ); // $ExpectError
	dany.ndarray( x.length, x, 1 ); // $ExpectError
	dany.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

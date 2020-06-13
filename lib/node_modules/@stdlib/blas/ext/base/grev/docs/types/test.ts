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

import grev = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );

	grev( x.length, x, 1 ); // $ExpectType NumericArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	grev( '10', x, 1 ); // $ExpectError
	grev( true, x, 1 ); // $ExpectError
	grev( false, x, 1 ); // $ExpectError
	grev( null, x, 1 ); // $ExpectError
	grev( undefined, x, 1 ); // $ExpectError
	grev( [], x, 1 ); // $ExpectError
	grev( {}, x, 1 ); // $ExpectError
	grev( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	grev( x.length, 10, 1 ); // $ExpectError
	grev( x.length, '10', 1 ); // $ExpectError
	grev( x.length, true, 1 ); // $ExpectError
	grev( x.length, false, 1 ); // $ExpectError
	grev( x.length, null, 1 ); // $ExpectError
	grev( x.length, undefined, 1 ); // $ExpectError
	grev( x.length, [ '1' ], 1 ); // $ExpectError
	grev( x.length, {}, 1 ); // $ExpectError
	grev( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	grev( x.length, x, '10' ); // $ExpectError
	grev( x.length, x, true ); // $ExpectError
	grev( x.length, x, false ); // $ExpectError
	grev( x.length, x, null ); // $ExpectError
	grev( x.length, x, undefined ); // $ExpectError
	grev( x.length, x, [] ); // $ExpectError
	grev( x.length, x, {} ); // $ExpectError
	grev( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	grev(); // $ExpectError
	grev( x.length ); // $ExpectError
	grev( x.length, x ); // $ExpectError
	grev( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );

	grev.ndarray( x.length, x, 1, 0 ); // $ExpectType NumericArray
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	grev.ndarray( '10', x, 1, 0 ); // $ExpectError
	grev.ndarray( true, x, 1, 0 ); // $ExpectError
	grev.ndarray( false, x, 1, 0 ); // $ExpectError
	grev.ndarray( null, x, 1, 0 ); // $ExpectError
	grev.ndarray( undefined, x, 1, 0 ); // $ExpectError
	grev.ndarray( [], x, 1, 0 ); // $ExpectError
	grev.ndarray( {}, x, 1, 0 ); // $ExpectError
	grev.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	grev.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	grev.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	grev.ndarray( x.length, true, 1, 0 ); // $ExpectError
	grev.ndarray( x.length, false, 1, 0 ); // $ExpectError
	grev.ndarray( x.length, null, 1, 0 ); // $ExpectError
	grev.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	grev.ndarray( x.length, [ '1' ], 1, 0 ); // $ExpectError
	grev.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	grev.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	grev.ndarray( x.length, x, '10', 0 ); // $ExpectError
	grev.ndarray( x.length, x, true, 0 ); // $ExpectError
	grev.ndarray( x.length, x, false, 0 ); // $ExpectError
	grev.ndarray( x.length, x, null, 0 ); // $ExpectError
	grev.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	grev.ndarray( x.length, x, [], 0 ); // $ExpectError
	grev.ndarray( x.length, x, {}, 0 ); // $ExpectError
	grev.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	grev.ndarray( x.length, x, 1, '10' ); // $ExpectError
	grev.ndarray( x.length, x, 1, true ); // $ExpectError
	grev.ndarray( x.length, x, 1, false ); // $ExpectError
	grev.ndarray( x.length, x, 1, null ); // $ExpectError
	grev.ndarray( x.length, x, 1, undefined ); // $ExpectError
	grev.ndarray( x.length, x, 1, [] ); // $ExpectError
	grev.ndarray( x.length, x, 1, {} ); // $ExpectError
	grev.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	grev.ndarray(); // $ExpectError
	grev.ndarray( x.length ); // $ExpectError
	grev.ndarray( x.length, x ); // $ExpectError
	grev.ndarray( x.length, x, 1 ); // $ExpectError
	grev.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

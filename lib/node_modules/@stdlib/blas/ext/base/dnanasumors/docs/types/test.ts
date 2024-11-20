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

import dnanasumors = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	dnanasumors( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanasumors( '10', x, 1 ); // $ExpectError
	dnanasumors( true, x, 1 ); // $ExpectError
	dnanasumors( false, x, 1 ); // $ExpectError
	dnanasumors( null, x, 1 ); // $ExpectError
	dnanasumors( undefined, x, 1 ); // $ExpectError
	dnanasumors( [], x, 1 ); // $ExpectError
	dnanasumors( {}, x, 1 ); // $ExpectError
	dnanasumors( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanasumors( x.length, 10, 1 ); // $ExpectError
	dnanasumors( x.length, '10', 1 ); // $ExpectError
	dnanasumors( x.length, true, 1 ); // $ExpectError
	dnanasumors( x.length, false, 1 ); // $ExpectError
	dnanasumors( x.length, null, 1 ); // $ExpectError
	dnanasumors( x.length, undefined, 1 ); // $ExpectError
	dnanasumors( x.length, [], 1 ); // $ExpectError
	dnanasumors( x.length, {}, 1 ); // $ExpectError
	dnanasumors( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanasumors( x.length, x, '10' ); // $ExpectError
	dnanasumors( x.length, x, true ); // $ExpectError
	dnanasumors( x.length, x, false ); // $ExpectError
	dnanasumors( x.length, x, null ); // $ExpectError
	dnanasumors( x.length, x, undefined ); // $ExpectError
	dnanasumors( x.length, x, [] ); // $ExpectError
	dnanasumors( x.length, x, {} ); // $ExpectError
	dnanasumors( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanasumors(); // $ExpectError
	dnanasumors( x.length ); // $ExpectError
	dnanasumors( x.length, x ); // $ExpectError
	dnanasumors( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanasumors.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanasumors.ndarray( '10', x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( true, x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( false, x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( null, x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( [], x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( {}, x, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanasumors.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanasumors.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, true, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, false, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, null, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, [], 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanasumors.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, true ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, false ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, null ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, [] ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, {} ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanasumors.ndarray(); // $ExpectError
	dnanasumors.ndarray( x.length ); // $ExpectError
	dnanasumors.ndarray( x.length, x ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1 ); // $ExpectError
	dnanasumors.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

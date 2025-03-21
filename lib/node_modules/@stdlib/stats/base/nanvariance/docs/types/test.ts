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

import nanvariance = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanvariance( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance( '10', 1, x, 1 ); // $ExpectError
	nanvariance( true, 1, x, 1 ); // $ExpectError
	nanvariance( false, 1, x, 1 ); // $ExpectError
	nanvariance( null, 1, x, 1 ); // $ExpectError
	nanvariance( undefined, 1, x, 1 ); // $ExpectError
	nanvariance( [], 1, x, 1 ); // $ExpectError
	nanvariance( {}, 1, x, 1 ); // $ExpectError
	nanvariance( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance( x.length, '10', x, 1 ); // $ExpectError
	nanvariance( x.length, true, x, 1 ); // $ExpectError
	nanvariance( x.length, false, x, 1 ); // $ExpectError
	nanvariance( x.length, null, x, 1 ); // $ExpectError
	nanvariance( x.length, undefined, x, 1 ); // $ExpectError
	nanvariance( x.length, [], x, 1 ); // $ExpectError
	nanvariance( x.length, {}, x, 1 ); // $ExpectError
	nanvariance( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanvariance( x.length, 1, 10, 1 ); // $ExpectError
	nanvariance( x.length, 1, '10', 1 ); // $ExpectError
	nanvariance( x.length, 1, true, 1 ); // $ExpectError
	nanvariance( x.length, 1, false, 1 ); // $ExpectError
	nanvariance( x.length, 1, null, 1 ); // $ExpectError
	nanvariance( x.length, 1, undefined, 1 ); // $ExpectError
	nanvariance( x.length, 1, [ '1' ], 1 ); // $ExpectError
	nanvariance( x.length, 1, {}, 1 ); // $ExpectError
	nanvariance( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance( x.length, 1, x, '10' ); // $ExpectError
	nanvariance( x.length, 1, x, true ); // $ExpectError
	nanvariance( x.length, 1, x, false ); // $ExpectError
	nanvariance( x.length, 1, x, null ); // $ExpectError
	nanvariance( x.length, 1, x, undefined ); // $ExpectError
	nanvariance( x.length, 1, x, [] ); // $ExpectError
	nanvariance( x.length, 1, x, {} ); // $ExpectError
	nanvariance( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariance(); // $ExpectError
	nanvariance( x.length ); // $ExpectError
	nanvariance( x.length, 1 ); // $ExpectError
	nanvariance( x.length, 1, x ); // $ExpectError
	nanvariance( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, [ '1' ], 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanvariance.ndarray(); // $ExpectError
	nanvariance.ndarray( x.length ); // $ExpectError
	nanvariance.ndarray( x.length, 1 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1 ); // $ExpectError
	nanvariance.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

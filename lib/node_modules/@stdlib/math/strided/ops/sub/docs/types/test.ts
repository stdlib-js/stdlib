/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

import sub = require( './index' );


// TESTS //

// The function returns an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectType RealOrComplexArray
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( [], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', '10', 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', [ '1' ], 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', ( x: number ): number => x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, [], 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( x.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', '10', 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', [ '1' ], 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', ( x: number ): number => x, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, [], 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', '10', 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', [ '1' ], 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10' ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [] ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {} ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub(); // $ExpectError
	sub( x.length ); // $ExpectError
	sub( x.length, 'float64' ); // $ExpectError
	sub( x.length, 'float64', x ); // $ExpectError
	sub( x.length, 'float64', x, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64' ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, z ); // $ExpectError
	sub( x.length, 'float64', x, 1, 'float64', y, 1, z, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectType RealOrComplexArray
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( [], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', '10', 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', [ '1' ], 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', ( x: number ): number => x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, [], 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, [], 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', '10', 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', [ '1' ], 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', ( x: number ): number => x, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, [], 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, [], 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not an array-like object or complex typed array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', '10', 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', [ '1' ], 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [], 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a thirteenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10' ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [] ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {} ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	sub.ndarray(); // $ExpectError
	sub.ndarray( x.length ); // $ExpectError
	sub.ndarray( x.length, 'float64' ); // $ExpectError
	sub.ndarray( x.length, 'float64', x ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64' ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, z ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, z, 1 ); // $ExpectError
	sub.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, z, 1, 0, 10 ); // $ExpectError
}

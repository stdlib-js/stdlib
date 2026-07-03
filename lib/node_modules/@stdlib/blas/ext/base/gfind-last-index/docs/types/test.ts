/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import gfindLastIndex = require( './index' );

/**
* Predicate function.
*
* @param v - array element
* @returns result
*/
function isEven( v: any ): boolean {
	return v % 2.0 === 0.0;
}


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex( x.length, x, 1, isEven ); // $ExpectType number
	gfindLastIndex( x.length, x, 1, isEven, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex( '10', x, 1, isEven ); // $ExpectError
	gfindLastIndex( true, x, 1, isEven ); // $ExpectError
	gfindLastIndex( false, x, 1, isEven ); // $ExpectError
	gfindLastIndex( null, x, 1, isEven ); // $ExpectError
	gfindLastIndex( undefined, x, 1, isEven ); // $ExpectError
	gfindLastIndex( [], x, 1, isEven ); // $ExpectError
	gfindLastIndex( {}, x, 1, isEven ); // $ExpectError
	gfindLastIndex( ( x: number ): number => x, x, 1, isEven ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfindLastIndex( x.length, 10, 1, isEven ); // $ExpectError
	gfindLastIndex( x.length, true, 1, isEven ); // $ExpectError
	gfindLastIndex( x.length, false, 1, isEven ); // $ExpectError
	gfindLastIndex( x.length, null, 1, isEven ); // $ExpectError
	gfindLastIndex( x.length, undefined, 1, isEven ); // $ExpectError
	gfindLastIndex( x.length, {}, 1, isEven ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex( x.length, x, '10', isEven ); // $ExpectError
	gfindLastIndex( x.length, x, true, isEven ); // $ExpectError
	gfindLastIndex( x.length, x, false, isEven ); // $ExpectError
	gfindLastIndex( x.length, x, null, isEven ); // $ExpectError
	gfindLastIndex( x.length, x, undefined, isEven ); // $ExpectError
	gfindLastIndex( x.length, x, [], isEven ); // $ExpectError
	gfindLastIndex( x.length, x, {}, isEven ); // $ExpectError
	gfindLastIndex( x.length, x, ( x: number ): number => x, isEven ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	gfindLastIndex( x.length, x, 1, '10' ); // $ExpectError
	gfindLastIndex( x.length, x, 1, true ); // $ExpectError
	gfindLastIndex( x.length, x, 1, false ); // $ExpectError
	gfindLastIndex( x.length, x, 1, null ); // $ExpectError
	gfindLastIndex( x.length, x, 1, undefined ); // $ExpectError
	gfindLastIndex( x.length, x, 1, [] ); // $ExpectError
	gfindLastIndex( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfindLastIndex(); // $ExpectError
	gfindLastIndex( x.length ); // $ExpectError
	gfindLastIndex( x.length, x ); // $ExpectError
	gfindLastIndex( x.length, x, 1 ); // $ExpectError
	gfindLastIndex( x.length, x, 1, isEven, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray( x.length, x, 1, 0, isEven ); // $ExpectType number
	gfindLastIndex.ndarray( x.length, x, 1, 0, isEven, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray( '10', x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( true, x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( false, x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( null, x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( undefined, x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( [], x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( {}, x, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( ( x: number ): number => x, x, 1, 0, isEven ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray( x.length, 10, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, true, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, false, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, null, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, undefined, 1, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, {}, 1, 0, isEven ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray( x.length, x, '10', 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, true, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, false, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, null, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, undefined, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, [], 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, {}, 0, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, ( x: number ): number => x, 0, isEven ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray( x.length, x, 1, '10', isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, true, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, false, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, null, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, undefined, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, [], isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, {}, isEven ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, ( x: number ): number => x, isEven ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfindLastIndex.ndarray(); // $ExpectError
	gfindLastIndex.ndarray( x.length ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1 ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gfindLastIndex.ndarray( x.length, x, 1, 0, isEven, {}, 10 ); // $ExpectError
}

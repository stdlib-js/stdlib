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

import mapBy = require( './index' );

/**
* Accessor callback.
*
* @returns accessed value
*/
function accessor(): number {
	return 5.0;
}

/**
* Unary callback.
*
* @param x - input value
* @returns result
*/
function unary( x: number ): number {
	return x;
}


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( x.length, x, 1, y, 1, unary, accessor ); // $ExpectType Collection
	mapBy( x.length, x, 1, y, 1, unary, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( '10', x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( true, x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( false, x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( null, x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( undefined, x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( [], x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( {}, x, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( ( x: number ): number => x, x, 1, y, 1, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( x.length, 10, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, true, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, false, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, null, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, undefined, 1, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, {}, 1, y, 1, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( x.length, x, '10', y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, true, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, false, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, null, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, undefined, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, [], y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, {}, y, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, ( x: number ): number => x, y, 1, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	mapBy( x.length, x, 1, 10, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, true, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, false, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, null, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, undefined, 1, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, {}, 1, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( x.length, x, 1, y, '10', unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, true, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, false, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, null, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, undefined, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, [], unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, {}, unary, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, ( x: number ): number => x, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( x.length, x, 1, y, 1, '10', accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, 0, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, true, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, false, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, null, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, undefined, accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, [], accessor ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, {}, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy( x.length, x, 1, y, 1, unary, '10' ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, 0 ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, true ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, false ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, null ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, undefined ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, [] ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy(); // $ExpectError
	mapBy( x.length ); // $ExpectError
	mapBy( x.length, x ); // $ExpectError
	mapBy( x.length, x, 1 ); // $ExpectError
	mapBy( x.length, x, 1, y ); // $ExpectError
	mapBy( x.length, x, 1, y, 1 ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary ); // $ExpectError
	mapBy( x.length, x, 1, y, 1, unary, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectType Collection
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( '10', x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( true, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( false, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( null, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( undefined, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( [], x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( {}, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, 10, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, true, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, false, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, null, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, undefined, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, {}, 1, 0, y, 1, 0, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, '10', 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, true, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, false, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, null, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, undefined, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, [], 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, {}, 0, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, '10', y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, true, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, false, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, null, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, undefined, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, [], y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, {}, y, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, 0, 10, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, true, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, false, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, null, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, undefined, 1, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, {}, 1, 0, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, 0, y, '10', 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, true, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, false, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, null, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, undefined, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, [], 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, {}, 0, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, 0, y, 1, '10', unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, true, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, false, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, null, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, undefined, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, [], unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, {}, unary, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, unary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a unary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, '10', accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, 0, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, true, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, false, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, null, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, [], accessor ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, {}, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, '10' ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, 0 ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, true ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, false ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, null ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, undefined ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, [] ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy.ndarray(); // $ExpectError
	mapBy.ndarray( x.length ); // $ExpectError
	mapBy.ndarray( x.length, x ); // $ExpectError
	mapBy.ndarray( x.length, x, 1 ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary ); // $ExpectError
	mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, unary, accessor, 10, 10 ); // $ExpectError
}

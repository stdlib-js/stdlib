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

import mapBy2 = require( './index' );

/**
* Accessor callback.
*
* @returns accessed values
*/
function accessor( values: Array<number> ): Array<number> {
	return values;
}

/**
* Binary callback.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function binary( x: number, y: number ): number {
	return x + y;
}


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectType Collection
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( '10', x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( true, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( false, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( null, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( undefined, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( [], x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( {}, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( ( x: number ): number => x, x, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, 10, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, true, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, false, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, null, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, undefined, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, {}, 1, y, 1, z, 1, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, '10', y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, true, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, false, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, null, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, undefined, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, [], y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, {}, y, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, ( x: number ): number => x, y, 1, z, 1, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, 1, 10, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, true, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, false, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, null, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, undefined, 1, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, {}, 1, z, 1, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, 1, y, '10', z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, true, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, false, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, null, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, undefined, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, [], z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, {}, z, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, ( x: number ): number => x, z, 1, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy2( x.length, x, 1, y, 1, 10, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, true, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, false, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, null, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, undefined, 1, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, {}, 1, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, 1, y, 1, z, '10', binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, true, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, false, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, null, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, undefined, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, [], binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, {}, binary, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, ( x: number ): number => x, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a binary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, 1, y, 1, z, 1, '10', accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, 0, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, true, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, false, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, null, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, undefined, accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, [], accessor ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, {}, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2( x.length, x, 1, y, 1, z, 1, binary, '10' ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, 0 ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, true ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, false ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, null ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, undefined ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, [] ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2(); // $ExpectError
	mapBy2( x.length ); // $ExpectError
	mapBy2( x.length, x ); // $ExpectError
	mapBy2( x.length, x, 1 ); // $ExpectError
	mapBy2( x.length, x, 1, y ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1 ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1 ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary ); // $ExpectError
	mapBy2( x.length, x, 1, y, 1, z, 1, binary, accessor, 10, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectType Collection
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( '10', x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( true, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( false, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( null, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( undefined, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( [], x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( {}, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, 10, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, true, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, false, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, null, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, undefined, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, {}, 1, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, '10', 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, true, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, false, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, null, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, undefined, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, [], 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, {}, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, '10', y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, true, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, false, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, null, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, undefined, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, [], y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, {}, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, 10, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, true, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, false, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, null, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, undefined, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, {}, 1, 0, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, '10', 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, true, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, false, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, null, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, undefined, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, [], 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, {}, 0, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, '10', z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, true, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, false, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, null, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, undefined, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, [], z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, {}, z, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, z, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, 10, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, true, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, false, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, null, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, 1, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, {}, 1, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, '10', 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, true, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, false, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, null, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, undefined, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, [], 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, {}, 0, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, ( x: number ): number => x, 0, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, '10', binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, true, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, false, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, null, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, undefined, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, [], binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, {}, binary, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, ( x: number ): number => x, binary, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a binary function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, '10', accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, 0, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, true, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, false, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, null, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, undefined, accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, [], accessor ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, {}, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, '10' ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, 0 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, true ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, false ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, null ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, undefined ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, [] ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	mapBy2.ndarray(); // $ExpectError
	mapBy2.ndarray( x.length ); // $ExpectError
	mapBy2.ndarray( x.length, x ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0 ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary ); // $ExpectError
	mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, binary, accessor, 10, 10 ); // $ExpectError
}

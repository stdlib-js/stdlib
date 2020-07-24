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

import minBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	minBy( x.length, x, 1, accessor ); // $ExpectType number
	minBy( x.length, x, 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	minBy( '10', x, 1, accessor ); // $ExpectError
	minBy( true, x, 1, accessor ); // $ExpectError
	minBy( false, x, 1, accessor ); // $ExpectError
	minBy( null, x, 1, accessor ); // $ExpectError
	minBy( undefined, x, 1, accessor ); // $ExpectError
	minBy( [], x, 1, accessor ); // $ExpectError
	minBy( {}, x, 1, accessor ); // $ExpectError
	minBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	minBy( x.length, 10, 1, accessor ); // $ExpectError
	minBy( x.length, true, 1, accessor ); // $ExpectError
	minBy( x.length, false, 1, accessor ); // $ExpectError
	minBy( x.length, null, 1, accessor ); // $ExpectError
	minBy( x.length, undefined, 1, accessor ); // $ExpectError
	minBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	minBy( x.length, x, '10', accessor ); // $ExpectError
	minBy( x.length, x, true, accessor ); // $ExpectError
	minBy( x.length, x, false, accessor ); // $ExpectError
	minBy( x.length, x, null, accessor ); // $ExpectError
	minBy( x.length, x, undefined, accessor ); // $ExpectError
	minBy( x.length, x, [], accessor ); // $ExpectError
	minBy( x.length, x, {}, accessor ); // $ExpectError
	minBy( x.length, x, ( x: number, accessor ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	minBy( x.length, x, 1, '10' ); // $ExpectError
	minBy( x.length, x, 1, true ); // $ExpectError
	minBy( x.length, x, 1, false ); // $ExpectError
	minBy( x.length, x, 1, null ); // $ExpectError
	minBy( x.length, x, 1, undefined ); // $ExpectError
	minBy( x.length, x, 1, [] ); // $ExpectError
	minBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	minBy(); // $ExpectError
	minBy( x.length ); // $ExpectError
	minBy( x.length, x ); // $ExpectError
	minBy( x.length, x, 1 ); // $ExpectError
	minBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	minBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	minBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	minBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	minBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	minBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	minBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	minBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	minBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	minBy.ndarray(); // $ExpectError
	minBy.ndarray( x.length ); // $ExpectError
	minBy.ndarray( x.length, x ); // $ExpectError
	minBy.ndarray( x.length, x, 1 ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	minBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}

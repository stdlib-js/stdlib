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

import rangeBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	rangeBy( x.length, x, 1, accessor ); // $ExpectType number
	rangeBy( x.length, x, 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	rangeBy( '10', x, 1, accessor ); // $ExpectError
	rangeBy( true, x, 1, accessor ); // $ExpectError
	rangeBy( false, x, 1, accessor ); // $ExpectError
	rangeBy( null, x, 1, accessor ); // $ExpectError
	rangeBy( undefined, x, 1, accessor ); // $ExpectError
	rangeBy( [], x, 1, accessor ); // $ExpectError
	rangeBy( {}, x, 1, accessor ); // $ExpectError
	rangeBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	rangeBy( x.length, 10, 1, accessor ); // $ExpectError
	rangeBy( x.length, true, 1, accessor ); // $ExpectError
	rangeBy( x.length, false, 1, accessor ); // $ExpectError
	rangeBy( x.length, null, 1, accessor ); // $ExpectError
	rangeBy( x.length, undefined, 1, accessor ); // $ExpectError
	rangeBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	rangeBy( x.length, x, '10', accessor ); // $ExpectError
	rangeBy( x.length, x, true, accessor ); // $ExpectError
	rangeBy( x.length, x, false, accessor ); // $ExpectError
	rangeBy( x.length, x, null, accessor ); // $ExpectError
	rangeBy( x.length, x, undefined, accessor ); // $ExpectError
	rangeBy( x.length, x, [], accessor ); // $ExpectError
	rangeBy( x.length, x, {}, accessor ); // $ExpectError
	rangeBy( x.length, x, ( x: number, accessor ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	rangeBy( x.length, x, 1, '10' ); // $ExpectError
	rangeBy( x.length, x, 1, true ); // $ExpectError
	rangeBy( x.length, x, 1, false ); // $ExpectError
	rangeBy( x.length, x, 1, null ); // $ExpectError
	rangeBy( x.length, x, 1, undefined ); // $ExpectError
	rangeBy( x.length, x, 1, [] ); // $ExpectError
	rangeBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	rangeBy(); // $ExpectError
	rangeBy( x.length ); // $ExpectError
	rangeBy( x.length, x ); // $ExpectError
	rangeBy( x.length, x, 1 ); // $ExpectError
	rangeBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	rangeBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	rangeBy.ndarray(); // $ExpectError
	rangeBy.ndarray( x.length ); // $ExpectError
	rangeBy.ndarray( x.length, x ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1 ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	rangeBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}

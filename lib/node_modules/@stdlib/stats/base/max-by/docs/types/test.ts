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

import maxBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	maxBy( x.length, x, 1, accessor ); // $ExpectType number
	maxBy( x.length, x, 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	maxBy( '10', x, 1, accessor ); // $ExpectError
	maxBy( true, x, 1, accessor ); // $ExpectError
	maxBy( false, x, 1, accessor ); // $ExpectError
	maxBy( null, x, 1, accessor ); // $ExpectError
	maxBy( undefined, x, 1, accessor ); // $ExpectError
	maxBy( [], x, 1, accessor ); // $ExpectError
	maxBy( {}, x, 1, accessor ); // $ExpectError
	maxBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	maxBy( x.length, 10, 1, accessor ); // $ExpectError
	maxBy( x.length, true, 1, accessor ); // $ExpectError
	maxBy( x.length, false, 1, accessor ); // $ExpectError
	maxBy( x.length, null, 1, accessor ); // $ExpectError
	maxBy( x.length, undefined, 1, accessor ); // $ExpectError
	maxBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	maxBy( x.length, x, '10', accessor ); // $ExpectError
	maxBy( x.length, x, true, accessor ); // $ExpectError
	maxBy( x.length, x, false, accessor ); // $ExpectError
	maxBy( x.length, x, null, accessor ); // $ExpectError
	maxBy( x.length, x, undefined, accessor ); // $ExpectError
	maxBy( x.length, x, [], accessor ); // $ExpectError
	maxBy( x.length, x, {}, accessor ); // $ExpectError
	maxBy( x.length, x, ( x: number, accessor ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	maxBy( x.length, x, 1, '10' ); // $ExpectError
	maxBy( x.length, x, 1, true ); // $ExpectError
	maxBy( x.length, x, 1, false ); // $ExpectError
	maxBy( x.length, x, 1, null ); // $ExpectError
	maxBy( x.length, x, 1, undefined ); // $ExpectError
	maxBy( x.length, x, 1, [] ); // $ExpectError
	maxBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	maxBy(); // $ExpectError
	maxBy( x.length ); // $ExpectError
	maxBy( x.length, x ); // $ExpectError
	maxBy( x.length, x, 1 ); // $ExpectError
	maxBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	maxBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	maxBy.ndarray(); // $ExpectError
	maxBy.ndarray( x.length ); // $ExpectError
	maxBy.ndarray( x.length, x ); // $ExpectError
	maxBy.ndarray( x.length, x, 1 ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	maxBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}

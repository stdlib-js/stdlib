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

import nanmaxBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy( x.length, x, 1, accessor ); // $ExpectType number
	nanmaxBy( x.length, x, 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy( '10', x, 1, accessor ); // $ExpectError
	nanmaxBy( true, x, 1, accessor ); // $ExpectError
	nanmaxBy( false, x, 1, accessor ); // $ExpectError
	nanmaxBy( null, x, 1, accessor ); // $ExpectError
	nanmaxBy( undefined, x, 1, accessor ); // $ExpectError
	nanmaxBy( [], x, 1, accessor ); // $ExpectError
	nanmaxBy( {}, x, 1, accessor ); // $ExpectError
	nanmaxBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanmaxBy( x.length, 10, 1, accessor ); // $ExpectError
	nanmaxBy( x.length, true, 1, accessor ); // $ExpectError
	nanmaxBy( x.length, false, 1, accessor ); // $ExpectError
	nanmaxBy( x.length, null, 1, accessor ); // $ExpectError
	nanmaxBy( x.length, undefined, 1, accessor ); // $ExpectError
	nanmaxBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy( x.length, x, '10', accessor ); // $ExpectError
	nanmaxBy( x.length, x, true, accessor ); // $ExpectError
	nanmaxBy( x.length, x, false, accessor ); // $ExpectError
	nanmaxBy( x.length, x, null, accessor ); // $ExpectError
	nanmaxBy( x.length, x, undefined, accessor ); // $ExpectError
	nanmaxBy( x.length, x, [], accessor ); // $ExpectError
	nanmaxBy( x.length, x, {}, accessor ); // $ExpectError
	nanmaxBy( x.length, x, ( x: number, accessor ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanmaxBy( x.length, x, 1, '10' ); // $ExpectError
	nanmaxBy( x.length, x, 1, true ); // $ExpectError
	nanmaxBy( x.length, x, 1, false ); // $ExpectError
	nanmaxBy( x.length, x, 1, null ); // $ExpectError
	nanmaxBy( x.length, x, 1, undefined ); // $ExpectError
	nanmaxBy( x.length, x, 1, [] ); // $ExpectError
	nanmaxBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanmaxBy(); // $ExpectError
	nanmaxBy( x.length ); // $ExpectError
	nanmaxBy( x.length, x ); // $ExpectError
	nanmaxBy( x.length, x, 1 ); // $ExpectError
	nanmaxBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	nanmaxBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanmaxBy.ndarray(); // $ExpectError
	nanmaxBy.ndarray( x.length ); // $ExpectError
	nanmaxBy.ndarray( x.length, x ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1 ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	nanmaxBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}

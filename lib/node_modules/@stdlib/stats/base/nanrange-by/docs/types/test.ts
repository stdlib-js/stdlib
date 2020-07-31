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

import nanrangeBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy( x.length, x, 1, accessor ); // $ExpectType number
	nanrangeBy( x.length, x, 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy( '10', x, 1, accessor ); // $ExpectError
	nanrangeBy( true, x, 1, accessor ); // $ExpectError
	nanrangeBy( false, x, 1, accessor ); // $ExpectError
	nanrangeBy( null, x, 1, accessor ); // $ExpectError
	nanrangeBy( undefined, x, 1, accessor ); // $ExpectError
	nanrangeBy( [], x, 1, accessor ); // $ExpectError
	nanrangeBy( {}, x, 1, accessor ); // $ExpectError
	nanrangeBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanrangeBy( x.length, 10, 1, accessor ); // $ExpectError
	nanrangeBy( x.length, true, 1, accessor ); // $ExpectError
	nanrangeBy( x.length, false, 1, accessor ); // $ExpectError
	nanrangeBy( x.length, null, 1, accessor ); // $ExpectError
	nanrangeBy( x.length, undefined, 1, accessor ); // $ExpectError
	nanrangeBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy( x.length, x, '10', accessor ); // $ExpectError
	nanrangeBy( x.length, x, true, accessor ); // $ExpectError
	nanrangeBy( x.length, x, false, accessor ); // $ExpectError
	nanrangeBy( x.length, x, null, accessor ); // $ExpectError
	nanrangeBy( x.length, x, undefined, accessor ); // $ExpectError
	nanrangeBy( x.length, x, [], accessor ); // $ExpectError
	nanrangeBy( x.length, x, {}, accessor ); // $ExpectError
	nanrangeBy( x.length, x, ( x: number, accessor ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanrangeBy( x.length, x, 1, '10' ); // $ExpectError
	nanrangeBy( x.length, x, 1, true ); // $ExpectError
	nanrangeBy( x.length, x, 1, false ); // $ExpectError
	nanrangeBy( x.length, x, 1, null ); // $ExpectError
	nanrangeBy( x.length, x, 1, undefined ); // $ExpectError
	nanrangeBy( x.length, x, 1, [] ); // $ExpectError
	nanrangeBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanrangeBy(); // $ExpectError
	nanrangeBy( x.length ); // $ExpectError
	nanrangeBy( x.length, x ); // $ExpectError
	nanrangeBy( x.length, x, 1 ); // $ExpectError
	nanrangeBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	nanrangeBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanrangeBy.ndarray(); // $ExpectError
	nanrangeBy.ndarray( x.length ); // $ExpectError
	nanrangeBy.ndarray( x.length, x ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1 ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	nanrangeBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}

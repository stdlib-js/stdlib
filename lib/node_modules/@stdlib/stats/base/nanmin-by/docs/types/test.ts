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

import nanminBy = require( './index' );

const accessor = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );

	nanminBy( x.length, x, 1, accessor ); // $ExpectType number
	nanminBy( x.length, x, 1, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanminBy( '10', x, 1, accessor ); // $ExpectError
	nanminBy( true, x, 1, accessor ); // $ExpectError
	nanminBy( false, x, 1, accessor ); // $ExpectError
	nanminBy( null, x, 1, accessor ); // $ExpectError
	nanminBy( undefined, x, 1, accessor ); // $ExpectError
	nanminBy( [], x, 1, accessor ); // $ExpectError
	nanminBy( {}, x, 1, accessor ); // $ExpectError
	nanminBy( ( x: number ): number => x, x, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanminBy( x.length, 10, 1, accessor ); // $ExpectError
	nanminBy( x.length, true, 1, accessor ); // $ExpectError
	nanminBy( x.length, false, 1, accessor ); // $ExpectError
	nanminBy( x.length, null, 1, accessor ); // $ExpectError
	nanminBy( x.length, undefined, 1, accessor ); // $ExpectError
	nanminBy( x.length, {}, 1, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanminBy( x.length, x, '10', accessor ); // $ExpectError
	nanminBy( x.length, x, true, accessor ); // $ExpectError
	nanminBy( x.length, x, false, accessor ); // $ExpectError
	nanminBy( x.length, x, null, accessor ); // $ExpectError
	nanminBy( x.length, x, undefined, accessor ); // $ExpectError
	nanminBy( x.length, x, [], accessor ); // $ExpectError
	nanminBy( x.length, x, {}, accessor ); // $ExpectError
	nanminBy( x.length, x, ( x: number, accessor ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanminBy( x.length, x, 1, '10' ); // $ExpectError
	nanminBy( x.length, x, 1, true ); // $ExpectError
	nanminBy( x.length, x, 1, false ); // $ExpectError
	nanminBy( x.length, x, 1, null ); // $ExpectError
	nanminBy( x.length, x, 1, undefined ); // $ExpectError
	nanminBy( x.length, x, 1, [] ); // $ExpectError
	nanminBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanminBy(); // $ExpectError
	nanminBy( x.length ); // $ExpectError
	nanminBy( x.length, x ); // $ExpectError
	nanminBy( x.length, x, 1 ); // $ExpectError
	nanminBy( x.length, x, 1, accessor, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray( x.length, x, 1, 0, accessor ); // $ExpectType number
	nanminBy.ndarray( x.length, x, 1, 0, accessor, {} ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray( '10', x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( true, x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( false, x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( null, x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( undefined, x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( [], x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( {}, x, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( ( x: number ): number => x, x, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray( x.length, 10, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, true, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, false, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, null, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, undefined, 1, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, {}, 1, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray( x.length, x, '10', 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, true, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, false, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, null, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, undefined, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, [], 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, {}, 0, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, ( x: number ): number => x, 0, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray( x.length, x, 1, '10', accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, true, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, false, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, null, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, undefined, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, [], accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, {}, accessor ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, ( x: number ): number => x, accessor ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	nanminBy.ndarray(); // $ExpectError
	nanminBy.ndarray( x.length ); // $ExpectError
	nanminBy.ndarray( x.length, x ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1 ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	nanminBy.ndarray( x.length, x, 1, 0, accessor, {}, 10 ); // $ExpectError
}

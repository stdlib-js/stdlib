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

import dsapxsum = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float32Array( 10 );

	dsapxsum( x.length, 5.0, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum( '10', 5.0, x, 1 ); // $ExpectError
	dsapxsum( true, 5.0, x, 1 ); // $ExpectError
	dsapxsum( false, 5.0, x, 1 ); // $ExpectError
	dsapxsum( null, 5.0, x, 1 ); // $ExpectError
	dsapxsum( undefined, 5.0, x, 1 ); // $ExpectError
	dsapxsum( [], 5.0, x, 1 ); // $ExpectError
	dsapxsum( {}, 5.0, x, 1 ); // $ExpectError
	dsapxsum( ( x: number ): number => x, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum( x.length, '10', x, 1 ); // $ExpectError
	dsapxsum( x.length, true, x, 1 ); // $ExpectError
	dsapxsum( x.length, false, x, 1 ); // $ExpectError
	dsapxsum( x.length, null, x, 1 ); // $ExpectError
	dsapxsum( x.length, undefined, x, 1 ); // $ExpectError
	dsapxsum( x.length, [], x, 1 ); // $ExpectError
	dsapxsum( x.length, {}, x, 1 ); // $ExpectError
	dsapxsum( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsapxsum( x.length, 5.0, 10, 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, '10', 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, true, 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, false, 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, null, 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, undefined, 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, [], 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, {}, 1 ); // $ExpectError
	dsapxsum( x.length, 5.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum( x.length, 5.0, x, '10' ); // $ExpectError
	dsapxsum( x.length, 5.0, x, true ); // $ExpectError
	dsapxsum( x.length, 5.0, x, false ); // $ExpectError
	dsapxsum( x.length, 5.0, x, null ); // $ExpectError
	dsapxsum( x.length, 5.0, x, undefined ); // $ExpectError
	dsapxsum( x.length, 5.0, x, [] ); // $ExpectError
	dsapxsum( x.length, 5.0, x, {} ); // $ExpectError
	dsapxsum( x.length, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsapxsum(); // $ExpectError
	dsapxsum( x.length ); // $ExpectError
	dsapxsum( x.length, 5.0 ); // $ExpectError
	dsapxsum( x.length, 5.0, x ); // $ExpectError
	dsapxsum( x.length, 5.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray( '10', 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( true, 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( false, 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( null, 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( undefined, 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( [], 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( {}, 5.0, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( ( x: number ): number => x, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray( x.length, 5.0, 10, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, '10', 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, true, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, false, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, null, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, undefined, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, [], 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, {}, 1, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray( x.length, 5.0, x, '10', 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, true, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, false, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, null, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, undefined, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, [], 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, {}, 0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray( x.length, 5.0, x, 1, '10' ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, true ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, false ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, null ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, undefined ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, [] ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, {} ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );

	dsapxsum.ndarray(); // $ExpectError
	dsapxsum.ndarray( x.length ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	dsapxsum.ndarray( x.length, 5.0, x, 1, 0, 10 ); // $ExpectError
}

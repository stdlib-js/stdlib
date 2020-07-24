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

import gfillBy = require( './index' );

const fill = (): number => {
	return 5.0;
};


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gfillBy( x.length, x, 1, fill ); // $ExpectType Collection
	gfillBy( x.length, x, 1, fill, {} ); // $ExpectType Collection
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillBy( '10', x, 1, fill ); // $ExpectError
	gfillBy( true, x, 1, fill ); // $ExpectError
	gfillBy( false, x, 1, fill ); // $ExpectError
	gfillBy( null, x, 1, fill ); // $ExpectError
	gfillBy( undefined, x, 1, fill ); // $ExpectError
	gfillBy( [], x, 1, fill ); // $ExpectError
	gfillBy( {}, x, 1, fill ); // $ExpectError
	gfillBy( ( x: number ): number => x, x, 1, fill ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillBy( x.length, 10, 1, fill ); // $ExpectError
	gfillBy( x.length, true, 1, fill ); // $ExpectError
	gfillBy( x.length, false, 1, fill ); // $ExpectError
	gfillBy( x.length, null, 1, fill ); // $ExpectError
	gfillBy( x.length, undefined, 1, fill ); // $ExpectError
	gfillBy( x.length, {}, 1, fill ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillBy( x.length, x, '10', fill ); // $ExpectError
	gfillBy( x.length, x, true, fill ); // $ExpectError
	gfillBy( x.length, x, false, fill ); // $ExpectError
	gfillBy( x.length, x, null, fill ); // $ExpectError
	gfillBy( x.length, x, undefined, fill ); // $ExpectError
	gfillBy( x.length, x, [], fill ); // $ExpectError
	gfillBy( x.length, x, {}, fill ); // $ExpectError
	gfillBy( x.length, x, ( x: number, fill ): number => x, fill ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = new Float64Array( 10 );

	gfillBy( x.length, x, 1, '10' ); // $ExpectError
	gfillBy( x.length, x, 1, true ); // $ExpectError
	gfillBy( x.length, x, 1, false ); // $ExpectError
	gfillBy( x.length, x, 1, null ); // $ExpectError
	gfillBy( x.length, x, 1, undefined ); // $ExpectError
	gfillBy( x.length, x, 1, [] ); // $ExpectError
	gfillBy( x.length, x, 1, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillBy(); // $ExpectError
	gfillBy( x.length ); // $ExpectError
	gfillBy( x.length, x ); // $ExpectError
	gfillBy( x.length, x, 1 ); // $ExpectError
	gfillBy( x.length, x, 1, fill, {}, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray( x.length, x, 1, 0, fill ); // $ExpectType Collection
	gfillBy.ndarray( x.length, x, 1, 0, fill, {} ); // $ExpectType Collection
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray( '10', x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( true, x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( false, x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( null, x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( undefined, x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( [], x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( {}, x, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( ( x: number ): number => x, x, 1, 0, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray( x.length, 10, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, true, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, false, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, null, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, undefined, 1, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, {}, 1, 0, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray( x.length, x, '10', 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, true, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, false, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, null, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, undefined, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, [], 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, {}, 0, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, ( x: number ): number => x, 0, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray( x.length, x, 1, '10', fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, true, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, false, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, null, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, undefined, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, [], fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, {}, fill ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, ( x: number ): number => x, fill ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a function...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray( x.length, x, 1, 0, '10' ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, true ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, false ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, null ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, undefined ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, [] ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gfillBy.ndarray(); // $ExpectError
	gfillBy.ndarray( x.length ); // $ExpectError
	gfillBy.ndarray( x.length, x ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1 ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gfillBy.ndarray( x.length, x, 1, 0, fill, {}, 10 ); // $ExpectError
}

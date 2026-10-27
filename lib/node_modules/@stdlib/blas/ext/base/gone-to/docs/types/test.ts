/*
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

import goneTo = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	goneTo( x.length, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	goneTo( '10', x, 1 ); // $ExpectError
	goneTo( true, x, 1 ); // $ExpectError
	goneTo( false, x, 1 ); // $ExpectError
	goneTo( null, x, 1 ); // $ExpectError
	goneTo( undefined, x, 1 ); // $ExpectError
	goneTo( [], x, 1 ); // $ExpectError
	goneTo( {}, x, 1 ); // $ExpectError
	goneTo( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	goneTo( x.length, 10, 1 ); // $ExpectError
	goneTo( x.length, true, 1 ); // $ExpectError
	goneTo( x.length, false, 1 ); // $ExpectError
	goneTo( x.length, null, 1 ); // $ExpectError
	goneTo( x.length, undefined, 1 ); // $ExpectError
	goneTo( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	goneTo( x.length, x, '10' ); // $ExpectError
	goneTo( x.length, x, true ); // $ExpectError
	goneTo( x.length, x, false ); // $ExpectError
	goneTo( x.length, x, null ); // $ExpectError
	goneTo( x.length, x, undefined ); // $ExpectError
	goneTo( x.length, x, [] ); // $ExpectError
	goneTo( x.length, x, {} ); // $ExpectError
	goneTo( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	goneTo(); // $ExpectError
	goneTo( x.length ); // $ExpectError
	goneTo( x.length, x ); // $ExpectError
	goneTo( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	goneTo.ndarray( x.length, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	goneTo.ndarray( '10', x, 1, 0 ); // $ExpectError
	goneTo.ndarray( true, x, 1, 0 ); // $ExpectError
	goneTo.ndarray( false, x, 1, 0 ); // $ExpectError
	goneTo.ndarray( null, x, 1, 0 ); // $ExpectError
	goneTo.ndarray( undefined, x, 1, 0 ); // $ExpectError
	goneTo.ndarray( [], x, 1, 0 ); // $ExpectError
	goneTo.ndarray( {}, x, 1, 0 ); // $ExpectError
	goneTo.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	goneTo.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	goneTo.ndarray( x.length, true, 1, 0 ); // $ExpectError
	goneTo.ndarray( x.length, false, 1, 0 ); // $ExpectError
	goneTo.ndarray( x.length, null, 1, 0 ); // $ExpectError
	goneTo.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	goneTo.ndarray( x.length, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	goneTo.ndarray( x.length, x, '10', 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, true, 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, false, 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, null, 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, [], 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, {}, 0 ); // $ExpectError
	goneTo.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	goneTo.ndarray( x.length, x, 1, '10' ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, true ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, false ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, null ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, undefined ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, [] ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, {} ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	goneTo.ndarray(); // $ExpectError
	goneTo.ndarray( x.length ); // $ExpectError
	goneTo.ndarray( x.length, x ); // $ExpectError
	goneTo.ndarray( x.length, x, 1 ); // $ExpectError
	goneTo.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

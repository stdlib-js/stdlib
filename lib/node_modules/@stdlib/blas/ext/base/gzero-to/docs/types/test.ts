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

import gzeroTo = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );

	gzeroTo( x.length, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gzeroTo( '10', x, 1 ); // $ExpectError
	gzeroTo( true, x, 1 ); // $ExpectError
	gzeroTo( false, x, 1 ); // $ExpectError
	gzeroTo( null, x, 1 ); // $ExpectError
	gzeroTo( undefined, x, 1 ); // $ExpectError
	gzeroTo( [], x, 1 ); // $ExpectError
	gzeroTo( {}, x, 1 ); // $ExpectError
	gzeroTo( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gzeroTo( x.length, 10, 1 ); // $ExpectError
	gzeroTo( x.length, true, 1 ); // $ExpectError
	gzeroTo( x.length, false, 1 ); // $ExpectError
	gzeroTo( x.length, null, 1 ); // $ExpectError
	gzeroTo( x.length, undefined, 1 ); // $ExpectError
	gzeroTo( x.length, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gzeroTo( x.length, x, '10' ); // $ExpectError
	gzeroTo( x.length, x, true ); // $ExpectError
	gzeroTo( x.length, x, false ); // $ExpectError
	gzeroTo( x.length, x, null ); // $ExpectError
	gzeroTo( x.length, x, undefined ); // $ExpectError
	gzeroTo( x.length, x, [] ); // $ExpectError
	gzeroTo( x.length, x, {} ); // $ExpectError
	gzeroTo( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gzeroTo(); // $ExpectError
	gzeroTo( x.length ); // $ExpectError
	gzeroTo( x.length, x ); // $ExpectError
	gzeroTo( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );

	gzeroTo.ndarray( x.length, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	gzeroTo.ndarray( '10', x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( true, x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( false, x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( null, x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( undefined, x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( [], x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( {}, x, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gzeroTo.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, true, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, false, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, null, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	gzeroTo.ndarray( x.length, x, '10', 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, true, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, false, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, null, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, [], 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, {}, 0 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	gzeroTo.ndarray( x.length, x, 1, '10' ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, true ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, false ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, null ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, undefined ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, [] ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, {} ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	gzeroTo.ndarray(); // $ExpectError
	gzeroTo.ndarray( x.length ); // $ExpectError
	gzeroTo.ndarray( x.length, x ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1 ); // $ExpectError
	gzeroTo.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

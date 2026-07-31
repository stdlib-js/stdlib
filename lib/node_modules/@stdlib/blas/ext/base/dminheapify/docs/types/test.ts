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

import dminheapify = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( [ 7.0, 5.0, 3.0, 1.0, 9.0 ] );

	dminheapify( x.length, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapify( '10', x, 1 ); // $ExpectError
	dminheapify( true, x, 1 ); // $ExpectError
	dminheapify( false, x, 1 ); // $ExpectError
	dminheapify( null, x, 1 ); // $ExpectError
	dminheapify( undefined, x, 1 ); // $ExpectError
	dminheapify( [], x, 1 ); // $ExpectError
	dminheapify( {}, x, 1 ); // $ExpectError
	dminheapify( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	dminheapify( 5, 10, 1 ); // $ExpectError
	dminheapify( 5, '10', 1 ); // $ExpectError
	dminheapify( 5, true, 1 ); // $ExpectError
	dminheapify( 5, false, 1 ); // $ExpectError
	dminheapify( 5, null, 1 ); // $ExpectError
	dminheapify( 5, undefined, 1 ); // $ExpectError
	dminheapify( 5, [], 1 ); // $ExpectError
	dminheapify( 5, {}, 1 ); // $ExpectError
	dminheapify( 5, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapify( x.length, x, '10' ); // $ExpectError
	dminheapify( x.length, x, true ); // $ExpectError
	dminheapify( x.length, x, false ); // $ExpectError
	dminheapify( x.length, x, null ); // $ExpectError
	dminheapify( x.length, x, undefined ); // $ExpectError
	dminheapify( x.length, x, [] ); // $ExpectError
	dminheapify( x.length, x, {} ); // $ExpectError
	dminheapify( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dminheapify(); // $ExpectError
	dminheapify( x.length ); // $ExpectError
	dminheapify( x.length, x ); // $ExpectError
	dminheapify( x.length, x, 1, {} ); // $ExpectError
}

// The ndarray function returns a Float64Array...
{
	const x = new Float64Array( [ 7.0, 5.0, 3.0, 1.0, 9.0 ] );

	dminheapify.ndarray( x.length, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the ndarray function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapify.ndarray( '10', x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( true, x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( false, x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( null, x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( [], x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( {}, x, 1, 0 ); // $ExpectError
	dminheapify.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the ndarray function is provided a second argument which is not a Float64Array...
{
	dminheapify.ndarray( 5, 10, 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, '10', 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, true, 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, false, 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, null, 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, undefined, 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, [], 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, {}, 1, 0 ); // $ExpectError
	dminheapify.ndarray( 5, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the ndarray function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapify.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, true, 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, false, 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, null, 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, [], 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dminheapify.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the ndarray function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dminheapify.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, true ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, false ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, null ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, [] ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, {} ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the ndarray function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dminheapify.ndarray(); // $ExpectError
	dminheapify.ndarray( x.length ); // $ExpectError
	dminheapify.ndarray( x.length, x ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1 ); // $ExpectError
	dminheapify.ndarray( x.length, x, 1, 0, {} ); // $ExpectError
}

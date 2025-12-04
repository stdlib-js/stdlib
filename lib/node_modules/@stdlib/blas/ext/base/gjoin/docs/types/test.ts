/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import gjoin = require( './index' );


// TESTS //

// The function returns a string...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin( x.length, ',', x, 1 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin( '5', ',', x, 1 ); // $ExpectError
	gjoin( true, ',', x, 1 ); // $ExpectError
	gjoin( false, ',', x, 1 ); // $ExpectError
	gjoin( null, ',', x, 1 ); // $ExpectError
	gjoin( undefined, ',', x, 1 ); // $ExpectError
	gjoin( [], ',', x, 1 ); // $ExpectError
	gjoin( {}, ',', x, 1 ); // $ExpectError
	gjoin( ( x: number ): number => x, ',', x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin( x.length, 5, x, 1 ); // $ExpectError
	gjoin( x.length, true, x, 1 ); // $ExpectError
	gjoin( x.length, false, x, 1 ); // $ExpectError
	gjoin( x.length, null, x, 1 ); // $ExpectError
	gjoin( x.length, undefined, x, 1 ); // $ExpectError
	gjoin( x.length, [], x, 1 ); // $ExpectError
	gjoin( x.length, {}, x, 1 ); // $ExpectError
	gjoin( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	gjoin( 4, ',', 5, 1 ); // $ExpectError
	gjoin( 4, ',', true, 1 ); // $ExpectError
	gjoin( 4, ',', false, 1 ); // $ExpectError
	gjoin( 4, ',', null, 1 ); // $ExpectError
	gjoin( 4, ',', undefined, 1 ); // $ExpectError
	gjoin( 4, ',', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin( x.length, ',', x, '5' ); // $ExpectError
	gjoin( x.length, ',', x, true ); // $ExpectError
	gjoin( x.length, ',', x, false ); // $ExpectError
	gjoin( x.length, ',', x, null ); // $ExpectError
	gjoin( x.length, ',', x, undefined ); // $ExpectError
	gjoin( x.length, ',', x, [] ); // $ExpectError
	gjoin( x.length, ',', x, {} ); // $ExpectError
	gjoin( x.length, ',', x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin(); // $ExpectError
	gjoin( x.length ); // $ExpectError
	gjoin( x.length, ',' ); // $ExpectError
	gjoin( x.length, ',', x ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a string...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin.ndarray( x.length, ',', x, 1, 0 ); // $ExpectType string
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin.ndarray( '5', ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( true, ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( false, ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( null, ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( undefined, ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( [], ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( {}, ',', x, 1, 0 ); // $ExpectError
	gjoin.ndarray( ( x: number ): number => x, ',', x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin.ndarray( x.length, 5, x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	gjoin.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not an array-like object...
{
	gjoin.ndarray( 4, ',', 5, 1, 0 ); // $ExpectError
	gjoin.ndarray( 4, ',', true, 1, 0 ); // $ExpectError
	gjoin.ndarray( 4, ',', false, 1, 0 ); // $ExpectError
	gjoin.ndarray( 4, ',', null, 1, 0 ); // $ExpectError
	gjoin.ndarray( 4, ',', undefined, 1, 0 ); // $ExpectError
	gjoin.ndarray( 4, ',', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin.ndarray( x.length, ',', x, '5', 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, true, 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, false, 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, null, 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, undefined, 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, [], 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, {}, 0 ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin.ndarray( x.length, ',', x, 1, '5' ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, true ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, false ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, null ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, undefined ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, [] ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, {} ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided insufficient arguments...
{
	const x = [ 1, 2, 3, 4 ];

	gjoin.ndarray(); // $ExpectError
	gjoin.ndarray( x.length ); // $ExpectError
	gjoin.ndarray( x.length, ',' ); // $ExpectError
	gjoin.ndarray( x.length, ',', x ); // $ExpectError
	gjoin.ndarray( x.length, ',', x, 1 ); // $ExpectError
}

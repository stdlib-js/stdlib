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

import gconjoin = require( './index' );


// TESTS //

// The function returns a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( x.length, '', '', 'and', true, x, 1 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( '5', '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( true, '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( false, '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( null, '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( undefined, '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( [], '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( {}, '', '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( ( x: number ): number => x, '', '', 'and', true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( x.length, 5, '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, true, '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, false, '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, null, '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, undefined, '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, [], '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, {}, '', 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, ( x: number ): number => x, '', 'and', true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( x.length, '', 5, 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', true, 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', false, 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', null, 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', undefined, 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', [], 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', {}, 'and', true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', ( x: number ): number => x, 'and', true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( x.length, '', '', 5, true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', true, true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', false, true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', null, true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', undefined, true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', [], true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', {}, true, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', ( x: number ): number => x, true, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a boolean...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( x.length, '', '', 'and', '5', x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', 'and', 5, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', 'and', null, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', 'and', undefined, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', 'and', [], x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', 'and', {}, x, 1 ); // $ExpectError
	gconjoin( x.length, '', '', 'and', ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object...
{
	gconjoin( 4, '', '', 'and', true, 5, 1 ); // $ExpectError
	gconjoin( 4, '', '', 'and', true, true, 1 ); // $ExpectError
	gconjoin( 4, '', '', 'and', true, false, 1 ); // $ExpectError
	gconjoin( 4, '', '', 'and', true, null, 1 ); // $ExpectError
	gconjoin( 4, '', '', 'and', true, undefined, 1 ); // $ExpectError
	gconjoin( 4, '', '', 'and', true, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin( x.length, '', '', 'and', true, x, '5' ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, true ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, false ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, null ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, undefined ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, [] ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, {} ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin(); // $ExpectError
	gconjoin( x.length ); // $ExpectError
	gconjoin( x.length, '' ); // $ExpectError
	gconjoin( x.length, '', '' ); // $ExpectError
	gconjoin( x.length, '', '', 'and' ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true ); // $ExpectError
	gconjoin( x.length, '', '', 'and', true, x ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, 0 ); // $ExpectType string
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( '5', '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( true, '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( false, '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( null, '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( undefined, '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( [], '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( {}, '', '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( ( x: number ): number => x, '', '', 'and', true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, 5, '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, true, '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, false, '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, null, '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, undefined, '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, [], '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, {}, '', 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, ( x: number ): number => x, '', 'and', true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, '', 5, 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', true, 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', false, 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', null, 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', undefined, 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', [], 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', {}, 'and', true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', ( x: number ): number => x, 'and', true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, '', '', 5, true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', true, true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', false, true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', null, true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', undefined, true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', [], true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', {}, true, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', ( x: number ): number => x, true, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a boolean...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, '', '', 'and', '5', x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', 5, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', null, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', undefined, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', [], x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', {}, x, 1, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not an array-like object...
{
	gconjoin.ndarray( 4, '', '', 'and', true, 5, 1, 0 ); // $ExpectError
	gconjoin.ndarray( 4, '', '', 'and', true, true, 1, 0 ); // $ExpectError
	gconjoin.ndarray( 4, '', '', 'and', true, false, 1, 0 ); // $ExpectError
	gconjoin.ndarray( 4, '', '', 'and', true, null, 1, 0 ); // $ExpectError
	gconjoin.ndarray( 4, '', '', 'and', true, undefined, 1, 0 ); // $ExpectError
	gconjoin.ndarray( 4, '', '', 'and', true, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, '', '', 'and', true, x, '5', 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, true, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, false, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, null, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, undefined, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, [], 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, {}, 0 ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, '5' ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, true ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, false ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, null ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, undefined ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, [] ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, {} ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided insufficient arguments...
{
	const x = [ 1, 2, 3, 4 ];

	gconjoin.ndarray(); // $ExpectError
	gconjoin.ndarray( x.length ); // $ExpectError
	gconjoin.ndarray( x.length, '' ); // $ExpectError
	gconjoin.ndarray( x.length, '', '' ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and' ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x ); // $ExpectError
	gconjoin.ndarray( x.length, '', '', 'and', true, x, 1 ); // $ExpectError
}

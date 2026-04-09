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

import gjoinBetween = require( './index' );


// TESTS //

// The function returns a string...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween( x.length, '', '', x, 1, sep, 1 ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween( '5', '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( true, '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( false, '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( null, '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( undefined, '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( [], '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( {}, '', '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( ( x: number ): number => x, '', '', x, 1, sep, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween( x.length, 5, '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, true, '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, false, '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, null, '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, undefined, '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, [], '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, {}, '', x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, ( x: number ): number => x, '', x, 1, sep, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween( x.length, '', 5, x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', true, x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', false, x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', null, x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', undefined, x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', [], x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', {}, x, 1, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', ( x: number ): number => x, x, 1, sep, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object...
{
	const sep = [ ',', '-', '|' ];

	gjoinBetween( 4, '', '', 5, 1, sep, 1 ); // $ExpectError
	gjoinBetween( 4, '', '', true, 1, sep, 1 ); // $ExpectError
	gjoinBetween( 4, '', '', false, 1, sep, 1 ); // $ExpectError
	gjoinBetween( 4, '', '', null, 1, sep, 1 ); // $ExpectError
	gjoinBetween( 4, '', '', undefined, 1, sep, 1 ); // $ExpectError
	gjoinBetween( 4, '', '', {}, 1, sep, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween( x.length, '', '', x, '5', sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, true, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, false, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, null, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, undefined, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, [], sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, {}, sep, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, ( x: number ): number => x, sep, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not an array-like object...
{
	const x = [ 1, 2, 3, 4 ];

	gjoinBetween( x.length, '', '', x, 1, 5, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, true, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, false, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, null, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, undefined, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween( x.length, '', '', x, 1, sep, '5' ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, true ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, false ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, null ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, undefined ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, [] ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, {} ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween(); // $ExpectError
	gjoinBetween( x.length ); // $ExpectError
	gjoinBetween( x.length, '' ); // $ExpectError
	gjoinBetween( x.length, '', '' ); // $ExpectError
	gjoinBetween( x.length, '', '', x ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1 ); // $ExpectError
	gjoinBetween( x.length, '', '', x, 1, sep ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a string...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectType string
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( '5', '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( true, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( false, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( null, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( undefined, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( [], '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( {}, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( ( x: number ): number => x, '', '', x, 1, 0, sep, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, 5, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, true, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, false, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, null, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, undefined, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, [], '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, {}, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, ( x: number ): number => x, '', x, 1, 0, sep, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a string...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, '', 5, x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', true, x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', false, x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', null, x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', undefined, x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', [], x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', {}, x, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', ( x: number ): number => x, x, 1, 0, sep, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not an array-like object...
{
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( 4, '', '', 5, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( 4, '', '', true, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( 4, '', '', false, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( 4, '', '', null, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( 4, '', '', undefined, 1, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( 4, '', '', {}, 1, 0, sep, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, '', '', x, '5', 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, true, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, false, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, null, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, undefined, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, [], 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, {}, 0, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, ( x: number ): number => x, 0, sep, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, '', '', x, 1, '5', sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, true, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, false, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, null, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, undefined, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, [], sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, {}, sep, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, ( x: number ): number => x, sep, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not an array-like object...
{
	const x = [ 1, 2, 3, 4 ];

	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, 5, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, true, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, false, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, null, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, '5', 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, true, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, false, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, null, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, undefined, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, [], 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, {}, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, '5' ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, true ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, false ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, null ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, undefined ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, [] ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, {} ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided insufficient arguments...
{
	const x = [ 1, 2, 3, 4 ];
	const sep = [ ',', '-', '|' ];

	gjoinBetween.ndarray(); // $ExpectError
	gjoinBetween.ndarray( x.length ); // $ExpectError
	gjoinBetween.ndarray( x.length, '' ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '' ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0 ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep ); // $ExpectError
	gjoinBetween.ndarray( x.length, '', '', x, 1, 0, sep, 1 ); // $ExpectError
}

/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import take2d = require( './index' );


// TESTS //

// The function returns a nested array...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	take2d( x, [ 0, 1 ], 0, 'throw' ); // $ExpectType OutputArrayDim0<number>
	take2d( x, [ 0, 1 ], 1, 'throw' ); // $ExpectType OutputArrayDim1<number>
}

// The compiler throws an error if the function is provided a first argument which is not a nested array...
{
	take2d( '5', [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( 1, [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( true, [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( false, [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( null, [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( void 0, [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( {}, [ 0, 1 ], 1, 'throw' ); // $ExpectError
	take2d( ( x: number ): number => x, [ 0, 1 ], 1, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	take2d( x, '5', 1, 'throw' ); // $ExpectError
	take2d( x, 1, 1, 'throw' ); // $ExpectError
	take2d( x, true, 1, 'throw' ); // $ExpectError
	take2d( x, false, 1, 'throw' ); // $ExpectError
	take2d( x, null, 1, 'throw' ); // $ExpectError
	take2d( x, void 0, 1, 'throw' ); // $ExpectError
	take2d( x, {}, 1, 'throw' ); // $ExpectError
	take2d( x, ( x: number ): number => x, 1, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	take2d( x, [ 0, 1 ], '5', 'throw' ); // $ExpectError
	take2d( x, [ 0, 1 ], true, 'throw' ); // $ExpectError
	take2d( x, [ 0, 1 ], false, 'throw' ); // $ExpectError
	take2d( x, [ 0, 1 ], null, 'throw' ); // $ExpectError
	take2d( x, [ 0, 1 ], void 0, 'throw' ); // $ExpectError
	take2d( x, [ 0, 1 ], {}, 'throw' ); // $ExpectError
	take2d( x, [ 0, 1 ], ( x: number ): number => x, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a recognized index mode...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	take2d( x, [ 0, 1 ], 1, '5' ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, 1 ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, true ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, false ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, null ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, void 0 ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, {} ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	take2d(); // $ExpectError
	take2d( x ); // $ExpectError
	take2d( x, [ 0, 1 ] ); // $ExpectError
	take2d( x, [ 0, 1 ], 1 ); // $ExpectError
	take2d( x, [ 0, 1 ], 1, 'throw', {} ); // $ExpectError
}

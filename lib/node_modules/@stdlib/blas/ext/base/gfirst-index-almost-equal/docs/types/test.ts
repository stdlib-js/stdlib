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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gfirstIndexAlmostEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, 1 ); // $ExpectType number
	gfirstIndexAlmostEqual( x.length, 1, new AccessorArray( x ), 1, new AccessorArray( y ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( '1', 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( true, 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( false, 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( null, 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( undefined, 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( [], 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( {}, 1, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( ( x: number ): number => x, 1, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( x.length, '1', x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, true, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, false, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, null, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, [], x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, {}, x, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( 3, 1, 10, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, true, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, false, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, null, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, undefined, 1, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, {}, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( x.length, 1, x, '1', y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, true, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, false, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, null, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, undefined, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, [], y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, {}, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( x.length, 1, x, 1, 10, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, true, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, false, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, null, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, undefined, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, '1' ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, true ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, false ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, null ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, undefined ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, [] ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, {} ); // $ExpectError
	gfirstIndexAlmostEqual( x.length, 1, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual(); // $ExpectError
	gfirstIndexAlmostEqual( 3 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, x ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, x, 1 ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, x, 1, y ); // $ExpectError
	gfirstIndexAlmostEqual( 3, 1, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, 0 ); // $ExpectType number
	gfirstIndexAlmostEqual.ndarray( x.length, 1, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( '1', 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( true, 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( false, 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( null, 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( undefined, 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( [], 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( {}, 1, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( ( x: number ): number => x, 1, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, '1', x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( 3, 1, 10, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, true, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, false, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, null, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, {}, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, '1', 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, true, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, false, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, null, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, undefined, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, [], 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, {}, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, '1', y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, true, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, false, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, null, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, undefined, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, [], y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, {}, y, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a collection...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, true, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, false, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, null, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, '1', 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, true, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, false, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, null, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, undefined, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, [], 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, {}, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, '1' ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, true ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, false ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, null ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, undefined ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, [] ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, {} ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexAlmostEqual.ndarray(); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, x ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, x, 1 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, x, 1, 0 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, x, 1, 0, y ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, x, 1, 0, y, 1 ); // $ExpectError
	gfirstIndexAlmostEqual.ndarray( 3, 1, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

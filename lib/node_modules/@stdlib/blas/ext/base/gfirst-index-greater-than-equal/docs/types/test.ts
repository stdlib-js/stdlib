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
import gfirstIndexGreaterThanEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual( x.length, x, 1, y, 1 ); // $ExpectType number
	gfirstIndexGreaterThanEqual( x.length, new AccessorArray( x ), 1, new AccessorArray( y ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual( '1', x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( true, x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( false, x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( null, x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( undefined, x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( [], x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( {}, x, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual( 3, 10, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, true, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, false, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, null, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, undefined, 1, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, {}, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual( x.length, x, '1', y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, true, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, false, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, null, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, undefined, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, [], y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, {}, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual( x.length, x, 1, 10, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, true, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, false, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, null, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, undefined, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual( x.length, x, 1, y, '1' ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, true ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, false ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, null ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, undefined ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, [] ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, {} ); // $ExpectError
	gfirstIndexGreaterThanEqual( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual(); // $ExpectError
	gfirstIndexGreaterThanEqual( 3 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, x ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, x, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, x, 1, y ); // $ExpectError
	gfirstIndexGreaterThanEqual( 3, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType number
	gfirstIndexGreaterThanEqual.ndarray( x.length, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( '1', x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( 3, 10, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, true, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, false, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, null, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, {}, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( x.length, x, '1', 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, '1', y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	var x = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, '1', 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, '1' ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	var x = [ 1.0, 2.0, 3.0 ];
	var y = [ 1.0, 2.0, 3.0 ];

	gfirstIndexGreaterThanEqual.ndarray(); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, x ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, x, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, x, 1, 0 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, x, 1, 0, y ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, x, 1, 0, y, 1 ); // $ExpectError
	gfirstIndexGreaterThanEqual.ndarray( 3, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

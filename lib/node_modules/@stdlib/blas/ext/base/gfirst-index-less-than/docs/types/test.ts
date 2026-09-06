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
import gfirstIndexLessThan = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan( x.length, x, 1, y, 1 ); // $ExpectType number
	gfirstIndexLessThan( x.length, new AccessorArray( x ), 1, new AccessorArray( y ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan( '10', x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( true, x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( false, x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( null, x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( undefined, x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( [], x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( {}, x, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan( 3, 10, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( 3, true, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( 3, false, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( 3, null, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( 3, undefined, 1, y, 1 ); // $ExpectError
	gfirstIndexLessThan( 3, {}, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan( x.length, x, '10', y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, true, y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, false, y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, null, y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, undefined, y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, [], y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, {}, y, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gfirstIndexLessThan( x.length, x, 1, 10, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, true, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, false, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, null, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, undefined, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan( x.length, x, 1, y, '10' ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, true ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, false ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, null ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, undefined ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, [] ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, {} ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan(); // $ExpectError
	gfirstIndexLessThan( x.length ); // $ExpectError
	gfirstIndexLessThan( x.length, x ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1 ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y ); // $ExpectError
	gfirstIndexLessThan( x.length, x, 1, y, 1, 0 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType number
	gfirstIndexLessThan.ndarray( x.length, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( [], x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( 3, 10, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( 3, true, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( 3, false, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( 3, null, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( 3, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( 3, {}, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( x.length, x, '10', 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, undefined, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, [], 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( x.length, x, 1, '10', y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, undefined, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, [], y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = [ 1.0, 2.0, 3.0 ];

	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, '10', 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, undefined, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, [], 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, '10' ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, undefined ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, [] ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0 ];
	const y = [ 2.0, 1.0, 2.0 ];

	gfirstIndexLessThan.ndarray(); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	gfirstIndexLessThan.ndarray( x.length, x, 1, 0, y, 1, 0, 0 ); // $ExpectError
}

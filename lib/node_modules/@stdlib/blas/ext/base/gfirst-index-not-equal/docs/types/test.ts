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
import gfirstIndexNotEqual = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual( x.length, x, 1, y, 1 ); // $ExpectType number
	gfirstIndexNotEqual( x.length, new AccessorArray( x ), 1, new AccessorArray( y ), 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual( '1', x, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( true, x, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( false, x, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( null, x, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( {}, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual( x.length, 5, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, true, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, false, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, null, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, undefined, 1, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, {}, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual( x.length, x, '1', y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, true, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, false, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, null, y, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, {}, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = [ 0, 0, 1, 0 ];

	gfirstIndexNotEqual( x.length, x, 1, 5, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, true, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, false, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, null, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, undefined, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual( x.length, x, 1, y, '1' ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, y, true ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, y, false ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, y, null ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, y, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual(); // $ExpectError
	gfirstIndexNotEqual( x.length ); // $ExpectError
	gfirstIndexNotEqual( x.length, x ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1 ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, y ); // $ExpectError
	gfirstIndexNotEqual( x.length, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectType number
	gfirstIndexNotEqual.ndarray( x.length, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( '1', x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( true, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( false, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( null, x, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( {}, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, 5, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, true, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, false, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, null, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, {}, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, x, '1', 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, true, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, false, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, null, 0, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, {}, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, x, 1, '1', y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, true, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, false, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, null, y, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, {}, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = [ 0, 0, 1, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, 5, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, '1', 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, true, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, false, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, null, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, '1' ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, true ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, false ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, null ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, {} ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 0 ];
	const y = [ 0, 0, 0, 0 ];

	gfirstIndexNotEqual.ndarray(); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	gfirstIndexNotEqual.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

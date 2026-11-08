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

/* eslint-disable space-in-parens */

import AccessorArray = require( '@stdlib/array/base/accessor' );
import BooleanArray = require( '@stdlib/array/bool' );
import gcuany = require( './index' );


// TESTS //

// The function returns a boolean array...
{
	const x = [ 0, 0, 1, 0 ];
	const out = new BooleanArray( 4 );

	gcuany( x.length, x, 1, out, 1 ); // $ExpectType BooleanArray
	gcuany( x.length, new AccessorArray( x ), 1, new AccessorArray( [ false, false, false, false ] ), 1 ); // $ExpectType AccessorArray<boolean>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany( '10', x, 1, out, 1 ); // $ExpectError
	gcuany( true, x, 1, out, 1 ); // $ExpectError
	gcuany( false, x, 1, out, 1 ); // $ExpectError
	gcuany( null, x, 1, out, 1 ); // $ExpectError
	gcuany( undefined, x, 1, out, 1 ); // $ExpectError
	gcuany( [], x, 1, out, 1 ); // $ExpectError
	gcuany( {}, x, 1, out, 1 ); // $ExpectError
	gcuany( ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const out = [ false, false, false, false ];

	gcuany( 4, 10, 1, out, 1 ); // $ExpectError
	gcuany( 4, true, 1, out, 1 ); // $ExpectError
	gcuany( 4, false, 1, out, 1 ); // $ExpectError
	gcuany( 4, null, 1, out, 1 ); // $ExpectError
	gcuany( 4, undefined, 1, out, 1 ); // $ExpectError
	gcuany( 4, {}, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany( x.length, x, '10', out, 1 ); // $ExpectError
	gcuany( x.length, x, true, out, 1 ); // $ExpectError
	gcuany( x.length, x, false, out, 1 ); // $ExpectError
	gcuany( x.length, x, null, out, 1 ); // $ExpectError
	gcuany( x.length, x, undefined, out, 1 ); // $ExpectError
	gcuany( x.length, x, [], out, 1 ); // $ExpectError
	gcuany( x.length, x, {}, out, 1 ); // $ExpectError
	gcuany( x.length, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a collection...
{
	const x = [ 0, 0, 1, 0 ];

	gcuany( x.length, x, 1, 10, 1 ); // $ExpectError
	gcuany( x.length, x, 1, true, 1 ); // $ExpectError
	gcuany( x.length, x, 1, false, 1 ); // $ExpectError
	gcuany( x.length, x, 1, null, 1 ); // $ExpectError
	gcuany( x.length, x, 1, undefined, 1 ); // $ExpectError
	gcuany( x.length, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany( x.length, x, 1, out, '10' ); // $ExpectError
	gcuany( x.length, x, 1, out, true ); // $ExpectError
	gcuany( x.length, x, 1, out, false ); // $ExpectError
	gcuany( x.length, x, 1, out, null ); // $ExpectError
	gcuany( x.length, x, 1, out, undefined ); // $ExpectError
	gcuany( x.length, x, 1, out, [] ); // $ExpectError
	gcuany( x.length, x, 1, out, {} ); // $ExpectError
	gcuany( x.length, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany(); // $ExpectError
	gcuany( x.length ); // $ExpectError
	gcuany( x.length, x ); // $ExpectError
	gcuany( x.length, x, 1 ); // $ExpectError
	gcuany( x.length, x, 1, out ); // $ExpectError
	gcuany( x.length, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a boolean array...
{
	const x = [ 0, 0, 1, 0 ];
	const out = new BooleanArray( 4 );

	gcuany.ndarray( x.length, x, 1, 0, out, 1, 0 ); // $ExpectType BooleanArray
	gcuany.ndarray( x.length, new AccessorArray( x ), 1, 0, new AccessorArray( [ false, false, false, false ] ), 1, 0 ); // $ExpectType AccessorArray<boolean>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany.ndarray( '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( true, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( false, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( null, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( [], x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a collection...
{
	const out = [ false, false, false, false ];

	gcuany.ndarray( 4, 10, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( 4, true, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( 4, false, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( 4, null, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( 4, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( 4, {}, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany.ndarray( x.length, x, '10', 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, true, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, false, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, null, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, undefined, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, [], 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, {}, 0, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany.ndarray( x.length, x, 1, '10', out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, true, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, false, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, null, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, undefined, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, [], out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, {}, out, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a collection...
{
	const x = [ 0, 0, 1, 0 ];

	gcuany.ndarray( x.length, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, true, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, false, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, null, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany.ndarray( x.length, x, 1, 0, out, '10', 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, true, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, false, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, null, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, undefined, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, [], 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, {}, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany.ndarray( x.length, x, 1, 0, out, 1, '10' ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, true ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, false ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, null ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, undefined ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, [] ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, {} ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 0 ];
	const out = [ false, false, false, false ];

	gcuany.ndarray(); // $ExpectError
	gcuany.ndarray( x.length ); // $ExpectError
	gcuany.ndarray( x.length, x ); // $ExpectError
	gcuany.ndarray( x.length, x, 1 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1 ); // $ExpectError
	gcuany.ndarray( x.length, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}

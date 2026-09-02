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
import gcusome = require( './index' );


// TESTS //

// The function returns a boolean array...
{
	const x = [ 0, 0, 1, 1 ];
	const out = new BooleanArray( 4 );

	gcusome( x.length, 2, x, 1, out, 1 ); // $ExpectType BooleanArray
	gcusome( x.length, 2, new AccessorArray( x ), 1, new AccessorArray( [ false, false, false, false ] ), 1 ); // $ExpectType AccessorArray<boolean>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome( '10', 2, x, 1, out, 1 ); // $ExpectError
	gcusome( true, 2, x, 1, out, 1 ); // $ExpectError
	gcusome( false, 2, x, 1, out, 1 ); // $ExpectError
	gcusome( null, 2, x, 1, out, 1 ); // $ExpectError
	gcusome( undefined, 2, x, 1, out, 1 ); // $ExpectError
	gcusome( [], 2, x, 1, out, 1 ); // $ExpectError
	gcusome( {}, 2, x, 1, out, 1 ); // $ExpectError
	gcusome( ( x: number ): number => x, 2, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome( x.length, '10', x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, true, x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, false, x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, null, x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, undefined, x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, [], x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, {}, x, 1, out, 1 ); // $ExpectError
	gcusome( x.length, ( x: number ): number => x, x, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const out = [ false, false, false, false ];

	gcusome( 4, 2, 10, 1, out, 1 ); // $ExpectError
	gcusome( 4, 2, true, 1, out, 1 ); // $ExpectError
	gcusome( 4, 2, false, 1, out, 1 ); // $ExpectError
	gcusome( 4, 2, null, 1, out, 1 ); // $ExpectError
	gcusome( 4, 2, undefined, 1, out, 1 ); // $ExpectError
	gcusome( 4, 2, {}, 1, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome( x.length, 2, x, '10', out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, true, out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, false, out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, null, out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, undefined, out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, [], out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, {}, out, 1 ); // $ExpectError
	gcusome( x.length, 2, x, ( x: number ): number => x, out, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const x = [ 0, 0, 1, 1 ];

	gcusome( x.length, 2, x, 1, 10, 1 ); // $ExpectError
	gcusome( x.length, 2, x, 1, true, 1 ); // $ExpectError
	gcusome( x.length, 2, x, 1, false, 1 ); // $ExpectError
	gcusome( x.length, 2, x, 1, null, 1 ); // $ExpectError
	gcusome( x.length, 2, x, 1, undefined, 1 ); // $ExpectError
	gcusome( x.length, 2, x, 1, {}, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome( x.length, 2, x, 1, out, '10' ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, true ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, false ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, null ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, undefined ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, [] ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, {} ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome(); // $ExpectError
	gcusome( x.length ); // $ExpectError
	gcusome( x.length, 2 ); // $ExpectError
	gcusome( x.length, 2, x ); // $ExpectError
	gcusome( x.length, 2, x, 1 ); // $ExpectError
	gcusome( x.length, 2, x, 1, out ); // $ExpectError
	gcusome( x.length, 2, x, 1, out, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a boolean array...
{
	const x = [ 0, 0, 1, 1 ];
	const out = new BooleanArray( 4 );

	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0 ); // $ExpectType BooleanArray
	gcusome.ndarray( x.length, 2, new AccessorArray( x ), 1, 0, new AccessorArray( [ false, false, false, false ] ), 1, 0 ); // $ExpectType AccessorArray<boolean>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray( '10', 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( true, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( false, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( null, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( undefined, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( [], 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( {}, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( ( x: number ): number => x, 2, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray( x.length, '10', x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, true, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, false, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, null, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, undefined, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, [], x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, {}, x, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, ( x: number ): number => x, x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const out = [ false, false, false, false ];

	gcusome.ndarray( 4, 2, 10, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( 4, 2, true, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( 4, 2, false, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( 4, 2, null, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( 4, 2, undefined, 1, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( 4, 2, {}, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray( x.length, 2, x, '10', 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, true, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, false, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, null, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, undefined, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, [], 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, {}, 0, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray( x.length, 2, x, 1, '10', out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, true, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, false, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, null, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, undefined, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, [], out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, {}, out, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a collection...
{
	const x = [ 0, 0, 1, 1 ];

	gcusome.ndarray( x.length, 2, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray( x.length, 2, x, 1, 0, out, '10', 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, true, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, false, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, null, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, undefined, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, [], 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, {}, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, '10' ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, true ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, false ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, null ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, undefined ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, [] ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, {} ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = [ 0, 0, 1, 1 ];
	const out = [ false, false, false, false ];

	gcusome.ndarray(); // $ExpectError
	gcusome.ndarray( x.length ); // $ExpectError
	gcusome.ndarray( x.length, 2 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1 ); // $ExpectError
	gcusome.ndarray( x.length, 2, x, 1, 0, out, 1, 0, 10 ); // $ExpectError
}

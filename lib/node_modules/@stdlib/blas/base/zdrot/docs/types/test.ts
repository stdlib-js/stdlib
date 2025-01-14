/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import Complex128Array = require( '@stdlib/array/complex128' );
import zdrot = require( './index' );


// TESTS //

// The function returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( zx.length, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( '10', zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( true, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( false, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( null, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( undefined, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( [], zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( {}, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( ( zx: number ): number => zx, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( zx.length, 10, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, '10', 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, true, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, false, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, null, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, undefined, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, [ '1' ], 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, {}, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, ( zx: number ): number => zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( zx.length, zx, '10', zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, true, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, false, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, null, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, undefined, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, [], zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, {}, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, ( zx: number ): number => zx, zy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdrot( zx.length, zx, 1, 10, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, '10', 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, true, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, false, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, null, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, undefined, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, [ '1' ], 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, {}, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, ( zx: number ): number => zx, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( zx.length, zx, 1, zy, '10', 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, true, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, false, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, null, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, undefined, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, [], 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, {}, 0.8, 0.6 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, ( zx: number ): number => zx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( zx.length, zx, 1, zy, 1, '10', 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, true, 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, false, 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, null, 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, undefined, 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, [], 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, {}, 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, ( zx: number ): number => zx, 0.8 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot( zx.length, zx, 1, zy, 1, 0.8, '10' ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, true ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, false ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, null ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, undefined ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, [] ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, {} ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot(); // $ExpectError
	zdrot( zx.length ); // $ExpectError
	zdrot( zx.length, zx ); // $ExpectError
	zdrot( zx.length, zx, 1 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8 ); // $ExpectError
	zdrot( zx.length, zx, 1, zy, 1, 0.8, 0.6, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( '10', zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( true, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( false, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( null, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( undefined, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( [], zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( {}, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( ( zx: number ): number => zx, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, 10, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, '10', 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, true, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, false, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, null, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, undefined, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, [ '1' ], 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, {}, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, ( zx: number ): number => zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, '10', 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, true, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, false, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, null, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, undefined, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, [], 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, {}, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, ( zx: number ): number => zx, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, '10', zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, true, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, false, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, null, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, undefined, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, [], zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, {}, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, ( zx: number ): number => zx, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, 10, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, '10', 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, true, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, false, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, null, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, undefined, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, [ '1' ], 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, {}, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, ( zx: number ): number => zx, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, '10', 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, true, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, false, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, null, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, undefined, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, [], 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, {}, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, ( zx: number ): number => zx, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, '10', 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, true, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, false, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, null, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, undefined, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, [], 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, {}, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, ( zx: number ): number => zx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, '10', 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, true, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, false, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, null, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, undefined, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, [], 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, {}, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, ( zx: number ): number => zx, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, '10' ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, true ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, false ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, null ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, undefined ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, [] ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, {} ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray(); // $ExpectError
	zdrot.ndarray( zx.length ); // $ExpectError
	zdrot.ndarray( zx.length, zx ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6, 10 ); // $ExpectError
}

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
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( x.length, x, 1, y, 1, 0.8, 0.6 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( '10', x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( true, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( false, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( null, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( undefined, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( [], x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( {}, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( ( x: number ): number => x, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( x.length, 10, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, '10', 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, true, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, false, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, null, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, undefined, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, [ '1' ], 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, {}, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, ( x: number ): number => x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( x.length, x, '10', y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, true, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, false, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, null, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, undefined, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, [], y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, {}, y, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, ( x: number ): number => x, y, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zdrot( x.length, x, 1, 10, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, '10', 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, true, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, false, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, null, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, undefined, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, [ '1' ], 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, {}, 1, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, ( x: number ): number => x, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( x.length, x, 1, y, '10', 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, true, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, false, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, null, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, undefined, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, [], 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, {}, 0.8, 0.6 ); // $ExpectError
	zdrot( x.length, x, 1, y, ( x: number ): number => x, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( x.length, x, 1, y, 1, '10', 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, true, 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, false, 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, null, 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, undefined, 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, [], 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, {}, 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, ( x: number ): number => x, 0.8 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot( x.length, x, 1, y, 1, 0.8, '10' ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, true ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, false ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, null ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, undefined ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, [] ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, {} ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot(); // $ExpectError
	zdrot( x.length ); // $ExpectError
	zdrot( x.length, x ); // $ExpectError
	zdrot( x.length, x, 1 ); // $ExpectError
	zdrot( x.length, x, 1, y ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8 ); // $ExpectError
	zdrot( x.length, x, 1, y, 1, 0.8, 0.6, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( '10', x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( true, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( false, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( null, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( undefined, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( [], x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( {}, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, 10, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, '10', 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, true, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, false, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, null, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, undefined, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, {}, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, '10', 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, true, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, false, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, null, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, undefined, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, [], 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, {}, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, '10', y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, true, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, false, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, null, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, undefined, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, [], y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, {}, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, 0, 10, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, '10', 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, true, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, false, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, null, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, undefined, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, {}, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, 0, y, '10', 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, true, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, false, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, null, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, undefined, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, [], 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, {}, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, 0, y, 1, '10', 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, true, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, false, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, null, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, undefined, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, [], 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, {}, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, '10', 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, true, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, false, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, null, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, [], 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, {}, 0.6 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, '10' ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, true ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, false ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, null ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, undefined ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, [] ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, {} ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const y = new Complex128Array( 10 );

	zdrot.ndarray(); // $ExpectError
	zdrot.ndarray( x.length ); // $ExpectError
	zdrot.ndarray( x.length, x ); // $ExpectError
	zdrot.ndarray( x.length, x, 1 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8 ); // $ExpectError
	zdrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6, 10 ); // $ExpectError
}

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

import Complex64Array = require( '@stdlib/array/complex64' );
import csrot = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( x.length, x, 1, y, 1, 0.8, 0.6 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( '10', x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( true, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( false, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( null, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( undefined, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( [], x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( {}, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( ( x: number ): number => x, x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( x.length, 10, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, '10', 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, true, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, false, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, null, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, undefined, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, [ '1' ], 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, {}, 1, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, ( x: number ): number => x, 1, y, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( x.length, x, '10', y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, true, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, false, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, null, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, undefined, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, [], y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, {}, y, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, ( x: number ): number => x, y, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	csrot( x.length, x, 1, 10, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, '10', 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, true, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, false, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, null, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, undefined, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, [ '1' ], 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, {}, 1, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, ( x: number ): number => x, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( x.length, x, 1, y, '10', 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, true, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, false, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, null, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, undefined, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, [], 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, {}, 0.8, 0.6 ); // $ExpectError
	csrot( x.length, x, 1, y, ( x: number ): number => x, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( x.length, x, 1, y, 1, '10', 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, true, 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, false, 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, null, 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, undefined, 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, [], 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, {}, 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, ( x: number ): number => x, 0.8 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot( x.length, x, 1, y, 1, 0.8, '10' ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, true ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, false ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, null ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, undefined ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, [] ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, {} ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot(); // $ExpectError
	csrot( x.length ); // $ExpectError
	csrot( x.length, x ); // $ExpectError
	csrot( x.length, x, 1 ); // $ExpectError
	csrot( x.length, x, 1, y ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8 ); // $ExpectError
	csrot( x.length, x, 1, y, 1, 0.8, 0.6, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( '10', x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( true, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( false, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( null, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( undefined, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( [], x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( {}, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, 10, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, '10', 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, true, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, false, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, null, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, undefined, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, [ '1' ], 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, {}, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, '10', 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, true, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, false, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, null, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, undefined, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, [], 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, {}, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, '10', y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, true, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, false, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, null, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, undefined, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, [], y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, {}, y, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, 0, 10, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, '10', 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, true, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, false, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, null, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, undefined, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, [ '1' ], 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, {}, 1, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, 0, y, '10', 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, true, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, false, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, null, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, undefined, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, [], 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, {}, 0, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, 0, y, 1, '10', 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, true, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, false, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, null, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, undefined, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, [], 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, {}, 0.8, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, '10', 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, true, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, false, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, null, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, [], 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, {}, 0.6 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, '10' ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, true ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, false ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, null ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, undefined ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, [] ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, {} ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	csrot.ndarray(); // $ExpectError
	csrot.ndarray( x.length ); // $ExpectError
	csrot.ndarray( x.length, x ); // $ExpectError
	csrot.ndarray( x.length, x, 1 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8 ); // $ExpectError
	csrot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.8, 0.6, 10 ); // $ExpectError
}

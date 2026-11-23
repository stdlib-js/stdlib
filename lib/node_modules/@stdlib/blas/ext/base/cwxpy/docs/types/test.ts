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

import Complex64Array = require( '@stdlib/array/complex64' );
import cwxpy = require( './index' );


// TESTS //

// The function returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( x.length, x, 1, y, 1, w, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( '10', x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( true, x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( false, x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( null, x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( undefined, x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( [], x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( {}, x, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( ( x: number ): number => x, x, 1, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( 10, 10, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, '10', 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, true, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, false, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, null, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, undefined, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, [], 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, {}, 1, y, 1, w, 1 ); // $ExpectError
	cwxpy( 10, ( x: number ): number => x, 1, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( x.length, x, '10', y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, true, y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, false, y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, null, y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, undefined, y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, [], y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, {}, y, 1, w, 1 ); // $ExpectError
	cwxpy( x.length, x, ( x: number ): number => x, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( 10, x, 1, 10, 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, '10', 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, true, 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, false, 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, null, 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, undefined, 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, [], 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, {}, 1, w, 1 ); // $ExpectError
	cwxpy( 10, x, 1, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( x.length, x, 1, y, '10', w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, true, w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, false, w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, null, w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, undefined, w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, [], w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, {}, w, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cwxpy( 10, x, 1, y, 1, 10, 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, '10', 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, true, 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, false, 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, null, 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, undefined, 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, [], 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, {}, 1 ); // $ExpectError
	cwxpy( 10, x, 1, y, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy( x.length, x, 1, y, 1, w, '10' ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, true ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, false ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, null ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, undefined ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, [] ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, {} ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy(); // $ExpectError
	cwxpy( x.length ); // $ExpectError
	cwxpy( x.length, x ); // $ExpectError
	cwxpy( x.length, x, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1 ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w ); // $ExpectError
	cwxpy( x.length, x, 1, y, 1, w, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( '10', x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( true, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( false, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( null, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( undefined, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( [], x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( {}, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( 10, 10, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, '10', 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, true, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, false, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, null, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, undefined, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, [], 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, {}, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, ( x: number ): number => x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, '10', 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, true, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, false, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, null, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, undefined, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, [], 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, {}, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, 1, '10', y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, true, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, false, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, null, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, undefined, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, [], y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, {}, y, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( 10, x, 1, 0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, true, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, false, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, null, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, [], 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, 1, 0, y, '10', 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, true, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, false, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, null, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, undefined, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, [], 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, {}, 0, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, 1, 0, y, 1, '10', w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, true, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, false, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, null, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, undefined, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, [], w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, {}, w, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );

	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, 10, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, '10', 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, true, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, false, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, null, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, undefined, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, [], 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, {}, 1, 0 ); // $ExpectError
	cwxpy.ndarray( 10, x, 1, 0, y, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, '10', 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, true, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, false, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, null, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, undefined, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, [], 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, {}, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, '10' ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, true ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, false ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, null ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, undefined ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, [] ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, {} ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );
	const y = new Complex64Array( 10 );
	const w = new Complex64Array( 10 );

	cwxpy.ndarray(); // $ExpectError
	cwxpy.ndarray( x.length ); // $ExpectError
	cwxpy.ndarray( x.length, x ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1 ); // $ExpectError
	cwxpy.ndarray( x.length, x, 1, 0, y, 1, 0, w, 1, 0, 10 ); // $ExpectError
}

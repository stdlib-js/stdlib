/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

import daxpy = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy( x.length, 5.0, x, 1, y, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy( '10', 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( true, 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( false, 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( null, 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( undefined, 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( [], 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( {}, 5.0, x, 1, y, 1 ); // $ExpectError
	daxpy( ( x: number ): number => x, 5.0, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy( x.length, '10', x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, true, x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, false, x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, null, x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, [], x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, {}, x, 1, y, 1 ); // $ExpectError
	daxpy( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy( x.length, 5.0, 10, 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, '10', 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, true, 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, false, 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, null, 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, undefined, 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, [], 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, {}, 1, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy( x.length, 5.0, x, '10', y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, true, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, false, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, null, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, undefined, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, [], y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, {}, y, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpy( x.length, 5.0, x, 1, 10, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, '10', 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, true, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, false, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, null, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, undefined, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, [], 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, {}, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy( x.length, 5.0, x, 1, y, '10' ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, true ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, false ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, null ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, undefined ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, [] ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, {} ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy(); // $ExpectError
	daxpy( x.length ); // $ExpectError
	daxpy( x.length, 5.0 ); // $ExpectError
	daxpy( x.length, 5.0, x ); // $ExpectError
	daxpy( x.length, 5.0, x, 1 ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y ); // $ExpectError
	daxpy( x.length, 5.0, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( '10', 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( true, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( false, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( null, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( undefined, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( [], 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( {}, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( ( x: number ): number => x, 5.0, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, 10, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, '10', 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, true, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, false, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, null, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, [], 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, {}, 1, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, x, '10', 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, true, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, false, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, null, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, undefined, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, [], 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, {}, 0, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, x, 1, '10', y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, true, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, false, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, null, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, undefined, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, [], y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, {}, y, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, x, 1, 0, 10, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, '10', 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, true, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, false, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, null, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, [], 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, '10', 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, true, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, false, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, null, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, undefined, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, [], 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, {}, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, '10' ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, true ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, false ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, null ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, undefined ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, [] ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, {} ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpy.ndarray(); // $ExpectError
	daxpy.ndarray( x.length ); // $ExpectError
	daxpy.ndarray( x.length, 5.0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1 ); // $ExpectError
	daxpy.ndarray( x.length, 5.0, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}

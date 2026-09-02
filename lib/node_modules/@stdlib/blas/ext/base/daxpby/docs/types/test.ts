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

import daxpby = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby( x.length, 5.0, x, 1, 2.0, y, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby( '10', 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( true, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( false, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( null, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( undefined, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( [], 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( {}, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( ( x: number ): number => x, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby( x.length, '10', x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, true, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, false, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, null, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, undefined, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, [], x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, {}, x, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, ( x: number ): number => x, x, 1, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );

	daxpby( 10, 5.0, 10, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, '10', 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, true, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, false, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, null, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, undefined, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, [ '1' ], 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, {}, 1, 2.0, y, 1 ); // $ExpectError
	daxpby( 10, 5.0, ( x: number ): number => x, 1, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby( x.length, 5.0, x, '10', 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, true, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, false, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, null, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, undefined, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, [], 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, {}, 2.0, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, ( x: number ): number => x, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby( x.length, 5.0, x, 1, '10', y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, true, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, false, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, null, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, undefined, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, [], y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, {}, y, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpby( 10, 5.0, x, 1, 2.0, 10, 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, '10', 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, true, 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, false, 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, null, 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, undefined, 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, [ '1' ], 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, {}, 1 ); // $ExpectError
	daxpby( 10, 5.0, x, 1, 2.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby( x.length, 5.0, x, 1, 2.0, y, '10' ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, true ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, false ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, null ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, undefined ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, [] ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, {} ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby(); // $ExpectError
	daxpby( x.length ); // $ExpectError
	daxpby( x.length, 5.0 ); // $ExpectError
	daxpby( x.length, 5.0, x ); // $ExpectError
	daxpby( x.length, 5.0, x, 1 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0 ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y ); // $ExpectError
	daxpby( x.length, 5.0, x, 1, 2.0, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( '10', 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( true, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( false, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( null, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( undefined, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( [], 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( {}, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( ( x: number ): number => x, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, '10', x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, true, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, false, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, null, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, undefined, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, [], x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, {}, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, ( x: number ): number => x, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const y = new Float64Array( 10 );

	daxpby.ndarray( 10, 5.0, 10, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, '10', 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, true, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, false, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, null, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, undefined, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, [ '1' ], 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, {}, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, ( x: number ): number => x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, 5.0, x, '10', 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, true, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, false, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, null, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, undefined, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, [], 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, {}, 0, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, 5.0, x, 1, '10', 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, true, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, false, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, null, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, undefined, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, [], 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, {}, 2.0, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, 5.0, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, 10, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, '10', 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, true, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, false, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, null, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, undefined, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, [ '1' ], 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, {}, 1, 0 ); // $ExpectError
	daxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, '10', 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, true, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, false, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, null, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, undefined, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, [], 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, {}, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, '10' ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, true ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, false ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, null ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, undefined ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, [] ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, {} ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	daxpby.ndarray(); // $ExpectError
	daxpby.ndarray( x.length ); // $ExpectError
	daxpby.ndarray( x.length, 5.0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1 ); // $ExpectError
	daxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0, 10 ); // $ExpectError
}

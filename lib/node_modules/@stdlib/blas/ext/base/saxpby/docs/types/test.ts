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

import saxpby = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby( x.length, 5.0, x, 1, 2.0, y, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby( '10', 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( true, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( false, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( null, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( undefined, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( [], 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( {}, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( ( x: number ): number => x, 5.0, x, 1, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby( x.length, '10', x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, true, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, false, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, null, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, undefined, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, [], x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, {}, x, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, ( x: number ): number => x, x, 1, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const y = new Float32Array( 10 );

	saxpby( 10, 5.0, 10, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, '10', 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, true, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, false, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, null, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, undefined, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, [ '1' ], 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, {}, 1, 2.0, y, 1 ); // $ExpectError
	saxpby( 10, 5.0, ( x: number ): number => x, 1, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby( x.length, 5.0, x, '10', 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, true, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, false, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, null, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, undefined, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, [], 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, {}, 2.0, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, ( x: number ): number => x, 2.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby( x.length, 5.0, x, 1, '10', y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, true, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, false, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, null, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, undefined, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, [], y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, {}, y, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	saxpby( 10, 5.0, x, 1, 2.0, 10, 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, '10', 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, true, 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, false, 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, null, 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, undefined, 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, [ '1' ], 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, {}, 1 ); // $ExpectError
	saxpby( 10, 5.0, x, 1, 2.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby( x.length, 5.0, x, 1, 2.0, y, '10' ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, true ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, false ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, null ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, undefined ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, [] ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, {} ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby(); // $ExpectError
	saxpby( x.length ); // $ExpectError
	saxpby( x.length, 5.0 ); // $ExpectError
	saxpby( x.length, 5.0, x ); // $ExpectError
	saxpby( x.length, 5.0, x, 1 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0 ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y ); // $ExpectError
	saxpby( x.length, 5.0, x, 1, 2.0, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( '10', 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( true, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( false, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( null, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( undefined, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( [], 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( {}, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( ( x: number ): number => x, 5.0, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, '10', x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, true, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, false, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, null, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, undefined, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, [], x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, {}, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, ( x: number ): number => x, x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const y = new Float32Array( 10 );

	saxpby.ndarray( 10, 5.0, 10, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, '10', 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, true, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, false, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, null, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, undefined, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, [ '1' ], 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, {}, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, ( x: number ): number => x, 1, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, 5.0, x, '10', 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, true, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, false, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, null, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, undefined, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, [], 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, {}, 0, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, 5.0, x, 1, '10', 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, true, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, false, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, null, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, undefined, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, [], 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, {}, 2.0, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x, 2.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, 5.0, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, 10, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, '10', 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, true, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, false, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, null, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, undefined, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, [ '1' ], 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, {}, 1, 0 ); // $ExpectError
	saxpby.ndarray( 10, 5.0, x, 1, 0, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, '10', 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, true, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, false, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, null, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, undefined, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, [], 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, {}, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, '10' ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, true ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, false ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, null ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, undefined ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, [] ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, {} ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	saxpby.ndarray(); // $ExpectError
	saxpby.ndarray( x.length ); // $ExpectError
	saxpby.ndarray( x.length, 5.0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1 ); // $ExpectError
	saxpby.ndarray( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0, 10 ); // $ExpectError
}

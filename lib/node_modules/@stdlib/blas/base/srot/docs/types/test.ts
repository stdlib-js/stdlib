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

import srot = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( x.length, x, 1, y, 1, 1.0, 0.0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( '10', x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( true, x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( false, x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( null, x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( undefined, x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( [], x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( {}, x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( ( x: number ): number => x, x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( x.length, 10, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, '10', 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, true, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, false, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, null, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, undefined, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, [], 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, {}, 1, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, ( x: number ): number => x, 1, y, 1, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( x.length, x, '10', y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, true, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, false, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, null, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, undefined, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, [], y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, {}, y, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, ( x: number ): number => x, y, 1, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	srot( x.length, x, 1, 10, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, '10', 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, true, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, false, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, null, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, undefined, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, [], 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, {}, 1, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, ( x: number ): number => x, 1, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( x.length, x, 1, y, '10', 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, true, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, false, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, null, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, undefined, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, [], 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, {}, 1.0, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, ( x: number ): number => x, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( x.length, x, 1, y, 1, '10', 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, true, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, false, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, null, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, undefined, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, [], 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, {}, 0.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, ( x: number ): number => x, 0.0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot( x.length, x, 1, y, 1, 1.0, '10' ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, true ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, false ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, null ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, undefined ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, [] ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, {} ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot(); // $ExpectError
	srot( x.length ); // $ExpectError
	srot( x.length, x ); // $ExpectError
	srot( x.length, x, 1 ); // $ExpectError
	srot( x.length, x, 1, y ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0 ); // $ExpectError
	srot( x.length, x, 1, y, 1, 1.0, 0.0, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( '10', x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( true, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( false, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( null, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( undefined, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( [], x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( {}, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, 10, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, '10', 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, true, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, false, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, null, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, undefined, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, [], 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, {}, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, '10', 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, true, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, false, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, null, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, undefined, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, [], 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, {}, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, '10', y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, true, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, false, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, null, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, undefined, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, [], y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, {}, y, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, 0, 10, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, '10', 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, true, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, false, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, null, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, undefined, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, [], 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, {}, 1, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, 0, y, '10', 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, true, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, false, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, null, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, undefined, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, [], 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, {}, 0, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, 0, y, 1, '10', 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, true, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, false, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, null, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, undefined, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, [], 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, {}, 1.0, 0.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, 1.0, 0.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, 0, y, 1, 0, '10', 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, true, 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, false, 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, null, 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, undefined, 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, [], 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, {}, 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x, 1.0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, '1.0' ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, true ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, false ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, null ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, undefined ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, [] ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, {} ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1, 0, 1.0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srot.ndarray(); // $ExpectError
	srot.ndarray( x.length ); // $ExpectError
	srot.ndarray( x.length, x ); // $ExpectError
	srot.ndarray( x.length, x, 1 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1.0 ); // $ExpectError
	srot.ndarray( x.length, x, 1, 0, y, 1.0, 0.0, 10 ); // $ExpectError
}

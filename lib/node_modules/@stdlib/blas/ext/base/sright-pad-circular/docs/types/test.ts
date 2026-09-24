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

import srightPadCircular = require( './index' );


// TESTS //

// The function returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular( x.length, 2, x, 1, y, 1 ); // $ExpectType Float32Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular( '10', 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( true, 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( false, 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( null, 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( undefined, 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( [], 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( {}, 2, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( ( x: number ): number => x, 2, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular( x.length, '10', x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, true, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, false, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, null, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, [], x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, {}, x, 1, y, 1 ); // $ExpectError
	srightPadCircular( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float32Array...
{
	const y = new Float32Array( 12 );

	srightPadCircular( 10, 2, 10, 1, y, 1 ); // $ExpectError
	srightPadCircular( 10, 2, true, 1, y, 1 ); // $ExpectError
	srightPadCircular( 10, 2, false, 1, y, 1 ); // $ExpectError
	srightPadCircular( 10, 2, null, 1, y, 1 ); // $ExpectError
	srightPadCircular( 10, 2, undefined, 1, y, 1 ); // $ExpectError
	srightPadCircular( 10, 2, {}, 1, y, 1 ); // $ExpectError
	srightPadCircular( 10, 2, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular( x.length, 2, x, '10', y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, true, y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, false, y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, null, y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, undefined, y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, [], y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, {}, y, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	srightPadCircular( x.length, 2, x, 1, 10, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, true, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, false, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, null, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, undefined, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, {}, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular( x.length, 2, x, 1, y, '10' ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, true ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, false ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, null ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, undefined ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, [] ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, {} ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular(); // $ExpectError
	srightPadCircular( x.length ); // $ExpectError
	srightPadCircular( x.length, 2 ); // $ExpectError
	srightPadCircular( x.length, 2, x ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1 ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y ); // $ExpectError
	srightPadCircular( x.length, 2, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, 0 ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( '10', 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( true, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( false, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( null, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( undefined, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( [], 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( {}, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( ( x: number ): number => x, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( 10, 2, 10, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( 10, 2, true, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( 10, 2, false, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( 10, 2, null, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( 10, 2, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( 10, 2, {}, 1, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( 10, 2, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( x.length, 2, x, '10', 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, true, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, false, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, null, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, undefined, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, [], 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, {}, 0, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( x.length, 2, x, 1, '10', y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, true, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, false, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, null, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, undefined, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, [], y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, {}, y, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	srightPadCircular.ndarray( x.length, 2, x, 1, 0, 10, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, '10', 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, true, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, false, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, null, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, undefined, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, [], 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, {}, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, '10' ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, true ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, false ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, null ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, undefined ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, [] ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, {} ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 12 );

	srightPadCircular.ndarray(); // $ExpectError
	srightPadCircular.ndarray( x.length ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1 ); // $ExpectError
	srightPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

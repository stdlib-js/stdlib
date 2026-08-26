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

import dminkowski = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski( x.length, 3, x, 1, y, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski( '10', 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( true, 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( false, 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( null, 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( undefined, 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( [], 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( {}, 3, x, 1, y, 1 ); // $ExpectError
	dminkowski( ( x: number ): number => x, 3, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski( x.length, '10', x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, true, x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, false, x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, null, x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, [], x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, {}, x, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski( x.length, 3, '10', 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, true, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, false, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, null, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, undefined, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, [], 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, {}, 1, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski( x.length, 3, x, '10', y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, true, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, false, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, null, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, undefined, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, [], y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, {}, y, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dminkowski( x.length, 3, x, 1, 10, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, '10', 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, true, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, false, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, null, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, undefined, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, [], 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, {}, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski( x.length, 3, x, 1, y, '10' ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, true ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, false ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, null ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, undefined ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, [] ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, {} ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski(); // $ExpectError
	dminkowski( x.length ); // $ExpectError
	dminkowski( x.length, 3 ); // $ExpectError
	dminkowski( x.length, 3, x ); // $ExpectError
	dminkowski( x.length, 3, x, 1 ); // $ExpectError
	dminkowski( x.length, 3, x, 1, y, 3, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( '10', 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( true, 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( false, 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( null, 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( undefined, 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( [], 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( {}, 3, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( ( x: number ): number => x, 3, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, 10, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, '10', 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, true, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, false, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, null, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, [], 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, {}, 1, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, x, '10', 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, true, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, false, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, null, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, undefined, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, [], 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, {}, 0, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, x, 1, '10', y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, true, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, false, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, null, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, undefined, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, [], y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, {}, y, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, '10', 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, true, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, false, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, null, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, [], 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, x, 1, 0, y, '10', 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, true, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, false, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, null, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, undefined, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, [], 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, {}, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, '10' ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, true ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, false ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, null ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, undefined ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, [] ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, {} ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dminkowski.ndarray(); // $ExpectError
	dminkowski.ndarray( x.length ); // $ExpectError
	dminkowski.ndarray( x.length, 3 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1 ); // $ExpectError
	dminkowski.ndarray( x.length, 3, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}

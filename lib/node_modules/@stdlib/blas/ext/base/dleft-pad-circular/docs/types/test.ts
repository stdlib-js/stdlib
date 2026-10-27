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

import dleftPadCircular = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular( x.length, 2, x, 1, y, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular( '10', 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( true, 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( false, 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( null, 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( undefined, 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( [], 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( {}, 2, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( ( x: number ): number => x, 2, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular( x.length, '10', x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, true, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, false, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, null, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, [], x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, {}, x, 1, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const y = new Float64Array( 12 );

	dleftPadCircular( 10, 2, 10, 1, y, 1 ); // $ExpectError
	dleftPadCircular( 10, 2, true, 1, y, 1 ); // $ExpectError
	dleftPadCircular( 10, 2, false, 1, y, 1 ); // $ExpectError
	dleftPadCircular( 10, 2, null, 1, y, 1 ); // $ExpectError
	dleftPadCircular( 10, 2, undefined, 1, y, 1 ); // $ExpectError
	dleftPadCircular( 10, 2, {}, 1, y, 1 ); // $ExpectError
	dleftPadCircular( 10, 2, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular( x.length, 2, x, '10', y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, true, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, false, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, null, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, undefined, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, [], y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, {}, y, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dleftPadCircular( x.length, 2, x, 1, 10, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, true, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, false, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, null, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, undefined, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, {}, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular( x.length, 2, x, 1, y, '10' ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, true ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, false ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, null ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, undefined ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, [] ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, {} ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular(); // $ExpectError
	dleftPadCircular( x.length ); // $ExpectError
	dleftPadCircular( x.length, 2 ); // $ExpectError
	dleftPadCircular( x.length, 2, x ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1 ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y ); // $ExpectError
	dleftPadCircular( x.length, 2, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( '10', 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( true, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( false, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( null, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( undefined, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( [], 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( {}, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( ( x: number ): number => x, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( 10, 2, 10, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( 10, 2, true, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( 10, 2, false, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( 10, 2, null, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( 10, 2, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( 10, 2, {}, 1, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( 10, 2, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( x.length, 2, x, '10', 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, true, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, false, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, null, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, undefined, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, [], 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, {}, 0, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( x.length, 2, x, 1, '10', y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, true, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, false, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, null, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, undefined, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, [], y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, {}, y, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, 10, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, '10', 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, true, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, false, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, null, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, undefined, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, [], 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, {}, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, '10' ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, true ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, false ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, null ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, undefined ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, [] ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, {} ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	dleftPadCircular.ndarray(); // $ExpectError
	dleftPadCircular.ndarray( x.length ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1 ); // $ExpectError
	dleftPadCircular.ndarray( x.length, 2, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

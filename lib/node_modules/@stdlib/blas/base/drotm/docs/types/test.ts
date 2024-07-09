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

import drotm = require( './index' );


// TESTS //

// The function returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm( x.length, x, 1, y, 1, param ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm( '10', x, 1, y, 1, param ); // $ExpectError
	drotm( true, x, 1, y, 1, param ); // $ExpectError
	drotm( false, x, 1, y, 1, param ); // $ExpectError
	drotm( null, x, 1, y, 1, param ); // $ExpectError
	drotm( undefined, x, 1, y, 1, param ); // $ExpectError
	drotm( [], x, 1, y, 1, param ); // $ExpectError
	drotm( {}, x, 1, y, 1, param ); // $ExpectError
	drotm( ( x: number ): number => x, x, 1, y, 1, param ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm( x.length, 10, 1, y, 1, param ); // $ExpectError
	drotm( x.length, '10', 1, y, 1, param ); // $ExpectError
	drotm( x.length, true, 1, y, 1, param ); // $ExpectError
	drotm( x.length, false, 1, y, 1, param ); // $ExpectError
	drotm( x.length, null, 1, y, 1, param ); // $ExpectError
	drotm( x.length, undefined, 1, y, 1, param ); // $ExpectError
	drotm( x.length, [], 1, y, 1, param ); // $ExpectError
	drotm( x.length, {}, 1, y, 1, param ); // $ExpectError
	drotm( x.length, ( x: number ): number => x, 1, y, 1, param ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm( x.length, x, '10', y, 1, param ); // $ExpectError
	drotm( x.length, x, true, y, 1, param ); // $ExpectError
	drotm( x.length, x, false, y, 1, param ); // $ExpectError
	drotm( x.length, x, null, y, 1, param ); // $ExpectError
	drotm( x.length, x, undefined, y, 1, param ); // $ExpectError
	drotm( x.length, x, [], y, 1, param ); // $ExpectError
	drotm( x.length, x, {}, y, 1, param ); // $ExpectError
	drotm( x.length, x, ( x: number ): number => x, y, 1, param ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm( x.length, x, 1, 10, 1, param ); // $ExpectError
	drotm( x.length, x, 1, '10', 1, param ); // $ExpectError
	drotm( x.length, x, 1, true, 1, param ); // $ExpectError
	drotm( x.length, x, 1, false, 1, param ); // $ExpectError
	drotm( x.length, x, 1, null, 1, param ); // $ExpectError
	drotm( x.length, x, 1, undefined, 1, param ); // $ExpectError
	drotm( x.length, x, 1, [], 1, param ); // $ExpectError
	drotm( x.length, x, 1, {}, 1, param ); // $ExpectError
	drotm( x.length, x, 1, ( x: number ): number => x, 1, param ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm( x.length, x, 1, y, '10', param ); // $ExpectError
	drotm( x.length, x, 1, y, true, param ); // $ExpectError
	drotm( x.length, x, 1, y, false, param ); // $ExpectError
	drotm( x.length, x, 1, y, null, param ); // $ExpectError
	drotm( x.length, x, 1, y, undefined, param ); // $ExpectError
	drotm( x.length, x, 1, y, [], param ); // $ExpectError
	drotm( x.length, x, 1, y, {}, param ); // $ExpectError
	drotm( x.length, x, 1, y, ( x: number ): number => x, param ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	drotm( x.length, x, 1, y, 1, 10 ); // $ExpectError
	drotm( x.length, x, 1, y, 1, '10' ); // $ExpectError
	drotm( x.length, x, 1, y, 1, true ); // $ExpectError
	drotm( x.length, x, 1, y, 1, false ); // $ExpectError
	drotm( x.length, x, 1, y, 1, null ); // $ExpectError
	drotm( x.length, x, 1, y, 1, undefined ); // $ExpectError
	drotm( x.length, x, 1, y, 1, [] ); // $ExpectError
	drotm( x.length, x, 1, y, 1, {} ); // $ExpectError
	drotm( x.length, x, 1, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm(); // $ExpectError
	drotm( x.length ); // $ExpectError
	drotm( x.length, x ); // $ExpectError
	drotm( x.length, x, 1 ); // $ExpectError
	drotm( x.length, x, 1, y ); // $ExpectError
	drotm( x.length, x, 1, y, 1 ); // $ExpectError
	drotm( x.length, x, 1, y, 1, param, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( '10', x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( true, x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( false, x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( null, x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( undefined, x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( [], x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( {}, x, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, 10, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, '10', 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, true, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, false, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, null, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, undefined, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, [], 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, {}, 1, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, x, '10', 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, true, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, false, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, null, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, undefined, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, [], 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, {}, 0, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, x, 1, '10', y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, true, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, false, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, null, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, undefined, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, [], y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, {}, y, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, x, 1, 0, 10, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, '10', 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, true, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, false, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, null, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, undefined, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, [], 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, {}, 1, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, x, 1, 0, y, '10', 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, true, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, false, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, null, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, undefined, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, [], 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, {}, 0, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray( x.length, x, 1, 0, y, 1, '10', param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, true, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, false, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, null, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, undefined, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, [], param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, {}, param ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const param = new Float64Array( 5 );

	drotm.ndarray(); // $ExpectError
	drotm.ndarray( x.length ); // $ExpectError
	drotm.ndarray( x.length, x ); // $ExpectError
	drotm.ndarray( x.length, x, 1 ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0 ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param, 10 ); // $ExpectError
}

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

import dkmeansDistance = require( './index' );


// TESTS //

// The function returns a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, 1 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance( '10', 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( true, 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( false, 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( null, 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( undefined, 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( [], 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( {}, 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( ( x: number ): number => x, 'sqeuclidean', x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance( x.length, 10, x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, true, x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, false, x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, null, x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, [], x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, {}, x, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance( x.length, 'sqeuclidean', 10, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', '10', 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', true, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', false, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', null, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', undefined, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', [], 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', {}, 1, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance( x.length, 'sqeuclidean', x, '10', y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, true, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, false, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, null, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, undefined, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, [], y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, {}, y, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dkmeansDistance( x.length, 'sqeuclidean', x, 1, 10, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, '10', 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, true, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, false, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, null, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, undefined, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, [], 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, {}, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, '10' ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, true ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, false ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, null ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, undefined ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, [] ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, {} ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance(); // $ExpectError
	dkmeansDistance( x.length ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean' ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1 ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y ); // $ExpectError
	dkmeansDistance( x.length, 'sqeuclidean', x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( '10', 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( true, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( false, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( null, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( undefined, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( [], 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( {}, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( ( x: number ): number => x, 'sqeuclidean', x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a string...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 10, x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', 10, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', '10', 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', true, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', false, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', null, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', undefined, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', [], 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', {}, 1, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, '10', 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, true, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, false, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, null, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, undefined, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, [], 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, {}, 0, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, '10', y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, true, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, false, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, null, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, undefined, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, [], y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, {}, y, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, 10, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, '10', 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, true, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, false, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, null, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, undefined, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, [], 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, {}, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, '10', 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, true, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, false, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, null, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, undefined, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, [], 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, {}, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, '10' ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, true ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, false ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, null ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, undefined ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, [] ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, {} ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	dkmeansDistance.ndarray(); // $ExpectError
	dkmeansDistance.ndarray( x.length ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean' ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1 ); // $ExpectError
	dkmeansDistance.ndarray( x.length, 'sqeuclidean', x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}

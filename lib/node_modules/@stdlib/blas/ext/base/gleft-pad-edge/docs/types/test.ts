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

import AccessorArray = require( '@stdlib/array/base/accessor' );
import gleftPadEdge = require( './index' );


// TESTS //

// The function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge( x.length, 2, x, 1, y, 1 ); // $ExpectType Float64Array
	gleftPadEdge( x.length, 2, new AccessorArray( x ), 1, new AccessorArray( y ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge( '10', 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( true, 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( false, 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( null, 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( undefined, 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( [], 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( {}, 2, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( ( x: number ): number => x, 2, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge( x.length, '10', x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, true, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, false, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, null, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, [], x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, {}, x, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge( x.length, 2, 10, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, true, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, false, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, null, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, undefined, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, {}, 1, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge( x.length, 2, x, '10', y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, true, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, false, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, null, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, undefined, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, [], y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, {}, y, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gleftPadEdge( x.length, 2, x, 1, 10, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, true, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, false, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, null, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, undefined, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, {}, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge( x.length, 2, x, 1, y, '10' ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, true ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, false ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, null ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, undefined ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, [] ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, {} ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge(); // $ExpectError
	gleftPadEdge( x.length ); // $ExpectError
	gleftPadEdge( x.length, 2 ); // $ExpectError
	gleftPadEdge( x.length, 2, x ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1 ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y ); // $ExpectError
	gleftPadEdge( x.length, 2, x, 1, y, 1, {} ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, 0 ); // $ExpectType Float64Array
	gleftPadEdge.ndarray( x.length, 2, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( '10', 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( true, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( false, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( null, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( undefined, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( [], 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( {}, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( ( x: number ): number => x, 2, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, 2, 10, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, true, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, false, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, null, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, {}, 1, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, ( x: number ): number => x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, 2, x, '10', 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, true, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, false, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, null, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, undefined, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, [], 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, {}, 0, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, 2, x, 1, '10', y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, true, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, false, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, null, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, undefined, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, [], y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, {}, y, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a collection...
{
	const x = new Float64Array( 10 );

	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, 10, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, true, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, false, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, null, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, {}, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, '10', 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, true, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, false, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, null, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, undefined, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, [], 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, {}, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, '10' ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, true ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, false ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, null ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, undefined ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, [] ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, {} ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 12 );

	gleftPadEdge.ndarray(); // $ExpectError
	gleftPadEdge.ndarray( x.length ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1 ); // $ExpectError
	gleftPadEdge.ndarray( x.length, 2, x, 1, 0, y, 1, 0, {} ); // $ExpectError
}

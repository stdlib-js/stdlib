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
import gaxpby = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby( x.length, 5.0, x, 1, 3.0, y, 1 ); // $ExpectType Float64Array
	gaxpby( x.length, 5.0, new AccessorArray( x ), 1, 3.0, new AccessorArray( y ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby( '10', 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( true, 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( false, 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( null, 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( undefined, 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( [], 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( {}, 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( ( x: number ): number => x, 5.0, x, 1, 3.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby( x.length, '10', x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, true, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, false, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, null, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, undefined, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, [], x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, {}, x, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, ( x: number ): number => x, x, 1, 3.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const y = new Float64Array( 10 );

	gaxpby( 10, 5.0, 10, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, '10', 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, true, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, false, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, null, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, undefined, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, [ '1' ], 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, {}, 1, 3.0, y, 1 ); // $ExpectError
	gaxpby( 10, 5.0, ( x: number ): number => x, 1, 3.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby( x.length, 5.0, x, '10', 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, true, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, false, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, null, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, undefined, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, [], 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, {}, 3.0, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, ( x: number ): number => x, 3.0, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby( x.length, 5.0, x, 1, '10', y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, true, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, false, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, null, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, undefined, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, [], y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, {}, y, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gaxpby( 10, 5.0, x, 1, 3.0, 10, 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, '10', 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, true, 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, false, 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, null, 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, undefined, 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, [ '1' ], 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, {}, 1 ); // $ExpectError
	gaxpby( 10, 5.0, x, 1, 3.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby( x.length, 5.0, x, 1, 3.0, y, '10' ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, true ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, false ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, null ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, undefined ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, [] ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, {} ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby(); // $ExpectError
	gaxpby( x.length ); // $ExpectError
	gaxpby( x.length, 5.0 ); // $ExpectError
	gaxpby( x.length, 5.0, x ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0 ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y ); // $ExpectError
	gaxpby( x.length, 5.0, x, 1, 3.0, y, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectType Float64Array
	gaxpby.ndarray( x.length, 5.0, new AccessorArray( x ), 1, 0, 3.0, new AccessorArray( y ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( '10', 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( true, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( false, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( null, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( undefined, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( [], 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( {}, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( ( x: number ): number => x, 5.0, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, '10', x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, true, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, false, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, null, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, undefined, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, [], x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, {}, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, ( x: number ): number => x, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const y = new Float64Array( 10 );

	gaxpby.ndarray( 10, 5.0, 10, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, '10', 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, true, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, false, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, null, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, undefined, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, [ '1' ], 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, {}, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, ( x: number ): number => x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, 5.0, x, '10', 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, true, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, false, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, null, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, undefined, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, [], 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, {}, 0, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0, 3.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, 5.0, x, 1, '10', 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, true, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, false, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, null, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, undefined, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, [], 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, {}, 3.0, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x, 3.0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, 5.0, x, 1, 0, '10', y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, true, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, false, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, null, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, undefined, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, [], y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, {}, y, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a numeric array...
{
	const x = new Float64Array( 10 );

	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, 10, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, '10', 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, true, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, false, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, null, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, undefined, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, [ '1' ], 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, {}, 1, 0 ); // $ExpectError
	gaxpby.ndarray( 10, 5.0, x, 1, 0, 3.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, '10', 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, true, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, false, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, null, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, undefined, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, [], 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, {}, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, '10' ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, true ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, false ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, null ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, undefined ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, [] ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, {} ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gaxpby.ndarray(); // $ExpectError
	gaxpby.ndarray( x.length ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1 ); // $ExpectError
	gaxpby.ndarray( x.length, 5.0, x, 1, 0, 3.0, y, 1, 0, 10 ); // $ExpectError
}

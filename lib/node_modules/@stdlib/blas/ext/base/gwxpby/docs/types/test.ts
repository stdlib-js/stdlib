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
import gwxpby = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( x.length, x, 1, 3.0, y, 1, w, 1 ); // $ExpectType Float64Array
	gwxpby( x.length, new AccessorArray( x ), 1, 3.0, new AccessorArray( y ), 1, new AccessorArray( w ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( '10', x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( true, x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( false, x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( null, x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( undefined, x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( [], x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( {}, x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( ( x: number ): number => x, x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a numeric array...
{
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( 10, 10, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, '10', 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, true, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, false, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, null, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, undefined, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, [ '1' ], 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, {}, 1, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( 10, ( x: number ): number => x, 1, 3.0, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( x.length, x, '10', 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, true, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, false, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, null, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, undefined, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, [], 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, {}, 3.0, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, ( x: number ): number => x, 3.0, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( x.length, x, 1, '10', y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, true, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, false, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, null, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, undefined, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, [], y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, {}, y, 1, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, ( x: number ): number => x, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( 10, x, 1, 3.0, 10, 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, '10', 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, true, 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, false, 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, null, 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, undefined, 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, [ '1' ], 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, {}, 1, w, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( x.length, x, 1, 3.0, y, '10', w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, true, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, false, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, null, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, undefined, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, [], w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, {}, w, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gwxpby( 10, x, 1, 3.0, y, 1, 10, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, '10', 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, true, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, false, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, null, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, undefined, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, [ '1' ], 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, {}, 1 ); // $ExpectError
	gwxpby( 10, x, 1, 3.0, y, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby( x.length, x, 1, 3.0, y, 1, w, '10' ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, true ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, false ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, null ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, undefined ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, [] ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, {} ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby(); // $ExpectError
	gwxpby( x.length ); // $ExpectError
	gwxpby( x.length, x ); // $ExpectError
	gwxpby( x.length, x, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1 ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w ); // $ExpectError
	gwxpby( x.length, x, 1, 3.0, y, 1, w, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectType Float64Array
	gwxpby.ndarray( x.length, new AccessorArray( x ), 1, 0, 3.0, new AccessorArray( y ), 1, 0, new AccessorArray( w ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( '10', x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( true, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( false, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( null, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( undefined, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( [], x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( {}, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( ( x: number ): number => x, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a numeric array...
{
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( 10, 10, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, '10', 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, true, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, false, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, null, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, undefined, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, [ '1' ], 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, {}, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, ( x: number ): number => x, 1, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, '10', 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, true, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, false, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, null, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, undefined, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, [], 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, {}, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, ( x: number ): number => x, 0, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, '10', 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, true, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, false, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, null, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, undefined, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, [], 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, {}, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, ( x: number ): number => x, 3.0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, 0, '10', y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, true, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, false, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, null, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, undefined, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, [], y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, {}, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, ( x: number ): number => x, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( 10, x, 1, 0, 3.0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, true, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, false, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, null, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, [ '1' ], 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, '10', 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, true, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, false, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, null, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, undefined, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, [], 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, {}, 0, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, '10', w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, true, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, false, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, null, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, undefined, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, [], w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, {}, w, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, 10, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, '10', 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, true, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, false, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, null, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, undefined, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, {}, 1, 0 ); // $ExpectError
	gwxpby.ndarray( 10, x, 1, 0, 3.0, y, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, '10', 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, true, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, false, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, null, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, undefined, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, [], 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, {}, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, '10' ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, true ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, false ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, null ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, undefined ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, [] ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, {} ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwxpby.ndarray(); // $ExpectError
	gwxpby.ndarray( x.length ); // $ExpectError
	gwxpby.ndarray( x.length, x ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1 ); // $ExpectError
	gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, 0, 10 ); // $ExpectError
}

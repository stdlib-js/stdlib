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
import gwaxpy = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( x.length, 3.0, x, 1, y, 1, w, 1 ); // $ExpectType Float64Array
	gwaxpy( x.length, 3.0, new AccessorArray( x ), 1, new AccessorArray( y ), 1, new AccessorArray( w ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( '10', 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( true, 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( false, 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( null, 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( undefined, 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( [], 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( {}, 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( ( x: number ): number => x, 3.0, x, 1, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( x.length, '10', x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, true, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, false, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, null, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, undefined, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, [], x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, {}, x, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, ( x: number ): number => x, x, 1, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( 10, 3.0, 10, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, '10', 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, true, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, false, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, null, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, undefined, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, [ '1' ], 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, {}, 1, y, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, ( x: number ): number => x, 1, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( x.length, 3.0, x, '10', y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, true, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, false, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, null, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, undefined, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, [], y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, {}, y, 1, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, ( x: number ): number => x, y, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( 10, 3.0, x, 1, 10, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, '10', 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, true, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, false, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, null, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, undefined, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, [ '1' ], 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, {}, 1, w, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, ( x: number ): number => x, 1, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( x.length, 3.0, x, 1, y, '10', w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, true, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, false, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, null, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, undefined, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, [], w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, {}, w, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, ( x: number ): number => x, w, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gwaxpy( 10, 3.0, x, 1, y, 1, 10, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, '10', 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, true, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, false, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, null, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, undefined, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, [ '1' ], 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, {}, 1 ); // $ExpectError
	gwaxpy( 10, 3.0, x, 1, y, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy( x.length, 3.0, x, 1, y, 1, w, '10' ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, true ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, false ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, null ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, undefined ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, [] ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, {} ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy(); // $ExpectError
	gwaxpy( x.length ); // $ExpectError
	gwaxpy( x.length, 3.0 ); // $ExpectError
	gwaxpy( x.length, 3.0, x ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1 ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w ); // $ExpectError
	gwaxpy( x.length, 3.0, x, 1, y, 1, w, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectType Float64Array
	gwaxpy.ndarray( x.length, 3.0, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0, new AccessorArray( w ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( '10', 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( true, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( false, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( null, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( undefined, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( [], 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( {}, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( ( x: number ): number => x, 3.0, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, '10', x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, true, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, false, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, null, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, undefined, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, [], x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, {}, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( 10, 3.0, 10, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, '10', 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, true, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, false, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, null, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, undefined, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, [ '1' ], 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, {}, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, ( x: number ): number => x, 1, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, '10', 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, true, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, false, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, null, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, undefined, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, [], 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, {}, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, ( x: number ): number => x, 0, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, 1, '10', y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, true, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, false, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, null, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, undefined, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, [], y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, {}, y, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, ( x: number ): number => x, y, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( 10, 3.0, x, 1, 0, 10, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, '10', 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, true, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, false, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, null, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, undefined, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, [ '1' ], 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, {}, 1, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, ( x: number ): number => x, 1, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, '10', 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, true, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, false, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, null, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, undefined, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, [], 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, {}, 0, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, ( x: number ): number => x, 0, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, '10', w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, true, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, false, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, null, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, undefined, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, [], w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, {}, w, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, ( x: number ): number => x, w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, 10, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, '10', 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, true, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, false, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, null, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, undefined, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, [ '1' ], 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, {}, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( 10, 3.0, x, 1, 0, y, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, '10', 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, true, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, false, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, null, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, undefined, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, [], 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, {}, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, '10' ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, true ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, false ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, null ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, undefined ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, [] ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, {} ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const w = new Float64Array( 10 );

	gwaxpy.ndarray(); // $ExpectError
	gwaxpy.ndarray( x.length ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1 ); // $ExpectError
	gwaxpy.ndarray( x.length, 3.0, x, 1, 0, y, 1, 0, w, 1, 0, 10 ); // $ExpectError
}

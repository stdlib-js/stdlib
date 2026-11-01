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
import ghad = require( './index' );


// TESTS //

// The function returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectType Float64Array
	ghad( x.length, 2.0, new AccessorArray( x ), 1, new AccessorArray( y ), 1, 3.0, new AccessorArray( z ), 1 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( '10', 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( true, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( false, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( null, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( undefined, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( [], 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( {}, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( ( x: number ): number => x, 2.0, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( x.length, '10', x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, true, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, false, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, null, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, undefined, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, [], x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, {}, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, ( x: number ): number => x, x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a numeric array...
{
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( 10, 2.0, 10, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, '10', 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, true, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, false, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, null, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, undefined, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, [ '1' ], 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, {}, 1, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, ( x: number ): number => x, 1, y, 1, 3.0, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( x.length, 2.0, x, '10', y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, true, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, false, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, null, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, undefined, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, [], y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, {}, y, 1, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, ( x: number ): number => x, y, 1, 3.0, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( 10, 2.0, x, 1, 10, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, '10', 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, true, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, false, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, null, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, undefined, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, [ '1' ], 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, {}, 1, 3.0, z, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, ( x: number ): number => x, 1, 3.0, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( x.length, 2.0, x, 1, y, '10', 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, true, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, false, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, null, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, undefined, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, [], 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, {}, 3.0, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, ( x: number ): number => x, 3.0, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( x.length, 2.0, x, 1, y, 1, '10', z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, true, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, false, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, null, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, undefined, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, [], z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, {}, z, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, ( x: number ): number => x, z, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	ghad( 10, 2.0, x, 1, y, 1, 3.0, 10, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, '10', 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, true, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, false, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, null, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, undefined, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, [ '1' ], 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, {}, 1 ); // $ExpectError
	ghad( 10, 2.0, x, 1, y, 1, 3.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, '10' ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, true ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, false ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, null ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, undefined ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, [] ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, {} ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad(); // $ExpectError
	ghad( x.length ); // $ExpectError
	ghad( x.length, 2.0 ); // $ExpectError
	ghad( x.length, 2.0, x ); // $ExpectError
	ghad( x.length, 2.0, x, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0 ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z ); // $ExpectError
	ghad( x.length, 2.0, x, 1, y, 1, 3.0, z, 1, 10 ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectType Float64Array
	ghad.ndarray( x.length, 2.0, new AccessorArray( x ), 1, 0, new AccessorArray( y ), 1, 0, 3.0, new AccessorArray( z ), 1, 0 ); // $ExpectType AccessorArray<number>
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( '10', 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( true, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( false, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( null, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( undefined, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( [], 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( {}, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( ( x: number ): number => x, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, '10', x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, true, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, false, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, null, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, undefined, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, [], x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, {}, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a numeric array...
{
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( 10, 2.0, 10, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, '10', 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, true, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, false, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, null, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, undefined, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, [ '1' ], 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, {}, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, ( x: number ): number => x, 1, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, '10', 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, true, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, false, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, null, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, undefined, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, [], 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, {}, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, ( x: number ): number => x, 0, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, '10', y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, true, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, false, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, null, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, undefined, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, [], y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, {}, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, ( x: number ): number => x, y, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( 10, 2.0, x, 1, 0, 10, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, '10', 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, true, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, false, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, null, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, undefined, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, [ '1' ], 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, {}, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, ( x: number ): number => x, 1, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, 0, y, '10', 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, true, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, false, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, null, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, undefined, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, [], 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, {}, 0, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, ( x: number ): number => x, 0, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, '10', 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, true, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, false, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, null, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, undefined, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, [], 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, {}, 3.0, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, ( x: number ): number => x, 3.0, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, '10', z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, true, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, false, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, null, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, undefined, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, [], z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, {}, z, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, ( x: number ): number => x, z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a tenth argument which is not a numeric array...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );

	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, 10, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, '10', 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, true, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, false, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, null, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, undefined, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, [ '1' ], 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, {}, 1, 0 ); // $ExpectError
	ghad.ndarray( 10, 2.0, x, 1, 0, y, 1, 0, 3.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eleventh argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, '10', 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, true, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, false, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, null, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, undefined, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, [], 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, {}, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a twelfth argument which is not a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, '10' ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, true ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, false ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, null ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, undefined ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, [] ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, {} ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( 10 );
	const z = new Float64Array( 10 );

	ghad.ndarray(); // $ExpectError
	ghad.ndarray( x.length ); // $ExpectError
	ghad.ndarray( x.length, 2.0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1 ); // $ExpectError
	ghad.ndarray( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0, 10 ); // $ExpectError
}

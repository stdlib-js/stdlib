/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import Complex64 = require( '@stdlib/complex/float32/ctor' );
import cinvf = require( './index' );


// TESTS //

// The function returns a complex number...
{
	cinvf( new Complex64( 1.0, 2.0 ) ); // $ExpectType Complex64
}

// The compiler throws an error if the function is provided a value other than a complex number...
{
	cinvf( 2 ); // $ExpectError
	cinvf( true ); // $ExpectError
	cinvf( false ); // $ExpectError
	cinvf( null ); // $ExpectError
	cinvf( undefined ); // $ExpectError
	cinvf( '5' ); // $ExpectError
	cinvf( [] ); // $ExpectError
	cinvf( {} ); // $ExpectError
	cinvf( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cinvf(); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	cinvf.assign( 1.0, 1.0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	cinvf.assign( 1.0, 1.0, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
	cinvf.assign( 1.0, 1.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = new Float32Array( 2 );

	cinvf.assign( true, 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( false, 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( null, 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( undefined, 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( '5', 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( [], 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( {}, 2.0, out, 1, 0 ); // $ExpectError
	cinvf.assign( ( x: number ): number => x, 2.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = new Float32Array( 2 );

	cinvf.assign( 1.0, true, out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, false, out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, null, out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, undefined, out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, '5', out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, [], out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, {}, out, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a collection...
{
	cinvf.assign( 1.0, 2.0, 1, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, true, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, false, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, null, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, undefined, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, '5', 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, [ '5' ], 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, {}, 1, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = new Float32Array( 2 );

	cinvf.assign( 1.0, 2.0, out, true, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, false, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, null, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, undefined, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, '5', 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, [], 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, {}, 0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = new Float32Array( 2 );

	cinvf.assign( 1.0, 2.0, out, 1, true ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, false ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, null ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, undefined ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, '5' ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, [] ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, {} ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = new Float32Array( 2 );

	cinvf.assign(); // $ExpectError
	cinvf.assign( 1.0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1 ); // $ExpectError
	cinvf.assign( 1.0, 2.0, out, 1, 0, {} ); // $ExpectError
}

// Attached to the main export is a `strided` method which returns a collection...
{
	const z = new Float32Array( 2 );

	cinvf.strided( z, 1, 0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	cinvf.strided( z, 1, 0, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
	cinvf.strided( z, 1, 0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `strided` method is provided a first argument which is not a collection...
{
	const out = new Float32Array( 2 );

	cinvf.strided( true, 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( false, 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( null, 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( undefined, 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( '5', 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( [ '5' ], 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( {}, 1, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a second argument which is not a number...
{
	const z = new Float32Array( 2 );
	const out = new Float32Array( 2 );

	cinvf.strided( z, true, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, false, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, null, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, undefined, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, '5', 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, [], 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, {}, 0, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a third argument which is not a number...
{
	const z = new Float32Array( 2 );
	const out = new Float32Array( 2 );

	cinvf.strided( z, 1, true, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, false, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, null, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, undefined, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, '5', out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, [], out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, {}, out, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fourth argument which is not a collection...
{
	const z = new Float32Array( 2 );

	cinvf.strided( z, 1, 0, 1, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, true, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, false, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, null, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, undefined, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, '5', 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, [ '5' ], 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, {}, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fifth argument which is not a number...
{
	const z = new Float32Array( 2 );
	const out = new Float32Array( 2 );

	cinvf.strided( z, 1, 0, out, true, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, false, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, null, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, undefined, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, '5', 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, [], 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, {}, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a sixth argument which is not a number...
{
	const z = new Float32Array( 2 );
	const out = new Float32Array( 2 );

	cinvf.strided( z, 1, 0, out, 1, true ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, false ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, null ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, undefined ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, '5' ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, [] ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, {} ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided an unsupported number of arguments...
{
	const z = new Float32Array( 2 );
	const out = new Float32Array( 2 );

	cinvf.strided(); // $ExpectError
	cinvf.strided( z ); // $ExpectError
	cinvf.strided( z, 1 ); // $ExpectError
	cinvf.strided( z, 1, 0 ); // $ExpectError
	cinvf.strided( z, 1, 0, out ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1 ); // $ExpectError
	cinvf.strided( z, 1, 0, out, 1, 0, {} ); // $ExpectError
}

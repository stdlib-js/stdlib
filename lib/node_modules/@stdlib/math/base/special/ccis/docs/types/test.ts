/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import ccis = require( './index' );


// TESTS //

// The function returns a double-precision complex floating-point number...
{
	const z = new Complex128( 1.0, 1.0 );

	ccis( z ); // $ExpectType Complex128
}

// The compiler throws an error if the function is provided a first argument which is not a complex number...
{
	ccis( true ); // $ExpectError
	ccis( false ); // $ExpectError
	ccis( null ); // $ExpectError
	ccis( undefined ); // $ExpectError
	ccis( '5' ); // $ExpectError
	ccis( [] ); // $ExpectError
	ccis( {} ); // $ExpectError
	ccis( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const z = new Complex128( 1.0, 1.0 );

	ccis(); // $ExpectError
	ccis( z, z ); // $ExpectError
	ccis( z, z, z ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	ccis.assign( 1.0, 1.0, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
	ccis.assign( 1.0, 1.0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	ccis.assign( 1.0, 1.0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `assign` method is provided a first argument which is not a number...
{
	const out = new Float64Array( 2 );

	ccis.assign( true, 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( false, 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( null, 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( undefined, 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( '5', 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( [], 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( {}, 2.0, out, 1, 0 ); // $ExpectError
	ccis.assign( ( x: number ): number => x, 2.0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = new Float64Array( 2 );

	ccis.assign( 1.0, true, out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, false, out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, null, out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, undefined, out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, '5', out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, [], out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, {}, out, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a collection...
{
	ccis.assign( 1.0, 2.0, 1, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, true, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, false, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, null, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, undefined, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, '5', 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, [ '5' ], 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, {}, 1, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const out = new Float64Array( 2 );

	ccis.assign( 1.0, 2.0, out, true, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, false, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, null, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, undefined, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, '5', 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, [], 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, {}, 0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = new Float64Array( 2 );

	ccis.assign( 1.0, 2.0, out, 1, true ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, false ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, null ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, undefined ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, '5' ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, [] ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, {} ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = new Float64Array( 2 );

	ccis.assign(); // $ExpectError
	ccis.assign( 1.0 ); // $ExpectError
	ccis.assign( 1.0, 2.0 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1 ); // $ExpectError
	ccis.assign( 1.0, 2.0, out, 1, 0, {} ); // $ExpectError
}

// Attached to the main export is a `strided` method which returns a collection...
{
	const z = new Float64Array( 2 );

	ccis.strided( z, 1, 0, new Float64Array( 2 ), 1, 0 ); // $ExpectType Float64Array
	ccis.strided( z, 1, 0, new Float32Array( 2 ), 1, 0 ); // $ExpectType Float32Array
	ccis.strided( z, 1, 0, [ 0.0, 0.0 ], 1, 0 ); // $ExpectType number[]
}

// The compiler throws an error if the `strided` method is provided a first argument which is not a collection...
{
	const out = new Float64Array( 2 );

	ccis.strided( true, 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( false, 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( null, 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( undefined, 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( '5', 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( [ '5' ], 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( {}, 1, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( ( x: number ): number => x, 1, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a second argument which is not a number...
{
	const z = new Float64Array( 2 );
	const out = new Float64Array( 2 );

	ccis.strided( z, true, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, false, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, null, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, undefined, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, '5', 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, [], 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, {}, 0, out, 1, 0 ); // $ExpectError
	ccis.strided( z, ( x: number ): number => x, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a third argument which is not a number...
{
	const z = new Float64Array( 2 );
	const out = new Float64Array( 2 );

	ccis.strided( z, 1, true, out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, false, out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, null, out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, undefined, out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, '5', out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, [], out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, {}, out, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fourth argument which is not a collection...
{
	const z = new Float64Array( 2 );

	ccis.strided( z, 1, 0, 1, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, true, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, false, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, null, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, undefined, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, '5', 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, [ '5' ], 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, {}, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a fifth argument which is not a number...
{
	const z = new Float64Array( 2 );
	const out = new Float64Array( 2 );

	ccis.strided( z, 1, 0, out, true, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, false, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, null, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, undefined, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, '5', 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, [], 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, {}, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided a sixth argument which is not a number...
{
	const z = new Float64Array( 2 );
	const out = new Float64Array( 2 );

	ccis.strided( z, 1, 0, out, 1, true ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, false ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, null ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, undefined ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, '5' ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, [] ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, {} ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `strided` method is provided an unsupported number of arguments...
{
	const z = new Float64Array( 2 );
	const out = new Float64Array( 2 );

	ccis.strided(); // $ExpectError
	ccis.strided( z ); // $ExpectError
	ccis.strided( z, 1 ); // $ExpectError
	ccis.strided( z, 1, 0 ); // $ExpectError
	ccis.strided( z, 1, 0, out ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1 ); // $ExpectError
	ccis.strided( z, 1, 0, out, 1, 0, {} ); // $ExpectError
}

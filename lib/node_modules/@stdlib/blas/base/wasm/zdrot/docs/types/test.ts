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

/* eslint-disable space-in-parens */

import Complex128Array = require( '@stdlib/array/complex128' );
import Memory = require( '@stdlib/wasm/memory' );
import zdrot = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( '10', zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( true, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( false, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( null, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( undefined, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( [], zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( {}, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( ( zx: number ): number => zx, zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( zx.length, 10, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, '10', 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, true, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, false, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, null, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, undefined, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, [], 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, {}, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, ( zx: number ): number => zx, 1, zy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( zx.length, zx, '10', zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, true, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, false, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, null, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, undefined, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, [], zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, {}, zy, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, ( zx: number ): number => zx, zy, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdrot.main( zx.length, zx, 1, 10, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, '10', 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, true, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, false, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, null, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, undefined, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, [], 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, {}, 1, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, ( zx: number ): number => zx, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fifth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( zx.length, zx, 1, zy, '10', 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, true, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, false, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, null, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, undefined, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, [], 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, {}, 0.8, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, ( zx: number ): number => zx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a sixth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( zx.length, zx, 1, zy, 1, '10', 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, true, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, false, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, null, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, undefined, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, [], 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, {}, 0.6 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, ( zx: number ): number => zx, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a seventh argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, '10' ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, true ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, false ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, null ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, undefined ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, [] ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, {} ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.main(); // $ExpectError
	zdrot.main( zx.length ); // $ExpectError
	zdrot.main( zx.length, zx ); // $ExpectError
	zdrot.main( zx.length, zx, 1 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8 ); // $ExpectError
	zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( '10', zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( true, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( false, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( null, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( undefined, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( [], zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( {}, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( ( zx: number ): number => zx, zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, 10, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, '10', 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, true, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, false, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, null, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, undefined, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, [], 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, {}, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, ( zx: number ): number => zx, 1, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, '10', 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, true, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, false, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, null, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, undefined, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, [], 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, {}, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, ( zx: number ): number => zx, 0, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, '10', zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, true, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, false, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, null, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, undefined, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, [], zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, {}, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, ( zx: number ): number => zx, zy, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex128Array...
{
	const zx = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, 10, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, '10', 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, true, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, false, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, null, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, undefined, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, [], 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, {}, 1, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, ( zx: number ): number => zx, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, '10', 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, true, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, false, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, null, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, undefined, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, [], 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, {}, 0, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, ( zx: number ): number => zx, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, '10', 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, true, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, false, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, null, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, undefined, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, [], 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, {}, 0.8, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, ( zx: number ): number => zx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, '10', 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, true, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, false, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, null, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, undefined, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, [], 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, {}, 0.6 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, ( zx: number ): number => zx, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a ninth argument which is not a number...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, '10' ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, true ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, false ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, null ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, undefined ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, [] ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, {} ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const zx = new Complex128Array( 10 );
	const zy = new Complex128Array( 10 );

	zdrot.ndarray(); // $ExpectError
	zdrot.ndarray( zx.length ); // $ExpectError
	zdrot.ndarray( zx.length, zx ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8 ); // $ExpectError
	zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	zdrot.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	zdrot.Module( '10' ); // $ExpectError
	zdrot.Module( true ); // $ExpectError
	zdrot.Module( false ); // $ExpectError
	zdrot.Module( null ); // $ExpectError
	zdrot.Module( undefined ); // $ExpectError
	zdrot.Module( [] ); // $ExpectError
	zdrot.Module( {} ); // $ExpectError
	zdrot.Module( ( zx: number ): number => zx ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, 0, 1, 80, 1, 0.8, 0.6 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( '10', 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( true, 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( false, 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( null, 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( undefined, 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( [], 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( {}, 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( ( zx: number ): number => zx, 10, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, '10', 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, true, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, false, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, null, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, undefined, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, [], 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, {}, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, ( zx: number ): number => zx, 1, 80, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, 0, '10', 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, true, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, false, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, null, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, undefined, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, [], 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, {}, 80, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, ( zx: number ): number => zx, 80, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, 0, 1, '10', 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, true, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, false, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, null, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, undefined, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, [], 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, {}, 1, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, ( zx: number ): number => zx, 1, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, 0, 1, 80, '10', 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, true, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, false, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, null, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, undefined, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, [], 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, {}, 0.8, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, ( zx: number ): number => zx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, 0, 1, 80, 1, '10', 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, true, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, false, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, null, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, undefined, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, [], 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, {}, 0.6 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, ( zx: number ): number => zx, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a seventh argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main( 10, 0, 1, 80, 1, 0.8, '10' ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, true ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, false ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, null ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, undefined ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, [] ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, {} ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 0 ); // $ExpectError
	mod.main( 10, 0, 1 ); // $ExpectError
	mod.main( 10, 0, 1, 80 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 0.8, 0.6, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( '10', 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( true, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( false, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( null, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( undefined, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( [], 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( {}, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( ( zx: number ): number => zx, 0, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, '10', 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, true, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, false, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, null, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, undefined, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, [], 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, {}, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, ( zx: number ): number => zx, 1, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, '10', 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, true, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, false, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, null, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, undefined, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, [], 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, {}, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, ( zx: number ): number => zx, 0, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, '10', 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, true, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, false, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, null, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, undefined, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, [], 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, {}, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, ( zx: number ): number => zx, 80, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, 0, '10', 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, true, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, false, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, null, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, undefined, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, [], 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, {}, 1, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, ( zx: number ): number => zx, 1, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, '10', 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, true, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, false, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, null, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, undefined, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, [], 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, {}, 0, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, ( zx: number ): number => zx, 0, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a seventh argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, '10', 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, true, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, false, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, null, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, undefined, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, [], 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, {}, 0.8, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, ( zx: number ): number => zx, 0.8, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an eighth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, '10', 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, true, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, false, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, null, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, undefined, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, [], 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, {}, 0.6 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, ( zx: number ): number => zx, 0.6 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a ninth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, '10' ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, true ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, false ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, null ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, undefined ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, [] ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, {} ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, ( zx: number ): number => zx ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zdrot.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 0.8, 0.6, 10 ); // $ExpectError
}

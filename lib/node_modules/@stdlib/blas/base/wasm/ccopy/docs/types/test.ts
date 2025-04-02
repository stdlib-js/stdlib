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

/* eslint-disable space-in-parens */

import Complex64Array = require( '@stdlib/array/complex64' );
import Memory = require( '@stdlib/wasm/memory' );
import ccopy = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.main( cx.length, cx, 1, cy, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.main( '10', cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( true, cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( false, cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( null, cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( undefined, cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( [], cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( {}, cx, 1, cy, 1 ); // $ExpectError
	ccopy.main( ( x: number ): number => x, cx, 1, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.main( cx.length, 10, 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, '10', 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, true, 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, false, 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, null, 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, undefined, 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, [], 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, {}, 1, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, ( x: number ): number => x, 1, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.main( cx.length, cx, '10', cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, true, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, false, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, null, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, undefined, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, [], cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, {}, cy, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, ( x: number ): number => x, cy, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	ccopy.main( cx.length, cx, 1, 10, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, '10', 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, true, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, false, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, null, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, undefined, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, [], 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, {}, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fifth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.main( cx.length, cx, 1, cy, '10' ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, true ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, false ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, null ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, undefined ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, [] ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, {} ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.main(); // $ExpectError
	ccopy.main( cx.length ); // $ExpectError
	ccopy.main( cx.length, cx ); // $ExpectError
	ccopy.main( cx.length, cx, 1 ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy ); // $ExpectError
	ccopy.main( cx.length, cx, 1, cy, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( '10', cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( true, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( false, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( null, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( undefined, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( [], cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( {}, cx, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( ( x: number ): number => x, cx, 1, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, 10, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, '10', 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, true, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, false, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, null, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, undefined, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, [], 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, {}, 1, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, ( x: number ): number => x, 1, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, cx, '10', 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, true, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, false, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, null, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, undefined, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, [], 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, {}, 0, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, ( x: number ): number => x, 0, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, cx, 1, '10', cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, true, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, false, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, null, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, undefined, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, [], cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, {}, cy, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, ( x: number ): number => x, cy, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, cx, 1, 0, 10, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, '10', 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, true, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, false, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, null, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, undefined, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, [], 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, {}, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, cx, 1, 0, cy, '10', 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, true, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, false, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, null, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, undefined, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, [], 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, {}, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, '10' ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, true ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, false ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, null ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, undefined ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, [] ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, {} ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const cy = new Complex64Array( 10 );

	ccopy.ndarray(); // $ExpectError
	ccopy.ndarray( cx.length ); // $ExpectError
	ccopy.ndarray( cx.length, cx ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1 ); // $ExpectError
	ccopy.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	ccopy.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	ccopy.Module( '10' ); // $ExpectError
	ccopy.Module( true ); // $ExpectError
	ccopy.Module( false ); // $ExpectError
	ccopy.Module( null ); // $ExpectError
	ccopy.Module( undefined ); // $ExpectError
	ccopy.Module( [] ); // $ExpectError
	ccopy.Module( {} ); // $ExpectError
	ccopy.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main( 10, 0, 1, 80, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main( '10', 10, 1, 80, 1 ); // $ExpectError
	mod.main( true, 10, 1, 80, 1 ); // $ExpectError
	mod.main( false, 10, 1, 80, 1 ); // $ExpectError
	mod.main( null, 10, 1, 80, 1 ); // $ExpectError
	mod.main( undefined, 10, 1, 80, 1 ); // $ExpectError
	mod.main( [], 10, 1, 80, 1 ); // $ExpectError
	mod.main( {}, 10, 1, 80, 1 ); // $ExpectError
	mod.main( ( x: number ): number => x, 10, 1, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main( 10, '10', 1, 80, 1 ); // $ExpectError
	mod.main( 10, true, 1, 80, 1 ); // $ExpectError
	mod.main( 10, false, 1, 80, 1 ); // $ExpectError
	mod.main( 10, null, 1, 80, 1 ); // $ExpectError
	mod.main( 10, undefined, 1, 80, 1 ); // $ExpectError
	mod.main( 10, [], 1, 80, 1 ); // $ExpectError
	mod.main( 10, {}, 1, 80, 1 ); // $ExpectError
	mod.main( 10, ( x: number ): number => x, 1, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main( 10, 0, '10', 80, 1 ); // $ExpectError
	mod.main( 10, 0, true, 80, 1 ); // $ExpectError
	mod.main( 10, 0, false, 80, 1 ); // $ExpectError
	mod.main( 10, 0, null, 80, 1 ); // $ExpectError
	mod.main( 10, 0, undefined, 80, 1 ); // $ExpectError
	mod.main( 10, 0, [], 80, 1 ); // $ExpectError
	mod.main( 10, 0, {}, 80, 1 ); // $ExpectError
	mod.main( 10, 0, ( x: number ): number => x, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main( 10, 0, 1, '10', 1 ); // $ExpectError
	mod.main( 10, 0, 1, true, 1 ); // $ExpectError
	mod.main( 10, 0, 1, false, 1 ); // $ExpectError
	mod.main( 10, 0, 1, null, 1 ); // $ExpectError
	mod.main( 10, 0, 1, undefined, 1 ); // $ExpectError
	mod.main( 10, 0, 1, [], 1 ); // $ExpectError
	mod.main( 10, 0, 1, {}, 1 ); // $ExpectError
	mod.main( 10, 0, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main( 10, 0, 1, 80, '10' ); // $ExpectError
	mod.main( 10, 0, 1, 80, true ); // $ExpectError
	mod.main( 10, 0, 1, 80, false ); // $ExpectError
	mod.main( 10, 0, 1, 80, null ); // $ExpectError
	mod.main( 10, 0, 1, 80, undefined ); // $ExpectError
	mod.main( 10, 0, 1, 80, [] ); // $ExpectError
	mod.main( 10, 0, 1, 80, {} ); // $ExpectError
	mod.main( 10, 0, 1, 80, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 0 ); // $ExpectError
	mod.main( 10, 0, 1 ); // $ExpectError
	mod.main( 10, 0, 1, 80 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( '10', 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( true, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( false, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( null, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( undefined, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( [], 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( {}, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 0, 1, 0, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, '10', 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, true, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, false, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, null, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, undefined, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, [], 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, {}, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, ( x: number ): number => x, 1, 0, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, 0, '10', 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, true, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, false, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, null, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, undefined, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, [], 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, {}, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, ( x: number ): number => x, 0, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, 0, 1, '10', 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, true, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, false, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, null, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, undefined, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, [], 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, {}, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, ( x: number ): number => x, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, 0, 1, 0, '10', 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, true, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, false, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, null, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, undefined, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, [], 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, {}, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, '10', 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, true, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, false, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, null, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, undefined, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, [], 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, {}, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a seventh argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, '10' ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, true ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, false ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, null ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, undefined ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, [] ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, {} ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = ccopy.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 10 ); // $ExpectError
}

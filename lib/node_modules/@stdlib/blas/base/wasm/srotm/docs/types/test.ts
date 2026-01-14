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

import Memory = require( '@stdlib/wasm/memory' );
import srotm = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a Float32Array...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main( x.length, x, 1, y, 1, param ); // $ExpectType Float32Array
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main( '10', x, 1, y, 1, param ); // $ExpectError
	srotm.main( true, x, 1, y, 1, param ); // $ExpectError
	srotm.main( false, x, 1, y, 1, param ); // $ExpectError
	srotm.main( null, x, 1, y, 1, param ); // $ExpectError
	srotm.main( undefined, x, 1, y, 1, param ); // $ExpectError
	srotm.main( [], x, 1, y, 1, param ); // $ExpectError
	srotm.main( {}, x, 1, y, 1, param ); // $ExpectError
	srotm.main( ( x: number ): number => x, x, 1, y, 1, param ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a Float32Array...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main( x.length, 10, 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, '10', 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, true, 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, false, 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, null, 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, undefined, 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, [], 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, {}, 1, y, 1, param ); // $ExpectError
	srotm.main( x.length, ( x: number ): number => x, 1, y, 1, param ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main( x.length, x, '10', y, 1, param ); // $ExpectError
	srotm.main( x.length, x, true, y, 1, param ); // $ExpectError
	srotm.main( x.length, x, false, y, 1, param ); // $ExpectError
	srotm.main( x.length, x, null, y, 1, param ); // $ExpectError
	srotm.main( x.length, x, undefined, y, 1, param ); // $ExpectError
	srotm.main( x.length, x, [], y, 1, param ); // $ExpectError
	srotm.main( x.length, x, {}, y, 1, param ); // $ExpectError
	srotm.main( x.length, x, ( x: number ): number => x, y, 1, param ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a Float32Array...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );

	srotm.main( x.length, x, 1, 10, 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, '10', 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, true, 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, false, 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, null, 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, undefined, 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, [], 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, {}, 1, param ); // $ExpectError
	srotm.main( x.length, x, 1, ( x: number ): number => x, 1, param ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fifth argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main( x.length, x, 1, y, '10', param ); // $ExpectError
	srotm.main( x.length, x, 1, y, true, param ); // $ExpectError
	srotm.main( x.length, x, 1, y, false, param ); // $ExpectError
	srotm.main( x.length, x, 1, y, null, param ); // $ExpectError
	srotm.main( x.length, x, 1, y, undefined, param ); // $ExpectError
	srotm.main( x.length, x, 1, y, [], param ); // $ExpectError
	srotm.main( x.length, x, 1, y, {}, param ); // $ExpectError
	srotm.main( x.length, x, 1, y, ( x: number ): number => x, param ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main( x.length, x, 1, y, 1, 10 ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, '10' ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, true ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, false ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, null ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, undefined ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, [] ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, {} ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.main(); // $ExpectError
	srotm.main( x.length ); // $ExpectError
	srotm.main( x.length, x ); // $ExpectError
	srotm.main( x.length, x, 1 ); // $ExpectError
	srotm.main( x.length, x, 1, y ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1 ); // $ExpectError
	srotm.main( x.length, x, 1, y, 1, param, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float32Array...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, param ); // $ExpectType Float32Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( '10', x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( true, x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( false, x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( null, x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( undefined, x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( [], x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( {}, x, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( ( x: number ): number => x, x, 1, 0, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float32Array...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, 10, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, '10', 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, true, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, false, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, null, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, undefined, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, [], 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, {}, 1, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, ( x: number ): number => x, 1, 0, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, x, '10', 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, true, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, false, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, null, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, undefined, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, [], 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, {}, 0, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, ( x: number ): number => x, 0, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, x, 1, '10', y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, true, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, false, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, null, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, undefined, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, [], y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, {}, y, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, ( x: number ): number => x, y, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a Float32Array...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );

	srotm.ndarray( x.length, x, 1, 0, 10, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, '10', 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, true, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, false, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, null, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, undefined, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, [], 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, {}, 1, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, ( x: number ): number => x, 1, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, x, 1, 0, y, '10', 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, true, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, false, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, null, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, undefined, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, [], 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, {}, 0, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, ( x: number ): number => x, 0, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, x, 1, 0, y, 1, '10', param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, true, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, false, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, null, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, undefined, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, [], param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, {}, param ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, ( x: number ): number => x, param ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, '10' ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, true ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, false ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, null ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, undefined ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, [] ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, {} ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const param = new Float32Array( 5 );
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	srotm.ndarray(); // $ExpectError
	srotm.ndarray( x.length ); // $ExpectError
	srotm.ndarray( x.length, x ); // $ExpectError
	srotm.ndarray( x.length, x, 1 ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0 ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1 ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0 ); // $ExpectError
	srotm.ndarray( x.length, x, 1, 0, y, 1, 0, param, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	srotm.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	srotm.Module( '10' ); // $ExpectError
	srotm.Module( true ); // $ExpectError
	srotm.Module( false ); // $ExpectError
	srotm.Module( null ); // $ExpectError
	srotm.Module( undefined ); // $ExpectError
	srotm.Module( [] ); // $ExpectError
	srotm.Module( {} ); // $ExpectError
	srotm.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( 10, 0, 1, 80, 1, 120 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( '10', 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( true, 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( false, 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( null, 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( undefined, 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( [], 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( {}, 10, 1, 80, 1, 120 ); // $ExpectError
	mod.main( ( x: number ): number => x, 10, 1, 80, 1, 120 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( 10, '10', 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, true, 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, false, 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, null, 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, undefined, 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, [], 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, {}, 1, 80, 1, 120 ); // $ExpectError
	mod.main( 10, ( x: number ): number => x, 1, 80, 1, 120 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( 10, 0, '10', 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, true, 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, false, 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, null, 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, undefined, 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, [], 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, {}, 80, 1, 120 ); // $ExpectError
	mod.main( 10, 0, ( x: number ): number => x, 80, 1, 120 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( 10, 0, 1, '10', 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, true, 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, false, 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, null, 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, undefined, 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, [], 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, {}, 1, 120 ); // $ExpectError
	mod.main( 10, 0, 1, ( x: number ): number => x, 1, 120 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( 10, 0, 1, 80, '10', 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, true, 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, false, 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, null, 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, undefined, 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, [], 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, {}, 120 ); // $ExpectError
	mod.main( 10, 0, 1, 80, ( x: number ): number => x, 120 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main( 10, 0, 1, 80, 1, '10' ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, true ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, false ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, null ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, undefined ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, [] ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, {} ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 0 ); // $ExpectError
	mod.main( 10, 0, 1 ); // $ExpectError
	mod.main( 10, 0, 1, 80 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 0, 1, 80, 1, 120, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( '10', 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( true, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( false, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( null, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( undefined, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( [], 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( {}, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 0, 1, 0, 80, 1, 0, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, '10', 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, true, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, false, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, null, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, undefined, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, [], 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, {}, 1, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, ( x: number ): number => x, 1, 0, 80, 1, 0, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, '10', 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, true, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, false, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, null, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, undefined, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, [], 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, {}, 0, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, ( x: number ): number => x, 0, 80, 1, 0, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, 1, '10', 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, true, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, false, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, null, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, undefined, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, [], 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, {}, 80, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, ( x: number ): number => x, 80, 1, 0, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, 1, 0, '10', 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, true, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, false, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, null, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, undefined, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, [], 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, {}, 1, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, ( x: number ): number => x, 1, 0, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, '10', 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, true, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, false, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, null, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, undefined, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, [], 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, {}, 0, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, ( x: number ): number => x, 0, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a seventh argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, '10', 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, true, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, false, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, null, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, undefined, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, [], 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, {}, 120 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, ( x: number ): number => x, 120 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an eighth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, '10' ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, true ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, false ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, null ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, undefined ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, [] ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, {} ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = srotm.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 80, 1, 0, 120, 10 ); // $ExpectError
}

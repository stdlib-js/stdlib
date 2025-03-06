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
import dmeanors = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a number...
{
	const x = new Float64Array( 10 );

	dmeanors.main( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dmeanors.main( '10', x, 1 ); // $ExpectError
	dmeanors.main( true, x, 1 ); // $ExpectError
	dmeanors.main( false, x, 1 ); // $ExpectError
	dmeanors.main( null, x, 1 ); // $ExpectError
	dmeanors.main( undefined, x, 1 ); // $ExpectError
	dmeanors.main( [], x, 1 ); // $ExpectError
	dmeanors.main( {}, x, 1 ); // $ExpectError
	dmeanors.main( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dmeanors.main( x.length, 10, 1 ); // $ExpectError
	dmeanors.main( x.length, '10', 1 ); // $ExpectError
	dmeanors.main( x.length, true, 1 ); // $ExpectError
	dmeanors.main( x.length, false, 1 ); // $ExpectError
	dmeanors.main( x.length, null, 1 ); // $ExpectError
	dmeanors.main( x.length, undefined, 1 ); // $ExpectError
	dmeanors.main( x.length, [], 1 ); // $ExpectError
	dmeanors.main( x.length, {}, 1 ); // $ExpectError
	dmeanors.main( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dmeanors.main( x.length, x, '10' ); // $ExpectError
	dmeanors.main( x.length, x, true ); // $ExpectError
	dmeanors.main( x.length, x, false ); // $ExpectError
	dmeanors.main( x.length, x, null ); // $ExpectError
	dmeanors.main( x.length, x, undefined ); // $ExpectError
	dmeanors.main( x.length, x, [] ); // $ExpectError
	dmeanors.main( x.length, x, {} ); // $ExpectError
	dmeanors.main( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dmeanors.main(); // $ExpectError
	dmeanors.main( x.length ); // $ExpectError
	dmeanors.main( x.length, x ); // $ExpectError
	dmeanors.main( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dmeanors.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dmeanors.ndarray( '10', x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( true, x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( false, x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( null, x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( undefined, x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( [], x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( {}, x, 1, 0 ); // $ExpectError
	dmeanors.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dmeanors.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, true, 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, false, 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, null, 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, [], 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Float64Array( 10 );

	dmeanors.ndarray( x.length, x, '10', 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, true, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, false, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, null, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, [], 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, {}, 0 ); // $ExpectError
	dmeanors.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dmeanors.ndarray( x.length, x, 1, '10' ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, true ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, false ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, null ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, undefined ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, [] ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, {} ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dmeanors.ndarray(); // $ExpectError
	dmeanors.ndarray( x.length ); // $ExpectError
	dmeanors.ndarray( x.length, x ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1 ); // $ExpectError
	dmeanors.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	dmeanors.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	dmeanors.Module( '10' ); // $ExpectError
	dmeanors.Module( true ); // $ExpectError
	dmeanors.Module( false ); // $ExpectError
	dmeanors.Module( null ); // $ExpectError
	dmeanors.Module( undefined ); // $ExpectError
	dmeanors.Module( [] ); // $ExpectError
	dmeanors.Module( {} ); // $ExpectError
	dmeanors.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.main( 10, 0, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.main( '10', 0, 1 ); // $ExpectError
	mod.main( true, 0, 1 ); // $ExpectError
	mod.main( false, 0, 1 ); // $ExpectError
	mod.main( null, 0, 1 ); // $ExpectError
	mod.main( undefined, 0, 1 ); // $ExpectError
	mod.main( [], 0, 1 ); // $ExpectError
	mod.main( {}, 0, 1 ); // $ExpectError
	mod.main( ( x: number ): number => x, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.main( 10, '10', 1 ); // $ExpectError
	mod.main( 10, true, 1 ); // $ExpectError
	mod.main( 10, false, 1 ); // $ExpectError
	mod.main( 10, null, 1 ); // $ExpectError
	mod.main( 10, undefined, 1 ); // $ExpectError
	mod.main( 10, [], 1 ); // $ExpectError
	mod.main( 10, {}, 1 ); // $ExpectError
	mod.main( 10, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.main( 10, 0, '10' ); // $ExpectError
	mod.main( 10, 0, true ); // $ExpectError
	mod.main( 10, 0, false ); // $ExpectError
	mod.main( 10, 0, null ); // $ExpectError
	mod.main( 10, 0, undefined ); // $ExpectError
	mod.main( 10, 0, [] ); // $ExpectError
	mod.main( 10, 0, {} ); // $ExpectError
	mod.main( 10, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 0 ); // $ExpectError
	mod.main( 10, 0, 1, 5 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.ndarray( 10, 0, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.ndarray( '10', 0, 1, 0 ); // $ExpectError
	mod.ndarray( true, 0, 1, 0 ); // $ExpectError
	mod.ndarray( false, 0, 1, 0 ); // $ExpectError
	mod.ndarray( null, 0, 1, 0 ); // $ExpectError
	mod.ndarray( undefined, 0, 1, 0 ); // $ExpectError
	mod.ndarray( [], 0, 1, 0 ); // $ExpectError
	mod.ndarray( {}, 0, 1, 0 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.ndarray( 10, '10', 1, 0 ); // $ExpectError
	mod.ndarray( 10, true, 1, 0 ); // $ExpectError
	mod.ndarray( 10, false, 1, 0 ); // $ExpectError
	mod.ndarray( 10, null, 1, 0 ); // $ExpectError
	mod.ndarray( 10, undefined, 1, 0 ); // $ExpectError
	mod.ndarray( 10, [], 1, 0 ); // $ExpectError
	mod.ndarray( 10, {}, 1, 0 ); // $ExpectError
	mod.ndarray( 10, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.ndarray( 10, 0, '10', 0 ); // $ExpectError
	mod.ndarray( 10, 0, true, 0 ); // $ExpectError
	mod.ndarray( 10, 0, false, 0 ); // $ExpectError
	mod.ndarray( 10, 0, null, 0 ); // $ExpectError
	mod.ndarray( 10, 0, undefined, 0 ); // $ExpectError
	mod.ndarray( 10, 0, [], 0 ); // $ExpectError
	mod.ndarray( 10, 0, {}, 0 ); // $ExpectError
	mod.ndarray( 10, 0, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.ndarray( 10, 0, 1, '10' ); // $ExpectError
	mod.ndarray( 10, 0, 1, true ); // $ExpectError
	mod.ndarray( 10, 0, 1, false ); // $ExpectError
	mod.ndarray( 10, 0, 1, null ); // $ExpectError
	mod.ndarray( 10, 0, 1, undefined ); // $ExpectError
	mod.ndarray( 10, 0, 1, [] ); // $ExpectError
	mod.ndarray( 10, 0, 1, {} ); // $ExpectError
	mod.ndarray( 10, 0, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dmeanors.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 10 ); // $ExpectError
}

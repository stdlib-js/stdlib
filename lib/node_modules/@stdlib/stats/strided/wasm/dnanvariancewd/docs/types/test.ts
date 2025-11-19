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
import dnanvariancewd = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.main( x.length, 1, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.main( '10', 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( true, 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( false, 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( null, 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( undefined, 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( [], 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( {}, 1, x, 1 ); // $ExpectError
	dnanvariancewd.main( ( x: number ): number => x, 1, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.main( x.length, 10, x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, '10', x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, true, x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, false, x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, null, x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, undefined, x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, [], x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, {}, x, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.main( x.length, 1, 10, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, '10', 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, true, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, false, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, null, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, undefined, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, [], 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, {}, 1 ); // $ExpectError
	dnanvariancewd.main( x.length, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.main( x.length, 1, x, '10' ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, true ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, false ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, null ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, undefined ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, [] ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, {} ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.main(); // $ExpectError
	dnanvariancewd.main( x.length ); // $ExpectError
	dnanvariancewd.main( x.length, x ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x ); // $ExpectError
	dnanvariancewd.main( x.length, 1, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray( x.length, 1, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray( '10', 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( true, 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( false, 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( null, 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( undefined, 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( [], 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( {}, 1, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( ( x: number ): number => x, 1, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray( x.length, 10, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray( x.length, 1, 10, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, '10', 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, true, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, false, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, null, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, undefined, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, [], 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, {}, 1, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray( x.length, 1, x, '10', 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, true, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, false, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, null, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, undefined, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, [], 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, {}, 0 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray( x.length, 1, x, 1, '10' ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, true ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, false ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, null ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, undefined ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, [] ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, {} ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dnanvariancewd.ndarray(); // $ExpectError
	dnanvariancewd.ndarray( x.length ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1 ); // $ExpectError
	dnanvariancewd.ndarray( x.length, 1, x, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	dnanvariancewd.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	dnanvariancewd.Module( '10' ); // $ExpectError
	dnanvariancewd.Module( true ); // $ExpectError
	dnanvariancewd.Module( false ); // $ExpectError
	dnanvariancewd.Module( null ); // $ExpectError
	dnanvariancewd.Module( undefined ); // $ExpectError
	dnanvariancewd.Module( [] ); // $ExpectError
	dnanvariancewd.Module( {} ); // $ExpectError
	dnanvariancewd.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.main( 10, 1, 0, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.main( '10', 1, 0, 1 ); // $ExpectError
	mod.main( true, 1, 0, 1 ); // $ExpectError
	mod.main( false, 1, 0, 1 ); // $ExpectError
	mod.main( null, 1, 0, 1 ); // $ExpectError
	mod.main( undefined, 1, 0, 1 ); // $ExpectError
	mod.main( [], 1, 0, 1 ); // $ExpectError
	mod.main( {}, 1, 0, 1 ); // $ExpectError
	mod.main( ( x: number ): number => x, 1, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.main( 10, '10', 0, 1 ); // $ExpectError
	mod.main( 10, true, 0, 1 ); // $ExpectError
	mod.main( 10, false, 0, 1 ); // $ExpectError
	mod.main( 10, null, 0, 1 ); // $ExpectError
	mod.main( 10, undefined, 0, 1 ); // $ExpectError
	mod.main( 10, [], 0, 1 ); // $ExpectError
	mod.main( 10, {}, 0, 1 ); // $ExpectError
	mod.main( 10, ( x: number ): number => x, 0, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.main( 10, 1, '10', 1 ); // $ExpectError
	mod.main( 10, 1, true, 1 ); // $ExpectError
	mod.main( 10, 1, false, 1 ); // $ExpectError
	mod.main( 10, 1, null, 1 ); // $ExpectError
	mod.main( 10, 1, undefined, 1 ); // $ExpectError
	mod.main( 10, 1, [], 1 ); // $ExpectError
	mod.main( 10, 1, {}, 1 ); // $ExpectError
	mod.main( 10, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.main( 10, 1, 0, '10' ); // $ExpectError
	mod.main( 10, 1, 0, true ); // $ExpectError
	mod.main( 10, 1, 0, false ); // $ExpectError
	mod.main( 10, 1, 0, null ); // $ExpectError
	mod.main( 10, 1, 0, undefined ); // $ExpectError
	mod.main( 10, 1, 0, [] ); // $ExpectError
	mod.main( 10, 1, 0, {} ); // $ExpectError
	mod.main( 10, 1, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 1 ); // $ExpectError
	mod.main( 10, 1, 0 ); // $ExpectError
	mod.main( 10, 1, 0, 1, 5 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray( 10, 1, 0, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray( '10', 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( true, 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( false, 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( null, 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( undefined, 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( [], 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( {}, 1, 0, 1, 0 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 1, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray( 1, '10', 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, true, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, false, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, null, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, undefined, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, [], 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, {}, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 1, ( x: number ): number => x, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray( 10, 1, '10', 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, true, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, false, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, null, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, undefined, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, [], 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, {}, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray( 10, 1, 0, '10', 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, true, 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, false, 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, null, 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, undefined, 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, [], 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, {}, 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray( 10, 1, 0, 1, '10' ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, true ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, false ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, null ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, undefined ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, [] ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, {} ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dnanvariancewd.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 1 ); // $ExpectError
	mod.ndarray( 10, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 1, 0, 1, 0, 10 ); // $ExpectError
}

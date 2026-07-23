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

import Memory = require( '@stdlib/wasm/memory' );
import dscal = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dscal.main( x.length, 5.0, x, 1 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.main( '10', 5.0, x, 1 ); // $ExpectError
	dscal.main( true, 5.0, x, 1 ); // $ExpectError
	dscal.main( false, 5.0, x, 1 ); // $ExpectError
	dscal.main( null, 5.0, x, 1 ); // $ExpectError
	dscal.main( undefined, 5.0, x, 1 ); // $ExpectError
	dscal.main( [], 5.0, x, 1 ); // $ExpectError
	dscal.main( {}, 5.0, x, 1 ); // $ExpectError
	dscal.main( ( x: number ): number => x, 5.0, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.main( x.length, '10', x, 1 ); // $ExpectError
	dscal.main( x.length, true, x, 1 ); // $ExpectError
	dscal.main( x.length, false, x, 1 ); // $ExpectError
	dscal.main( x.length, null, x, 1 ); // $ExpectError
	dscal.main( x.length, undefined, x, 1 ); // $ExpectError
	dscal.main( x.length, [], x, 1 ); // $ExpectError
	dscal.main( x.length, {}, x, 1 ); // $ExpectError
	dscal.main( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dscal.main( x.length, 5.0, 10, 1 ); // $ExpectError
	dscal.main( x.length, 5.0, '10', 1 ); // $ExpectError
	dscal.main( x.length, 5.0, true, 1 ); // $ExpectError
	dscal.main( x.length, 5.0, false, 1 ); // $ExpectError
	dscal.main( x.length, 5.0, null, 1 ); // $ExpectError
	dscal.main( x.length, 5.0, undefined, 1 ); // $ExpectError
	dscal.main( x.length, 5.0, [], 1 ); // $ExpectError
	dscal.main( x.length, 5.0, {}, 1 ); // $ExpectError
	dscal.main( x.length, 5.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.main( x.length, 5.0, x, '10' ); // $ExpectError
	dscal.main( x.length, 5.0, x, true ); // $ExpectError
	dscal.main( x.length, 5.0, x, false ); // $ExpectError
	dscal.main( x.length, 5.0, x, null ); // $ExpectError
	dscal.main( x.length, 5.0, x, undefined ); // $ExpectError
	dscal.main( x.length, 5.0, x, [] ); // $ExpectError
	dscal.main( x.length, 5.0, x, {} ); // $ExpectError
	dscal.main( x.length, 5.0, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dscal.main(); // $ExpectError
	dscal.main( x.length ); // $ExpectError
	dscal.main( x.length, 5.0 ); // $ExpectError
	dscal.main( x.length, 5.0, x ); // $ExpectError
	dscal.main( x.length, 5.0, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Float64Array...
{
	const x = new Float64Array( 10 );

	dscal.ndarray( x.length, 5.0, x, 1, 0 ); // $ExpectType Float64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.ndarray( '10', 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( true, 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( false, 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( null, 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( undefined, 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( [], 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( {}, 5.0, x, 1, 0 ); // $ExpectError
	dscal.ndarray( ( x: number ): number => x, 5.0, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float64Array...
{
	const x = new Float64Array( 10 );

	dscal.ndarray( x.length, 5.0, 10, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, '10', 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, true, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, false, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, null, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, undefined, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, [], 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, {}, 1, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.ndarray( x.length, 5.0, x, '10', 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, true, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, false, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, null, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, undefined, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, [], 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, {}, 0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float64Array( 10 );

	dscal.ndarray( x.length, 5.0, x, 1, '10' ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, true ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, false ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, null ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, undefined ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, [] ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, {} ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float64Array( 10 );

	dscal.ndarray(); // $ExpectError
	dscal.ndarray( x.length ); // $ExpectError
	dscal.ndarray( x.length, 5.0 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1 ); // $ExpectError
	dscal.ndarray( x.length, 5.0, x, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	dscal.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	dscal.Module( '10' ); // $ExpectError
	dscal.Module( true ); // $ExpectError
	dscal.Module( false ); // $ExpectError
	dscal.Module( null ); // $ExpectError
	dscal.Module( undefined ); // $ExpectError
	dscal.Module( [] ); // $ExpectError
	dscal.Module( {} ); // $ExpectError
	dscal.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.main( 10, 5.0, 0, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.main( '10', 5.0, 10, 1 ); // $ExpectError
	mod.main( true, 5.0, 10, 1 ); // $ExpectError
	mod.main( false, 5.0, 10, 1 ); // $ExpectError
	mod.main( null, 5.0, 10, 1 ); // $ExpectError
	mod.main( undefined, 5.0, 10, 1 ); // $ExpectError
	mod.main( [], 5.0, 10, 1 ); // $ExpectError
	mod.main( {}, 5.0, 10, 1 ); // $ExpectError
	mod.main( ( x: number ): number => x, 5.0, 10, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

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
	const mod = dscal.Module( mem );

	mod.main( 10, 5.0, '10', 1 ); // $ExpectError
	mod.main( 10, 5.0, true, 1 ); // $ExpectError
	mod.main( 10, 5.0, false, 1 ); // $ExpectError
	mod.main( 10, 5.0, null, 1 ); // $ExpectError
	mod.main( 10, 5.0, undefined, 1 ); // $ExpectError
	mod.main( 10, 5.0, [], 1 ); // $ExpectError
	mod.main( 10, 5.0, {}, 1 ); // $ExpectError
	mod.main( 10, 5.0, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.main( 10, 5.0, 0, '10' ); // $ExpectError
	mod.main( 10, 5.0, 0, true ); // $ExpectError
	mod.main( 10, 5.0, 0, false ); // $ExpectError
	mod.main( 10, 5.0, 0, null ); // $ExpectError
	mod.main( 10, 5.0, 0, undefined ); // $ExpectError
	mod.main( 10, 5.0, 0, [] ); // $ExpectError
	mod.main( 10, 5.0, 0, {} ); // $ExpectError
	mod.main( 10, 5.0, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 5.0 ); // $ExpectError
	mod.main( 10, 5.0, 0 ); // $ExpectError
	mod.main( 10, 5.0, 0, 1, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray( 10, 5.0, 0, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray( '10', 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( true, 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( false, 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( null, 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( undefined, 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( [], 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( {}, 5.0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 5.0, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray( 10, '10', 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, true, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, false, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, null, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, undefined, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, [], 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, {}, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, ( x: number ): number => x, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray( 10, 5.0, '10', 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, true, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, false, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, null, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, undefined, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, [], 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, {}, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray( 10, 5.0, 0, '10', 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, true, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, false, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, null, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, undefined, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, [], 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, {}, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray( 10, 5.0, 0, 1, '10' ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, true ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, false ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, null ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, undefined ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, [] ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, {} ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = dscal.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 5.0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 5.0, 0, 1, 0, 10 ); // $ExpectError
}

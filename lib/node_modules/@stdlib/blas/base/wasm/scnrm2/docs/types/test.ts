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

import Complex64Array = require( '@stdlib/array/complex64' );
import Memory = require( '@stdlib/wasm/memory' );
import scnrm2 = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.main( x.length, x, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.main( '10', x, 1 ); // $ExpectError
	scnrm2.main( true, x, 1 ); // $ExpectError
	scnrm2.main( false, x, 1 ); // $ExpectError
	scnrm2.main( null, x, 1 ); // $ExpectError
	scnrm2.main( undefined, x, 1 ); // $ExpectError
	scnrm2.main( [], x, 1 ); // $ExpectError
	scnrm2.main( {}, x, 1 ); // $ExpectError
	scnrm2.main( ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	scnrm2.main( x.length, 10, 1 ); // $ExpectError
	scnrm2.main( x.length, '10', 1 ); // $ExpectError
	scnrm2.main( x.length, true, 1 ); // $ExpectError
	scnrm2.main( x.length, false, 1 ); // $ExpectError
	scnrm2.main( x.length, null, 1 ); // $ExpectError
	scnrm2.main( x.length, undefined, 1 ); // $ExpectError
	scnrm2.main( x.length, [], 1 ); // $ExpectError
	scnrm2.main( x.length, {}, 1 ); // $ExpectError
	scnrm2.main( x.length, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.main( x.length, x, '10' ); // $ExpectError
	scnrm2.main( x.length, x, true ); // $ExpectError
	scnrm2.main( x.length, x, false ); // $ExpectError
	scnrm2.main( x.length, x, null ); // $ExpectError
	scnrm2.main( x.length, x, undefined ); // $ExpectError
	scnrm2.main( x.length, x, [] ); // $ExpectError
	scnrm2.main( x.length, x, {} ); // $ExpectError
	scnrm2.main( x.length, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	scnrm2.main(); // $ExpectError
	scnrm2.main( x.length ); // $ExpectError
	scnrm2.main( x.length, x ); // $ExpectError
	scnrm2.main( x.length, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.ndarray( x.length, x, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.ndarray( '10', x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( true, x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( false, x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( null, x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( undefined, x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( [], x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( {}, x, 1, 0 ); // $ExpectError
	scnrm2.ndarray( ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a Complex64Array...
{
	const x = new Complex64Array( 10 );

	scnrm2.ndarray( x.length, 10, 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, '10', 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, true, 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, false, 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, null, 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, undefined, 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, [], 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, {}, 1, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.ndarray( x.length, x, '10', 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, true, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, false, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, null, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, undefined, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, [], 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, {}, 0 ); // $ExpectError
	scnrm2.ndarray( x.length, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex64Array( 10 );

	scnrm2.ndarray( x.length, x, 1, '10' ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, true ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, false ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, null ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, undefined ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, [] ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, {} ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex64Array( 10 );

	scnrm2.ndarray(); // $ExpectError
	scnrm2.ndarray( x.length ); // $ExpectError
	scnrm2.ndarray( x.length, x ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1 ); // $ExpectError
	scnrm2.ndarray( x.length, x, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	scnrm2.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	scnrm2.Module( '10' ); // $ExpectError
	scnrm2.Module( true ); // $ExpectError
	scnrm2.Module( false ); // $ExpectError
	scnrm2.Module( null ); // $ExpectError
	scnrm2.Module( undefined ); // $ExpectError
	scnrm2.Module( [] ); // $ExpectError
	scnrm2.Module( {} ); // $ExpectError
	scnrm2.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = scnrm2.Module( mem );

	mod.main( 10, 0, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = scnrm2.Module( mem );

	mod.main( '10', 0, 10 ); // $ExpectError
	mod.main( true, 0, 10 ); // $ExpectError
	mod.main( false, 0, 10 ); // $ExpectError
	mod.main( null, 0, 10 ); // $ExpectError
	mod.main( undefined, 0, 10 ); // $ExpectError
	mod.main( [], 0, 10 ); // $ExpectError
	mod.main( {}, 0, 10 ); // $ExpectError
	mod.main( ( x: number ): number => x, 0, 10 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = scnrm2.Module( mem );

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
	const mod = scnrm2.Module( mem );

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
	const mod = scnrm2.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 0 ); // $ExpectError
	mod.main( 10, 0, 1, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = scnrm2.Module( mem );

	mod.ndarray( 10, 0, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = scnrm2.Module( mem );

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
	const mod = scnrm2.Module( mem );

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
	const mod = scnrm2.Module( mem );

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
	const mod = scnrm2.Module( mem );

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
	const mod = scnrm2.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 1, 0, 10 ); // $ExpectError
}

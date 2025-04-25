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
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Memory = require( '@stdlib/wasm/memory' );
import zscal = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.main( x.length, alpha, x, 1 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.main( '10', alpha, x, 1 ); // $ExpectError
	zscal.main( true, alpha, x, 1 ); // $ExpectError
	zscal.main( false, alpha, x, 1 ); // $ExpectError
	zscal.main( null, alpha, x, 1 ); // $ExpectError
	zscal.main( undefined, alpha, x, 1 ); // $ExpectError
	zscal.main( [], alpha, x, 1 ); // $ExpectError
	zscal.main( {}, alpha, x, 1 ); // $ExpectError
	zscal.main( ( x: number ): number => x, alpha, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a complex number...
{
	const x = new Complex128Array( 10 );

	zscal.main( x.length, '10', x, 1 ); // $ExpectError
	zscal.main( x.length, true, x, 1 ); // $ExpectError
	zscal.main( x.length, false, x, 1 ); // $ExpectError
	zscal.main( x.length, null, x, 1 ); // $ExpectError
	zscal.main( x.length, undefined, x, 1 ); // $ExpectError
	zscal.main( x.length, [], x, 1 ); // $ExpectError
	zscal.main( x.length, {}, x, 1 ); // $ExpectError
	zscal.main( x.length, ( x: number ): number => x, x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.main( x.length, alpha, 10, 1 ); // $ExpectError
	zscal.main( x.length, alpha, '10', 1 ); // $ExpectError
	zscal.main( x.length, alpha, true, 1 ); // $ExpectError
	zscal.main( x.length, alpha, false, 1 ); // $ExpectError
	zscal.main( x.length, alpha, null, 1 ); // $ExpectError
	zscal.main( x.length, alpha, undefined, 1 ); // $ExpectError
	zscal.main( x.length, alpha, [], 1 ); // $ExpectError
	zscal.main( x.length, alpha, {}, 1 ); // $ExpectError
	zscal.main( x.length, alpha, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.main( x.length, alpha, x, '10' ); // $ExpectError
	zscal.main( x.length, alpha, x, true ); // $ExpectError
	zscal.main( x.length, alpha, x, false ); // $ExpectError
	zscal.main( x.length, alpha, x, null ); // $ExpectError
	zscal.main( x.length, alpha, x, undefined ); // $ExpectError
	zscal.main( x.length, alpha, x, [] ); // $ExpectError
	zscal.main( x.length, alpha, x, {} ); // $ExpectError
	zscal.main( x.length, alpha, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.main(); // $ExpectError
	zscal.main( x.length ); // $ExpectError
	zscal.main( x.length, alpha ); // $ExpectError
	zscal.main( x.length, alpha, x ); // $ExpectError
	zscal.main( x.length, alpha, x, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, x, 1, 0 ); // $ExpectType Complex128Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( '10', alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( true, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( false, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( null, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( undefined, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( [], alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( {}, alpha, x, 1, 0 ); // $ExpectError
	zscal.ndarray( ( x: number ): number => x, alpha, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const x = new Complex128Array( 10 );

	zscal.ndarray( x.length, '10', x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, true, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, false, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, null, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, undefined, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, [], x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, {}, x, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, ( x: number ): number => x, x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex128Array...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, 10, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, '10', 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, true, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, false, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, null, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, undefined, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, [], 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, {}, 1, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, x, '10', 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, true, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, false, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, null, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, undefined, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, [], 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, {}, 0 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray( x.length, alpha, x, 1, '10' ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, true ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, false ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, null ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, undefined ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, [] ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, {} ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Complex128Array( 10 );
	const alpha = new Complex128( 2.0, 2.0 );

	zscal.ndarray(); // $ExpectError
	zscal.ndarray( x.length ); // $ExpectError
	zscal.ndarray( x.length, alpha ); // $ExpectError
	zscal.ndarray( x.length, alpha, x ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1 ); // $ExpectError
	zscal.ndarray( x.length, alpha, x, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	zscal.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	zscal.Module( '10' ); // $ExpectError
	zscal.Module( true ); // $ExpectError
	zscal.Module( false ); // $ExpectError
	zscal.Module( null ); // $ExpectError
	zscal.Module( undefined ); // $ExpectError
	zscal.Module( [] ); // $ExpectError
	zscal.Module( {} ); // $ExpectError
	zscal.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.main( 10, 80, 0, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.main( '10', 80, 10, 1 ); // $ExpectError
	mod.main( true, 80, 10, 1 ); // $ExpectError
	mod.main( false, 80, 10, 1 ); // $ExpectError
	mod.main( null, 80, 10, 1 ); // $ExpectError
	mod.main( undefined, 80, 10, 1 ); // $ExpectError
	mod.main( [], 80, 10, 1 ); // $ExpectError
	mod.main( {}, 80, 10, 1 ); // $ExpectError
	mod.main( ( x: number ): number => x, 80, 10, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

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
	const mod = zscal.Module( mem );

	mod.main( 10, 80, '10', 1 ); // $ExpectError
	mod.main( 10, 80, true, 1 ); // $ExpectError
	mod.main( 10, 80, false, 1 ); // $ExpectError
	mod.main( 10, 80, null, 1 ); // $ExpectError
	mod.main( 10, 80, undefined, 1 ); // $ExpectError
	mod.main( 10, 80, [], 1 ); // $ExpectError
	mod.main( 10, 80, {}, 1 ); // $ExpectError
	mod.main( 10, 80, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.main( 10, 80, 0, '10' ); // $ExpectError
	mod.main( 10, 80, 0, true ); // $ExpectError
	mod.main( 10, 80, 0, false ); // $ExpectError
	mod.main( 10, 80, 0, null ); // $ExpectError
	mod.main( 10, 80, 0, undefined ); // $ExpectError
	mod.main( 10, 80, 0, [] ); // $ExpectError
	mod.main( 10, 80, 0, {} ); // $ExpectError
	mod.main( 10, 80, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 80 ); // $ExpectError
	mod.main( 10, 80, 0 ); // $ExpectError
	mod.main( 10, 80, 0, 1, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.ndarray( 10, 80, 0, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.ndarray( '10', 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( true, 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( false, 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( null, 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( undefined, 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( [], 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( {}, 80, 0, 1, 0 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 80, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

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
	const mod = zscal.Module( mem );

	mod.ndarray( 10, 80, '10', 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, true, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, false, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, null, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, undefined, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, [], 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, {}, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 80, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.ndarray( 10, 80, 0, '10', 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, true, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, false, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, null, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, undefined, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, [], 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, {}, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.ndarray( 10, 80, 0, 1, '10' ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, true ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, false ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, null ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, undefined ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, [] ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, {} ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = zscal.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 80 ); // $ExpectError
	mod.ndarray( 10, 80, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, 0, 10 ); // $ExpectError
}

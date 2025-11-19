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
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import Memory = require( '@stdlib/wasm/memory' );
import cscal = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.main( cx.length, ca, cx, 1 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.main( '10', ca, cx, 1 ); // $ExpectError
	cscal.main( true, ca, cx, 1 ); // $ExpectError
	cscal.main( false, ca, cx, 1 ); // $ExpectError
	cscal.main( null, ca, cx, 1 ); // $ExpectError
	cscal.main( undefined, ca, cx, 1 ); // $ExpectError
	cscal.main( [], ca, cx, 1 ); // $ExpectError
	cscal.main( {}, ca, cx, 1 ); // $ExpectError
	cscal.main( ( x: number ): number => x, ca, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a complex number...
{
	const cx = new Complex64Array( 10 );

	cscal.main( cx.length, '10', cx, 1 ); // $ExpectError
	cscal.main( cx.length, true, cx, 1 ); // $ExpectError
	cscal.main( cx.length, false, cx, 1 ); // $ExpectError
	cscal.main( cx.length, null, cx, 1 ); // $ExpectError
	cscal.main( cx.length, undefined, cx, 1 ); // $ExpectError
	cscal.main( cx.length, [], cx, 1 ); // $ExpectError
	cscal.main( cx.length, {}, cx, 1 ); // $ExpectError
	cscal.main( cx.length, ( x: number ): number => x, cx, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.main( cx.length, ca, 10, 1 ); // $ExpectError
	cscal.main( cx.length, ca, '10', 1 ); // $ExpectError
	cscal.main( cx.length, ca, true, 1 ); // $ExpectError
	cscal.main( cx.length, ca, false, 1 ); // $ExpectError
	cscal.main( cx.length, ca, null, 1 ); // $ExpectError
	cscal.main( cx.length, ca, undefined, 1 ); // $ExpectError
	cscal.main( cx.length, ca, [], 1 ); // $ExpectError
	cscal.main( cx.length, ca, {}, 1 ); // $ExpectError
	cscal.main( cx.length, ca, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.main( cx.length, ca, cx, '10' ); // $ExpectError
	cscal.main( cx.length, ca, cx, true ); // $ExpectError
	cscal.main( cx.length, ca, cx, false ); // $ExpectError
	cscal.main( cx.length, ca, cx, null ); // $ExpectError
	cscal.main( cx.length, ca, cx, undefined ); // $ExpectError
	cscal.main( cx.length, ca, cx, [] ); // $ExpectError
	cscal.main( cx.length, ca, cx, {} ); // $ExpectError
	cscal.main( cx.length, ca, cx, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.main(); // $ExpectError
	cscal.main( cx.length ); // $ExpectError
	cscal.main( cx.length, ca ); // $ExpectError
	cscal.main( cx.length, ca, x ); // $ExpectError
	cscal.main( cx.length, ca, cx, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, cx, 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( '10', ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( true, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( false, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( null, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( undefined, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( [], ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( {}, ca, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( ( x: number ): number => x, ca, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a complex number...
{
	const cx = new Complex64Array( 10 );

	cscal.ndarray( cx.length, '10', cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, true, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, false, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, null, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, undefined, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, [], cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, {}, cx, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ( x: number ): number => x, cx, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Complex64Array...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, 10, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, '10', 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, true, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, false, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, null, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, undefined, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, [], 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, {}, 1, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, cx, '10', 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, true, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, false, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, null, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, undefined, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, [], 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, {}, 0 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray( cx.length, ca, cx, 1, '10' ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, true ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, false ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, null ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, undefined ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, [] ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, {} ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const cx = new Complex64Array( 10 );
	const ca = new Complex64( 2.0, 2.0 );

	cscal.ndarray(); // $ExpectError
	cscal.ndarray( cx.length ); // $ExpectError
	cscal.ndarray( cx.length, ca ); // $ExpectError
	cscal.ndarray( cx.length, ca, x ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1 ); // $ExpectError
	cscal.ndarray( cx.length, ca, cx, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	cscal.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	cscal.Module( '10' ); // $ExpectError
	cscal.Module( true ); // $ExpectError
	cscal.Module( false ); // $ExpectError
	cscal.Module( null ); // $ExpectError
	cscal.Module( undefined ); // $ExpectError
	cscal.Module( [] ); // $ExpectError
	cscal.Module( {} ); // $ExpectError
	cscal.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = cscal.Module( mem );

	mod.main( 10, 80, 0, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

	mod.ndarray( 10, 80, 0, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

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
	const mod = cscal.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 80 ); // $ExpectError
	mod.ndarray( 10, 80, 0 ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 80, 0, 1, 0, 10 ); // $ExpectError
}

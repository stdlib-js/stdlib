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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ModuleWrapper, Memory } from '@stdlib/types/wasm';
import { Complex128Array } from '@stdlib/types/array';

/**
* Interface defining a module constructor which is both "newable" and "callable".
*/
interface ModuleConstructor {
	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zdrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var zxptr = 0;
	* var zyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( zxptr, x );
	*
	* var ybuf = ones( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( zyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === zyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( zxptr, viewX );
	* mod.read( zyptr, viewY );
	*
	* console.log( reinterpretComplex128( viewY, 0 ) );
	* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex128( viewX, 0 ) );
	* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	new( mem: Memory ): Module; // newable

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = zdrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var zxptr = 0;
	* var zyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( zxptr, x );
	*
	* var ybuf = ones( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( zyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === zyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( zxptr, viewX );
	* mod.read( zyptr, viewY );
	*
	* console.log( reinterpretComplex128( viewY, 0 ) );
	* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex128( viewX, 0 ) );
	* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `zdrot` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param zxptr - first input array pointer (i.e., byte offset)
	* @param strideX - `zx` stride length
	* @param zyptr - second input array pointer (i.e., byte offset)
	* @param strideY - `zy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns input array pointer `zy` (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zdrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var zxptr = 0;
	* var zyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( zxptr, x );
	*
	* var ybuf = ones( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( zyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === zyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( zxptr, viewX );
	* mod.read( zyptr, viewY );
	*
	* console.log( reinterpretComplex128( viewY, 0 ) );
	* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex128( viewX, 0 ) );
	* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	main( N: number, zxptr: number, strideX: number, zyptr: number, strideY: number, c: number, s: number ): number;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param zxptr - first input array pointer (i.e., byte offset)
	* @param strideX - `zx` stride length
	* @param offsetX - starting index for `x`
	* @param zyptr - second input array pointer (i.e., byte offset)
	* @param strideY - `zy` stride length
	* @param offsetY - starting index for `y`
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns input array pointer `zyptr` (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zdrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var zxptr = 0;
	* var zyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( zxptr, x );
	*
	* var ybuf = ones( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( zyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.ndarray( N, zxptr, 1, 0, zyptr, 1, 0, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === zyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( zxptr, viewX );
	* mod.read( zyptr, viewY );
	*
	* console.log( reinterpretComplex128( viewY, 0 ) );
	* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex128( viewX, 0 ) );
	* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	ndarray( N: number, zxptr: number, strideX: number, offsetX: number, zyptr: number, strideY: number, offsetY: number, c: number, s: number ): number;
}

/**
* Interface describing `zdrot`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns input array `zy`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
	*
	* var v = zx.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns ~-0.2
	*
	* var im = imag( v );
	* // returns ~-0.4
	*
	* v = zy.get( 0 );
	* // returns <Complex128>
	*
	* re = real( v );
	* // returns ~1.4
	*
	* im = imag( v );
	* // returns ~2.8
	*/
	main( N: number, zx: Complex128Array, strideX: number, zy: Complex128Array, strideY: number, c: number, s: number ): Complex128Array;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param zx - first input array
	* @param strideX - `zx` stride length
	* @param offsetX - starting index for `zx`
	* @param zy - second input array
	* @param strideY - `zy` stride length
	* @param offsetY - starting index for `zy`
	* @returns input array `zy`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var real = require( '@stdlib/complex/float64/real' );
	* var imag = require( '@stdlib/complex/float64/imag' );
	*
	* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
	*
	* var v = zx.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( v );
	* // returns ~-0.2
	*
	* var im = imag( v );
	* // returns ~-0.4
	*
	* v = zy.get( 0 );
	* // returns <Complex128>
	*
	* re = real( v );
	* // returns ~1.4
	*
	* im = imag( v );
	* // returns ~2.8
	*/
	ndarray( N: number, zx: Complex128Array, strideX: number, offsetX: number, zy: Complex128Array, strideY: number, offsetY: number, c: number, s: number ): Complex128Array;

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new zdrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex128';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var zxptr = 0;
	* var zyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( zxptr, x );
	*
	* var ybuf = zeros( N*2, 'float64' );
	* var y = new Complex128Array( ybuf.buffer );
	* mod.write( zyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === zyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( zxptr, viewX );
	* mod.read( zyptr, viewY );
	*
	* console.log( reinterpretComplex128( viewY, 0 ) );
	* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex128( viewX, 0 ) );
	* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	Module: ModuleConstructor;
}

/**
* Applies a plane rotation.
*
* @param N - number of indexed elements
* @param zx - first input array
* @param strideX - `zx` stride length
* @param zy - second input array
* @param strideY - `zy` stride length
* @param c - cosine of the angle of rotation
* @param s - sine of the angle of rotation
* @returns input array `zy`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
*
* var v = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~-0.2
*
* var im = imag( v );
* // returns ~-0.4
*
* v = zy.get( 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns ~1.4
*
* im = imag( v );
* // returns ~2.8
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
*
* var v = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~-0.2
*
* var im = imag( v );
* // returns ~-0.4
*
* v = zy.get( 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns ~1.4
*
* im = imag( v );
* // returns ~2.8
*/
declare var zdrot: Routine;


// EXPORTS //

export = zdrot;

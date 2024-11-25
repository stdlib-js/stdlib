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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ModuleWrapper, Memory } from '@stdlib/types/wasm';
import { Complex64Array } from '@stdlib/types/array';

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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new csrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var cxptr = 0;
	* var cyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( cxptr, x );
	*
	* var ybuf = ones( N*2, 'float32' );
	* var y = new Complex64Array( ybuf.buffer );
	* mod.write( cyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === cyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( cxptr, viewX );
	* mod.read( cyptr, viewY );
	*
	* console.log( reinterpretComplex64( viewY, 0 ) );
	* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex64( viewX, 0 ) );
	* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = csrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var cxptr = 0;
	* var cyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( cxptr, x );
	*
	* var ybuf = ones( N*2, 'float32' );
	* var y = new Complex64Array( ybuf.buffer );
	* mod.write( cyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === cyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( cxptr, viewX );
	* mod.read( cyptr, viewY );
	*
	* console.log( reinterpretComplex64( viewY, 0 ) );
	* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex64( viewX, 0 ) );
	* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `csrot` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param cxptr - first input array pointer (i.e., byte offset)
	* @param strideX - `cx` stride length
	* @param cyptr - second input array pointer (i.e., byte offset)
	* @param strideY - `cy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns input array pointer `cy` (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new csrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var cxptr = 0;
	* var cyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( cxptr, x );
	*
	* var ybuf = ones( N*2, 'float32' );
	* var y = new Complex64Array( ybuf.buffer );
	* mod.write( cyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === cyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( cxptr, viewX );
	* mod.read( cyptr, viewY );
	*
	* console.log( reinterpretComplex64( viewY, 0 ) );
	* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex64( viewX, 0 ) );
	* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	main( N: number, cxptr: number, strideX: number, cyptr: number, strideY: number, c: number, s: number ): number;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param cxptr - first input array pointer (i.e., byte offset)
	* @param strideX - `cx` stride length
	* @param offsetX - starting index for `x`
	* @param cyptr - second input array pointer (i.e., byte offset)
	* @param strideY - `cy` stride length
	* @param offsetY - starting index for `y`
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns input array pointer `cyptr` (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new csrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var cxptr = 0;
	* var cyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( cxptr, x );
	*
	* var ybuf = ones( N*2, 'float32' );
	* var y = new Complex64Array( ybuf.buffer );
	* mod.write( cyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.ndarray( N, cxptr, 1, 0, cyptr, 1, 0, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === cyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( cxptr, viewX );
	* mod.read( cyptr, viewY );
	*
	* console.log( reinterpretComplex64( viewY, 0 ) );
	* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex64( viewX, 0 ) );
	* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	ndarray( N: number, cxptr: number, strideX: number, offsetX: number, cyptr: number, strideY: number, offsetY: number, c: number, s: number ): number;
}

/**
* Interface describing `csrot`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Applies a plane rotation.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @param c - cosine of the angle of rotation
	* @param s - sine of the angle of rotation
	* @returns input array `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
	*
	* var v = cx.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns ~-0.2
	*
	* var im = imagf( v );
	* // returns ~-0.4
	*
	* v = cy.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( v );
	* // returns ~1.4
	*
	* im = imagf( v );
	* // returns ~2.8
	*/
	main( N: number, cx: Complex64Array, strideX: number, cy: Complex64Array, strideY: number, c: number, s: number ): Complex64Array;

	/**
	* Applies a plane rotation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param cx - first input array
	* @param strideX - `cx` stride length
	* @param offsetX - starting index for `x`
	* @param cy - second input array
	* @param strideY - `cy` stride length
	* @param offsetY - starting index for `y`
	* @returns input array `cy`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
	*
	* var v = cx.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns ~-0.2
	*
	* var im = imagf( v );
	* // returns ~-0.4
	*
	* v = cy.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( v );
	* // returns ~1.4
	*
	* im = imagf( v );
	* // returns ~2.8
	*/
	ndarray( N: number, cx: Complex64Array, strideX: number, offsetX: number, cy: Complex64Array, strideY: number, offsetY: number, c: number, s: number ): Complex64Array;

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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new csrot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointers (i.e., byte offsets) for storing input vectors:
	* var cxptr = 0;
	* var cyptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( cxptr, x );
	*
	* var ybuf = zeros( N*2, 'float32' );
	* var y = new Complex64Array( ybuf.buffer );
	* mod.write( cyptr, y );
	*
	* // Perform computation:
	* var ptr = mod.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
	* // returns <number>
	*
	* var bool = ( ptr === cyptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( N, dtype );
	* mod.read( cxptr, viewX );
	* mod.read( cyptr, viewY );
	*
	* console.log( reinterpretComplex64( viewY, 0 ) );
	* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
	*
	* console.log( reinterpretComplex64( viewX, 0 ) );
	* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
	*/
	Module: ModuleConstructor;
}

/**
* Applies a plane rotation.
*
* @param N - number of indexed elements
* @param cx - first input array
* @param strideX - `cx` stride length
* @param cy - second input array
* @param strideY - `cy` stride length
* @param c - cosine of the angle of rotation
* @param s - sine of the angle of rotation
* @returns input array `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*/
declare var csrot: Routine;


// EXPORTS //

export = csrot;

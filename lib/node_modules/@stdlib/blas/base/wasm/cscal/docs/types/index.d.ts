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
import { Complex64 } from '@stdlib/types/complex';

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
	* var Float32Array = require( '@stdlib/array/float32' );
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
	* var mod = new cscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zptr, xptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === xptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( xptr, view );
	*
	* console.log( reinterpretComplex64( view, 0 ) );
	* // => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
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
	* var Float32Array = require( '@stdlib/array/float32' );
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
	* var mod = cscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zptr, xptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === xptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( xptr, view );
	*
	* console.log( reinterpretComplex64( view, 0 ) );
	* // => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `cscal` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param aptr - scalar constant pointer (i.e., byte offset)
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @returns input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Float32Array = require( '@stdlib/array/float32' );
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
	* var mod = new cscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zptr, xptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === xptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( xptr, view );
	*
	* console.log( reinterpretComplex64( view, 0 ) );
	* // => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	main( N: number, aptr: number, xptr: number, strideX: number ): number;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param aptr - scalar constant pointer (i.e., byte offset)
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Float32Array = require( '@stdlib/array/float32' );
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
	* var mod = new cscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );
	*
	* // Perform computation:
	* var ptr = mod.ndarray( N, zptr, xptr, 1, 0 );
	* // returns <number>
	*
	* var bool = ( ptr === xptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( xptr, view );
	*
	* console.log( reinterpretComplex64( view, 0 ) );
	* // => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	ndarray( N: number, aptr: number, xptr: number, strideX: number, offsetX: number ): number;
}

/**
* Interface describing `cscal`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* // Define a strided array:
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Define a scalar constant:
	* var z = new Complex64( 2.0, 2.0 );
	*
	* // Perform operation:
	* cscal.main( x.length, z, x, 1 );
	*
	* var v = x.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns -2.0
	*
	* var im = imagf( v );
	* // returns 6.0
	*/
	main( N: number, alpha: Complex64, x: Complex64Array, strideX: number ): Complex64Array;

	/**
	* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns input array
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	* var Complex64 = require( '@stdlib/complex/float32/ctor' );
	* var realf = require( '@stdlib/complex/float32/real' );
	* var imagf = require( '@stdlib/complex/float32/imag' );
	*
	* // Define a strided array:
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Define a scalar constant:
	* var z = new Complex64( 2.0, 2.0 );
	*
	* // Perform operation:
	* cscal.ndarray( x.length, z, x, 1, 0 );
	*
	* var v = x.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( v );
	* // returns -2.0
	*
	* var im = imagf( v );
	* // returns 6.0
	*/
	ndarray( N: number, alpha: Complex64, x: Complex64Array, strideX: number, offsetX: number ): Complex64Array;

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
	* var Float32Array = require( '@stdlib/array/float32' );
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
	* var mod = new cscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float32Array( [ 2.0, 2.0 ] ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, zptr, xptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === xptr );
	* // returns true
	*
	* // Read out the results:
	* var view = zeros( N, dtype );
	* mod.read( xptr, view );
	*
	* console.log( reinterpretComplex64( view, 0 ) );
	* // => <Float32Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	Module: ModuleConstructor;
}

/**
* Scales a single-precision complex floating-point vector by a single-precision complex floating-point constant.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param strideX - `x` stride length
* @returns input array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Define a scalar constant:
* var z = new Complex64( 2.0, 2.0 );
*
* // Perform operation:
* cscal.main( x.length, z, x, 1 );
*
* var v = x.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -2.0
*
* var im = imagf( v );
* // returns 6.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Define a scalar constant:
* var z = new Complex64( 2.0, 2.0 );
*
* // Perform operation:
* cscal.ndarray( x.length, z, x, 1, 0 );
*
* var v = x.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -2.0
*
* var im = imagf( v );
* // returns 6.0
*/
declare var cscal: Routine;


// EXPORTS //

export = cscal;

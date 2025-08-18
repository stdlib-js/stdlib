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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scnrm2.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns ~19.62
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
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = scnrm2.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns ~19.62
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `scnrm2` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Computes the L2-norm of a complex single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @returns L2-norm
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scnrm2.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns ~19.62
	*/
	main( N: number, xptr: number, strideX: number ): number;

	/**
	* Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns L2-norm
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scnrm2.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Perform computation:
	* var out = mod.ndarray( N, xptr, 1, 0 );
	* // returns ~19.62
	*/
	ndarray( N: number, xptr: number, strideX: number, offsetX: number ): number;
}

/**
* Interface describing `scnrm2`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Computes the L2-norm of a complex single-precision floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns L2-norm
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Define a strided array:
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Perform operation:
	* var out = scnrm2.main( x.length, x, 1 );
	* // returns ~9.53
	*/
	main( N: number, x: Complex64Array, strideX: number ): number;

	/**
	* Computes the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns L2-norm
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Define a strided array:
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var out = scnrm2.ndarray( x.length, x, 1, 0 );
	* // returns ~9.53
	*/
	ndarray( N: number, x: Complex64Array, strideX: number, offsetX: number ): number;

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scnrm2.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float32' );
	* var x = new Complex64Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns ~19.62
	*/
	Module: ModuleConstructor;
}

/**
* Computes the L2-norm of a complex single-precision floating-point vector.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @returns L2-norm
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = scnrm2.main( x.length, x, 1 );
* // returns ~9.53
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* var out = scnrm2.ndarray( x.length, x, 1, 0 );
* // returns ~9.53
*/
declare var scnrm2: Routine;


// EXPORTS //

export = scnrm2;

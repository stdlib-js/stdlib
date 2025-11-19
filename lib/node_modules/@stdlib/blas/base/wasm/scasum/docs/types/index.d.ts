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
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scasum.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 4;
	*
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns 10.0
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
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = scasum.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 4;
	*
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns 10.0
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `scasum` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @returns sum of absolute values
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scasum.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 4;
	*
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns 10.0
	*/
	main( N: number, xptr: number, strideX: number ): number;

	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns sum of absolute values
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scasum.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 4;
	*
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var out = mod.ndarray( N, xptr, 1, 0 );
	* // returns 10.0
	*/
	ndarray( N: number, xptr: number, strideX: number, offsetX: number ): number;
}

/**
* Interface describing `scasum`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns sum of absolute values
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ] );
	*
	* var out = scasum.main( x.length, 5.0, x, 1, y, 1 );
	* // returns 19.0
	*/
	main( N: number, x: Complex64Array, strideX: number ): number;

	/**
	* Computes the sum of absolute values using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns sum of absolute values
	*
	* @example
	* var Complex64Array = require( '@stdlib/array/complex64' );
	*
	* var x = new Complex64Array( [ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ] );
	*
	* var out = scasum.ndarray( x.length, x, 1, 0 );
	* // returns 19.0
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
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new scasum.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'complex64';
	*
	* // Specify a vector length:
	* var N = 4;
	*
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var out = mod.main( N, xptr, 1 );
	* // returns 10.0
	*/
	Module: ModuleConstructor;
}

/**
* Computes the sum of absolute values.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @returns sum of absolute values
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ] );
*
* var out = scasum.main( x.length, x, 1 );
* // returns 21.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ] );
*
* var out = scasum.ndarray( x.length, x, 1, 0 );
* // returns 21.0
*/
declare var scasum: Routine;


// EXPORTS //

export = scasum;

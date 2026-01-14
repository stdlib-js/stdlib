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
	* var mod = new idamax.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var idx = mod.main( N, xptr, 1 );
	* // returns 4
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
	* var mod = idamax.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var idx = mod.main( N, xptr, 1 );
	* // returns 4
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing an `idamax` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Finds the index of the first element having the maximum absolute value.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @returns index value
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
	* var mod = new idamax.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var idx = mod.main( N, xptr, 1 );
	* // returns 4
	*/
	main( N: number, xptr: number, strideX: number ): number;

	/**
	* Finds the index of the first element having the maximum absolute value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns index value
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
	* var mod = new idamax.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var idx = mod.ndarray( N, xptr, 1, 0 );
	* // returns 4
	*/
	ndarray( N: number, xptr: number, strideX: number, offsetX: number ): number;
}

/**
* Interface describing `idamax`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Finds the index of the first element having the maximum absolute value.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @returns index value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, -5.0 ] );
	*
	* var idx = idamax.main( x.length, x, 1 );
	* // returns 4
	*/
	main( N: number, x: Float64Array, strideX: number ): number;

	/**
	* Finds the index of the first element having the maximum absolute value using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @returns index value
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, -5.0 ] );
	*
	* var idx = idamax.ndarray( x.length, x, 1, 0 );
	* // returns 4
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number ): number;

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
	* var mod = new idamax.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 5;
	*
	* // Define pointer (i.e., byte offsets) for storing the input vector:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* var idx = mod.main( N, xptr, 1 );
	* // returns 4
	*/
	Module: ModuleConstructor;
}

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @returns index value
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, -5.0, 4.0 ] );
*
* var idx = idamax.main( x.length, x, 1 );
* // returns 3
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* var idx = idamax.ndarray( x.length, x, -1, 4 );
* // returns 0
*/
declare var idamax: Routine;


// EXPORTS //

export = idamax;

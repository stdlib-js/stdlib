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
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dswap.Module( mem );
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
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( n, dtype );
	* mod.read( xptr, viewX )
	* mod.read( yptr, viewY );
	* // viewX => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // viewY => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
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
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = dswap.Module( mem );
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
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( n, dtype );
	* mod.read( xptr, viewX )
	* mod.read( yptr, viewY );
	* // viewX => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // viewY => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `dswap` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Interchanges two double-precision floating point vectors.
	*
	* @param N - number of indexed elements
	* @param xptr - first input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param yptr - second input array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @returns second input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dswap.Module( mem );
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
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( n, dtype );
	* mod.read( xptr, viewX )
	* mod.read( yptr, viewY );
	* // viewX => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // viewY => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	main( N: number, xptr: number, strideX: number, yptr: number, strideY: number ): number;

	/**
	* Interchanges two double-precision floating point vectors using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param xptr - first input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param yptr - second input array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns second input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dswap.Module( mem );
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
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.ndarray( N, xptr, 1, 0, yptr, 1, 0 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( n, dtype );
	* mod.read( xptr, viewX )
	* mod.read( yptr, viewY );
	* // viewX => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // viewY => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	ndarray( N: number, xptr: number, strideX: number, offsetX: number, yptr: number, strideY: number, offsetY: number ): number;
}

/**
* Interface describing `dswap`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Interchanges two double-precision floating point vectors.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns second input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* dswap.main( x.length, x, 1, y, 1 );
	* // x => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	main( N: number, x: Float64Array, strideX: number, y: Float64Array, strideY: number ): Float64Array;

	/**
	* Interchanges two double-precision floating point vectors using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns second input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* dswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
	* // x => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	ndarray( N: number, x: Float64Array, strideX: number, offsetX: number, y: Float64Array, strideY: number, offsetY: number ): Float64Array;

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
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dswap.Module( mem );
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
	* // Define pointers (i.e., byte offsets) for storing two vectors:
	* var xptr = 0;
	* var yptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var ptr = mod.main( N, xptr, 1, yptr, 1 );
	* // returns <number>
	*
	* var bool = ( ptr === yptr );
	* // returns true
	*
	* // Read out the results:
	* var viewX = zeros( N, dtype );
	* var viewY = zeros( n, dtype );
	* mod.read( xptr, viewX )
	* mod.read( yptr, viewY );
	* // viewX => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
	* // viewY => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	Module: ModuleConstructor;
}

/**
* Interchanges two double-precision floating point vectors.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns second input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* dswap.main( x.length, x, 1, y, 1 );
* // x => <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* dswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
declare var dswap: Routine;


// EXPORTS //

export = dswap;

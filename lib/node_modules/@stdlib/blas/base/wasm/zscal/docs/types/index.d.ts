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
import { Complex128 } from '@stdlib/types/complex';

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
	* var Float64Array = require( '@stdlib/array/float64' );
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
	* var mod = new zscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
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
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
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
	* var Float64Array = require( '@stdlib/array/float64' );
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
	* var mod = zscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
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
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `zscal` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param aptr - scalar constant pointer (i.e., byte offset)
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - stride length for `x`
	* @returns input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Float64Array = require( '@stdlib/array/float64' );
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
	* var mod = new zscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
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
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	main( N: number, aptr: number, xptr: number, strideX: number ): number;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param aptr - scalar constant pointer (i.e., byte offset)
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @returns input array pointer (i.e., byte offset)
	*
	* @example
	* var Memory = require( '@stdlib/wasm/memory' );
	* var oneTo = require( '@stdlib/array/one-to' );
	* var ones = require( '@stdlib/array/ones' );
	* var zeros = require( '@stdlib/array/zeros' );
	* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
	* var Float64Array = require( '@stdlib/array/float64' );
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
	* var mod = new zscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
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
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	ndarray( N: number, aptr: number, xptr: number, strideX: number, offsetX: number ): number;
}

/**
* Interface describing `zscal`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - stride length for `x`
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* // Define a strided array:
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Define a scalar constant:
	* var alpha = new Complex128( 2.0, 2.0 );
	*
	* // Perform operation:
	* zscal.main( x.length, alpha, x, 1 );
	* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
	*/
	main( N: number, alpha: Complex128, x: Complex128Array, strideX: number ): Complex128Array;

	/**
	* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - constant
	* @param x - input array
	* @param strideX - stride length for `x`
	* @param offsetX - starting index for `x`
	* @returns input array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array/complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* // Define a strided array:
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* // Define a scalar constant:
	* var alpha = new Complex128( 2.0, 2.0 );
	*
	* // Perform operation:
	* zscal.ndarray( x.length, alpha, x, 1, 0 );
	* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
	*/
	ndarray( N: number, alpha: Complex128, x: Complex128Array, strideX: number, offsetX: number ): Complex128Array;

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
	* var Float64Array = require( '@stdlib/array/float64' );
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
	* var mod = new zscal.Module( mem );
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
	* // Define a pointer (i.e., byte offset) for storing the input vector:
	* var xptr = 0;
	*
	* // Define a pointer for storing a complex number:
	* var zptr = N * bytesPerElement( dtype );
	*
	* // Write vector values to module memory:
	* var xbuf = oneTo( N*2, 'float64' );
	* var x = new Complex128Array( xbuf.buffer );
	* mod.write( xptr, x );
	*
	* // Write a complex number to module memory:
	* mod.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
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
	* console.log( reinterpretComplex128( view, 0 ) );
	* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
	*/
	Module: ModuleConstructor;
}

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @param N - number of indexed elements
* @param alpha - constant
* @param x - input array
* @param strideX - stride length for `x`
* @returns input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* // Define a strided array:
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Define a scalar constant:
* var alpha = new Complex128( 2.0, 2.0 );
*
* // Perform operation:
* zscal.main( x.length, alpha, x, 1 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* // Define a strided array:
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Define a scalar constant:
* var alpha = new Complex128( 2.0, 2.0 );
*
* // Perform operation:
* zscal.ndarray( x.length, alpha, x, 1, 0 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*/
declare var zscal: Routine;


// EXPORTS //

export = zscal;

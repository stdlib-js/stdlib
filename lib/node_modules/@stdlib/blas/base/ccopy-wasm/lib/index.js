/**
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

'use strict';

/**
* WebAssembly routine to copy values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
*
* @module @stdlib/blas/base/ccopy-wasm
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var ccopy = require( '@stdlib/blas/base/ccopy-wasm' );
*
* // Define strided arrays...
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* ccopy.main( x.length, x, 1, y, 1 );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
* var ccopy = require( '@stdlib/blas/base/ccopy-wasm' );
*
* // Define strided arrays...
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 1.0
*
* var im = imagf( v );
* // returns 2.0
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
* var ccopy = require( '@stdlib/blas/base/ccopy-wasm' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new ccopy.Module( mem );
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
* // Define a pointer (i.e., byte offset) for storing the output vector:
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var x = new Complex64Array( xbuf.buffer );
* mod.write( xptr, x );
*
* var ybuf = zeros( N*2, 'float32' );
* var y = new Complex64Array( ybuf.buffer );
* mod.write( yptr, y );
*
* // Perform computation:
* mod.main( N, xptr, 1, yptr, 1 );
*
* // Read out the results:
* var view = zeros( N, dtype );
* mod.read( yptr, view );
*
* console.log( reinterpretComplex64( view, 0 ) );
* // => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var Module = require( './module.js' );


// MAIN //

setReadOnly( main, 'Module', Module );


// EXPORTS //

module.exports = main;

// exports: { "Module": "main.Module" }

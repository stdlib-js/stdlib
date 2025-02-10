/**
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

'use strict';

/**
* WebAssembly routine to interchange two complex double-precision floating-point vectors.
*
* @module @stdlib/blas/base/wasm/zswap
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zswap = require( '@stdlib/blas/base/wasm/zswap' );
*
* // Define strided arrays...
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* zswap.main( x.length, x, 1, y, 1 );
*
* var v = x.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 0.0
*
* var im = imag( v );
* // returns 0.0
*
* var v = y.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
* var zswap = require( '@stdlib/blas/base/wasm/zswap' );
*
* // Define strided arrays...
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* // Perform operation:
* zswap.ndarray( x.length, x, 1, 0, y, 1, 0 );
*
* var v = x.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 0.0
*
* var im = imag( v );
* // returns 0.0
*
* var v = y.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 1.0
*
* var im = imag( v );
* // returns 2.0
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
* var zswap = require( '@stdlib/blas/base/wasm/zswap' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new zswap.Module( mem );
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
* var xptr = 0;
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var x = new Complex128Array( xbuf.buffer );
* mod.write( xptr, x );
*
* var ybuf = zeros( N*2, 'float64' );
* var y = new Complex128Array( ybuf.buffer );
* mod.write( yptr, y );
*
* // Perform computation:
* mod.main( N, xptr, 1, yptr, 1 );
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* mod.read( xptr, viewX );
* mod.read( yptr, viewY );
*
* console.log( reinterpretComplex128( viewX, 0 ) );
* // => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
*
* console.log( reinterpretComplex128( viewY, 0 ) );
* // => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
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

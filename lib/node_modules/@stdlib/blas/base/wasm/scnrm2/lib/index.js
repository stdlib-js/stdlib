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
* WebAssembly routine to calculate the L2-norm of a complex single-precision floating-point vector.
*
* @module @stdlib/blas/base/wasm/scnrm2
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scnrm2 = require( '@stdlib/blas/base/wasm/scnrm2' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* var out = scnrm2.main( x.length, x, 1 );
* // returns ~9.53
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scnrm2 = require( '@stdlib/blas/base/wasm/scnrm2' );
*
* // Define a strided array:
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* var out = scnrm2.ndarray( x.length, x, 1, 0 );
* // returns ~9.53
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var scnrm2 = require( '@stdlib/blas/base/wasm/scnrm2' );
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
* // Define a pointer (i.e., byte offset) for storing the input vector:
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

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var Module = require( './module.js' );


// MAIN //

setReadOnly( main, 'Module', Module );


// EXPORTS //

module.exports = main;

// exports: { "Module": "main.Module" }

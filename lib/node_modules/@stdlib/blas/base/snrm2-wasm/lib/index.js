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
* WebAssembly routine to calculate the L2-norm of a single-precision floating-point vector.
*
* @module @stdlib/blas/base/snrm2-wasm
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var snrm2 = require( '@stdlib/blas/base/snrm2-wasm' );
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* // Perform operation:
* var out = snrm2.main( x.length, x, 1 );
* // returns ~7.42
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var snrm2 = require( '@stdlib/blas/base/snrm2-wasm' );
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* // Perform operation:
* var out = snrm2.ndarray( x.length, x, 1, 0 );
* // returns ~7.42
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var snrm2 = require( '@stdlib/blas/base/snrm2-wasm' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new snrm2.Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* mod.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float32';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Write vector values to module memory:
* mod.write( xptr, oneTo( N, dtype ) );
*
* // Perform computation:
* var out = mod.main( N, xptr, 1 );
* // returns ~7.42
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

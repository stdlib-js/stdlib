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
* WebAssembly routine to find the index of the first element having the maximum absolute value.
*
* @module @stdlib/blas/base/wasm/isamax
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var isamax = require( '@stdlib/blas/base/wasm/isamax' );
*
* // Define a strided array:
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* // Perform operation:
* var idx = isamax.main( x.length, x, 1 );
* // returns 3
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var isamax = require( '@stdlib/blas/base/wasm/isamax' );
*
* // Define a strided array:
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* // Perform operation:
* var idx = isamax.ndarray( x.length, x, 1, 0 );
* // returns 3
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var isamax = require( '@stdlib/blas/base/wasm/isamax' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new isamax.Module( mem );
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
* // Define a pointer (i.e., byte offset) to the first vector element:
* var xptr = 0;
*
* // Write vector values to module memory:
* mod.write( xptr, oneTo( N, dtype ) );
*
* // Perform computation:
* var idx = mod.main( N, xptr, 1 );
* // returns 4
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

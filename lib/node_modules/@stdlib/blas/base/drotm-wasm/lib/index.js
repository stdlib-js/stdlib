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
* WebAssembly routine to apply a modified Givens plane rotation.
*
* @module @stdlib/blas/base/drotm-wasm
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var drotm = require( '@stdlib/blas/base/drotm-wasm' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.main( x.length, x, 1, y, 1, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var drotm = require( '@stdlib/blas/base/drotm-wasm' );
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var drotm = require( '@stdlib/blas/base/drotm-wasm' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new drotm.Module( mem );
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
* // Define pointers (i.e., byte offsets) for storing three vectors:
* var xptr = 0;
* var yptr = N * bytesPerElement( dtype );
* var pptr = 2 * N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* mod.write( xptr, oneTo( N, dtype ) );
* mod.write( yptr, ones( N, dtype ) );
* mod.write( pptr, ones( 5, dtype ) );
*
* // Perform computation:
* mod.main( N, xptr, 1, yptr, 1, pptr );
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* mod.read( xptr, viewX );
* mod.read( yptr, viewY );
*
* console.log( viewX );
* // => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* console.log( viewY );
* // => <Float64Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
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

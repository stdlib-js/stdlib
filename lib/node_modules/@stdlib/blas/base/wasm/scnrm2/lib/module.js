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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isWebAssemblyMemory = require( '@stdlib/assert/is-wasm-memory' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var inherits = require( '@stdlib/utils/inherit' );
var WasmModule = require( '@stdlib/wasm/module-wrapper' );
var format = require( '@stdlib/string/format' );
var wasmBinary = require( './binary.js' );


// MAIN //

/**
* BLAS routine WebAssembly module wrapper constructor.
*
* @constructor
* @param {Object} memory - WebAssembly memory instance
* @throws {TypeError} must provide a WebAssembly memory instance
* @returns {Module} module instance
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var scnrm2 = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* scnrm2.initializeSync();
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
* scnrm2.write( xptr, x );
*
* // Perform computation:
* var out = scnrm2.main( N, xptr, 1 );
* // returns ~19.62
*/
function Module( memory ) {
	if ( !( this instanceof Module ) ) {
		return new Module( memory );
	}
	if ( !isWebAssemblyMemory( memory ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.', memory ) );
	}
	// Call the parent constructor:
	WasmModule.call( this, wasmBinary, memory, {
		'env': {
			'memory': memory
		}
	});

	return this;
}

// Inherit from the parent constructor:
inherits( Module, WasmModule );

/**
* Calculates the L2-norm of a complex single-precision floating-point vector.
*
* @name main
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @returns {number} the L2-norm
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var scnrm2 = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* scnrm2.initializeSync();
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
* scnrm2.write( xptr, x );
*
* // Perform computation:
* var out = scnrm2.main( N, xptr, 1 );
* // returns ~19.62
*/
setReadOnly( Module.prototype, 'main', function scnrm2( N, xptr, strideX ) {
	return this._instance.exports.c_scnrm2( N, xptr, strideX );
});

/**
* Calculates the L2-norm of a complex single-precision floating-point vector using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @returns {number} the L2-norm
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var scnrm2 = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* scnrm2.initializeSync();
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
* scnrm2.write( xptr, x );
*
* // Perform computation:
* var out = scnrm2.ndarray( N, xptr, 1, 0 );
* // returns ~19.62
*/
setReadOnly( Module.prototype, 'ndarray', function scnrm2( N, xptr, strideX, offsetX ) {
	return this._instance.exports.c_scnrm2_ndarray( N, xptr, strideX, offsetX );
});


// EXPORTS //

module.exports = Module;

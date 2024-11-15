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
* var drotm = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* drotm.initializeSync();
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
* drotm.write( xptr, oneTo( N, dtype ) );
* drotm.write( yptr, ones( N, dtype ) );
* drotm.write( pptr, ones( 5, dtype ) );
*
* // Perform computation:
* var ptr = drotm.main( N, xptr, 1, yptr, 1, pptr );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* drotm.read( xptr, viewX );
* // viewX => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* var viewY = zeros( N, dtype );
* drotm.read( yptr, viewY );
* // viewY => <Float64Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
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
* Applies a modified Givens plane rotation.
*
* @name main
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} yptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} pptr - parameter array pointer (i.e., byte offset)
* @returns {NonNegativeInteger} second input array pointer (i.e., byte offset)
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
* var drotm = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* drotm.initializeSync();
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
* var pptr = 2 * N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* drotm.write( xptr, oneTo( N, dtype ) );
* drotm.write( yptr, ones( N, dtype ) );
* drotm.write( pptr, ones( 5, dtype ) );
*
* // Perform computation:
* var ptr = drotm.main( N, xptr, 1, yptr, 1, pptr );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* drotm.read( xptr, viewX );
* // viewX => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* var viewY = zeros( N, dtype );
* drotm.read( yptr, viewY );
* // viewY => <Float64Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
*/
setReadOnly( Module.prototype, 'main', function drotm( N, xptr, strideX, yptr, strideY, pptr ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_drotm( N, xptr, strideX, yptr, strideY, pptr );
	return yptr;
});

/**
* Applies a modified Givens plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {NonNegativeInteger} yptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {NonNegativeInteger} pptr - parameter array pointer (i.e., byte offset)
* @returns {NonNegativeInteger} second input array pointer (i.e., byte offset)
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
* var drotm = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* drotm.initializeSync();
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
* var pptr = 2 * N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* drotm.write( xptr, oneTo( N, dtype ) );
* drotm.write( yptr, ones( N, dtype ) );
* drotm.write( pptr, ones( 5, dtype ) );
*
* // Perform computation:
* var ptr = drotm.ndarray( N, xptr, 1, 0, yptr, 1, 0, pptr );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* drotm.read( xptr, viewX );
* // viewX => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0 ]
*
* var viewY = zeros( N, dtype );
* drotm.read( yptr, viewY );
* // viewY => <Float64Array>[ 0.0, -1.0, -2.0, -3.0, -4.0 ]
*/
setReadOnly( Module.prototype, 'ndarray', function drotm( N, xptr, strideX, offsetX, yptr, strideY, offsetY, pptr ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_drotm_ndarray( N, xptr, strideX, offsetX, yptr, strideY, offsetY, pptr ); // eslint-disable-line max-len
	return yptr;
});


// EXPORTS //

module.exports = Module;

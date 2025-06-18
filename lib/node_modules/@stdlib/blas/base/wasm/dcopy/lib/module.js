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
* var dcopy = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* dcopy.initializeSync();
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
* dcopy.write( xptr, oneTo( N, dtype ) );
* dcopy.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* var ptr = dcopy.main( N, xptr, 1, yptr, 1 );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* dcopy.read( yptr, view );
* // view => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
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
* Copies values from `x` into `y`.
*
* @name main
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} yptr - output array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @returns {NonNegativeInteger} output array pointer (i.e., byte offset)
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
* var dcopy = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* dcopy.initializeSync();
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
* dcopy.write( xptr, oneTo( N, dtype ) );
* dcopy.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* var ptr = dcopy.main( N, xptr, 1, yptr, 1 );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* dcopy.read( yptr, view );
* // view => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
setReadOnly( Module.prototype, 'main', function dcopy( N, xptr, strideX, yptr, strideY ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_dcopy( N, xptr, strideX, yptr, strideY );
	return yptr;
});

/**
* Copies values from `x` into `y` using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {NonNegativeInteger} yptr - output array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {NonNegativeInteger} output array pointer (i.e., byte offset)
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
* var dcopy = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* dcopy.initializeSync();
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
* dcopy.write( xptr, oneTo( N, dtype ) );
* dcopy.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* var ptr = dcopy.ndarray( N, xptr, 1, 0, yptr, 1, 0 );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* dcopy.read( yptr, view );
* // view => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
setReadOnly( Module.prototype, 'ndarray', function dcopy( N, xptr, strideX, offsetX, yptr, strideY, offsetY ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_dcopy_ndarray( N, xptr, strideX, offsetX, yptr, strideY, offsetY ); // eslint-disable-line max-len
	return yptr;
});


// EXPORTS //

module.exports = Module;

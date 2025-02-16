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
* var Complex64Array = require( '@stdlib/array/complex64' );
* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var csrot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* csrot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var cxptr = 0;
* var cyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var cx = new Complex64Array( xbuf.buffer );
* csrot.write( cxptr, cx );
*
* var ybuf = ones( N*2, 'float32' );
* var cy = new Complex64Array( ybuf.buffer );
* csrot.write( cyptr, cy );
*
* // Perform computation:
* var ptr = csrot.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
* // returns <number>
*
* var bool = ( ptr === cyptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* csrot.read( cxptr, viewX );
* csrot.read( cyptr, viewY );
*
* console.log( reinterpretComplex64( viewY, 0 ) );
* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex64( viewX, 0 ) );
* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
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
* Applies a plane rotation.
*
* @name main
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} cxptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `cx` stride length
* @param {NonNegativeInteger} cyptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `cy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {NonNegativeInteger} input array pointer `cy` (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var csrot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* csrot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var cxptr = 0;
* var cyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var cx = new Complex64Array( xbuf.buffer );
* csrot.write( cxptr, cx );
*
* var ybuf = ones( N*2, 'float32' );
* var cy = new Complex64Array( ybuf.buffer );
* csrot.write( cyptr, cy );
*
* // Perform computation:
* var ptr = csrot.main( N, cxptr, 1, cyptr, 1, 0.8, 0.6 );
* // returns <number>
*
* var bool = ( ptr === cyptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* csrot.read( cxptr, viewX );
* csrot.read( cyptr, viewY );
*
* console.log( reinterpretComplex64( viewY, 0 ) );
* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex64( viewX, 0 ) );
* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
*/
setReadOnly( Module.prototype, 'main', function csrot( N, cxptr, strideX, cyptr, strideY, c, s ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_csrot( N, cxptr, strideX, cyptr, strideY, c, s );
	return cyptr;
});

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} cxptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `cx` stride length
* @param {NonNegativeInteger} offsetX - starting index for `cx`
* @param {NonNegativeInteger} cyptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `cy` stride length
* @param {NonNegativeInteger} offsetY - starting index for `cy`
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {NonNegativeInteger} input array pointer `cy` (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex64Array = require( '@stdlib/array/complex64' );
* var reinterpretComplex64 = require( '@stdlib/strided/base/reinterpret-complex64' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var csrot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* csrot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var cxptr = 0;
* var cyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var cx = new Complex64Array( xbuf.buffer );
* csrot.write( cxptr, cx );
*
* var ybuf = ones( N*2, 'float32' );
* var cy = new Complex64Array( ybuf.buffer );
* csrot.write( cyptr, cy );
*
* // Perform computation:
* var ptr = csrot.ndarray( N, cxptr, 1, 0, cyptr, 1, 0, 0.8, 0.6 );
* // returns <number>
*
* var bool = ( ptr === cyptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* csrot.read( cxptr, viewX );
* csrot.read( cyptr, viewY );
*
* console.log( reinterpretComplex64( viewY, 0 ) );
* // => <Float32Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex64( viewX, 0 ) );
* // => <Float32Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
*/
setReadOnly( Module.prototype, 'ndarray', function csrot( N, cxptr, strideX, offsetX, cyptr, strideY, offsetY, c, s ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_csrot_ndarray( N, cxptr, strideX, offsetX, cyptr, strideY, offsetY, c, s ); // eslint-disable-line max-len
	return cyptr;
});


// EXPORTS //

module.exports = Module;

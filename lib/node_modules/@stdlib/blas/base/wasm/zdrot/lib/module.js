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
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var zdrot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* zdrot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex128';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var zxptr = 0;
* var zyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var zx = new Complex128Array( xbuf.buffer );
* zdrot.write( zxptr, zx );
*
* var ybuf = ones( N*2, 'float64' );
* var zy = new Complex128Array( ybuf.buffer );
* zdrot.write( zyptr, zy );
*
* // Perform computation:
* var ptr = zdrot.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );
* // returns <number>
*
* var bool = ( ptr === zyptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* zdrot.read( zxptr, viewX );
* zdrot.read( zyptr, viewY );
*
* console.log( reinterpretComplex128( viewY, 0 ) );
* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex128( viewX, 0 ) );
* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
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
* @param {NonNegativeInteger} zxptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `zx` stride length
* @param {NonNegativeInteger} zyptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `zy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {NonNegativeInteger} input array pointer `zy` (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var zdrot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* zdrot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex128';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var zxptr = 0;
* var zyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var zx = new Complex128Array( xbuf.buffer );
* zdrot.write( zxptr, zx );
*
* var ybuf = ones( N*2, 'float64' );
* var zy = new Complex128Array( ybuf.buffer );
* zdrot.write( zyptr, zy );
*
* // Perform computation:
* var ptr = zdrot.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );
* // returns <number>
*
* var bool = ( ptr === zyptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* zdrot.read( zxptr, viewX );
* zdrot.read( zyptr, viewY );
*
* console.log( reinterpretComplex128( viewY, 0 ) );
* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex128( viewX, 0 ) );
* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
*/
setReadOnly( Module.prototype, 'main', function zdrot( N, zxptr, strideX, zyptr, strideY, c, s ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_zdrot( N, zxptr, strideX, zyptr, strideY, c, s );
	return zyptr;
});

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} zxptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `zx` stride length
* @param {NonNegativeInteger} offsetX - starting index for `zx`
* @param {NonNegativeInteger} zyptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `zy` stride length
* @param {NonNegativeInteger} offsetY - starting index for `zy`
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {NonNegativeInteger} input array pointer `zy` (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Complex128Array = require( '@stdlib/array/complex128' );
* var reinterpretComplex128 = require( '@stdlib/strided/base/reinterpret-complex128' );
*
* // Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var zdrot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* zdrot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex128';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing input vectors:
* var zxptr = 0;
* var zyptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var zx = new Complex128Array( xbuf.buffer );
* zdrot.write( zxptr, zx );
*
* var ybuf = ones( N*2, 'float64' );
* var zy = new Complex128Array( ybuf.buffer );
* zdrot.write( zyptr, zy );
*
* // Perform computation:
* var ptr = zdrot.ndarray( N, zxptr, 1, 0, zyptr, 1, 0, 0.8, 0.6 );
* // returns <number>
*
* var bool = ( ptr === zyptr );
* // returns true
*
* // Read out the results:
* var viewX = zeros( N, dtype );
* var viewY = zeros( N, dtype );
* zdrot.read( zxptr, viewX );
* zdrot.read( zyptr, viewY );
*
* console.log( reinterpretComplex128( viewY, 0 ) );
* // => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
*
* console.log( reinterpretComplex128( viewX, 0 ) );
* // => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]
*/
setReadOnly( Module.prototype, 'ndarray', function zdrot( N, zxptr, strideX, offsetX, zyptr, strideY, offsetY, c, s ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_zdrot_ndarray( N, zxptr, strideX, offsetX, zyptr, strideY, offsetY, c, s ); // eslint-disable-line max-len
	return zyptr;
});


// EXPORTS //

module.exports = Module;

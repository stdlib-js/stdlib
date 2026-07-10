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
* var Float64Array = require( '@stdlib/array/float64' );
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
* var zscal = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* zscal.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex128';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Define a pointer for storing a complex number:
* var zptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var x = new Complex128Array( xbuf.buffer );
* zscal.write( xptr, x );
*
* // Write a complex number to module memory:
* zscal.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
*
* // Perform computation:
* var ptr = zscal.main( N, zptr, xptr, 1 );
* // returns <number>
*
* var bool = ( ptr === xptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* zscal.read( xptr, view );
*
* console.log( reinterpretComplex128( view, 0 ) );
* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
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
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @name main
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} aptr - scalar constant pointer (i.e., byte offset)
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - stride length for `x`
* @returns {NonNegativeInteger} input array pointer (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Float64Array = require( '@stdlib/array/float64' );
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
* var zscal = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* zscal.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex128';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Define a pointer for storing a complex number:
* var zptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var x = new Complex128Array( xbuf.buffer );
* zscal.write( xptr, x );
*
* // Write a complex number to module memory:
* zscal.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
*
* // Perform computation:
* var ptr = zscal.main( N, zptr, xptr, 1 );
* // returns <number>
*
* var bool = ( ptr === xptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* zscal.read( xptr, view );
*
* console.log( reinterpretComplex128( view, 0 ) );
* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
*/
setReadOnly( Module.prototype, 'main', function zscal( N, aptr, xptr, strideX ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_zscal( N, aptr, xptr, strideX );
	return xptr;
});

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} aptr - scalar constant pointer (i.e., byte offset)
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting `x` index
* @returns {NonNegativeInteger} input array pointer (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
* var ones = require( '@stdlib/array/ones' );
* var zeros = require( '@stdlib/array/zeros' );
* var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
* var Float64Array = require( '@stdlib/array/float64' );
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
* var zscal = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* zscal.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex128';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Define a pointer for storing a complex number:
* var zptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float64' );
* var x = new Complex128Array( xbuf.buffer );
* zscal.write( xptr, x );
*
* // Write a complex number to module memory:
* zscal.write( zptr, new Float64Array( [ 2.0, 2.0 ] ) );
*
* // Perform computation:
* var ptr = zscal.ndarray( N, zptr, xptr, 1, 0 );
* // returns <number>
*
* var bool = ( ptr === xptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* zscal.read( xptr, view );
*
* console.log( reinterpretComplex128( view, 0 ) );
* // => <Float64Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0, -2.0, 30.0, -2.0, 38.0 ]
*/
setReadOnly( Module.prototype, 'ndarray', function zscal( N, aptr, xptr, strideX, offsetX ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_zscal_ndarray( N, aptr, xptr, strideX, offsetX );
	return xptr;
});


// EXPORTS //

module.exports = Module;

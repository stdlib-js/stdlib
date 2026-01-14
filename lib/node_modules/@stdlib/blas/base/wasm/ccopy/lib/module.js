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
* var ccopy = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* ccopy.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Define a pointer (i.e., byte offset) for storing the output vector:
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var x = new Complex64Array( xbuf.buffer );
* ccopy.write( xptr, x );
*
* var ybuf = zeros( N*2, 'float32' );
* var y = new Complex64Array( ybuf.buffer );
* ccopy.write( yptr, y );
*
* // Perform computation:
* var ptr = ccopy.main( N, xptr, 1, yptr, 1 );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* ccopy.read( yptr, view );
*
* console.log( reinterpretComplex64( view, 0 ) );
* // => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
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
* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
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
* var ccopy = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* ccopy.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Define a pointer (i.e., byte offset) for storing the output vector:
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var x = new Complex64Array( xbuf.buffer );
* ccopy.write( xptr, x );
*
* var ybuf = zeros( N*2, 'float32' );
* var y = new Complex64Array( ybuf.buffer );
* ccopy.write( yptr, y );
*
* // Perform computation:
* var ptr = ccopy.main( N, xptr, 1, yptr, 1 );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* ccopy.read( yptr, view );
*
* console.log( reinterpretComplex64( view, 0 ) );
* // => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
*/
setReadOnly( Module.prototype, 'main', function ccopy( N, xptr, strideX, yptr, strideY ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_ccopy( N, xptr, strideX, yptr, strideY );
	return yptr;
});

/**
* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} xptr - input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NonNegativeInteger} yptr - output array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {NonNegativeInteger} output array pointer (i.e., byte offset)
*
* @example
* var Memory = require( '@stdlib/wasm/memory' );
* var oneTo = require( '@stdlib/array/one-to' );
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
* var ccopy = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* ccopy.initializeSync();
*
* // Define a vector data type:
* var dtype = 'complex64';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Define a pointer (i.e., byte offset) for storing the output vector:
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* var xbuf = oneTo( N*2, 'float32' );
* var x = new Complex64Array( xbuf.buffer );
* ccopy.write( xptr, x );
*
* var ybuf = zeros( N*2, 'float32' );
* var y = new Complex64Array( ybuf.buffer );
* ccopy.write( yptr, y );
*
* // Perform computation:
* var ptr = ccopy.ndarray( N, xptr, 1, 0, yptr, 1, 0 );
* // returns <number>
*
* var bool = ( ptr === yptr );
* // returns true
*
* // Read out the results:
* var view = zeros( N, dtype );
* ccopy.read( yptr, view );
*
* console.log( reinterpretComplex64( view, 0 ) );
* // => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ]
*/
setReadOnly( Module.prototype, 'ndarray', function ccopy( N, xptr, strideX, offsetX, yptr, strideY, offsetY ) { // eslint-disable-line stdlib/jsdoc-doctest-decimal-point
	this._instance.exports.c_ccopy_ndarray( N, xptr, strideX, offsetX, yptr, strideY, offsetY ); // eslint-disable-line max-len
	return yptr;
});


// EXPORTS //

module.exports = Module;

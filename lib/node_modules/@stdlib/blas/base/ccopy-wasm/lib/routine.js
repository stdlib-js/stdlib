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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var inherits = require( '@stdlib/utils/inherit' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var readDataView = require( '@stdlib/strided/base/read-dataview' ).ndarray;
var Memory = require( '@stdlib/wasm/memory' );
var arrays2ptrs = require( '@stdlib/wasm/base/arrays2ptrs' );
var strided2object = require( '@stdlib/wasm/base/strided2object' );
var Module = require( './module.js' );


// MAIN //

/**
* Routine constructor.
*
* @private
* @constructor
* @returns {Routine} routine instance
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var ccopy = new Routine();
*
* // Initialize the module:
* ccopy.initializeSync();
*
* // Define strided arrays...
* var x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* ccopy.main( x.length, x, 1, y, 1 );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -1.0
*
* var im = imagf( v );
* // returns -2.0
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var ccopy = new Routine();
*
* // Initialize the module:
* ccopy.initializeSync();
*
* // Define strided arrays...
* var x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -1.0
*
* var im = imagf( v );
* // returns -2.0
*/
function Routine() {
	if ( !( this instanceof Routine ) ) {
		return new Routine();
	}
	Module.call( this, new Memory({
		'initial': 0
	}));
	return this;
}

// Inherit from the parent constructor:
inherits( Routine, Module );

/**
* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex64Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var ccopy = new Routine();
*
* // Initialize the module:
* ccopy.initializeSync();
*
* // Define strided arrays...
* var x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* ccopy.main( x.length, x, 1, y, -1 );
*
* var v = y.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -5.0
*
* var im = imagf( v );
* // returns -6.0
*/
setReadOnly( Routine.prototype, 'main', function ccopy( N, x, strideX, y, strideY ) {
	return this.ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
});

/**
* Copies values from one complex single-precision floating-point vector to another complex single-precision floating-point vector using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Complex64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var ccopy = new Routine();
*
* // Initialize the module:
* ccopy.initializeSync();
*
* // Define strided arrays...
* var x = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* ccopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
*
* var v = x.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -1.0
*
* var im = imagf( v );
* // returns -2.0
*/
setReadOnly( Routine.prototype, 'ndarray', function ccopy( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var ptrs;
	var p0;
	var p1;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX ),
		strided2object( N, y, strideY, offsetY )
	]);
	p0 = ptrs[0];
	p1 = ptrs[1];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset, p1.ptr, p1.stride, p1.offset ); // eslint-disable-line max-len

	// If the output array data had to be copied to module memory, copy the results to the provided output array...
	if ( p1.copy ) {
		readDataView( N, this.view, p1.stride*p1.BYTES_PER_ELEMENT, p1.ptr, y, strideY, offsetY, true ); // eslint-disable-line max-len
	}
	return y;
});


// EXPORTS //

module.exports = Routine;

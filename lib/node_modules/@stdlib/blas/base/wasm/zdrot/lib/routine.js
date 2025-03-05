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
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* // Create a new routine:
* var zdrot = new Routine();
*
* // Initialize the module:
* zdrot.initializeSync();
*
* // Define strided arrays...
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
*
* var v = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~-0.2
*
* var im = imag( v );
* // returns ~-0.4
*
* v = zy.get( 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns ~1.4
*
* im = imag( v );
* // returns ~2.8
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* // Create a new routine:
* var zdrot = new Routine();
*
* // Initialize the module:
* zdrot.initializeSync();
*
* // Define strided arrays...
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
*
* var v = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~-0.2
*
* var im = imag( v );
* // returns ~-0.4
*
* v = zy.get( 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns ~1.4
*
* im = imag( v );
* // returns ~2.8
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
* Applies a plane rotation.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - first input array
* @param {integer} strideX - `zx` stride length
* @param {Complex128Array} zy - second input array
* @param {integer} strideY - `zy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex128Array} input array `zy`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* // Create a new routine:
* var zdrot = new Routine();
*
* // Initialize the module:
* zdrot.initializeSync();
*
* // Define strided arrays...
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
*
* var v = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~-0.2
*
* var im = imag( v );
* // returns ~-0.4
*
* v = zy.get( 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns ~1.4
*
* im = imag( v );
* // returns ~2.8
*/
setReadOnly( Routine.prototype, 'main', function zdrot( N, zx, strideX, zy, strideY, c, s ) {
	return this.ndarray( N, zx, strideX, stride2offset( N, strideX ), zy, strideY, stride2offset( N, strideY ), c, s ); // eslint-disable-line max-len
});

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - first input array
* @param {integer} strideX - `zx` stride length
* @param {NonNegativeInteger} offsetX - starting index for `zx`
* @param {Complex128Array} zy - second input array
* @param {integer} strideY - `zy` stride length
* @param {NonNegativeInteger} offsetY - starting index for `zy`
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex128Array} input array `zy`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* // Create a new routine:
* var zdrot = new Routine();
*
* // Initialize the module:
* zdrot.initializeSync();
*
* // Define strided arrays...
* var zx = new Complex128Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var zy = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
*
* var v = zx.get( 0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns ~-0.2
*
* var im = imag( v );
* // returns ~-0.4
*
* v = zy.get( 0 );
* // returns <Complex128>
*
* re = real( v );
* // returns ~1.4
*
* im = imag( v );
* // returns ~2.8
*/
setReadOnly( Routine.prototype, 'ndarray', function zdrot( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s ) {
	var ptrs;
	var p0;
	var p1;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, zx, strideX, offsetX ),
		strided2object( N, zy, strideY, offsetY )
	]);
	p0 = ptrs[0];
	p1 = ptrs[1];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset, p1.ptr, p1.stride, p1.offset, c, s ); // eslint-disable-line max-len

	// If input array data had to be copied to module memory, copy the results to the provided arrays...
	if ( p0.copy ) {
		readDataView( N, this.view, p0.stride*p0.BYTES_PER_ELEMENT, p0.ptr, zx, strideX, offsetX, true ); // eslint-disable-line max-len
	}
	if ( p1.copy ) {
		readDataView( N, this.view, p1.stride*p1.BYTES_PER_ELEMENT, p1.ptr, zy, strideY, offsetY, true ); // eslint-disable-line max-len
	}
	return zy;
});


// EXPORTS //

module.exports = Routine;

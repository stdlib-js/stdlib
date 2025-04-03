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
* var csrot = new Routine();
*
* // Initialize the module:
* csrot.initializeSync();
*
* // Define strided arrays...
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var csrot = new Routine();
*
* // Initialize the module:
* csrot.initializeSync();
*
* // Define strided arrays...
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
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
* @param {Complex64Array} cx - first input array
* @param {integer} strideX - `cx` stride length
* @param {Complex64Array} cy - second input array
* @param {integer} strideY - `cy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex64Array} input array `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var csrot = new Routine();
*
* // Initialize the module:
* csrot.initializeSync();
*
* // Define strided arrays...
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.main( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*/
setReadOnly( Routine.prototype, 'main', function csrot( N, cx, strideX, cy, strideY, c, s ) {
	return this.ndarray( N, cx, strideX, stride2offset( N, strideX ), cy, strideY, stride2offset( N, strideY ), c, s ); // eslint-disable-line max-len
});

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - first input array
* @param {integer} strideX - `cx` stride length
* @param {NonNegativeInteger} offsetX - starting index for `cx`
* @param {Complex64Array} cy - second input array
* @param {integer} strideY - `cy` stride length
* @param {NonNegativeInteger} offsetY - starting index for `cy`
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex64Array} input array `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* // Create a new routine:
* var csrot = new Routine();
*
* // Initialize the module:
* csrot.initializeSync();
*
* // Define strided arrays...
* var cx = new Complex64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
* var cy = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Perform operation:
* csrot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
*
* var v = cx.get( 0 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns ~-0.2
*
* var im = imagf( v );
* // returns ~-0.4
*
* v = cy.get( 0 );
* // returns <Complex64>
*
* re = realf( v );
* // returns ~1.4
*
* im = imagf( v );
* // returns ~2.8
*/
setReadOnly( Routine.prototype, 'ndarray', function csrot( N, cx, strideX, offsetX, cy, strideY, offsetY, c, s ) {
	var ptrs;
	var p0;
	var p1;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, cx, strideX, offsetX ),
		strided2object( N, cy, strideY, offsetY )
	]);
	p0 = ptrs[0];
	p1 = ptrs[1];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset, p1.ptr, p1.stride, p1.offset, c, s ); // eslint-disable-line max-len

	// If input array data had to be copied to module memory, copy the results to the provided arrays...
	if ( p0.copy ) {
		readDataView( N, this.view, p0.stride*p0.BYTES_PER_ELEMENT, p0.ptr, cx, strideX, offsetX, true ); // eslint-disable-line max-len
	}
	if ( p1.copy ) {
		readDataView( N, this.view, p1.stride*p1.BYTES_PER_ELEMENT, p1.ptr, cy, strideY, offsetY, true ); // eslint-disable-line max-len
	}
	return cy;
});


// EXPORTS //

module.exports = Routine;

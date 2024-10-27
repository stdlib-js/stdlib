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
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var srot = new Routine();
*
* // Initialize the module:
* srot.initializeSync();
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* srot.main( x.length, x, 1, y, 1, 0.0, 1.0 );
* // x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var srot = new Routine();
*
* // Initialize the module:
* srot.initializeSync();
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* srot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.0, 1.0 );
* // x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
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
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Float32Array} second input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var srot = new Routine();
*
* // Initialize the module:
* srot.initializeSync();
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* srot.main( x.length, x, 1, y, 1, 0.0, 1.0 );
* // x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
*/
setReadOnly( Routine.prototype, 'main', function srot( N, x, strideX, y, strideY, c, s ) {
	return this.ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ), c, s ); // eslint-disable-line max-len
});

/**
* Applies a plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Float32Array} second input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var srot = new Routine();
*
* // Initialize the module:
* srot.initializeSync();
*
* // Define strided arrays:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* // Perform operation:
* srot.ndarray( x.length, x, 1, 0, y, 1, 0, 0.0, 1.0 );
* // x => <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]
* // y => <Float32Array>[ -1.0, -2.0, -3.0, -4.0, -5.0 ]
*/
setReadOnly( Routine.prototype, 'ndarray', function srot( N, x, strideX, offsetX, y, strideY, offsetY, c, s ) {
	var ptrs;
	var p0;
	var p1;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX ),
		strided2object( N, y, strideY, offsetY )
	]);
	p0 = ptrs[ 0 ];
	p1 = ptrs[ 1 ];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset, p1.ptr, p1.stride, p1.offset, c, s ); // eslint-disable-line max-len

	// If output array data had to be copied to module memory, copy the results to the provided output arrays...
	if ( p0.copy ) {
		readDataView( N, this.view, p0.stride*p0.BYTES_PER_ELEMENT, p0.ptr, x, strideX, offsetX, true ); // eslint-disable-line max-len
	}
	if ( p1.copy ) {
		readDataView( N, this.view, p1.stride*p1.BYTES_PER_ELEMENT, p1.ptr, y, strideY, offsetY, true ); // eslint-disable-line max-len
	}
	return y;
});


// EXPORTS //

module.exports = Routine;

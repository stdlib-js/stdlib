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
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var drotm = new Routine();
*
* // Initialize the module:
* drotm.initializeSync();
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.main( x.length, x, 1, y, 1, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var drotm = new Routine();
*
* // Initialize the module:
* drotm.initializeSync();
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
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
* Applies a modified Givens plane rotation.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {Float64Array} param - parameters for the modified Givens transformation
* @returns {Float64Array} second input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var drotm = new Routine();
*
* // Initialize the module:
* drotm.initializeSync();
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.main( x.length, x, 1, y, 1, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
setReadOnly( Routine.prototype, 'main', function drotm( N, x, strideX, y, strideY, param ) {
	return this.ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ), param ); // eslint-disable-line max-len
});

/**
* Applies a modified Givens plane rotation using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Float64Array} param - parameters for the modified Givens transformation
* @returns {Float64Array} second input array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* // Create a new routine:
* var drotm = new Routine();
*
* // Initialize the module:
* drotm.initializeSync();
*
* // Define strided arrays:
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );
*
* // Perform operation:
* drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );
* // x => <Float64Array>[ -2.0, -1.0, 0.0, 1.0, 2.0 ]
* // y => <Float64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
setReadOnly( Routine.prototype, 'ndarray', function drotm( N, x, strideX, offsetX, y, strideY, offsetY, param ) {
	var ptrs;
	var p0;
	var p1;
	var p2;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX ),
		strided2object( N, y, strideY, offsetY ),
		strided2object( 5, param, 1, 0 )
	]);
	p0 = ptrs[ 0 ];
	p1 = ptrs[ 1 ];
	p2 = ptrs[ 2 ];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset, p1.ptr, p1.stride, p1.offset, p2.ptr ); // eslint-disable-line max-len

	// If the arrays data had to be copied to module memory, copy the results to the provided corresponding output arrays...
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

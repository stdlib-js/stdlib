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
var reim = require( '@stdlib/complex/float64/reim' );
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
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* // Create a new routine:
* var zscal = new Routine();
*
* // Initialize the module:
* zscal.initializeSync();
*
* // Define a strided array:
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Create a complex number:
* var alpha = new Complex128( 2.0, 2.0 );
*
* // Perform operation:
* zscal.main( x.length, alpha, x, 1 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* // Create a new routine:
* var zscal = new Routine();
*
* // Initialize the module:
* zscal.initializeSync();
*
* // Define a strided array:
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Create a complex number:
* var alpha = new Complex128( 2.0, 2.0 );
*
* // Perform operation:
* zscal.ndarray( x.length, alpha, x, 1, 0 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
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
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} alpha - scalar
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* // Create a new routine:
* var zscal = new Routine();
*
* // Initialize the module:
* zscal.initializeSync();
*
* // Define a strided array:
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Create a complex number:
* var alpha = new Complex128( 2.0, 2.0 );
*
* // Perform operation:
* zscal.main( x.length, alpha, x, 1 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*/
setReadOnly( Routine.prototype, 'main', function zscal( N, alpha, x, strideX ) {
	return this.ndarray( N, alpha, x, strideX, stride2offset( N, strideX ) );
});

/**
* Scales a double-precision complex floating-point vector by a double-precision complex floating-point constant using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} alpha - scalar
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {Complex128Array} input array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* // Create a new routine:
* var zscal = new Routine();
*
* // Initialize the module:
* zscal.initializeSync();
*
* // Define a strided array:
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* // Create a complex number:
* var alpha = new Complex128( 2.0, 2.0 );
*
* // Perform operation:
* zscal.ndarray( x.length, alpha, x, 1, 0 );
* // x => <Complex128Array>[ -2.0, 6.0, -2.0, 14.0, -2.0, 22.0 ]
*/
setReadOnly( Routine.prototype, 'ndarray', function zscal( N, alpha, x, strideX, offsetX ) {
	var ptrs;
	var p0;
	var p1;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX ),
		strided2object( 2, reim( alpha ), 1, 0 )
	]);
	p0 = ptrs[0];
	p1 = ptrs[1];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, p1.ptr, p0.ptr, p0.stride, p0.offset ); // eslint-disable-line max-len

	// If the input array data had to be copied to module memory, copy the results to the provided input array...
	if ( p0.copy ) {
		readDataView( N, this.view, p0.stride*p0.BYTES_PER_ELEMENT, p0.ptr, x, strideX, offsetX, true ); // eslint-disable-line max-len
	}
	return x;
});


// EXPORTS //

module.exports = Routine;

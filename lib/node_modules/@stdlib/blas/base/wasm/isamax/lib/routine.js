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
* var isamax = new Routine();
*
* // Initialize the module:
* isamax.initializeSync();
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, -5.0 ] );
*
* // Perform operation:
* var idx = isamax.main( x.length, x, 1 );
* // returns 4
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var isamax = new Routine();
*
* // Initialize the module:
* isamax.initializeSync();
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, -5.0 ] );
*
* // Perform operation:
* var idx = isamax.ndarray( x.length, x, 1, 0 );
* // returns 4
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
* Finds the index of the first element having the maximum absolute value.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @returns {integer} index value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var isamax = new Routine();
*
* // Initialize the module:
* isamax.initializeSync();
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, -5.0 ] );
*
* // Perform operation:
* var idx = isamax.main( x.length, x, 1 );
* // returns 4
*/
setReadOnly( Routine.prototype, 'main', function isamax( N, x, strideX ) {
	return this.ndarray( N, x, strideX, stride2offset( N, strideX ) );
});

/**
* Finds the index of the first element having the maximum absolute value using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {integer} index value
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* // Create a new routine:
* var isamax = new Routine();
*
* // Initialize the module:
* isamax.initializeSync();
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, -3.0, 4.0, -5.0 ] );
*
* // Perform operation:
* var idx = isamax.ndarray( x.length, x, 1, 0 );
* // returns 4
*/
setReadOnly( Routine.prototype, 'ndarray', function isamax( N, x, strideX, offsetX ) {
	var ptrs;
	var p0;

	// Convert the input array to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX )
	]);
	p0 = ptrs[ 0 ];

	// Perform computation by calling the corresponding parent method:
	return Module.prototype.ndarray.call( this, N, p0.ptr, p0.stride, p0.offset ); // eslint-disable-line max-len
});


// EXPORTS //

module.exports = Routine;

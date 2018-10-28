/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );


// MAIN //

/**
* Returns a Matrix instance.
*
* @private
* @constructor
* @param {NumberArray} shape - matrix dimensions/shape
* @param {string} [dtype="float64"] - matrix data type
* @returns {Matrix} Matrix instance
*/
function matrix() {
	var dtype;
	var ndims;
	var shape;
	var data;
	var len;
	var mat;
	var i;

	if ( arguments.length === 1 ) {
		shape = arguments[ 0 ];
	}
	else if ( arguments.length === 2 ) {
		shape = arguments[ 0 ];
		dtype = arguments[ 1 ];
	}
	ndims = shape.length;
	len = 1;
	for ( i = 0; i < ndims; i++ ) {
		len *= shape[ i ];
	}
	// Initialize a zero-filled typed array...
	if ( dtype === 'int32' ) {
		data = new Int32Array( len );
	}
	else {
		data = new Float64Array( len );
	}

	// Return a new Matrix instance:
	mat = {};
	mat.dtype = dtype;
	mat.shape = shape;
	mat.strides = [ shape[1], 1 ];
	mat.offset = 0;
	mat.ndims = shape.length;
	mat.length = data.length;
	mat.nbytes = data.byteLength;
	mat.data = data;

	setReadOnly( mat, 'get', get );
	setReadOnly( mat, 'set', set );
	return mat;

	/**
	* Returns a matrix element based on the provided row and column indices.
	*
	* @private
	* @param {integer} i - row index
	* @param {integer} j - column index
	* @returns {(number|undefined)} matrix element
	*/
	function get( i, j ) {
		/* eslint-disable no-invalid-this */
		var idx = this.offset + ( i*this.strides[0] ) + ( j*this.strides[1] );
		return this.data[ idx ];
	}

	/**
	* Sets a matrix element based on the provided row and column indices.
	*
	* @private
	* @param {integer} i - row index
	* @param {integer} j - column index
	* @param {number} v - value to set
	* @returns {Matrix} Matrix instance
	*/
	function set( i, j, v ) {
		/* eslint-disable no-invalid-this */
		i = this.offset + ( i*this.strides[0] ) + ( j*this.strides[1] );
		if ( i >= 0 ) {
			this.data[ i ] = v;
		}
		return this;
	}
}


// EXPORTS //

module.exports = matrix;

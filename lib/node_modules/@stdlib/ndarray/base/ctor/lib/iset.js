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

// MAIN //

/**
* Sets an array element located a specified linear view index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the first, and only, argument should be the value to set.
*
* @private
* @param {integer} [idx] - linear view index
* @param {*} v - value to set
* @returns {ndarray} ndarray instance
*/
function iset( idx, v ) {
	/* eslint-disable no-invalid-this */
	var strides;
	var shape;
	var ndims;
	var ind;
	var s;
	var i;

	ndims = this._ndims;
	if ( ndims === 0 ) {
		if ( this._accessors ) {
			this._buffer.set( idx, this._offset );
		} else {
			this._buffer[ this._offset ] = idx;
		}
		return this;
	}
	if ( this._flags.ROW_MAJOR_CONTIGUOUS || this._flags.COLUMN_MAJOR_CONTIGUOUS ) { // eslint-disable-line max-len
		// Trivial case where we have all positive strides...
		if ( this._iterationOrder === 1 ) {
			if ( this._accessors ) {
				this._buffer.set( v, this._offset+idx );
			} else {
				this._buffer[ this._offset+idx ] = v;
			}
			return this;
		}
		// Trivial case where we have all negative strides...
		if ( this._iterationOrder === -1 ) {
			if ( this._accessors ) {
				this._buffer.set( v, this._offset-idx );
			} else {
				this._buffer[ this._offset-idx ] = v;
			}
			return this;
		}
	}
	// The approach which follows is to resolve a view index to its subscripts and then plug the subscripts into the standard formula for computing the linear index in the underlying data buffer...
	shape = this._shape;
	strides = this._strides;
	ind = this._offset;
	if ( this._order === 'column-major' ) {
		for ( i = 0; i < ndims; i++ ) {
			s = idx % shape[ i ];
			idx -= s;
			idx /= shape[ i ];
			ind += s * strides[ i ];
		}
		if ( this._accessors ) {
			this._buffer.set( v, ind );
		} else {
			this._buffer[ ind ] = v;
		}
		return this;
	}
	// Case: row-major
	for ( i = ndims-1; i >= 0; i-- ) {
		s = idx % shape[ i ];
		idx -= s;
		idx /= shape[ i ];
		ind += s * strides[ i ];
	}
	if ( this._accessors ) {
		this._buffer.set( v, ind );
	} else {
		this._buffer[ ind ] = v;
	}
	return this;
}


// EXPORTS //

module.exports = iset;

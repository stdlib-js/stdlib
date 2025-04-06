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

var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// MAIN //

/**
* Serializes an ndarray as a JSON object.
*
* ## Notes
*
* -   The method does **not** serialize data outside of the buffer region defined by the array configuration.
*
* @private
* @returns {Object} JSON representation
*/
function toJSON() {
	/* eslint-disable no-invalid-this */
	var out;
	var len;
	var v;
	var i;

	len = this._length;

	// Build an object containing all ndarray properties needed to revive a serialized ndarray...
	out = {};
	out.type = 'ndarray';
	out.dtype = this.dtype;
	out.flags = {
		'READONLY': this._flags.READONLY
	};
	out.order = this._order;
	out.shape = this._shape.slice();
	out.strides = this._strides.slice();

	// Flip the signs of negative strides:
	for ( i = 0; i < out.strides.length; i++ ) {
		if ( out.strides[ i ] < 0 ) {
			out.strides[ i ] *= -1;
		}
	}
	// Cast data to generic array...
	out.data = [];
	if ( out.dtype === 'complex64' || out.dtype === 'complex128' ) {
		for ( i = 0; i < len; i++ ) {
			v = this.iget( i );
			out.data.push( real( v ), imag( v ) );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			out.data.push( this.iget( i ) );
		}
	}
	return out;

	/* eslint-enable no-invalid-this */
}


// EXPORTS //

module.exports = toJSON;

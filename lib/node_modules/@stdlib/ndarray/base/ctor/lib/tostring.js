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

var replace = require( '@stdlib/string/replace' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );


// VARIABLES //

var CTORS = {
	'int8': 'new Int8Array( [ {{data}} ] )',
	'uint8': 'new Uint8Array( [ {{data}} ] )',
	'uint8c': 'new Uint8ClampedArray( [ {{data}} ] )',
	'int16': 'new Int16Array( [ {{data}} ] )',
	'uint16': 'new Uint16Array( [ {{data}} ] )',
	'int32': 'new Int32Array( [ {{data}} ] )',
	'uint32': 'new Uint32Array( [ {{data}} ] )',
	'float32': 'new Float32Array( [ {{data}} ] )',
	'float64': 'new Float64Array( [ {{data}} ] )',
	'generic': '[ {{data}} ]',
	'binary': 'new Buffer( [ {{data}} ] )',
	'complex64': 'new Complex64Array( [ {{data}} ] )',
	'complex128': 'new Complex128Array( [ {{data}} ] )',
	'bool': 'new BooleanArray( [ {{data}} ] )'
};


// MAIN //

/**
* Serializes an ndarray as a string.
*
* ## Notes
*
* -   The method does **not** serialize data outside of the buffer region defined by the array configuration.
*
* @private
* @returns {string} string representation
*/
function toString() { // eslint-disable-line stdlib/no-redeclare
	/* eslint-disable no-invalid-this */
	var buffer;
	var ndims;
	var ctor;
	var str;
	var dt;
	var v;
	var i;

	ndims = this._shape.length;
	dt = this._dtype;

	// Function to invoke to create an ndarray:
	str = 'ndarray( \''+dt+'\', ';

	// Data buffer parameter...
	buffer = '';
	if ( this._length <= 100 ) {
		if ( dt === 'complex64' || dt === 'complex128' ) {
			for ( i = 0; i < this._length; i++ ) {
				v = this.iget( i );
				buffer += real( v ) + ', ' + imag( v );
				if ( i < this._length-1 ) {
					buffer += ', ';
				}
			}
		} else {
			for ( i = 0; i < this._length; i++ ) {
				buffer += this.iget( i );
				if ( i < this._length-1 ) {
					buffer += ', ';
				}
			}
		}
	} else {
		// First three values...
		if ( dt === 'complex64' || dt === 'complex128' ) {
			for ( i = 0; i < 3; i++ ) {
				v = this.iget( i );
				buffer += real( v ) + ', ' + imag( v );
				if ( i < 2 ) {
					buffer += ', ';
				}
			}
		} else {
			for ( i = 0; i < 3; i++ ) {
				buffer += this.iget( i );
				if ( i < 2 ) {
					buffer += ', ';
				}
			}
		}
		buffer += ', ..., ';

		// Last three values...
		if ( dt === 'complex64' || dt === 'complex128' ) {
			for ( i = 2; i >= 0; i-- ) {
				v = this.iget( this._length-1-i );
				buffer += real( v ) + ', ' + imag( v );
				if ( i > 0 ) {
					buffer += ', ';
				}
			}
		} else {
			for ( i = 2; i >= 0; i-- ) {
				buffer += this.iget( this._length-1-i );
				if ( i > 0 ) {
					buffer += ', ';
				}
			}
		}
	}
	ctor = CTORS[ this.dtype ];
	str += replace( ctor, '{{data}}', buffer );
	str += ', ';

	// Array shape...
	if ( ndims === 0 ) {
		str += '[]';
	} else {
		str += '[ ' + this._shape.join( ', ' ) + ' ]';
	}
	str += ', ';

	// Stride array...
	str += '[ ';
	if ( ndims === 0 ) {
		str += '0';
	} else {
		for ( i = 0; i < ndims; i++ ) {
			if ( this._strides[ i ] < 0 ) {
				str += -this._strides[ i ];
			} else {
				str += this._strides[ i ];
			}
			if ( i < ndims-1 ) {
				str += ', ';
			}
		}
	}
	str += ' ]';
	str += ', ';

	// Buffer offset:
	str += '0';
	str += ', ';

	// Order:
	str += '\'' + this._order + '\'';

	// Close the function call:
	str += ' )';
	return str;

	/* eslint-enable no-invalid-this */
}


// EXPORTS //

module.exports = toString;

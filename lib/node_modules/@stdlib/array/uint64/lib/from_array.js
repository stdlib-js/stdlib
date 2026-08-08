/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isUint64 = require( '@stdlib/assert/is-uint64' );
var toWords = require( '@stdlib/number/uint64/base/to-words' ).assign;
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var format = require( '@stdlib/string/format' );
var indices = require( './indices.js' );


// MAIN //

/**
* Returns a strided array of high and low words.
*
* @private
* @param {Uint32Array} buf - output array
* @param {Array} arr - array containing 64-bit unsigned integers
* @returns {(Uint32Array|TypeError)} output array or an error
*/
function fromArray( buf, arr ) {
	var words;
	var len;
	var v;
	var i;
	var j;

	// Workspace for storing high and low words:
	words = [ 0, 0 ];

	len = arr.length;
	j = 0;
	for ( i = 0; i < len; i++ ) {
		v = arr[ i ];
		if ( !isUint64( v ) ) {
			try {
				v = new Uint64( v );
			} catch ( err ) { // eslint-disable-line no-unused-vars
				return new TypeError( format( 'invalid argument. An array element must be either a 64-bit unsigned integer or a value which can be converted to a 64-bit unsigned integer. Value: `%s`.', v ) );
			}
		}
		toWords( v, words, 1, 0 );
		buf[ j+indices.HIGH ] = words[ 0 ];
		buf[ j+indices.LOW ] = words[ 1 ];
		j += 2; // stride
	}
	return buf;
}


// EXPORTS //

module.exports = fromArray;

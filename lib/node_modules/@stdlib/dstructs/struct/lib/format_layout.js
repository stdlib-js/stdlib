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

'use strict';

// MODULES //

var replace = require( '@stdlib/string/base/replace' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Returns a new regular expression for matching byte parameters.
*
* @private
* @returns {RegExp} regular expression
*/
function reByteOffset() {
	return /\[(\d{1,}),/g;
}

/**
* Returns a function for replacing byte values in a serialized struct.
*
* @private
* @param {NonNegativeInteger} offset - byte offset
* @returns {Function} replacer function
*/
function replacer( offset ) {
	return wrapped;

	/**
	* Callback invoked for each match.
	*
	* @private
	* @param {string} match - matched substring
	* @param {string} p1 - first matched capture group substring
	* @returns {string} replacement string
	*/
	function wrapped( match, p1 ) {
		return format( '[%u,', offset+parseInt( p1, 10 ) );
	}
}


// MAIN //

/**
* Serializes a struct to a layout format.
*
* ## Notes
*
* -   The output format is a multi-column format having the following layout:
*
*     ```text
*     | ...<dtype(s)>[byte_offset,byte_length] |
*     ```
*
*     For example,
*
*     ```text
*     |<double>[0,8]|<bool>[8,1]|<double>[16,16]|<double,uint32>[32,8]|
*     ```
*
* @private
* @param {Array<Object>} fields - list of normalized fields
* @returns {string} string representation
*/
function layoutFormat( fields ) {
	var out;
	var tmp;
	var re;
	var N;
	var o;
	var i;

	N = fields.length;

	// Create a new regular expression for matching byte offsets:
	re = reByteOffset();

	out = [];
	for ( i = 0; i < N; i++ ) {
		o = fields[ i ];

		// If we are currently processing fields in a union, move along to the next non-union field...
		if ( i > 0 && ( o.byteOffset === fields[ i-1 ].byteOffset ) ) {
			continue;
		}
		// If the current type is a struct, we need to serialize and then post-process...
		if ( o.isStructType ) {
			out.push( replace( o.type.layout, re, replacer( o.byteOffset ) ) );
			continue;
		}
		// Format the field data:
		out.push( format( '|<%s>[%u,%u]', o.type, o.byteOffset, o.byteLength ) );
	}
	tmp = format( '%s|', out.join( '' ) );

	// If we having a trailing `||` due to a nested struct, remove the final `|`:
	if ( tmp[ tmp.length-2 ] === '|' ) {
		tmp = tmp.substring( 0, tmp.length-1 );
	}
	return tmp;
}


// EXPORTS //

module.exports = layoutFormat;

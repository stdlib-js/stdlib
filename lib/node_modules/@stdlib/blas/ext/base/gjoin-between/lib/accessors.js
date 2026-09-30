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

var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );


// MAIN //

/**
* Returns a string by joining strided array elements using a specified separator for each pair of consecutive elements.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {string} prefix - string to prepend to the output string
* @param {string} suffix - string to append to the output string
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} separators - separators array object
* @param {Collection} separators.data - separators array data
* @param {Array<Function>} separators.accessors - array element accessors
* @param {integer} strideS - stride length for `separators`
* @param {NonNegativeInteger} offsetS - starting index for `separators`
* @returns {string} joined string
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var out = gjoinBetween( x.length, 'op: ', '', arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( sep ) ), 1, 0 );
* // returns 'op: 1 + 2 - 3 != 4'
*/
function gjoinBetween( N, prefix, suffix, x, strideX, offsetX, separators, strideS, offsetS ) { // eslint-disable-line max-len
	var sbuf;
	var xbuf;
	var sget;
	var xget;
	var out;
	var ix;
	var is;
	var v;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	sbuf = separators.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	sget = separators.accessors[ 0 ];

	out = prefix;
	ix = offsetX;
	is = offsetS;
	for ( i = 0; i < N; i++ ) {
		if ( i > 0 ) {
			out += sget( sbuf, is );
			is += strideS;
		}
		v = xget( xbuf, ix );
		if ( !isUndefinedOrNull( v ) ) {
			out += String( v );
		}
		ix += strideX;
	}
	out += suffix;
	return out;
}


// EXPORTS //

module.exports = gjoinBetween;

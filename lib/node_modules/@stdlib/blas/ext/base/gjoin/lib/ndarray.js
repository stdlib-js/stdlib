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

var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );
var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// FUNCTIONS //

/**
* Tests whether an object has a specified method.
*
* @private
* @param {Object} obj - input object
* @param {string} method - method name
* @returns {boolean} boolean indicating whether an object has a specified method
*
* @example
* var bool = hasMethod( [], 'join' );
* // returns true
*
* @example
* var bool = hasMethod( [], 'beep' );
* // returns false
*/
function hasMethod( obj, method ) {
	return ( typeof obj[ method ] === 'function' );
}


// MAIN //

/**
* Returns a string created by joining strided array elements using a specified separator and alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} separator - separator
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = gjoin( x.length, ',', x, 1, 0 );
* // returns '1,2,3,4'
*/
function gjoin( N, separator, x, strideX, offsetX ) {
	var out;
	var ix;
	var o;
	var v;
	var i;

	if ( N <= 0 ) {
		return '';
	}
	// Check for a contiguous strided array with left-to-right iteration...
	if ( strideX === 1 && offsetX === 0 && N === x.length && hasMethod( x, 'join' ) ) {
		return x.join( separator );
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, separator, o, strideX, offsetX );
	}
	ix = offsetX;
	out = '';
	for ( i = 0; i < N; i++ ) {
		if ( i > 0 ) {
			out += separator;
		}
		v = x[ ix ];
		if ( !isUndefinedOrNull( v ) ) {
			out += String( v );
		}
		ix += strideX;
	}
	return out;
}


// EXPORTS //

module.exports = gjoin;

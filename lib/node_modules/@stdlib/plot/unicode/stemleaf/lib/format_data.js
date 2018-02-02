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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var round = require( '@stdlib/math/base/special/round' );
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );


// MAIN //

/**
* Formats data to a standard representation. This is required for non-deterministic accessors.
*
* @private
* @param {(Array|TypedArray)} data - data to standardize
* @param {Function} getValue - accessor function
* @returns {ObjectArray} standardized data
*
* @example
* var data = [{'y':5.0},{'y':3.0},{'y':2.0}];
* function yValue( d ) {
*     return d.y;
* }
* var arr = formatData( data, yValue );
* // returns [ 5.0, 3.0, 2.0 ]
*/
function formatData( data, getValue ) {
	var out;
	var d;
	var i;

	// TODO: add support for `ndarray`-like interfaces

	out = new Array( data.length );
	for ( i = 0; i < data.length; i++ ) {
		d = getValue( data[ i ], i );
		if ( isnan( d ) || isInfinite( d ) ) {
			continue;
		}
		out[ i ] = round( d );
	}

	return out;
}


// EXPORTS //

module.exports = formatData;

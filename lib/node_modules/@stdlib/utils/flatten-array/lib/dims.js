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

var isArray = require( '@stdlib/assert/is-array' );


// MAIN //

/**
* Determines array dimensions.
*
* @private
* @param {Array} arr - input array
* @param {NonNegativeInteger} maxDims - maximum dimensions
* @returns {PositiveIntegerArray} dimensions
*/
function dims( arr, maxDims ) {
	var out;
	var i;
	out = [];
	for ( i = 0; i < maxDims; i++ ) {
		if ( !isArray( arr ) ) {
			break;
		}
		out.push( arr.length );
		arr = arr[ 0 ];
	}
	return out;
}


// EXPORTS //

module.exports = dims;

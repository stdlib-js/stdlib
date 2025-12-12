/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var prop2slice0d = require( './prop2slice.0d.js' );
var prop2slice1d = require( './prop2slice.1d.js' );
var prop2slicend = require( './prop2slice.nd.js' );


// MAIN //

/**
* Returns a function for converting a property string to a slice according to a specified dimensionality.
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @returns {Function} function for converting a property string to a slice
*/
function prop2slice( ndims ) {
	if ( ndims === 0 ) {
		return prop2slice0d;
	}
	if ( ndims === 1 ) {
		return prop2slice1d;
	}
	return prop2slicend;
}


// EXPORTS //

module.exports = prop2slice;

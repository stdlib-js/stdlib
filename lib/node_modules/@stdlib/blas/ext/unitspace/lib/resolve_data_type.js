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

var getDType = require( '@stdlib/ndarray/base/dtype' );
var resolveStr = require( '@stdlib/ndarray/base/dtype-resolve-str' );
var complexDataType = require( '@stdlib/complex/dtype' );
var ENUMS = require( './type_enums.js' );


// MAIN //

/**
* Resolves argument data types.
*
* @private
* @param {*} start - starting value
* @param {NonNegativeInteger} type - argument type
* @returns {Array} data types
*/
function resolveDataType( start, type ) {
	var out;
	var dt;

	// Initialize a data type array: [ start, out ]
	out = [ '', '' ];

	if ( type === ENUMS.NUMBER ) {
		// Why 'float64'? Because we don't have any way of knowing whether a number primitive is intended to be 'float32' or 'float64', and, in order to preserve precision, we simply assume 'float64'...
		dt = 'float64';
	} else if ( type === ENUMS.NDARRAY ) {
		dt = resolveStr( getDType( start ) );
	} else { // type === ENUMS.COMPLEX
		dt = complexDataType( start );
		if ( dt === null ) {
			// Why 'complex128'? Because we don't have any way of knowing whether a complex-like object is intended to be 'complex64' or 'complex128', and, in order to preserve precision, we simply assume 'complex128'...
			dt = 'complex128';
		}
	}
	out[ 0 ] = dt;

	// By default, the output array data type matches the data type of `start`:
	out[ 1 ] = dt;

	return out;
}


// EXPORTS //

module.exports = resolveDataType;

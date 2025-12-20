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

var promoteDataTypes = require( '@stdlib/ndarray/base/promote-dtypes' );
var getDType = require( '@stdlib/ndarray/base/dtype' );
var complexDataType = require( '@stdlib/complex/dtype' );
var ENUMS = require( './type_enums.js' );


// MAIN //

/**
* Resolves argument data types.
*
* @private
* @param {Array} args - list of arguments
* @param {Array} types - argument types
* @returns {Array} data types
*/
function resolveDataTypes( args, types ) {
	var out;
	var dt;
	var N;
	var t;
	var i;

	N = args.length;

	// Initialize a data type array: [ start, stop, endpoint, out ]
	out = [ '', '', 'bool', '' ];

	// Resolve the data types for `start` and `stop`...
	for ( i = 0; i < N; i++ ) {
		t = types[ i ];
		if ( t === ENUMS.NUMBER ) {
			// Why 'float64'? Because we don't have any way of knowing whether a number primitive is intended to be 'float32' or 'float64', and, in order to preserve precision, we simply assume 'float64'. Note that this may lead to undesired type promotion when resolving an output data type...
			dt = 'float64';
		} else if ( t === ENUMS.NDARRAY ) {
			dt = getDType( args[ i ] );
		} else { // t === ENUMS.COMPLEX
			dt = complexDataType( args[ i ] );
			if ( dt === null ) {
				// Why 'complex128'? Because we don't have any way of knowing whether a complex-like object is intended to be 'complex64' or 'complex128', and, in order to preserve precision, we simply assume 'complex128'. Note that this may lead to undesired type promotion when resolving an output data type...
				dt = 'complex128';
			}
		}
		out[ i ] = dt;
	}
	// To resolve the output array data type, apply type promotion to the `start` and `stop` data types:
	out[ 3 ] = promoteDataTypes( out.slice( 0, 2 ) );

	return out;
}


// EXPORTS //

module.exports = resolveDataTypes;

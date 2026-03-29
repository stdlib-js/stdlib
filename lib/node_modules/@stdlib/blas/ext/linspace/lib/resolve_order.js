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

var getOrder = require( '@stdlib/ndarray/base/order' );
var defaults = require( '@stdlib/ndarray/defaults' );


// VARIABLES //

var ORDER = defaults.get( 'order' );
var ENUMS = require( './type_enums.js' );


// MAIN //

/**
* Resolves an output array order based on a provided list of input arguments.
*
* @private
* @param {Array} args - list of arguments
* @param {Array} types - argument types
* @returns {string} order
*/
function resolveOrder( args, types ) {
	var ord;
	var N;
	var i;

	N = args.length;

	// Find the first array...
	for ( i = 0; i < N; i++ ) {
		if ( types[ i ] === ENUMS.NDARRAY ) {
			break;
		}
	}
	// If no argument was an array, return the default memory layout...
	if ( i === N ) {
		return ORDER;
	}
	// Resolve the order of the first array argument:
	ord = getOrder( args[ i ] );

	// Determine whether we have a consensus order among provided input array arguments...
	for ( i += 1; i < N; i++ ) {
		if ( types[ i ] === ENUMS.NDARRAY && ord !== getOrder( args[ i ] ) ) {
			// If we don't have a consensus order, fallback to the default memory layout:
			return ORDER;
		}
	}
	return ord;
}


// EXPORTS //

module.exports = resolveOrder;

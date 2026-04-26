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

var getOrder = require( '@stdlib/ndarray/base/order' );
var defaults = require( '@stdlib/ndarray/defaults' );
var ENUMS = require( './type_enums.js' );


// VARIABLES //

var ORDER = defaults.get( 'order' );


// MAIN //

/**
* Resolves an output array order based on a provided `start` argument.
*
* @private
* @param {*} start - starting value
* @param {NonNegativeInteger} type - argument type
* @returns {string} order
*/
function resolveOrder( start, type ) {
	if ( type === ENUMS.NDARRAY ) {
		return getOrder( start );
	}
	return ORDER;
}


// EXPORTS //

module.exports = resolveOrder;

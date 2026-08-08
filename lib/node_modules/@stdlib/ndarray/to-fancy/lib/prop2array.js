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

var trim = require( '@stdlib/string/base/trim' );
var format = require( '@stdlib/string/format' );


// FUNCTIONS //

/**
* Extracts an ndarray index identifier from an ndarray index indexing expression.
*
* @private
* @param {string} str - input string
* @returns {string} identifier
*
* @example
* var str = 'ndindex<0>';
*
* var id = getIdentifier( str );
* // returns '0'
*/
function getIdentifier( str ) {
	return str.substring( 8, str.length-1 ); // ndindex<XX> => XX
}


// MAIN //

/**
* Converts an indexing expression to an ndarray index.
*
* @private
* @param {string} property - property name
* @param {Object} cache - cache for resolving ndarray index objects
* @throws {Error} invalid ndarray index
* @returns {(Object|null)} index object (or null)
*/
function prop2array( property, cache ) {
	var o = cache.get( getIdentifier( trim( property ) ) );
	if ( o === null ) {
		throw new Error( format( 'invalid operation. Unable to resolve ndarray index. Value: `%s`.', property ) );
	}
	return o;
}


// EXPORTS //

module.exports = prop2array;

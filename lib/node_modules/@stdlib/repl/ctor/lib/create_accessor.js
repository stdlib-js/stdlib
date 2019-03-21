/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var alias2pkg = require( '@stdlib/namespace/alias2pkg' );


// MAIN //

/**
* Returns an accessor for loading an underlying implementation upon first access.
*
* @private
* @param {Array} out - cache for storing resolved module exports
* @param {Function} require - module loader
* @param {string} alias - alias
* @returns {Function} get accessor
*/
function createAccessor( out, require, alias ) {
	return get;

	/**
	* Returns an underlying implementation.
	*
	* @private
	* @returns {*} package export
	*/
	function get() {
		var v = require( alias2pkg( alias ) ); // eslint-disable-line stdlib/no-dynamic-require
		out.push( alias, v );
		return v;
	}
}


// EXPORTS //

module.exports = createAccessor;

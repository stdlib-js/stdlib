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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var Boolean = require( '@stdlib/boolean/ctor' );
var PRIVATE_BUFFER = require( './private_buffer.js' );


// MAIN //

/**
* Returns a function for resolving field data.
*
* @private
* @param {Object} obj - field object
* @param {string} method - data view method name
* @returns {Function} function for resolving field data
*/
function getBoolean( obj, method ) {
	return getter;

	/**
	* Reads a boolean value from an underlying byte buffer.
	*
	* @private
	* @returns {boolean} result
	*/
	function getter() {
		return Boolean( this[ PRIVATE_BUFFER ][ method ]( obj.byteOffset, IS_LITTLE_ENDIAN ) ); // eslint-disable-line max-len
	}
}


// EXPORTS //

module.exports = getBoolean;

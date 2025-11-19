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

var typedarray = require( '@stdlib/array/typed' );
var PRIVATE_BUFFER = require( './private_buffer.js' );


// MAIN //

/**
* Returns a function for resolving field data.
*
* @private
* @param {Object} obj - field object
* @returns {Function} function for resolving field data
*/
function getTypedArray( obj ) {
	return getter;

	/**
	* Returns a typed array view of an underlying byte buffer.
	*
	* @private
	* @returns {TypedArray} result
	*/
	function getter() {
		var view = this[ PRIVATE_BUFFER ];
		return typedarray( view.buffer, view.byteOffset+obj.byteOffset, obj.length, obj.type ); // eslint-disable-line max-len
	}
}


// EXPORTS //

module.exports = getTypedArray;

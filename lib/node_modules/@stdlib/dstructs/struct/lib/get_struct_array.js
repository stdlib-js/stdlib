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

var PRIVATE_BUFFER = require( './private_buffer.js' );


// MAIN //

/**
* Returns a function for resolving field data.
*
* @private
* @param {Object} obj - field object
* @returns {Function} function for resolving field data
*/
function getStructArray( obj ) {
	return getter;

	/**
	* Returns a list of `struct` views of an underlying byte buffer.
	*
	* @private
	* @returns {Array<Object>} result
	*/
	function getter() {
		var offset;
		var view;
		var out;
		var i;

		view = this[ PRIVATE_BUFFER ];
		offset = view.byteOffset + obj.byteOffset;
		out = [];
		for ( i = 0; i < obj.length; i++ ) {
			out.push( new obj.type.constructor( view.buffer, offset, obj.byteLength ) ); // eslint-disable-line max-len
			offset += obj.byteOffset;
		}
		return out;
	}
}


// EXPORTS //

module.exports = getStructArray;

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

/* eslint-disable no-invalid-this, max-len */

'use strict';

// MODULES //

var IS_LITTLE_ENDIAN = require( '@stdlib/assert/is-little-endian' );
var complex = require( '@stdlib/complex/cmplx' );
var PRIVATE_BUFFER = require( './private_buffer.js' );


// VARIABLES //

var CMPLX_TO_REAL = {
	'complex128': 'float64',
	'complex64': 'float32',
	'complex32': 'float16'
};


// MAIN //

/**
* Returns a function for resolving field data.
*
* @private
* @param {Object} obj - field object
* @param {string} method - data view method name
* @returns {Function} function for resolving field data
*/
function getComplex( obj, method ) {
	return getter;

	/**
	* Reads a complex number from an underlying byte buffer.
	*
	* @private
	* @returns {Complex} result
	*/
	function getter() {
		var re = this[ PRIVATE_BUFFER ][ method ]( obj.byteOffset, IS_LITTLE_ENDIAN );
		var im = this[ PRIVATE_BUFFER ][ method ]( obj.byteOffset+(obj.byteLength/2), IS_LITTLE_ENDIAN );
		return complex( re, im, CMPLX_TO_REAL[ obj.type ] );
	}
}


// EXPORTS //

module.exports = getComplex;

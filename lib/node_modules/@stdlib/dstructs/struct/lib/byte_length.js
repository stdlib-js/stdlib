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

var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );


// MAIN //

/**
* Returns the number of bytes required to store a field value.
*
* @private
* @param {Object} obj - input field object
* @returns {PositiveInteger} number of bytes
*/
function byteLength( obj ) {
	var nb;
	if ( obj.isStructType ) {
		nb = obj.type.constructor.byteLength;
	} else {
		nb = bytesPerElement( obj.type );
	}
	if ( obj.length ) {
		nb *= obj.length;
	}
	return nb;
}


// EXPORTS //

module.exports = byteLength;

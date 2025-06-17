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

var UINT8_MAX = require( '@stdlib/constants/uint8/max' );
var UINT16_MAX = require( '@stdlib/constants/uint16/max' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );


// MAIN //

/**
* Returns the minimum ndarray data type for storing a provided unsigned integer value.
*
* @param {uinteger} value - scalar value
* @returns {string} ndarray data type
*
* @example
* var dt = minUnsignedIntegerDataType( 9999 );
* // returns 'uint16'
*
* @example
* var dt = minUnsignedIntegerDataType( 3 );
* // returns 'uint8'
*/
function minUnsignedIntegerDataType( value ) { // eslint-disable-line id-length
	if ( value <= UINT8_MAX ) {
		return 'uint8';
	}
	if ( value <= UINT16_MAX ) {
		return 'uint16';
	}
	if ( value <= UINT32_MAX ) {
		return 'uint32';
	}
	return 'float64';
}


// EXPORTS //

module.exports = minUnsignedIntegerDataType;

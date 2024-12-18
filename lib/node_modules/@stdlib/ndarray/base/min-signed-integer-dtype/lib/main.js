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

var INT8_MIN = require( '@stdlib/constants/int8/min' );
var INT16_MIN = require( '@stdlib/constants/int16/min' );
var INT32_MIN = require( '@stdlib/constants/int32/min' );
var INT8_MAX = require( '@stdlib/constants/int8/max' );
var INT16_MAX = require( '@stdlib/constants/int16/max' );
var INT32_MAX = require( '@stdlib/constants/int32/max' );


// MAIN //

/**
* Returns the minimum ndarray data type for storing a provided signed integer value.
*
* @param {integer} value - scalar value
* @returns {string} ndarray data type
*
* @example
* var dt = minSignedIntegerDataType( 9999 );
* // returns 'int16'
*
* @example
* var dt = minSignedIntegerDataType( 3 );
* // returns 'int8'
*/
function minSignedIntegerDataType( value ) {
	if ( value < 0 ) {
		if ( value >= INT8_MIN ) {
			return 'int8';
		}
		if ( value >= INT16_MIN ) {
			return 'int16';
		}
		if ( value >= INT32_MIN ) {
			return 'int32';
		}
		return 'float64';
	}
	if ( value <= INT8_MAX ) {
		return 'int8';
	}
	if ( value <= INT16_MAX ) {
		return 'int16';
	}
	if ( value <= INT32_MAX ) {
		return 'int32';
	}
	return 'float64';
}


// EXPORTS //

module.exports = minSignedIntegerDataType;

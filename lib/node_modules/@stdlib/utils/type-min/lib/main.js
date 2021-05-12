/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/* eslint-disable stdlib/jsdoc-doctest-decimal-point */

'use strict';

// MODULES //

var INT8 = require( '@stdlib/constants/int8/min' );
var INT16 = require( '@stdlib/constants/int16/min' );
var INT32 = require( '@stdlib/constants/int32/min' );
var FLOAT16 = require( '@stdlib/constants/float16/ninf' );
var FLOAT32 = require( '@stdlib/constants/float32/ninf' );
var FLOAT64 = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns the minimum value of a specified numeric type.
*
* @param {string} dtype - numeric type
* @throws {TypeError} must provide a recognized numeric type
* @returns {number} minimum value
*
* @example
* var m = typemin( 'int8' );
* // returns -128
*
* @example
* var m = typemin( 'uint8' );
* // returns 0
*
* @example
* var m = typemin( 'int16' );
* // returns -32768
*/
function typemin( dtype ) {
	switch ( dtype ) {
	case 'float64':
		return FLOAT64;
	case 'int32':
		return INT32;
	case 'float32':
		return FLOAT32;
	case 'int8':
		return INT8;
	case 'int16':
		return INT16;
	case 'float16':
		return FLOAT16;
	case 'uint32':
		// Fall-through..
	case 'uint16': // eslint-disable-line no-fallthrough
		// Fall-through..
	case 'uint8': // eslint-disable-line no-fallthrough
		// Fall-through...
	case 'uint8c': // eslint-disable-line no-fallthrough
		return 0;
	default:
		throw new TypeError( 'invalid argument. Must provide a recognized type. Value: `'+dtype+'`.' );
	}
}


// EXPORTS //

module.exports = typemin;

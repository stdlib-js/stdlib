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

'use strict';

// MODULES //

var FLOAT16 = require( '@stdlib/constants/float16/max' );
var FLOAT32 = require( '@stdlib/constants/float32/max' );
var FLOAT64 = require( '@stdlib/constants/float64/max' );


// MAIN //

/**
* Returns the maximum finite value capable of being represented by a numeric real type.
*
* @param {string} dtype - numeric type
* @throws {TypeError} must provide a recognized numeric type
* @returns {number} maximum finite value
*
* @example
* var m = realmax( 'float64' );
* // returns 1.7976931348623157e+308
*
* @example
* var m = realmax( 'float16' );
* // returns 65504.0
*
* @example
* var m = realmax( 'float32' );
* // returns 3.4028234663852886e+38
*/
function realmax( dtype ) {
	switch ( dtype ) {
	case 'float64':
		return FLOAT64;
	case 'float32':
		return FLOAT32;
	case 'float16':
		return FLOAT16;
	default:
		throw new TypeError( 'invalid argument. Must provide a recognized type. Value: `'+dtype+'`.' );
	}
}


// EXPORTS //

module.exports = realmax;

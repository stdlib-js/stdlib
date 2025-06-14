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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the minimum and maximum absolute values.
*
* @private
* @param {number} x - first number
* @param {number} y - second number
* @returns {Float64Array} minimum and maximum absolute values
*
* @example
* var v = minmaxabs( 3.14, 4.2 );
* // returns <Float64Array>[ 3.14, 4.2 ]
*
* @example
* var v = minmaxabs( 3.14, NaN );
* // returns <Float64Array>[ NaN, NaN ]
*
* @example
* var v = minmaxabs( +0.0, -0.0 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*/
function minmaxabs( x, y ) {
	var out = new Float64Array( 2 );
	addon( x, y, out );
	return out;
}


// EXPORTS //

module.exports = minmaxabs;

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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes `x - nπ/2 = r` (single precision).
*
* @private
* @param {number} x - input value
* @param {Float64Array} y - remainder element
* @returns {integer} factor of `π/2`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var y = new Float64Array( [ 0.0 ] );
* var n = rempio2f( 128.0, y );
* // returns 81
*
* var y1 = y[ 0 ];
* // returns ~0.765
*/
function rempio2f( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = rempio2f;

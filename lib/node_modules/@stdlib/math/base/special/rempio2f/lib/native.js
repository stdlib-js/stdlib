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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes `x - nπ/2 = r`.
*
* @private
* @param {number} x - input value
* @param {Float64Array} y - remainder elements
* @returns {integer} factor of `π/2`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var y = new Float64Array( [ 0.0, 0.0 ] );
* var n = rempio2( 128.0, y );
* // returns 81
*
* var y1 = y[ 0 ];
* // returns ~0.765
*
* var y2 = y[ 1 ];
* // returns ~3.618e-17
*/
function rempio2( x, y ) {
	return addon( x, y );
}


// EXPORTS //

module.exports = rempio2;

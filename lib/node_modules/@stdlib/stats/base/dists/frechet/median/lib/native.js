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
* Returns the median for a Fréchet distribution with shape `alpha`, scale `s`, and location `m`.
*
* @private
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {number} median
*
* @example
* var y = median( 5.0, 2.0, 0.0 );
* // returns ~2.152
*
* @example
* var y = median( 5.0, 2.0, -5.0 );
* // returns ~-2.848
*
* @example
* var y = median( 1.0, 1.0, 0.0 );
* // returns ~1.443
*
* @example
* var y = median( NaN, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = median( 1.0, NaN, 0.0 );
* // returns NaN
*
* @example
* var y = median( 1.0, 1.0, NaN );
* // returns NaN
*/
function median( alpha, s, m ) {
	return addon( alpha, s, m );
}


// EXPORTS //

module.exports = median;

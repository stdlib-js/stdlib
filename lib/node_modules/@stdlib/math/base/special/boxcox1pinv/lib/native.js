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
* Computes the inverse of a one-parameter Box-Cox transformation of `1+x`.
*
* @private
* @param {number} y - input value
* @param {number} lambda - power parameter
* @returns {number} inverse of the Box-Cox transformation of `1+x`
*
* @example
* var v = boxcox1pinv( 1.0, 2.5 );
* // returns ~0.6505
*
* @example
* var v = boxcox1pinv( 4.0, 2.5 );
* // returns ~1.6095
*
* @example
* var v = boxcox1pinv( 10.0, 2.5 );
* // returns ~2.6812
*
* @example
* var v = boxcox1pinv( 2.0, 0.0 );
* // returns ~6.3891
*
* @example
* var v = boxcox1pinv( -1.0, 2.5 );
* // returns NaN
*
* @example
* var v = boxcox1pinv( 0.0, -1.0 );
* // returns 0.0
*
* @example
* var v = boxcox1pinv( 1.0, NaN );
* // returns NaN
*
* @example
* var v = boxcox1pinv( NaN, 3.1 );
* // returns NaN
*/
function boxcox1pinv( y, lambda ) {
	return addon( y, lambda );
}


// EXPORTS //

module.exports = boxcox1pinv;

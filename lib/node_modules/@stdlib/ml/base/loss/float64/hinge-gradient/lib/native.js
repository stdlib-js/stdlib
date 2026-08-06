/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Computes the hinge loss gradient with respect to a model parameter.
*
* @private
* @param {number} x - input value
* @param {number} t - margin threshold
* @param {number} y - true target value
* @param {number} p - predicted value
* @returns {number} hinge loss gradient
*
* @example
* var v = hingeGradient( 3.0, 1.0, 1.0, 0.782 );
* // returns -3.0
*
* @example
* var v = hingeGradient( 2.5, 1.0, 1.0, 0.202 );
* // returns -2.5
*
* @example
* var v = hingeGradient( -1.3, 1.0, 1.0, -0.999 );
* // returns 1.3
*
* @example
* var v = hingeGradient( -2.0, 1.0, -1.0, 0.234 );
* // returns -2.0
*
* @example
* var v = hingeGradient( -2.0, 1.0, -1.0, 0.2 );
* // returns -2.0
*
* @example
* var v = hingeGradient( -1.3, 1.0, 1.0, -0.9 );
* // returns 1.3
*/
function hingeGradient( x, t, y, p ) {
	return addon( x, t, y, p );
}


// EXPORTS //

module.exports = hingeGradient;

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

var ibetaPowerTerms = require( './ibeta_power_terms.js' );


// MAIN //

/**
* Computes the partial derivative with respect to x of the incomplete beta function.
*
* @private
* @param {Probability} x - input value (0 < x <= 1)
* @param {PositiveNumber} a - first parameter
* @param {PositiveNumber} b - second parameter (must be greater than 1)
* @returns {number} value of the partial derivative
*/
function ibetaDerivative( x, a, b ) {
	var f1;
	var y;
	if ( x === 1.0 ) {
		return 0.0;
	}
	// Regular cases:
	f1 = ibetaPowerTerms( a, b, x, 1.0 - x, true );
	y = ( 1.0 - x ) * x;
	f1 /= y;
	return f1;
}


// EXPORTS //

module.exports = ibetaDerivative;

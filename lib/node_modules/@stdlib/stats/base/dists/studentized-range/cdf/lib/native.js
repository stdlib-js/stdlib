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
* Evaluates the cumulative distribution function (CDF) of the studentized range distribution.
*
* ## References
*
* -   Ferreira, D. F., Demetrico, C. G. B., Manly, B. F. J., and Machado, A. de A. 2007. "Quantis da distribuição do máximo da amplitude estudentizada." _Rev. Mat. Est._, São Paulo, 25 (1): 117-135. <http://jaguar.fcav.unesp.br/RME/fasciculos/v25/v25_n1/A8_Daniel.pdf>.
*
* @private
* @param {number} q - quantile of the studentized range
* @param {number} r - sample size for range (same for each group)
* @param {number} v - degrees of freedom
* @param {number} [nranges=1] - number of groups whose maximum range is considered
* @returns {number} evaluated CDF
*
* @example
* var y = cdf( 0.5, 3.0, 2.0, 1.0 );
* // returns ~0.0644
*
* @example
* var y = cdf( 12.1, 17.0, 2.0, 1.0 );
* // returns ~0.913
*
* @example
* var y = cdf( 0.5, 3.0, 2.0, 2.0 );
* // returns ~0.01
*/
function cdf( q, r, v, nranges ) {
	if ( nranges === void 0 ) {
		nranges = 1;
	}
	return addon( q, r, v, nranges );
}


// EXPORTS //

module.exports = cdf;

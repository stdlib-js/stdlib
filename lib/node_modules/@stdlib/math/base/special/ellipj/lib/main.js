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

var assign = require( './assign.js' );


// MAIN //

/**
* Simultaneously computes the Jacobi elliptic functions sn, cn, and dn, and am.
*
* ## Notes
*
* -   Values are computed using the arithmetic-geometric from Abramowitz and Stegun 16.4.
* -   When m < 0 or m > 1, `sn`, `cn`, and `dn` are computed in terms of elliptic functions with 0 < m < 1 using the transformations from Abramowitz and Stegun 16.10 and 16.11, respectively. Thus the domain of m is any real number. When m < 0 or m > 1, `am` is not computed and will be returned as NaN.
* -   Values for small m (m < SQRT_EPS) are computed using the approximations of Abramowitz and Stegun 16.13. For each evaluation, the complete elliptic integral of the first kind, K(m), is computed in order to reduce the period and ensure valid output for all u.
* -   Values for m near unity (m > 1 - SQRT_EPS) are computed using the approximations of Abramowitz and Stegun 16.15. For each evaluation, the complete elliptic integral of the first kind, K(m), is computed in order to reduce the period and ensure valid output for all u.
*
* @param {number} u - input value
* @param {number} m - modulus `m`, equivalent to `k²`
* @returns {Array<number>} sn, cn, dn, and Jacobi amplitude am
*
* @example
* var v = ellipj( 0.3, 0.5 );
* // returns [ ~0.293, ~0.956, ~0.978, ~0.298 ]
*
* @example
* v = ellipj( 0.0, 0.0 );
* // returns [ ~0.0, ~1.0, ~1.0, ~0.0 ]
*
* @example
* v = ellipj( Infinity, 1.0 );
* // returns [ ~1.0, ~0.0, ~0.0, ~1.571 ]
*
* @example
* v = ellipj( 0.0, -2.0 );
* // returns [ ~0.0, ~1.0, ~1.0, NaN ]
*
* @example
* v = ellipj( NaN, NaN );
* // returns [ NaN, NaN, NaN, NaN ]
*
*/
function ellipj( u, m ) {
	return assign( u, m, [ 0.0, 0.0, 0.0, 0.0 ], 1, 0 );
}


// EXPORTS //

module.exports = ellipj;

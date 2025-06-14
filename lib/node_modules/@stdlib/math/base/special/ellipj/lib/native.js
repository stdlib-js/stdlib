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
* Simultaneously computes the Jacobi elliptic functions sn, cn, and dn, and am.
*
* @private
* @param {number} x - input value
* @param {number} m - modulus `m`, equivalent to `k²`
* @returns {Float64Array} sn, cn, dn, and Jacobi amplitude am
*
* @example
* var v = ellipj( 0.3, 0.5 );
* // returns <Float64Array>[ ~0.293, ~0.956, ~0.978, ~0.298 ]
*
* @example
* var v = ellipj( 0.0, 0.0 );
* // returns <Float64Array>[ ~0.0, ~1.0, ~1.0, ~0.0 ]
*
* @example
* var v = ellipj( Infinity, 1.0 );
* // returns <Float64Array>[ ~1.0, ~0.0, ~0.0, ~1.571 ]
*
* @example
* var v = ellipj( 0.0, -2.0 );
* // returns <Float64Array>[ ~0.0, ~1.0, ~1.0, NaN ]
*
* @example
* var v = ellipj( NaN, NaN );
* // returns <Float64Array>[ NaN, NaN, NaN, NaN ]
*/
function ellipj( x, m ) {
	var out = new Float64Array( 4 );
	addon( x, m, out );
	return out;
}


// EXPORTS //

module.exports = ellipj;

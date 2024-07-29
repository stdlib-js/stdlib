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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the Fresnel integrals S(x) and C(x).
*
* @private
* @param {number} x - input value
* @returns {Float64Array} S(x) and C(x)
*
* @example
* var v = fresnel( 0.0 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var v = fresnel( 1.0 );
* // returns <Float64Array>[ ~0.438, ~0.780 ]
*
* @example
* var v = fresnel( Infinity );
* // returns <Float64Array>[ ~0.5, ~0.5 ]
*
* @example
* var v = fresnel( -Infinity );
* // returns <Float64Array>[ ~-0.5, ~-0.5 ]
*
* @example
* var v = fresnel( NaN );
* // returns <Float64Array>[ NaN, NaN ]
*/
function fresnel( x ) {
	var out = new Float64Array( 2 );
	addon( x, out );
	return out;
}


// EXPORTS //

module.exports = fresnel;

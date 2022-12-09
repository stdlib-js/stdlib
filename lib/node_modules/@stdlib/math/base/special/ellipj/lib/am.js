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


// VARIABLES //

var tmp = [ 0.0, 0.0, 0.0, 0.0 ];


// MAIN //

/**
* Compute the Jacobi modulus, am(u, m), of number u with modulus m.
*
* @param {number} u - input value
* @param {number} m - modulus `m`, equivalent to `k²`
* @returns {number} Jacobi amplitude, `am`
*
* @example
* var v = am( 0.3, 0.5 );
* // returns ~0.298
*
* @example
* v = am( 0.0, 0.0 );
* // returns ~0.0
*
* @example
* v = am( Infinity, 1.0 );
* // returns ~1.571
*
* @example
* v = am( 0.0, -2.0 );
* // returns NaN
*
* @example
* v = am( NaN, NaN );
* // returns NaN
*
*/
function am( u, m ) {
	assign( u, m, tmp, 1, 0 );
	return tmp[ 3 ];
}


// EXPORTS //

module.exports = am;

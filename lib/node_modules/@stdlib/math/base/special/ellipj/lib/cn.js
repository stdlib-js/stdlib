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
* Compute the Jacobi elliptic function cn(u, m) of number u with modulus m.
*
* @param {number} u - input value
* @param {number} m - modulus `m`, equivalent to `k²`
* @returns {number} cn(u, m)
*
* @example
* var v = cn( 0.3, 0.5 );
* // returns ~0.956
*
* @example
* v = cn( 0.0, 0.0 );
* // returns ~1.0
*
* @example
* v = cn( Infinity, 1.0 );
* // returns ~0.0
*
* @example
* v = cn( 0.0, -2.0 );
* // returns ~1.0
*
* @example
* v = cn( NaN, NaN );
* // returns NaN
*
*/
function cn( u, m ) {
	assign( u, m, tmp, 1, 0 );
	return tmp[ 1 ];
}


// EXPORTS //

module.exports = cn;

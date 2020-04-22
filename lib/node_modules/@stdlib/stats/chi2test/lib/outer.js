/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var array = require( '@stdlib/ndarray/array' );
var Float64Array = require( '@stdlib/array/float64' );


// MAIN //

/**
* Computes the outer product.
*
* @param {Float64Array} x - first factor of outer product
* @param {Float64Array} y - second factor of outer product
* @returns {Matrix} output matrix
*/
function outer( x, y ) {
	var xlen = x.length;
	var ylen = y.length;
	var out = array( new Float64Array( xlen * ylen ), {
		'shape': [ xlen, ylen ]
	});
	var i;
	var j;
	for ( i = 0; i < xlen; i++ ) {
		for ( j = 0; j < ylen; j++ ) {
			out.set( i, j, x[ i ] * y[ j ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = outer;

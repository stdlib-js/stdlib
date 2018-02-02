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

var inverse = require( './cinv.js' );


// MAIN //

/**
* Computes the inverse of a complex number.
*
* ## References
*
* -   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS\] (October): 1–25. <https://arxiv.org/abs/1210.4539>.
*
*
* @param {(Array|TypedArray|Object)} [out] - output array
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {(Array|TypedArray|Object)} output array
*
* @example
* var v = cinv( 2.0, 4.0 );
* // returns [ 0.1, -0.2 ]
*
* @example
* var out = new Array( 2 );
*
* var v = cinv( out, 2.0, 4.0 );
* // returns [ 0.1, -0.2 ]
*
* var bool = ( v === out );
* // returns true
*/
function cinv( out, re, im ) {
	if ( arguments.length === 2 ) {
		return inverse( [ 0.0, 0.0 ], out, re );
	}
	return inverse( out, re, im );
}


// EXPORTS //

module.exports = cinv;

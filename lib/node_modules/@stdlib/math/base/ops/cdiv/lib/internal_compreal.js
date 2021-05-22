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

// MAIN //

/**
* Computes the real part of the quotient.
*
* ## Notes
*
* -   See figure 10 of [reference][@baudin:2012].
*
* [@baudin:2012]: https://arxiv.org/abs/1210.4539
*
* @private
* @param {number} re1 - real component
* @param {number} im1 - imaginary component
* @param {number} re2 - real component
* @param {number} im2 - imaginary component
* @param {number} r - partial result
* @param {number} t - partial result
* @returns {number} real part of the quotient
*/
function internalCompreal( re1, im1, re2, im2, r, t ) {
	var br;
	if ( r === 0.0 ) {
		return ( re1 + (im2 * (im1/re2)) ) * t;
	}
	br = im1 * r;
	if ( br === 0.0 ) {
		return ( re1*t ) + ( (im1*t) * r );
	}
	return ( re1+br ) * t;
}


// EXPORTS //

module.exports = internalCompreal;

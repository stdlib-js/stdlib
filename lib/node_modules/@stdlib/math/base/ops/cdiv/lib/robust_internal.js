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

var internalCompreal = require( './internal_compreal.js' );


// MAIN //

/**
* Computes the complex division.
*
* ## Notes
*
* -   See figure 10 of [reference][@baudin:2012].
*
* [@baudin:2012]: https://arxiv.org/abs/1210.4539
*
* @private
* @param {(Array|TypedArray|Object)} out - output array
* @param {number} re1 - real component
* @param {number} im1 - imaginary component
* @param {number} re2 - real component
* @param {number} im2 - imaginary component
*/
function robustInternal( out, re1, im1, re2, im2 ) {
	var r;
	var t;

	r = im2 / re2;
	t = 1.0 / ( re2 + (im2*r) );

	out[ 0 ] = internalCompreal( re1, im1, re2, im2, r, t );
	out[ 1 ] = internalCompreal( im1, -re1, re2, im2, r, t );
}


// EXPORTS //

module.exports = robustInternal;

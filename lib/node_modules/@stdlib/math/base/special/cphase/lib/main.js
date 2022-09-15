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

var atan2 = require( '@stdlib/math/base/special/atan2' );


// MAIN //

/**
* Computes the argument of a complex number in radians.
*
* @param {number} re - real component
* @param {number} im - imaginary component
* @returns {number} argument
*
* @example
* var phi = cphase( 5.0, 3.0 );
* // returns ~0.5404
*/
function cphase( re, im ) {
	return atan2( im, re );
}


// EXPORTS //

module.exports = cphase;

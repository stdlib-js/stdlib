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

var sqrt = require( '@stdlib/math/base/special/sqrt' );
var ln = require( '@stdlib/math/base/special/ln' );
var cos = require( '@stdlib/math/base/special/cos' );
var TWO_PI = require( '@stdlib/constants/float64/two-pi' );


// MAIN //

/**
* Returns the maximum possible normally distributed pseudorandom number.
*
* @private
* @param {number} min - minimum possible uniformly distributed pseudorandom number
* @returns {number} maximum possible number
*/
function getMax( min ) {
	var a = sqrt( -2.0 * ln( min ) );
	var b = TWO_PI * min;
	return a * cos( b );
}


// EXPORTS //

module.exports = getMax;

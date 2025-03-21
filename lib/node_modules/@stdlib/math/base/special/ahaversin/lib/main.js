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

var asin = require( '@stdlib/math/base/special/asin' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Computes the inverse half-value versed sine.
*
* @param {number} x - input value
* @returns {number} inverse half-value versed sine
*
* @example
* var v = ahaversin( 0.0 );
* // returns 0.0
*
* @example
* var v = ahaversin( 1.0 );
* // returns ~3.1416
*
* @example
* var v = ahaversin( 0.5 );
* // returns ~1.5708
*
* @example
* var v = ahaversin( NaN );
* // returns NaN
*/
function ahaversin( x ) {
	return 2.0 * asin( sqrt( x ) );
}


// EXPORTS //

module.exports = ahaversin;

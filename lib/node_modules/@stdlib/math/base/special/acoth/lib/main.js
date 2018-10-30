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

var atanh = require( '@stdlib/math/base/special/atanh' );


// MAIN //

/**
* Computes the inverse hyperbolic cotangent of a number.
*
* @param {number} x - input value
* @returns {number} inverse hyperbolic cotangent (in radians)
*
* @example
* var v = acoth( 2.0 );
* // returns ~0.5493
*
* @example
* var v = acoth( 0.0 );
* // returns NaN
*
* @example
* var v = acoth( 0.5 );
* // returns NaN
*
* @example
* var v = acoth( 1.0 );
* // returns Infinity
*
* @example
* var v = acoth( NaN );
* // returns NaN
*/
function acoth( x ) {
	return atanh( 1.0/x );
}


// EXPORTS //

module.exports = acoth;

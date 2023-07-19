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

var cos = require( '@stdlib/math/base/special/cos' );


// MAIN //

/**
* Computes the half-value versed cosine.
*
* @param {number} x - input value (in radians)
* @returns {number} half-value versed cosine
*
* @example
* var v = havercos( 0.0 );
* // returns 1.0
*
* @example
* var v = havercos( 3.141592653589793/2.0 );
* // returns 0.5
*
* @example
* var v = havercos( -3.141592653589793/6.0 );
* // returns ~0.9330
*
* @example
* var v = havercos( NaN );
* // returns NaN
*/
function havercos( x ) {
	return (1.0 + cos( x )) / 2.0;
}


// EXPORTS //

module.exports = havercos;

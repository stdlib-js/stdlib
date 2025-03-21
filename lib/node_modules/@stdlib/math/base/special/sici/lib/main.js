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

var fcn = require( './assign.js' );


// MAIN //

/**
* Computes the sine and cosine integrals.
*
* @param {number} x - input value
* @returns {Array<number>} output array
*
* @example
* var v = sici( 3.0 );
* // returns [ ~1.849, ~0.12 ]
*
* @example
* var v = sici( 0.0 );
* // returns [ 0.0, -Infinity  ]
*
* @example
* var v = sici( -9.0 );
* // returns [ ~-1.665, ~0.055 ]
*
* @example
* var v = sici( NaN );
* // returns [ NaN, NaN ]
*/
function sici( x ) {
	return fcn( x, [ 0.0, 0.0 ], 1, 0 );
}


// EXPORTS //

module.exports = sici;

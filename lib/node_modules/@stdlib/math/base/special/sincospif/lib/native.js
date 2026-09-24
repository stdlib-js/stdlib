/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var Float32Array = require( '@stdlib/array/float32' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Simultaneously computes the sine and cosine of a single-precision floating-point number times π.
*
* @private
* @param {number} x - input value
* @returns {Float32Array} two-element array containing sin(πx) and cos(πx)
*
* @example
* var v = sincospif( 0.0 );
* // returns <Float32Array>[ 0.0, 1.0 ]
*
* @example
* var v = sincospif( 0.5 );
* // returns <Float32Array>[ 1.0, 0.0 ]
*
* @example
* var v = sincospif( 0.1 );
* // returns <Float32Array>[ ~0.309, ~0.951 ]
*
* @example
* var v = sincospif( NaN );
* // returns <Float32Array>[ NaN, NaN ]
*/
function sincospif( x ) {
	var out = new Float32Array( 2 );
	addon( x, out );
	return out;
}


// EXPORTS //

module.exports = sincospif;

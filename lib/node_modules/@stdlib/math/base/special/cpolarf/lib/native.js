/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes the absolute value and the phase of a single-precision complex floating-point number.
*
* @private
* @param {Complex64} z - complex number
* @returns {Float32Array} absolute value and phase (in radians)
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var o = cpolarf( new Complex64( 5.0, 3.0 ) );
* // returns <Float32Array>[ ~5.83, ~0.5404 ]
*/
function cpolarf( z ) {
	var o = new Float32Array( 2 );
	addon( z, o );
	return o;
}


// EXPORTS //

module.exports = cpolarf;

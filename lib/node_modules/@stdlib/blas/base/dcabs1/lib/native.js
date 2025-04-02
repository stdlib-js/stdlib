/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the sum of the absolute value of the real and imaginary part of a double-precision complex floating-point number.
*
* @private
* @param {Complex128} z - complex number
* @returns {number} result
*
* @example
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var v = dcabs1( new Complex128( 5.0, -3.0 ) );
* // returns 8.0
*/
function dcabs1( z ) {
	return addon( z );
}


// EXPORTS //

module.exports = dcabs1;

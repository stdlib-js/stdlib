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
* Computes `log(1+f) - f` for `1+f` in `~[sqrt(2)/2, sqrt(2)]`.
*
* @private
* @param {number} f - input value
* @returns {number} function value
*
* @example
* var v = kernelLog1p( 1.0 );
* // returns ~0.1931
*
* @example
* var v = kernelLog1p( 1.4142135623730951 );
* // returns ~0.4672
*
* @example
* var v = kernelLog1p( NaN );
* // returns NaN
*/
function kernelLog1p( f ) {
	return addon( f );
}


// EXPORTS //

module.exports = kernelLog1p;

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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var exp = require( '@stdlib/math/base/special/exp' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the differential entropy of a Planck distribution.
*
* @param {PositiveNumber} lambda - shape parameter
* @returns {PositiveNumber} differential entropy
*
* @example
* var v = entropy( 0.1 );
* // returns ~3.3030
*
* @example
* var v = entropy( 1.5 );
* // returns ~0.6833
*
* @example
* var v = entropy( 2.9 );
* // returns ~0.2255
*
* @example
* var v = entropy( -1.1 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( lambda ) {
	var c;
	if ( isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	c = -expm1( -lambda );
	return ( lambda * exp( -lambda ) / c ) - ln( c );
}


// EXPORTS //

module.exports = entropy;

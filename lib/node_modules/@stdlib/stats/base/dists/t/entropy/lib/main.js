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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var digamma = require( '@stdlib/math/base/special/digamma' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var beta = require( '@stdlib/math/base/special/beta' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the differential entropy of a Student's t distribution.
*
* @param {PositiveNumber} v - degrees of freedom
* @returns {number} entropy
*
* @example
* var v = entropy( 9.0 );
* // returns ~1.533
*
* @example
* var v = entropy( 2.0 );
* // returns ~1.96
*
* @example
* var v = entropy( -0.2 );
* // returns NaN
*
* @example
* var v = entropy( NaN );
* // returns NaN
*/
function entropy( v ) {
	var out;
	var vh;
	if ( isnan( v ) || v <= 0.0 ) {
		return NaN;
	}
	vh = v / 2.0;
	out = ( v + 1.0 ) / 2.0;
	out *= digamma( ( 1.0+v ) / 2.0 ) - digamma( vh );
	out += ln( sqrt( v ) * beta( vh, 0.5 ) );
	return out;
}


// EXPORTS //

module.exports = entropy;

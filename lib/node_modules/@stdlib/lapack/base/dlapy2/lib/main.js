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

var abs = require( '@stdlib/math/base/special/abs' );
var min = require( '@stdlib/math/base/special/min' );
var max = require( '@stdlib/math/base/special/max' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var abs2 = require( '@stdlib/math/base/special/abs2' );


// MAIN //

/**
* Returns `sqrt(x^2 + y^2)` in a manner which doesn't cause unnecessary overflow.
*
* @param {number} x - first input number
* @param {number} y - second input number
* @returns {number} `sqrt(x^2 + y^2)`
*
* @example
* var out = dlapy2( 3.0, 4.0 );
* // returns 5.0
*/
function dlapy2( x, y ) {
	var xabs;
	var yabs;
	var w;
	var z;

	xabs = abs( x );
	yabs = abs( y );

	w = max( xabs, yabs );
	z = min( xabs, yabs );

	if ( z === 0.0 ) {
		return w;
	}
	return w * ( sqrt( 1.0 + abs2( z / w ) ) );
}


// EXPORTS //

module.exports = dlapy2;

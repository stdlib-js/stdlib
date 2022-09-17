/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var ln = require( '@stdlib/math/base/special/ln' );
var apnorminv = require( './apnorminv.js' );


// VARIABLES //

var VMAX = 120.0;
var c1 = 0.8843;
var c2 = 0.2368;
var c3 = 1.214;
var c4 = 1.208;
var c5 = 1.4142;


// MAIN //

/**
* Calculates an initial percentile from the studentized range distribution.
*
* @private
* @param {number} p - quantile
* @param {number} v - degrees of freedom
* @param {number} r - number of samples
* @returns {number} initial percentile
*/
function qtrngo( p, v, r ) {
	var q;

	var t = apnorminv( 0.5 + ( 0.5 * p ) );
	if ( v < VMAX ) {
		t += ( ( t * t * t ) + t) / v / 4.0;
	}
	q = c1 - ( c2 * t );
	if ( v < VMAX ) {
		q -= ( c3 / v ) + ( c4 * t / v );
	}
	return t * ( ( q * ln(r - 1.0) ) + c5 );
}


// EXPORTS //

module.exports = qtrngo;

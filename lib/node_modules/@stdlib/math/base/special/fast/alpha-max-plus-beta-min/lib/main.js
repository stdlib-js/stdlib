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

var abs = require( '@stdlib/math/base/special/fast/abs' );


// VARIABLES //

// 2*cos(pi/8)/(1+cos(pi/8)):
var ALPHA = 0.96043387010342;

// 2*sin(pi/8)/(1+cos(pi/8)):
var BETA = 0.397824734759316;


// MAIN //

/**
* Computes the hypotenuse using the alpha max plus beta min algorithm.
*
* @param {number} x - number
* @param {number} y - number
* @returns {number} hypotenuse
*
* @example
* var h = hypot( -5.0, 12.0 );
* // returns ~13.5
*/
function hypot( x, y ) {
	x = abs( x );
	y = abs( y );
	if ( x > y ) {
		return (ALPHA*x) + (BETA*y);
	}
	return (ALPHA*y) + (BETA*x);
}


// EXPORTS //

module.exports = hypot;

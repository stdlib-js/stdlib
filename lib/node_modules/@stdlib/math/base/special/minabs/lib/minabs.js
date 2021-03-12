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

var abs = require( '@stdlib/math/base/special/abs' );
var min = require( '@stdlib/math/base/special/min' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );


// MAIN //

/**
* Returns the minimum absolute value.
*
* @param {number} [x] - first number
* @param {number} [y] - second number
* @param {...number} [args] - numbers
* @returns {number} minimum absolute value
*
* @example
* var v = minabs( -3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = minabs( 5.9, 3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = minabs( 3.14, NaN );
* // returns NaN
*
* @example
* var v = minabs( +0.0, -0.0 );
* // returns +0.0
*/
function minabs( x, y ) {
	var nargs;
	var args;
	var i;

	nargs = arguments.length;
	if ( nargs === 0 ) {
		return PINF;
	}
	if ( nargs === 2 ) {
		return min( abs( x ), abs( y ) );
	}
	args = [];
	for ( i = 0; i < nargs; i++ ) {
		args.push( abs( arguments[ i ] ) );
	}
	return min.apply( null, args );
}


// EXPORTS //

module.exports = minabs;

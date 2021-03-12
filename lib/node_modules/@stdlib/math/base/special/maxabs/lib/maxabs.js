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
var max = require( '@stdlib/math/base/special/max' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );


// MAIN //

/**
* Returns the maximum absolute value.
*
* @param {number} [x] - first number
* @param {number} [y] - second number
* @param {...number} [args] - numbers
* @returns {number} maximum absolute value
*
* @example
* var v = maxabs( 3.14, -4.2 );
* // returns 4.2
*
* @example
* var v = maxabs( 5.9, 3.14, 4.2 );
* // returns 5.9
*
* @example
* var v = maxabs( 3.14, NaN );
* // returns NaN
*
* @example
* var v = maxabs( +0.0, -0.0 );
* // returns +0.0
*/
function maxabs( x, y ) {
	var nargs;
	var args;
	var i;

	nargs = arguments.length;
	if ( nargs === 0 ) {
		return PINF;
	}
	if ( nargs === 2 ) {
		return max( abs( x ), abs( y ) );
	}
	args = [];
	for ( i = 0; i < nargs; i++ ) {
		args.push( abs( arguments[ i ] ) );
	}
	return max.apply( null, args );
}


// EXPORTS //

module.exports = maxabs;

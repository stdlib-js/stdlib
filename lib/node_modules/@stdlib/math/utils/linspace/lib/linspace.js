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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Generates a linearly spaced numeric array.
*
* @param {number} x1 - first array value
* @param {number} x2 - last array value
* @param {NonNegativeInteger} [len=100] - length of output array
* @throws {TypeError} first argument must be numeric
* @throws {TypeError} second argument must be numeric
* @throws {TypeError} third argument must be a nonnegative integer
* @returns {Array} linearly spaced numeric array
*
* @example
* var arr = linspace( 0, 100, 6 );
* // returns [ 0, 20, 40, 60, 80, 100 ]
*/
function linspace( x1, x2, len ) {
	var arr;
	var end;
	var tmp;
	var d;
	var i;
	if ( !isNumber( x1 ) || isnan( x1 ) ) {
		throw new TypeError( 'invalid argument. Start must be numeric. Value: `' + x1 + '`.' );
	}
	if ( !isNumber( x2 ) || isnan( x2 ) ) {
		throw new TypeError( 'invalid argument. Stop must be numeric. Value: `' + x2 + '`.' );
	}
	if ( arguments.length < 3 ) {
		len = 100;
	} else {
		if ( !isNonNegativeInteger( len ) ) {
			throw new TypeError( 'invalid argument. Length must be a nonnegative integer. Value: `' + len + '`.' );
		}
		if ( len === 0 ) {
			return [];
		}
	}
	// Calculate the increment:
	end = len - 1;
	d = ( x2-x1 ) / end;

	// Build the output array...
	arr = [];
	tmp = x1;
	arr.push( tmp );
	for ( i = 1; i < end; i++ ) {
		tmp += d;
		arr.push( tmp );
	}
	arr.push( x2 );
	return arr;
}


// EXPORTS //

module.exports = linspace;

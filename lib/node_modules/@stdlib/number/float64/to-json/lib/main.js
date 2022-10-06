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

var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Returns a JSON representation of a number.
*
* @param {number} x - input value
* @throws {TypeError} must provide a number
* @returns {Object} JSON representation
*
* @example
* var json = number2json( NaN );
* // returns { 'type': 'float64', 'value': 'NaN' }
*/
function number2json( x ) {
	if ( typeof x !== 'number' ) {
		throw new TypeError( format( 'invalid argument. Must provide a number. Value: `%s`.', x ) );
	}
	if ( x !== x ) {
		return {
			'type': 'float64',
			'value': 'NaN'
		};
	}
	if ( x === PINF ) {
		return {
			'type': 'float64',
			'value': '+Infinity'
		};
	}
	if ( x === NINF ) {
		return {
			'type': 'float64',
			'value': '-Infinity'
		};
	}
	return x;
}


// EXPORTS //

module.exports = number2json;

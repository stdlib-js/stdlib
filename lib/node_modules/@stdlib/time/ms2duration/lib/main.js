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

var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var floor = require( '@stdlib/math/base/special/floor' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Converts a number of milliseconds to a string duration.
*
* @param {number} ms - number of milliseconds
* @throws {TypeError} must provide a nonnegative integer
* @returns {string} duration
*
* @example
* var str = ms2duration( 1030 );
* // returns '1s30ms'
*
* @example
* var str = ms2duration( 3600000 );
* // returns '1h'
*/
function ms2duration( ms ) {
	var out;
	if ( !isNonNegativeInteger( ms ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', ms ) );
	}
	if ( ms === 0 ) {
		return '0ms';
	}
	out = '';
	if ( ms >= 86400000 ) {
		out += floor(ms/86400000) + 'd';
		ms %= 86400000;
	}
	if ( ms >= 3600000 ) {
		out += floor(ms/3600000) + 'h';
		ms %= 3600000;
	}
	if ( ms >= 60000 ) {
		out += floor(ms/60000) + 'm';
		ms %= 60000;
	}
	if ( ms >= 1000 ) {
		out += floor(ms/1000) + 's';
		ms %= 1000;
	}
	if ( ms > 0 ) {
		out += ms + 'ms';
	}
	return out;
}


// EXPORTS //

module.exports = ms2duration;

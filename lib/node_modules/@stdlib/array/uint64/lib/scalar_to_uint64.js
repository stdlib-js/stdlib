/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var isUint64 = require( '@stdlib/assert/is-uint64' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Converts a value to a 64-bit unsigned integer.
*
* @private
* @param {*} value - value to convert
* @returns {(Uint64|TypeError)} 64-bit unsigned integer or an error
*/
function scalarToUint64( value ) {
	if ( isUint64( value ) ) {
		return value;
	}
	try {
		return new Uint64( value );
	} catch ( err ) { // eslint-disable-line no-unused-vars
		return new TypeError( format( 'invalid argument. Value must be either a 64-bit unsigned integer or a value which can be converted to a 64-bit unsigned integer. Value: `%s`.', value ) );
	}
}


// EXPORTS //

module.exports = scalarToUint64;

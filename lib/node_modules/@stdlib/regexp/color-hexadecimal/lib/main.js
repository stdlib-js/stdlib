/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var contains = require( '@stdlib/assert/contains' );


// VARIABLES //

var MODES = [ 'full', 'shorthand', 'either' ];


// MAIN //

/**
* Returns a regular expression to match a hexadecimal color.
*
* @param {string} [mode='full'] - color format (`full`, `shorthand`, or `either`)
* @throws {Error} mode must be `full`, `shorthand`, or `either`
* @returns {RegExp} regular expression
*
* @example
* var RE = reColorHexadecimal();
* // returns <RegExp>
*
* var bool = RE.test( 'ffffff' );
* // returns true
*
* bool = RE.test( '000' );
* // returns false
*/
function reColorHexadecimal( mode ) {
	if ( arguments.length > 0 ) {
		if ( !contains( MODES, mode ) ) {
			throw new Error( 'invalid argument. Mode must be either `full`, `shorthand`, or `either`. Value: `' + mode + '`.' );
		}
	}
	if ( mode === 'shorthand' ) {
		return /^[0-9A-F]{3}$/i;
	}
	if ( mode === 'either' ) {
		return /^[0-9A-F]{3}$|^[0-9A-F]{6}$/i;
	}
	// Case: mode === 'full'
	return /^[0-9A-F]{6}$/i;
}


// EXPORTS //

module.exports = reColorHexadecimal;

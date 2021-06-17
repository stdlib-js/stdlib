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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var STANDALONE_TO_PKG = require( './../data/data.json' );


// MAIN //

/**
* Returns the internal package name associated with a provided standalone package name.
*
* @param {string} pkg - standalone package name
* @throws {TypeError} must provide a string
* @returns {(string|null)} package name
*
* @example
* var v = standalone2pkg( '@stdlib/math-base-special-sin' );
* // returns '@stdlib/math/base/special/sin'
*/
function standalone2pkg( pkg ) {
	if ( !isString( pkg ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + pkg + '`.' );
	}
	if ( hasOwnProp( STANDALONE_TO_PKG, pkg ) ) {
		return STANDALONE_TO_PKG[ pkg ];
	}
	return null;
}


// EXPORTS //

module.exports = standalone2pkg;

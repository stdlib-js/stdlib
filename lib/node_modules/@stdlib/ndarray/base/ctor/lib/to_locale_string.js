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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isObject = require( '@stdlib/assert/is-plain-object' );
var format = require( '@stdlib/string/format' );
var serialize2string = require( './serialize2string.js' );


// VARIABLES //

var METHOD = 'toLocaleString';


// MAIN //

/**
* Serializes an ndarray as a locale-aware string.
*
* ## Notes
*
* -   The method does **not** serialize data outside of the buffer region defined by the array configuration.
*
* @private
* @param {(string|Array<string>)} [locales] - locale identifier(s)
* @param {Object} [options] - configuration options
* @throws {TypeError} first argument must be a string or an array of strings
* @throws {TypeError} options argument must be an object
* @returns {string} string representation
*/
function toLocaleString( locales, options ) { // eslint-disable-line stdlib/no-redeclare
	/* eslint-disable no-invalid-this */
	var nargs;
	var opts;
	var loc;

	nargs = arguments.length;
	if ( nargs === 0 ) {
		loc = [];
	} else if ( isString( locales ) || isStringArray( locales ) ) {
		loc = locales;
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be a string or an array of strings. Value: `%s`.', locales ) );
	}
	if ( nargs < 2 ) {
		opts = {};
	} else if ( isObject( options ) ) {
		opts = options;
	} else {
		throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	return serialize2string( this, METHOD, loc, opts );

	/* eslint-enable no-invalid-this */
}


// EXPORTS //

module.exports = toLocaleString;

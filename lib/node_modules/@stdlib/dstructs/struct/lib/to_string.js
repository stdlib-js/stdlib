/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var linearFormat = require( './format_linear.js' );
var layoutFormat = require( './format_layout.js' );


// VARIABLES //

var FORMATS = [
	'none',
	'linear',
	'layout'
];
var isFormat = contains( FORMATS );


// MAIN //

/**
* Serializes a struct to a string.
*
* @private
* @param {Function} Struct - struct constructor
* @param {Array<Object>} fields - list of normalized fields
* @param {Options} options - function options
* @param {string} [options.format] - serialization format
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} string representation
*/
function toString( Struct, fields, options ) { // eslint-disable-line stdlib/no-redeclare
	var opts;
	if ( !isPlainObject( options ) ) {
		throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	opts = {
		'format': 'none'
	};
	if ( hasOwnProp( options, 'format' ) ) {
		opts.format = options.format;
		if ( !isFormat( opts.format ) ) {
			throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'format', join( FORMATS, ', ' ), options.format ) );
		}
	}
	if ( opts.format === 'linear' ) {
		return linearFormat( Struct, fields );
	}
	if ( opts.format === 'layout' ) {
		return layoutFormat( fields );
	}
	// Case: opts.format === 'none'
	return '<Struct>';
}


// EXPORTS //

module.exports = toString;

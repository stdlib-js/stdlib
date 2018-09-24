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

var contains = require( '@stdlib/assert/contains' );
var isArray = require( '@stdlib/assert/is-array' );
var isObject = require( '@stdlib/assert/is-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// VARIABLES //

var METHODS = [ 'min', 'max', 'average', 'dense', 'ordinal' ];
var MISSING = [ 'last', 'first', 'remove' ];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {string} [options.method] - method determining how ties are treated
* @param {string} [opts.missing] - determines where missing values go (`first`,`last`, or `remove`)
* @param {Array} [opts.encoding] - array of values encoding missing values
* @returns {(null|Error)} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'encoding' ) ) {
		opts.encoding = options.encoding;
		if ( !isArray( opts.encoding ) ) {
			return new TypeError( 'invalid option. `encoding` option must be an array. Option: `' + opts.encoding + '`.' );
		}
	}
	if ( hasOwnProp( options, 'method' ) ) {
		opts.method = options.method;
		if ( !isString( opts.method ) || !contains( METHODS, opts.method ) ) {
			return new TypeError( 'invalid option. `method` must be one of the following values: `average`, `min`, `max`, `dense`, or `ordinal`. Option: `' + opts.method + '`.' );
		}
	}
	if ( hasOwnProp( options, 'missing' ) ) {
		opts.missing = options.missing;
		if ( !isString( opts.missing ) || !contains( MISSING, opts.missing ) ) {
			return new TypeError( 'invalid option. `missing` must be one of the following values: `last`, `first`, or `remove`. Option: `' + opts.missing + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

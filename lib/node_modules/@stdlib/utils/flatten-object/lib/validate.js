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

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for function options
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.depth] - depth to flatten
* @param {boolean} [options.copy] - boolean indicating whether to deep copy
* @param {boolean} [options.flattenArrays] - boolean indicating whether to flatten arrays
* @param {string} [options.delimiter] - key path delimiter
* @returns {(Error|null)} error or null
*
* @example
* var opts = {};
* var options = {
*     'depth': 10,
*     'copy': false,
*     'delimiter': '|',
*     'flattenArrays': false
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'depth' ) ) {
		opts.depth = options.depth;
		if ( !isNonNegativeInteger( opts.depth ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a nonnegative integer. Option: `%s`.', 'depth', opts.depth ) );
		}
	}
	if ( hasOwnProp( options, 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isBoolean( opts.copy ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'copy', opts.copy ) );
		}
	}
	if ( hasOwnProp( options, 'flattenArrays' ) ) {
		opts.flattenArrays = options.flattenArrays;
		if ( !isBoolean( opts.flattenArrays ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'flattenArrays', opts.flattenArrays ) );
		}
	}
	if ( hasOwnProp( options, 'delimiter' ) ) {
		opts.delimiter = options.delimiter;
		if ( !isString( opts.delimiter ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'delimiter', opts.delimiter ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

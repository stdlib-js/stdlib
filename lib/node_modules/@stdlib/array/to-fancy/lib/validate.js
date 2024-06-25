/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isMethodIn = require( '@stdlib/assert/is-method-in' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {boolean} [options.strict] - boolean indicating whether to enforce strict bounds checking
* @param {Function} [options.cache] - cache for resolving array index objects
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'strict': false
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
	if ( hasOwnProp( options, 'strict' ) ) {
		opts.strict = options.strict;
		if ( !isBoolean( opts.strict ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'strict', opts.strict ) );
		}
	}
	if ( hasOwnProp( options, 'cache' ) ) {
		opts.cache = options.cache;
		if ( !isMethodIn( opts.cache, 'get' ) ) {
			return new TypeError( format( 'invalid option. `%s` option is missing a `%s` method. Option: `%s`.', 'cache', 'get', opts.cache ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

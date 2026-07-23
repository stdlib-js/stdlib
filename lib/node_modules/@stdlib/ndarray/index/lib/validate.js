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
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var format = require( '@stdlib/string/format' );
var KINDS = require( './kinds.json' );


// VARIABLES //

var isKind = contains( KINDS );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {boolean} [options.persist] - boolean indicating whether to continue persisting an index object after first usage
* @param {string} [options.kind] - specifies whether a provided ndarray is a specialized kind of integer input ndarray
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'persist': false
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
	if ( hasOwnProp( options, 'persist' ) ) {
		opts.persist = options.persist;
		if ( !isBoolean( opts.persist ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'persist', opts.persist ) );
		}
	}
	if ( hasOwnProp( options, 'kind' ) ) {
		opts.kind = options.kind;
		if ( !isKind( opts.kind ) && opts.kind !== '' ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'kind', KINDS.join( '", "' ), opts.kind ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

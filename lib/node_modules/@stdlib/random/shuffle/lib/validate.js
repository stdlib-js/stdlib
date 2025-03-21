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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var indexOf = require( '@stdlib/utils/index-of' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var COPY_OPTIONS = [ 'deep', 'shallow', 'none' ];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Options} options - function options
* @param {string} [options.copy] - string denoting whether to return a copy (`deep`, `shallow` or `none`)
* @returns {(null|Error)} null or an error
*
* @example
* var opts = {};
* var options = {
*     'copy': 'shallow'
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
	if ( hasOwnProp( options, 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isString( opts.copy ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'copy', opts.copy ) );
		}
		if ( indexOf( COPY_OPTIONS, opts.copy ) === -1 ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'copy', COPY_OPTIONS.join( '", "' ), opts.copy ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

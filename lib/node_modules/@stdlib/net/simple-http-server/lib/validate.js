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

var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - directory from which to serve files
* @param {boolean} [options.open] - indicates whether to launch a web browser
* @returns {(Error|null)} error or null
*
* @example
* var options = {
*     'port': 7331,
*     'address': '127.0.0.1',
*     'open': false
* };
* var opts = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'dir' ) ) {
		opts.dir = options.dir;
		if ( !isString( opts.dir ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string primitive. Option: `%s`.', 'dir', opts.dir ) );
		}
	}
	if ( hasOwnProp( options, 'open' ) ) {
		opts.open = options.open;
		if ( !isBoolean( opts.open ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean primitive. Option: `%s`.', 'open', opts.open ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for function options
* @param {Options} options - function options
* @param {string} [options.sep] - key path separator
* @returns {(Error|null)} error or null
*
* @example
* var opts = {};
* var options = {
*     'sep': '/'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'sep' ) ) {
		opts.sep = options.sep;
		if ( !isString( opts.sep ) ) {
			return new TypeError( 'invalid option. `sep` option must be a string primitive. Option: `' + opts.sep + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

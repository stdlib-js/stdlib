/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {string} [options.url] - website URL for full error message
* @param {string} [options.message] - error message template with `{{url}}` and `{{code}}` placeholders that will be replaced
* @returns {(Error|null)} error object or null
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'url' ) ) {
		opts.url = options.url;
		if ( !isString( opts.url ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'url', opts.url ) );
		}
	}
	if ( hasOwnProp( options, 'message' ) ) {
		opts.message = options.message;
		if ( !isString( opts.message ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'message', opts.message ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

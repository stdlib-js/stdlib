/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isEmptyArray = require( '@stdlib/assert/is-empty-array' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {StringArray} [options.stopwords] - array of custom stop words
* @returns {(null|Error)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'stopwords': [ 'of' ]
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'stopwords' ) ) {
		opts.stopwords = options.stopwords;
		if (
			!isStringArray( opts.stopwords ) &&
			!isEmptyArray( opts.stopwords )
		) {
			return new TypeError( 'invalid option. `stopwords` option must be an array of string primitives. Option: `' + opts.stopwords + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {string} [options.lpad] - string used to left pad
* @param {string} [options.rpad] - string used to right pad
* @param {boolean} [options.centerRight] - boolean indicating whether to center right in the event of a tie
* @returns {(null|Error)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'lpad': 'a',
*     'rpad': 'b'
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
	if ( hasOwnProp( options, 'lpad' ) ) {
		opts.lpad = options.lpad;
		if ( !isString( opts.lpad ) ) {
			return new TypeError( 'invalid option. `lpad` option must be a string primitive. Option: `' + opts.lpad + '`.' );
		}
	}
	if ( hasOwnProp( options, 'rpad' ) ) {
		opts.rpad = options.rpad;
		if ( !isString( opts.rpad ) ) {
			return new TypeError( 'invalid option. `rpad` option must be a string primitive. Option: `' + opts.rpad + '`.' );
		}
	}
	if ( hasOwnProp( options, 'centerRight' ) ) {
		opts.centerRight = options.centerRight;
		if ( !isBoolean( opts.centerRight ) ) {
			return new TypeError( 'invalid option. `centerRight` option must be a boolean primitive. Option: `' + opts.centerRight + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

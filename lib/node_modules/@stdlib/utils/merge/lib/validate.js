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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {number} [options.level] - merge level
* @param {boolean} [options.copy] - boolean indicating whether to deep copy merged values
* @param {(boolean|Function)} [options.override] - defines the merge strategy
* @param {boolean} [options.extend] - boolean indicating whether new properties can be added to the target object
* @returns {(Error|null)} error object or null
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'level' ) ) {
		opts.level = options.level;
		if ( !isPositiveInteger( opts.level ) ) {
			return new TypeError( 'invalid option. `level` option must be a positive integer. Option: `' + opts.level + '`.' );
		}
	}
	if ( hasOwnProp( options, 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isBoolean( opts.copy ) ) {
			return new TypeError( 'invalid option. `copy` option must be a boolean primitive. Option: `' + opts.copy + '`.' );
		}
	}
	if ( hasOwnProp( options, 'override' ) ) {
		opts.override = options.override;
		if (
			!isBoolean( opts.override ) &&
			!isFunction( opts.override )
		) {
			return new TypeError( 'invalid option. `override` option must be either a boolean primitive or a function. Option: `' + opts.override + '`.' );
		}
	}
	if ( hasOwnProp( options, 'extend' ) ) {
		opts.extend = options.extend;
		if ( !isBoolean( opts.extend ) ) {
			return new TypeError( 'invalid option. `extend` option must be a boolean primitive. Option: `' + opts.extend + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isNull = require( '@stdlib/assert/is-null' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {string} [options.before] - setup code
* @param {string} [options.after] - cleanup code
* @param {(PositiveInteger|null)} [options.iterations] - number of iterations
* @param {PositiveInteger} [options.repeats] - number of repeats
* @param {boolean} [options.asynchronous] - boolean indicating whether a snippet is asynchronous
* @returns {(Error|null)} error or null
*
* @example
* var opts = {};
* var options = {
*     'iterations': 1e7,
*     'repeats': 5
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
	if ( hasOwnProp( options, 'iterations' ) ) {
		opts.iterations = options.iterations;
		if (
			!isPositiveInteger( opts.iterations ) &&
			!isNull( opts.iterations )
		) {
			return new TypeError( 'invalid option. `iterations` option must be a positive integer or null. Option: `' + opts.iterations + '`.' );
		}
	}
	if ( hasOwnProp( options, 'repeats' ) ) {
		opts.repeats = options.repeats;
		if ( !isPositiveInteger( opts.repeats ) ) {
			return new TypeError( 'invalid option. `repeats` option must be a positive integer. Option: `' + opts.repeats + '`.' );
		}
	}
	if ( hasOwnProp( options, 'before' ) ) {
		opts.before = options.before;
		if ( !isString( opts.before ) ) {
			return new TypeError( 'invalid option. `before` option must be a primitive string. Option: `' + opts.before + '`.' );
		}
	}
	if ( hasOwnProp( options, 'after' ) ) {
		opts.after = options.after;
		if ( !isString( opts.after ) ) {
			return new TypeError( 'invalid option. `after` option must be a primitive string. Option: `' + opts.after + '`.' );
		}
	}
	if ( hasOwnProp( options, 'asynchronous' ) ) {
		opts.asynchronous = options.asynchronous;
		if ( !isBoolean( opts.asynchronous ) ) {
			return new TypeError( 'invalid option. `asynchronous` option must be a primitive boolean. Option: `' + opts.asynchronous + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

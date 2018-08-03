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
var isNull = require( '@stdlib/assert/is-null' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {boolean} [options.skip] - boolean indicating whether to skip a benchmark
* @param {(PositiveInteger|null)} [options.iterations] - number of iterations
* @param {PositiveInteger} [options.repeats] - number of repeats
* @param {PositiveInteger} [options.timeout] - number of milliseconds before a benchmark automatically fails
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'skip': false,
*     'iterations': 1e6,
*     'repeats': 3,
*     'timeout': 10000
* };
*
* var err = validate( opts, options );
* if ( err ) {
*    throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'skip' ) ) {
		opts.skip = options.skip;
		if ( !isBoolean( opts.skip ) ) {
			return new TypeError( 'invalid option. `skip` option must be a boolean primitive. Option: `' + opts.skip + '`.' );
		}
	}
	if ( hasOwnProp( options, 'iterations' ) ) {
		opts.iterations = options.iterations;
		if (
			!isPositiveInteger( opts.iterations ) &&
			!isNull( opts.iterations )
		) {
			return new TypeError( 'invalid option. `iterations` option must be either a positive integer or `null`. Option: `' + opts.iterations + '`.' );
		}
	}
	if ( hasOwnProp( options, 'repeats' ) ) {
		opts.repeats = options.repeats;
		if ( !isPositiveInteger( opts.repeats ) ) {
			return new TypeError( 'invalid option. `repeats` option must be a positive integer. Option: `' + opts.repeats + '`.' );
		}
	}
	if ( hasOwnProp( options, 'timeout' ) ) {
		opts.timeout = options.timeout;
		if ( !isPositiveInteger( opts.timeout ) ) {
			return new TypeError( 'invalid option. `timeout` option must be a positive integer. Option: `' + opts.timeout + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

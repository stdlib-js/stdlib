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
var isObject = require( '@stdlib/assert/is-plain-object' );
var isPositiveNumber = require( '@stdlib/assert/is-positive-number' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isNonNegativeNumber = require( '@stdlib/assert/is-nonnegative-number' ).isPrimitive;
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {Probability} [options.f] - smoother span (proportion of points which influence smoothing at each value)
* @param {NonNegativeInteger} [options.nsteps] - number of iterations in the robust fit
* @param {NonNegativeNumber} [options.delta] - nonnegative parameter which may be used to save computations
* @param {boolean} [options.sorted] - boolean indicating if the input array is in sorted order
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'f': 0.75,
*     'nsteps': 6,
*     'delta': 0.03,
*     'sorted': true
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'f' ) ) {
		opts.f = options.f;
		if ( !isPositiveNumber( opts.f ) ) {
			return new TypeError( 'invalid option. `f` option must be a positive number. Option: `' + opts.f + '`.' );
		}
	}
	if ( hasOwnProp( options, 'nsteps' ) ) {
		opts.nsteps = options.nsteps;
		if ( !isNonNegativeInteger( opts.nsteps ) ) {
			return new TypeError( 'invalid option. `nsteps` option must be a nonnegative integer. Option: `' + opts.nsteps + '`.' );
		}
	}
	if ( hasOwnProp( options, 'delta' ) ) {
		opts.delta = options.delta;
		if ( !isNonNegativeNumber( opts.delta ) ) {
			return new TypeError( 'invalid option. `delta` option must be a nonnegative number. Option: `' + opts.delta + '`.' );
		}
	}
	if ( hasOwnProp( options, 'sorted' ) ) {
		opts.sorted = options.sorted;
		if ( !isBoolean( opts.sorted ) ) {
			return new TypeError( 'invalid option. `sorted` option must be a boolean primitive. Option: `' + opts.sorted + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

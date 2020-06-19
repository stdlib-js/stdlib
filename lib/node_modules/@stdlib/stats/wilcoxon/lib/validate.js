/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var contains = require( '@stdlib/assert/contains' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// VARIABLES //

var ALTERNATIVE_VALUES = [ 'two-sided', 'less', 'greater' ];
var ZERO_METHOD_VALUES = [ 'pratt', 'wilcox', 'zsplit' ];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Options} options - function options
* @param {number} [options.alpha] - significance level
* @param {string} [options.alternative] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {boolean} [options.exact] - whether to force using the exact distribution instead of a normal approximation when there are more than fifty data points
* @param {boolean} [options.correction] - continuity correction adjusting the Wilcoxon rank statistic by 0.5 towards the mean
* @param {string} [options.zeroMethod] - method governing how zero-differences are handled (`pratt`, `wilcox` or `zsplit`)
* @param {number} [options.mu] - mean under H0
* @returns {(null|Error)} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'alpha' ) ) {
		opts.alpha = options.alpha;
		if ( !isNumber( opts.alpha ) || isnan( opts.alpha ) ) {
			return new TypeError( 'invalid option. `alpha` option must be a number primitive. Option: `' + opts.alpha + '`.' );
		}
		if ( opts.alpha < 0.0 || opts.alpha > 1.0 ) {
			return new RangeError( 'invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `' + opts.alpha + '`.' );
		}
	}
	if ( hasOwnProp( options, 'alternative' ) ) {
		opts.alternative = options.alternative;
		if ( !isString( opts.alternative ) ) {
			return new TypeError( 'invalid option. `alternative` option must be a string primitive. Option: `' + opts.alternative + '`.' );
		}
		if ( !contains( ALTERNATIVE_VALUES, opts.alternative ) ) {
			return new Error( 'invalid option. `alternative` option must be one of '+ALTERNATIVE_VALUES.join( ', ' )+'. Option: `' + opts.alternative + '`.' );
		}
	}
	if ( hasOwnProp( options, 'correction' ) ) {
		opts.correction = options.correction;
		if ( !isBoolean( opts.correction ) || isnan( opts.correction ) ) {
			return new TypeError( 'invalid option. `correction` option must be a boolean primitive. Option: `' + opts.alpha + '`.' );
		}
	}
	if ( hasOwnProp( options, 'exact' ) ) {
		opts.exact = options.exact;
		if (
			!isBoolean( opts.exact ) ||
			isnan( opts.exact )
		) {
			return new TypeError( 'invalid option. `exact` option must be a boolean primitive. Option: `' + opts.alpha + '`.' );
		}
	}
	if ( hasOwnProp( options, 'mu' ) ) {
		opts.mu = options.mu;
		if ( !isNumber( opts.mu ) || isnan( opts.mu ) ) {
			return new TypeError( 'invalid option. `mu` option must be a number primitive. Option: `' + opts.mu + '`.' );
		}
	}
	if ( hasOwnProp( options, 'zeroMethod' ) ) {
		opts.zeroMethod = options.zeroMethod;
		if ( !isString( opts.zeroMethod ) ) {
			return new TypeError( 'invalid option. `zeroMethod` option must be a string primitive. Option: `' + opts.alternative + '`.' );
		}
		if ( !contains( ZERO_METHOD_VALUES, opts.zeroMethod ) ) {
			return new Error( 'invalid option. `zeroMethod` option must be one of '+ZERO_METHOD_VALUES.join( ', ' )+'. Option: `' + opts.zeroMethod + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

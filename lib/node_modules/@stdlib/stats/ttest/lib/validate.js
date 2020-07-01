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

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/assert/contains' );


// VARIABLES //

var ALTERNATIVE = [
	'two-sided',
	'less',
	'greater'
];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {number} [options.alpha] - significance level
* @param {string} [options.alternative] - alternative hypothesis
* @param {number} [options.mu] - mean under `H0`
* @returns {(null|Error)} null or an error object
*
* @example
* var options = {
*     'alpha': 0.05
* };
* var opts = {};
*
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'alpha' ) ) {
		opts.alpha = options.alpha;
		if ( !isNumber( opts.alpha ) || isnan( opts.alpha ) ) {
			return new TypeError( 'invalid option. `alpha` option must be a number. Option: `' + opts.alpha + '`.' );
		}
		if ( opts.alpha < 0.0 || opts.alpha > 1.0 ) {
			return new RangeError( 'invalid option. `alpha` option must be between `0` and `1` (inclusive). Option: `' + opts.alpha + '`.' );
		}
	}
	if ( hasOwnProp( options, 'alternative' ) ) {
		opts.alternative = options.alternative;
		if ( !isString( opts.alternative ) ) {
			return new TypeError( 'invalid option. `alternative` option must be a string. Option: `' + opts.alternative + '`.' );
		}
		if ( !contains( ALTERNATIVE, opts.alternative ) ) {
			return new Error( 'invalid option. `alternative` option must be one of the following: `' + ALTERNATIVE.join( ', ' ) + '`.' );
		}
	}
	if ( hasOwnProp( options, 'mu' ) ) {
		opts.mu = options.mu;
		if ( !isNumber( opts.mu ) || isnan( opts.mu ) ) {
			return new TypeError( 'invalid option. `mu` option must be a number. Option: `' + opts.mu + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

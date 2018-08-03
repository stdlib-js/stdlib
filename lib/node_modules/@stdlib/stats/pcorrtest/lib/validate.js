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
var isnan = require( '@stdlib/assert/is-nan' );
var indexOf = require( '@stdlib/utils/index-of' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// VARIABLES //

var alternative = [ 'two-sided', 'less', 'greater' ];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Options} options - function options
* @param {number} [options.alpha] - significance level
* @param {string} [options.alternative] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {number} [options.rho] - correlation coefficient unter HO
* @returns {(null|Error)} null or an error
*
* @example
* var opts = {};
* var options = {
*     'alpha': 0.01,
*     'rho': 0.8
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
	if ( hasOwnProp( options, 'alpha' ) ) {
		opts.alpha = options.alpha;
		if (
			!isNumber( opts.alpha ) ||
			isnan( opts.alpha ) ||
			opts.alpha < 0.0 ||
			opts.alpha > 1.0
		) {
			return new TypeError( 'invalid option. `alpha` option must be a number in `[0,1]`. Option: `' + opts.alpha + '`.' );
		}
	}
	if ( hasOwnProp( options, 'alternative' ) ) {
		opts.alternative = options.alternative;
		if ( indexOf( alternative, opts.alternative ) === -1 ) {
			return new TypeError( 'invalid option. `alternative` option must be one of the following: "' + alternative.join( '", "' ) + '". Option: `' + opts.alternative + '`.' );
		}
	}
	if ( hasOwnProp( options, 'rho' ) ) {
		opts.rho = options.rho;
		if (
			!isNumber( opts.rho ) ||
			isnan( opts.rho ) ||
			opts.rho < -1.0 ||
			opts.rho > 1.0
		) {
			return new TypeError( 'invalid option. `rho` option must be a number in [-1,1]. Option: `' + opts.rho + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

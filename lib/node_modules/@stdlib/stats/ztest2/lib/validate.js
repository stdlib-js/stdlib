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

var isProbability = require( '@stdlib/assert/is-probability' ).isPrimitive;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isnan = require( '@stdlib/assert/is-nan' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Options} options - function options
* @param {number} [options.alpha] - significance level
* @param {string} [options.alternative] - alternative hypothesis (`two-sided`, `less` or `greater`)
* @param {number} [options.difference] - difference in means under H0
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
		if ( !isProbability( opts.alpha ) ) {
			return new RangeError( 'invalid option. `alpha` option must be a number in the range 0 to 1. Option: `' + opts.alpha + '`.' );
		}
	}
	if ( hasOwnProp( options, 'alternative' ) ) {
		opts.alternative = options.alternative;
		if ( !isString( opts.alternative ) ) {
			return new TypeError( 'invalid option. `alternative` option must be a string primitive. Option: `' + opts.alternative + '`.' );
		}
	}
	if ( hasOwnProp( options, 'difference' ) ) {
		opts.difference = options.difference;
		if ( !isNumber( opts.difference ) || isnan( opts.difference ) ) {
			return new TypeError( 'invalid option. `difference` option must be a number primitive. Option: `' + opts.difference + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

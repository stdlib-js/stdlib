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

var isString = require( '@stdlib/assert/is-string' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var isPositiveNumberArray = require( '@stdlib/assert/is-positive-number-array' );
var isFunction = require( '@stdlib/assert/is-function' );
var isError = require( '@stdlib/assert/is-error' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var isnan = require( '@stdlib/assert/is-nan' );
var getKernel = require( './get_kernel.js' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {number} [options.n] - number of splits in the generated grid
* @param {NumericArray} [options.h] - array of length two indicating the x and y bandwidth values
* @param {number} [options.xMin] - lower limit of x
* @param {number} [options.xMax] - upper limit of x
* @param {number} [options.xMin] - lower limit of y
* @param {number} [options.yMax] - upper limit of y
* @param {(string|Function)} [options.kernel] - a string or function to specifying the used kernel function
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'xMin': 3.14,
*     'kernel': 'gaussian'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'h' ) ) {
		opts.h = options.h;
		if ( !isPositiveNumberArray( opts.h) ) {
			return new TypeError( format( 'invalid option. `%s` option must be an array of positive numbers. Option: `%s`.', 'h', opts.h ) );
		}
		if ( opts.h.length !== 2 ) {
			return new TypeError( format( 'invalid option. `%s` option must be an array of length two. Option: `%s`.', 'h', opts.h ) );
		}
	}
	if ( hasOwnProp( options, 'n' ) ) {
		opts.n = options.n;
		if ( !isPositiveInteger( opts.n ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a positive integer. Option: `%s`.', 'n', opts.n ) );
		}
	}
	if ( hasOwnProp( options, 'xMax' ) ) {
		opts.xMax = options.xMax;
		if ( !isNumber( opts.xMax ) || isnan( opts.xMax ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a number. Option: `%s`.', 'xMax', opts.xMax ) );
		}
	}
	if ( hasOwnProp( options, 'xMin' ) ) {
		opts.xMin = options.xMin;
		if ( !isNumber( opts.xMin ) || isnan( opts.xMin ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a number. Option: `%s`.', 'xMin', opts.xMin ) );
		}
	}
	if ( hasOwnProp( options, 'yMax' ) ) {
		opts.yMax = options.yMax;
		if ( !isNumber( opts.yMax ) || isnan( opts.yMax ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a number. Option: `%s`.', 'yMax', opts.yMax ) );
		}
	}
	if ( hasOwnProp( options, 'yMin' ) ) {
		opts.yMin = options.yMin;
		if ( !isNumber( opts.yMin ) || isnan( opts.yMin ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a number. Option: `%s`.', 'yMin', opts.yMin ) );
		}
	}
	if ( hasOwnProp( options, 'kernel' ) ) {
		opts.kernel = options.kernel;
		if ( isString( opts.kernel ) ) {
			opts.kernel = getKernel( opts.kernel );
			if ( isError( opts.kernel ) ) {
				return opts.kernel;
			}
		} else if ( !isFunction( opts.kernel ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string denoting a known kernel function or a custom function. Option: `%s`.', 'kernel', opts.kernel ) );
		}
	}

	return null;
}


// EXPORTS //

module.exports = validate;

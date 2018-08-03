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
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {*} [options.thisArg] - execution context
* @param {PositiveInteger} [options.limit] - maximum number of pending invocations at any one time
* @param {boolean} [options.series] - boolean indicating whether to wait for a previous invocation to complete before invoking a provided function for the next own property
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'thisArg': {},
*     'series': false,
*     'limit': 10
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
	if ( hasOwnProp( options, 'thisArg' ) ) {
		opts.thisArg = options.thisArg;
	}
	if ( hasOwnProp( options, 'series' ) ) {
		opts.series = options.series;
		if ( !isBoolean( opts.series ) ) {
			return new TypeError( 'invalid option. `series` option must be a boolean primitive. Option: `' + opts.series + '`.' );
		}
	}
	if ( hasOwnProp( options, 'limit' ) ) {
		opts.limit = options.limit;
		if ( !isPositiveInteger( opts.limit ) ) {
			return new TypeError( 'invalid option. `limit` option must be a positive integer. Option: `' + opts.limit + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {NonNegativeInteger} [options.iter] - number of iterations
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'iter': 50
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( hasOwnProp( options, 'iter' ) ) {
		opts.iter = options.iter;
		if ( !isNonNegativeInteger( options.iter ) ) {
			return new TypeError( 'invalid option. `iter` option must be a nonnegative integer. Option: `' + options.iter + '`.' );
		}
		if ( options.iter > 77 ) {
			return new RangeError( 'invalid option. `iter` option must be less than or equal to `77`. Option: `' + options.iter + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

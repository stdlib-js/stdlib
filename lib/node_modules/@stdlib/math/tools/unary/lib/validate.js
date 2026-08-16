/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var contains = require( '@stdlib/array/base/assert/contains' );
var orders = require( '@stdlib/ndarray/orders' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Array} dtypes - list of supported output data types
* @param {Object} options - options
* @param {*} [options.dtype] - output array data type
* @param {string} [options.order] - output array order
* @returns {(Error|null)} null or an error object
*
* @example
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var opts = {};
* var options = {
*     'order': 'row-major'
* };
* var err = validate( opts, dtypes, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, dtypes, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !contains( dtypes, String( opts.dtype ) ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', join( dtypes, '", "' ), opts.dtype ) );
		}
	}
	if ( hasOwnProp( options, 'order' ) ) {
		opts.order = options.order;
		if ( !isOrder( opts.order ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'order', join( orders(), '", "' ), opts.order ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

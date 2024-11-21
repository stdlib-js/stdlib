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
var contains = require( '@stdlib/assert/contains' );
var orders = require( '@stdlib/ndarray/orders' );
var dtypes = require( '@stdlib/ndarray/dtypes' );
var format = require( '@stdlib/string/format' );


// VARIABLES //

var ORDERS = orders();
var DTYPES = dtypes();


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Object} options - options
* @param {string} [options.dtype] - output array data type
* @param {string} [options.order] - output array order
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'order': 'row-major'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !contains( DTYPES, opts.dtype ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a recognized/supported data type. Option: `%s`.', 'dtype', opts.dtype ) );
		}
	}
	if ( hasOwnProp( options, 'order' ) ) {
		opts.order = options.order;
		if ( !contains( ORDERS, opts.order ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a recognized/supported data type. Option: `%s`.', 'order', opts.order ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

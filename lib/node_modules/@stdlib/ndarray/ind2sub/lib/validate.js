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
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var isIndexMode = require( '@stdlib/ndarray/base/assert/is-index-mode' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.mode] - specifies how to handle a linear index which exceeds array dimensions
* @param {string} [options.order] - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'mode': 'throw',
*     'order': 'column-major'
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
	if ( hasOwnProp( options, 'mode' ) ) {
		opts.mode = options.mode;
		if ( !isIndexMode( opts.mode ) ) {
			return new TypeError( 'invalid option. `mode` option must be a supported/recognized mode. Option: `' + opts.mode + '`.' );
		}
	}
	if ( hasOwnProp( options, 'order' ) ) {
		opts.order = options.order;
		if ( !isOrder( opts.order ) ) {
			return new TypeError( 'invalid option. `order` option must be a supported/recognized order. Option: `' + opts.order + '`.' );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;

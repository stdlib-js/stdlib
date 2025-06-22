/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {StringArray} dtypes - list of supported output data types
* @param {Options} options - function options
* @param {string} [options.dtype] - array data type
* @param {string} [options.order] - memory layout (either row-major or column-major)
* @param {string} [options.mode] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @param {boolean} [options.readonly] - boolean indicating whether an array should be read-only
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var dtypes = [ 'float64', 'float32', 'generic' ];
*
* var options = {
*     'dtype': 'float64'
* };
* var err = validate( opts, dtypes, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, dtypes, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !contains( dtypes, opts.dtype ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', join( dtypes, '", "' ), opts.dtype ) );
		}
	}
	// Pass-through options...
	if ( hasOwnProp( options, 'order' ) ) {
		opts.order = options.order;
	}
	if ( hasOwnProp( options, 'mode' ) ) {
		opts.mode = options.mode;
	}
	if ( hasOwnProp( options, 'submode' ) ) {
		opts.submode = options.submode;
	}
	if ( hasOwnProp( options, 'readonly' ) ) {
		opts.readonly = options.readonly;
	}
	return null;
}


// EXPORTS //

module.exports = validate;

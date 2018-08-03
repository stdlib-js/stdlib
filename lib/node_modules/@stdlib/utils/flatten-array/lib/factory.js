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

var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' ).primitives;
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var defaults = require( './defaults.js' );
var genFcn = require( './gen_fcn.js' );
var wrapFlatten = require( './wrap_flatten.js' );
var wrapFlattenCopy = require( './wrap_flatten_copy.js' );


// MAIN //

/**
* Returns a function for flattening arrays having specified dimensions.
*
* @param {PositiveIntegerArray} dims - dimensions
* @param {Options} [options] - function options
* @param {boolean} [options.copy=false] - boolean indicating whether to deep copy array elements
* @throws {TypeError} first argument must be an array of positive integers
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} flatten function
*
* @example
* var flatten = factory( [2,2], {
*     'copy': false
* });
*
* var out = flatten( [[1,2],[3,4]] );
* // returns [ 1, 2, 3, 4 ]
*
* out = flatten( [[5,6],[7,8]] );
* // returns [ 5, 6, 7, 8 ]
*/
function factory( dims, options ) {
	var copyFLG;
	var flatten;
	if ( !isPositiveIntegerArray( dims ) ) {
		throw new TypeError( 'invalid argument. First argument must be an array of positive integers. Value: `' + dims + '`.' );
	}
	copyFLG = defaults.copy;
	if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'copy' ) ) {
			copyFLG = options.copy;
			if ( !isBoolean( copyFLG ) ) {
				throw new TypeError( 'invalid option. `copy` option must be a boolean primitive. Option: `' + copyFLG + '`.' );
			}
		}
	}
	flatten = genFcn( dims );
	if ( copyFLG ) {
		return wrapFlattenCopy( flatten );
	}
	return wrapFlatten( flatten );
}


// EXPORTS //

module.exports = factory;

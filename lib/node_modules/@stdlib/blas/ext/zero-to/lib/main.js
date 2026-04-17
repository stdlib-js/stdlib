/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var resolveStr = require( '@stdlib/ndarray/base/dtype-resolve-str' );
var contains = require( '@stdlib/array/base/assert/contains' );
var empty = require( '@stdlib/ndarray/empty' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' );
var defaults = require( './defaults.js' );
var base = require( './base.js' );


// MAIN //

/**
* Returns a new ndarray filled with linearly spaced numeric elements which increment by 1 starting from zero along one or more ndarray dimensions.
*
* @param {(NonNegativeInteger|NonNegativeIntegerArray)} shape - array shape
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims=[-1]] - list of dimensions over which to perform operation
* @param {*} [options.dtype] - output ndarray data type
* @param {string} [options.order] - ndarray order
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed ndarray dimensions
* @param {ArrayLikeObject<string>} [options.submode=["throw"]] - specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis
* @throws {TypeError} first argument must be either a nonnegative integer or an array of nonnegative integers
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @returns {ndarray} output ndarray
*
* @example
* var out = zeroTo( [ 2, 3 ] );
* // returns <ndarray>[ [ 0.0, 1.0, 2.0 ], [ 0.0, 1.0, 2.0 ] ]
*/
function zeroTo( shape ) {
	var options;
	var opts;
	var out;
	var sh;
	var dt;

	if ( isNonNegativeInteger( shape ) ) {
		sh = [ shape ];
	} else if ( isNonNegativeIntegerArray( shape ) ) {
		sh = shape; // Note: empty shape (i.e., a shape for a zero-dimensional ndarray) is not allowed
	} else {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer or an array of nonnegative integers. Value: `%s`.', shape ) );
	}
	options = defaults();

	if ( arguments.length > 1 ) {
		opts = arguments[ 1 ];
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'dtype' ) ) {
			dt = resolveStr( opts.dtype );
			if ( !isDataType( opts.dtype ) || !contains( DTYPES.odtypes, dt ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Option: `%s`.', 'dtype', join( DTYPES.odtypes, '", "' ), opts.dtype ) );
			}
			options.dtype = dt;
		}
		if ( hasOwnProp( opts, 'order' ) ) {
			if ( !isOrder( opts.order ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a supported order. Option: `%s`.', 'order', opts.order ) );
			}
			options.order = opts.order;
		}
		if ( hasOwnProp( opts, 'mode' ) ) {
			// Defer to `empty` to validate below...
			options.mode = opts.mode;
		}
		if ( hasOwnProp( opts, 'submode' ) ) {
			// Defer to `empty` to validate below...
			options.submode = opts.submode;
		}
		if ( hasOwnProp( opts, 'dims' ) ) {
			if ( !isIntegerArray( opts.dims ) && !isEmptyCollection( opts.dims ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be an array of integers. Option: `%s`.', 'dims', opts.dims ) );
			}
			options.dims = opts.dims;
		}
	}
	// Set the default data type if not provided:
	options.dtype = options.dtype || 'float64';

	// Create an output ndarray:
	out = empty( sh, options );

	// Perform operation:
	return base( out, options );
}


// EXPORTS //

module.exports = zeroTo;

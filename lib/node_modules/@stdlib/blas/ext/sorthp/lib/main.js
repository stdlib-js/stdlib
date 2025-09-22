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

/* eslint-disable max-len */

'use strict';

// MODULES //

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isRealFloatingDataType = require( '@stdlib/ndarray/base/assert/is-real-floating-point-data-type' );
var isSignedIntegerDataType = require( '@stdlib/ndarray/base/assert/is-signed-integer-data-type' );
var broadcastScalar = require( '@stdlib/ndarray/base/broadcast-scalar' );
var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var format = require( '@stdlib/string/format' );
var nonCoreShape = require( './non_core_shape.js' );
var base = require( './base.js' );


// FUNCTIONS //

/**
* Returns a boolean indicating if a value is a string literal specifying ascending sort order.
*
* @private
* @param {*} value - input value
* @returns {boolean} boolean result
*/
function isAscending( value ) {
	return ( value === 'asc' || value === 'ascending' );
}

/**
* Returns a boolean indicating if a value is a string literal specifying descending sort order.
*
* @private
* @param {*} value - input value
* @returns {boolean} boolean result
*/
function isDescending( value ) {
	return ( value === 'desc' || value === 'descending' );
}

/**
* Converts a string literal to a numeric sort order value.
*
* @private
* @param {string} value - input value
* @throws {TypeError} must provide a supported string
* @returns {number} sort order
*/
function string2order( value ) {
	if ( isAscending( value ) ) {
		return 1;
	}
	if ( isDescending( value ) ) {
		return -1;
	}
	throw new TypeError( format( 'invalid argument. Second argument must be a valid sort order. Value: `%s`.', value ) );
}

/**
* Normalize a numeric sort order value.
*
* ## Notes
*
* -   Normalizing numeric sort order values to canonical values `-1`, `+1`, and `0` ensures that we can avoid truncation rounding errors when casting a provided sort order to the data type of the input ndarray.
*
* @private
* @param {number} value - input value
* @returns {number} normalized value
*/
function normalizeOrder( value ) {
	if ( value < 0 ) {
		return -1;
	}
	if ( value > 0 ) {
		return 1;
	}
	return value;
}


// MAIN //

/**
* Sorts an input ndarray along one or more ndarray dimensions using heapsort.
*
* @param {ndarrayLike} x - input ndarray
* @param {(ndarrayLike|number|string)} [sortOrder=1.0] - sort order
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object
* @throws {TypeError} sort order argument must be either an ndarray-like object, a numeric value, or a supported string
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} output ndarray
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create a data buffer:
* var xbuf = new Float64Array( [ 1.0, 2.0, -3.0, 4.0, -5.0, 6.0 ] );
*
* // Define the shape of the input array:
* var sh = [ 3, 1, 2 ];
*
* // Define the array strides:
* var sx = [ 2, 2, 1 ];
*
* // Define the index offset:
* var ox = 0;
*
* // Create an input ndarray:
* var x = new ndarray( 'float64', xbuf, sh, sx, ox, 'row-major' );
*
* // Perform operation:
* var out = sorthp( x );
* // returns <ndarray>
*
* var arr = ndarray2array( out );
* // returns [ [ [ -5.0, -3.0 ] ], [ [ 1.0, 2.0 ] ], [ [ 4.0, 6.0 ] ] ]
*/
function sorthp( x ) {
	var nargs;
	var isStr;
	var opts;
	var ord;
	var dt;
	var sh;
	var o;

	nargs = arguments.length;

	// Resolve input ndarray meta data:
	dt = getDType( x );
	if ( !isRealFloatingDataType( dt ) && !isSignedIntegerDataType( dt ) ) {
		// Fallback to "generic" only if we cannot safely cast `-1` to the data type of the input ndarray:
		dt = 'generic';
	}
	ord = getOrder( x );

	// Case: sorthp( x )
	if ( nargs < 2 ) {
		return base( x, broadcastScalar( 1, dt, [], ord ) );
	}
	o = arguments[ 1 ];

	// Case: sorthp( x, ??? )
	if ( nargs === 2 ) {
		// Case: sorthp( x, sortOrder_scalar || sortOrder_string )
		isStr = isString( o );
		if ( isStr || isNumber( o ) ) {
			return base( x, broadcastScalar( ( isStr ) ? string2order( o ) : normalizeOrder( o ), dt, [], ord ) );
		}
		// Case: sorthp( x, sortOrder_ndarray )
		if ( isndarrayLike( o ) ) {
			// As the operation is performed across all dimensions, `o` is assumed to be a zero-dimensional ndarray...
			return base( x, o );
		}
		// Case: sorthp( x, opts )
		opts = o;
		o = 1;

		// Intentionally fall through...
	}
	// Case: sorthp( x, sortOrder, opts )
	else { // nargs > 2
		opts = arguments[ 2 ];
	}
	// Case: sorthp( x, sortOrder_scalar || sortOrder_string, opts )
	isStr = isString( o );
	if ( isStr || isNumber( o ) ) {
		if ( hasOwnProp( opts, 'dims' ) ) {
			sh = nonCoreShape( getShape( x ), opts.dims );
		} else {
			sh = [];
		}
		o = broadcastScalar( ( isStr ) ? string2order( o ) : normalizeOrder( o ), dt, sh, getOrder( x ) );
	}
	// Case: sorthp( x, sortOrder_ndarray, opts )
	else if ( isndarrayLike( o ) ) {
		// When not provided `dims`, the operation is performed across all dimensions and `o` is assumed to be a zero-dimensional ndarray; when `dims` is provided, we need to broadcast `o` to match the shape of the non-core dimensions...
		if ( hasOwnProp( opts, 'dims' ) ) {
			o = maybeBroadcastArray( o, nonCoreShape( getShape( x ), opts.dims ) );
		}
	} else {
		throw new TypeError( format( 'invalid argument. Second argument must be either an ndarray, a numeric scalar value, or a supported string. Value: `%s`.', o ) );
	}
	return base( x, o, opts );
}


// EXPORTS //

module.exports = sorthp;

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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isNonNegativeIntegerArray = require( '@stdlib/assert/is-nonnegative-integer-array' ).primitives;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isFunction = require( '@stdlib/assert/is-function' );
var isOrder = require( '@stdlib/ndarray/base/assert/is-order' );
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var isBufferLengthCompatible = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible' );
var parent = require( '@stdlib/ndarray/base/ctor' ); // eslint-disable-line stdlib/no-redeclare
var inherit = require( '@stdlib/utils/inherit' );
var defaults = require( './defaults.json' );
var iget = require( './iget.js' );
var iset = require( './iset.js' );
var get = require( './get.js' );
var set = require( './set.js' );
var copy = require( './copy_array.js' );
var validate = require( './validate.js' );


// VARIABLES //

/*
* See the following references:
*
* -  https://stackoverflow.com/questions/22747068/is-there-a-max-number-of-arguments-javascript-functions-can-accept
* -  https://bugs.webkit.org/show_bug.cgi?id=80797
* -  https://github.com/numpy/numpy/issues/5744
*
* Note that the maximum number of function arguments can vary from engine to engine. Here, we choose something of a lowest common denominator which may **not** be valid everywhere.
*/
var MAX_DIMS = 32767|0;


// MAIN //

/**
* ndarray constructor.
*
* @constructor
* @param {string} dtype - data type
* @param {Collection} buffer - data buffer
* @param {NonNegativeIntegerArray} shape - array shape
* @param {IntegerArray} strides - array strides
* @param {NonNegativeInteger} offset - index offset
* @param {string} order - specifies whether an array is row-major (C-style) or column-major (Fortran-style)
* @param {Options} [options] - function options
* @param {string} [options.mode="throw"] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
* @throws {TypeError} `dtype` argument must be a supported ndarray data type
* @throws {TypeError} `buffer` argument must be an array-like object, typed-array-like, or a Buffer
* @throws {TypeError} `buffer` argument `get` and `set` properties must be functions
* @throws {TypeError} `shape` argument must be an array-like object containing nonnegative integers
* @throws {Error} `shape` argument length must equal the number of dimensions
* @throws {TypeError} `strides` argument must be an array-like object containing integers
* @throws {Error} `strides` argument length must equal the number of dimensions (except for zero-dimensional arrays; in which case, the `strides` argument length must be equal to `1`)
* @throws {Error} for zero-dimensional ndarrays, the `strides` argument must contain a single element equal to `0`
* @throws {TypeError} `offset` argument must be a nonnegative integer
* @throws {TypeError} `order` argument must be a supported ndarray order
* @throws {Error} `buffer` argument must be compatible with specified meta data
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {RangeError} too many dimensions
* @returns {ndarray} ndarray instance
*
* @example
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*/
function ndarray( dtype, buffer, shape, strides, offset, order, options ) {
	var ndims;
	var opts;
	var err;
	var sh;
	var st;

	if ( !(this instanceof ndarray) ) {
		if ( arguments.length < 7 ) {
			return new ndarray( dtype, buffer, shape, strides, offset, order );
		}
		return new ndarray( dtype, buffer, shape, strides, offset, order, options ); // eslint-disable-line max-len
	}
	if ( !isDataType( dtype ) ) {
		throw new TypeError( 'invalid argument. `dtype` argument must be a supported ndarray data type. Value: `' + dtype + '`.' );
	}
	if ( !isCollection( buffer ) ) {
		throw new TypeError( 'invalid argument. `buffer` argument must be an array-like object, typed-array-like, or a Buffer. Value: `' + buffer + '`.' );
	} else if ( buffer.get && buffer.set && ( !isFunction( buffer.get ) || !isFunction( buffer.set ) ) ) { // eslint-disable-line max-len
		throw new TypeError( 'invalid argument. `buffer` argument `get` and `set` properties must be functions. Value: `' + buffer + '`.' );
	}
	if ( !isNonNegativeIntegerArray( shape ) ) {
		if ( !isCollection( shape) || shape.length > 0 ) {
			throw new TypeError( 'invalid argument. `shape` argument must be an array-like object containing nonnegative integers. Value: `' + shape + '`.' );
		}
	}
	ndims = shape.length;
	if ( ndims > MAX_DIMS ) {
		throw new RangeError( 'invalid argument. Number of dimensions must not exceed ' + MAX_DIMS + ' due to stack limits. Value: `' + ndims + '`.' );
	}
	if ( !isIntegerArray( strides ) ) {
		throw new TypeError( 'invalid argument. `strides` argument must be an array-like object containing integers. Value: `' + strides + '`.' );
	}
	if ( ndims > 0 ) {
		if ( strides.length !== ndims ) {
			throw new RangeError( 'invalid argument. `strides` argument length must match the number of dimensions. Expected number of dimensions: ' + ndims + '. Strides length: ' + strides.length + '.' );
		}
	} else if ( strides.length !== 1 ) {
		throw new RangeError( 'invalid argument. `strides` length must be equal to 1 when creating a zero-dimensional ndarray.' );
	} else if ( strides[ 0 ] !== 0 ) {
		throw new RangeError( 'invalid argument. `strides` argument must contain a single element equal to `0`. Value: `' + strides[ 0 ] + '`.' );
	}
	if ( !isNonNegativeInteger( offset ) ) {
		throw new TypeError( 'invalid argument. `offset` argument must be a nonnegative integer. Value: `' + offset + '`.' );
	}
	if ( !isOrder( order ) ) {
		throw new TypeError( 'invalid argument. `order` argument must be a supported order. Value: `' + order + '`.' );
	}
	if ( !isBufferLengthCompatible( buffer.length, shape, strides, offset ) ) {
		throw new Error( 'invalid arguments. The input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.' );
	}
	opts = {};
	opts.mode = defaults.mode;
	if ( arguments.length > 6 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	this._mode = opts.mode;
	if ( opts.submode === void 0 ) {
		opts.submode = [ this._mode ];
	}
	this._submode = opts.submode;

	// Copy `shape` and `strides` to prevent external mutation:
	sh = copy( shape, ndims );
	st = copy( strides, ndims || 1 );

	// Call the parent constructor:
	parent.call( this, dtype, buffer, sh, st, offset, order );

	return this;

	/* eslint-enable no-invalid-this */
}

// Inherit from the parent constructor:
inherit( ndarray, parent );

/**
* Constructor name.
*
* @name name
* @memberof ndarray
* @type {string}
* @default 'ndarray'
*
* @example
* var str = ndarray.name;
* // returns 'ndarray'
*/
setReadOnly( ndarray, 'name', 'ndarray' );

/**
* Returns an array element.
*
* ## Notes
*
* -   The number of indices should **equal** the number of dimensions. Accordingly, for zero-dimensional arrays, no indices should be provided.
*
* @name get
* @memberof ndarray.prototype
* @type {Function}
* @param {...integer} [idx] - indices
* @returns {*} array element
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.get( 1, 1 );
* // returns 4
*/
setReadOnly( ndarray.prototype, 'get', get );

/**
* Returns an array element located at a specified linear index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the input argument is ignored and, for clarity, should not be provided.
*
* @name iget
* @memberof ndarray.prototype
* @type {Function}
* @param {integer} [idx] - linear index
* @returns {*} array element
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.iget( 3 );
* // returns 4
*/
setReadOnly( ndarray.prototype, 'iget', iget );

/**
* Sets an array element.
*
* ## Notes
*
* -   The number of indices should **equal** the number of dimensions. Accordingly, for zero-dimensional arrays, no indices should be provided.
*
* @name set
* @memberof ndarray.prototype
* @type {Function}
* @param {...integer} [idx] - indices
* @param {*} v - value to set
* @returns {ndarray} ndarray instance
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.get( 1, 1 );
* // returns 4
*
* x.set( 1, 1, 10 );
*
* var b = x.data;
* // returns [ 1, 2, 3, 10, 5, 6 ]
*
* v = x.get( 1, 1 );
* // returns 10
*/
setReadOnly( ndarray.prototype, 'set', set );

/**
* Sets an array element located at a specified linear index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the first, and only, argument should be the value to set.
*
* @name iset
* @memberof ndarray.prototype
* @type {Function}
* @param {integer} [idx] - linear index
* @param {*} v - value to set
* @returns {ndarray} ndarray instance
*
* @example
* var buffer = [ 1, 2, 3, 4, 5, 6 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
*
* var v = x.iget( 3 );
* // returns 4
*
* x.iset( 3, 10 );
*
* var b = x.data;
* // returns [ 1, 2, 3, 10, 5, 6 ]
*
* v = x.iget( 3 );
* // returns 10
*/
setReadOnly( ndarray.prototype, 'iset', iset );


// EXPORTS //

module.exports = ndarray;

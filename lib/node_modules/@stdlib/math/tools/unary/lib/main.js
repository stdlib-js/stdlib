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

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isCollection = require( '@stdlib/assert/is-collection' );
var dtype = require( '@stdlib/ndarray/base/buffer-dtype' );
var buffer = require( '@stdlib/ndarray/base/buffer' );
var broadcast = require( '@stdlib/ndarray/base/broadcast-array' );
var ndarrayfcn = require( './ndarray.js' );
var odtype = require( './resolve_output_dtype.js' );
var defaults = require( './defaults.json' );
var validateTable = require( './validate_table.js' );
var validateOptions = require( './validate_options.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a function which dispatches to specified functions based on input argument types.
*
* @param {Object} table - resolution table object
* @param {(Function|null)} [table.number] - function to invoke upon receiving a number
* @param {(Function|null)} [table.complex] - function to invoke upon receiving a complex number
* @param {(Function|null)} [table.array] - function to invoke upon receiving an array-like object
* @param {(Function|null)} [table.ndarray] - function to invoke upon receiving an ndarray-like object
* @param {Options} [options] - options
* @param {string} [options.output_dtype_policy='float'] - policy for determining the output array data type
* @throws {TypeError} first argument must be an object
* @throws {TypeError} first argument must have valid table fields
* @throws {Error} each table field value must be either a function or `null`
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} dispatch function
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var strided = require( '@stdlib/math/strided/special/abs' );
* var dispatcher = require( '@stdlib/ndarray/dispatch' );
* var unary = require( '@stdlib/ndarray/base/unary' );
* var Float64Array = require( '@stdlib/array/float64' );
*
* var types = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
* var data = [
*     base,
*     base,
*     base
* ];
* var nd = dispatcher( unary, types, data, 2, 1, 1 );
*
* var table = {
*     'number': base,
*     'complex': null,
*     'array': strided,
*     'ndarray': nd
* };
*
* var abs = dispatch( table, {
*     'output_dtype_policy': 'same'
* });
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
*
* var y = abs( x );
* // returns <Float64Array>[ 1.0, 2.0, 3.0 ]
*/
function dispatch( table, options ) {
	var OPTS;
	var err;
	var fcn;
	var t;

	t = {
		'number': null,
		'complex': null,
		'array': null,
		'ndarray': null
	};
	err = validateTable( t, table );
	if ( err ) {
		throw err;
	}
	OPTS = {
		'policy': defaults.output_dtype_policy
	};
	if ( arguments.length > 1 ) {
		err = validateOptions( OPTS, options );
		if ( err ) {
			throw err;
		}
	}
	fcn = dispatcher;
	setReadOnly( fcn, 'assign', assign );
	return fcn;

	/**
	* Function interface which performs dispatch.
	*
	* @private
	* @param {(ndarray|Collection|number|Complex)} x - input value
	* @param {Options} [options] - options
	* @param {string} [options.dtype] - output array data type
	* @param {string} [options.order] - output array order (row-major or column-major)
	* @throws {TypeError} first argument must be a supported data type
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {(ndarray|Collection|number|Complex)} results
	*/
	function dispatcher( x, options ) {
		var xdtype;
		var ydtype;
		var opts;
		var err;
		var y;
		if ( isNumber( x ) ) {
			if ( t.number ) {
				return t.number( x );
			}
			throw new TypeError( 'invalid argument. Providing a number is not supported.' );
		}
		if ( isComplexLike( x ) ) {
			if ( t.complex ) {
				return t.complex( x );
			}
			throw new TypeError( 'invalid argument. Providing a complex number is not supported.' );
		}
		opts = {};
		if ( arguments.length > 1 ) {
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
		}
		if ( isndarrayLike( x ) ) {
			if ( t.ndarray === null ) {
				throw new TypeError( 'invalid argument. Providing an ndarray is not supported.' );
			}
			ydtype = opts.dtype || odtype( x.dtype, OPTS.policy );
			return ndarrayfcn( t.ndarray, x, ydtype, opts.order || x.order );
		}
		if ( isCollection( x ) ) {
			if ( t.array === null ) {
				throw new TypeError( 'invalid argument. Providing an array-like object is not supported.' );
			}
			xdtype = dtype( x ) || 'generic';
			ydtype = opts.dtype || odtype( xdtype, OPTS.policy );
			y = buffer( ydtype, x.length );

			// FIXME: need to supply dtype enum argument for each array argument...
			t.array( x.length, x, 1, y, 1 );
			return y;
		}
		throw new TypeError( 'invalid argument. Must provide an argument having a supported data type. Value: `' + x + '`.' );
	}

	/**
	* Function interface which performs dispatch and assigns results to a provided output array.
	*
	* @private
	* @param {(ndarray|Collection)} x - input array
	* @param {(ndarray|Collection)} y - output array
	* @throws {TypeError} first argument must be a supported data type
	* @throws {TypeError} second argument must be a supported data type
	* @throws {TypeError} first and second argument must be the same "kind" (i.e., either both ndarrays or both collections)
	* @throws {RangeError} output array must have sufficient elements
	* @throws {Error} unable to broadcast the input array against the output array
	* @returns {(ndarray|Collection)} output array
	*/
	function assign( x, y ) {
		var xsh;
		var ysh;
		var i;
		if ( isndarrayLike( x ) ) {
			if ( isndarrayLike( y ) ) {
				xsh = x.shape;
				ysh = y.shape;

				// Check whether we need to broadcast `x`...
				if ( xsh.length === ysh.length ) {
					for ( i = 0; i < xsh.length; i++ ) {
						// Check whether dimensions match...
						if ( xsh[ i ] !== ysh[ i ] ) {
							// We found a mismatched dimension; delegate to `broadcast` to ensure that `x` is broadcast compatible with the output array shape...
							x = broadcast( x, ysh );
							break;
						}
					}
				} else {
					// If we are provided arrays with different ranks (i.e., number of dimensions), assume we need to broadcast, delegating to `broadcast` to ensure that `x` is broadcast compatible with the output array shape...
					x = broadcast( x, ysh );
				}
				t.ndarray( x, y );
				return y;
			}
			throw new TypeError( 'invalid argument. If the first argument is an ndarray, the second argument must be an ndarray.' );
		}
		if ( isCollection( x ) ) {
			if ( isCollection( y ) ) {
				if ( y.length !== x.length ) {
					throw new RangeError( 'invalid argument. Output array must have the same number of elements (i.e., length) as the input array.' );
				}
				// FIXME: need to supply dtype enum argument for each array argument...
				t.array( x.length, x, 1, y, 1 );
				return y;
			}
			throw new TypeError( 'invalid argument. If the first argument is an array-like object, the second argument must be an array-like object.' );
		}
		if ( isNumber( x ) ) {
			throw new TypeError( 'invalid argument. Providing a number is not supported. Consider providing a zero-dimensional ndarray containing the numeric value.' );
		}
		if ( isComplexLike( x ) ) {
			throw new TypeError( 'invalid argument. Providing a complex number is not supported. Consider providing a zero-dimensional ndarray containing the complex number value.' );
		}
		throw new TypeError( 'invalid argument. Must provide an argument having a supported data type. Value: `' + x + '`.' );
	}
}


// EXPORTS //

module.exports = dispatch;

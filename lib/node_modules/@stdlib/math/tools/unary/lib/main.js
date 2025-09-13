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
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var isFunction = require( '@stdlib/assert/is-function' );
var isObject = require( '@stdlib/assert/is-object' );
var isCollection = require( '@stdlib/assert/is-collection' );
var isOutputDataTypePolicy = require( '@stdlib/ndarray/base/assert/is-output-data-type-policy' );
var isInputCastingPolicy = require( '@stdlib/ndarray/base/assert/is-input-casting-policy' );
var isDataType = require( '@stdlib/ndarray/base/assert/is-data-type' );
var contains = require( '@stdlib/array/base/assert/contains' );
var unaryOutputDataType = require( '@stdlib/ndarray/base/unary-output-dtype' );
var unaryInputCastingDataType = require( '@stdlib/ndarray/base/unary-input-casting-dtype' );
var baseAssign = require( '@stdlib/ndarray/base/assign' );
var baseEmpty = require( '@stdlib/ndarray/base/empty' );
var maybeBroadcastArray = require( '@stdlib/ndarray/maybe-broadcast-array' );
var getShape = require( '@stdlib/ndarray/shape' );
var getOrder = require( '@stdlib/ndarray/order' );
var getDType = require( '@stdlib/ndarray/dtype' );
var empty = require( '@stdlib/ndarray/empty' );
var everyBy = require( '@stdlib/array/base/every-by' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a function which performs element-wise computation.
*
* @param {Function} fcn - function which applies a unary function to each element in an ndarray
* @param {ArrayLikeObject<StringArray>} idtypes - list containing lists of supported input data types for each ndarray argument
* @param {StringArray} odtypes - list of supported output data types
* @param {Object} policies - dispatch policies
* @param {string} policies.output - output data type policy
* @param {string} policies.casting - input ndarray casting policy
* @throws {TypeError} first argument must be a function
* @throws {TypeError} second argument must be an array containing arrays of supported data types
* @throws {TypeError} third argument must be an array of supported data types
* @throws {TypeError} fourth argument must be an object having supported policies
* @returns {Function} function which performs element-wise computation
*
* @example
* var base = require( '@stdlib/math/base/special/abs' );
* var dispatch = require( '@stdlib/ndarray/dispatch' );
* var unary = require( '@stdlib/ndarray/base/unary' );
* var ndarray2array = require( '@stdlib/ndarray/to-array' );
* var array = require( '@stdlib/ndarray/array' );
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
* var dispatcher = dispatch( unary, types, data, 2, 1, 1 );
*
* var idt = [ 'float64', 'float32', 'generic' ];
* var odt = idt;
*
* var policies = {
*     'output': 'real_and_generic',
*     'casting': 'none'
* };
* var abs = factory( dispatcher, [ idt ], odt, policies );
*
* var x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
* // returns <ndarray>
*
* var y = abs( x );
* // returns <ndarray>
*
* var arr = ndarray2array( y );
* // returns [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*/
function factory( fcn, idtypes, odtypes, policies ) {
	var POLICIES;
	var dt;
	var i;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a function. Value: `%s`.', fcn ) );
	}
	if ( !isCollection( idtypes ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be an array-like object. Value: `%s`.', idtypes ) );
	}
	for ( i = 0; i < idtypes.length; i++ ) {
		dt = idtypes[ i ];
		if (
			!isCollection( dt ) ||
			dt.length < 1 ||
			!everyBy( dt, isDataType )
		) {
			throw new TypeError( format( 'invalid argument. Second argument must contain arrays of data types. Value: `%s`.', idtypes ) );
		}
	}
	if (
		!isCollection( odtypes ) ||
		odtypes.length < 1 ||
		!everyBy( odtypes, isDataType )
	) {
		throw new TypeError( format( 'invalid argument. Third argument must be an array of data types. Value: `%s`.', odtypes ) );
	}
	if ( !isObject( policies ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object. Value: `%s`.', policies ) );
	}
	if ( !isOutputDataTypePolicy( policies.output ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object having a supported output data type policy. Value: `%s`.', policies.output ) );
	}
	if ( !isInputCastingPolicy( policies.casting ) ) {
		throw new TypeError( format( 'invalid argument. Fourth argument must be an object having a supported casting policy. Value: `%s`.', policies.casting ) );
	}
	POLICIES = {
		'output': policies.output,
		'casting': policies.casting
	};
	setReadOnly( unary, 'assign', assign );
	return unary;

	/**
	* Performs element-wise computation.
	*
	* @private
	* @param {ndarray} x - input array
	* @param {Options} [options] - options
	* @param {string} [options.dtype] - output array data type
	* @param {string} [options.order] - output array order
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} first argument must have a supported data type
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ndarray} output array
	*/
	function unary( x ) {
		var opts;
		var err;
		var xsh;
		var ord;
		var xdt;
		var ydt;
		var tmp;
		var dt;
		var y;

		if ( !isndarrayLike( x ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
		}
		xdt = getDType( x );
		if ( !contains( idtypes[ 0 ], xdt ) ) {
			throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( idtypes[ 0 ], '", "' ), xdt ) );
		}
		opts = {};
		if ( arguments.length > 1 ) {
			err = validate( opts, odtypes, arguments[ 1 ] );
			if ( err ) {
				throw err;
			}
		}
		xsh = getShape( x );
		ord = getOrder( x );

		// Initialize an output array:
		ydt = opts.dtype || unaryOutputDataType( xdt, POLICIES.output );
		y = empty( xsh, {
			'dtype': ydt,
			'order': opts.order || ord
		});

		// Determine whether we need to cast the input ndarray...
		dt = unaryInputCastingDataType( xdt, ydt, POLICIES.casting );
		if ( xdt !== dt ) {
			// TODO: replace the following logic with a call to `ndarray/base/(?maybe-)(cast|convert|copy)` or similar utility
			tmp = baseEmpty( dt, xsh, ord );
			baseAssign( [ x, tmp ] );
			x = tmp;
		}
		fcn( x, y );
		return y;
	}

	/**
	* Performs element-wise computation and assigns results to a provided output ndarray.
	*
	* @private
	* @param {ndarray} x - input array
	* @param {ndarray} y - output array
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} first argument must have a supported data type
	* @throws {TypeError} second argument must be an ndarray
	* @throws {Error} unable to broadcast the input array against the output array
	* @returns {ndarray} output array
	*/
	function assign( x, y ) {
		var xdt;
		var tmp;
		var dt;

		if ( !isndarrayLike( x ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
		}
		if ( !isndarrayLike( y ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an ndarray. Value: `%s`.', y ) );
		}
		// Validate the input ndarray data type in order to maintain similar behavior to above...
		xdt = getDType( x );
		if ( !contains( idtypes[ 0 ], xdt ) ) {
			throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( idtypes[ 0 ], '", "' ), xdt ) );
		}
		// Determine whether we need to cast the input ndarray...
		dt = unaryInputCastingDataType( xdt, getDType( y ), POLICIES.casting );
		if ( xdt !== dt ) {
			// TODO: replace the following logic with a call to `ndarray/base/(?maybe-)(cast|convert|copy)` or similar utility
			tmp = baseEmpty( dt, getShape( x ), getOrder( x ) );
			baseAssign( [ x, tmp ] );
			x = tmp;
		}
		fcn( maybeBroadcastArray( x, getShape( y ) ), y );
		return y;
	}
}


// EXPORTS //

module.exports = factory;

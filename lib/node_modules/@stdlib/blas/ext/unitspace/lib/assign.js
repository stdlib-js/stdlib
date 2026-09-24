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
var isEmptyCollection = require( '@stdlib/assert/is-empty-collection' );
var isIntegerArray = require( '@stdlib/assert/is-integer-array' ).primitives;
var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isComplexLike = require( '@stdlib/assert/is-complex-like' );
var isndarrayLike = require( '@stdlib/assert/is-ndarray-like' );
var nonCoreShape = require( '@stdlib/ndarray/base/complement-shape' );
var resolveStr = require( '@stdlib/ndarray/base/dtype-resolve-str' );
var getDType = require( '@stdlib/ndarray/dtype' );
var getOrder = require( '@stdlib/ndarray/order' );
var getShape = require( '@stdlib/ndarray/shape' );
var contains = require( '@stdlib/array/base/assert/contains' );
var join = require( '@stdlib/array/base/join' );
var format = require( '@stdlib/string/format' );
var DTYPES = require( './dtypes.js' );
var ENUMS = require( './type_enums.js' );
var resolveDataType = require( './resolve_data_type.js' );
var normalizeArgument = require( './normalize_argument.js' );
var defaults = require( './defaults.js' );
var base = require( './base.js' );


// MAIN //

/**
* Fills an ndarray with linearly spaced numeric elements which increment by 1 starting from a specified value along one or more ndarray dimensions.
*
* @param {ndarrayLike} x - input ndarray
* @param {(number|ComplexLike|ndarrayLike)} start - starting value
* @param {Options} [options] - function options
* @param {IntegerArray} [options.dims=[-1]] - list of dimensions over which to perform operation
* @throws {TypeError} first argument must be an ndarray-like object having at least one dimension
* @throws {TypeError} first argument must have a supported data type
* @throws {TypeError} second argument must be either a number, complex number, or an ndarray-like object
* @throws {TypeError} second argument must have a supported data type
* @throws {TypeError} options argument must be an object
* @throws {RangeError} dimension indices must not exceed input ndarray bounds
* @throws {RangeError} number of dimension indices must not exceed the number of input ndarray dimensions
* @throws {Error} must provide valid options
* @returns {ndarray} input ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
*
* var x = zeros( [ 4 ] );
* // returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]
*
* var out = assign( x, 1.0 );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( out === x );
* // returns true
*/
function assign( x, start ) {
	var options;
	var dtypes;
	var type;
	var opts;
	var ncsh;
	var arg;
	var sh;
	var dt;

	if ( !isndarrayLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an ndarray. Value: `%s`.', x ) );
	}
	sh = getShape( x );
	if ( sh.length < 1 ) {
		throw new TypeError( 'invalid argument. First argument must be an ndarray having at least one dimension.' );
	}
	dt = resolveStr( getDType( x ) );
	if ( !contains( DTYPES.odtypes, dt ) ) {
		throw new TypeError( format( 'invalid argument. First argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.odtypes, '", "' ), dt ) );
	}
	if ( isNumber( start ) ) {
		type = ENUMS.NUMBER;
	} else if ( isComplexLike( start ) ) {
		type = ENUMS.COMPLEX;
	} else if ( isndarrayLike( start ) ) {
		type = ENUMS.NDARRAY;
		dt = resolveStr( getDType( start ) );
		if ( !contains( DTYPES.idtypes0, dt ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must have one of the following data types: "%s". Data type: `%s`.', join( DTYPES.idtypes0, '", "' ), dt ) );
		}
	} else {
		throw new TypeError( format( 'invalid argument. Second argument must be either a number, complex number, or an ndarray. Value: `%s`.', start ) );
	}
	options = defaults();

	if ( arguments.length > 2 ) {
		opts = arguments[ 2 ];
		if ( !isPlainObject( opts ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', opts ) );
		}
		if ( hasOwnProp( opts, 'dims' ) ) {
			if ( !isIntegerArray( opts.dims ) && !isEmptyCollection( opts.dims ) ) { // eslint-disable-line max-len
				throw new TypeError( format( 'invalid option. `%s` option must be an array of integers. Option: `%s`.', 'dims', opts.dims ) );
			}
			options.dims = opts.dims;
		}
	}
	// Resolve argument data types:
	dtypes = resolveDataType( start, type );
	dtypes[ 1 ] = resolveStr( getDType( x ) );

	// Resolve the complement of the operation dimensions:
	ncsh = nonCoreShape( sh, options.dims );

	// Normalize the provided `start` argument to an ndarray:
	arg = normalizeArgument( start, type, dtypes, ncsh, getOrder( x ) );

	// Perform operation:
	return base( x, arg, options );
}


// EXPORTS //

module.exports = assign;
